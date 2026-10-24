# 安装与升级 / Installation and updates

[中文首页](../README.md) · [English home](../README.en.md)

## 1. 准备 / Requirements

中文：准备支持文件型技能的 AI 助手、Node.js 20 或更新版本，以及完整仓库或 Release ZIP。搜索与本地安装不需要 API 密钥；刷新在线参考库需要网络。图片生成另需宿主提供图像工具。

English: Use an assistant that supports file-based skills, Node.js 20+, and a complete checkout or release ZIP. Local installation/search requires no API key. Reference refresh needs network access. Image generation separately depends on your host's tools.

```sh
node --version
```

## 2. 下载 / Download

### A. Git

```sh
git clone https://github.com/pusatpakaiankime-bit/ai-image-prompts-skill.git
cd ai-image-prompts-skill
git checkout v1.1.0
```

中文：标签锁定技能版本；后续在线同步仍可更新参考库。想完全复现快照时使用包内数据，跳过在线同步。

English: The tag pins the distribution. Later synchronization can still update reference data. For snapshot reproduction, retain the bundled data and skip network refresh.

### B. ZIP

中文：在 [Releases](https://github.com/pusatpakaiankime-bit/ai-image-prompts-skill/releases) 下载带版本号的 ZIP。完整解压后进入含 `SKILL.md`、`scripts/`、`references/` 的目录；只下载 `SKILL.md` 不完整。

English: Download the versioned ZIP from [Releases](https://github.com/pusatpakaiankime-bit/ai-image-prompts-skill/releases), extract it, and enter the directory with `SKILL.md`, `scripts/`, and `references/`. Downloading only `SKILL.md` is insufficient.

## 3. Codex 离线安装 / Offline Codex installation

```sh
node scripts/install.js --dry-run
node scripts/install.js
```

中文：默认目标为 `~/.agents/skills/ai-image-prompts-skill`，对应 [OpenAI 当前文档的用户级技能目录](https://learn.chatgpt.com/docs/build-skills)。安装器复制技能、完整参考库、模板、教程和案例图片；不执行 npm 安装，不联网，也不复制 `.git`。已有目标会直接报错，不会覆盖。

English: The default is `~/.agents/skills/ai-image-prompts-skill`, matching the [documented user skill directory](https://learn.chatgpt.com/docs/build-skills). It copies the skill, references, templates, guides, and example media without npm installation, network access, or `.git`. Existing destinations are refused.

### Windows PowerShell 自定义目录 / Custom folder

```powershell
node .\scripts\install.js --dest (Join-Path $env:USERPROFILE '.agents\skills\ai-image-prompts-skill')
```

### macOS / Linux

```sh
node scripts/install.js --dest "$HOME/.agents/skills/ai-image-prompts-skill"
```

### 项目级 / Repository scope

```sh
node scripts/install.js --dest /absolute/path/to/your-project/.agents/skills/ai-image-prompts-skill
```

中文：`--dest` 是完整技能文件夹，不能只填父目录。旧版部署若仍从 `.codex/skills` 加载，可显式指定该目录；不要在多个路径重复安装相同名字的技能。

English: `--dest` is the complete skill folder, not its parent. For a legacy host that discovers `.codex/skills`, explicitly select that path. Avoid duplicate installations of the same named skill across discovery paths.

```powershell
node .\scripts\install.js --dest (Join-Path $env:USERPROFILE '.codex\skills\ai-image-prompts-skill')
```

## 4. 验证 / Verify

```sh
node scripts/validate.js
node scripts/install.js --version
```

中文：上述校验可在完整下载目录或已安装目录运行。下一轮对话输入 `$ai-image-prompts-skill`；未发现时重新启动助手或检查其技能设置。

English: Run validation in the complete checkout or the installed directory. In your next conversation turn, invoke `$ai-image-prompts-skill`. If missing, reopen the host or inspect skill settings.

## 5. 其他助手 / Other assistants

```sh
npx skills add pusatpakaiankime-bit/ai-image-prompts-skill
```

中文：这是第三方 [Skills CLI](https://github.com/vercel-labs/skills/blob/main/docs/commands.md)，需要网络；按其提示选择宿主。使用前可查看 `npx skills --help`。只进行普通查找与使用不需要执行 `pnpm install` 或配置 CMS 凭据。

English: This invokes the third-party [Skills CLI](https://github.com/vercel-labs/skills/blob/main/docs/commands.md), requires networking, and asks for the target host. Use `npx skills --help` for current options. Ordinary use needs neither `pnpm install` nor CMS credentials.

## 6. 更新数据与升级技能 / Refresh data vs upgrade the skill

中文：两件事不同。`setup.js --force` 只更新提示词 JSON，不升级 `SKILL.md` 或本发布版脚本。应在实际安装的技能目录执行。先保存自己的本地修改；完整离线快照可随时从 Release 重新获取。

English: `setup.js --force` refreshes prompt JSON only. It does not upgrade `SKILL.md` or this distribution's scripts. Run it in the installed skill directory. Keep your local customizations separately; the release preserves an offline snapshot.

```sh
node scripts/setup.js --check
node scripts/setup.js --force
```

中文：升级技能时，下载新版本；先将旧安装目录重命名到**不被宿主扫描的备份目录**，再运行新版本安装器。不要仅把文件夹加上 `.bak` 留在技能扫描目录内，否则仍可能被识别。

English: To upgrade the skill, download a new release, move the previous installation to a backup location **outside all skill discovery directories**, and run the new installer. A `.bak` folder kept inside a scanned skills directory may still be discovered.

## 7. 卸载 / Uninstall

中文：将该技能的完整安装目录移出宿主扫描路径并重新打开助手，即可停用；确认备份不再需要后可自行删除。本安装器没有自动覆盖或自动删除命令。

English: Move the installed skill outside the host's discovery paths and reopen the assistant to deactivate it. Delete your backup only when no longer needed. The installer provides no automatic overwrite/delete command.
