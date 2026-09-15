# HTTP 接口概要

默认网关为 http://localhost:8790。接口的字段定义以 contracts/src 和网关路由实现为准。

| 接口 | 用途 |
| --- | --- |
| GET /healthz | 网关存活检查 |
| POST /v1/session | 创建会话 |
| POST /v1/session/:id/messages | 提交消息并获得接收确认 |
| GET /v1/session/:id/messages | 分页读取历史 |
| POST /v1/session/:id/attachments | 上传附件，原始二进制请求体及合法 Content-Type |
| GET /v1/session/:id/attachments | 读取会话或 turnId 对应的附件元数据 |
| GET /v1/attachments/:handle | 经鉴权下载附件 |

业务接口使用 Bearer 认证。上传支持图片、音频与受支持的视频类型，使用 x-idempotency-key 避免重传重复写入。附件句柄不是公开 URL；跨用户访问与不存在的句柄均返回 404。内容以 attachment 下载，避免将上传内容当作可执行网页。

实时更新使用 SSE，人工确认由权限门挂起并在用户决定后继续。端云契约测试检查事件类型、生成类型和 JSON 往返，不要手工修改生成目录。控制台接口按 admin/ops 角色限制，密钥字段只返回掩码。

语音训练服务绑定 127.0.0.1:8799，通过网关访问；GET /health 返回存活状态。实际训练、推理、导出和任务路由见 enterprise/backend/vision-trainer/vision_trainer/app.py。
