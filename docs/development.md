# 开发说明

命名规则：界面使用「驭伴 / YuMate」；包和 crate 使用 yumate；项目环境变量使用 YUMATE_。协议字段及第三方服务变量保持其既定格式。Google Calendar 事件 ID 使用 mate 前缀，因为 base32hex 不接受字母 y。

## 检查顺序

```bash
./yumate --filter @yumate/db db:generate
./yumate typecheck
./yumate db:test:setup
./yumate test
./yumate test:infra
./yumate test:contract
./yumate check:all
./yumate build
conda run -n yumate-vision python -m pytest enterprise/backend/vision-trainer/tests
```

运行测试时不要先 source 演示 .env：Mock 模型与工具开关会覆盖测试注入。数据库用例按文件串行执行；端到端测试与单元测试不要同时使用同一测试库。首次提交前，架构检查会因生成契约未提交而拒绝；先生成契约并验证一致性，初始提交后再核查 Git 清洁状态。不要删除这一检查。

Rust 构建通过 Conda 中的 Meson/Ninja；可在有 cargo 的 shell 中运行 `conda run -n yumate-vision cargo test --workspace`。本机 Rust 位于 .tools，入口 ./yumate 会将其加入 PATH。

Python 打包：`conda run -n yumate-vision python -m build enterprise/backend/vision-trainer`，产物须从源码目录外安装验证。

## 设计与资源

新品牌的矢量源位于 clients/shared/ui/src/brand。驭伴助手、图标及四段出发动画已替换；明暗主题通过统一 token 切换。测试夹具必须是合成数据，报告兼容性夹具在 evals/ownership-service/fixtures，不能作为运行成绩展示。

## 安全边界

保留输入过滤、输出脱敏、权限确认、会话隔离、附件句柄鉴权和服务端密钥边界。环境、生产数据、工具链、日志及构建产物不入 Git。第三方许可与数据来源不可当作项目品牌移除。
