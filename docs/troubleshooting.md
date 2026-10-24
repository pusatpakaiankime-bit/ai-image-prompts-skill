# 故障排查 / Troubleshooting

[首页 / Home](../README.md) · [安装 / Installation](installation.md)

| 问题 / Symptom | 处理 / Resolution |
| --- | --- |
| 技能没有出现 / Skill missing | 检查 `SKILL.md` 是否位于宿主扫描目录的技能文件夹内，下一轮再试；必要时重启。Check the discovery folder and file nesting; retry in a new turn or reopen the host. |
| 安装报 already exists / Existing destination | 安装器不会覆盖；将旧版备份到扫描路径之外或选择新目标。Back up the old install outside discovery paths or choose a different destination. |
| 只能看到图标 / Broken sample image | 远程示例链接可能可访问但无法内嵌。打开原图链接或模板页面；本仓库图文案例使用相对路径本地文件。Try the original link or gallery page; this repository's examples use bundled relative image files. |
| 有提示词但没有成图 / Prompt only | 宿主可能没有图像生成工具。本技能不附带模型。将定制提示词与原图交给可用图片编辑工具。A host image tool is required; use your available editor with the final prompt and source image. |
| 文字乱码或拼错 / Incorrect lettering | 给出逐字文案，减少字数，要求只修正文字；仍失败时在设计工具中重排文字。Provide exact copy and request a text-only correction; finish typography in a design editor if needed. |
| 人物或服装变化 / Identity or outfit drift | 确保目标原图可见，明确脸、头巾、穿搭、手势等保留条件；基于最后确认版本做局部编辑。Attach the actual edit target and state invariants; edit the last approved version. |
| 网络更新失败 / Refresh failure | 使用包内快照继续；稍后重试 `node scripts/setup.js --force`。此命令联网，宿主可能要求网络许可。Use the bundled snapshot and retry online refresh later; the host may request network permission. |
| `--check` 没有更新旧条目 / Stale existing records | 上游脚本的 `--check` 会检查时间，但普通模式跳过已有分类文件；真正刷新已有数据用 `--force`。The retained upstream check path skips existing category files; force refresh is needed to replace their contents. |
| `setup.js` 显示下载失败但退出码是 0 / Nonfatal setup exit | 上游脚本将失败视为非致命；读取日志并在完整仓库运行校验，不能仅靠退出码判断。Read the log and validate data; upstream uses nonfatal exit behavior. |
| 路径包含空格 / Spaces in paths | 给完整路径加引号；`--dest` 必须指向完整技能目录。Quote paths and specify the complete skill folder. |
| 出现重复技能 / Duplicate skill | 相同名字安装在多个扫描路径时可能重复出现。保留一个安装，其他移到扫描路径之外。Keep one installation and move others outside discovery paths. |
| 不清楚版本 / Version confusion | 技能发布版看 `VERSION` 与 `package.json`；数据更新时间看 `references/manifest.json`。Distribution version and reference snapshot date are independent. |
| 新版数据导致校验计数变化 / New data changes counts | `release-manifest.json` 锁定发行快照；维护者同步数据后需重新生成统计并发新版。The release manifest pins snapshot statistics; a maintainer must regenerate it when publishing changed data. |

## 图片显示说明 / Image display

中文：示例图加载失败不能证明链接失效、网络封锁或图床禁止外链；先验证链接再判断原因。宿主允许时可打开浏览器预览。遵守宿主对媒体展示的限制；不要通过下载远程图片绕过限制。

English: A broken embed does not establish a dead URL, network block, or hotlink policy. Verify the URL before assigning a cause, and use a browser preview if the host allows it. Respect host media restrictions rather than downloading around them.

## 核对文件 / Check files

```sh
node scripts/validate.js
node --test
```

中文：在完整仓库目录运行，图文与模板链接会被校验。图片模型输出本身需人工目视检查。

English: Run from the complete checkout. This checks the bundled data and local document links; generated image quality still requires visual review.
