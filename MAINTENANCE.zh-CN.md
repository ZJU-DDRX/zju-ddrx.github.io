# DDRX 网站中文维护说明

这份文档给后续维护网站的同学使用。最推荐的维护方式是：把需要新增或修改的信息整理好，然后直接交给 Codex，让 Codex 修改网页、整理图片、检查链接并提交。

网站地址：

```text
https://zju-ddrx.github.io/
```

主要网页：

```text
index.html          首页
team.html           Team 成员页面
publications.html   Publications 页面
research.html       Research 页面
competitions.html   Competitions 页面
lab-life.html       Lab Life 页面
join-us.html        Join Us 页面
```

论文数据主要在：

```text
assets/data/publications.json
```

网站使用的图片主要在：

```text
assets/images/
```

原始图片建议先放在项目外层的：

```text
../pic/
```

## 使用 Codex 的基本方式

维护时可以这样说：

```text
请你更新 DDRX 网站。我已经把原始图片放在 pic/... 下面。
请按照现有网站风格添加内容，图片压缩后放到 assets/images/...，
更新相关 html/json/readme，检查本地页面是否正常，最后提交并 push。
```

如果暂时不想 push，可以加一句：

```text
先不要 push，只在本地修改并告诉我改了哪些文件。
```

如果希望上线，可以说：

```text
修改完成后请 commit 并 push 到 GitHub Pages。
```

## 图片命名规则

请尽量使用英文小写和短横线：

```text
2026-05-20-team-gathering.jpg
2026-04-06-zijingang-campus.jpg
lei-xie.jpg
sparse-gp-drifting.jpg
```

避免：

```text
空格
过长标题
重复文件名
未注明日期的活动照片
```

Lab Life 的照片建议一定用日期开头，因为网站会按文件名日期排序：

```text
YYYY-MM-DD-short-description.jpg
```

## 首页 Home 添加信息

首页通常只放最重要的信息：最新成果、精选论文、新闻、Lab Life 预览和联系方式。

给 Codex 的模板：

```text
请更新首页 index.html：

1. News 增加一条：
日期：
标题/内容：
是否需要配图：
图片已放在：

2. Recent work 增加/替换为这篇论文：
论文标题：
会议/期刊：
年份：
页面链接/DOI：
头图已放在：

3. 请保持现有视觉风格和响应式布局，更新后检查首页是否正常。
```

## Team 页面添加成员

成员头像原图建议放在：

```text
pic/team/
```

给 Codex 的模板：

```text
请在 Team 页面添加/更新成员：

中文名：
英文名：
身份：例如 Professor / Ph.D. Student / Master's Student / Undergraduate Student
地点：例如 Hangzhou
邮箱：
个人主页：
Google Scholar：
GitHub：
ORCID：
DBLP：
OpenReview：
研究方向一句话：
头像文件：pic/team/xxx.jpg

请把头像压缩后放到 assets/images/people/，
并按照页面现有分类和卡片风格添加。
```

如果某些链接没有，可以留空：

```text
没有的链接请不要显示按钮。
```

## Publications 添加论文

论文首图原图建议放在：

```text
pic/publications/
```

给 Codex 的模板：

```text
请在 Publications 页面添加这篇论文：

年份：
标题：
作者：
会议/期刊：
DOI：
Publisher 链接：
arXiv 链接：
PDF 链接：
Code 链接：
Project 链接：
BibTeX：
Keywords：例如 drifting, MPC, Gaussian process
论文总览图/流程图：pic/publications/xxx.png

请更新 assets/data/publications.json，
压缩图片到 assets/images/papers/，
并确认 Publications 页面可以正常显示、Cite 按钮可用。
```

如果想让 Codex 帮忙找链接，可以说：

```text
请联网查找这篇论文的 DOI、publisher 页面、arXiv 页面和 BibTeX。
优先使用 IEEE、Elsevier、Springer、Taylor & Francis、ACM、arXiv、Google Scholar 等官方或可信来源。
```

注意：如果论文图片来自出版商 PDF，请确认版权和公开展示权限。最好使用作者自己论文中的总览图、项目主页图或允许展示的图片。

## Research 页面添加方向

Research 页面适合放稳定的研究方向，不适合把每一篇论文都堆进去。

给 Codex 的模板：

```text
请更新 Research 页面，新增/修改一个研究方向：

方向名称：
一句话概括：
主要技术关键词：
代表性论文：
相关图片：pic/publications/xxx.png 或 pic/research/xxx.jpg

请保持现有 Driving / Drifting / Racing 的结构和视觉风格。
```

## Competitions 添加比赛

比赛图片建议放在：

```text
pic/competitions/比赛英文短名/
```

视频如果比较大，不建议直接放进仓库。可以用 YouTube、Bilibili 或网盘链接。

给 Codex 的模板：

```text
请在 Competitions 页面添加比赛：

比赛全称：
简称：
时间：
地点：
成绩：
主办方/官网链接：
队伍成员：
简短介绍：
图片文件夹：pic/competitions/xxx/
视频链接：

请按最新年份排序，把图片压缩后放到 assets/images/competitions/，
并更新 competitions.html。
```

## Lab Life 添加活动照片

Lab Life 当前分类：

```text
team-building/
daily/
cycling/
hiking/
badminton/
```

原始照片放在：

```text
pic/lab-life/team-building/
pic/lab-life/daily/
pic/lab-life/cycling/
pic/lab-life/hiking/
pic/lab-life/badminton/
```

文件名格式：

```text
2026-05-20-team-gathering.jpg
2026-04-06-zijingang-campus.jpg
2026-02-12-badminton.jpg
```

给 Codex 的模板：

```text
我更新了 pic/lab-life/ 下的照片。
请根据文件名日期重新排序 Lab Life 页面，
压缩图片到 assets/images/lab-life/，
首页 Lab Life 轮播也同步更新。
Badminton 只显示日期，不显示标题。
完成后检查页面图片引用是否缺失。
```

## Join Us 页面修改

给 Codex 的模板：

```text
请更新 Join Us 页面：

欢迎语：
招生对象：
合作方向：
联系邮箱：
GitHub 链接：
地址：

请保持文字简洁，地址字体比正文稍小。
```

## Logo 和基础信息修改

Logo 原图建议放在：

```text
pic/ddrx-head.png
pic/zhejiang-university-logo.png
```

给 Codex 的模板：

```text
我更新了 logo 原图，请同步替换网站 logo。
DDRX logo：
浙江大学校标：

请处理成适合网页使用的透明底图片，
并更新所有页面 header 中的显示。
```

## 修改后检查清单

让 Codex 修改完后，最好要求它检查：

```text
请检查：
1. 所有 html 页面能否本地打开
2. 所有图片和链接路径是否存在
3. Publications JSON 是否格式正确
4. 移动端布局是否没有明显错位
5. git status 中是否只有本次相关改动
```

本地预览命令：

```powershell
cd ddrx-github-site
python -m http.server 8000
```

打开：

```text
http://localhost:8000
```

## 发布上线

如果确认没问题，让 Codex 执行：

```text
请 commit 并 push。
```

或手动执行：

```powershell
git status
git add .
git commit -m "Describe the update"
git push origin main
```

如果遇到本机代理导致 GitHub 推送失败，可以尝试：

```powershell
git -c http.proxy= -c https.proxy= push origin main
```

GitHub Pages 通常几分钟内更新。如果浏览器还显示旧页面，可以按：

```text
Ctrl + F5
```

强制刷新缓存。
