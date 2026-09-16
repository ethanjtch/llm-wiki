---
title: 我如何使用 Obsidian（Steph Ango）
type: source
tags:
  - 知识管理
  - 方法论
  - Obsidian
created: 2026-09-16
updated: 2026-09-16
sources: 1
---

## 来源信息
- **作者**：Steph Ango（Obsidian CEO）
- **原文**：https://stephango.com/vault（个人 vault 模板公开于 kepano-obsidian 仓库）
- **发布**：未标注（2023 前后）

## 核心论点
一套**自下而上**的笔记法：不做顶层设计，**拥抱混乱与懒惰**，让结构从链接中涌现。贯彻 file over app——Obsidian 的库就是一个文件夹，"如果你想创造历久弥新的数字作品，它们必须是你能控制的文件，格式易于检索与读取"。

## 要点摘录

### 个人规则（style guide）
- 避免多库、避免用文件夹整理、避免非标准 Markdown；**大量使用内部链接**；日期一律 `YYYY-MM-DD`；7 分制评分；每周一份待办清单（[[我如何完成待办事项（Steph Ango）]]）。
- **一致的风格把未来数百个决策塌缩成一个**（如标签一律复数，命名就不再是问题）——写下来，可随时改。

### 组织：文件夹少到极致
- 根目录放个人笔记（日记/随笔/常青笔记）；References 放外部事物（书/电影/人）；Clippings 放他人文章；Attachments/Daily/Templates 三个管理目录。
- 主要用 `categories` 属性 + Obsidian Bases 来聚合视图，几乎不用文件树导航。

### 链接哲学
- 尽量链接第一次提及；**未解析（红链）链接是面包屑**——"为未来事物之间的联系留下线索"。这与本仓库 [[LLM Wiki 模式]] 允许红链（标记待建页）完全同构。

### 分形日记与随机重访
- 随手记片段（`YYYY-MM-DD HHmm` 前缀）→ 几天整理 → 月度回顾 → 年度回顾（40 Questions 模板）→ "一张可以放大缩小的人生分形图"。
- 每几个月做一次"随机重访"（random note + 局部图）：重访旧想法、补缺失链接、按新风格维护。

### 模板与属性
- 类别模板在顶部写属性（日期/人物/主题/地点/评分）；属性名跨类别复用（如 `genre` 跨书影剧）；短名；能用 list 就不用 text。

### 发布
- 网站独立 vault + Jekyll/Netlify 或 Quartz 等静态生成；Obsidian Publish 是低控制替代。

### 关键张力：拒绝把维护交给 LLM
> 有人问我能否用语言模型自动化（维护），我并不想。我享受这个过程，**维护帮助我更理解自己的模式**。──链接到 *Don't delegate understanding*（[[不要把理解力拱手让人（Steph Ango）]]）

这与 [[LLM Wiki 模式]]（Karpathy：把全部 bookkeeping 交给 LLM）构成全库最重要的争论：**结构的涌现由谁来维护——人享受过程的劳动，还是模型不厌其烦的自动化？** 见 [[认知外包]] 的边界讨论。

## 关联页面
- 概念：[[涌现式笔记法]]、[[常青笔记]]、[[文件优先]]、[[个人工单系统]]、[[LLM Wiki 模式]]、[[认知外包]]
- 实体：[[Steph Ango]]
- 相关来源：[[常青笔记将想法转化为你可以操控的对象（Steph Ango）]]、[[不要把理解力拱手让人（Steph Ango）]]、[[我如何完成待办事项（Steph Ango）]]、[[大语言模型维基（Karpathy）]]