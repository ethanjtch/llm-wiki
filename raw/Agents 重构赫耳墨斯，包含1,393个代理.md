---
title: "Refactoring Hermes with 1,393 agents"
source: "https://nousresearch.com/refactoring-hermes-with-1393-agents"
author:
  - "[[Teknium]]"
published: 2026-09-15
created: 2026-09-16
description: "Hermes Agent refactored its own codebase: 1,393 subagents over about nineteen active hours cut non-test Python by 34.4%, for roughly $19,300 in model spend against a $150k-$1.8M estimate for doing it by hand."
tags:
  - "clippings"
---
## Refactoring Hermes with 1,393 agents 重构赫耳墨斯，包含1,393个代理

Or: How to get $1.8M of value from $19K of tokens  
或者：如何从1.9万美元的代币中获得180万美元的价值

---

![Grainy blue-toned illustration of a figure reaching toward a large cratered sphere, a sweeping wing-like form behind it](https://nousresearch.com/refactoring-hermes-with-1393-agents/banner.webp)

Grainy blue-toned illustration of a figure reaching toward a large cratered sphere, a sweeping wing-like form behind it

*TLDR: Hermes Agent autonomously plowed through about a million lines of unglamorous cleanup, freeing up Teknium and team to continue pushing features to users.  
TLDR：赫尔墨斯代理自主完成了大约一百万行乏味的清理工作，为Teknium团队继续向用户推送新功能腾出空间。*

We had long been putting off a thorough cleanup of Hermes, our open-source agent, because it meant taking engineers away from features and bug fixes. By September, the repository had more than a million lines of non-test Python. `gateway/run.py` alone was 34,847 lines long. I wanted smaller files, shared helpers, and fewer enormous functions to work through when something broke.  
我们一直推迟对开源代理Hermes的彻底清理，因为这意味着工程师们需要从功能和错误修复中分心。到九月，仓库中已有超过一百万行非测试Python代码。仅 `gateway/run.py` 就有34,847行。我希望文件更小，共享助手更多，当出现问题时，要处理的巨大函数更少。

On September 2nd, I asked my regular Hermes agent to do the cleanup. The main run lasted about nineteen active hours and dispatched 1,393 subagents, reaching 218 running at once. After a restart, a continuation session, and two rounds of community review and fixes, I merged [the PR](https://github.com/NousResearch/hermes-agent/pull/102117) on September 4th. It reduced non-test Python source by 34.4%.  
9月2日，我让我的常驻Hermes代理进行清理。主要运行持续了大约十九个小时，派出了1,393个子代理，同时运行了218个。 重启、继续会话以及两轮社区审查和修复后，我在9月4日合并了 [PR](https://github.com/NousResearch/hermes-agent/pull/102117) 。它将非测试Python源代码减少了34.4%。

The estimated model cost was about $19,300 for the main run, or roughly $25k including follow-up sessions. That excludes human review time. Our rough staffing estimate for doing the work manually was $150k-$1.8M for a small team working for two months to two years. We couldn't justify scheduling it alongside everything else we needed to ship.  
预估模型成本约为19,300美元（主要运行），或包括后续会议在内大约25,000美元。这还不包括人工审查时间。我们粗略估计，一个小团队手动完成这项工作需要150,000美元至1,800,000美元，工作时间为两个月到两年。我们无法证明将其安排在与我们其他需要发布的任务一起进行是合理的。

I use Hermes Agent everyday to develop Hermes Agent. As we fix bugs and review changes together, Hermes records what worked and updates its skills when I correct its approach or it finds the right pathway to solve new problems. By the time I asked for this refactor, it had learned my preferred procedures and standards and could apply them to a much larger job:  
我每天都使用Hermes Agent来开发Hermes Agent。当我们一起修复错误和审查更改时，Hermes会记录哪些方法有效，并在我纠正其方法或找到解决新问题的正确途径时更新其技能。在我要求进行重构时，它已经学会了我的首选程序和标准，并将它们应用于一个更大的任务：

> *I want a massive simplification set of PRs. or a single monolithic PR. I want LOC to drop dramatically. Minimum 30% overall. I want god files broken up. I want simplification across the board. I want unification of helpers and methods that can be reused. I want less if-if-if-if-if-if-else routing. I want code legibility up. I want interpretability of the codebase and how things connect to each other up. I want elegance. I want superfluous excess bloat code cleaned up and removed. I want it all done fully. No excuses. No waiting for my decisions. Get it all done, and present me a PR or set of PRs when done.  
> 我希望有一套大规模简化的PR集合，或者一个单一的巨石型PR。我希望代码行数（LOC）大幅下降。至少整体下降30%。我希望将god文件拆分。我希望全面简化。我希望将可重用的辅助函数和方法统一。我希望减少层层嵌套的if-else路由。我希望代码可读性提高。我希望代码库的可解释性和事物之间如何相互连接的可解释性提高。我希望优雅。我希望清理并移除多余的冗余代码。我希望所有工作都完成。不要找借口。不要等待我的决定。完成所有工作，完成后向我提交一个或一组PR。*

I used `/goal`, which gives Hermes a standing objective and prompts it to continue when it would otherwise stop.  
我使用了 `/goal` ，这为赫尔墨斯设定了一个持续的目标，并促使它在其他情况下停止时继续。

## Self-improvement (for real) 自我提升（真的）

My `hermes-agent-dev` skill grew out of my everyday work on the repository. When we worked out a procedure or I corrected a mistake, Hermes (automatically) noticed this and saved the reusable lesson. Over time, it accumulated instructions about how to prepare a PR, which shortcuts to avoid, and how to verify a change. [Skills](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills) are readable Markdown documents, with reference files and scripts where needed, that the agent can load for later tasks. Hermes writes and revises them as it works.  
我的技能源于我在仓库的日常工作中。 当我们制定一个程序或纠正一个错误时，赫尔墨斯（自动）会注意到这一点，并保存可重用的经验。随着时间的推移，它积累了关于如何准备一个PR、要避免哪些快捷键以及如何验证更改的指令。 [技能](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills) 是可读的Markdown文档，需要时附带参考文件和脚本，代理可以加载用于后续任务。赫尔墨斯在执行过程中编写和修改它们。

The current version of `hermes-agent-dev` includes this instruction for a failing check:  
当前版本中的 `hermes-agent-dev` 包含以下失败的检查指令：

> *repro on `origin/main` HEAD in clean env to check whether it's pre-existing  
> 在干净的环境中对 `origin/main` HEAD 进行复现，以检查它是否是预先存在的*

In other words, run the failing test on unchanged code to help determine whether your change caused it. Hermes used the same kind of comparison during the refactor: it established a frozen baseline and checked failures against it as it integrated the workers' changes.  
换句话说，在代码未更改的情况下运行失败的测试，以帮助确定您的更改是否导致了这个问题。赫耳墨斯在重构期间也使用了类似的比较：它在集成工人的更改时，将一个冻结的基线与失败进行对比。

I send that skill around to all our engineers. They can install it in their own Hermes setups, so their agents can use procedures and corrections developed in my sessions. They get the benefit of that work without having to repeat the sessions themselves, and their agents can adapt the skill as they use it.  
我将这项技能发送给所有工程师。他们可以在自己的Hermes设置中安装它，这样他们的代理就可以使用我在会话中开发的程序和纠正。他们可以从中受益，而无需亲自重复会话，并且他们的代理可以在使用过程中调整技能。

## Running the refactor 运行重构

The orchestrator measured the codebase and divided it into 36 non-overlapping groups. It used my objective and the accumulated guidance to prepare written assignments, without my having to brief each worker.  
协调者测量了代码库，并将其划分为36个互不重叠的组。它使用我的目标和累积的指导来准备书面任务，无需我为每个工人进行简报。

Workers used git worktrees, separate checkouts where they could make changes without overwriting one another's files. Their briefs identified the code to simplify, the interfaces to preserve, and the checks required before committing.  
员工使用git worktree，这是独立的检出，他们可以在不覆盖彼此文件的情况下进行更改。他们的简报确定了需要简化的代码、需要保留的接口以及提交前所需的检查。

Some workers delegated parts of their assignments again. The tree reached three levels below the original agent, which handled coordination rather than editing source files: it wrote assignments and scripts, read worker reports, integrated branches, and ran checks.  
一些工人再次将部分任务委托出去。这棵树达到了原始代理的三个层级以下，该代理负责协调而非编辑源文件：它编写任务和脚本，阅读工人报告，合并分支，并运行检查。

Hermes coordinated the agents in one Python process on an i7 desktop with 64 GB of RAM. Their tools ran in local subprocesses, while Claude Fable 5.1 handled inference remotely.  
赫尔墨斯在一台64GB RAM的i7台式机上，通过一个Python进程协调代理。他们的工具在本地子进程中运行，而Claude Fable 5.1远程处理推理。

The agent checked specific interfaces against the original code. A tool's JSON schema had to remain identical, for example, and a CLI command's `--help` output could be compared byte for byte. Workers also had to commit after each verified step.  
代理程序将特定接口与原始代码进行了核对。例如，一个工具的JSON模式必须保持一致，CLI命令的 `--help` 输出可以逐字节进行比较。工人在每个验证步骤后也必须提交。

About fifty minutes in, the provider's authentication token expired and the resulting failures killed the run. The workers' commits and briefs survived. I used a separate Hermes session to diagnose the failure and prepare a handoff, then supplied it to the resumed session. Hermes sent workers back to inspect their saved changes, repair unfinished extractions, and continue.  
关于50分钟后，提供者的身份验证令牌过期，导致失败的结果杀死运行。工人的提交和摘要幸存下来。我使用了一个单独的Hermes会话来诊断故障并准备交接，然后将其提供给恢复的会话。Hermes让工人返回检查他们保存的更改，修复未完成的提取，并继续。

For `gateway/run.py`, our biggest file, workers separated message dispatch, streaming, RPC, and lifecycle handling into modules. Elsewhere, they consolidated duplicate helpers and replaced long name-based `if/elif` chains with dispatch tables.  
对于 `gateway/run.py` ，我们最大的文件，工作人员将消息分发、流处理、RPC和生命周期处理分离成模块。在其他地方，他们合并了重复的辅助工具，并用调度表替换了基于长名称的 `if/elif` 链。

Reviewers caught public names that workers had removed because they had no callers inside the repository, even though external plugins could import them. An automated rewrite of `suppress()` calls also changed exception handling at roughly 65 sites. These were real regressions the existing tests had missed. We fixed them before merge, over two rounds of community review. [Further fixes followed after merge](https://github.com/NousResearch/hermes-agent/issues/103563).  
审阅者发现了工人删除的公共名称，因为这些名称在存储库中没有调用者，尽管外部插件可以导入它们。对 `suppress()` 调用的自动化重写也在大约65个网站上改变了异常处理。这些都是现有测试遗漏的真实回归。我们在合并前修复了这些问题，经过了两次社区审查。合并后 [还进行了进一步的修复](https://github.com/NousResearch/hermes-agent/issues/103563) 。

## Was the code easier to work with?代码是否更容易使用？

The PR's before-and-after measurements showed how much the code had changed:  
公关部门在前后对比测量中展示了代码的变化程度：

| Metric 公制 | Before 之前 | After 之后 |
| --- | --- | --- |
| Non-test Python lines (all directories) 非测试Python代码行（所有目录） | 1,063,826 | 698,363 |
| Files over 5,000 lines 文件超过5,000行 | 37 | 6 |
| Functions over 300 lines 函数超过300行 | 192 | 2 |
| Longest `if/elif` chain 最长链 | 92 branches 92个分支 | 9 |
| `gateway/run.py` | 34,847 lines 34,847行 | 5,512 |

Does code that's easier for humans to navigate also work better for agents? Splitting a function makes its definition shorter, but may require the agent to follow calls into other files. We tested one part of that question by simulating lookups of the same 4,000 symbols in both versions. Each lookup searched for the definition, read a 60-line window, and continued in 2,000-line windows only if the definition extended beyond it.  
代码是否易于人类导航也更适合代理？将函数拆分可以缩短其定义，但可能需要代理跟随调用到其他文件。我们通过模拟在两个版本中查找相同的4,000个符号的部分来测试了这个问题。每次查找都搜索定义，读取60行窗口，并且只有在定义超出窗口时才在2,000行窗口中继续。

The average tokens returned per lookup fell from 2,218 to 993. Lookups requiring another read window fell from 628 to 184. Several functions that previously required reading tens of thousands of tokens could now be read in a few thousand.  
平均每次查找返回的令牌数从2,218下降到993。需要另一个读取窗口的查找从628下降到184。之前需要读取数万个令牌的几个功能现在可以在几千个令牌内读取。

These are lookup costs; we didn't measure agents completing engineering tasks. The median lookup actually returned more tokens: with fewer comments and docstrings, a fixed window of lines contained denser code. The average fell because the very large definitions got much smaller.  
这些是查找成本；我们没有测量代理完成工程任务。中值查找实际上返回了更多标记：在注释和文档字符串较少的情况下，固定窗口的行包含更密集的代码。平均数下降是因为非常大的定义变得很小。

There were other costs. Splitting files increased the module count and import dependencies, and some entry points took longer to import. The refactor made individual pieces easier to read without resolving all the coupling between them. Six files still exceeded 5,000 lines.  
其他还有一些成本。分割文件增加了模块数量和导入依赖，一些入口点导入时间更长。重构使得各个部分更容易阅读，而不必解决它们之间的所有耦合。仍有六个文件超过了5,000行。

The [benchmark data](https://gist.github.com/teknium1/a7adb797243d6355c76abc9cae88838b) includes the lookup results and the dependency and runtime measurements.  
基准数据包括查找结果以及依赖性和运行时测量。

## Lessons learned 学到的教训

Running hundreds of workers exposed opportunities for improvement in Hermes itself. For example, workers in separate worktrees had started roughly thirty copies of Pyright, a Python language server, consuming about 8.7 GB. A follow-up change let the worktrees share one server, with a live check that diagnostics still arrived from each. We also reduced duplicated HTTP transports and fixed references that kept finished agents in memory.  
运行数百名工人揭示了赫尔墨斯本身改进的机会。例如，在不同工作树中的工人已经启动了大约三十个Pyright副本，这是一个Python语言服务器，消耗了大约8.7 GB。后续的更改使得工作树可以共享一个服务器，同时确保诊断信息仍然来自每个工作树。我们还减少了重复的HTTP传输并修复了使完成代理保留在内存中的引用。

We changed the instructions and checks future workers would receive. The repository now has guidance on file size, function complexity, and where new behavior belongs, split by area so workers get the relevant rules when they need them. We also added a check that flags removed public names and tests for review.  
我们更改了未来的工人将收到的说明和检查。现在存储库中有关于文件大小、功能复杂性和新行为所属区域的指导，按区域划分，以便工人在需要时获得相关规则。我们还添加了一个检查，标记已删除的公共名称并测试审查。

My Hermes skills were automatically updated with lessons from this refactor, which I can share with the team. All for 1% of the cost and 1% of the time we’d estimated it would take if we attempted it manually.  
我的赫尔墨斯技能已自动更新，其中包含这次重构的教程，我可以与团队分享。这一切只需我们手动尝试时预估成本的1%和时间1%。

This was a great example of how Hermes is a superpower for teams: work through a problem with Hermes, let it record what you learned, and make that experience available to the next task and the next engineer. The next time we tackle a refactor, my Hermes and the engineers using the updated skill can start with the lessons from this one.  
这是一个很好的例子，说明了赫尔墨斯是如何成为团队的超能力：通过赫尔墨斯解决问题，让它记录你所学到的知识，并将这次经验应用于下一个任务和下一个工程师。下次我们进行重构时，我的赫尔墨斯和掌握新技能的工程师可以从这次的经验中汲取教训。