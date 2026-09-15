# 第三方依赖清单（THIRD-PARTY）

> 列出直接依赖及其许可标识；传递依赖的核查方式见 §6。运行时服务通过示例环境配置接入。

## 0. 需要单独说明的三处

| 依赖 | 许可证 | 在哪 | 说明 |
|---|---|---|---|
| `ultralytics` | AGPL-3.0 | `enterprise/backend/vision-trainer`（Python 服务） | 警示灯检测器的训练与推理，经独立 Python HTTP 服务提供；第三方许可独立保留。 |
| `@img/sharp-libvips-*` | LGPL-3.0-or-later | `gateway`（经 `sharp`） | 预编译 libvips，用于图片格式识别与缩放；随组件保留许可文本。 |
| `webrtc-audio-processing(-sys)` 2.1.0 | BSD-3-Clause（crate 无 `license` 字段，许可证在 COPYING） | `clients/shared/rust/yumate-media`；`clients/shared/rust/vendor/` 带一份 iOS 交叉编译补丁 | Google WebRTC 的 AEC；补丁只改 build script，来由与删除条件见 `clients/shared/rust/vendor/README.md`。 |

## 1. JavaScript / TypeScript 直接依赖

| 包 | 版本 | 许可证 | 运行 / 开发 | 使用方（workspace 成员） |
|---|---|---|---|---|
| `@agentclientprotocol/sdk` | 0.26.0 | Apache-2.0 | 运行 | agent-runtime |
| `@ai-sdk/deepseek` | 0.1.17 | Apache-2.0 | 运行 | agent-runtime |
| `@ai-sdk/openai-compatible` | 0.1.17 | Apache-2.0 | 运行 | agent-runtime |
| `@aws-sdk/client-s3` | 3.1106.0 | Apache-2.0 | 运行 | gateway |
| `@earendil-works/pi-coding-agent` | 0.84.1 | MIT | 开发 | pi-agents |
| `@langchain/core` | 1.2.5 | MIT | 运行 | agent-runtime |
| `@langchain/langgraph` | 1.4.9 | MIT | 运行 | agent-runtime |
| `@langchain/langgraph-checkpoint` | 1.1.3 | MIT | 运行 | agent-runtime |
| `@langchain/langgraph-checkpoint-postgres` | 1.0.4 | MIT | 运行 | agent-runtime |
| `@number-flow/react` | 0.6.2 | MIT | 运行 | web |
| `@paper-design/shaders-react` | 0.0.80 | Apache-2.0 | 运行 | web |
| `@prisma/client` | 6.19.3 | Apache-2.0 | 运行 | db |
| `@tauri-apps/api` | 2.11.1 | Apache-2.0 OR MIT | 运行 | cockpit, mobile |
| `@tauri-apps/cli` | 2.11.4 | Apache-2.0 OR MIT | 开发 | cockpit, mobile |
| `@tauri-apps/plugin-geolocation` | 2.3.2 | MIT OR Apache-2.0 | 运行 | mobile |
| `@types/express` | 5.0.6 | MIT | 开发 | gateway |
| `@types/node` | 22.20.1 | MIT | 开发 | agent-runtime, db, gateway, memory, mock-cabin, mock-dealer, mock-insurance, mock-repair, mock-tts, rag, shared, web, worker |
| `@types/node-cron` | 3.0.11 | MIT | 开发 | worker |
| `@types/react` | 18.3.31 | MIT | 开发 | cockpit, mobile, ui, web |
| `@types/react-dom` | 18.3.7 | MIT | 开发 | cockpit, mobile, ui, web |
| `@vitejs/plugin-react` | 4.7.0 | MIT | 开发 | cockpit, mobile, web |
| `ai` | 4.3.19 | Apache-2.0 | 运行 | agent-runtime |
| `s3rver` | 3.7.1 | MIT | 本地开发 | 根项目 |
| `c8` | 12.0.0 | ISC | 开发 | yumate-ai-agent |
| `express` | 4.22.2 | MIT | 运行 | gateway |
| `http-proxy-middleware` | 4.2.0 | MIT | 运行 | gateway |
| `husky` | 9.1.7 | MIT | 开发 | yumate-ai-agent |
| `mem0ai` | 3.1.5 | Apache-2.0 | 运行 | memory |
| `node-cron` | 3.0.3 | ISC | 运行 | worker |
| `pg-boss` | 12.28.1 | MIT | 运行 | agent-runtime |
| `pi-acp` | 0.0.33 | MIT | 开发 | pi-agents |
| `prettier` | 3.9.6 | MIT | 开发 | yumate-ai-agent |
| `prisma` | 6.19.3 | Apache-2.0 | 开发 | db |
| `react` | 18.3.1 | MIT | 运行 | cockpit, mobile, ui, web |
| `react-dom` | 18.3.1 | MIT | 运行 | cockpit, mobile, ui, web |
| `react-router-dom` | 7.18.2 | MIT | 运行 | web |
| `reactflow` | 11.11.4 | MIT | 运行 | web |
| `redis` | 4.7.1 | MIT | 运行 | agent-runtime, gateway, tools |
| `sharp` | 0.35.4 | Apache-2.0 | 运行 | tools |
| `tsx` | 4.23.9 | MIT | 开发 | agent-runtime, yumate-ai-agent, db, gateway, guardrails, memory, mobile, mock-cabin, mock-dealer, mock-insurance, mock-repair, mock-tts, rag, shared, tools, ui, web, worker |
| `turbo` | 2.10.8 | MIT | 开发 | yumate-ai-agent |
| `typescript` | 5.9.3 | Apache-2.0 | 开发 | agent-runtime, yumate-ai-agent, cockpit, db, gateway, guardrails, memory, mobile, mock-cabin, mock-dealer, mock-insurance, mock-repair, mock-tts, rag, shared, tools, ui, web, worker |
| `vite` | 6.4.3 | MIT | 开发 | cockpit, mobile, web |
| `yaml` | 2.9.0 | ISC | 开发 | yumate-ai-agent |
| `zod` | 3.25.76 | MIT | 运行 | agent-runtime, guardrails, memory, tools |
| `zod-to-json-schema` | 3.25.2 | ISC | 运行 | tools |

