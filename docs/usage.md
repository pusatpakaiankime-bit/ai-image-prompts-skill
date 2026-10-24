# 完整使用教程 / Complete usage guide

[安装 / Install](installation.md) · [图文案例 / Examples](examples.md) · [模板 / Templates](templates.md)

## 1. 明确输入 / Provide the brief

中文：上传原照片或商品图，说明发布平台、主题、文字语言、标题、比例与必须保留的内容。缺失且影响结果的信息再补充。若有多张图片，请标明“原图”“风格参考”“需要编辑的成图”。

English: Attach the original photo/product image and state the platform, topic, cover language, title, aspect ratio, and preservation requirements. Label multiple inputs as source, style reference, or edit target. Fill in missing details that materially affect the result.

```text
使用 $ai-image-prompts-skill，帮我做一张 Lemon8 旅行封面。
原图：我上传的乘船照片。主题：周末亲近大自然。
语言：Bahasa Melayu。比例：3:4。
请先推荐带示例图的模板。保留我的脸、头巾、白色裙装和抬手动作。
```

```text
Use $ai-image-prompts-skill for a Lemon8 travel cover based on my boat photo.
Topic: a weekend in nature. Cover language: Bahasa Melayu. Ratio: 3:4.
First recommend templates with sample images.
Preserve my face, hijab, white dress, and raised-hand pose.
```

## 2. 查找原始模板 / Find original templates

中文：助手读取 `references/manifest.json`，搜索相关分类，最多推荐 3 条原始模板。每条应包含模板名、说明、原文预览、完整提示词链接、示例图，以及是否需要参考图。原文预览阶段不应被当作已定制成图。

English: The assistant reads the manifest, searches relevant categories, and recommends at most three original templates. Each includes title, description, original preview, full-prompt link, sample image, and reference-image requirement. A template preview is not your finished image.

中文：示例图片打不开时，打开其原始链接或模板页面；不要把缺失预览当成没有模板。可另选能正常查看的模板。[排查方法](troubleshooting.md)。

English: If a preview fails, open its original URL or template page, or choose another viewable template. A failed embed does not mean the template is missing. See [troubleshooting](troubleshooting.md).

## 3. 选定与定制 / Select and customize

```text
选择第 1 个，保留手写风，装饰少一点。
主标题：HUJUNG MINGGU DEKAT DENGAN ALAM
小标题：DIARI JALAN-JALAN
地点：Taman Kemesraan
不要添加未经提供的价格、交通时长或排名。
请给出完整英文图片提示词，画面内文字用马来文。
```

```text
Choose template 1. Keep the handwritten style with fewer decorations.
Headline: HUJUNG MINGGU DEKAT DENGAN ALAM
Small label: DIARI JALAN-JALAN
Location: Taman Kemesraan
Do not invent prices, travel durations, or rankings.
Write the full generation prompt in English; all visible cover copy must be Malay.
```

中文：英文生成提示词与封面文字语言是两回事。提示词可以用英文描述，而封面文字仍是中文、英文或马来文。原照片中的身份、穿搭、动作必须明确作为保留条件。

English: Prompt language and visible image copy are independent. An English generation prompt can specify Chinese, English, or Malay cover text. Explicitly preserve identity, outfit, and pose when editing a source photo.

## 4. 出图 / Generate the image

```text
用上面确认的提示词和我的原照片生成封面。
若当前环境没有图像生成/编辑工具，请交付完整提示词并说明需要在哪类工具使用。
```

```text
Create the cover using the confirmed prompt and my source photo.
If this environment has no image generation/editing tool, return the complete prompt instead.
```

中文：本技能没有内置生成 API。仓库里的案例使用宿主内置图像工具；其他工具不保证完全一样的输出。需要图片生成服务时使用自己可用的工具，不要把安装技能等同于开通模型。

English: This skill includes no generation API. The examples used a host-provided image tool; another service may produce different results. Use an available generator/editor separately.

## 5. 检查与修改 / Review and revise

中文：检查标题拼写、人物脸部、手指、衣服细节、文字是否遮挡主体，以及缩略图能否读清。一次说明具体要改哪里，例如“只缩小地点标签”“主标题上移，保留照片”。保存新版本，保留原图。

English: Check spelling, identity, fingers, garment details, subject visibility, and thumbnail readability. Request targeted changes such as “shrink only the location label” or “move the headline up; keep the photograph.” Save revisions separately from the source.

## 6. 仅换语言 / Change only the cover language

```text
把这张已确认的封面改成马来文。
只替换文字并调整文字所需的行距字号，保留人物、服装、背景与配色。
主标题：HUJUNG MINGGU / DEKAT DENGAN / ALAM
小标签：DIARI JALAN-JALAN
手写注释：Santai dulu, nikmati suasana
地点 Taman Kemesraan 保持不变，删除所有中文字。
```

```text
Localize this approved cover into Malay. Replace only the text and adjust its fit.
Preserve the person, outfit, background, and colors.
Headline: HUJUNG MINGGU / DEKAT DENGAN / ALAM
Label: DIARI JALAN-JALAN
Note: Santai dulu, nikmati suasana
Keep Taman Kemesraan unchanged and remove all Chinese copy.
```

## 7. 平台适配 / Platform adaptation

中文：Lemon8 示例采用 3:4、清楚的短标题、真实明亮照片与少量装饰，参考 [Lemon8 Singapore 封面指南](https://www.lemon8-app.com/@lemon8_singapore/7208863318088450561?region=sg)。这是设计建议，并非流量保证。小红书案例采用同样竖版，但以日系杂志标题与拍立得细节叠图表现旅行氛围。其他平台可指定自己的尺寸与内容要求。

English: The Lemon8 example uses 3:4, readable short titles, bright real photography, and restrained decoration, informed by the [Lemon8 Singapore posting guide](https://www.lemon8-app.com/@lemon8_singapore/7208863318088450561?region=sg). This is a design recommendation, not a reach guarantee. The Xiaohongshu example instead uses magazine typography and small Polaroid detail inserts. Supply the required size and context for another platform.

## 8. 其他用途 / Other use cases

中文：可用相同流程制作商品白底图、营销海报、头像、漫画分镜、信息图或文章配图。先说明用途与真实内容，再搜索模板。无匹配时应明确说明，定制提示词需标注“AI 生成，非库内原文”。

English: The same process supports product images, marketing posters, avatars, comic storyboards, infographics, and article illustrations. Explain the use case and factual content before searching. If nothing matches, a custom prompt should be labeled AI-generated rather than an original library record.
