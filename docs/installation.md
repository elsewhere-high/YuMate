# 安装与启动

## 环境

- Node.js 24.20.0，pnpm 9.15.0，Rust 1.97.0（rustfmt、clippy），Xcode 命令行工具。
- Conda 环境 yumate-vision：Python 3.12、PostgreSQL 16、pgvector、Meson、Ninja。
- Docker Desktop：本地入口只启动名为 yumate-redis 的 Redis 容器。
- FFmpeg / FFprobe：用于媒体解析和模拟语音。本机通过 Conda 安装；新机器需安装支持 HEIC 的 FFmpeg 7 或更新版本，或设置 FFMPEG_PATH 和 FFPROBE_PATH。
- .tools 保存本机私有工具链，不入 Git；移动项目后入口会按新目录解析。

## 在新机器配置

安装上述 Node、Rust 和 Docker 后，运行：

```bash
conda create -n yumate-vision -c conda-forge python=3.12 postgresql=16 pgvector 'ffmpeg>=7' pip -y
conda run -n yumate-vision python -m pip install ./enterprise/backend/vision-trainer pytest httpx build meson ninja
corepack pnpm install --frozen-lockfile
corepack pnpm --filter @yumate/db db:generate
cp .env.example .env
```

在 .env 填入独立随机值：YUMATE_JWT_SECRET、YUMATE_CONFIG_MASTER_KEY、YUMATE_PII_MASTER_KEY、YUMATE_DEV_PASSWORD。前三项各用至少 32 字节随机数；不要提交此文件。演示时设置 YUMATE_LLM=fake、YUMATE_ASR=fake、ASR_ENGINE=fake、YUMATE_TTS=off、YUMATE_TOOLS=mock。

首次初始化本地数据库：

```bash
mkdir -p var
conda run -n yumate-vision initdb -D "$PWD/var/postgres" -U yumate --auth-local=trust --auth-host=trust
printf "timezone = 'UTC'\n" >> var/postgres/postgresql.conf
conda run -n yumate-vision pg_ctl -D "$PWD/var/postgres" -l "$PWD/var/postgres/server.log" -o '-p 55433 -h 127.0.0.1' start
conda run -n yumate-vision createdb -h 127.0.0.1 -p 55433 -U yumate yumate
conda run -n yumate-vision psql -h 127.0.0.1 -p 55433 -U yumate -d yumate -c 'CREATE EXTENSION IF NOT EXISTS vector'
DATABASE_URL=postgresql://yumate:yumate@localhost:55433/yumate ./yumate --filter @yumate/db db:migrate:deploy
./yumate db:test:setup
./yumate build
./yumate start
```

数据库只监听 127.0.0.1，开发模式的 trust 认证不适用于生产部署。测试只使用 yumate_test。数据库时区必须为 UTC，以与 Prisma 的时间存储约定一致。

## 本地服务

PostgreSQL 55433、Redis 56379、S3 59000、gateway 8790、runtime 8791、worker 8796、视觉训练 8799。模拟服务使用 8792、8793、8794、8797、8798；三端使用 1430、1420、5174。

本地对象存储由 S3rver 提供，数据保存在 var/s3，仅监听回环地址，仍校验签名。MinIO/Docker 生产编排配置保留在 infra/；按实际部署配置 S3_ENDPOINT 等项。不得将本地演示凭据用于公网。

停止应用：`./yumate stop`。需要完整停机时，再运行：

```bash
conda run -n yumate-vision pg_ctl -D "$PWD/var/postgres" stop
docker compose -f infra/docker-compose.yml stop redis
```

## 外部服务

在控制台或 .env 配置 DeepSeek/兼容模型、地图密钥、RAGFlow、语音及内容审核服务。密钥只在服务端；不下发到客户端。完整 ACP 模式需配置 YUMATE_AGENT_RUNTIME=acp 和可用模型凭据。iOS 打包需要 Xcode、目标 SDK 和使用者自己的签名身份。
