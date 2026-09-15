# 驭伴 YuMate

**每一程，都有照应。**

驭伴将用车咨询、行程规划、座舱陪伴、车辆档案与售后辅助整合在车机、手机和运营控制台中。当前项目版本为 0.1.0。

## 本机启动

本目录已准备独立工具链、Conda 环境和演示配置。Docker Desktop 需要运行，以提供 Redis。

```bash
cd /Users/ustinian/Desktop/sea/YuMate
./yumate start
```

| 入口 | 地址 |
| --- | --- |
| 运营控制台 | http://localhost:5174 |
| 车机预览 | http://localhost:1430 |
| 手机预览 | http://localhost:1420 |
| 网关 | http://localhost:8790/healthz |

控制台开发登录可点击「填入管理员」再登录。原生端演示账号是 demo，口令取本地 .env 中 YUMATE_DEV_PASSWORD。运行 `./yumate dev:start cockpit-app mobile-app` 打开已构建的 macOS 原生窗口。

```bash
./yumate status
./yumate stop
./yumate typecheck
./yumate test
```

`stop` 停止应用服务与窗口，保留 PostgreSQL 和 Redis，避免中断数据库事务。完整停机见安装文档。

## 能力与边界

- 车机与手机：对话、行程、导览、车辆档案、成员、设置、定位权限与语音入口。
- 后端：鉴权、会话与历史、附件上传、工具权限门、输入过滤、输出脱敏、审计和用量。
- 控制台：系统状态、会话、用户车辆、工作流、配置、评测、训练与财务视图。
- 默认使用 Fake 模型和 Mock 工具，不需要云端密钥；这验证本地链路，不代表真实模型质量。
- 真实地图、知识库、云端语音和完整 ACP 模型调用需要配置对应服务。浏览器预览不能替代 Tauri 的设备权限、钥匙串、原生语音与车辆档案通道。

## 工程

Node.js 24.20.0 / pnpm 9.15.0；TypeScript、React、Rust 1.97.0、Tauri 2；Python 3.12 使用 Conda。详细内容见 [安装与启动](docs/installation.md)、[开发说明](docs/development.md)、[HTTP 接口](docs/api.md)、[架构](docs/engineering.md) 和 [验证记录](docs/verification.md)。

## 许可

Copyright (C) 2026 Ustinian5。项目采用 [AGPL-3.0-only](LICENSE)。第三方依赖、组件许可证及数据来源另见 [THIRD-PARTY.md](THIRD-PARTY.md) 和各数据目录的来源说明。

## 界面

<img src="docs/assets/yumate-mobile.png" alt="驭伴手机端" width="280"> <img src="docs/assets/yumate-mobile-login.png" alt="驭伴登录页" width="280">
