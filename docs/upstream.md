# 来源与变更范围 / Upstream provenance and changes

[首页 / Home](../README.md) · [许可 / License](../LICENSE)

| 项目 / Item | 信息 / Value |
| --- | --- |
| 原作者 / Original author | YouMind-OpenLab |
| 原仓库 / Upstream | https://github.com/YouMind-OpenLab/ai-image-prompts-skill |
| 本地源包版本 / Source package version | 1.0.4 |
| 源包 / Archive | ai-image-prompts-skill-main.zip |
| 发布版 / Distribution | 1.1.0 |
| 维护仓库 / This repository | https://github.com/pusatpakaiankime-bit/ai-image-prompts-skill |

中文：本发行版来自用户提供的 ZIP，未记录上游提交 SHA，因此不把它标成某个未经验证的上游 commit。压缩包 SHA-256 见 `release-manifest.json`。数据快照日期见 manifest。

English: The source is a user-supplied ZIP without a recorded upstream commit SHA. This release does not claim a verified upstream commit. Its archive SHA-256 is recorded in `release-manifest.json`; reference dates are in the data manifest.

## 保留 / Retained

中文：本 ZIP 的 manifest 标称 15,802 条提示词，但逐个读取分类文件后，实测有 15,260 个不同 ID、22,985 个分类条目。原始数据未被改写或补造。`release-manifest.json` 同时记录实测数与上游标称数，校验器明确提示差异。

English: The supplied manifest reports 15,802 prompts, while the category files actually contain 15,260 distinct IDs and 22,985 category entries. Original data is not rewritten or fabricated. The release manifest records both the measured and reported totals, and validation explicitly reports the discrepancy.

- 中文：原版 SKILL 正文、社区参考 JSON、公共数据下载器、CMS 导出脚本、依赖锁与 MIT 许可。
- English: Original instruction body, community JSON records, public downloader, CMS exporter, lockfile, and MIT license.

## 新增与调整 / Added and adjusted

- 中文：中英 README、安装/使用/维护/发布教程、案例原图与生成结果、请求模板、离线安装器和校验器。
- English: Bilingual readmes, installation/usage/maintenance/release guides, illustrated examples, request templates, offline installer, and validator.
- 中文：`SKILL.md` 的 `platforms` 信息移入标准 `metadata`，添加发布版与上游版号，附文档链接；不重写核心推荐与定制流程。
- English: Platform information moves into standard `metadata`; distribution/upstream versions and guide links are added without rewriting the recommendation/remix workflow.
- 中文：`_meta.json` 是上游 ClawHub 标识，已移入 `docs/upstream/` 记录来源，避免冒用原发布者身份。
- English: Upstream ClawHub `_meta.json` is retained under `docs/upstream/` for provenance, not advertised as this repository's publisher identity.
- 中文：原 CMS 定时工作流转为文档参考，默认启用跨平台校验 CI。
- English: The scheduled private-CMS workflow is archived as documentation and replaced by cross-platform validation CI.

## 参考来源 / References

- [YouMind original project](https://github.com/YouMind-OpenLab/ai-image-prompts-skill)
- [Skills CLI official repository](https://github.com/vercel-labs/skills/blob/main/docs/commands.md)
- [OpenAI skill authoring documentation](https://learn.chatgpt.com/docs/build-skills)
- [Lemon8 Singapore posting guide](https://www.lemon8-app.com/@lemon8_singapore/7208863318088450561?region=sg)
