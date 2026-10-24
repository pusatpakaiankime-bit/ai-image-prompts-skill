# 结构与维护 / Architecture and maintenance

[首页 / Home](../README.md) · [上游说明 / Upstream](upstream.md)

```text
ai-image-prompts-skill/
  SKILL.md                 Agent instructions / 技能入口
  VERSION                  Distribution version / 发布版号
  package.json             Version and script commands / 命令
  agents/openai.yaml       UI metadata / 发现信息
  references/              Manifest + 11 category JSON files / 数据库
  scripts/setup.js         Retained upstream public-data downloader / 原版同步器
  scripts/install.js       Offline local installer / 离线安装器
  scripts/validate.js      Snapshot and documentation checks / 发布校验
  scripts/generate-references.ts  Upstream maintainer CMS exporter / CMS 导出
  templates/               Bilingual request and editing templates / 模板
  examples/                Source photos, results, prompts / 图文案例
  docs/                    Bilingual guides / 双语文档
  tests/                   Installer behavior test / 安装测试
  release-manifest.json    Source archive hash + library statistics / 版本清单
```

## 数据字段 / Data schema

```json
{
  "id": 446,
  "content": "Write as many cute handwritten notes and highlights as possible on the photo!",
  "title": "Cute handwritten notes over a photo",
  "description": "Description of the template",
  "sourceMedia": ["https://example.invalid/sample.jpg"],
  "needReferenceImages": true
}
```

中文：上例 URL 仅为字段示意；真实记录见 `examples/library-templates.json`。每个分类可包含相同 ID；统计总数时对 ID 去重。manifest 的分类列表是动态的，不把 11 类写成永不变化的规则。

English: The URL above is illustrative; actual records are in `examples/library-templates.json`. Records may occur in multiple categories; deduplicate IDs for unique totals. Discover categories from the manifest rather than treating 11 as a permanent fixed count.

## 脚本与依赖 / Scripts and dependencies

| 命令 / Command | 场景 / Purpose | 网络 / Network |
| --- | --- | --- |
| `node scripts/install.js` | 用户离线安装 / Offline installation | 无 / No |
| `node scripts/validate.js` | 校验发行快照与文档 / Validate checkout | 无 / No |
| `node --test` | 测试安装器 / Test installer | 无 / No |
| `node scripts/setup.js` | 补齐缺失分类 / Download missing categories | 有 / Yes |
| `node scripts/setup.js --check` | 上游时间检查模式 / Upstream age-check mode | 可能 / Sometimes |
| `node scripts/setup.js --force` | 刷新全部分类 / Replace category data | 有 / Yes |
| `pnpm run generate` | 维护者从 CMS 导出 / Maintainer CMS export | 有，需私有 CMS 凭据 / Yes, CMS credentials |

中文：`install.js` 与 `validate.js` 仅使用 Node 内置模块；普通用户不必安装项目依赖。上游 `package.json` 的 `postinstall` 会运行下载器，因此普通离线安装不执行 npm/pnpm 安装。维护上游导出器时才需要依赖与 `CMS_HOST` / `CMS_API_KEY`，这些不随仓库分发。

English: The new installer and validator use only Node built-ins. End users need no dependency installation. The retained upstream `postinstall` runs the downloader, so the offline path avoids npm/pnpm installation. CMS exporting is a maintainer function that requires dependencies and private `CMS_HOST` / `CMS_API_KEY` values, which are not distributed.

## 同步边界 / Synchronization behavior

中文：上游 `setup.js` 固定从 YouMind 上游公共仓库获取数据。普通模式跳过已有分类；`--force` 会替换分类并清理不在 manifest 中的旧文件。`.last-updated` 是脚本检查时间，不一定代表每个 JSON 被重新下载。发布版保留此行为，并在教程中明确。

English: The retained `setup.js` downloads from the public YouMind upstream. Normal mode skips existing category files; `--force` replaces them and cleans files absent from the manifest. `.last-updated` records the script check, not necessarily a full re-download. This distribution documents rather than changes that behavior.

中文：原定时 CMS 工作流已移到 `docs/upstream/` 作为参考；默认只运行无需密钥的校验工作流。这样不会让新仓库依赖未配置的上游私有服务。

English: The original scheduled CMS workflow is preserved in `docs/upstream/` as reference. The active workflow runs credential-free validation instead of assuming access to the upstream private CMS.
