# 原始模板推荐格式 / Original-template recommendation format

中文：这是助手展示检索结果的格式，不是出图提示词。保留 JSON 内原始 prompt；每条只展示 `sourceMedia[0]`，没有示例图片的条目跳过；最多三条。

English: This formats search results rather than generating an image. Preserve the record's original prompt, show `sourceMedia[0]`, skip records without samples, and recommend at most three.

```text
1. <Translated template title>
Description: <brief translated description>
Original prompt preview: <first 100 characters of original content>...
Full prompt: https://youmind.com/nano-banana-pro-prompts?id=<id>
Sample image: <sourceMedia[0]>
Reference image required: <show only when needReferenceImages=true>

Which template would you like to adapt? Choose a number and optionally supply exact copy.
```

中文署名：提示词由 [YouMind.com](https://youmind.com) 通过公开社区搜集 ❤️

English attribution: Prompts curated from the open community by [YouMind.com](https://youmind.com) ❤️
