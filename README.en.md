# AI Image Prompts Skill · Illustrated Edition

[中文](README.md) | **English** · **Distribution v1.1.0** · Upstream **v1.0.4** · MIT

Find community image-prompt templates, view their sample images, then customize a selected template for your own content. Useful for lifestyle covers, fashion, products, travel journals, posters, and editorial illustrations. This derivative distribution adds an offline installer, bilingual guides, reusable request templates, and illustrated examples to the original YouMind skill.

> The skill recommends and customizes prompts. Actual image generation requires an image tool supplied by the host; installing this repository does not provide a model, API account, or generation credits.

<a href="examples/taman-kemesraan/lemon8-ms.png"><img src="examples/taman-kemesraan/lemon8-ms.png" width="32%" alt="Malay Lemon8 cover"></a>
<a href="examples/taman-kemesraan/lemon8-zh.png"><img src="examples/taman-kemesraan/lemon8-zh.png" width="32%" alt="Chinese Lemon8 cover"></a>
<a href="examples/beach/xiaohongshu-zh.png"><img src="examples/beach/xiaohongshu-zh.png" width="32%" alt="Japanese magazine inspired Xiaohongshu cover"></a>

*Actual examples bundled in this repository: Malay and Chinese Lemon8 covers, plus a magazine-inspired Xiaohongshu cover. Click to open the original files.*

## Quick start

1. [Download v1.1.0](https://github.com/pusatpakaiankime-bit/ai-image-prompts-skill/releases/tag/v1.1.0) and extract the complete ZIP.
2. Open a terminal in the folder containing `SKILL.md`. Requires Node.js 20+; Node 22 LTS is recommended.

```sh
node scripts/install.js --dry-run
node scripts/install.js
```

The offline installer defaults to `~/.agents/skills/ai-image-prompts-skill` and refuses an existing destination. See [installation](docs/installation.md) for project scope, custom paths, and legacy `.codex/skills` deployments. Invoke the skill on your next turn; reopen your host if it is not discovered.

3. Attach a photo and send:

```text
Use $ai-image-prompts-skill to find Lemon8 cover templates for my photo.
Show at most 3 original templates with sample images so I can choose.
Platform: Lemon8. Format: 3:4. Cover language: Bahasa Melayu.
Topic: a relaxing weekend in nature. Preserve my face, hijab, outfit, and pose.
```

4. Select a template, then request customization or image generation:

```text
Choose template 1 and adapt it to my photo.
Headline: HUJUNG MINGGU DEKAT DENGAN ALAM
Location: Taman Kemesraan
If this host supports image editing, create the finished cover.
Otherwise return the complete copy-ready image prompt.
```

## Complete bilingual documentation

| Guide | Contents |
| --- | --- |
| [Installation](docs/installation.md) | Git, ZIP, offline install, custom paths, updates, uninstall |
| [Usage](docs/usage.md) | Input → search → selection → customization → generation → localization |
| [Illustrated examples](docs/examples.md) | Source photos, actual covers, and complete editing prompts |
| [Templates](docs/templates.md) | Request forms and platform/localization templates |
| [Troubleshooting](docs/troubleshooting.md) | Missing previews, discovery, refresh failures, incorrect text |
| [Architecture](docs/architecture.md) | Data schema, synchronization, runtime vs maintainer scripts |
| [Releasing](docs/releasing.md) | Validation, packaging, checksums, GitHub Releases |
| [Upstream](docs/upstream.md) | Original authorship, source version, distribution changes |
| [Changelog](CHANGELOG.md) | Version history |

## Bundled snapshot

The 2026-10-23 snapshot contains **15,260 unique prompt IDs**, **22,985 category entries**, and **11 categories**. A prompt can appear in multiple categories. Read `references/manifest.json` for the current category list and run `node scripts/validate.js` to verify this release. Updates can change these numbers.

## Optional third-party installation

The [Skills CLI](https://github.com/vercel-labs/skills/blob/main/docs/commands.md) can discover the root skill and configure a supported assistant:

```sh
npx skills add pusatpakaiankime-bit/ai-image-prompts-skill
```

This uses a networked third-party installer rather than the bundled offline installer. Follow its prompts for the target host.

## Credits and licensing

The original skill and library are by [YouMind-OpenLab](https://github.com/YouMind-OpenLab/ai-image-prompts-skill). This is an independently maintained derivative distribution, not the official upstream repository. The original [MIT license](LICENSE) is retained. See [NOTICE](NOTICE.md) for code, data, and media attribution. The illustrated examples use user-supplied photographs and generated edits; generation is not deterministic.

Prompts curated from the open community by [YouMind.com](https://youmind.com) ❤️
