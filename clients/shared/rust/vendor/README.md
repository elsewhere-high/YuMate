# 第三方源码

webrtc-audio-processing-sys 2.1.0 为音频回声消除提供本地依赖，其 COPYING、NOTICE 及组件许可证保留在源码目录内。根 Cargo.toml 通过 path patch 使用该副本。

build.rs 的本地补丁根据 CARGO_CFG_TARGET_OS 判断目标平台，为 iOS 生成 Meson cross file，并在 iOS 目标下跳过命令行示例的链接。升级时检查上游是否已包含这些修复。
