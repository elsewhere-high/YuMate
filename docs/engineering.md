# 工程说明

## 结构

- clients/cockpit、clients/mobile：React 界面和 Tauri 原生入口。
- enterprise/console：运营控制台。
- enterprise/backend：网关、编排器、独立 Agent、worker 和视觉训练服务。
- contracts：端云共享数据契约；mocks：模拟外部系统；evals：评测输入与执行器。
- PostgreSQL、Redis、MinIO 提供持久化、缓存与对象存储。

## 必须保留的边界

客户端不保存服务商密钥；网关负责认证、限流和审计；工具调用的敏感动作通过权限门确认。输入过滤、内容审核与输出脱敏必须保留。子 Agent 通过编排器协作，不互相调用。车辆安全控制不进入终端能力白名单。

## 本地检查

工具链版本以 .nvmrc、package.json、rust-toolchain.toml 为准。依赖安装后使用 check:all、typecheck、build 和核心 Demo 验证。数据库测试需准备独立测试数据库。Python 服务使用 Conda 环境，启动器可通过 YUMATE_CONDA_ENV 选择环境。