## 2. Rust 直接依赖（26 个）

| crate | 版本 | 许可证 | 使用方（workspace 成员） |
|---|---|---|---|
| `apple-native-keyring-store` | 1.0.2 | MIT OR Apache-2.0 | yumate-core |
| `base64` | 0.22.1 | MIT OR Apache-2.0 | yumate-net, cockpit, mobile |
| `block2` | 0.6.2 | MIT | yumate-media |
| `cpal` | 0.16.0 | Apache-2.0 | yumate-media |
| `futures-util` | 0.3.33 | MIT OR Apache-2.0 | yumate-net |
| `image` | 0.25.10 | MIT OR Apache-2.0 | yumate-media |
| `keyring` | 4.2.0 | MIT OR Apache-2.0 | yumate-core |
| `keyring-core` | 1.0.0 | MIT OR Apache-2.0 | yumate-core |
| `libc` | 0.2.189 | MIT OR Apache-2.0 | mobile |
| `objc2` | 0.6.4 | MIT | yumate-media, mobile |
| `objc2-foundation` | 0.3.2 | MIT | yumate-media |
| `pinyin` | 0.11.0 | MIT | yumate-voice, cockpit |
| `reqwest` | 0.12.28 | MIT OR Apache-2.0 | yumate-net |
| `rodio` | 0.22.2 | MIT OR Apache-2.0 | yumate-tts, cockpit |
| `rusqlite` | 0.32.1 | MIT | yumate-core |
| `serde` | 1.0.229 | MIT OR Apache-2.0 | yumate-core, yumate-net, cockpit, mobile |
| `serde_json` | 1.0.151 | MIT OR Apache-2.0 | yumate-core, yumate-net, cockpit, mobile |
| `tauri` | 2.11.5 | Apache-2.0 OR MIT | cockpit, mobile |
| `tauri-build` | 2.6.3 | Apache-2.0 OR MIT | cockpit, mobile |
| `tauri-plugin-geolocation` | 2.3.2 | Apache-2.0 OR MIT | mobile |
| `tauri-plugin-opener` | 2.5.4 | Apache-2.0 OR MIT | cockpit, mobile |
| `thiserror` | 2.0.19 | MIT OR Apache-2.0 | yumate-core, yumate-media, yumate-net |
| `tokio` | 1.53.1 | MIT | yumate-net, yumate-tts, cockpit |
| `ts-rs` | 12.0.1 | MIT | yumate-core |
| `webrtc-audio-processing` | 2.1.0 | BSD-3-Clause（COPYING，Google WebRTC） | yumate-media |
| `webrtc-vad` | 0.4.0 | MIT | yumate-media |

