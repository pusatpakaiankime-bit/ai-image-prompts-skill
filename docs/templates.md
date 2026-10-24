# 模板目录 / Template catalog

[首页 / Home](../README.md) · [完整教程 / Usage](usage.md)

中文：`references/*.json` 是社区原始提示词库；`templates/*.md` 是本发布版新增的用户请求表与定制脚手架。二者不同，新增模板不能冒充 YouMind 库内原文。

English: `references/*.json` contains original community prompt records. `templates/*.md` contains request forms and customization scaffolds added by this distribution; they are not original YouMind library records.

| 文件 / File | 用途 / Purpose |
| --- | --- |
| [中文请求表](../templates/request-form.zh-CN.md) | 填写主题、图片、语言、平台、文案与保留条件 |
| [English request form](../templates/request-form.en.md) | Structured English brief |
| [Lemon8 cover](../templates/lemon8-cover.md) | 中英旅行/生活封面请求与英文出图脚手架 |
| [Xiaohongshu cover](../templates/xiaohongshu-cover.md) | 中英杂志风封面请求 |
| [Localize a cover](../templates/localize-cover.md) | 替换语言，保留照片与版式 |
| [Recommendation format](../templates/recommendation.md) | 原始模板与示例图的推荐格式 |
| [Original records used](../examples/library-templates.json) | 本案例使用的原始提示词及 sourceMedia |

## 从模板到成图 / From template to image

1. 中文：填请求表，上传原图。English: Fill in the brief and attach the source.
2. 中文：搜索原始模板并查看示例。English: Search original records and view samples.
3. 中文：确认喜欢的模板。English: Select a template.
4. 中文：填入脚手架中的标题、语言和保留条件。English: Set exact copy, language, and invariants.
5. 中文：宿主有图像工具则出图，否则复制完整提示词到自己的工具。English: Generate with an available host tool, or copy the final prompt to your own editor.

中文：尖括号占位符是使用者要填写的字段，不能原样出现在成图里。原始 prompt 在推荐阶段保持不变；“风格保留、内容替换”发生在选定之后。

English: Fill in placeholders before generation; they must not appear in the final image. Keep library wording unchanged during recommendation. Remix style and content after selection.
