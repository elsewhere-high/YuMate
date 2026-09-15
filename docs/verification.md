# 验证记录

日期：2026-09-15。环境：macOS Apple Silicon，Node 24.20.0、pnpm 9.15.0、Rust 1.97.0、Conda yumate-vision / Python 3.12。

## 已完成

- `./yumate check:all` 总检查通过：环境示例、密钥扫描、命令引用、10 项架构规则、版本一致性、契约、Rust、JS 和工程测试。

- 全部 TypeScript 类型检查和 18 个构建任务通过；Rust workspace 构建通过。
- JavaScript / TypeScript：4,928 项通过，1 项缺少可选知识库语料的测试跳过。
- Rust：340 项通过，1 项需要真实网关的手动测试按原有条件忽略；跨语言契约检查通过。
- 工程与评测辅助测试：230 项通过。媒体补测 21 项全部通过，含 HEIC、BMP、视频裁剪/抽帧/转写和 MP3；本机 FFmpeg 8.0.1。
- Python：30 项通过；wheel/sdist 构建成功，从源码目录外安装 wheel 后导入和健康接口检查成功。
- 核心 HTTP / SSE 端到端流程：13 项通过。附件端到端：13 项通过，含签名上传、下载内容一致、重复上传、跨用户隔离、视频支持和不支持类型拒绝。
- 本地 PostgreSQL、Redis、S3、网关、运行时、worker、视觉训练服务及模拟服务已启动；三端网页可访问。`./yumate start` 已实际执行成功。
- 桌面浏览器检查：座舱首页、对话、档案、设置；控制台登录、系统状态、演示大屏、会话、账号、车辆、训练、基线报告。全新项目没有基线报告时显示空状态。
- 390×844 小屏检查：手机端首页、设置、档案和登录；新图标、助手、主题、标题及文案显示正常。
- macOS 两个原生 .app 已构建、签名并启动。
- 项目身份、包名、环境变量、资源、文档和产物完成扫描；原始源码 2,587 个文件哈希不变。私有环境、工具链、数据和日志不入 Git。

## 验收范围

当前使用 fake 模型 / ASR、mock 工具、关闭 TTS 的本地演示配置。真实模型、ACP、地图、RAGFlow、云端语音和实际车辆未接入验证。测试夹具不代表真实模型评测成绩。

Mac 锁屏阻止了原生窗口内交互检查；浏览器中的原生通道不可用提示属于预期状态。麦克风、相机、定位、钥匙串及 iOS 签名打包未完成验收。

本机 Docker 的 PostgreSQL / MinIO 容器启动受阻，已使用 Conda PostgreSQL + pgvector 和签名校验的 S3rver 完成开发验证。Docker 编排文件保留，容器化全栈部署尚未验收。

## 运行

```bash
./yumate start
./yumate status
./yumate stop
```

控制台 http://localhost:5174 ，座舱 http://localhost:1430 ，手机端 http://localhost:1420 。停止应用不会停止 PostgreSQL 和 Redis，完整停机步骤见 installation.md。