## 3. Python 依赖（`enterprise/backend/vision-trainer`，Conda 环境）

| 包 | 版本 | 许可证 |
|---|---|---|
| `ultralytics` | 8.4.143 | AGPL-3.0（见 §0） |
| `torch` | 2.14.0 | BSD-3-Clause（含 Apache-2.0 等组件） |
| `torchvision` | 0.29.0 | BSD-3-Clause |
| `opencv-python` | 5.0.0.93 | Apache-2.0 |
| `onnx` | 1.22.0 | Apache-2.0 |
| `onnxruntime` | 1.29.0 | MIT |
| `numpy` | 2.5.3 | BSD-3-Clause |
| `pillow` | 12.3.0 | MIT-CMU |
| `fastapi` | 0.141.1 | MIT |
| `uvicorn` | 0.52.4 | BSD-3-Clause |
| `python-multipart` | 0.0.32 | Apache-2.0 |
| `pyyaml` | 6.0.3 | MIT |

## 4. 模型权重、数据集与非代码素材

| 项 | 许可证 / 授权 | 用途 | 在仓库里吗 |
|---|---|---|---|
| `yolo11n.pt`（Ultralytics 预训练权重） | AGPL-3.0 | 警示灯检测器的微调起点 | 是（`vision-trainer/`） |
| 自训警示灯检测器权重 | 随 ultralytics 派生（AGPL-3.0） | 观察层第一遍（可选） | 否（训练产物） |
| `nomic-embed-text`（经本机 Ollama） | Apache-2.0 | Mem0 记忆向量化，不出网 | 否（Ollama 拉取） |
| Roboflow「Tesla New HMI」底图集（815 张 Model 3/Y 屏幕实拍） | CC BY 4.0，须署名 | 合成训练集的真实屏幕底图 | 否 |
| 厂商车主手册 / 保养手册（Tesla、雪佛兰） | 厂商版权，公开可下载；仅用于竞赛演示的知识库，不随仓库分发 | RAG 三个数据集与图标目录 | 否（`data/kb-md/` 被忽略） |
| Open-Meteo 天气 | CC-BY 4.0（非商用免费） | 高德天气未配置时的回退 | — |
| 界面素材（驭伴形象、HUD 图标） | 新品牌为项目 SVG 绘制；通用素材由团队授权使用 | 车机端与手机端 | 是 |

## 5. 可配置的运行时外部服务

DeepSeek（LLM 与视觉表述）、阿里云百炼 / 通义千问（视觉观察、ASR、TTS、图标向量）、火山方舟 / 豆包（ASR、TTS）、阿里云 AI 安全护栏（内容审核）、RAGFlow Cloud（知识库检索）、高德开放平台（路径规划、天气、地图底图）、MinerU（PDF 转 markdown，离线工具）、Google Calendar / CalDAV（真实日历后端，可选）。本机演示使用 fake / mock 配置；真实服务需分别配置凭据。

## 6. 依赖许可核查

传递依赖会随锁文件更新。请使用 pnpm licenses list 和 cargo metadata 按当前安装结果核对。第三方源码自带的 COPYING、LICENSE、NOTICE 保留在各组件目录中。

## 7. 本地媒体工具

FFmpeg / FFprobe 通过 Conda 安装，用于照片与视频转换、媒体探测及模拟语音。其具体许可和依赖以已安装发行包随附的声明为准；二进制不进入项目 Git。
