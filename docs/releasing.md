# 版本发布 / Releasing a version

[首页 / Home](../README.md) · [版本记录 / Changelog](../CHANGELOG.md)

## 发布前 / Before release

中文：同步修改 `VERSION`、`package.json`、`SKILL.md` 的 metadata 与 `release-manifest.json`；记录变更。若数据变化，重新统计不同 ID 和分类条目，更新快照字段。版本号是本衍生发行版号，上游版本单独保留。

English: Update `VERSION`, `package.json`, skill metadata, and `release-manifest.json` consistently. If data changes, recompute unique IDs and category totals. Keep the derivative distribution version separate from its upstream source version.

```sh
node scripts/validate.js
node --test
```

中文：检查图文链接、模板占位符、许可与来源。新增原图或人物案例时确保自己有权发布。确认目标仓库与可见性，再提交。

English: Check local media links, template placeholders, license, and provenance. Publish source photos/examples only when you have permission. Confirm the target repository and visibility before committing.

## 打包 / Package

中文：从完整提交打包，不把 `.git`、本机路径、凭据或缓存放进 ZIP。以下在有 Python 3 与 Git 的发布环境执行，版本号按实际修改：

English: Archive the committed release with no `.git`, local paths, credentials, or caches. In a release environment with Git and Python 3, update the version below as needed:

```sh
git archive --format=zip --prefix=ai-image-prompts-skill/ --output=../ai-image-prompts-skill-v1.1.0.zip HEAD
python -c "import hashlib,pathlib; p=pathlib.Path('../ai-image-prompts-skill-v1.1.0.zip'); print(hashlib.sha256(p.read_bytes()).hexdigest()+'  '+p.name)" > ../SHA256SUMS.txt
```

## 发布 / Publish

中文：仅在已登录且获准发布的仓库执行。Release 说明以中英双语描述实际变更与检查结果，附 ZIP 与 SHA256SUMS。

English: Run only in the authenticated, authorized target repository. Write bilingual release notes describing actual changes and checks, and attach the ZIP and checksum file.

```sh
git tag v1.1.0
git push origin main
git push origin v1.1.0
gh release create v1.1.0 ../ai-image-prompts-skill-v1.1.0.zip ../SHA256SUMS.txt --title "v1.1.0 — Bilingual Illustrated Edition" --notes-file docs/release-notes-v1.1.0.md
```

中文：最后检查仓库首页、Release 附件与 CI 结果；不能把“本地文件已准备好”报告成“已上传成功”。

English: Verify the remote README, release assets, and CI results. A prepared local folder is not a completed upload.
