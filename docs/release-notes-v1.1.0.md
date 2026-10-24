# v1.1.0 · 中英图文完整版 / Bilingual Illustrated Edition

基于 YouMind-OpenLab 上游 v1.0.4 的独立衍生发行版，保留 MIT 许可与作者归属。

An independent derivative distribution based on YouMind-OpenLab v1.0.4, retaining the original MIT license and attribution.

## 包含 / Included

- 完整技能与 11 类参考库：15,260 个唯一 ID，22,985 个分类条目。Complete skill and reference snapshot.
- 中英 README、安装升级、使用教程、模板目录、故障排查和维护指南。Full Chinese/English documentation.
- Lemon8 中文/马来文与小红书杂志风的原图、成图和完整提示词。Illustrated source-to-cover examples with prompts.
- 离线安装器、数据与链接校验、安装行为测试及跨平台 CI。Offline installer, validator, behavior test, and CI.

## 安装 / Install

解压 ZIP，在包含 SKILL.md 的目录执行 / Extract the ZIP, enter the skill folder, then run:

```sh
node scripts/install.js --dry-run
node scripts/install.js
```

需要 Node.js 20+。默认安装到 `~/.agents/skills/ai-image-prompts-skill`，不覆盖已有目录。搜索提示词不需要 API key；生成图片由宿主图像工具提供。

Requires Node.js 20+. Defaults to `~/.agents/skills/ai-image-prompts-skill` and refuses existing destinations. Prompt search needs no API key; image generation requires a host-provided tool.

## 检查 / Checks

发行快照、文档链接与离线安装行为已在本地验证。GitHub Actions 另外配置 Windows、macOS 与 Linux 检查；实际运行结果请查看仓库 Actions。

Snapshot data, local document links, and offline installation behavior are validated locally. GitHub Actions is configured for Windows, macOS, and Linux; consult Actions for the actual remote results.

附件 / Assets: full versioned ZIP + SHA256SUMS.txt.
