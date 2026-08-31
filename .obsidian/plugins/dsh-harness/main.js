var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => DshHarnessPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian5 = require("obsidian");
var import_node_os5 = require("node:os");
var import_node_path8 = require("node:path");

// src/service-manager.ts
var import_node_child_process = require("node:child_process");
var import_node_fs = require("node:fs");
var import_node_net = require("node:net");
var import_node_os = require("node:os");
var import_node_path = require("node:path");

// src/i18n.ts
var dict = {
  // ---- 语言设置 ----
  "settings.language.title": ["\u754C\u9762\u8BED\u8A00", "Language"],
  "settings.language.desc": ["\u63D2\u4EF6\u754C\u9762\u8BED\u8A00\uFF1B\u8DDF\u968F Obsidian\uFF08\u4EC5\u4E2D\u6587/\u82F1\u6587\uFF0C\u5176\u4ED6\u8BED\u8A00\u81EA\u52A8\u82F1\u6587\uFF09", "Plugin UI language; follows Obsidian (Chinese or English \u2014 any other language falls back to English)"],
  "settings.language.auto": ["\u8DDF\u968F Obsidian", "Follow Obsidian"],
  "settings.language.zh": ["\u4E2D\u6587", "\u4E2D\u6587"],
  "settings.language.en": ["English", "English"],
  // ---- 状态横幅 ----
  "settings.status.title": ["DSH \u72B6\u6001", "DSH Status"],
  "settings.status.reading": ["\u8BFB\u53D6\u4E2D\u2026", "Reading\u2026"],
  "settings.status.installedVer": ["\u5DF2\u5B89\u88C5\uFF08{v}\uFF09 \xB7 \u670D\u52A1\u8FD0\u884C\u4E2D \u2713", "Installed ({v}) \xB7 running \u2713"],
  "settings.status.installed": ["\u5DF2\u5B89\u88C5 \xB7 \u670D\u52A1\u8FD0\u884C\u4E2D \u2713", "Installed \xB7 running \u2713"],
  "settings.status.stopped": ["\u5DF2\u5B89\u88C5 \xB7 \u670D\u52A1\u672A\u542F\u52A8", "Installed \xB7 not running"],
  "settings.status.notInstalled": ["\u672A\u5B89\u88C5", "Not installed"],
  "settings.status.check": ["\u68C0\u67E5\u66F4\u65B0", "Check for updates"],
  "settings.status.checking": ["\u68C0\u67E5\u4E2D\u2026", "Checking\u2026"],
  "settings.status.changelog": ["\u66F4\u65B0\u65E5\u5FD7", "Changelog"],
  // ---- 插件信息（DSH 状态下一栏）----
  "settings.pluginVersion.title": ["\u63D2\u4EF6\u4FE1\u606F", "Plugin info"],
  "settings.pluginVersion.installed": ["\u5DF2\u5B89\u88C5 v{v}", "Installed v{v}"],
  "settings.pluginVersion.check": ["\u68C0\u67E5\u63D2\u4EF6\u66F4\u65B0", "Check plugin updates"],
  "settings.pluginVersion.checking": ["\u6253\u5F00\u66F4\u65B0\u9875\u2026", "Opening updates\u2026"],
  "settings.pluginVersion.changelog": ["\u66F4\u65B0\u65E5\u5FD7", "Changelog"],
  "settings.pluginVersion.repoHint": ["\u4F7F\u7528\u53CD\u9988\u6B22\u8FCE\u7559\u8A00 \u{1F4AC}", "feedback & issues welcome \u{1F4AC}"],
  "pluginChangelog.title": ["\u63D2\u4EF6\u66F4\u65B0\u65E5\u5FD7", "Plugin Changelog"],
  "pluginChangelog.locale": ["zh", "en"],
  "pluginUpdate.latest": ["\u63D2\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C\uFF08v{v}\uFF09", "Plugin is up to date (v{v})"],
  "pluginUpdate.checkFail": ["\u65E0\u6CD5\u68C0\u67E5\u63D2\u4EF6\u66F4\u65B0\uFF08\u7F51\u7EDC\u4E0D\u53EF\u8FBE\uFF09\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5", "Cannot check for plugin updates (network unreachable); try again later"],
  "pluginUpdate.updateTitle": ["\u53D1\u73B0\u63D2\u4EF6\u65B0\u7248\u672C", "Plugin update available"],
  "pluginUpdate.updateBody": ["\u5F53\u524D v{local} \u2192 \u6700\u65B0 v{remote}\u3002\u6253\u5F00 Obsidian \u5B98\u65B9\u5546\u5E97\u9875\u67E5\u770B\uFF1B\u5E94\u7528\u5185\u66F4\u65B0\u5728 Obsidian \u8BBE\u7F6E \u2192 \u7B2C\u4E09\u65B9\u63D2\u4EF6 \u2192 \u68C0\u67E5\u66F4\u65B0\u3002", "Current v{local} \u2192 latest v{remote}. Open the official Obsidian store page to view; in-app updates are in Obsidian Settings \u2192 Community plugins \u2192 Check for updates."],
  "pluginUpdate.goStore": ["\u6253\u5F00\u5546\u5E97\u9875", "Open store page"],
  "pluginUpdate.storeHint": ["\u5DF2\u6253\u5F00\u5546\u5E97\u9875\uFF1B\u66F4\u65B0\u8BF7\u5728 Obsidian \u8BBE\u7F6E \u2192 \u7B2C\u4E09\u65B9\u63D2\u4EF6 \u2192 \u68C0\u67E5\u66F4\u65B0", "Store page opened; to update, use Obsidian Settings \u2192 Community plugins \u2192 Check for updates"],
  // ---- 基础设置 ----
  "settings.section.basic": ["\u57FA\u7840\u8BBE\u7F6E", "Basic Setup"],
  "settings.install.title": ["\u4E00\u952E\u914D\u7F6E DSH", "One-click configure DSH"],
  "settings.install.desc": ["\u6CA1\u88C5\u8FC7 DeepSeek Harness \u5C31\u70B9\u8FD9\u4E2A\uFF1A\u5148\u786E\u8BA4\u5B89\u88C5\u76EE\u5F55\uFF0C\u518D\u81EA\u52A8\u4E0B\u8F7D\u3001\u5B89\u88C5\u3001\u914D\u7F6E\u3002\u4F1A\u81EA\u52A8\u8865\u9F50\u7F3A\u5931\u5DE5\u5177\uFF08git / Node.js / pnpm\uFF09\u5E76\u5168\u5C40\u5B89\u88C5 DSH \u547D\u4EE4\u884C\u5DE5\u5177 dsh\uFF1B\u5DF2\u6709 DSH \u4F46\u7F3A\u4F9D\u8D56/CLI \u4E5F\u4F1A\u81EA\u52A8\u8865\u9F50\uFF0C\u51E0\u5206\u949F\u641E\u5B9A", "Never installed DeepSeek Harness? Click this: confirm the directory, then it downloads, installs and configures everything. It fills in missing tools (git / Node.js / pnpm) and installs the global DSH CLI; if DSH already exists but tools/CLI are missing, it fills them in automatically. A few minutes, no command line"],
  "settings.install.btn": ["\u4E00\u952E\u914D\u7F6EDSH", "Configure DSH"],
  "settings.install.preparing": ["\u51C6\u5907\u4E2D\u2026", "Preparing\u2026"],
  "settings.detect.title": ["\u4E00\u952E\u68C0\u6D4B\u914D\u7F6E", "Detect & apply config"],
  "settings.detect.desc": ["\u5DF2\u7ECF\u88C5\u8FC7 DSH \u7684\uFF0C\u81EA\u52A8\u627E\u5230\u4F4D\u7F6E\u5E76\u586B\u597D\u914D\u7F6E", "Already have DSH? Auto-detect its location and fill in the config"],
  "settings.detect.btn": ["\u68C0\u6D4B\u5E76\u586B\u5145", "Detect & fill"],
  "settings.detect.progress": ["\u68C0\u6D4B\u4E2D\u2026", "Detecting\u2026"],
  "settings.installDir.title": ["\u5B89\u88C5\u76EE\u5F55", "Install directory"],
  "settings.installDir.desc": ["DSH \u5B89\u88C5\u4F4D\u7F6E\uFF1B\u672C\u673A\u5DF2\u6709 DSH \u65F6\u81EA\u52A8\u586B\u5165\u68C0\u6D4B\u5230\u7684\u8DEF\u5F84", "Where DSH is installed; auto-filled when a local DSH is detected"],
  "settings.autoUpdate.title": ["\u81EA\u52A8\u68C0\u67E5\u66F4\u65B0", "Auto-check updates"],
  "settings.autoUpdate.desc": ["\u6253\u5F00 DSH \u9762\u677F/\u542F\u52A8\u670D\u52A1\u65F6\u81EA\u52A8\u68C0\u6D4B DSH \u65B0\u7248\u672C\uFF08\u53D1\u73B0\u65B0\u7248\u672C\u624D\u5F39\u7A97\uFF0C\u4E0D\u4F1A\u6253\u6270\uFF09", "Automatically check for new DSH versions when opening the panel / starting the service (only prompts when an update is found)"],
  // ---- 快捷操作 ----
  "settings.section.quick": ["\u5FEB\u6377\u529F\u80FD", "Quick actions"],
  "settings.reconnect.title": ["\u91CD\u8FDE\u670D\u52A1", "Reconnect service"],
  "settings.reconnect.desc": ["DSH \u9762\u677F\u52A0\u8F7D\u5931\u8D25\u6216\u5361\u4F4F\u65F6\uFF0C\u91CD\u65B0\u63A2\u6D4B\u5E76\u5237\u65B0\u9762\u677F", "When the DSH panel fails to load or hangs, re-probe and refresh the panel"],
  "settings.reconnect.btn": ["\u5237\u65B0", "Refresh"],
  "settings.browser.title": ["\u5728\u6D4F\u89C8\u5668\u6253\u5F00 DSH", "Open DSH in browser"],
  "settings.browser.desc": ["\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u6D4F\u89C8\u5668\u6253\u5F00 DSH Web GUI\uFF08\u72EC\u7ACB\u7A97\u53E3\uFF0C\u4E0D\u53D7 Obsidian \u9762\u677F\u9650\u5236\uFF09", "Open the DSH Web GUI in your default browser (separate window, not constrained by the Obsidian panel)"],
  "settings.browser.btn": ["\u6253\u5F00\u6D4F\u89C8\u5668", "Open browser"],
  "settings.aed.title": ["AED for DSH", "AED for DSH"],
  "settings.aed.desc": ["\u4E0B\u8F7D\u5E76\u8FD0\u884Cdsh-fix\uFF0C\u5E76\u4EE5\u5B89\u5168\u6A21\u5F0F\u542F\u52A8DSH\u3002\u8BF7\u60A8\u4E8E\u5B89\u5168\u6A21\u5F0F\u542F\u52A8DSH\u540E\u547D\u4EE4DSH\u8FDB\u884C\u81EA\u6211\u4FEE\u590D\u3002", "Download and run dsh-fix, and start DSH in safe mode. After DSH starts in safe mode, please instruct DSH to perform self-repair."],
  "settings.aed.btn": ["AED \u62A2\u6551", "AED"],
  "settings.exitSafeMode.btn": ["\u9000\u51FA\u5B89\u5168\u6A21\u5F0F", "Exit safe mode"],
  // ---- 桥接（状态与发送开关）----
  "settings.section.send": ["\u6865\u63A5", "Bridge"],
  "settings.send.openPanel.title": ["Obsidian \u6865\u63A5\u5230 DSH \u804A\u5929\u6846", "Bridge Obsidian \u2192 DSH chat"],
  "settings.send.openPanel.desc": ["\u5F00\u542F\u540E\uFF0C\u6846\u9009\u7B14\u8BB0\u6587\u5B57\u53F3\u952E\u5373\u53EF\u53D1\u9001\u5230 DSH \u804A\u5929\u6846\uFF08\u547D\u4EE4\u9762\u677F\u540C\u6837\u53EF\u7528\uFF09\uFF1B\u53D1\u9001\u540E\u81EA\u52A8\u6253\u5F00 DSH \u9762\u677F\u67E5\u770B\u5904\u7406", "When enabled, select text in a note and right-click to send it to the DSH chat (command palette works too); the DSH panel opens automatically after sending"],
  "settings.bridge.toObsidian.title": ["DSH \u804A\u5929\u6846\u6865\u63A5\u5230 Obsidian", "Bridge DSH chat \u2192 Obsidian"],
  "settings.bridge.toObsidian.desc": ["\u63A7\u5236 DSH \u4E0E Obsidian \u4E4B\u95F4\u7684\u6865\u63A5\uFF1A\u81EA\u52A8\u53D1\u9001\uFF08\u6846\u9009\u6587\u5B57\u81EA\u52A8\u4EE5\u9690\u5F0F\u4FE1\u606F\u884C\u6CE8\u5165\u804A\u5929\u6846\uFF0C\u542B\u7CBE\u786E\u884C:\u5217\u4E0E\u5B57\u6570\uFF0C\u4E0D\u542B\u539F\u6587\uFF09\u3001\u53F3\u952E\u53D1\u9001\uFF08\u4EC5\u901A\u8FC7\u53F3\u952E\u83DC\u5355/\u547D\u4EE4\u53D1\u9001\uFF09\u3001\u53D6\u6D88\uFF08\u5173\u95ED\u6865\u63A5\uFF09\uFF1B\u975E\u300C\u53D6\u6D88\u300D\u65F6 DSH \u4EA7\u7269\u4E2D\u7684\u5E93\u5185\u53EF\u8BFB\u8DEF\u5F84\u70B9\u51FB\u5373\u53EF\u5728 Obsidian \u6253\u5F00", "Controls the bridge between DSH and Obsidian: Auto-send (selecting text injects an implicit info line with exact line:col and word count, without the original text), Right-click send (only via the context menu/command), or Off (disabled). When not Off, in-vault readable paths in DSH output open in Obsidian with one click"],
  "settings.bridge.toObsidian.off": ["\u53D6\u6D88", "Off"],
  "settings.bridge.toObsidian.auto": ["\u81EA\u52A8\u53D1\u9001", "Auto-send"],
  "settings.bridge.toObsidian.rightClick": ["\u53F3\u952E\u53D1\u9001", "Right-click send"],
  "settings.bridge.status.title": ["\u6865\u63A5\u72B6\u6001", "Bridge status"],
  "settings.bridge.status.installedReady": ["\u6587\u4EF6\u5DF2\u5B89\u88C5\uFF1B\u5DF2\u52A0\u8F7D\u4E14\u751F\u6548 \u2713\n1. \u6846\u9009\u6587\u5B57\u81EA\u52A8\u6CE8\u5165\u9690\u5F0F\u4FE1\u606F\u884C\uFF08\u7CBE\u786E\u4F4D\u7F6E + \u5B57\u6570\uFF0C\u4E0D\u542B\u539F\u6587\uFF09\u5230 DSH \u804A\u5929\u6846\n2. DSH \u4E2D\u7684\u5E93\u5185\u53EF\u8BFB\u8DEF\u5F84\u53EF\u70B9\u51FB\u5728 Obsidian \u6253\u5F00\n3. \u5149\u6807\u5728 DSH \u9762\u677F\u5185\u65F6\uFF0CObsidian \u5168\u5C40\u5FEB\u6377\u952E\u4ECD\u53EF\u54CD\u5E94\uFF08iframe \u5FEB\u6377\u952E\u900F\u4F20\uFF09", "Installed; loaded and working \u2713\n1. Selected text auto-injects an implicit info line (exact position + word count, no original text) into the DSH chat\n2. In-vault readable paths in DSH open in Obsidian with one click\n3. Obsidian global shortcuts still work while focus is inside the DSH panel (iframe shortcut passthrough)"],
  "settings.bridge.status.installedNotReady": ["\u6587\u4EF6\u5DF2\u5B89\u88C5\uFF1B\u672A\u751F\u6548\uFF08\u91CD\u542F DSH \u670D\u52A1\u540E\u751F\u6548\uFF09", "Installed; not working yet (takes effect after restarting the DSH service)"],
  "settings.bridge.status.notInstalled": ["\u672A\u5B89\u88C5", "Not installed"],
  "settings.bridge.restart.title": ["\u91CD\u542F DSH \u670D\u52A1", "Restart DSH service"],
  "settings.bridge.restart.desc": ["\u7ED3\u675F\u5360\u7528\u7AEF\u53E3\u7684\u8FDB\u7A0B\uFF08\u542B\u5E38\u9A7B\u8FDB\u7A0B\uFF09\u5E76\u91CD\u65B0\u542F\u52A8\uFF1B\u7528\u4E8E\u52A0\u8F7D\u6865\u63A5\u8865\u4E01\u3002\u6CE8\u610F\uFF1A\u4F1A\u4E2D\u65AD\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1", "Kill the process on the port (including detached ones) and restart; used to load the bridge patch. Note: this interrupts running tasks"],
  "settings.bridge.restart.btn": ["\u91CD\u542F\u670D\u52A1", "Restart"],
  "settings.bridge.restart.progress": ["\u91CD\u542F\u4E2D\u2026", "Restarting\u2026"],
  "settings.bridge.rewrite.btn": ["\u91CD\u65B0\u5199\u5165", "Rewrite"],
  "settings.bridge.rewrite.fail": ["\u6865\u63A5\u5199\u5165\u5931\u8D25\uFF1A{err}", "Failed to write bridge files: {err}"],
  "settings.bridge.rewrite.updated": ["\u6865\u63A5\u6587\u4EF6\u5DF2\u66F4\u65B0\uFF0C\u91CD\u542F DSH \u670D\u52A1\u540E\u751F\u6548", "Bridge files updated; restart the DSH service to apply"],
  "settings.bridge.rewrite.ready": ["\u6865\u63A5\u6587\u4EF6\u5DF2\u5C31\u7EEA", "Bridge files ready"],
  // ---- 面板显示 ----
  "settings.section.panel": ["\u9762\u677F\u663E\u793A", "Panel display"],
  "settings.zoom.title": ["\u9875\u9762\u7F29\u653E", "Page zoom"],
  "settings.zoom.desc": ["DSH \u9875\u9762\u7F29\u653E\u6BD4\u4F8B\uFF08\u5F53\u524D {z}\xD7\uFF09\uFF0C\u8303\u56F4 0.5\u20132.0\uFF0C\u6B65\u8FDB 0.05", "DSH page zoom (currently {z}\xD7), range 0.5\u20132.0, step 0.05"],
  "settings.bottomPad.title": ["\u5E95\u90E8\u57AB\u9AD8", "Bottom padding"],
  "settings.bottomPad.desc": ["\u9762\u677F\u5E95\u90E8\u7559\u767D\uFF08\u5F53\u524D {px}px\uFF09\uFF1AObsidian \u72B6\u6001\u680F\u53EF\u80FD\u906E\u6321\u9762\u677F\u5E95\u90E8\u5185\u5BB9\uFF0C\u57AB\u9AD8\u53EF\u907F\u514D\uFF1B\u8303\u56F4 0\u201330\uFF0C\u9ED8\u8BA4 20", "Empty space below the panel (currently {px}px): the Obsidian status bar may cover the panel bottom, so padding avoids it; range 0\u201330, default 20"],
  "settings.passthrough.title": ["iframe \u5185\u5FEB\u6377\u952E\u900F\u4F20", "Pass through shortcuts in iframe"],
  "settings.passthrough.desc": ["\u5F00\u542F\u540E\uFF0C\u5149\u6807\u805A\u7126\u5728 DSH \u9762\u677F\u5185\u65F6 Obsidian \u5168\u5C40\u5FEB\u6377\u952E\u4ECD\u53EF\u54CD\u5E94\uFF08\u81EA\u52A8\u904D\u5386 Obsidian \u5F53\u524D\u5FEB\u6377\u952E\u8BBE\u7F6E\uFF09\uFF1B\u4FEE\u6539\u5FEB\u6377\u952E\u6216\u672C\u5F00\u5173\u540E\uFF0C\u9700\u91CD\u542F DSH \u670D\u52A1\u751F\u6548", "When enabled, Obsidian global shortcuts still work while focus is inside the DSH panel (auto-reads your current Obsidian hotkey settings); restart the DSH service after changing hotkeys or this switch"],
  // ---- 高级设置 ----
  "settings.section.advanced": ["\u9AD8\u7EA7\u8BBE\u7F6E", "Advanced"],
  "settings.port.title": ["\u670D\u52A1\u7AEF\u53E3", "Service port"],
  "settings.port.desc": ["DSH Web GUI \u76D1\u542C\u7AEF\u53E3\uFF0C\u9ED8\u8BA4 3080", "Port the DSH Web GUI listens on; default 3080"],
  "settings.command.title": ["\u542F\u52A8\u547D\u4EE4", "Startup command"],
  "settings.command.hint": ["\u793A\u4F8B\uFF1Apnpm dsh web --port {port}\uFF08{port} \u81EA\u52A8\u66FF\u6362\u4E3A\u7AEF\u53E3\uFF1B\u82E5 dsh \u5728 PATH \u4E2D\u53EF\u7559\u7A7A\u81EA\u52A8\u63A2\u6D4B\uFF1B\u7528 pnpm \u542F\u52A8\u65F6\u8BF7\u628A\u5DE5\u4F5C\u76EE\u5F55\u8BBE\u4E3A DSH \u4ED3\u5E93\u8DEF\u5F84\uFF09", "Example: pnpm dsh web --port {port} ({port} is replaced automatically; leave empty to auto-detect when dsh is on PATH; set the working directory to the DSH repo when using pnpm)"],
  "settings.cwd.title": ["\u5DE5\u4F5C\u76EE\u5F55", "Working directory"],
  "settings.cwd.desc": ["\u542F\u52A8 DSH \u65F6\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF08DSH \u5DE5\u4F5C\u533A\uFF09\uFF1B\u7559\u7A7A\u4E3A Vault \u6839\u76EE\u5F55", "Working directory used to start DSH (the DSH workspace); empty means the Vault root"],
  "settings.autoStart.title": ["\u79BB\u7EBF\u65F6\u81EA\u52A8\u542F\u52A8", "Auto-start when offline"],
  "settings.autoStart.desc": ["\u6253\u5F00\u9762\u677F\u65F6\u82E5\u7AEF\u53E3\u65E0\u670D\u52A1\uFF0C\u81EA\u52A8\u8FD0\u884C\u542F\u52A8\u547D\u4EE4", "Automatically run the startup command when the port has no service"],
  "settings.detached.title": ["\u8FDB\u7A0B\u72EC\u7ACB\u5E38\u9A7B", "Detached persistent process"],
  "settings.detached.desc": ["\u5F00\u542F\u540E\uFF0C\u63D2\u4EF6\u542F\u52A8\u7684 DSH \u8FDB\u7A0B\u5728 Obsidian \u9000\u51FA\u540E\u7EE7\u7EED\u8FD0\u884C\uFF08\u9ED8\u8BA4\u5F00\u542F\uFF09\uFF1B\u5173\u95ED\u540E\u968F Obsidian \u9000\u51FA\u800C\u7EC8\u6B62", "When on (default), the DSH process started by the plugin keeps running after Obsidian exits; when off, it terminates with Obsidian"],
  "settings.readyTimeout.title": ["\u542F\u52A8\u7B49\u5F85\u65F6\u95F4", "Startup timeout"],
  "settings.readyTimeout.desc": ["\u81EA\u52A8\u542F\u52A8\u540E\u7B49\u5F85\u670D\u52A1\u5C31\u7EEA\u7684\u6700\u957F\u65F6\u95F4\uFF08\u5F53\u524D {s} \u79D2\uFF09\uFF1B\u9996\u6B21\u542F\u52A8\u53EF\u80FD\u9700\u8981 1\u20132 \u5206\u949F", "Max time to wait for the service after auto-start (currently {s}s); first start may take 1\u20132 minutes"],
  "settings.installUrl.title": ["\u5B89\u88C5\u5730\u5740", "Install URL"],
  "settings.installUrl.desc": ["\u514B\u9686\u4ED3\u5E93\u5730\u5740\uFF1B\u9ED8\u8BA4\u5B98\u65B9\u4ED3\u5E93\uFF0C\u7F51\u7EDC\u53D7\u9650\u65F6\u53EF\u6362\u4EE3\u7406\u955C\u50CF\uFF08\u5982 https://gh-proxy.com/https://github.com/deepseek-ai/deepseek-harness.git\uFF09", "Repo URL to clone; defaults to the official repo. Behind a restricted network, switch to a proxy mirror (e.g. https://gh-proxy.com/https://github.com/deepseek-ai/deepseek-harness.git)"],
  // ---- 面板视图 ----
  "view.action.reconnect": ["\u91CD\u8FDE\u670D\u52A1", "Reconnect"],
  "view.action.openBrowser": ["\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 DSH", "Open DSH in browser"],
  "view.monitor.disconnected": ["\u8FDE\u63A5\u5DF2\u65AD\u5F00\uFF1A{msg}", "Disconnected: {msg}"],
  "view.loading.title": ["\u6B63\u5728\u542F\u52A8 DeepSeek Harness\u2026", "Starting DeepSeek Harness\u2026"],
  "view.loading.detail": ["\u9996\u6B21\u542F\u52A8\u53EF\u80FD\u9700\u8981\u4E00\u4E24\u5206\u949F\uFF0C\u8BF7\u7A0D\u5019", "The first start may take a minute or two, please wait"],
  "view.copy.copied": ["\u547D\u4EE4\u5DF2\u590D\u5236", "Command copied"],
  "view.copy.failed": ["\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236", "Copy failed, please copy manually"],
  "view.install.title": ["\u8FD8\u6CA1\u5B89\u88C5 DeepSeek Harness", "DeepSeek Harness is not installed yet"],
  "view.install.desc": ["\u70B9\u4E00\u4E0B\u81EA\u52A8\u5B89\u88C5\uFF1A\u4F1A\u81EA\u52A8\u4E0B\u8F7D DeepSeek Harness \u5E76\u914D\u597D\u4E00\u5207\uFF0C\u5168\u7A0B\u4E0D\u7528\u78B0\u547D\u4EE4\u884C\u3002", "Click to install automatically: it downloads DeepSeek Harness and sets everything up \u2014 no command line needed."],
  "view.install.mark.ok": ["\u2713 \u5DF2\u5B89\u88C5", "\u2713 Installed"],
  "view.install.mark.missing": ["\u2717 \u672A\u5B89\u88C5", "\u2717 Missing"],
  "view.install.depsHint": ["\u4E0A\u9762\u6709\u7F3A\u5931\u7684\u5DE5\u5177\uFF0C\u5148\u70B9\u4E0B\u9762\u7684\u6309\u94AE\u88C5\u4E0A\uFF08\u9700\u8981\u6388\u6743\u65F6\u6309\u63D0\u793A\u5141\u8BB8\uFF09\uFF1A", "Some tools above are missing \u2014 install them with the buttons below (approve the prompts when asked):"],
  "view.install.git": ["\u4E00\u952E\u5B89\u88C5 git", "Install git"],
  "view.install.node": ["\u4E00\u952E\u5B89\u88C5 Node.js", "Install Node.js"],
  "view.install.pnpm": ["\u4E00\u952E\u5B89\u88C5 pnpm", "Install pnpm"],
  "view.install.btn": ["\u4E00\u952E\u914D\u7F6EDSH", "Configure DSH"],
  "view.install.installing": ["\u5B89\u88C5\u4E2D\u2026", "Installing\u2026"],
  "view.install.done": ["\u5B89\u88C5\u5B8C\u6210\uFF08\u5DF2\u81EA\u52A8\u5237\u65B0\u73AF\u5883\u53D8\u91CF\uFF0C\u65E0\u9700\u91CD\u542F\uFF09", "Installed (PATH refreshed automatically; no restart needed)"],
  "view.install.preparing": ["\u51C6\u5907\u4E2D\u2026", "Preparing\u2026"],
  "view.install.starting": ["\u5B89\u88C5\u5B8C\u6210\uFF0C\u6B63\u5728\u542F\u52A8\u2026", "Installed, starting\u2026"],
  // ---- DSH 睡着了（等待重连界面）----
  "view.asleep.name": ["DSH for Obsidian", "DSH for Obsidian"],
  "view.asleep.status": ["\u4F60\u7684 DSH \u7761\u7740\u4E86\uFF0C\u8BF7\u5C1D\u8BD5\u5524\u9192", "Your DSH is asleep \u2014 try to wake it up"],
  "view.asleep.hint": ["\u5C0F\u63D0\u793A\uFF1ADSH \u751F\u6001\u5C1A\u672A\u5B8C\u5584\uFF0C\u6709\u673A\u4F1A\u56E0\u4E3A\u63D2\u4EF6\u51B2\u7A81\u6216\u63D2\u4EF6\u5378\u8F7D\u6B8B\u7559\u7B49\u95EE\u9898\u5BFC\u81F4\u65E0\u6CD5\u8FDE\u63A5\u3002", "Tip: The DSH ecosystem is still maturing; connection can fail due to plugin conflicts or leftover files from uninstalled plugins."],
  "view.asleep.wake": ["\u5524\u9192\u5E72\u6D3B", "Wake it up"],
  "view.asleep.aed": ["AED for DSH", "AED for DSH"],
  "view.asleep.aedConfirm": ["\u63D2\u4EF6\u5C06\u4E0B\u8F7D\u5E76\u6267\u884Cdsh-fix\uFF0C\u5C1D\u8BD5\u4EE5\u5B89\u5168\u6A21\u5F0F\u8FDB\u884CDSH\u3002\n\u8BF7\u7528\u6237\u8FDB\u5165DSH\u540E\u6307\u4EE4DSH\u8FDB\u884C\u81EA\u884C\u4FEE\u590D\uFF0C\u5E76\u9000\u51FA\u5B89\u5168\u6A21\u5F0F\u3002", "The plugin will download and run dsh-fix to try operating DSH in safe mode.\nAfter entering DSH, instruct DSH to repair itself, then exit safe mode."],
  "view.asleep.aedConfirmBtn": ["\u786E\u8BA4\u6267\u884C", "Confirm & run"],
  "view.asleep.aedCancel": ["\u53D6\u6D88", "Cancel"],
  "view.asleep.askAi": ["\u95EE\u95EE AI", "Ask AI"],
  "view.asleep.more": ["\u66F4\u591A\u8BBE\u7F6E", "More settings"],
  // ---- AED for DSH（抢救工具）----
  "aed.checkFix": ["\u68C0\u67E5 dsh-fix\u2026", "Checking dsh-fix\u2026"],
  "aed.installFix": ["\u6B63\u5728\u5B89\u88C5 dsh-fix\u2026", "Installing dsh-fix\u2026"],
  "aed.installFixMirror": ["\u5B98\u65B9\u6E90\u4E0D\u53EF\u8FBE\uFF0C\u6539\u7528\u955C\u50CF\u5B89\u88C5\u2026", "Official registry unreachable; trying the mirror\u2026"],
  "aed.installFixDone": ["dsh-fix \u5DF2\u5C31\u7EEA", "dsh-fix ready"],
  "aed.installFixFail": ["dsh-fix \u5B89\u88C5\u5931\u8D25\uFF1A{err}", "dsh-fix install failed: {err}"],
  "aed.fallbackNpx": ["\u5168\u5C40\u5B89\u88C5\u5931\u8D25\uFF0C\u6539\u7528 npx \u4E34\u65F6\u8FD0\u884C\u2026", "Global install failed; using npx temporarily\u2026"],
  "aed.doctor": ["dsh-fix doctor \u8BCA\u65AD\u4E2D\u2026", "Running dsh-fix doctor\u2026"],
  "aed.doctorNoDetail": ["\uFF08\u8BCA\u65AD\u65E0\u660E\u7EC6\uFF09", "(no diagnostic detail)"],
  "aed.safeMode": ["\u8FDB\u5165\u5B89\u5168\u6A21\u5F0F\uFF08\u7981\u7528\u7528\u6237\u63D2\u4EF6\uFF09\u2026", "Entering safe mode (disabling user plugins)\u2026"],
  "aed.safeFail": ["\u5B89\u5168\u6A21\u5F0F\u542F\u52A8\u5931\u8D25\uFF1A{err}", "Safe mode failed: {err}"],
  "aed.safeDone": ["\u5DF2\u8FDB\u5165\u5B89\u5168\u6A21\u5F0F\uFF1A{diag}", "Safe mode entered: {diag}"],
  "aed.disableBundles": ["\u7981\u7528 bundle \u5C42\u7528\u6237\u63D2\u4EF6\u2026", "Disabling bundle-layer user plugins\u2026"],
  "aed.disableBundlesFail": ["\u7981\u7528 bundle \u5C42\u7528\u6237\u63D2\u4EF6\u5931\u8D25\uFF1A{err}", "Failed to disable bundle-layer user plugins: {err}"],
  "aed.safeBundles": ["\uFF1Bbundle \u5C42\u7528\u6237\u63D2\u4EF6\u5DF2\u4E00\u5E76\u7981\u7528\uFF1A{list}", "; bundle-layer user plugins also disabled: {list}"],
  "aed.done": ["AED \u62A2\u6551\u5B8C\u6210", "AED recovery done"],
  "aed.running": ["AED \u62A2\u6551\u8FDB\u884C\u4E2D\u2026", "AED recovery in progress\u2026"],
  "aed.exitSafeMode": ["\u9000\u51FA\u5B89\u5168\u6A21\u5F0F\uFF08\u6062\u590D\u7528\u6237\u63D2\u4EF6\uFF09\u2026", "Exiting safe mode (restoring user plugins)\u2026"],
  "aed.exitSafeFail": ["\u9000\u51FA\u5B89\u5168\u6A21\u5F0F\u5931\u8D25\uFF1A{err}", "Exiting safe mode failed: {err}"],
  "aed.exitBundleFail": ["\u6062\u590D bundle \u5C42\u7528\u6237\u63D2\u4EF6\u5931\u8D25\uFF1A{err}", "Failed to restore bundle-layer user plugins: {err}"],
  "aed.exitSafeDone": ["\u5DF2\u9000\u51FA\u5B89\u5168\u6A21\u5F0F\uFF0C\u5168\u90E8\u7528\u6237\u63D2\u4EF6\u5DF2\u6062\u590D\uFF08\u542B bundle \u5C42\uFF09", "Exited safe mode; all user plugins restored (including bundle layer)"],
  // ---- 报错诊断（发给 DeepSeek 会话）----
  "diag.header": ["DeepSeek Harness Obsidian \u63D2\u4EF6\u62A5\u9519\uFF0C\u8BF7\u5206\u6790\u539F\u56E0\u5E76\u7ED9\u51FA\u5177\u4F53\u89E3\u51B3\u6B65\u9AA4\uFF1A", "The DeepSeek Harness Obsidian plugin reported an error. Analyze the cause and give concrete fix steps:"],
  "diag.error": ["\u9519\u8BEF\uFF1A", "Error: "],
  "diag.hint": ["\u63D0\u793A\uFF1A", "Hint: "],
  "diag.port": ["\u7AEF\u53E3\uFF1A", "Port: "],
  "diag.cwd": ["\u5DE5\u4F5C\u76EE\u5F55\uFF1A", "Working directory: "],
  "diag.command": ["\u542F\u52A8\u547D\u4EE4\uFF1A", "Startup command: "],
  "notice.askAiCopied": ["\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\uFF1B\u5DF2\u6253\u5F00 DeepSeek \u7F51\u9875\u7248\uFF0C\u7C98\u8D34\uFF08Ctrl+V\uFF09\u540E\u53D1\u9001", "Diagnostic copied to the clipboard; DeepSeek web chat opened \u2014 paste (Ctrl+V) and send"],
  // ---- 人话化错误提示 ----
  "hz.notFound": ["\u8FD8\u6CA1\u6709\u68C0\u6D4B\u5230 DeepSeek Harness\uFF0C\u5148\u5B89\u88C5\u4E00\u6B21\u5427\u3002", "DeepSeek Harness was not detected \u2014 install it first."],
  "hz.github": ["\u8FDE\u4E0D\u4E0A GitHub\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u518D\u8BD5\u3002", "Cannot reach GitHub \u2014 check your network and try again."],
  "hz.exited": ["DeepSeek Harness \u542F\u52A8\u5931\u8D25\u4E86\uFF0C\u8BF7\u91CD\u65B0\u5B89\u88C5\u6216\u68C0\u67E5\u8BBE\u7F6E\u3002", "DeepSeek Harness failed to start \u2014 reinstall it or check the settings."],
  "hz.timeout": ["DeepSeek Harness \u542F\u52A8\u6709\u70B9\u6162\uFF0C\u7B49\u4E00\u4F1A\u513F\u518D\u8BD5\u8BD5\u3002", "DeepSeek Harness is starting slowly \u2014 try again in a moment."],
  "hz.noAuto": ["\u670D\u52A1\u6CA1\u6709\u8FD0\u884C\uFF0C\u4E14\u5DF2\u5173\u95ED\u81EA\u52A8\u542F\u52A8\uFF0C\u8BF7\u5728\u8BBE\u7F6E\u91CC\u6253\u5F00\u3002", "The service is not running and auto-start is off \u2014 enable it in Settings."],
  // ---- 命令 / 菜单 / 浮动按钮 / 对话框 ----
  "cmd.ribbon": ["\u6253\u5F00 DeepSeek Harness", "Open DeepSeek Harness"],
  "cmd.openPanel": ["\u6253\u5F00\u9762\u677F", "Open panel"],
  "cmd.sendSelection": ["\u53D1\u9001\u9009\u4E2D\u6587\u5B57\u5230 DSH", "Send selection to DSH"],
  "menu.sendSelection": ["\u53D1\u9001\u9009\u4E2D\u6587\u5B57\u5230 DSH", "Send selection to DSH"],
  "modal.cancel": ["\u53D6\u6D88", "Cancel"],
  "modal.installTitle": ["\u5B89\u88C5 DeepSeek Harness", "Install DeepSeek Harness"],
  "modal.installDesc": ["\u9009\u62E9 DeepSeek Harness \u7684\u5B89\u88C5\u76EE\u5F55\u3002\u5C06\u81EA\u52A8\u5B8C\u6210\uFF1A\u2460\u7F3A\u5931\u7684 git / Node.js / pnpm \u4E00\u952E\u5B89\u88C5 \u2461\u514B\u9686 DSH \u5B98\u65B9\u4ED3\u5E93 \u2462\u5B89\u88C5\u4F9D\u8D56\u5E76\u6784\u5EFA\uFF08pnpm run build\uFF09\u2463\u5168\u5C40\u5B89\u88C5 DSH \u547D\u4EE4\u884C\u5DE5\u5177 dsh\uFF08npm i -g @deepseek-ai/dsh@latest\uFF09\u3002\u5DF2\u6709 DSH \u4F46\u7F3A\u4F9D\u8D56/CLI \u4E5F\u4F1A\u81EA\u52A8\u8865\u9F50\u3002\u5168\u7A0B\u65E0\u9700\u547D\u4EE4\u884C\u3002", "Choose where to install DeepSeek Harness. It will: \u2460 install missing git / Node.js / pnpm \u2461 clone the official DSH repo \u2462 install dependencies and build (pnpm run build) \u2463 install the global DSH CLI (npm i -g @deepseek-ai/dsh@latest). If DSH already exists but tools/CLI are missing, they are filled in automatically. No command line needed."],
  "modal.installStart": ["\u5F00\u59CB\u5B89\u88C5", "Start install"],
  "modal.installProgressTitle": ["\u4E00\u952E\u914D\u7F6E DSH", "Configure DSH"],
  "modal.installProgressDesc": ["\u6B63\u5728\u68C0\u6D4B\u4E0E\u5B89\u88C5\u4F9D\u8D56\u3001\u514B\u9686\u4ED3\u5E93\u3001\u6784\u5EFA\u5E76\u914D\u7F6E\u5168\u5C40 CLI\u2026", "Checking and installing dependencies, cloning the repo, building, and setting up the global CLI\u2026"],
  "modal.updateTitle": ["\u53D1\u73B0 DSH \u65B0\u7248\u672C", "DSH update available"],
  "modal.updateBody": ["{msg} \u662F\u5426\u7ACB\u5373\u66F4\u65B0\uFF1F\uFF08\u5FEB\u8FDB\u5F0F\u66F4\u65B0\uFF0C\u4E0D\u5F71\u54CD\u672C\u5730\u672A\u63D0\u4EA4\u6539\u52A8\uFF09", "{msg} Update now? (Fast-forward; local uncommitted changes are untouched)"],
  "modal.updatePrereleaseTitle": ["\u53D1\u73B0 DSH \u9884\u89C8\u7248\uFF08\u6709\u98CE\u9669\uFF09", "DSH prerelease available (risky)"],
  "modal.updatePrereleaseBody": ["{msg}\u3002\u662F\u5426\u4ECD\u8981\u66F4\u65B0\uFF1F\uFF08\u9884\u89C8\u7248\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u4E0E\u73B0\u6709\u63D2\u4EF6\u51B2\u7A81\u5BFC\u81F4\u670D\u52A1\u5D29\u6E83\uFF1B\u5EFA\u8BAE\u7B49\u6B63\u5F0F\u7248\uFF09", "{msg}. Update anyway? (Prereleases are unstable and may crash the service; waiting for a stable release is recommended)"],
  "modal.updateConfirm": ["\u7ACB\u5373\u66F4\u65B0", "Update now"],
  "modal.updateViewChanges": ["\u67E5\u770B GitHub \u66F4\u65B0\u5185\u5BB9", "View changes on GitHub"],
  // ---- 通知 ----
  "notice.bridgeInstalled": ["DSH \u6865\u63A5\u5DF2\u5B89\u88C5\uFF0C\u91CD\u542F DSH \u670D\u52A1\u540E\u751F\u6548\uFF08\u8BBE\u7F6E\u9875\u300C\u91CD\u542F DSH \u670D\u52A1\u300D\uFF09", "DSH bridge installed; restart the DSH service to apply (Settings \u2192 Restart DSH service)"],
  "notice.bridgeRewritten": ["DSH \u66F4\u65B0\u5B8C\u6210\uFF0C\u6865\u63A5\u5DF2\u540C\u6B65\u91CD\u5199\uFF0C\u91CD\u542F DSH \u670D\u52A1\u540E\u751F\u6548\uFF08\u8BBE\u7F6E\u9875\u300C\u91CD\u542F DSH \u670D\u52A1\u300D\uFF09", "DSH updated; the bridge was rewritten to match. Restart the DSH service to apply (Settings \u2192 Restart DSH service)"],
  "notice.noOpenRemoved": ["\u68C0\u6D4B\u5230\u5F53\u524D DSH \u4E0D\u652F\u6301 --no-open\uFF0C\u5DF2\u4ECE\u542F\u52A8\u547D\u4EE4\u79FB\u9664\uFF08\u65B0\u7248 DSH \u4E0D\u518D\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668\uFF09", "The current DSH does not support --no-open; removed it from the startup command (newer DSH no longer auto-opens the browser)"],
  "notice.noOpenAdded": ["\u5DF2\u4E3A\u542F\u52A8\u547D\u4EE4\u6DFB\u52A0 --no-open\uFF08DSH \u542F\u52A8/\u91CD\u542F\u4E0D\u518D\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668\uFF09", "Added --no-open to the startup command (DSH will not auto-open the browser on start/restart)"],
  "notice.reconnected": ["\u5DF2\u91CD\u8FDE DeepSeek Harness", "Reconnected to DeepSeek Harness"],
  "notice.notRunning": ["DSH \u670D\u52A1\u672A\u8FD0\u884C\uFF0C\u8BF7\u5148\u6253\u5F00\u9762\u677F\u6216\u68C0\u67E5\u8BBE\u7F6E", "DSH service is not running; open the panel or check the settings"],
  "notice.selectFirst": ["\u8BF7\u5148\u6846\u9009\u8981\u53D1\u9001\u7684\u6587\u5B57", "Select some text first"],
  "notice.fillPending": ["\u5DF2\u53D1\u9001\u586B\u5165\u8BF7\u6C42\uFF0CDSH \u9875\u9762\u4ECD\u5728\u52A0\u8F7D\uFF08\u6587\u5B57\u7A0D\u540E\u51FA\u73B0\uFF09\uFF1B\u82E5\u957F\u65F6\u95F4\u672A\u51FA\u73B0\u8BF7\u91CD\u542F DSH \u670D\u52A1", "Fill requested; the DSH page is still loading (text should appear shortly). If it never appears, restart the DSH service"],
  "notice.bridgeOff": ["\u300CDSH \u804A\u5929\u6846\u6865\u63A5\u5230 Obsidian\u300D\u5DF2\u8BBE\u4E3A\u53D6\u6D88\uFF0C\u672A\u53D1\u9001\uFF1B\u5982\u9700\u53D1\u9001\u8BF7\u6539\u4E3A\u81EA\u52A8\u53D1\u9001\u6216\u53F3\u952E\u53D1\u9001", "Bridge is set to Off \u2014 nothing was sent; switch to Auto-send or Right-click send to use it"],
  "notice.sendNoFile": ["\u65E0\u6CD5\u5B9A\u4F4D\u5F53\u524D\u7B14\u8BB0\u6587\u4EF6\uFF0C\u672A\u53D1\u9001", "Cannot locate the active note; nothing was sent"],
  "notice.startingPanel": ["DSH \u670D\u52A1\u672A\u8FD0\u884C\uFF0C\u6B63\u5728\u6253\u5F00\u9762\u677F\u542F\u52A8\u2026", "DSH service is not running; opening the panel to start it\u2026"],
  "notice.filled": ["\u5DF2\u586B\u5165 DSH \u8F93\u5165\u6846\uFF0C\u8BF7\u786E\u8BA4\u540E\u53D1\u9001", "Filled into the DSH input; review it and send"],
  "notice.sendFailed": ["\u53D1\u9001\u5931\u8D25\uFF1A{err}", "Send failed: {err}"],
  "notice.bridgeFallback": ["DSH \u6865\u63A5\u672A\u5C31\u7EEA\uFF0C\u5DF2\u6539\u4E3A\u76F4\u63A5\u53D1\u9001\uFF08\u8BBE\u7F6E\u9875\u53EF\u67E5\u770B\u6865\u63A5\u72B6\u6001\uFF09", "DSH bridge not ready; sent directly instead (see the bridge status in Settings)"],
  "notice.restarting": ["\u6B63\u5728\u91CD\u542F DSH \u670D\u52A1\u2026", "Restarting the DSH service\u2026"],
  "notice.restarted": ["DSH \u670D\u52A1\u5DF2\u91CD\u542F\uFF0C\u6865\u63A5\u5DF2\u52A0\u8F7D", "DSH service restarted; bridge loaded"],
  "notice.restartFailed": ["\u91CD\u542F\u5931\u8D25\uFF1A{msg}", "Restart failed: {msg}"],
  "notice.installing": ["\u5F00\u59CB\u5B89\u88C5 DeepSeek Harness\u2026", "Installing DeepSeek Harness\u2026"],
  "notice.installDirEmpty": ["\u5B89\u88C5\u76EE\u5F55\u4E0D\u80FD\u4E3A\u7A7A", "The install directory cannot be empty"],
  // ---- 安装器 ----
  "install.dirEmpty": ["\u5B89\u88C5\u76EE\u5F55\u4E3A\u7A7A\uFF1A\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u586B\u5199\u5B89\u88C5\u76EE\u5F55", "The install directory is empty: fill it in Settings"],
  "install.found": ["\u68C0\u6D4B\u5230\u5DF2\u5B89\u88C5\u7684 DSH \u4ED3\u5E93\uFF1A{dir}", "Found an existing DSH repo: {dir}"],
  "install.notDsh": ["\u76EE\u5F55\u5DF2\u5B58\u5728\u4F46\u4E0D\u662F DSH \u4ED3\u5E93\uFF1A{dir}\u3002\u4E3A\u907F\u514D\u8986\u76D6\u6570\u636E\uFF0C\u8BF7\u66F4\u6362\u5B89\u88C5\u76EE\u5F55\u6216\u624B\u52A8\u5904\u7406", "The directory exists but is not a DSH repo: {dir}. To avoid overwriting data, choose another directory or handle it manually"],
  "install.downloading": ["\u6B63\u5728\u4E0B\u8F7D DeepSeek Harness\u2026", "Downloading DeepSeek Harness\u2026"],
  "install.mirrorRetry": ["\u5B98\u65B9\u6E90\u4E0B\u8F7D\u5931\u8D25\uFF0C\u6B63\u5728\u901A\u8FC7\u955C\u50CF\u91CD\u8BD5\uFF08\u7B2C {n} \u6B21\uFF09\u2026", "Official source failed; retrying via mirror ({n})\u2026"],
  "install.cloneFailed": ["\u514B\u9686\u5931\u8D25\uFF1A{err}\u3002\u5DF2\u81EA\u52A8\u91CD\u8BD5\u5B98\u65B9\u6E90\u4E0E gh-proxy.com \u955C\u50CF\uFF1B\u4ECD\u5931\u8D25\u65F6\u53EF\u5728\u8BBE\u7F6E\u4E2D\u66F4\u6362\u5B89\u88C5\u5730\u5740\u6216\u7A0D\u540E\u518D\u8BD5", "Clone failed: {err}. The official source and gh-proxy.com mirror were retried automatically; if it still fails, change the install URL in Settings or try again later"],
  "install.depsInstalling": ["\u6B63\u5728\u5B89\u88C5\u4F9D\u8D56\uFF08\u53EF\u80FD\u9700\u8981\u51E0\u5206\u949F\uFF09\u2026", "Installing dependencies (may take a few minutes)\u2026"],
  "install.depsMirror": ["\u4F9D\u8D56\u6E90\u8BBF\u95EE\u5931\u8D25\uFF0C\u6539\u7528\u56FD\u5185\u955C\u50CF\u6E90\u91CD\u8BD5\u2026", "Dependency source unreachable; retrying with a mirror\u2026"],
  "install.depsNoteFail": ["\uFF1B\u4F9D\u8D56\u5B89\u88C5\u672A\u5B8C\u6210\uFF08{err}\uFF09\uFF0C\u53EF\u7A0D\u540E\u5728 {dir} \u4E0B\u6267\u884C pnpm install", "; dependencies not fully installed ({err}) \u2014 run pnpm install in {dir} later"],
  "install.depsNoteNoPnpm": ["\uFF1B\u672A\u68C0\u6D4B\u5230 pnpm\uFF0C\u8BF7\u5B89\u88C5 pnpm \u540E\u5728\u4ED3\u5E93\u76EE\u5F55\u6267\u884C pnpm install", "; pnpm not found \u2014 install pnpm and run pnpm install in the repo directory"],
  "install.done": ["\u5B89\u88C5\u5B8C\u6210", "Done"],
  "install.buildStep": ["\u6B63\u5728\u6784\u5EFA DSH \u4ED3\u5E93\uFF08pnpm run build\uFF0C\u9996\u6B21\u53EF\u80FD\u9700\u8981\u51E0\u5206\u949F\uFF09\u2026", "Building the DSH repo (pnpm run build; the first run may take a few minutes)\u2026"],
  "install.buildFail": ["DSH \u4ED3\u5E93\u5DF2\u4E0B\u8F7D\u5E76\u5B89\u88C5\u4F9D\u8D56\uFF0C\u4F46\u6784\u5EFA\u5931\u8D25\uFF1A{err}\u3002\u8BF7\u7A0D\u540E\u5728 {dir} \u4E0B\u624B\u52A8\u6267\u884C pnpm run build\uFF0C\u6216\u91CD\u8BD5\u5B89\u88C5", "Repo downloaded and dependencies installed, but the build failed: {err}. Run pnpm run build in {dir} later, or retry the install"],
  "install.message": ["DSH \u5DF2\u5B89\u88C5\uFF1A{dir}{note}", "DSH installed: {dir}{note}"],
  "install.cliInstalling": ["\u6B63\u5728\u5B89\u88C5 DSH \u5168\u5C40 CLI\u2026", "Installing the DSH global CLI\u2026"],
  "install.cliDone": ["\uFF1B\u5168\u5C40 CLI dsh \u5DF2\u5B89\u88C5\uFF08\u53EF\u76F4\u63A5\u7528 dsh web \u542F\u52A8\uFF09", '; global CLI dsh installed (start with "dsh web")'],
  "install.cliFail": ["\uFF1B\u5168\u5C40 CLI \u5B89\u88C5\u5931\u8D25\uFF1A{err}\uFF08\u53EF\u7A0D\u540E\u6267\u884C npm i -g @deepseek-ai/dsh@latest\uFF09", "; global CLI install failed: {err} (run npm i -g @deepseek-ai/dsh@latest later)"],
  "install.autoDep": ["\u6B63\u5728\u4E00\u952E\u5B89\u88C5\u7F3A\u5931\u4F9D\u8D56 {dep}\u2026", "Installing missing dependency {dep}\u2026"],
  "install.depStillMissing": ["\u4F9D\u8D56 {dep} \u5B89\u88C5\u540E\u4ECD\u4E0D\u53EF\u7528\uFF0C\u8BF7\u624B\u52A8\u5B89\u88C5\u540E\u91CD\u8BD5", "{dep} is still unavailable after installation \u2014 install it manually and retry"],
  "dep.git.installed": ["git \u5DF2\u5B89\u88C5\u3002\u65E0\u9700\u91CD\u542F\uFF0C\u53EF\u7EE7\u7EED\u4E0B\u4E00\u6B65", "git is installed. No restart needed \u2014 continue"],
  "dep.git.fail": ["git \u5B89\u88C5\u5931\u8D25\uFF1A{err}\u3002\u53EF\u624B\u52A8\u5230 git-scm.com \u4E0B\u8F7D\u5B89\u88C5", "git install failed: {err}. Install it manually from git-scm.com"],
  "dep.node.installed": ["Node.js \u5DF2\u5B89\u88C5\u3002\u65E0\u9700\u91CD\u542F\uFF0C\u53EF\u7EE7\u7EED\u4E0B\u4E00\u6B65", "Node.js is installed. No restart needed \u2014 continue"],
  "dep.node.fail": ["Node.js \u5B89\u88C5\u5931\u8D25\uFF1A{err}\u3002\u53EF\u624B\u52A8\u5230 nodejs.org \u4E0B\u8F7D\u5B89\u88C5", "Node.js install failed: {err}. Install it manually from nodejs.org"],
  "dep.pnpm.installed": ["pnpm \u5DF2\u5B89\u88C5\u3002\u65E0\u9700\u91CD\u542F\uFF0C\u53EF\u7EE7\u7EED\u4E0B\u4E00\u6B65", "pnpm is installed. No restart needed \u2014 continue"],
  "dep.pnpm.fail": ["pnpm \u5B89\u88C5\u5931\u8D25\uFF1A{err}\u3002\u53EF\u624B\u52A8\u6267\u884C winget install pnpm.pnpm \u6216 npm install -g pnpm", "pnpm install failed: {err}. Run winget install pnpm.pnpm or npm install -g pnpm manually"],
  "dep.brew.installed": ["{dep} \u5DF2\u5B89\u88C5\uFF08brew\uFF09\u3002\u65E0\u9700\u91CD\u542F\uFF0C\u53EF\u7EE7\u7EED\u4E0B\u4E00\u6B65", "{dep} installed (brew). No restart needed \u2014 continue"],
  "dep.brew.fail": ["{dep} \u5B89\u88C5\u5931\u8D25\uFF1A{err}\u3002\u53EF\u624B\u52A8\u6267\u884C brew install {formula}\uFF08\u9700\u5148\u5B89\u88C5 Homebrew\uFF09", "{dep} install failed: {err}. Run brew install {formula} manually (Homebrew required)"],
  "dep.manual": ["\u8BF7\u624B\u52A8\u5B89\u88C5\u4F9D\u8D56\uFF1A{hint}", "Install the dependency manually: {hint}"],
  "install.depMirror": ["winget \u5931\u8D25\uFF0C\u6539\u7528 npmmirror \u955C\u50CF\u4E0B\u8F7D\u5B89\u88C5\u2026", "winget failed; downloading via npmmirror mirror\u2026"],
  "install.depMirrorFail": ["npmmirror \u955C\u50CF\u4E0B\u8F7D/\u5B89\u88C5\u5931\u8D25\uFF1A{err}", "npmmirror mirror download/install failed: {err}"],
  "dep.noWinget": ["\u7CFB\u7EDF\u7F3A\u5C11 winget\uFF08App Installer \u672A\u5B89\u88C5/\u635F\u574F\uFF09\uFF0C\u5DF2\u6539\u7528\u955C\u50CF\u4E0B\u8F7D", "winget (App Installer) is missing/broken; falling back to the mirror"],
  "dep.git.installedMirror": ["git \u5DF2\u5B89\u88C5\uFF08npmmirror \u955C\u50CF\uFF09\u3002\u65E0\u9700\u91CD\u542F", "git installed (npmmirror mirror). No restart needed"],
  "dep.node.installedMirror": ["Node.js \u5DF2\u5B89\u88C5\uFF08npmmirror \u955C\u50CF\uFF09\u3002\u65E0\u9700\u91CD\u542F", "Node.js installed (npmmirror mirror). No restart needed"],
  "dep.hint.node": ["\u8BF7\u5230 nodejs.org \u4E0B\u8F7D\u5B89\u88C5 Node.js", "Download Node.js from nodejs.org"],
  "dep.hint.pnpm": ["\u5148\u5B89\u88C5 Node.js\uFF0C\u518D\u6267\u884C npm install -g pnpm", "Install Node.js first, then run npm install -g pnpm"],
  // ---- 服务管理器 ----
  "svc.offlineNoAuto": ["127.0.0.1:{port} \u65E0\u670D\u52A1\uFF0C\u4E14\u5DF2\u5173\u95ED\u81EA\u52A8\u542F\u52A8\uFF08\u8BBE\u7F6E\u91CC\u53EF\u6253\u5F00\uFF09", "No service on 127.0.0.1:{port} and auto-start is off (enable it in Settings)"],
  "svc.stopped": ["DSH \u670D\u52A1\u5DF2\u505C\u6B62\uFF08\u8FDB\u7A0B\u9000\u51FA\uFF0C\u6216\u7AEF\u53E3 {port} \u65E0\u54CD\u5E94\uFF09", "DSH service stopped (process exited or port {port} not responding)"],
  "svc.offline": ["127.0.0.1:{port} \u65E0\u670D\u52A1", "No service on 127.0.0.1:{port}"],
  "svc.ensureOffline": ["127.0.0.1:{port} \u65E0\u670D\u52A1\uFF0C\u4E14\u5DF2\u5173\u95ED\u81EA\u52A8\u542F\u52A8", "No service on 127.0.0.1:{port} and auto-start is off"],
  "svc.unloaded": ["\u63D2\u4EF6\u5DF2\u5378\u8F7D", "Plugin unloaded"],
  "svc.startFailed": ["\u542F\u52A8\u5931\u8D25\uFF1A{err}", "Start failed: {err}"],
  "svc.timeout": ["\u7B49\u5F85\u670D\u52A1\u5C31\u7EEA\u8D85\u65F6\uFF08{sec} \u79D2\uFF09\uFF1B\u8BF7\u68C0\u67E5\u542F\u52A8\u547D\u4EE4\u662F\u5426\u6B63\u786E", "Timed out waiting for the service ({sec}s); check the startup command"],
  "svc.noCommand": ["\u8BF7\u5728\u63D2\u4EF6\u8BBE\u7F6E\u4E2D\u914D\u7F6E DSH \u542F\u52A8\u547D\u4EE4", "Configure the DSH startup command in the plugin settings"],
  "svc.exited": ["\u8FDB\u7A0B\u5DF2\u9000\u51FA\uFF08\u4EE3\u7801 {code}\uFF09\uFF1B\u8BF7\u68C0\u67E5\u542F\u52A8\u547D\u4EE4\u4E0E\u5DE5\u4F5C\u76EE\u5F55", "Process exited (code {code}); check the startup command and working directory"],
  // ---- 更新器 ----
  "up.noRepo": ["\u672A\u627E\u5230 DSH \u4ED3\u5E93\uFF08\u7F3A\u5C11 .git\uFF09\uFF1A\u8BF7\u5148\u300C\u4E00\u952E\u68C0\u6D4B\u914D\u7F6E\u300D\u6216\u300C\u4E00\u952E\u5B89\u88C5\u300D\u586B\u5145\u5DE5\u4F5C\u76EE\u5F55", 'DSH repo not found (no .git): run "Detect & fill" or "Install" first to set the working directory'],
  "up.noLocal": ["\u65E0\u6CD5\u8BFB\u53D6\u672C\u5730\u7248\u672C", "Cannot read the local version"],
  "up.githubFail": ["\u65E0\u6CD5\u8FDE\u63A5 GitHub\uFF08git ls-remote\uFF09\uFF1A{err}\uFF1B\u8BF7\u786E\u8BA4\u7F51\u7EDC\u4E0E git \u53EF\u7528", "Cannot reach GitHub (git ls-remote): {err}; check that the network and git are available"],
  "up.latest": ["\u5DF2\u662F\u6700\u65B0\u7248\u672C\uFF08{v}\uFF09\uFF0C\u65E0\u9700\u66F4\u65B0", "Already up to date ({v}) \u2014 no update needed"],
  "up.latestNpmOnly": ["\u4F60\u7684\u7248\u672C\u5DF2\u662F\u6700\u65B0\uFF08{v}\uFF09\u2014\u2014\u4EC5\u6309 npm \u5B98\u65B9\u63A8\u9001\u7684\u5168\u5C40 CLI \u7248\u672C\u68C0\u6D4B\uFF1BGitHub \u4ED3\u5E93\u53E6\u6709 {github}\uFF08\u9884\u89C8\uFF0C\u5C1A\u672A\u53D1\u5E03\u5230 npm\uFF0C\u4E0D\u89E6\u53D1\u81EA\u52A8\u66F4\u65B0\u63D0\u793A\uFF09", "You are up to date ({v}) \u2014 checked against the npm-published global CLI version; GitHub also has {github} (prerelease, not yet published to npm, so no update prompt is shown)"],
  "up.stableOnly": ["\u6682\u65E0\u6B63\u5F0F\u7248\u53EF\u66F4\u65B0\uFF08\u5F53\u524D {v}\uFF09\uFF1B\u63D2\u4EF6\u4EC5\u5728\u5B98\u65B9\u53D1\u5E03\u6B63\u5F0F\u7248\u540E\u63A8\u9001\u5347\u7EA7", "No stable release available (current {v}); the plugin only offers updates after an official stable release"],
  "up.prereleaseBehind": ["\u68C0\u6D4B\u5230 DSH \u9884\u89C8\u7248 {remote}\uFF08\u5F53\u524D {local}\uFF09\u3002\u9884\u89C8\u7248\u53EF\u80FD\u4E0E\u73B0\u6709\u63D2\u4EF6\u51B2\u7A81\u5BFC\u81F4\u670D\u52A1\u5D29\u6E83", "Detected DSH prerelease {remote} (current {local}). Prereleases may conflict with existing plugins and crash the service"],
  "up.repoOnlyHint": ["\uFF1B\u4ED3\u5E93\u6E90\u7801\u5DF2\u66F4\u65B0\uFF0C\u4F46\u8FD0\u884C\u4E2D\u7684\u670D\u52A1\u7531\u5168\u5C40 CLI \u542F\u52A8\uFF0C\u9700\u53E6\u884C\u5347\u7EA7\u5168\u5C40 CLI \u5E76\u91CD\u542F\u670D\u52A1\u540E\u751F\u6548", "; repo source updated, but the running service is launched by the global CLI \u2014 upgrade the global CLI and restart the service to apply"],
  "up.behind": ["GitHub \u4E0A\u6709\u65B0\u7248\u672C\uFF1A\u672C\u5730 {local}\uFF0CGitHub \u6700\u65B0 {remote}", "New version on GitHub: local {local}, latest {remote}"],
  "up.behindVer": ["GitHub \u4E0A\u6709\u65B0\u7248\u672C\uFF1A\u672C\u5730 {local}\uFF0C\u6700\u65B0 {remote}", "New version on GitHub: local {local}, latest {remote}"],
  "up.diverged": ["\u672C\u5730\u6709 {count} \u4E2A\u672A\u63A8\u9001\u7684\u63D0\u4EA4\uFF0C\u6709\u53EF\u80FD\u662F\u4F60\u81EA\u884C\u5F00\u53D1\u7684\u63D2\u4EF6\uFF0C\u8BF7\u5728 DSH \u4E2D\u544A\u8BC9 AI \u81EA\u884C\u66F4\u65B0", "There are {count} uncommitted-to-remote local commits, possibly plugins you developed yourself \u2014 ask the AI in DSH to update on its own"],
  "up.dirty": ["\u4ED3\u5E93\u6709\u672A\u63D0\u4EA4\u6539\u52A8\uFF08{files}\uFF09\uFF0Cgit \u66F4\u65B0\u88AB\u963B\u585E\u2014\u2014\u8BF7\u5728 DSH \u4E2D\u8BA9 AI \u5148\u5904\u7406\u8FD9\u4E9B\u6539\u52A8\uFF08\u63D0\u4EA4\u6216 stash\uFF09\u540E\u518D\u66F4\u65B0", "The repo has uncommitted changes ({files}) that block the git update \u2014 ask the AI in DSH to commit or stash them first, then update"],
  "up.done": ["DSH \u5DF2\u66F4\u65B0\uFF08{dir}\uFF09\u3002\u82E5 DSH \u670D\u52A1\u6B63\u5728\u8FD0\u884C\uFF0C\u8BF7\u91CD\u542F\u670D\u52A1\u4F7F\u65B0\u7248\u672C\u751F\u6548", "DSH updated ({dir}). If the DSH service is running, restart it to apply the new version"],
  "up.fail": ["DSH \u66F4\u65B0\u5931\u8D25\uFF1A{err}\uFF08\u672C\u5730\u53EF\u80FD\u6709\u672A\u63D0\u4EA4\u6539\u52A8\u6216\u7F51\u7EDC\u95EE\u9898\uFF0C\u8BF7\u624B\u52A8\u5904\u7406\uFF09", "DSH update failed: {err} (there may be uncommitted changes or network issues; handle it manually)"],
  "up.mirrorFail": ["\uFF1B\u955C\u50CF\u6E90\u4E5F\u5931\u8D25\uFF1A{err}", "; the mirror also failed: {err}"],
  "up.cliDone": ["DSH \u5168\u5C40 CLI \u5DF2\u66F4\u65B0\uFF08npm i -g @deepseek-ai/dsh@latest\uFF09\u3002\u8BF7\u91CD\u542F DSH \u670D\u52A1\u4F7F\u65B0\u7248\u672C\u751F\u6548", "DSH global CLI updated (npm i -g @deepseek-ai/dsh@latest). Restart the DSH service to apply"],
  "up.cliFail": ["DSH \u5168\u5C40 CLI \u66F4\u65B0\u5931\u8D25\uFF1A{err}\uFF08\u53EF\u7A0D\u540E\u624B\u52A8\u6267\u884C npm i -g @deepseek-ai/dsh@latest\uFF09", "DSH global CLI update failed: {err} (run npm i -g @deepseek-ai/dsh@latest later)"],
  "up.cliUpdatingTitle": ["\u66F4\u65B0 DSH", "Updating DSH"],
  "up.cliUpdating": ["\u6B63\u5728\u66F4\u65B0 DSH \u5168\u5C40 CLI\uFF08\u5DF2\u505C\u6B62\u670D\u52A1\u4EE5\u91CA\u653E\u6587\u4EF6\u9501\uFF09\uFF0C\u53EF\u80FD\u9700\u8981\u51E0\u5206\u949F\u2026", "Updating the DSH global CLI (service stopped to release file locks); may take a few minutes\u2026"],
  "up.cliRestarting": ["DSH \u5168\u5C40 CLI \u5DF2\u66F4\u65B0\uFF0C\u6B63\u5728\u91CD\u542F\u670D\u52A1\u2026", "DSH global CLI updated; restarting the service\u2026"],
  "notice.updating": ["\u6B63\u5728\u66F4\u65B0 DSH\u2026", "Updating DSH\u2026"],
  "settings.updateMirror.title": ["\u66F4\u65B0\u955C\u50CF\u5730\u5740", "Update mirror URL"],
  "settings.updateMirror.desc": ["DSH \u66F4\u65B0\u7684\u53EA\u8BFB\u955C\u50CF\uFF1B\u7559\u7A7A\u81EA\u52A8\u7528 gh-proxy \u515C\u5E95\uFF08\u5982 https://gh-proxy.com/https://github.com/deepseek-ai/deepseek-harness.git\uFF09", "Read-only mirror for DSH updates; empty auto-falls back to gh-proxy (e.g. https://gh-proxy.com/https://github.com/deepseek-ai/deepseek-harness.git)"],
  "up.unknown": ["\u672A\u77E5", "Unknown"],
  "err.unknown": ["\u672A\u77E5\u9519\u8BEF", "unknown error"],
  "err.failed": ["\u5931\u8D25", "failed"],
  // ---- 一键检测 ----
  "detect.path": ["\u5DF2\u68C0\u6D4B\u5230 dsh\uFF08PATH \u4E2D\uFF09\uFF0C\u542F\u52A8\u547D\u4EE4\u5DF2\u8BBE\u4E3A dsh web --port {port}", "dsh found on PATH; startup command set to dsh web --port {port}"],
  "detect.notFound": ["\u672A\u68C0\u6D4B\u5230 DeepSeek Harness \u4ED3\u5E93\uFF1A\u8BF7\u5148\u4ECE github.com/deepseek-ai/deepseek-harness \u83B7\u53D6\u6E90\u7801\uFF0C\u6216\u5728\u8BBE\u7F6E\u4E2D\u624B\u52A8\u586B\u5199\u542F\u52A8\u547D\u4EE4\u4E0E\u5DE5\u4F5C\u76EE\u5F55", "No DeepSeek Harness repo detected: get the source from github.com/deepseek-ai/deepseek-harness, or fill in the startup command and working directory manually in Settings"],
  "detect.found": ["\u5DF2\u68C0\u6D4B\u5230 DSH \u4ED3\u5E93\uFF1A{dir}\uFF1B\u542F\u52A8\u547D\u4EE4\uFF1A{cmd}", "DSH repo detected: {dir}; startup command: {cmd}"],
  // ---- DSH RPC API ----
  "api.timeout": ["\u8BF7\u6C42 DSH \u8D85\u65F6\uFF08{ms}ms\uFF09", "DSH request timed out ({ms}ms)"],
  "api.notRunning": ["DSH \u670D\u52A1\u672A\u8FD0\u884C\uFF08127.0.0.1:{port} \u62D2\u7EDD\u8FDE\u63A5\uFF09", "DSH service is not running (connection refused on 127.0.0.1:{port})"],
  "api.connectFail": ["\u65E0\u6CD5\u8FDE\u63A5 DSH\uFF1A{err}", "Cannot connect to DSH: {err}"],
  "api.httpStatus": ["DSH \u8FD4\u56DE HTTP {code}", "DSH returned HTTP {code}"],
  "api.badFormat": ["DSH \u8FD4\u56DE\u4E86\u610F\u5916\u7684\u54CD\u5E94\u683C\u5F0F", "DSH returned an unexpected response format"],
  "api.rejected": ["DSH \u62D2\u7EDD\u4E86\u8BF7\u6C42", "DSH rejected the request"],
  "api.unparsable": ["DSH \u54CD\u5E94\u65E0\u6CD5\u89E3\u6790", "Cannot parse the DSH response"],
  // ---- 诊断（启动耗时）----
  "settings.diag.title": ["\u8BCA\u65AD", "Diagnostics"],
  "settings.diag.startup.title": ["\u542F\u52A8\u8017\u65F6\u8BB0\u5F55", "Startup timing log"],
  "settings.diag.startup.desc": ["\u63D2\u4EF6\u52A0\u8F7D \u2192 \u670D\u52A1\u63A2\u6D4B \u2192 \u542F\u52A8 \u2192 \u9762\u677F\u5C31\u7EEA\u5404\u9636\u6BB5\u8017\u65F6\uFF08\u6700\u8FD1 5 \u6B21\uFF09", "Per-phase timings: plugin load \u2192 service probe \u2192 startup \u2192 panel ready (last 5 runs)"],
  "settings.diag.refresh": ["\u5237\u65B0", "Refresh"],
  "settings.diag.empty": ["\u6682\u65E0\u8BB0\u5F55\uFF08\u6253\u5F00\u9762\u677F\u540E\u81EA\u52A8\u91C7\u96C6\uFF09", "No records yet (collected when the panel opens)"],
  "bridge.patchMergeError": ["\u73B0\u6709\u8865\u4E01\u6587\u4EF6\u4E3A\u975E\u7A7A\u6D41\u5F0F\u6570\u7EC4\u683C\u5F0F\uFF0C\u65E0\u6CD5\u81EA\u52A8\u5408\u5E76\uFF1B\u8BF7\u624B\u52A8\u5728 ~/.dsh/profiles/web/cordis.patch.yml \u8FFD\u52A0\u6865\u63A5\u6761\u76EE", "The existing patch file uses a non-empty flow-array format that cannot be merged automatically; add the bridge entry manually in ~/.dsh/profiles/web/cordis.patch.yml"]
};
var current = "zh";
function resolveLocale(setting, detected) {
  if (setting === "zh") return "zh";
  if (setting === "en") return "en";
  return detected != null ? detected : "en";
}
function applyLocale(setting, detected) {
  current = resolveLocale(setting, detected);
}
function getLocale() {
  return current;
}
function t(key, vars) {
  const entry = dict[key];
  const text = entry ? current === "en" ? entry[1] : entry[0] : key;
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (_, name) => {
    var _a;
    return String((_a = vars[name]) != null ? _a : "");
  });
}

// src/win-exec.ts
var CMD_WRAP_SET = /* @__PURE__ */ new Set(["npm", "npx", "pnpm", "dsh", "dsh-fix", "dsh-doctor"]);
function resolveExec(platform, command, args) {
  if (platform === "win32" && CMD_WRAP_SET.has(command)) {
    return { command: "cmd.exe", args: ["/d", "/s", "/c", command, ...args] };
  }
  return { command, args };
}

// src/service-manager.ts
var DEFAULT_PROBE_TIMEOUT_MS = 3e3;
var DEFAULT_POLL_INTERVAL_MS = 1e3;
var DEFAULT_READY_TIMEOUT_MS = 3e5;
function renderCommand(template, port) {
  const trimmed = template.replaceAll("{port}", String(port)).trim();
  if (trimmed === "") {
    return { command: "", args: [] };
  }
  const parts = trimmed.split(/\s+/);
  return { command: parts[0], args: parts.slice(1) };
}
function applyNoOpenAdaptive(cmd, supported) {
  const trimmed = cmd.trim();
  if (trimmed === "") return null;
  const hasFlag = /\s*--no-open\b/.test(trimmed);
  if (supported) {
    if (hasFlag) return null;
    return `${trimmed} --no-open`;
  }
  if (!hasFlag) return null;
  const cleaned = trimmed.replace(/\s*--no-open\b/g, "").trim();
  return cleaned === "" ? null : cleaned;
}
function detectStartupCommand() {
  const probe = process.platform === "win32" ? "where" : "which";
  try {
    (0, import_node_child_process.execFileSync)(probe, ["dsh"], { stdio: "ignore" });
  } catch (e) {
    return "";
  }
  if (dshSupportsNoOpen()) {
    return "dsh web --port {port} --no-open";
  }
  return "dsh web --port {port}";
}
var cachedDshVersion = "";
var cachedNoOpenSupport = null;
function dshSupportsNoOpen() {
  if (cachedNoOpenSupport !== null) return cachedNoOpenSupport;
  return true;
}
function probeNoOpenSupportAsync(onDone) {
  let resolved;
  try {
    resolved = resolveExec(process.platform, "dsh", ["web", "--help"]);
  } catch (e) {
    cachedNoOpenSupport = true;
    onDone == null ? void 0 : onDone(true);
    return;
  }
  (0, import_node_child_process.execFile)(
    resolved.command,
    resolved.args,
    { encoding: "utf8", timeout: 15e3, windowsHide: true },
    (err, stdout) => {
      const supported = err === null ? String(stdout).includes("no-open") : true;
      cachedNoOpenSupport = supported;
      try {
        const v = resolveExec(process.platform, "dsh", ["--version"]);
        (0, import_node_child_process.execFile)(v.command, v.args, { encoding: "utf8", timeout: 5e3, windowsHide: true }, (err2, out2) => {
          var _a;
          if (err2 === null) {
            cachedDshVersion = ((_a = String(out2).trim().split(/\r?\n/)[0]) != null ? _a : "").trim();
          }
          onDone == null ? void 0 : onDone(supported);
        });
      } catch (e) {
        onDone == null ? void 0 : onDone(supported);
      }
    }
  );
}
function killPortOwner(port) {
  if (process.platform === "win32") {
    killPortOwnerWin32(port);
    return;
  }
  try {
    const out = (0, import_node_child_process.execFileSync)("lsof", ["-ti", `:${port}`], { encoding: "utf8" });
    for (const pid of out.split(/\s+/).filter(Boolean)) {
      try {
        const cmd = (0, import_node_child_process.execFileSync)("ps", ["-p", pid, "-o", "command="], { encoding: "utf8" });
        if (/dsh|deepseek-harness|bin\.js/i.test(cmd)) {
          (0, import_node_child_process.execFileSync)("kill", ["-9", pid], { stdio: "ignore" });
        }
      } catch (e) {
      }
    }
  } catch (e) {
  }
}
function killPortOwnerWin32(port) {
  try {
    const netstat = (0, import_node_child_process.execFileSync)("netstat", ["-ano"], { encoding: "utf8" });
    const pids = /* @__PURE__ */ new Set();
    for (const line of netstat.split(/\r?\n/)) {
      const m = /TCP\s+127\.0\.0\.1:(\d+)\s+\S+\s+LISTENING\s+(\d+)/.exec(line);
      if (m !== null && Number(m[1]) === port) {
        pids.add(m[2]);
      }
    }
    for (const pid of pids) {
      if (isDshProcess(pid)) {
        try {
          (0, import_node_child_process.execFileSync)("taskkill", ["/pid", pid, "/T", "/F"], { stdio: "ignore" });
        } catch (e) {
        }
      }
    }
  } catch (e) {
  }
}
function isDshProcess(pid) {
  try {
    const ps = (0, import_node_child_process.execFileSync)("powershell", [
      "-NoProfile",
      "-NonInteractive",
      "-Command",
      `(Get-CimInstance Win32_Process -Filter 'ProcessId=${pid}').CommandLine`
    ], { encoding: "utf8", timeout: 8e3 });
    return /dsh|deepseek-harness|bin\.js/i.test(ps);
  } catch (e) {
    return false;
  }
}
function tcpProbe(port, timeoutMs) {
  return new Promise((resolve) => {
    const socket = (0, import_node_net.connect)({ host: "127.0.0.1", port });
    const timer = window.setTimeout(() => {
      socket.destroy();
      resolve(false);
    }, timeoutMs);
    socket.once("connect", () => {
      window.clearTimeout(timer);
      socket.destroy();
      resolve(true);
    });
    socket.once("error", () => {
      window.clearTimeout(timer);
      resolve(false);
    });
  });
}
async function defaultProbe(port, timeoutMs) {
  const t2 = timeoutMs != null ? timeoutMs : DEFAULT_PROBE_TIMEOUT_MS;
  return tcpProbe(port, t2);
}
function winQuoted(part) {
  return /\s/.test(part) ? `"${part}"` : part;
}
function winSpawnHidden(command, args, cwd, detached) {
  const cmdLine = [winQuoted(command), ...args.map(winQuoted)].join(" ");
  const vbsPath = (0, import_node_path.join)((0, import_node_os.tmpdir)(), `dsh-launch-${process.pid}-${Date.now()}.vbs`);
  const body = `Set sh = CreateObject("WScript.Shell")\r
On Error Resume Next\r
Set ex = sh.Run("cmd.exe /d /s /c ${cmdLine.replaceAll('"', '""')}", 0, True)\r
If Err.Number = 0 And Not ex Is Nothing Then WScript.Quit ex.ExitCode\r
`;
  (0, import_node_fs.writeFileSync)(vbsPath, "\uFEFF" + body, "utf16le");
  const child = (0, import_node_child_process.spawn)("wscript.exe", ["//nologo", "//b", vbsPath], {
    cwd,
    detached,
    stdio: "ignore",
    windowsHide: true
  });
  const cleanup = () => {
    try {
      (0, import_node_fs.unlinkSync)(vbsPath);
    } catch (e) {
    }
  };
  child.once("exit", cleanup);
  child.once("error", cleanup);
  return child;
}
function defaultSpawnProcess(command, args, cwd, detached) {
  if (process.platform === "win32") {
    return winSpawnHidden(command, args, cwd, detached);
  }
  return (0, import_node_child_process.spawn)(command, args, {
    cwd,
    detached: true,
    stdio: "ignore",
    windowsHide: true
  });
}
function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
var DshServiceManager = class {
  constructor(opts, deps) {
    this.child = null;
    /** 是否已发起过启动（普通可变字段）。 */
    this.spawned = false;
    /** spawn 失败原因（由子进程 'error' 事件捕获）。 */
    this.spawnError = null;
    /** 是否已 dispose（防止卸载后重新拉起）。 */
    this.disposed = false;
    var _a, _b, _c, _d, _e;
    this.opts = opts;
    this.deps = {
      probe: (_a = deps == null ? void 0 : deps.probe) != null ? _a : (p) => defaultProbe(p, opts.probeTimeoutMs),
      spawnProcess: (_b = deps == null ? void 0 : deps.spawnProcess) != null ? _b : defaultSpawnProcess,
      killPortOwner: (_c = deps == null ? void 0 : deps.killPortOwner) != null ? _c : killPortOwner
    };
    this.pollIntervalMs = (_d = opts.pollIntervalMs) != null ? _d : DEFAULT_POLL_INTERVAL_MS;
    this.readyTimeoutMs = (_e = opts.readyTimeoutMs) != null ? _e : DEFAULT_READY_TIMEOUT_MS;
  }
  /** 探测一次服务是否在线。 */
  async probe() {
    return this.deps.probe(this.opts.port);
  }
  /** 服务离线时的原因描述（优先进程退出/spawn 错误，其次自动启动开关，兜底通用描述）。 */
  describeOffline() {
    if (this.spawnError) {
      return this.spawnError;
    }
    if (!this.opts.autoStart) {
      return t("svc.offlineNoAuto", { port: this.opts.port });
    }
    if (this.spawned) {
      return t("svc.stopped", { port: this.opts.port });
    }
    return t("svc.offline", { port: this.opts.port });
  }
  /**
   * 确保服务在线：先探活，离线时按 autoStart 决定启动并轮询等待就绪。
   * 返回最终服务状态（online / failed）。
   */
  async ensureOnline() {
    if (await this.probe()) {
      return { kind: "online" };
    }
    if (!this.opts.autoStart) {
      return { kind: "failed", message: t("svc.ensureOffline", { port: this.opts.port }) };
    }
    this.start();
    const deadline = Date.now() + this.readyTimeoutMs;
    while (Date.now() < deadline) {
      if (this.disposed) {
        return { kind: "failed", message: t("svc.unloaded") };
      }
      if (this.spawnError) {
        return { kind: "failed", message: t("svc.startFailed", { err: this.spawnError }) };
      }
      await delay(this.pollIntervalMs);
      if (await this.probe()) {
        return { kind: "online" };
      }
    }
    const seconds = Math.ceil(this.readyTimeoutMs / 1e3);
    return { kind: "failed", message: t("svc.timeout", { sec: seconds }) };
  }
  /** 拉起服务子进程；已 dispose 或已启动（child 存活）则忽略。命令为空时抛错。 */
  start() {
    if (this.disposed) {
      return;
    }
    if (this.child) {
      return;
    }
    const { command, args } = renderCommand(this.opts.startupCommand, this.opts.port);
    if (!command) {
      throw new Error(t("svc.noCommand"));
    }
    this.spawnError = null;
    this.deps.killPortOwner(this.opts.port);
    const child = this.deps.spawnProcess(command, args, this.opts.startupCwd, this.opts.detached);
    this.child = child;
    this.spawned = true;
    child.on("exit", (code) => {
      var _a;
      this.child = null;
      if (code !== 0 && code !== null) {
        this.spawnError = (_a = this.spawnError) != null ? _a : t("svc.exited", { code });
      }
    });
    child.on("error", (err) => {
      this.spawnError = err.message;
      this.child = null;
    });
  }
  /** 回收资源：非 detached 子进程将被终止；Windows 按进程树、POSIX 按进程组整组回收。 */
  dispose() {
    this.disposed = true;
    if (this.child && !this.opts.detached) {
      const pid = this.child.pid;
      if (pid && process.platform === "win32") {
        try {
          (0, import_node_child_process.execFileSync)("taskkill", ["/pid", String(pid), "/T", "/F"], { stdio: "ignore" });
        } catch (e) {
        }
      } else if (pid) {
        try {
          process.kill(-pid, "SIGTERM");
        } catch (e) {
        }
      } else {
        this.child.kill();
      }
      this.child = null;
    }
  }
};

// src/settings.ts
var import_obsidian2 = require("obsidian");

// src/detector.ts
var import_node_child_process2 = require("node:child_process");
var import_node_fs2 = require("node:fs");
var import_node_os2 = require("node:os");
var import_node_path2 = require("node:path");
function defaultHasBin(name) {
  const probe = process.platform === "win32" ? "where" : "which";
  try {
    (0, import_node_child_process2.execFileSync)(probe, [name], { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}
function isDshRepo(dir) {
  var _a;
  if ((0, import_node_fs2.existsSync)((0, import_node_path2.join)(dir, "pnpm-workspace.yaml"))) {
    return true;
  }
  const pkgPath = (0, import_node_path2.join)(dir, "package.json");
  if (!(0, import_node_fs2.existsSync)(pkgPath)) {
    return false;
  }
  try {
    const raw = (0, import_node_fs2.readFileSync)(pkgPath, "utf8");
    const pkg = JSON.parse(raw);
    if ((_a = pkg.name) == null ? void 0 : _a.includes("deepseek-harness")) {
      return true;
    }
    return Boolean(pkg.scripts && typeof pkg.scripts.dsh === "string");
  } catch (e) {
    return false;
  }
}
function locateDshRepoDir(candidates) {
  for (const dir of candidates) {
    if (dir && (0, import_node_fs2.existsSync)(dir) && isDshRepo(dir)) {
      return dir;
    }
  }
  return null;
}
function defaultCandidates(cwd, homeDir = (0, import_node_os2.homedir)()) {
  const winPaths = process.platform === "win32" ? ["D:\\deepseek-harness", "C:\\deepseek-harness"] : [];
  const posixPaths = process.platform === "darwin" ? ["/opt/deepseek-harness", "/usr/local/deepseek-harness"] : [];
  return [...new Set([cwd, (0, import_node_path2.join)(homeDir, "deepseek-harness"), ...posixPaths, ...winPaths].filter(Boolean))];
}
function detectDshConfig(current2, opts = {}) {
  var _a, _b, _c;
  const homeDir = (_a = opts.homeDir) != null ? _a : (0, import_node_os2.homedir)();
  const hasBin2 = (_b = opts.hasBin) != null ? _b : defaultHasBin;
  if (hasBin2("dsh")) {
    return {
      found: true,
      // --no-open：DSH 全局 CLI 默认启动时自动打开系统浏览器（openBrowser 默认 true），面板嵌入场景不需要
      startupCommand: "dsh web --port {port} --no-open",
      startupCwd: current2.cwd,
      message: t("detect.path", { port: "{port}" })
    };
  }
  const repoDir = locateDshRepoDir((_c = opts.candidates) != null ? _c : defaultCandidates(current2.cwd, homeDir));
  if (!repoDir) {
    return {
      found: false,
      startupCommand: "",
      startupCwd: "",
      message: t("detect.notFound")
    };
  }
  const command = hasBin2("pnpm") ? "pnpm dsh web --port {port}" : "npm run dsh -- web --port {port}";
  return {
    found: true,
    startupCommand: command,
    startupCwd: repoDir,
    message: t("detect.found", { dir: repoDir, cmd: command })
  };
}

// src/installer.ts
var import_node_child_process3 = require("node:child_process");
var import_node_fs3 = require("node:fs");
var import_node_os3 = require("node:os");
var import_node_path3 = require("node:path");
var DEFAULT_DSH_REPO_URL = "https://github.com/deepseek-ai/deepseek-harness.git";
var CLONE_TIMEOUT_MS = 3e5;
var INSTALL_TIMEOUT_MS = 6e5;
function run(exec, command, args, timeoutMs, env) {
  const resolved = resolveExec(process.platform, command, args);
  return new Promise((resolve) => {
    exec(resolved.command, resolved.args, { timeout: timeoutMs, windowsHide: true, ...env ? { env } : {} }, (err, stdout, stderr) => {
      if (err) {
        resolve({ ok: false, out: String(stdout != null ? stdout : "").trim(), err: String(stderr != null ? stderr : "").trim() });
      } else {
        resolve({ ok: true, out: String(stdout != null ? stdout : "").trim(), err: "" });
      }
    });
  });
}
var cachedPath;
function refreshedPath() {
  var _a, _b;
  if (cachedPath !== void 0) return cachedPath;
  if (process.platform === "win32") {
    try {
      const script = "[Environment]::ExpandEnvironmentVariables(([Environment]::GetEnvironmentVariable('Path','Machine')+';'+[Environment]::GetEnvironmentVariable('Path','User')))";
      const out = (0, import_node_child_process3.execFileSync)(
        "powershell.exe",
        ["-NoProfile", "-NonInteractive", "-Command", script],
        { encoding: "utf8", windowsHide: true, timeout: 15e3 }
      ).trim();
      if (out) cachedPath = out;
    } catch (e) {
    }
  } else if (process.platform === "darwin" || process.platform === "linux") {
    const current2 = (_a = process.env.PATH) != null ? _a : "";
    const home = process.env.HOME;
    const extras = [
      "/opt/homebrew/bin",
      // Apple Silicon brew
      "/opt/homebrew/sbin",
      "/usr/local/bin",
      // Intel brew / 常见安装
      "/usr/local/sbin",
      ...home ? [`${home}/.local/bin`, `${home}/bin`] : []
      // pip/用户级工具
    ];
    const merged = [current2, ...extras.filter((p) => (0, import_node_fs3.existsSync)(p))].join(":");
    if (merged) cachedPath = merged;
  }
  return (_b = cachedPath != null ? cachedPath : process.env.PATH) != null ? _b : "";
}
function refreshedEnv() {
  const path = refreshedPath();
  return { ...process.env, PATH: path, Path: path };
}
function defaultHasBin2(name) {
  const probe = process.platform === "win32" ? "where" : "which";
  try {
    (0, import_node_child_process3.execFileSync)(probe, [name], { stdio: "ignore", env: refreshedEnv() });
    return true;
  } catch (e) {
    return false;
  }
}
function delay2(ms) {
  return new Promise((resolve) => setTimer(resolve, ms));
}
var winTimers = typeof window !== "undefined" ? window : void 0;
function setTimer(fn, ms) {
  return winTimers ? winTimers.setTimeout(fn, ms) : setTimeout(fn, ms);
}
function clearTimer(id) {
  if (winTimers) winTimers.clearTimeout(id);
  else clearTimeout(id);
}
function setIntervalTimer(fn, ms) {
  return winTimers ? winTimers.setInterval(fn, ms) : setInterval(fn, ms);
}
function clearIntervalTimer(id) {
  if (winTimers) winTimers.clearInterval(id);
  else clearInterval(id);
}
function cloneWithProgress(targetDir, url, env, onProgress) {
  return new Promise((resolve) => {
    var _a;
    const child = (0, import_node_child_process3.spawn)(
      "git",
      [
        "clone",
        "--depth",
        "1",
        "--progress",
        "--config",
        "http.postBuffer=524288000",
        "--config",
        "http.lowSpeedLimit=1000",
        "--config",
        "http.lowSpeedTime=30",
        url,
        targetDir
      ],
      { env, windowsHide: true, stdio: ["ignore", "ignore", "pipe"] }
    );
    let stderr = "";
    let last = -1;
    const timer = setTimer(() => child.kill(), CLONE_TIMEOUT_MS);
    (_a = child.stderr) == null ? void 0 : _a.on("data", (chunk) => {
      const s = String(chunk);
      stderr += s;
      const m = s.match(/Receiving objects:\s+(\d+)%/);
      if (m) {
        const pct = Number(m[1]);
        if (pct !== last) {
          last = pct;
          onProgress(pct);
        }
      }
    });
    child.on("error", (err) => {
      clearTimer(timer);
      resolve({ ok: false, out: "", err: err.message });
    });
    child.on("close", (code) => {
      clearTimer(timer);
      resolve(code === 0 ? { ok: true, out: "", err: "" } : { ok: false, out: "", err: stderr.trim() });
    });
  });
}
async function runWithTicker(promise, onStep, baseStep, percent, intervalMs = 5e3) {
  let elapsed = 0;
  const id = setIntervalTimer(() => {
    elapsed += intervalMs;
    onStep(`${baseStep}\uFF08${Math.round(elapsed / 1e3)}s\uFF09`, percent);
  }, intervalMs);
  try {
    return await promise;
  } finally {
    clearIntervalTimer(id);
  }
}
function isRescuableDir(dir) {
  try {
    const entries = (0, import_node_fs3.readdirSync)(dir);
    return entries.length === 0 || entries.length === 1 && entries[0] === ".git";
  } catch (e) {
    return false;
  }
}
function checkDeps(opts = {}) {
  var _a;
  const hasBin2 = (_a = opts.hasBin) != null ? _a : defaultHasBin2;
  return { git: hasBin2("git"), node: hasBin2("node"), pnpm: hasBin2("pnpm") };
}
function compareVer(a, b) {
  var _a, _b;
  const pa = a.split(".").map((s) => Number(s) || 0);
  const pb = b.split(".").map((s) => Number(s) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = ((_a = pa[i]) != null ? _a : 0) - ((_b = pb[i]) != null ? _b : 0);
    if (d !== 0) return d;
  }
  return 0;
}
function fetchMirrorJson(url) {
  try {
    const out = (0, import_node_child_process3.execFileSync)("curl.exe", ["-L", "-sS", url], { encoding: "utf8", timeout: 3e4 });
    const parsed = JSON.parse(out);
    return Array.isArray(parsed) ? parsed : null;
  } catch (e) {
    return null;
  }
}
function pickLatestMirrorEntry(entries, match, versionOf) {
  let best = null;
  let bestVer = "";
  for (const e of entries) {
    const name = typeof e.name === "string" ? e.name : "";
    if (!match(name)) continue;
    const ver = versionOf(name);
    if (best === null || compareVer(ver, bestVer) > 0) {
      best = name;
      bestVer = ver;
    }
  }
  return best;
}
function downloadViaCurl(url, dest) {
  return new Promise((resolve) => {
    const child = (0, import_node_child_process3.spawn)("curl.exe", ["-L", "-sS", "--retry", "2", "-o", dest, url], { stdio: "ignore", windowsHide: true });
    child.on("error", () => resolve(false));
    child.on("close", (code) => {
      resolve(code === 0 && (0, import_node_fs3.existsSync)(dest) && (0, import_node_fs3.statSync)(dest).size > 0);
    });
  });
}
function gitDirVer(name) {
  return name.replace(/^v/, "").replace(/\.windows\./, ".").replace(/\/$/, "");
}
async function installGitFromMirror(onStep) {
  onStep(t("install.depMirror"), 26);
  const roots = fetchMirrorJson("https://registry.npmmirror.com/-/binary/git-for-windows/");
  if (roots === null) return { ok: false, message: t("install.depMirrorFail", { err: "mirror listing" }) };
  const dirs = roots.map((e) => typeof e.name === "string" ? e.name : "").filter((n) => /^v\d+\.\d+\.\d+\.windows\.\d+\/$/.test(n)).sort((a, b) => compareVer(gitDirVer(b), gitDirVer(a)));
  let versionDir = null;
  let exe = null;
  for (const dir of dirs) {
    const files = fetchMirrorJson(`https://registry.npmmirror.com/-/binary/git-for-windows/${dir}`);
    const found = files === null ? null : pickLatestMirrorEntry(files, (n) => /^Git-\d+\.\d+\.\d+-64-bit\.exe$/.test(n), (n) => n.replace(/^Git-/, "").replace(/-64-bit\.exe$/, ""));
    if (found !== null) {
      versionDir = dir;
      exe = found;
      break;
    }
  }
  if (versionDir === null || exe === null) return { ok: false, message: t("install.depMirrorFail", { err: "mirror listing" }) };
  const dest = (0, import_node_path3.join)((0, import_node_os3.tmpdir)(), exe);
  const dl = `https://npmmirror.com/mirrors/git-for-windows/${versionDir}${exe}`;
  if (!await downloadViaCurl(dl, dest)) {
    return { ok: false, message: t("install.depMirrorFail", { err: "download failed" }) };
  }
  try {
    (0, import_node_child_process3.execFileSync)(dest, ["/VERYSILENT", "/NORESTART", "/SP-"], { timeout: 6e5 });
    return { ok: true, message: t("dep.git.installedMirror") };
  } catch (err) {
    return { ok: false, message: t("install.depMirrorFail", { err: err instanceof Error ? err.message : String(err) }) };
  }
}
async function installNodeFromMirror(onStep) {
  onStep(t("install.depMirror"), 32);
  const files = fetchMirrorJson("https://registry.npmmirror.com/-/binary/node/latest-v22.x/");
  const msi = files === null ? null : pickLatestMirrorEntry(files, (n) => /^node-v\d+\.\d+\.\d+-x64\.msi$/.test(n), (n) => n.replace(/^node-v/, "").replace(/-x64\.msi$/, ""));
  if (msi === null) return { ok: false, message: t("install.depMirrorFail", { err: "mirror listing" }) };
  const dest = (0, import_node_path3.join)((0, import_node_os3.tmpdir)(), msi);
  const dl = `https://npmmirror.com/mirrors/node/latest-v22.x/${msi}`;
  if (!await downloadViaCurl(dl, dest)) {
    return { ok: false, message: t("install.depMirrorFail", { err: "download failed" }) };
  }
  try {
    (0, import_node_child_process3.execFileSync)("msiexec.exe", ["/i", dest, "/qn", "/norestart"], { timeout: 6e5 });
    return { ok: true, message: t("dep.node.installedMirror") };
  } catch (err) {
    return { ok: false, message: t("install.depMirrorFail", { err: err instanceof Error ? err.message : String(err) }) };
  }
}
async function installDependency(dep, opts = {}) {
  var _a, _b;
  const exec = (_a = opts.exec) != null ? _a : import_node_child_process3.execFile;
  const onStep = (_b = opts.onStep) != null ? _b : () => void 0;
  const env = opts.exec ? void 0 : refreshedEnv();
  const ticked = (promise, pct) => opts.exec ? promise : runWithTicker(promise, onStep, t("install.autoDep", { dep }), pct);
  if (process.platform === "win32") {
    const hasWinget = defaultHasBin2("winget");
    if (dep === "git") {
      const r2 = hasWinget ? await ticked(run(exec, "winget", ["install", "--id", "Git.Git", "-e", "--accept-source-agreements", "--accept-package-agreements", "--silent"], 6e5, env), 8) : { ok: false, err: t("dep.noWinget") };
      if (r2.ok) return { ok: true, message: t("dep.git.installed") };
      if (!opts.exec) {
        const m = await installGitFromMirror(onStep);
        if (m.ok) return m;
        return { ok: false, message: t("dep.git.fail", { err: r2.err || m.message || t("err.unknown") }) };
      }
      return { ok: false, message: t("dep.git.fail", { err: r2.err || t("err.unknown") }) };
    }
    if (dep === "node") {
      const r2 = hasWinget ? await ticked(run(exec, "winget", ["install", "--id", "OpenJS.NodeJS.LTS", "-e", "--accept-source-agreements", "--accept-package-agreements", "--silent"], 6e5, env), 16) : { ok: false, err: t("dep.noWinget") };
      if (r2.ok) return { ok: true, message: t("dep.node.installed") };
      if (!opts.exec) {
        const m = await installNodeFromMirror(onStep);
        if (m.ok) return m;
        return { ok: false, message: t("dep.node.fail", { err: r2.err || m.message || t("err.unknown") }) };
      }
      return { ok: false, message: t("dep.node.fail", { err: r2.err || t("err.unknown") }) };
    }
    const w = hasWinget ? await ticked(run(exec, "winget", ["install", "--id", "pnpm.pnpm", "-e", "--accept-source-agreements", "--accept-package-agreements", "--silent"], 6e5, env), 24) : { ok: false, err: t("dep.noWinget") };
    if (w.ok) {
      return { ok: true, message: t("dep.pnpm.installed") };
    }
    const r = await ticked(run(exec, "npm", ["install", "-g", "pnpm"], 6e5, env), 24);
    return r.ok ? { ok: true, message: t("dep.pnpm.installed") } : { ok: false, message: t("dep.pnpm.fail", { err: r.err || t("err.unknown") }) };
  }
  if (process.platform === "darwin") {
    const formula = dep === "git" ? "git" : dep === "node" ? "node" : "pnpm";
    const r = await ticked(run(exec, "brew", ["install", formula], 6e5, env), 24);
    return r.ok ? { ok: true, message: t("dep.brew.installed", { dep }) } : { ok: false, message: t("dep.brew.fail", { dep, err: r.err.split("\n")[0] || t("err.unknown"), formula }) };
  }
  const hints = {
    git: "macOS: brew install git\uFF1BLinux: sudo apt install git",
    node: t("dep.hint.node"),
    pnpm: t("dep.hint.pnpm")
  };
  return { ok: false, message: t("dep.manual", { hint: hints[dep] }) };
}
async function ensureDeps(exec, hasBin2, env, onStep, opts) {
  if (opts.exec) return "";
  const depPct = { git: 8, node: 16, pnpm: 24 };
  for (const dep of ["git", "node", "pnpm"]) {
    if (!hasBin2(dep)) {
      onStep(t("install.autoDep", { dep }), depPct[dep]);
      const r = await installDependency(dep, { onStep });
      if (!r.ok) return r.message;
      cachedPath = void 0;
      if (!hasBin2(dep)) return t("install.depStillMissing", { dep });
    }
  }
  return "";
}
async function ensureCli(exec, hasBin2, env, onStep, opts) {
  if (hasBin2("dsh")) return "";
  onStep(t("install.cliInstalling"), 92);
  const runCli = (extra) => run(exec, "npm", ["install", "-g", "@deepseek-ai/dsh@latest", "--no-fund", "--no-audit", ...extra], INSTALL_TIMEOUT_MS, env);
  let cli = opts.exec ? await runCli([]) : await runWithTicker(runCli([]), onStep, t("install.cliInstalling"), 94);
  if (!cli.ok) {
    cli = await runCli(["--registry", "https://registry.npmmirror.com"]);
  }
  return cli.ok ? t("install.cliDone") : t("install.cliFail", { err: cli.err.split("\n")[0] || t("err.failed") });
}
async function installDsh(targetDir, opts = {}) {
  var _a, _b, _c, _d;
  const exec = (_a = opts.exec) != null ? _a : import_node_child_process3.execFile;
  const hasBin2 = (_b = opts.hasBin) != null ? _b : defaultHasBin2;
  const cloneUrl = (_c = opts.cloneUrl) != null ? _c : DEFAULT_DSH_REPO_URL;
  const onStep = (_d = opts.onStep) != null ? _d : () => void 0;
  const env = opts.exec ? void 0 : refreshedEnv();
  if (!targetDir) {
    return { ok: false, message: t("install.dirEmpty") };
  }
  if ((0, import_node_fs3.existsSync)(targetDir) && isDshRepo(targetDir)) {
    const depErr2 = await ensureDeps(exec, hasBin2, env, onStep, opts);
    if (depErr2) {
      return { ok: false, message: depErr2, dir: targetDir };
    }
    const cliNote = await ensureCli(exec, hasBin2, env, onStep, opts);
    return { ok: true, message: t("install.found", { dir: targetDir }) + (cliNote ? " " + cliNote : ""), dir: targetDir };
  }
  if ((0, import_node_fs3.existsSync)(targetDir)) {
    if (isRescuableDir(targetDir)) {
      (0, import_node_fs3.rmSync)(targetDir, { recursive: true, force: true });
    } else {
      return {
        ok: false,
        message: t("install.notDsh", { dir: targetDir })
      };
    }
  }
  const depErr = await ensureDeps(exec, hasBin2, env, onStep, opts);
  if (depErr) {
    return { ok: false, message: depErr };
  }
  onStep(t("install.downloading"), 30);
  const mirrorUrl = `https://gh-proxy.com/${cloneUrl}`;
  const cloneAttempts = [cloneUrl, mirrorUrl];
  const cloneArgs = (url) => [
    "clone",
    "--depth",
    "1",
    "--config",
    "http.postBuffer=524288000",
    "--config",
    "http.lowSpeedLimit=1000",
    "--config",
    "http.lowSpeedTime=30",
    url,
    targetDir
  ];
  let clone = null;
  let lastErr = "";
  for (let i = 0; i < cloneAttempts.length; i++) {
    if (i > 0) {
      onStep(t("install.mirrorRetry", { n: i }), 28);
      await delay2(2e3);
    }
    const r = opts.exec ? await run(exec, "git", cloneArgs(cloneAttempts[i]), CLONE_TIMEOUT_MS, env) : await cloneWithProgress(targetDir, cloneAttempts[i], env, (pct) => {
      onStep(t("install.downloading"), Math.round(30 + pct * 0.3));
    });
    if (r.ok && (0, import_node_fs3.existsSync)(targetDir) && isDshRepo(targetDir)) {
      clone = r;
      break;
    }
    lastErr = r.err.split("\n")[0] || `${t("err.failed")}\uFF08\u7B2C ${i + 1} \u6B21\u5C1D\u8BD5\uFF09`;
    if ((0, import_node_fs3.existsSync)(targetDir)) {
      (0, import_node_fs3.rmSync)(targetDir, { recursive: true, force: true });
    }
  }
  if (!clone) {
    return {
      ok: false,
      message: t("install.cloneFailed", { err: lastErr })
    };
  }
  let depsNote = "";
  if (hasBin2("pnpm")) {
    onStep(t("install.depsInstalling"), 65);
    const runInstall = (extra) => run(exec, "pnpm", ["-C", targetDir, "install", ...extra], INSTALL_TIMEOUT_MS, env);
    let install = opts.exec ? await runInstall([]) : await runWithTicker(runInstall([]), onStep, t("install.depsInstalling"), 70);
    if (!install.ok) {
      onStep(t("install.depsMirror"), 60);
      install = opts.exec ? await runInstall(["--registry", "https://registry.npmmirror.com"]) : await runWithTicker(
        runInstall(["--registry", "https://registry.npmmirror.com"]),
        onStep,
        t("install.depsInstalling"),
        70
      );
    }
    if (!install.ok) {
      depsNote = t("install.depsNoteFail", { err: install.err.split("\n")[0] || t("err.failed"), dir: targetDir });
    }
  } else {
    depsNote = t("install.depsNoteNoPnpm");
  }
  if (hasBin2("pnpm")) {
    onStep(t("install.buildStep"), 75);
    const runBuild = () => run(exec, "pnpm", ["-C", targetDir, "run", "build"], INSTALL_TIMEOUT_MS, env);
    const build = opts.exec ? await runBuild() : await runWithTicker(runBuild(), onStep, t("install.buildStep"), 85);
    if (!build.ok) {
      return {
        ok: false,
        message: t("install.buildFail", { err: build.err.split("\n")[0] || t("err.failed"), dir: targetDir })
      };
    }
  }
  depsNote += await ensureCli(exec, hasBin2, env, onStep, opts);
  onStep(t("install.done"), 100);
  return {
    ok: true,
    message: t("install.message", { dir: targetDir, note: depsNote }),
    dir: targetDir
  };
}

// src/bridge.ts
var import_node_crypto = require("node:crypto");
var import_node_fs4 = require("node:fs");
var import_node_os4 = require("node:os");
var import_node_path4 = require("node:path");
var BRIDGE_ENTRY_ID = "dsh-obsidian-bridge";
var BRIDGE_FILENAME = "dsh-obsidian-bridge.mjs";
function hotkeyToPassthroughKey(hk, platform = process.platform) {
  var _a;
  if (!hk || typeof hk.key !== "string" || hk.key === "") return null;
  const mods = ((_a = hk.modifiers) != null ? _a : []).map((m) => m.toLowerCase());
  const normalized = mods.map((m) => m === "mod" ? platform === "darwin" ? "meta" : "ctrl" : m);
  const prefix = normalized.filter((m) => m === "ctrl" || m === "meta" || m === "alt" || m === "shift").join("+");
  if (prefix === "") return null;
  return `${prefix}+${hk.key.toLowerCase()}`;
}
function dshHomeDir() {
  var _a;
  const env = ((_a = process.env.DSH_HOME) != null ? _a : "").trim();
  return env !== "" ? env : (0, import_node_path4.join)((0, import_node_os4.homedir)(), ".dsh");
}
function webProfileDir(home = dshHomeDir()) {
  return (0, import_node_path4.join)(home, "profiles", "web");
}
function bridgeScriptSource() {
  return "(function(){if(window.__DSH_OBSIDIAN_BRIDGE__)return;window.__DSH_OBSIDIAN_BRIDGE__=true;var BRIDGE_LINE_RE=/\\[\\s*BRIDGES is delivering packages for you\u2026\u2026\\s*\xB7\\s*(\\d+)\\s*words\\s*\xB7\\s*L(\\d+):(\\d+)-L(\\d+):(\\d+)\\s*\xB7\\s*([^\\]]+?)\\s*\xB7\\s*\\]/;function mergeFill(existing,incoming){if(!existing)existing='';var lines=existing.split('\\n'),i,prev=false,rest='';for(i=0;i<lines.length;i++){var l=lines[i];if(BRIDGE_LINE_RE.test(l))continue;var e=l.trim()==='';if(e&&prev)continue;rest=rest===''?l:rest+'\\n'+l;prev=e}rest=rest.replace(/^\\s+|\\s+$/g,'');if(incoming==='')return rest;return rest===''?incoming:incoming+'\\n'+rest}function pick(){var el=document.querySelector('textarea[data-phase]')||document.querySelector('textarea');return el&&!el.readOnly&&!el.disabled?el:null}function fill(text){var n=0;function go(){var el=pick();if(el){var d=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,'value');var merged=mergeFill(el.value||'',text);d.set.call(el,merged);el.dispatchEvent(new Event('input',{bubbles:true}));try{window.parent.postMessage({type:'dsh-fill-ack'},'*')}catch(_){}return}if(n<10){n++;setTimeout(go,100)}else if(n<15){n++;setTimeout(go,400)}}go()}var vaultRoot=null;function normP(p){return p.replace(/\\\\/g,'/').replace(/\\/+/g,'/')}function coll(p){var m=/^[A-Za-z]:/.exec(p),drive=m?m[0]:'',body=p.slice(drive.length),rooted=body.charAt(0)==='/',segs=[],i,parts=body.split('/');for(i=0;i<parts.length;i++){var s=parts[i];if(s===''||s==='.')continue;if(s==='..'){if(segs.length)segs.pop()}else{segs.push(s)}}return drive+(rooted?'/':'')+segs.join('/')}function resolveTxt(text){var t=text.trim();if(!t||t.length>300||!vaultRoot)return null;var r=normP(vaultRoot).replace(/\\/+$/,'');var abs=/^[A-Za-z]:/.test(t)||t.charAt(0)==='/'?normP(t):r+'/'+normP(t);var a=coll(abs);var rl=r.toLowerCase(),al=a.toLowerCase();if(al===rl||al.indexOf(rl+'/')===0)return a;return null}function isClickable(el){return el.tagName==='BUTTON'||el.tagName==='A'}function labelPrefixed(t){return /^(read|edit|write|think|grep|pwsh|tool|search|diff|web|bash|python|node|run|open|show|copy|cat|mkdir|rm|mv|add|delete)\\b/i.test(t)}function readable(p){return /\\.(md|markdown|txt|canvas|pdf|png|jpe?g|gif|svg|webp|bmp|ico|mp3|wav|ogg|oga|m4a|flac|opus|aac|mp4|webm|mov|mkv|avi|m4v|ogv|3gp|ts|js|jsx|tsx|mjs|cjs|json|css|scss|less|html|htm|xml|yaml|yml|csv|log|mdx|py|sh|bat|ps1)$/i.test(p)}function pathOf(el){var t=el.getAttribute?el.getAttribute('title'):null;if(t&&/[\\\\/]/.test(t))return t;return (el.textContent||'').trim()}document.addEventListener('click',function(e){if(!vaultRoot)return;var el=e.target;while(el&&el!==document.body){var txt=pathOf(el);if(txt.length>2&&txt.length<300&&/[\\\\/]/.test(txt)&&isClickable(el)&&!labelPrefixed(txt)){e.preventDefault();e.stopPropagation();var r=resolveTxt(txt);if(r&&readable(r)){try{window.parent.postMessage({type:'dsh-open-in-obsidian',path:r},'*')}catch(_){}}return}el=el.parentElement}},true);window.addEventListener('message',function(e){if(e.source!==window.parent)return;var d=e.data;if(!d)return;if(d.type==='dsh-fill-draft'&&typeof d.text==='string'){fill(d.text);return}if(d.type==='dsh-bridge-ping'){try{window.parent.postMessage({type:'dsh-bridge-ready'},'*')}catch(_){};return}if(d.type==='dsh-open-cfg'&&typeof d.vaultRoot==='string'){vaultRoot=d.vaultRoot;return}if(d.type==='dsh-kbd-cfg'&&d.keys&&d.keys.length!==undefined){kbdKeys=d.keys;logKbd('kbd-cfg received: '+kbdList());return}});var kbdKeys=[];function kbdMatch(e,k){if(!k||!e)return false;var wantC=k.indexOf('ctrl')>=0,wantM=k.indexOf('meta')>=0,wantA=k.indexOf('alt')>=0;if(wantC!==e.ctrlKey||wantM!==e.metaKey||wantA!==e.altKey)return false;var key=(e.key||'').toLowerCase();if(k.indexOf('+')>=0){var ch=k.slice(k.lastIndexOf('+')+1).toLowerCase();return key===ch}return key===k.toLowerCase()}function requestKbd(){try{window.parent.postMessage({type:'dsh-kbd-request'},'*')}catch(_){}}function logKbd(m){try{console.log('[dsh-bridge]',m)}catch(_){}}function kbdList(){var s='';for(var i=0;i<kbdKeys.length;i++){s+=kbdKeys[i]+' '}return s}logKbd('keydown listener installed, kbdKeys='+kbdKeys.length+': '+kbdList());document.addEventListener('keydown',function(e){logKbd('keydown ctrl='+e.ctrlKey+' meta='+e.metaKey+' key='+e.key+' kbdKeys='+kbdKeys.length);if(!kbdKeys.length){requestKbd();return}for(var i=0;i<kbdKeys.length;i++){if(kbdMatch(e,kbdKeys[i])){e.preventDefault();e.stopPropagation();logKbd('MATCH '+kbdKeys[i]+' -> post');try{window.parent.postMessage({type:'dsh-kbd-shortcut',key:kbdKeys[i]},'*')}catch(_){}return}}},true);try{window.parent.postMessage({type:'dsh-bridge-ready'},'*')}catch(_){}})()";
}
function bridgePluginSource() {
  const escaped = bridgeScriptSource().replaceAll("\\", "\\\\").replaceAll("'", "\\'");
  return [
    "// DeepSeek Harness Obsidian bridge \u2014 user patch-layer plugin (installed by the dsh-harness Obsidian plugin).",
    "// Registers an index.html transform that injects a postMessage bridge into the served Web GUI,",
    "// so the Obsidian plugin can fill the composer draft with selected text. Zero DSH source changes.",
    "// Also registers an agent/pre-step hook: when the newest user message carries a BRIDGES implicit",
    "// line, it injects a deterministic edit instruction (model reads the region, presents the result,",
    "// asks for consent, then writes with fs edit). The instruction itself never appears in the chat UI.",
    "export const name = 'dsh-obsidian-bridge'",
    "",
    `const BRIDGE = '${escaped}'`,
    "",
    bridgeEditInjectSource(),
    "",
    "export function apply(ctx) {",
    "  ctx.inject(['webServer'], (httpCtx) => {",
    "    httpCtx.effect(",
    "      () => httpCtx.webServer.tapIndex((html) => html.replace('<head>', '<head><script>' + BRIDGE + '<\/script>')),",
    "      'dsh-obsidian-bridge: index bridge',",
    "    )",
    "  })",
    "  try {",
    "    ctx.on('agent/pre-step', async ({ messages }, next) => {",
    "      const decision = await next()",
    "      if (decision.kind === 'reject') return decision",
    "      const msg = bridgeEditMaybeInject({ messages })",
    "      if (!msg) return decision",
    "      return { kind: 'enter', messages: [...decision.messages, msg] }",
    "    })",
    "  } catch (err) {",
    "    try { console.warn('[dsh-obsidian-bridge] pre-step unavailable:', err && err.message) } catch (_) {}",
    "  }",
    "}",
    ""
  ].join("\n");
}
function bridgeEditInjectSource() {
  return [
    "const BRIDGE_LINE_RE = /\\[\\s*BRIDGES is delivering packages for you\u2026\u2026\\s*\xB7\\s*(\\d+)\\s*words\\s*\xB7\\s*L(\\d+):(\\d+)-L(\\d+):(\\d+)\\s*\xB7\\s*([^\\]]+?)\\s*\xB7\\s*\\]/",
    "function bridgeEditMaybeInject({ messages }) {",
    "  if (!messages || !messages.length) return null",
    "  const last = messages[messages.length - 1]",
    "  const text = typeof last === 'string' ? last : ((last && last.content) || []).map((c) => (c && c.text) || '').join('')",
    "  if (!text) return null",
    "  const m = BRIDGE_LINE_RE.exec(text)",
    "  if (!m) return null",
    "  for (let i = 0; i < messages.length; i++) {",
    "    const s = messages[i] && messages[i].source",
    "    if (s && s.plugin === 'dsh-obsidian-bridge' && s.form === 'bridge-edit') return null",
    "  }",
    "  const path = m[6].trim()",
    "  const loc = 'L' + m[2] + ':' + m[3] + '-L' + m[4] + ':' + m[5]",
    "  const instruction = text.replace(BRIDGE_LINE_RE, '').trim() || '\u8BF7\u8BFB\u53D6\u8BE5\u533A\u57DF\u5185\u5BB9\u5E76\u5904\u7406'",
    "  const text2 = '[BRIDGES \u7F16\u8F91\u6307\u4EE4] \u76EE\u6807\u6587\u4EF6\uFF1A' + path + '\uFF1B\u9009\u533A\uFF081 \u57FA\u884C:\u5217\uFF09\uFF1A' + loc + '\uFF1B\u7528\u6237\u8981\u6C42\uFF1A' + instruction",
    "    + '\u3002\u5904\u7406\u8981\u6C42\uFF1A\u5148\u7528 fs read \u8BFB\u53D6\u8BE5\u533A\u57DF\u539F\u6587\uFF1B\u6309\u7528\u6237\u8981\u6C42\u76F4\u63A5\u751F\u6210\u7ED3\u679C\uFF08\u53EA\u8F93\u51FA\u7ED3\u679C\u672C\u8EAB\u3001\u4E00\u6BB5\u5373\u53EF\uFF0C\u4E0D\u8981\u9644\u5E26\u5B9A\u4F4D\u8BF4\u660E\u6216\u8865\u5145\uFF09\uFF1B\u968F\u540E\u8BE2\u95EE\u7528\u6237\u662F\u5426\u540C\u610F\u5C06\u8BE5\u7ED3\u679C\u5199\u5165\u6587\u4EF6\uFF1B\u7ECF\u7528\u6237\u540C\u610F\u540E\u518D\u7528 fs edit \u5199\u5165\uFF08old_string=\u8BFB\u53D6\u5230\u7684\u539F\u6587\uFF0C\u6309\u7528\u6237\u8981\u6C42\u66FF\u6362\u6216\u8FFD\u52A0\uFF09\u3002\u672C\u7F16\u8F91\u4EFB\u52A1\u5B8C\u6210\u540E\u8BF7\u5FFD\u7565\u672C\u6307\u4EE4\uFF0C\u52FF\u5728\u540E\u7EED\u5BF9\u8BDD\u4E2D\u91CD\u590D\u6267\u884C\u3002'",
    "  return { source: { kind: 'plugin', plugin: 'dsh-obsidian-bridge', form: 'bridge-edit' }, content: [{ type: 'text', text: text2 }] }",
    "}"
  ].join("\n");
}
function removeDshFixDisable(content) {
  const lines = content.split("\n");
  const out = [];
  let skip = false;
  for (const line of lines) {
    if (/^#\s*dsh-fix:\s*disabled entry\s+"dsh-obsidian-bridge"/.test(line)) {
      skip = true;
      continue;
    }
    if (skip) {
      if (/^\s*-?\s*id:\s*"?dsh-obsidian-bridge"?\s*$/.test(line)) continue;
      if (/^\s*disabled:\s*true\s*$/.test(line)) {
        skip = false;
        continue;
      }
    }
    out.push(line);
  }
  const result = out.join("\n");
  return result === content ? content : result;
}
function contentHash(s) {
  return (0, import_node_crypto.createHash)("sha256").update(s, "utf8").digest("hex");
}
function atomicWrite(filePath, content) {
  const tmp = `${filePath}.tmp-${process.pid}`;
  (0, import_node_fs4.writeFileSync)(tmp, content, "utf8");
  (0, import_node_fs4.renameSync)(tmp, filePath);
}
function writeBridgeFiles(home = dshHomeDir()) {
  try {
    const dir = webProfileDir(home);
    (0, import_node_fs4.mkdirSync)(dir, { recursive: true });
    const pluginPath = (0, import_node_path4.join)(dir, BRIDGE_FILENAME);
    const source = bridgePluginSource();
    let pluginRewritten = false;
    if (!(0, import_node_fs4.existsSync)(pluginPath) || contentHash((0, import_node_fs4.readFileSync)(pluginPath, "utf8")) !== contentHash(source)) {
      atomicWrite(pluginPath, source);
      pluginRewritten = true;
    }
    const patchPath = (0, import_node_path4.join)(dir, "cordis.patch.yml");
    let existing = (0, import_node_fs4.existsSync)(patchPath) ? (0, import_node_fs4.readFileSync)(patchPath, "utf8") : "";
    const healed = removeDshFixDisable(existing);
    if (healed !== existing) {
      atomicWrite(patchPath, healed);
      existing = healed;
      pluginRewritten = true;
    }
    if (existing.includes(BRIDGE_ENTRY_ID)) {
      return { changed: false, pluginPath, pluginRewritten };
    }
    const fileUrl = "file:///" + pluginPath.replaceAll("\\", "/");
    const entry = `- insert:
    - id: ${BRIDGE_ENTRY_ID}
      name: ${fileUrl}
`;
    const body = existing.split("\n").filter((line) => !line.trim().startsWith("#")).join("\n").trim();
    if (existing === "") {
      const newContent = `# ${BRIDGE_ENTRY_ID} \u2014 installed by the dsh-harness Obsidian plugin
${entry}`;
      atomicWrite(patchPath, newContent);
      return { changed: true, pluginPath, pluginRewritten };
    }
    if (body === "[]") {
      const header = existing.trimEnd().replace(/\s*\[\s*\]\s*$/, "");
      const newContent = (header === "" || header.endsWith("\n") ? header : header + "\n") + entry;
      atomicWrite(patchPath, newContent);
      return { changed: true, pluginPath, pluginRewritten };
    }
    if (/^-\s/.test(body)) {
      atomicWrite(patchPath, existing.trimEnd() + "\n" + entry);
      return { changed: true, pluginPath, pluginRewritten };
    }
    return {
      changed: false,
      pluginPath,
      pluginRewritten,
      error: t("bridge.patchMergeError")
    };
  } catch (err) {
    return {
      changed: false,
      pluginPath: "",
      pluginRewritten: false,
      error: err instanceof Error ? err.message : String(err)
    };
  }
}
function isBridgeInstalled(home = dshHomeDir()) {
  try {
    const dir = webProfileDir(home);
    if (!(0, import_node_fs4.existsSync)((0, import_node_path4.join)(dir, BRIDGE_FILENAME))) return false;
    const patchPath = (0, import_node_path4.join)(dir, "cordis.patch.yml");
    if (!(0, import_node_fs4.existsSync)(patchPath)) return false;
    return (0, import_node_fs4.readFileSync)(patchPath, "utf8").includes(BRIDGE_ENTRY_ID);
  } catch (e) {
    return false;
  }
}

// src/install-progress-modal.ts
var import_obsidian = require("obsidian");
var InstallProgressModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
    this.rows = /* @__PURE__ */ new Map();
    this.lastPercent = -1;
    this.finished = false;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("dsh-install-modal");
    contentEl.createEl("h3", { text: t("modal.installProgressTitle") });
    contentEl.createEl("p", { cls: "dsh-detail", text: t("modal.installProgressDesc") });
    const order = [
      ["git", t("view.install.git")],
      ["node", t("view.install.node")],
      ["pnpm", t("view.install.pnpm")],
      ["clone", t("install.downloading")],
      ["deps", t("install.depsInstalling")],
      ["build", t("install.buildStep")],
      ["cli", t("install.cliInstalling")]
    ];
    const list = contentEl.createDiv({ cls: "dsh-install-steps" });
    for (const [key, label] of order) {
      const row = list.createDiv({ cls: "dsh-install-step" });
      const mark = row.createSpan({ cls: "dsh-install-mark", text: "\u25CB" });
      row.createSpan({ cls: "dsh-install-label", text: label });
      this.rows.set(key, { row, mark });
    }
    const barBox = contentEl.createDiv({ cls: "dsh-progress" });
    this.bar = barBox.createDiv({ cls: "dsh-progress-bar" });
    this.pctText = barBox.createDiv({ cls: "dsh-progress-text", text: "0%" });
    const deps = checkDeps();
    this.markDone("git", deps.git);
    this.markDone("node", deps.node);
    this.markDone("pnpm", deps.pnpm);
  }
  onClose() {
    this.contentEl.empty();
  }
  /** 安装进度回调（installDsh onStep 的包装）：按 percent 定位阶段并更新。 */
  update(percent, stepText) {
    if (this.finished) return;
    const pct = Math.max(0, Math.min(100, Math.round(percent != null ? percent : 0)));
    if (pct !== this.lastPercent) {
      this.lastPercent = pct;
      this.bar.setCssProps({ width: `${pct}%` });
      this.pctText.textContent = `${pct}%`;
    }
    if (pct > 0 && pct < 30) {
      this.activateByDepName(stepText);
    } else if (pct >= 30 && pct < 65) {
      this.activate("clone");
    } else if (pct >= 65 && pct < 75) {
      this.activate("deps");
    } else if (pct >= 75 && pct < 92) {
      this.activate("build");
    } else if (pct >= 92 && pct < 100) {
      this.activate("cli");
    } else if (pct >= 100) {
      this.done();
    }
  }
  /** 全部完成：剩余步骤打勾。 */
  done() {
    this.finished = true;
    for (const key of this.rows.keys()) this.markDone(key, true);
    this.bar.setCssProps({ width: "100%" });
    this.pctText.textContent = "100%";
  }
  /** 失败：当前阶段打叉（其余保持现状，用户可重试）。 */
  fail() {
    this.finished = true;
    for (const { mark } of this.rows.values()) {
      if (mark.textContent === "\u25CF" || mark.textContent === "\u25CB") {
        mark.textContent = "\u2717";
        mark.addClass("dsh-install-mark-fail");
      }
    }
  }
  markDone(key, ok) {
    const entry = this.rows.get(key);
    if (!entry) return;
    entry.mark.textContent = ok ? "\u2713" : "\u25CB";
    entry.row.addClass(ok ? "dsh-install-step-done" : "");
    if (ok) entry.mark.addClass("dsh-install-mark-ok");
  }
  activate(key) {
    for (const [k, { mark, row }] of this.rows) {
      if (k === key) {
        mark.textContent = "\u25CF";
        mark.addClass("dsh-install-mark-active");
        row.addClass("dsh-install-step-active");
      } else if (mark.textContent === "\u25CF") {
        mark.textContent = "\u2713";
        mark.removeClass("dsh-install-mark-active");
        mark.addClass("dsh-install-mark-ok");
        row.addClass("dsh-install-step-done");
        row.removeClass("dsh-install-step-active");
      }
    }
  }
  /** 依赖阶段：install.autoDep 的 step 文本含依赖名（git/node/pnpm）。 */
  activateByDepName(stepText) {
    const lower = stepText.toLowerCase();
    if (lower.includes("git")) this.activate("git");
    else if (lower.includes("node")) this.activate("node");
    else if (lower.includes("pnpm")) this.activate("pnpm");
  }
};
var UpdatingModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("dsh-install-modal");
    contentEl.createEl("h3", { text: t("up.cliUpdatingTitle") });
    const box = contentEl.createDiv({ cls: "dsh-updating" });
    box.createDiv({ cls: "dsh-spinner" });
    this.statusEl = box.createEl("p", { cls: "dsh-detail", text: t("up.cliUpdating") });
  }
  /** 更新阶段文本（如：已停止服务 / 正在重启服务…）。 */
  setStatus(text) {
    this.statusEl.textContent = text;
  }
  /** 失败：显示错误并停止转圈。 */
  fail(err) {
    var _a;
    this.statusEl.textContent = t("up.cliFail", { err });
    const spinner = (_a = this.statusEl.parentElement) == null ? void 0 : _a.querySelector(".dsh-spinner");
    spinner == null ? void 0 : spinner.addClass("dsh-spinner-fail");
  }
  onClose() {
    this.contentEl.empty();
  }
};

// src/settings.ts
var DEFAULT_SETTINGS = {
  port: 3080,
  startupCommand: "",
  startupCwd: "",
  autoStart: true,
  detached: true,
  readyTimeoutSec: 300,
  zoom: 0.6,
  installDir: "",
  installUrl: DEFAULT_DSH_REPO_URL,
  updateMirrorUrl: "",
  language: "auto",
  autoCheckUpdates: true,
  openPanelOnSend: true,
  bridgeToObsidian: "auto",
  bottomPadPx: 20,
  shortcutPassthrough: true
};
function startupCommandHint() {
  return t("settings.command.hint");
}
var DshSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
    /** 文本/滑杆控件防抖定时器（避免逐键/逐格触发保存与服务重建）。 */
    this.saveTimer = null;
  }
  /** 防抖执行保存+副作用（默认 500ms）；连续输入只触发最后一次。 */
  scheduleSave(effect, ms = 500) {
    if (this.saveTimer !== null) window.clearTimeout(this.saveTimer);
    this.saveTimer = window.setTimeout(() => {
      this.saveTimer = null;
      effect();
    }, ms);
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    const detectedDir = locateDshRepoDir(defaultCandidates(this.plugin.settings.startupCwd));
    if (!this.plugin.settings.installDir && detectedDir) {
      this.plugin.settings.installDir = detectedDir;
      void this.plugin.saveSettings();
    }
    const statusSetting = new import_obsidian2.Setting(containerEl).setName(t("settings.status.title")).setDesc(t("settings.status.reading")).setClass("dsh-bridge-status-row").addButton(
      (b) => b.setButtonText(t("settings.status.check")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("settings.status.checking"));
        await this.plugin.checkUpdates();
        b.setDisabled(false);
        b.setButtonText(t("settings.status.check"));
      })
    );
    statusSetting.descEl.empty();
    const renderStatus = (label) => {
      statusSetting.descEl.createEl("span", { text: label });
      statusSetting.descEl.createEl("span", { text: " \xB7 " });
      const link = statusSetting.descEl.createEl("a", {
        cls: "dsh-changelog-link",
        text: t("settings.status.changelog"),
        href: "#"
      });
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.plugin.openInBrowser(this.plugin.getDshReleasesUrl());
      });
    };
    renderStatus(t("settings.status.reading"));
    void this.plugin.getDshStatus().then((s) => {
      let text;
      if (!s.installed) {
        text = t("settings.status.notInstalled");
      } else if (s.online) {
        text = s.version !== t("up.unknown") ? t("settings.status.installedVer", { v: s.version }) : t("settings.status.installed");
      } else {
        text = t("settings.status.stopped");
      }
      statusSetting.descEl.empty();
      renderStatus(text);
    });
    const pluginVersionSetting = new import_obsidian2.Setting(containerEl).setName(t("settings.pluginVersion.title")).setDesc(t("settings.status.reading")).setClass("dsh-bridge-status-row").addButton(
      (b) => b.setButtonText(t("settings.pluginVersion.check")).onClick(() => {
        void this.plugin.checkPluginUpdates();
      })
    );
    pluginVersionSetting.descEl.empty();
    const renderPluginVersion = () => {
      pluginVersionSetting.descEl.createEl("span", { text: t("settings.pluginVersion.installed", { v: this.plugin.manifest.version }) });
      pluginVersionSetting.descEl.createEl("span", { text: " \xB7 " });
      const link = pluginVersionSetting.descEl.createEl("a", {
        cls: "dsh-changelog-link",
        text: t("settings.pluginVersion.changelog"),
        href: "#"
      });
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.plugin.showPluginChangelog();
      });
      pluginVersionSetting.descEl.createEl("br");
      const repoLink = pluginVersionSetting.descEl.createEl("a", {
        cls: "dsh-changelog-link",
        text: this.plugin.getPluginRepoUrl(),
        href: "#"
      });
      repoLink.addEventListener("click", (e) => {
        e.preventDefault();
        this.plugin.openInBrowser(this.plugin.getPluginRepoUrl());
      });
      pluginVersionSetting.descEl.createEl("span", { text: ` ${t("settings.pluginVersion.repoHint")}` });
    };
    renderPluginVersion();
    new import_obsidian2.Setting(containerEl).setName(t("settings.section.basic")).setHeading();
    new import_obsidian2.Setting(containerEl).setName(t("settings.language.title")).setDesc(t("settings.language.desc")).addDropdown(
      (d) => d.addOption("auto", t("settings.language.auto")).addOption("zh", t("settings.language.zh")).addOption("en", t("settings.language.en")).setValue(this.plugin.settings.language).onChange(async (v) => {
        this.plugin.settings.language = v;
        await this.plugin.saveSettings();
        applyLocale(
          this.plugin.settings.language,
          this.plugin.settings.language === "auto" ? this.plugin.detectSystemLanguage() : void 0
        );
        this.display();
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.install.title")).setDesc(t("settings.install.desc")).setClass("dsh-config-row").addButton(
      (b) => b.setButtonText(t("settings.install.btn")).onClick(async () => {
        b.setDisabled(true);
        const modal = new InstallProgressModal(this.app);
        modal.open();
        const ok = await this.plugin.installWithPathPrompt((step, percent) => modal.update(percent != null ? percent : 0, step));
        if (ok) {
          modal.done();
          window.setTimeout(() => modal.close(), 1500);
        } else {
          modal.fail();
        }
        b.setDisabled(false);
        b.setButtonText(t("settings.install.btn"));
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.detect.title")).setDesc(t("settings.detect.desc")).addButton(
      (b) => b.setButtonText(t("settings.detect.btn")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("settings.detect.progress"));
        await this.plugin.detectAndApplyConfig();
        b.setDisabled(false);
        b.setButtonText(t("settings.detect.btn"));
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.installDir.title")).setDesc(t("settings.installDir.desc")).addText(
      (tEl) => tEl.setValue(this.plugin.settings.installDir).onChange((v) => {
        this.plugin.settings.installDir = v.trim();
        this.scheduleSave(() => void this.plugin.saveSettings());
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.autoUpdate.title")).setDesc(t("settings.autoUpdate.desc")).addToggle(
      (tEl) => tEl.setValue(this.plugin.settings.autoCheckUpdates).onChange(async (v) => {
        this.plugin.settings.autoCheckUpdates = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.zoom.title")).setDesc(t("settings.zoom.desc", { z: this.plugin.settings.zoom.toFixed(2) })).addSlider(
      (s) => s.setLimits(0.5, 2, 0.05).setValue(this.plugin.settings.zoom).onChange((v) => {
        this.plugin.settings.zoom = v;
        this.scheduleSave(() => {
          var _a, _b;
          void this.plugin.saveSettings();
          void ((_b = (_a = this.plugin).refreshView) == null ? void 0 : _b.call(_a));
        });
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.bottomPad.title")).setDesc(t("settings.bottomPad.desc", { px: this.plugin.settings.bottomPadPx })).addSlider(
      (s) => s.setLimits(0, 30, 1).setValue(this.plugin.settings.bottomPadPx).onChange((v) => {
        this.plugin.settings.bottomPadPx = v;
        this.scheduleSave(() => {
          var _a, _b;
          void this.plugin.saveSettings();
          void ((_b = (_a = this.plugin).refreshView) == null ? void 0 : _b.call(_a));
        });
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.section.quick")).setHeading();
    new import_obsidian2.Setting(containerEl).setName(t("settings.reconnect.title")).setDesc(t("settings.reconnect.desc")).addButton(
      (b) => b.setButtonText(t("settings.reconnect.btn")).onClick(async () => {
        b.setDisabled(true);
        await this.plugin.reconnectDsh();
        b.setDisabled(false);
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.bridge.restart.title")).setDesc(t("settings.bridge.restart.desc")).addButton(
      (b) => b.setButtonText(t("settings.bridge.restart.btn")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("settings.bridge.restart.progress"));
        await this.plugin.restartDshService();
        b.setDisabled(false);
        b.setButtonText(t("settings.bridge.restart.btn"));
        void this.plugin.probeBridgeReady().then(() => refreshBridgeStatus());
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.browser.title")).setDesc(t("settings.browser.desc")).addButton(
      (b) => b.setButtonText(t("settings.browser.btn")).onClick(() => {
        this.plugin.openDshInBrowser();
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.aed.title")).setDesc(t("settings.aed.desc")).setClass("dsh-bridge-status-row").addButton(
      (b) => b.setButtonText(t("settings.aed.btn")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("aed.running"));
        const home = this.plugin.aedHomeDir();
        const result = await this.plugin.runAedRecovery(home);
        new import_obsidian2.Notice(result.message, result.ok ? 8e3 : 12e3);
        b.setDisabled(false);
        b.setButtonText(t("settings.aed.btn"));
      })
    ).addButton(
      (b) => b.setButtonText(t("settings.exitSafeMode.btn")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("aed.running"));
        const home = this.plugin.aedHomeDir();
        const result = await this.plugin.runExitSafeMode(home);
        new import_obsidian2.Notice(result.message, result.ok ? 8e3 : 12e3);
        b.setDisabled(false);
        b.setButtonText(t("settings.exitSafeMode.btn"));
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.section.send")).setHeading();
    const bridgeStatus = new import_obsidian2.Setting(containerEl).setName(t("settings.bridge.status.title")).setDesc(t("settings.status.reading")).setClass("dsh-bridge-status-row").addButton(
      (b) => b.setButtonText(t("settings.bridge.rewrite.btn")).onClick(() => {
        const r = writeBridgeFiles();
        if (r.error) {
          new import_obsidian2.Notice(t("settings.bridge.rewrite.fail", { err: r.error }), 8e3);
          return;
        }
        new import_obsidian2.Notice(r.changed ? t("settings.bridge.rewrite.updated") : t("settings.bridge.rewrite.ready"), 6e3);
        refreshBridgeStatus();
      })
    );
    const refreshBridgeStatus = () => {
      const s = this.plugin.getBridgeStatus();
      bridgeStatus.descEl.addClass("dsh-bridge-status");
      bridgeStatus.descEl.textContent = s.installed ? s.ready ? t("settings.bridge.status.installedReady") : t("settings.bridge.status.installedNotReady") : t("settings.bridge.status.notInstalled");
    };
    refreshBridgeStatus();
    void this.plugin.probeBridgeReady().then(() => refreshBridgeStatus());
    new import_obsidian2.Setting(containerEl).setName(t("settings.passthrough.title")).setDesc(t("settings.passthrough.desc")).setClass("dsh-bridge-status-row").addToggle(
      (tEl) => tEl.setValue(this.plugin.settings.shortcutPassthrough).onChange(async (v) => {
        var _a, _b;
        this.plugin.settings.shortcutPassthrough = v;
        await this.plugin.saveSettings();
        void ((_b = (_a = this.plugin).refreshView) == null ? void 0 : _b.call(_a));
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.send.openPanel.title")).setDesc(t("settings.send.openPanel.desc")).addToggle(
      (tEl) => tEl.setValue(this.plugin.settings.openPanelOnSend).onChange(async (v) => {
        this.plugin.settings.openPanelOnSend = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.bridge.toObsidian.title")).setDesc(t("settings.bridge.toObsidian.desc")).setClass("dsh-bridge-mode-row").addDropdown(
      (dd) => dd.addOption("off", t("settings.bridge.toObsidian.off")).addOption("auto", t("settings.bridge.toObsidian.auto")).addOption("rightClick", t("settings.bridge.toObsidian.rightClick")).setValue(this.plugin.settings.bridgeToObsidian).onChange(async (v) => {
        this.plugin.settings.bridgeToObsidian = v;
        await this.plugin.saveSettings();
        this.plugin.syncAutoSendRegistration();
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.section.advanced")).setHeading();
    new import_obsidian2.Setting(containerEl).setName(t("settings.port.title")).setDesc(t("settings.port.desc")).addText(
      (tEl) => tEl.setValue(String(this.plugin.settings.port)).onChange((v) => {
        const n = Number(v);
        if (Number.isInteger(n) && n > 0 && n <= 65535) {
          this.plugin.settings.port = n;
          this.scheduleSave(() => {
            var _a, _b;
            void this.plugin.saveSettings();
            (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
          });
        }
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.command.title")).setDesc(startupCommandHint()).addText(
      (tEl) => tEl.setValue(this.plugin.settings.startupCommand).onChange((v) => {
        this.plugin.settings.startupCommand = v.trim();
        this.scheduleSave(() => {
          var _a, _b;
          void this.plugin.saveSettings();
          (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
        });
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.cwd.title")).setDesc(t("settings.cwd.desc")).addText(
      (tEl) => tEl.setValue(this.plugin.settings.startupCwd).onChange((v) => {
        this.plugin.settings.startupCwd = v.trim();
        this.scheduleSave(() => {
          var _a, _b;
          void this.plugin.saveSettings();
          (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
        });
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.autoStart.title")).setDesc(t("settings.autoStart.desc")).addToggle(
      (tEl) => tEl.setValue(this.plugin.settings.autoStart).onChange(async (v) => {
        var _a, _b;
        this.plugin.settings.autoStart = v;
        await this.plugin.saveSettings();
        (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.detached.title")).setDesc(t("settings.detached.desc")).addToggle(
      (tEl) => tEl.setValue(this.plugin.settings.detached).onChange(async (v) => {
        var _a, _b;
        this.plugin.settings.detached = v;
        await this.plugin.saveSettings();
        (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.readyTimeout.title")).setDesc(t("settings.readyTimeout.desc", { s: this.plugin.settings.readyTimeoutSec })).addSlider(
      (s) => s.setLimits(60, 600, 30).setValue(this.plugin.settings.readyTimeoutSec).onChange((v) => {
        this.plugin.settings.readyTimeoutSec = v;
        this.scheduleSave(() => {
          var _a, _b;
          void this.plugin.saveSettings();
          (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
        });
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.installUrl.title")).setDesc(t("settings.installUrl.desc")).addText(
      (tEl) => tEl.setValue(this.plugin.settings.installUrl).onChange((v) => {
        this.plugin.settings.installUrl = v.trim() || DEFAULT_DSH_REPO_URL;
        this.scheduleSave(() => void this.plugin.saveSettings());
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.updateMirror.title")).setDesc(t("settings.updateMirror.desc")).addText(
      (tEl) => tEl.setValue(this.plugin.settings.updateMirrorUrl).onChange((v) => {
        this.plugin.settings.updateMirrorUrl = v.trim();
        this.scheduleSave(() => void this.plugin.saveSettings());
      })
    );
    new import_obsidian2.Setting(containerEl).setName(t("settings.diag.title")).setHeading();
    new import_obsidian2.Setting(containerEl).setName(t("settings.diag.startup.title")).setDesc(t("settings.diag.startup.desc")).addButton(
      (b) => b.setButtonText(t("settings.diag.refresh")).onClick(() => {
        renderDiag();
      })
    );
    const diagEl = containerEl.createDiv({ cls: "dsh-diag-log" });
    const renderDiag = () => {
      const records = this.plugin.getStartupRecords();
      diagEl.empty();
      if (records.length === 0) {
        diagEl.setText(t("settings.diag.empty"));
        return;
      }
      const lines = [];
      for (const rec of records.slice(-5).reverse()) {
        const when = new Date(rec.ts).toLocaleTimeString();
        const phases = Object.entries(rec.phases).map(([k, v]) => `${k}: ${v}ms`).join(" \xB7 ");
        lines.push(`${when} ${rec.ok ? "\u2713" : "\u2717"} ${phases}${rec.error ? " \u2014 " + rec.error : ""}`);
      }
      diagEl.setText(lines.join("\n"));
    };
    renderDiag();
  }
};

// src/bridge-mode.ts
function migrateBridgeMode(v) {
  if (v === true) return "auto";
  if (v === false) return "off";
  return null;
}

// src/view.ts
var import_obsidian3 = require("obsidian");
var DSH_VIEW_TYPE = "dsh-harness-view";
var MONITOR_INTERVAL_MS = 4e3;
async function copyText(text, successNotice) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      new import_obsidian3.Notice(successNotice != null ? successNotice : t("view.copy.copied"));
      return;
    }
  } catch (e) {
  }
  try {
    const ta = (0, import_obsidian3.createEl)("textarea", { cls: "dsh-clipboard" });
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    new import_obsidian3.Notice(ok ? successNotice != null ? successNotice : t("view.copy.copied") : t("view.copy.failed"));
  } catch (e) {
    new import_obsidian3.Notice(t("view.copy.failed"));
  }
}
function humanize(message) {
  if (message.includes("\u672A\u627E\u5230 DSH \u4ED3\u5E93") || message.includes("DSH repo not found")) {
    return t("hz.notFound");
  }
  if (message.includes("\u65E0\u6CD5\u8FDE\u63A5 GitHub") || message.includes("Cannot reach GitHub")) {
    return t("hz.github");
  }
  if (message.includes("\u8FDB\u7A0B\u5DF2\u9000\u51FA") || message.includes("Process exited")) {
    return t("hz.exited");
  }
  if (message.includes("\u8D85\u65F6") || message.includes("Timed out")) {
    return t("hz.timeout");
  }
  if (message.includes("\u5DF2\u5173\u95ED\u81EA\u52A8\u542F\u52A8") || message.includes("auto-start is off")) {
    return t("hz.noAuto");
  }
  return message;
}
var DshView = class extends import_obsidian3.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    /** 运行期探活定时器：DSH 服务崩溃后自动切到错误视图（显示原因 + 重连）。 */
    this.monitorTimer = null;
    /** 当前渲染的 iframe（供插件发送 postMessage / 校验消息来源）。 */
    this.frame = null;
    /** 可见性监听回调：系统睡眠/失焦恢复后强制重渲染 iframe。 */
    this.onVisibilityChange = null;
  }
  /** 当前 iframe 元素（可能未渲染完成）。 */
  getFrame() {
    return this.frame;
  }
  getViewType() {
    return DSH_VIEW_TYPE;
  }
  getDisplayText() {
    return "DeepSeek Harness";
  }
  getIcon() {
    return "dsh-logo";
  }
  async onOpen() {
    this.addAction("refresh-cw", t("view.action.reconnect"), () => void this.refresh());
    this.addAction("external-link", t("view.action.openBrowser"), () => this.plugin.openDshInBrowser());
    this.onVisibilityChange = () => {
      if (document.visibilityState === "visible" && this.frame === null) {
        void this.refresh();
      }
    };
    document.addEventListener("visibilitychange", this.onVisibilityChange);
    await this.refresh();
  }
  // 新版 obsidian.d.ts（1.13.1）中 View.onClose 为 Promise<void>，须保持返回类型兼容
  onClose() {
    this.stopMonitor();
    if (this.onVisibilityChange !== null) {
      document.removeEventListener("visibilitychange", this.onVisibilityChange);
      this.onVisibilityChange = null;
    }
    return Promise.resolve();
  }
  /** 停止运行期探活定时器。 */
  stopMonitor() {
    if (this.monitorTimer !== null) {
      window.clearInterval(this.monitorTimer);
      this.monitorTimer = null;
    }
  }
  /**
   * 启动运行期探活：面板在线时周期性 TCP 探测。
   * 服务中途崩溃/断开 → 切到「睡着了」视图；定时器保持运行，
   * 服务恢复在线后自动重渲染 iframe（无需手动点「唤醒干活」）。
   */
  startMonitor() {
    this.stopMonitor();
    this.monitorTimer = window.setInterval(() => {
      void this.plugin.service.probe().then((online) => {
        if (online) {
          if (this.frame === null) void this.refresh();
          return;
        }
        if (this.frame !== null) {
          this.renderAsleep(t("view.monitor.disconnected", { msg: this.plugin.service.describeOffline() }));
        }
      });
    }, MONITOR_INTERVAL_MS);
  }
  async refresh() {
    this.stopMonitor();
    this.frame = null;
    this.contentEl.empty();
    this.renderLoading();
    const state = await this.plugin.service.ensureOnline();
    if (state.kind === "online") {
      this.renderFrame();
      return;
    }
    if (!this.plugin.isDshInstalled()) {
      this.renderInstallPrompt();
      return;
    }
    this.renderAsleep(state.kind === "failed" ? state.message : "");
    this.startMonitor();
  }
  renderLoading() {
    this.contentEl.addClass("dsh-view");
    const box = this.contentEl.createDiv({ cls: "dsh-status" });
    box.createDiv({ cls: "dsh-spinner" });
    box.createEl("p", { text: t("view.loading.title") });
    box.createEl("p", { cls: "dsh-detail", text: t("view.loading.detail") });
  }
  renderFrame() {
    this.contentEl.empty();
    this.contentEl.addClass("dsh-view");
    const zoom = this.plugin.settings.zoom;
    const bottomPadPx = this.plugin.settings.bottomPadPx;
    const wrapper = this.contentEl.createDiv({ cls: "dsh-zoom" });
    wrapper.style.width = `calc(100% / ${zoom})`;
    wrapper.style.height = `calc(100% / ${zoom} - ${bottomPadPx / zoom}px)`;
    wrapper.style.transform = `scale(${zoom})`;
    const frame = wrapper.createEl("iframe", { cls: "dsh-frame" });
    frame.src = `http://127.0.0.1:${String(this.plugin.settings.port)}/`;
    frame.setAttribute("allow", "clipboard-read; clipboard-write");
    this.frame = frame;
    this.startMonitor();
  }
  /** 未安装 DSH 时的一键安装引导（含依赖检测与一键安装）。 */
  renderInstallPrompt() {
    this.contentEl.empty();
    this.contentEl.addClass("dsh-view");
    const box = this.contentEl.createDiv({ cls: "dsh-status" });
    box.createEl("h3", { text: t("view.install.title") });
    box.createEl("p", { text: t("view.install.desc") });
    const deps = checkDeps();
    const depBox = box.createDiv({ cls: "dsh-dep" });
    const mark = (ok) => ok ? t("view.install.mark.ok") : t("view.install.mark.missing");
    depBox.createEl("p", { text: `git\uFF1A${mark(deps.git)}` });
    depBox.createEl("p", { text: `Node.js\uFF1A${mark(deps.node)}` });
    depBox.createEl("p", { text: `pnpm\uFF1A${mark(deps.pnpm)}` });
    const btn = box.createEl("button", { cls: "dsh-cta", text: t("view.install.btn") });
    btn.addEventListener("click", () => void this.installAndRefresh(btn));
    if (!deps.git || !deps.node || !deps.pnpm) {
      box.createEl("p", { cls: "dsh-detail", text: t("view.install.depsHint") });
      const miss = box.createDiv({ cls: "dsh-actions" });
      if (!deps.git) {
        const b = miss.createEl("button", { text: t("view.install.git") });
        b.addEventListener("click", () => void this.installDep("git", b));
      }
      if (!deps.node) {
        const b = miss.createEl("button", { text: t("view.install.node") });
        b.addEventListener("click", () => void this.installDep("node", b));
      }
      if (!deps.pnpm) {
        const b = miss.createEl("button", { text: t("view.install.pnpm") });
        b.addEventListener("click", () => void this.installDep("pnpm", b));
      }
    }
  }
  /** 一键安装缺失依赖并刷新依赖状态。 */
  async installDep(dep, btn) {
    var _a;
    btn.setAttribute("disabled", "");
    const orig = (_a = btn.textContent) != null ? _a : "";
    btn.textContent = t("view.install.installing");
    const r = await installDependency(dep);
    btn.removeAttribute("disabled");
    btn.textContent = orig;
    if (r.ok) {
      new import_obsidian3.Notice(t("view.install.done"), 8e3);
      this.renderInstallPrompt();
    } else {
      new import_obsidian3.Notice(r.message, 1e4);
    }
  }
  /** DSH 睡着了（等待重连）界面：插件名 + 状态说明 + 小提示 + 四按钮（唤醒干活 / AED / 问问AI / 更多设置）。 */
  renderAsleep(message) {
    this.contentEl.empty();
    this.contentEl.addClass("dsh-view");
    this.contentEl.removeClass("dsh-lang-zh");
    this.contentEl.removeClass("dsh-lang-en");
    this.contentEl.addClass("dsh-lang-" + getLocale());
    this.frame = null;
    const box = this.contentEl.createDiv({ cls: "dsh-status" });
    const main = box.createDiv({ cls: "dsh-asleep-main" });
    main.createDiv({ cls: "dsh-asleep-dot" });
    main.createEl("h2", { cls: "dsh-asleep-name", text: t("view.asleep.name") });
    main.createEl("p", { cls: "dsh-asleep-status", text: t("view.asleep.status") });
    const primary = main.createDiv({ cls: "dsh-actions dsh-asleep-primary" });
    const wake = primary.createEl("button", { cls: "dsh-cta", text: t("view.asleep.wake") });
    wake.addEventListener("click", () => void this.refresh());
    const secondary = main.createDiv({ cls: "dsh-actions dsh-asleep-secondary" });
    const aed = secondary.createEl("button", { text: t("view.asleep.aed") });
    aed.addEventListener("click", () => void this.runAed(buttonBox));
    const askAi = secondary.createEl("button", { text: t("view.asleep.askAi") });
    askAi.addEventListener("click", () => void this.askAiAboutError(message, ""));
    const more = secondary.createEl("button", { text: t("view.asleep.more") });
    more.addEventListener("click", () => {
      const settingApi = this.app.setting;
      settingApi.open();
      settingApi.openTabById("dsh-harness");
    });
    const buttonBox = main.createDiv({ cls: "dsh-asleep-aedbox" });
    box.createEl("p", { cls: "dsh-detail dsh-asleep-hint", text: t("view.asleep.hint") });
  }
  /** AED for DSH：确认后执行抢救流水线，显示进度。 */
  runAed(container) {
    container.empty();
    const box = container.createDiv({ cls: "dsh-asleep-aed" });
    for (const line of t("view.asleep.aedConfirm").split("\n")) {
      box.createEl("p", { cls: "dsh-detail", text: line });
    }
    const actions = box.createDiv({ cls: "dsh-actions" });
    const cancel = actions.createEl("button", { text: t("view.asleep.aedCancel") });
    cancel.addEventListener("click", () => box.remove());
    const confirm = actions.createEl("button", { cls: "dsh-cta", text: t("view.asleep.aedConfirmBtn") });
    confirm.addEventListener("click", () => {
      box.empty();
      const progress = box.createDiv({ cls: "dsh-progress" });
      const bar = progress.createDiv({ cls: "dsh-progress-bar" });
      const progressText = progress.createDiv({ cls: "dsh-progress-text" });
      const setProgress = (step, percent) => {
        progress.show();
        bar.style.width = `${Math.max(0, Math.min(100, percent != null ? percent : 0))}%`;
        progressText.textContent = step;
      };
      progress.hide();
      setProgress(t("aed.running"), 0);
      const home = this.plugin.aedHomeDir();
      void this.plugin.runAedRecovery(home, setProgress).then((result) => {
        progressText.textContent = result.message;
        if (result.ok) {
          new import_obsidian3.Notice(result.message, 8e3);
        } else {
          new import_obsidian3.Notice(result.message, 12e3);
        }
      });
    });
  }
  async askAiAboutError(message, cmdText) {
    const diag = t("diag.header") + "\n" + t("diag.error") + (message || humanize(message)) + "\n" + t("diag.hint") + humanize(message) + "\n" + t("diag.port") + String(this.plugin.settings.port) + "\n" + t("diag.cwd") + (this.plugin.settings.startupCwd || "\u2014") + "\n" + t("diag.command") + (cmdText.trim() !== "" ? cmdText : "\u2014");
    await copyText(diag, t("notice.askAiCopied"));
    this.plugin.openInBrowser("https://chat.deepseek.com/");
  }
  /** 一键安装：先询问安装路径（用户意向），确认后执行并刷新视图；进度经 InstallProgressModal 弹窗展示。 */
  installAndRefresh(btn) {
    btn.setAttribute("disabled", "");
    btn.textContent = t("view.install.preparing");
    const modal = new InstallProgressModal(this.app);
    modal.open();
    const report = (step, percent) => {
      modal.update(percent != null ? percent : 0, step);
    };
    void this.plugin.installWithPathPrompt(report).then((ok) => {
      btn.removeAttribute("disabled");
      if (ok) {
        modal.done();
        window.setTimeout(() => modal.close(), 1500);
        btn.textContent = t("view.install.starting");
        void this.refresh();
      } else {
        modal.fail();
        btn.textContent = t("view.install.btn");
      }
    });
  }
};

// src/updater.ts
var import_node_child_process4 = require("node:child_process");
var import_node_fs5 = require("node:fs");
var import_node_path5 = require("node:path");
function run2(exec, args, timeoutMs = 3e4) {
  return new Promise((resolve) => {
    exec("git", args, { timeout: timeoutMs, windowsHide: true }, (err, stdout, stderr) => {
      if (err) {
        resolve({ ok: false, out: "", err: String(stderr != null ? stderr : "").trim() });
      } else {
        resolve({ ok: true, out: String(stdout).trim(), err: "" });
      }
    });
  });
}
async function getLocalDshVersion(repoDir, exec = import_node_child_process4.execFile) {
  try {
    const pkgPath = (0, import_node_path5.join)(repoDir, "package.json");
    if ((0, import_node_fs5.existsSync)(pkgPath)) {
      const pkg = JSON.parse((0, import_node_fs5.readFileSync)(pkgPath, "utf8"));
      if (typeof pkg.version === "string" && pkg.version.trim() !== "") {
        return pkg.version.trim();
      }
    }
  } catch (e) {
  }
  const r = await run2(exec, ["-C", repoDir, "rev-parse", "HEAD"]);
  return r.ok && r.out ? r.out.slice(0, 7) : t("up.unknown");
}
function extractTagVersion(line) {
  const m = /refs\/tags\/[^^]*?([0-9]+\.[0-9]+\.[0-9]+[\w.-]*)$/.exec(line);
  return m ? m[1] : null;
}
function parseVersion(v) {
  const m = /^(\d+)\.(\d+)\.(\d+)(?:-(alpha|beta|rc)\.(\d+))?/.exec(v.trim());
  if (!m) return null;
  const pre = m[4] !== void 0 ? { kind: m[4], num: Number(m[5]) } : null;
  return { core: [Number(m[1]), Number(m[2]), Number(m[3])], prerelease: pre };
}
var PRE_ORDER = { alpha: 0, beta: 1, rc: 2, stable: 3 };
function isStableVersion(v) {
  const p = parseVersion(v);
  return p !== null && p.prerelease === null;
}
function compareVersions(a, b) {
  var _a, _b, _c, _d;
  const pa = parseVersion(a);
  const pb = parseVersion(b);
  if (!pa || !pb) return a === b ? 0 : a < b ? -1 : 1;
  for (let i = 0; i < 3; i++) {
    if (pa.core[i] !== pb.core[i]) return pa.core[i] > pb.core[i] ? 1 : -1;
  }
  const ka = PRE_ORDER[(_b = (_a = pa.prerelease) == null ? void 0 : _a.kind) != null ? _b : "stable"];
  const kb = PRE_ORDER[(_d = (_c = pb.prerelease) == null ? void 0 : _c.kind) != null ? _d : "stable"];
  if (ka !== kb) return ka > kb ? 1 : -1;
  if (pa.prerelease === null && pb.prerelease === null) return 0;
  if (pa.prerelease === null) return 1;
  if (pb.prerelease === null) return -1;
  if (pa.prerelease.num !== pb.prerelease.num) return pa.prerelease.num > pb.prerelease.num ? 1 : -1;
  return 0;
}
function maxStableTagVersion(output) {
  let best = null;
  for (const line of output.split("\n")) {
    const v = extractTagVersion(line);
    if (v && isStableVersion(v) && (best === null || compareVersions(v, best) > 0)) best = v;
  }
  return best;
}
function maxPrereleaseTagVersion(output) {
  let best = null;
  for (const line of output.split("\n")) {
    const v = extractTagVersion(line);
    if (v && !isStableVersion(v) && parseVersion(v) !== null && (best === null || compareVersions(v, best) > 0)) best = v;
  }
  return best;
}
async function checkDshUpdates(repoDir, exec = import_node_child_process4.execFile, opts = {}) {
  var _a, _b;
  const pullCommand = `cd "${repoDir}" && git pull`;
  if (!repoDir || !(0, import_node_fs5.existsSync)((0, import_node_path5.join)(repoDir, ".git"))) {
    return {
      state: "error",
      message: t("up.noRepo"),
      pullCommand
    };
  }
  let localVersion = null;
  let localHash = "";
  try {
    const pkgPath = (0, import_node_path5.join)(repoDir, "package.json");
    if ((0, import_node_fs5.existsSync)(pkgPath)) {
      const pkg = JSON.parse((0, import_node_fs5.readFileSync)(pkgPath, "utf8"));
      if (typeof pkg.version === "string" && pkg.version.trim() !== "") localVersion = pkg.version.trim();
    }
  } catch (e) {
  }
  const local = await run2(exec, ["-C", repoDir, "rev-parse", "HEAD"]);
  if (local.ok && local.out) {
    localHash = local.out.trim();
  } else if (!localVersion) {
    return { state: "error", message: t("up.noLocal"), pullCommand };
  }
  let tags = await run2(exec, ["-C", repoDir, "ls-remote", "--tags", "origin"], 45e3);
  let mirrorTried = false;
  if ((!tags.ok || !tags.out) && opts.mirrorUrl) {
    mirrorTried = true;
    tags = await run2(exec, ["-C", repoDir, "ls-remote", "--tags", opts.mirrorUrl], 45e3);
  }
  if (!tags.ok) {
    const err = tags.err || t("err.unknown");
    return {
      state: "error",
      message: t("up.githubFail", { err }) + (mirrorTried ? t("up.mirrorFail", { err }) : ""),
      pullCommand
    };
  }
  const remoteVersion = maxStableTagVersion(tags.out);
  if (remoteVersion === null) {
    const remoteRc = maxPrereleaseTagVersion(tags.out);
    if (remoteRc !== null && localVersion && compareVersions(localVersion, remoteRc) < 0) {
      return {
        state: "behind",
        prerelease: true,
        message: t("up.prereleaseBehind", { local: localVersion, remote: remoteRc }),
        pullCommand
      };
    }
    return {
      state: "up-to-date",
      message: t("up.stableOnly", { v: localVersion != null ? localVersion : localHash }),
      pullCommand
    };
  }
  if (localVersion && remoteVersion) {
    if (compareVersions(localVersion, remoteVersion) >= 0) {
      return { state: "up-to-date", message: t("up.latest", { v: localVersion }), pullCommand };
    }
    return {
      state: "behind",
      message: t("up.behindVer", { local: localVersion, remote: remoteVersion }),
      pullCommand
    };
  }
  let remote = await run2(exec, ["-C", repoDir, "ls-remote", "origin", "HEAD"], 45e3);
  if ((!remote.ok || !remote.out) && opts.mirrorUrl) {
    remote = await run2(exec, ["-C", repoDir, "ls-remote", opts.mirrorUrl, "HEAD"], 45e3);
  }
  if (!remote.ok || !remote.out) {
    const err = remote.err || t("err.unknown");
    return {
      state: "error",
      message: t("up.githubFail", { err }) + (mirrorTried ? t("up.mirrorFail", { err }) : ""),
      pullCommand
    };
  }
  const remoteShort = (_b = (_a = remote.out.split(/\s+/)[0]) == null ? void 0 : _a.slice(0, 7)) != null ? _b : "";
  if (localHash.slice(0, 7) === remoteShort) {
    return { state: "up-to-date", message: t("up.latest", { v: localHash.slice(0, 7) }), pullCommand };
  }
  return {
    state: "behind",
    message: t("up.behind", { local: localHash.slice(0, 7), remote: remoteShort }),
    pullCommand
  };
}
async function pullDshUpdates(repoDir, exec = import_node_child_process4.execFile, opts = {}) {
  let pull = await run2(exec, ["-C", repoDir, "pull", "--ff-only", "--quiet"]);
  let mirrorTried = false;
  if (!pull.ok && opts.mirrorUrl) {
    mirrorTried = true;
    pull = await run2(exec, ["-C", repoDir, "pull", "--ff-only", "--quiet", opts.mirrorUrl]);
  }
  if (pull.ok) {
    return {
      ok: true,
      message: t("up.done", { dir: repoDir })
    };
  }
  const dirty = await localDirtyFiles(repoDir, exec);
  if (dirty.length > 0) {
    const list = dirty.slice(0, 5).join("\u3001") + (dirty.length > 5 ? ` \u7B49 ${dirty.length} \u4E2A\u6587\u4EF6` : "");
    return {
      ok: false,
      message: t("up.dirty", { files: list }) + (mirrorTried ? t("up.mirrorFail", { err: pull.err || t("err.unknown") }) : "")
    };
  }
  const ahead = await countLocalAhead(repoDir, exec);
  const diverged = ahead > 0;
  const err = pull.err || t("err.unknown");
  return {
    ok: false,
    message: (diverged ? t("up.diverged", { count: String(ahead) }) : t("up.fail", { err })) + (mirrorTried ? t("up.mirrorFail", { err }) : "")
  };
}
async function localDirtyFiles(repoDir, exec) {
  const r = await run2(exec, ["-C", repoDir, "status", "--short"], 15e3);
  if (!r.ok || !r.out) return [];
  return r.out.split("\n").map((line) => line.trim().replace(/^[ MADRCU?!]{1,2}\s+/, "")).filter(Boolean).slice(0, 20);
}
async function countLocalAhead(repoDir, exec) {
  const branch = await run2(exec, ["-C", repoDir, "rev-parse", "--abbrev-ref", "HEAD"]);
  if (!branch.ok || !branch.out || branch.out === "HEAD") return 0;
  const upstream = await run2(exec, ["-C", repoDir, "rev-parse", "--abbrev-ref", `${branch.out}@{upstream}`]);
  if (!upstream.ok || !upstream.out) return 0;
  const count = await run2(exec, ["-C", repoDir, "rev-list", "--count", `${upstream.out}..HEAD`]);
  if (!count.ok) return 0;
  const n = Number(count.out.trim());
  return Number.isFinite(n) && n > 0 ? n : 0;
}
var NPM_REGISTRIES = ["https://registry.npmmirror.com", "https://registry.npmjs.org"];
var DSH_GITHUB_URLS = [
  "https://github.com/deepseek-ai/deepseek-harness.git",
  "https://gh-proxy.com/https://github.com/deepseek-ai/deepseek-harness.git"
];
async function probeGithubTagNewer(local, exec = import_node_child_process4.execFile) {
  for (const url of DSH_GITHUB_URLS) {
    const r = await run2(exec, ["ls-remote", "--tags", url], 3e4);
    if (!r.ok || !r.out) continue;
    let best = null;
    for (const line of r.out.split("\n")) {
      const v = extractTagVersion(line);
      if (v && compareVersions(v, local) > 0 && (best === null || compareVersions(v, best) > 0)) best = v;
    }
    if (best !== null) return best;
  }
  return null;
}
function runCmd(exec, command, args, timeoutMs = 3e4) {
  return new Promise((resolve) => {
    const resolved = resolveExec(process.platform, command, args);
    exec(resolved.command, resolved.args, { timeout: timeoutMs, windowsHide: true }, (err, stdout, stderr) => {
      if (err) {
        resolve({ ok: false, out: String(stdout != null ? stdout : "").trim(), err: String(stderr != null ? stderr : "").trim() });
      } else {
        resolve({ ok: true, out: String(stdout != null ? stdout : "").trim(), err: "" });
      }
    });
  });
}
async function getCliDshVersion(exec = import_node_child_process4.execFile) {
  var _a;
  const r = await runCmd(exec, "dsh", ["--version"], 15e3);
  return r.ok ? ((_a = r.out.split(/\r?\n/)[0]) != null ? _a : "").trim() : "";
}
async function getNpmLatest(exec) {
  var _a;
  for (const reg of NPM_REGISTRIES) {
    const r = await runCmd(exec, "npm", ["view", "@deepseek-ai/dsh", "dist-tags.latest", "--registry", reg], 3e4);
    if (r.ok && r.out !== "") {
      return ((_a = r.out.split(/\r?\n/)[0]) != null ? _a : "").trim();
    }
  }
  return "";
}
async function checkCliUpdate(exec = import_node_child_process4.execFile) {
  const pullCommand = "npm i -g @deepseek-ai/dsh@latest";
  const local = await getCliDshVersion(exec);
  if (!local) {
    return { state: "error", message: t("up.noLocal"), pullCommand };
  }
  const remote = await getNpmLatest(exec);
  if (!remote) {
    return { state: "error", message: t("up.githubFail", { err: "npm registry unreachable" }), pullCommand };
  }
  if (compareVersions(local, remote) >= 0) {
    const githubNewer = await probeGithubTagNewer(local, exec);
    const message = githubNewer === null ? t("up.latest", { v: local }) : t("up.latestNpmOnly", { v: local, github: githubNewer });
    return { state: "up-to-date", message, pullCommand };
  }
  return {
    state: "behind",
    prerelease: !isStableVersion(remote),
    message: t("up.behindVer", { local, remote }),
    pullCommand
  };
}
async function pullCliUpdate(exec = import_node_child_process4.execFile) {
  for (const reg of NPM_REGISTRIES) {
    const r = await runCmd(exec, "npm", ["install", "-g", "@deepseek-ai/dsh@latest", "--no-fund", "--no-audit", "--registry", reg], 3e5);
    if (r.ok) {
      return { ok: true, message: t("up.cliDone") };
    }
  }
  return { ok: false, message: t("up.cliFail", { err: "npm install failed" }) };
}
var defaultHttpGet = (url) => new Promise((resolve) => {
  (0, import_node_child_process4.execFile)("curl.exe", ["-L", "-sS", "--max-time", "25", url], { timeout: 3e4, windowsHide: true }, (err, stdout) => {
    if (err) {
      resolve({ ok: false, text: "" });
    } else {
      resolve({ ok: true, text: String(stdout) });
    }
  });
});
function parseLatestTag(json) {
  try {
    const obj = JSON.parse(json);
    return typeof obj.tag_name === "string" && obj.tag_name !== "" ? obj.tag_name : null;
  } catch (e) {
    return null;
  }
}
async function checkPluginUpdate(get = defaultHttpGet, mirrorBase = "https://gh-proxy.com/") {
  const urls = [
    `https://api.github.com/repos/hjxcloud-tech/dsh-harness/releases/latest`,
    `${mirrorBase}https://api.github.com/repos/hjxcloud-tech/dsh-harness/releases/latest`
  ];
  for (const url of urls) {
    const r = await get(url);
    if (r.ok && r.text !== "") {
      const tag = parseLatestTag(r.text);
      if (tag !== null) {
        return { remote: tag.replace(/^v/, ""), reachable: true };
      }
    }
  }
  return { remote: null, reachable: false };
}

// src/aed.ts
var import_node_child_process5 = require("node:child_process");
var import_node_fs6 = require("node:fs");
var import_node_path6 = require("node:path");
var CORE_BUNDLES = /* @__PURE__ */ new Set(["@deepseek-ai/dsh-base", "@deepseek-ai/dsh-web-app"]);
var BUNDLE_DISABLE_MARKER = "# dsh-harness: disabled bundle entry ";
var NPM_MIRROR = "https://registry.npmmirror.com";
function run3(exec, command, args, timeoutMs) {
  const resolved = resolveExec(process.platform, command, args);
  return new Promise((resolve) => {
    exec(resolved.command, resolved.args, { timeout: timeoutMs, windowsHide: true }, (err, stdout, stderr) => {
      if (err) {
        resolve({ ok: false, out: String(stdout != null ? stdout : "").trim(), err: String(stderr != null ? stderr : "").trim() });
      } else {
        resolve({ ok: true, out: String(stdout != null ? stdout : "").trim(), err: "" });
      }
    });
  });
}
function hasBin(name) {
  try {
    const probe = process.platform === "win32" ? "where" : "which";
    (0, import_node_child_process5.execFileSync)(probe, [name], { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}
function isDshFixInstalled() {
  return hasBin("dsh-fix");
}
function webProfileDir2(home) {
  return (0, import_node_path6.join)(home, "profiles", "web");
}
function bundleUserPlugins(home) {
  var _a, _b;
  try {
    const pkgPath = (0, import_node_path6.join)(webProfileDir2(home), "package.json");
    if (!(0, import_node_fs6.existsSync)(pkgPath)) return [];
    const pkg = JSON.parse((0, import_node_fs6.readFileSync)(pkgPath, "utf8"));
    const bundles = (_b = (_a = pkg.dsh) == null ? void 0 : _a.profile) == null ? void 0 : _b.bundles;
    if (!Array.isArray(bundles)) return [];
    return bundles.filter((b) => typeof b === "string" && !CORE_BUNDLES.has(b));
  } catch (e) {
    return [];
  }
}
function appendBundleDisableBlocks(home, plugins) {
  const dir = webProfileDir2(home);
  const patchPath = (0, import_node_path6.join)(dir, "cordis.patch.yml");
  if (!(0, import_node_fs6.existsSync)(patchPath) || plugins.length === 0) return;
  const existing = (0, import_node_fs6.readFileSync)(patchPath, "utf8");
  const missing = plugins.filter((id) => !existing.includes(BUNDLE_DISABLE_MARKER + JSON.stringify(id)));
  if (missing.length === 0) return;
  (0, import_node_fs6.copyFileSync)(patchPath, (0, import_node_path6.join)(dir, `cordis.patch.yml.bak-harness-${Date.now()}`));
  const stamp = (/* @__PURE__ */ new Date()).toISOString();
  const blocks = missing.map((id) => `${BUNDLE_DISABLE_MARKER}${JSON.stringify(id)} at ${stamp}
- id: ${JSON.stringify(id)}
  disabled: true`).join("\n");
  (0, import_node_fs6.writeFileSync)(patchPath, existing.trimEnd() + "\n\n" + blocks + "\n", "utf8");
}
function removeBundleDisableBlocks(home) {
  const patchPath = (0, import_node_path6.join)(webProfileDir2(home), "cordis.patch.yml");
  if (!(0, import_node_fs6.existsSync)(patchPath)) return;
  const lines = (0, import_node_fs6.readFileSync)(patchPath, "utf8").split("\n");
  const kept = [];
  let i = 0;
  while (i < lines.length) {
    if (lines[i].startsWith(BUNDLE_DISABLE_MARKER)) {
      i += 3;
      continue;
    }
    kept.push(lines[i]);
    i++;
  }
  const out = kept.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
  (0, import_node_fs6.writeFileSync)(patchPath, out, "utf8");
}
async function installDshFix(exec = import_node_child_process5.execFile, onStep) {
  const step = onStep != null ? onStep : () => void 0;
  step(t("aed.installFix"), 10);
  let r = await run3(exec, "npm", ["install", "-g", "dsh-fix@latest", "--no-fund", "--no-audit"], 12e4);
  if (!r.ok) {
    step(t("aed.installFixMirror"), 30);
    r = await run3(exec, "npm", ["install", "-g", "dsh-fix@latest", "--registry", NPM_MIRROR, "--no-fund", "--no-audit"], 12e4);
  }
  if (!r.ok) {
    return { ok: false, message: t("aed.installFixFail", { err: r.err || t("err.unknown") }) };
  }
  return { ok: true, message: t("aed.installFixDone") };
}
async function runAedSafe(home, exec = import_node_child_process5.execFile, onStep) {
  const step = onStep != null ? onStep : () => void 0;
  const homeArgs = home ? ["--home", home] : [];
  let useNpx = false;
  step(t("aed.checkFix"), 5);
  const inst = await installDshFix(exec, step);
  if (!inst.ok) {
    useNpx = true;
    step(t("aed.fallbackNpx"), 8);
  }
  step(t("aed.doctor"), 40);
  const doctor = useNpx ? await run3(exec, "npx", ["--yes", "dsh-fix", "doctor", ...homeArgs], 12e4) : await run3(exec, "dsh-fix", ["doctor", ...homeArgs], 6e4);
  step(t("aed.safeMode"), 70);
  const safe = useNpx ? await run3(exec, "npx", ["--yes", "dsh-fix", "safe", ...homeArgs], 12e4) : await run3(exec, "dsh-fix", ["safe", ...homeArgs], 6e4);
  if (!safe.ok) {
    return { ok: false, message: t("aed.safeFail", { err: safe.err || t("err.unknown") }) };
  }
  const bundles = bundleUserPlugins(home);
  if (bundles.length > 0) {
    step(t("aed.disableBundles"), 85);
    try {
      appendBundleDisableBlocks(home, bundles);
    } catch (err) {
      return { ok: false, message: t("aed.disableBundlesFail", { err: err instanceof Error ? err.message : String(err) }) };
    }
  }
  const doctorLine = doctor.ok && doctor.out ? doctor.out.split("\n").slice(0, 3).join(" ") : "";
  const bundleNote = bundles.length > 0 ? t("aed.safeBundles", { list: bundles.join("\u3001") }) : "";
  return {
    ok: true,
    message: t("aed.safeDone", { diag: doctorLine || t("aed.doctorNoDetail") }) + bundleNote
  };
}
async function exitSafeMode(home, exec = import_node_child_process5.execFile, onStep) {
  const step = onStep != null ? onStep : () => void 0;
  const homeArgs = home ? ["--home", home] : [];
  let useNpx = false;
  if (!isDshFixInstalled()) {
    step(t("aed.checkFix"), 10);
    const inst = await installDshFix(exec, step);
    if (!inst.ok) {
      useNpx = true;
      step(t("aed.fallbackNpx"), 15);
    }
  }
  step(t("aed.exitSafeMode"), 60);
  const clear = useNpx ? await run3(exec, "npx", ["--yes", "dsh-fix", "clear", ...homeArgs], 12e4) : await run3(exec, "dsh-fix", ["clear", ...homeArgs], 6e4);
  if (!clear.ok) {
    return { ok: false, message: t("aed.exitSafeFail", { err: clear.err || t("err.unknown") }) };
  }
  try {
    removeBundleDisableBlocks(home);
  } catch (err) {
    return { ok: false, message: t("aed.exitBundleFail", { err: err instanceof Error ? err.message : String(err) }) };
  }
  return { ok: true, message: t("aed.exitSafeDone") };
}
async function aedRecovery(home, exec = import_node_child_process5.execFile, onStep) {
  const step = onStep != null ? onStep : () => void 0;
  const safeRes = await runAedSafe(home, exec, step);
  if (!safeRes.ok) {
    return safeRes;
  }
  step(t("aed.done"), 100);
  return { ok: true, message: safeRes.message };
}

// src/dsh-api.ts
var import_node_http = require("node:http");
var DEFAULT_TIMEOUT_MS = 8e3;
function newRpcId() {
  try {
    const c = window.crypto;
    if (c == null ? void 0 : c.randomUUID) {
      return c.randomUUID();
    }
  } catch (e) {
  }
  return `rpc-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function httpPost(port, path, body) {
  return new Promise((resolve, reject) => {
    const req = (0, import_node_http.request)(
      {
        host: "127.0.0.1",
        port,
        path,
        method: "POST",
        headers: {
          "content-type": "application/json",
          "content-length": Buffer.byteLength(body)
        },
        timeout: DEFAULT_TIMEOUT_MS
      },
      (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          var _a;
          resolve({ status: (_a = res.statusCode) != null ? _a : 0, text: Buffer.concat(chunks).toString("utf8") });
        });
      }
    );
    req.on("timeout", () => {
      req.destroy(new Error(t("api.timeout", { ms: DEFAULT_TIMEOUT_MS })));
    });
    req.on("error", (err) => reject(err instanceof Error ? err : new Error(String(err))));
    req.end(body);
  });
}
var defaultTransport = { post: httpPost };
async function dshRequest(port, method, payload, transport = defaultTransport) {
  var _a, _b, _c, _d;
  const body = JSON.stringify({ type: "client-request", rpcId: newRpcId(), method, payload });
  let res;
  try {
    res = await transport.post(port, `/api/${method}`, body);
  } catch (err) {
    const e = err;
    if ((e == null ? void 0 : e.code) === "ECONNREFUSED") {
      return { ok: false, error: t("api.notRunning", { port }) };
    }
    return { ok: false, error: t("api.connectFail", { err: (_a = e == null ? void 0 : e.message) != null ? _a : String(err) }) };
  }
  if (res.status !== 200) {
    return { ok: false, error: t("api.httpStatus", { code: res.status }) };
  }
  try {
    const parsed = JSON.parse(res.text);
    if (parsed.type !== "server-response" || !parsed.result) {
      return { ok: false, error: t("api.badFormat") };
    }
    if (parsed.result.ok) {
      return { ok: true, value: parsed.result.value };
    }
    return {
      ok: false,
      error: (_c = (_b = parsed.result.error) == null ? void 0 : _b.message) != null ? _c : t("api.rejected"),
      code: (_d = parsed.result.error) == null ? void 0 : _d.code
    };
  } catch (e) {
    return { ok: false, error: t("api.unparsable") };
  }
}
function pickRecentSession(items) {
  var _a;
  const usable = items.find((item) => !item.blank);
  return (_a = usable == null ? void 0 : usable.sessionId) != null ? _a : null;
}
async function resolveTargetSession(port, transport = defaultTransport) {
  const list = await dshRequest(port, "session.list", {}, transport);
  if (!list.ok) {
    return list;
  }
  const existing = pickRecentSession(list.value.items);
  if (existing) {
    return { ok: true, value: existing };
  }
  const created = await dshRequest(port, "session.create", {}, transport);
  if (!created.ok) {
    return created;
  }
  return { ok: true, value: created.value.sessionId };
}
async function sendTextToSession(port, sessionId, text, transport = defaultTransport) {
  return dshRequest(
    port,
    "session.prompt",
    {
      sessionId,
      mode: "queue",
      content: [{ type: "text", text }]
    },
    transport
  );
}

// src/startup-profiler.ts
var import_node_fs7 = require("node:fs");
var import_node_path7 = require("node:path");
var STARTUP_LOG_FILENAME = "dsh-startup-log.json";
var MAX_RECORDS = 20;
var defaultDeps = {
  readFile: (p) => (0, import_node_fs7.existsSync)(p) ? (0, import_node_fs7.readFileSync)(p, "utf8") : null,
  writeFile: (p, c) => {
    (0, import_node_fs7.mkdirSync)((0, import_node_path7.dirname)(p), { recursive: true });
    (0, import_node_fs7.writeFileSync)(p, c, "utf8");
  },
  now: () => Date.now()
};
var StartupProfiler = class {
  constructor(dataDir, deps = defaultDeps) {
    this.marks = [];
    this.dataDir = dataDir;
    this.deps = deps;
  }
  /** 标记一个阶段开始（或完成点）：记录 [name, ts]；同名前缀可多次（如 probe:start / probe:done）。 */
  mark(name) {
    this.marks.push({ name, ts: this.deps.now() });
  }
  /** 提交一次完整记录：把 marks 转成相邻阶段耗时并持久化；清空 marks。 */
  commit(ok, error) {
    const phases = {};
    const sorted = [...this.marks].sort((a, b) => a.ts - b.ts);
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const cur = sorted[i];
      if (cur.name === prev.name) continue;
      const key = `${prev.name}->${cur.name}`;
      phases[key] = cur.ts - prev.ts;
    }
    if (sorted.length > 0) {
      const last = sorted[sorted.length - 1];
      phases[`${last.name}->commit`] = this.deps.now() - last.ts;
    }
    this.append({ ts: this.deps.now(), phases, ok, ...error !== void 0 ? { error } : {} });
    this.marks.length = 0;
  }
  /** 追加记录到文件（截断到 MAX_RECORDS）。 */
  append(record) {
    const path = (0, import_node_path7.join)(this.dataDir, STARTUP_LOG_FILENAME);
    let records = [];
    const existing = this.deps.readFile(path);
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        if (Array.isArray(parsed.records)) records = parsed.records;
      } catch (e) {
      }
    }
    records.push(record);
    if (records.length > MAX_RECORDS) records = records.slice(records.length - MAX_RECORDS);
    this.deps.writeFile(path, JSON.stringify({ records }, null, 2));
  }
  /** 读取最近记录（供设置页诊断区显示）。 */
  readRecords() {
    const path = (0, import_node_path7.join)(this.dataDir, STARTUP_LOG_FILENAME);
    const existing = this.deps.readFile(path);
    if (!existing) return [];
    try {
      const parsed = JSON.parse(existing);
      return Array.isArray(parsed.records) ? parsed.records : [];
    } catch (e) {
      return [];
    }
  }
};

// src/changelog.ts
var import_obsidian4 = require("obsidian");

// src/changelog-data.ts
var PLUGIN_CHANGELOG = [
  {
    version: "2.0.3",
    items: [
      ["\u6865\u63A5\u81EA\u6108\uFF1A\u68C0\u6D4B\u5E76\u6E05\u9664 dsh-fix \u5B89\u5168\u6A21\u5F0F\u6B8B\u7559\u7684\u300C\u7981\u7528 dsh-obsidian-bridge\u300D\u8986\u76D6\u5757\uFF08\u5386\u53F2\u590D\u53D1\u5BFC\u81F4\u6865\u63A5\u9759\u9ED8\u5931\u6548\u3001\u9762\u677F\u65E0\u6CD5\u56DE\u586B\u6587\u5B57\uFF09\uFF0C\u8865\u4E01\u5199\u5165\u6539\u539F\u5B50\u5316\uFF1B\u6062\u590D\u6865\u63A5\u540E\u63D0\u793A\u91CD\u8F7D\u751F\u6548\uFF1B\u8BBE\u7F6E\u9875\u300C\u5B89\u5168\u6A21\u5F0F\u542F\u52A8\u300D\u680F\u79FB\u9664\uFF0C\u300C\u9000\u51FA\u5B89\u5168\u6A21\u5F0F\u300D\u5E76\u5165\u300CAED for DSH\u300D\u680F\uFF1BAED \u62A2\u6551\u603B\u662F\u5B89\u88C5/\u5347\u7EA7 dsh-fix \u5230\u6700\u65B0\uFF08\u5E42\u7B49\uFF09", 'Bridge self-healing: detects and removes leftover dsh-fix safe-mode "disable dsh-obsidian-bridge" override blocks (a recurring silent failure), patch writes are now atomic; prompts to reload after restoring; the "Start in safe mode" row is removed and "Exit safe mode" moved into the "AED for DSH" row; AED always installs/upgrades dsh-fix to the latest (idempotent)']
    ]
  },
  {
    version: "2.0.2",
    items: [
      ["P0 \u5B89\u5168\u4E0E\u7A33\u5B9A\u6027\u4FEE\u590D\u56DE\u5F52\uFF1A\u2460\u7AEF\u53E3\u64CD\u4F5C\u5B89\u5168\u2014\u2014\u91CD\u542F/\u66F4\u65B0/AED \u524D\u6821\u9A8C DSH \u8EAB\u4EFD\uFF08\u4E0D\u518D\u8BEF\u6740\u540C\u540D\u7AEF\u53E3\u524D\u7F00\u7684\u65E0\u5173\u8FDB\u7A0B\uFF09\uFF1B\u2461\u4FEE\u590D\u8DEF\u5F84\u70B9\u51FB\u91CD\u5B9A\u5411\u6807\u7B7E\u8DF3\u8FC7\u5931\u6548\uFF08\u9000\u683C\u5B57\u8282 bug\uFF0C\u542B\u63A7\u5236\u5B57\u7B26\u56DE\u5F52\u6D4B\u8BD5\uFF09\uFF1B\u2462pre-step \u7F16\u8F91\u6307\u4EE4\u5E26\u81EA\u7EC8\u6B62\u53E5\uFF08\u907F\u514D\u4F1A\u8BDD\u7D2F\u79EF\u91CD\u590D\u6267\u884C\uFF09\uFF1B\u2463--no-open \u63A2\u6D4B\u6539\u5F02\u6B65\uFF08\u4E0D\u518D\u51BB\u7ED3\u754C\u9762 8-20s\uFF09\uFF0C\u63A2\u6D4B\u5931\u8D25\u6309\u300C\u652F\u6301\u300D\u5904\u7406\uFF08\u4E0D\u518D\u6F0F\u8865\u5BFC\u81F4\u5F39\u6D4F\u89C8\u5668\uFF09\uFF1B\u2464\u4E00\u952E\u5B89\u88C5 PATH \u7F13\u5B58\u5237\u65B0\uFF08\u5B89\u88C5\u540E\u4E0D\u518D\u8BEF\u62A5\u4F9D\u8D56\u4ECD\u7F3A\u5931\uFF09\uFF1B\u2465\u5168\u5C40 CLI \u66F4\u65B0\u5931\u8D25\u81EA\u52A8\u6062\u590D\u539F\u670D\u52A1\uFF1B\u2466\u8BBE\u7F6E\u9875\u8F93\u5165\u9632\u6296\uFF08\u7AEF\u53E3/\u547D\u4EE4/\u6ED1\u6746\u4E0D\u518D\u9010\u952E\u91CD\u5EFA\u670D\u52A1\uFF09\uFF1B\u2467CI \u589E\u52A0 typecheck\u3001check-review-lint \u6539\u771F\u914D\u5BF9\u626B\u63CF\uFF1B\u2468\u66F4\u65B0\u5931\u8D25\u63D0\u793A\u7EC6\u5316\u2014\u2014git \u66F4\u65B0\u9047\u672C\u5730\u672A\u63D0\u4EA4\u6539\u52A8\u65F6\u5217\u51FA\u51B2\u7A81\u6587\u4EF6\u5E76\u6307\u5F15\u63D0\u4EA4/stash", 'P0 safety & stability fixes restored: \u2460 port-kill safety \u2014 DSH identity is verified before restart/update/AED (no longer kills unrelated prefix-matching port owners); \u2461 fixed the label-skip regex backspace-byte bug (with control-character regression test); \u2462 pre-step edit instructions self-terminate (no repeated execution across turns); \u2463 --no-open probe is async (no more 8-20s UI freeze) and probe failure is treated as supported (no browser popup from a missing flag); \u2464 installer PATH cache refreshes after install (no more false "dependency still missing"); \u2465 failed global-CLI updates restore the previous service; \u2466 Settings inputs are debounced (no per-keystroke service rebuilds); \u2467 CI gains typecheck and a real eslint-disable pairing scan; \u2468 update-failure messaging lists conflicting files and guides commit/stash']
    ]
  },
  {
    version: "2.0.1",
    items: [
      ["\u57FA\u4E8E 1.9.9 \u7A33\u5B9A\u884C\u4E3A\u53D1\u5E03\uFF08\u56DE\u9000 2.0.0 \u7684\u5168\u9762\u6539\u52A8\uFF0C\u6062\u590D\u7A33\u5B9A\u8FD0\u884C\uFF09\uFF1A\u4FDD\u7559\u66F4\u65B0\u68C0\u67E5\u4F18\u5316\uFF08alpha/beta \u9884\u53D1\u5E03\u8BC6\u522B\u3001npm \u901A\u9053\u300C\u5DF2\u662F\u6700\u65B0\u300D\u8BF4\u660E\u4E0E GitHub \u9884\u89C8\u62AB\u9732\uFF09\u3001\u4E0B\u62C9\u5782\u76F4\u5C45\u4E2D\u3001\u91CD\u542F\u680F\u4F4D\u8C03\u6574\uFF1B\u79FB\u9664 2.0.0 \u5F15\u5165\u7684\u4E0D\u7A33\u5B9A\u6539\u52A8", 'Released on the stable 1.9.9 behavior (2.0.0-wide changes rolled back for stability): keeps the update-check polish (alpha/beta treated as prereleases, npm-only "up to date" notice with GitHub prerelease disclosure), centered dropdown and reordered restart row; removes the unstable 2.0.0 changes']
    ]
  },
  {
    version: "1.9.9",
    items: [
      ["\u66F4\u65B0\u68C0\u67E5\u4F18\u5316\uFF1A\u2460\u7248\u672C\u5224\u5B9A\u4FEE\u6B63\u2014\u2014alpha/beta \u8BC6\u522B\u4E3A\u9884\u53D1\u5E03\uFF08\u4E0D\u518D\u8BEF\u5F53\u6B63\u5F0F\u7248\u63D0\u793A\uFF09\uFF1B\u2461\u300C\u5DF2\u662F\u6700\u65B0\u300D\u63D0\u793A\u660E\u786E\u68C0\u6D4B\u8303\u56F4\u4EC5 npm \u5B98\u65B9\u63A8\u9001\u7684\u5168\u5C40 CLI \u7248\u672C\uFF0C\u82E5 GitHub \u53E6\u6709\u672A\u53D1\u5E03\u5230 npm \u7684\u9884\u89C8\uFF08\u5982 0.1.2-alpha.1\uFF09\u4F1A\u4E00\u5E76\u544A\u77E5\uFF0C\u907F\u514D\u8BEF\u4EE5\u4E3A\u6F0F\u68C0\uFF1B\u2462\u8BBE\u7F6E\u9875\u300CDSH \u804A\u5929\u6846\u6865\u63A5\u5230 Obsidian\u300D\u4E0B\u62C9\u6846\u5782\u76F4\u5C45\u4E2D\uFF1B\u2463\u5FEB\u6377\u64CD\u4F5C\u533A\u300C\u91CD\u542F DSH \u670D\u52A1\u300D\u79FB\u5230\u300C\u91CD\u8FDE\u670D\u52A1\u300D\u4E0B\u65B9", 'Update check improvements: \u2460 version semantics fixed \u2014 alpha/beta are treated as prereleases (no longer mislabeled as stable); \u2461 the "up to date" notice now states it only checks the npm-published global CLI version, and tells you when GitHub has a newer prerelease not yet published to npm (e.g. 0.1.2-alpha.1), so it never looks like a missed update; \u2462 the "DSH chat \u2192 Obsidian" dropdown is vertically centered in Settings; \u2463 "Restart DSH service" moved right below "Reconnect" in the Quick Actions section']
    ]
  },
  {
    version: "1.9.8",
    items: [
      ["\u81EA\u52A8\u6CE8\u5165\u4E0D\u8986\u76D6\u804A\u5929\u6846\u5DF2\u8F93\u5165\u5185\u5BB9\uFF1A\u9690\u5F0F\u4FE1\u606F\u884C\u6539\u4E3A\u5728\u4F60\u7684\u8F93\u5165\u4E4B\u4E0A\u751F\u6210\u3001\u6362\u884C\u540E\u4FDD\u7559\u4F60\u5DF2\u8F93\u5165\u7684\u6587\u5B57\uFF08\u591A\u6B21\u6846\u9009\u53EA\u4FDD\u7559\u6700\u65B0\u9690\u5F0F\u884C\uFF1B\u53D6\u6D88\u6846\u9009\u4EC5\u6E05\u9664\u9690\u5F0F\u884C\u3001\u4FDD\u7559\u4F60\u7684\u8F93\u5165\uFF09", "Auto-inject no longer overwrites what you already typed in the chat: the implicit line is placed above your text and your input is kept after a line break (repeated selections keep only the latest line; deselecting clears only the implicit line, keeping your input)"]
    ]
  },
  {
    version: "1.9.7",
    items: [
      ["\u4FEE\u590D\u7126\u70B9\u62A2\u5360\uFF1A\u6CE8\u5165\u9690\u5F0F\u4FE1\u606F\u884C\u540E\u4E0D\u518D\u628A\u7126\u70B9\u79FB\u5165 DSH \u804A\u5929\u6846\u2014\u2014\u6846\u9009\u6587\u5B57\u540E\u6309 Backspace \u7B49\u952E\u76D8\u64CD\u4F5C\u4ECD\u4F5C\u7528\u4E8E Obsidian \u6587\u6863\uFF0C\u4E0D\u518D\u8BEF\u5220\u804A\u5929\u6846\u5185\u5BB9", "Fix focus stealing: filling the implicit line no longer moves focus into the DSH chat, so keyboard actions (e.g. Backspace) after selecting text still act on the Obsidian note instead of the chat box"],
      ["\u4FEE\u590D\u91CD\u542F\u670D\u52A1\u81EA\u52A8\u62C9\u8D77\u6D4F\u89C8\u5668\uFF1A\u542F\u52A8\u547D\u4EE4\u81EA\u52A8\u8865\u9F50 --no-open\uFF08\u5F53\u524D DSH \u652F\u6301\u65F6\uFF09\uFF0C\u542F\u52A8/\u91CD\u542F\u4E0D\u518D\u5F39\u51FA\u6D4F\u89C8\u5668\u7A97\u53E3", "Fix browser auto-open on restart: --no-open is auto-added to the startup command (when supported by the current DSH), so starting/restarting no longer pops up the browser"]
    ]
  },
  {
    version: "1.9.6",
    items: [
      ["\u6865\u63A5\u63D0\u901F\u4E0E\u9ED8\u8BA4\u7F16\u8F91\uFF1A\u2460\u7F16\u8F91\u6307\u4EE4\u6539\u4E3A\u6865\u63A5\u63D2\u4EF6 pre-step \u94A9\u5B50\u9690\u85CF\u6CE8\u5165\uFF08\u4E0D\u5360\u7528\u804A\u5929\u6846\uFF09\uFF1A\u6536\u5230\u9690\u5F0F\u4FE1\u606F\u884C\u540E\uFF0CDSH \u5148\u8BFB\u53D6\u539F\u6587\uFF0C\u6309\u4F60\u7684\u8981\u6C42\u53EA\u8F93\u51FA\u4E00\u6BB5\u7ED3\u679C\uFF0C\u5E76\u8BE2\u95EE\u662F\u5426\u540C\u610F\u5199\u5165\uFF0C\u540C\u610F\u540E\u624D\u7528\u7F16\u8F91\u5DE5\u5177\u4FEE\u6539\u6587\u4EF6\uFF1B\u2461\u586B\u5165\u7ED3\u679C\u4EE5 ACK \u786E\u8BA4\uFF08\u6D88\u9664\u300C\u5DF2\u586B\u5165\u300D\u5047\u8C61\uFF0C\u6700\u957F\u7B49\u5F85\u7531 4s \u964D\u81F3 ~3s\uFF09\uFF1B\u2462\u9762\u677F\u5DF2\u5F00\u4E14\u6865\u63A5\u5C31\u7EEA\u65F6\u8DF3\u8FC7\u91CD\u590D\u63A2\u6D4B\u76F4\u63A5\u6CE8\u5165\uFF1B\u2463\u6865\u63A5\u91CD\u5EFA\u5931\u8D25 30s \u51B7\u5374\u3001\u53BB\u6296 300\u2192150ms\u3001\u6253\u5F00\u9762\u677F\u526F\u4F5C\u7528\u8282\u6D41\uFF1B\u2464\u4FEE\u590D\u8BBE\u7F6E\u9875\u300CDSH \u804A\u5929\u6846\u6865\u63A5\u5230 Obsidian\u300D\u4E0B\u62C9\u4E0D\u663E\u793A\u9ED8\u8BA4\u503C\uFF08\u65E7\u5E03\u5C14\u8BBE\u7F6E\u81EA\u52A8\u8FC1\u79FB\uFF1A\u5F00\u2192\u81EA\u52A8\u53D1\u9001\uFF0C\u5173\u2192\u53D6\u6D88\uFF09", 'Bridge speed-up & default editing: \u2460 the edit instruction is now injected by a bridge pre-step hook (never shown in the chat UI): on receiving the implicit line, DSH reads the region, outputs only the result (one paragraph), asks whether you agree, and writes the file with the edit tool only after consent; \u2461 fills are confirmed by ACK (removes the false "filled" notice; worst-case wait 4s\u2192~3s); \u2462 hot path skips redundant probe/openView when the panel is ready; \u2463 reload cooldown (30s), debounce 300\u2192150ms, openView side-effect throttling; \u2464 fixed the "DSH chat \u2192 Obsidian" dropdown showing no default value (legacy boolean setting auto-migrates: true\u2192Auto-send, false\u2192Off)']
    ]
  },
  {
    version: "1.9.5",
    items: [
      ["\u6865\u63A5\u4F4D\u7F6E\u589E\u5F3A\uFF1A\u6846\u9009\u6587\u5B57\u6539\u4E3A\u81EA\u52A8\u6CE8\u5165\u9690\u5F0F\u4FE1\u606F\u884C\uFF08\u542B\u7CBE\u786E\u884C:\u5217\u4E0E\u5B57\u6570\uFF0C\u4E0D\u542B\u539F\u6587\uFF09\uFF0CDSH \u53EF\u6309\u300C\u8DEF\u5F84 + \u884C:\u5217\u300D\u8BFB\u53D6\u6587\u4EF6\u5B9A\u4F4D\u5E76\u4FEE\u6539\u975E\u6574\u884C\u9009\u533A\uFF1B\u300CDSH \u804A\u5929\u6846\u6865\u63A5\u5230 Obsidian\u300D\u6539\u4E3A\u4E09\u9009\u9879\uFF08\u53D6\u6D88/\u81EA\u52A8\u53D1\u9001/\u53F3\u952E\u53D1\u9001\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u53D1\u9001\uFF09\uFF1B\u5220\u9664\u300C\u9644\u5E26\u6765\u6E90\u6807\u7B7E\u300D\u8BBE\u7F6E\u9879\uFF1B\u9762\u677F\u672A\u6253\u5F00\u65F6\u4E0D\u6CE8\u518C\u81EA\u52A8\u53D1\u9001\u76D1\u542C\uFF1B\u53D6\u6D88\u6846\u9009\u81EA\u52A8\u6E05\u9664\u804A\u5929\u6846\u4E2D\u7684\u9690\u5F0F\u884C", 'Bridge location enhancement: selecting text now auto-injects an implicit info line (exact line:col + word count, no original text) so DSH can read the file and locate/edit non-full-line selections; "DSH chat \u2192 Obsidian" is now a 3-option dropdown (Off/Auto-send/Right-click send, default Auto-send); removed the "Attach source tag" setting; auto-send listeners are not registered while the panel is closed; deselecting auto-clears the implicit line in the chat']
    ]
  },
  {
    version: "1.9.4",
    items: [
      ["\u6865\u63A5\u8BBE\u7F6E\u5B8C\u5584\uFF1A\u65B0\u589E\u300CDSH \u804A\u5929\u6846\u6865\u63A5\u5230 Obsidian\u300D\u5F00\u5173\uFF1B\u6865\u63A5\u72B6\u6001\u663E\u793A\u5DF2\u52A0\u8F7D\u4E14\u751F\u6548\uFF08\u542B\u529F\u80FD\u5217\u8868\uFF09\uFF1B\u9762\u677F\u663E\u793A\u79FB\u56DE\u57FA\u7840\u8BBE\u7F6E", 'Bridge settings improved: new "DSH chat \u2192 Obsidian" switch; bridge status shows loaded & working (with feature list); panel display moved back to Basic Setup']
    ]
  },
  {
    version: "1.9.3",
    items: [
      ["\u4FEE\u590D\u9519\u8BEF\u94FE\u63A5", "Fix incorrect links"]
    ]
  },
  {
    version: "1.9.2",
    items: [
      ["\u300C\u68C0\u67E5\u63D2\u4EF6\u66F4\u65B0\u300D\u6539\u4E3A\u6253\u5F00 Obsidian \u5B98\u65B9\u5546\u5E97\u9875\uFF1B\u8BBE\u7F6E\u9875\u300C\u4E00\u952E\u914D\u7F6E DSH\u300D\u6309\u94AE\u5782\u76F4\u5C45\u4E2D", '"Check plugin updates" now opens the official Obsidian store page; the "Configure DSH" button in Settings is vertically centered']
    ]
  },
  {
    version: "1.9.1",
    items: [
      ["\u4FEE\u590D\u6865\u63A5 bug\uFF1A\u89E3\u51B3\u53D1\u9001\u6587\u5B57\u5230 DSH \u804A\u5929\u6846\u5931\u6548\u3001\u6846\u9009\u6D6E\u6846\u6B8B\u7559\u3001\u542F\u52A8\u6253\u70B9\u8DEF\u5F84\u7B49\u95EE\u9898", "Fix bridge bugs: sending text to the DSH chat no longer fails; removed the leftover selection floating button; fixed the startup-log path issue"]
    ]
  },
  {
    version: "1.9.0",
    items: [
      ["\u5FEB\u6377\u952E\u900F\u4F20\uFF1A\u5149\u6807\u805A\u7126\u5728 DSH \u9762\u677F\u5185\u65F6\uFF0CObsidian \u5168\u5C40\u5FEB\u6377\u952E\u4ECD\u53EF\u54CD\u5E94\uFF08\u81EA\u52A8\u8BFB\u53D6\u4F60\u7684\u5FEB\u6377\u952E\u8BBE\u7F6E\uFF09", "Pass through shortcuts: Obsidian global shortcuts still work while focus is inside the DSH panel (auto-reads your hotkey settings)"],
      ["DSH \u6216\u63D2\u4EF6\u66F4\u65B0\u540E\u81EA\u52A8\u91CD\u5199\u6865\u63A5\uFF0C\u4FDD\u6301\u517C\u5BB9", "Bridge is rewritten automatically after DSH or plugin updates"],
      ["\u5E95\u90E8\u57AB\u9AD8\u8BBE\u7F6E\uFF1AObsidian \u72B6\u6001\u680F\u906E\u6321\u9762\u677F\u5E95\u90E8\u65F6\uFF0C\u53EF\u8C03 0\u201330px \u7559\u767D\uFF08\u9ED8\u8BA4 20\uFF09", "Bottom padding setting: adjust 0\u201330px space when the Obsidian status bar covers the panel bottom (default 20)"],
      ["\u8BBE\u7F6E\u9875\u8C03\u6574\uFF1ADSH \u72B6\u6001\u680F\u6574\u5408\u66F4\u65B0\u65E5\u5FD7\u4E0E\u68C0\u67E5\u66F4\u65B0\uFF1B\u65B0\u589E\u63D2\u4EF6\u7248\u672C\u884C", "Settings reorganized: DSH status bar now hosts changelog + check updates; new plugin version row"]
    ]
  },
  {
    version: "1.8.7",
    items: [
      ["\u955C\u50CF\u6E90\u4FEE\u590D\uFF1AGit for Windows \u955C\u50CF\u6309\u5B8C\u6574\u7248\u672C\u6392\u5E8F\u5E76\u56DE\u9000\u53EF\u7528\u76EE\u5F55", "Mirror fix: Git for Windows mirror sorts by full version and falls back to available directories"]
    ]
  },
  {
    version: "1.8.6",
    items: [
      ["git-for-windows \u955C\u50CF\u6392\u5E8F\u4FEE\u590D\uFF08windows.N \u53C2\u4E0E\u7248\u672C\u6BD4\u8F83\uFF09", "git-for-windows mirror sorting fix (windows.N now participates in version comparison)"]
    ]
  },
  {
    version: "1.8.5",
    items: [
      ["\u8BBE\u7F6E\u9875\u300C\u91CD\u8FDE\u670D\u52A1\u300D\u6309\u94AE\u6587\u6848\u6539\u4E3A\u300C\u5237\u65B0\u300D", 'Reconnect button renamed to "Refresh" in Settings']
    ]
  }
];

// src/changelog.ts
var PluginChangelogModal = class extends import_obsidian4.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("dsh-changelog-modal");
    this.setTitle(t("pluginChangelog.title"));
    const wrap = contentEl.createDiv({ cls: "dsh-changelog-list" });
    const isZh = t("pluginChangelog.locale") === "zh";
    for (const entry of PLUGIN_CHANGELOG) {
      const ver = wrap.createDiv({ cls: "dsh-changelog-ver" });
      ver.createEl("h4", { text: `v${entry.version}` });
      const list = ver.createEl("ul");
      for (const item of entry.items) {
        list.createEl("li", { text: isZh ? item[0] : item[1] });
      }
    }
  }
  onClose() {
    this.contentEl.empty();
  }
};

// src/source-tag.ts
function buildBridgeMessage(filePath, pos, wordCount) {
  const loc = `${formatLineCol(pos.fromLine, pos.fromCh)}-${formatLineCol(pos.toLine, pos.toCh)}`;
  return `[ BRIDGES is delivering packages for you\u2026\u2026 \xB7 ${wordCount} words \xB7 ${loc} \xB7 ${filePath} \xB7 ]`;
}
function formatLineCol(line, ch) {
  return `L${line + 1}:${ch + 1}`;
}
function countWords(text) {
  var _a, _b;
  if (text === "") return 0;
  const tokens = (_a = text.match(/\S+/g)) != null ? _a : [];
  let count = 0;
  for (const tok of tokens) {
    const cjk = (_b = tok.match(/[\u3000-\u9fff\uf900-\ufaff]/g)) != null ? _b : [];
    count += cjk.length > 0 ? cjk.length : 1;
  }
  return count;
}

// src/icon.ts
var DSH_LOGO_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path transform="translate(1.5726 2.9422) scale(0.7805)" d="M26.5174 3.39471C26.235 3.2567 26.1137 3.52006 25.9487 3.65346C25.8923 3.69659 25.8446 3.75294 25.7969 3.80469C25.3846 4.24516 24.9027 4.53439 24.2737 4.49989C23.3536 4.44814 22.5682 4.73737 21.8735 5.44119C21.7258 4.57349 21.2353 4.0554 20.4889 3.72304C20.0985 3.55054 19.7034 3.37746 19.4297 3.00197C19.2388 2.73459 19.1865 2.43673 19.091 2.14289C19.0301 1.96579 18.9697 1.78466 18.7656 1.75418C18.5442 1.71968 18.4574 1.90541 18.3705 2.06067C18.0232 2.69549 17.8887 3.39471 17.9019 4.10313C17.9324 5.6965 18.6051 6.96556 19.9421 7.86834C20.0939 7.97184 20.133 8.07535 20.0852 8.22658C19.9938 8.53766 19.8857 8.83955 19.7903 9.15063C19.7293 9.34901 19.6384 9.39271 19.4257 9.30588C18.692 8.9994 18.0583 8.54571 17.4982 7.99772C16.5477 7.07827 15.6881 6.06336 14.6162 5.26869C14.3644 5.08296 14.1125 4.91045 13.8521 4.746C12.7584 3.68394 13.9952 2.81164 14.2816 2.70814C14.5812 2.60003 14.3857 2.22857 13.4179 2.23317C12.4502 2.2372 11.5646 2.56151 10.4359 2.99335C10.2708 3.05832 10.0972 3.10547 9.91951 3.14457C8.8954 2.95022 7.83162 2.90709 6.72069 3.03245C4.62877 3.26533 2.95777 4.25436 1.72954 5.94261C0.254043 7.97184 -0.0932678 10.2777 0.33167 12.6824C0.778458 15.2171 2.07225 17.3153 4.06008 18.9558C6.12152 20.6567 8.49577 21.4905 11.2047 21.3306C12.8498 21.2358 14.6812 21.0155 16.7473 19.2669C17.2682 19.5262 17.8151 19.6297 18.7219 19.7074C19.4205 19.7723 20.0933 19.6729 20.6143 19.5648C21.4302 19.3923 21.3739 18.6367 21.0789 18.4981C18.6874 17.3843 19.2124 17.8374 18.7351 17.4706C19.9501 16.033 21.8063 13.4776 22.379 9.99821C22.4353 9.61409 22.5072 9.073 22.4986 8.76192C22.494 8.57216 22.5377 8.49856 22.7545 8.47671C23.3536 8.40771 23.935 8.24383 24.4692 7.94999C26.0188 7.10357 26.6439 5.71318 26.7911 4.04678C26.8129 3.79204 26.7865 3.52869 26.5174 3.39471ZM13.0143 18.3946C10.6964 16.5724 9.5722 15.9726 9.10816 15.9985C8.67402 16.0244 8.75222 16.5212 8.84768 16.8449C8.94773 17.1646 9.07768 17.3849 9.25996 17.6655C9.38589 17.8512 9.47272 18.1272 9.13404 18.3348C8.38766 18.7965 7.08985 18.1796 7.0289 18.1491C5.51833 17.2595 4.25559 16.0853 3.36546 14.4793C2.50581 12.9337 2.0067 11.2753 1.92447 9.50542C1.90262 9.07818 2.02855 8.92695 2.45406 8.84932C3.01413 8.74582 3.59144 8.72397 4.15093 8.80619C6.51656 9.15178 8.53027 10.2092 10.2185 11.8848C11.1822 12.8388 11.9114 13.979 12.6623 15.0929C13.461 16.2757 14.3201 17.4027 15.4144 18.3268C15.8008 18.6505 16.109 18.8966 16.404 19.0783C15.5144 19.1778 14.0297 19.1991 13.0143 18.3958V18.3946ZM14.1252 11.2489C14.1252 11.0591 14.277 10.9079 14.4679 10.9079C14.511 10.9079 14.5501 10.9165 14.5852 10.9292C14.6329 10.9464 14.6766 10.9723 14.7111 11.0114C14.7721 11.0718 14.8066 11.158 14.8066 11.2489C14.8066 11.4386 14.6548 11.5899 14.4639 11.5899C14.273 11.5899 14.1252 11.4386 14.1252 11.2489ZM17.5759 13.0188C17.3545 13.1096 17.1331 13.1873 16.9203 13.1959C16.5903 13.2131 16.2303 13.0791 16.0348 12.9153C15.7312 12.6605 15.5139 12.5179 15.423 12.0734C15.3839 11.8837 15.4057 11.5899 15.4402 11.4214C15.5185 11.0585 15.4316 10.8257 15.1757 10.614C14.9676 10.4415 14.7025 10.3938 14.4115 10.3938C14.3029 10.3938 14.2034 10.3461 14.1292 10.3076C14.0079 10.2472 13.9078 10.096 14.0033 9.91023C14.0338 9.84985 14.1815 9.70322 14.216 9.67734C14.6111 9.45251 15.0665 9.52612 15.488 9.6946C15.8784 9.85445 16.174 10.1477 16.5989 10.5623C17.033 11.0631 17.1112 11.2011 17.3585 11.5772C17.554 11.871 17.7317 12.1729 17.8536 12.5185C17.9272 12.7341 17.8317 12.9107 17.5759 13.0188Z"/></svg>';

// src/main.ts
var ConfirmModal = class extends import_obsidian5.Modal {
  constructor(app, opts) {
    super(app);
    this.opts = opts;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h3", { text: this.opts.title });
    contentEl.createEl("p", { text: this.opts.body });
    const s = new import_obsidian5.Setting(contentEl);
    s.addButton((b) => b.setButtonText(t("modal.cancel")).onClick(() => this.close()));
    if (this.opts.viewLink) {
      s.addButton(
        (b) => b.setButtonText(this.opts.viewLink.text).onClick(() => void window.open(this.opts.viewLink.url, "_blank"))
      );
    }
    s.addButton((b) => b.setButtonText(this.opts.confirmText).setCta().onClick(async () => {
      this.close();
      await this.opts.onConfirm();
    }));
  }
  onClose() {
    this.contentEl.empty();
  }
};
var InstallPathModal = class extends import_obsidian5.Modal {
  constructor(app, opts) {
    super(app);
    this.opts = opts;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h3", { text: this.opts.title });
    contentEl.createEl("p", { text: t("modal.installDesc") });
    const input = contentEl.createEl("input", { type: "text", value: this.opts.defaultPath, cls: "dsh-path-input" });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.close();
        this.opts.onConfirm(input.value);
      }
    });
    new import_obsidian5.Setting(contentEl).addButton(
      (b) => b.setButtonText(t("modal.cancel")).onClick(() => {
        this.close();
        this.opts.onCancel();
      })
    ).addButton(
      (b) => b.setButtonText(t("modal.installStart")).setCta().onClick(() => {
        this.close();
        this.opts.onConfirm(input.value);
      })
    );
  }
  onClose() {
    this.contentEl.empty();
  }
};
var DshHarnessPlugin = class extends import_obsidian5.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
    /** DSH 前端桥接是否已就绪（注入脚本回报 ready 后置真）。 */
    this.bridgeReady = false;
    /** bridgeReady 对应的 iframe（面板重建后旧缓存失效，避免向无桥接的 frame 静默丢消息）。 */
    this.bridgeReadyFrame = null;
    /** 「DSH 聊天框桥接到 Obsidian」= auto 时，document 级选区监听是否已注册。 */
    this.autoSendRegistered = false;
    /** 自动注入去抖定时器。 */
    this.autoSendTimer = null;
    /** 最近一次选区是否已由自动注入填充（空选区时据此清除聊天框，只保留最新）。 */
    this.lastAutoInjected = false;
    /** dsh-fill-ack 等待器（fill 成功回传后 resolve；超时 resolve false）。 */
    this.fillAckResolvers = [];
    /** 桥接重建失败冷却截止（ms）：期间不再重复整页重建，避免每次发送都等 ~3s。 */
    this.bridgeReloadCooldownUntil = 0;
    /** openView 副作用节流（启动打点 / 更新检查不每次打开都跑）。 */
    this.lastProfilerCommit = 0;
    this.lastUpdateCheck = 0;
    /** 启动耗时打点器（onload → 探测 → 启动 → 就绪；写入插件数据目录）。 */
    this.profiler = null;
    /** 选区事件（去抖 150ms）：有选区自动注入隐式行；新选区替换旧内容；空选区清除。 */
    this.onDocSelection = () => {
      if (this.autoSendTimer !== null) {
        window.clearTimeout(this.autoSendTimer);
      }
      this.autoSendTimer = window.setTimeout(() => {
        this.autoSendTimer = null;
        this.autoSendNow();
      }, 150);
    };
  }
  async onload() {
    var _a;
    this.profiler = new StartupProfiler((_a = this.manifest.dir) != null ? _a : ".");
    this.profiler.mark("onload");
    await this.loadSettings();
    applyLocale(this.settings.language, this.settings.language === "auto" ? this.detectSystemLanguage() : void 0);
    this.buildService();
    this.profiler.mark("settings-ready");
    (0, import_obsidian5.addIcon)("dsh-logo", DSH_LOGO_SVG);
    this.registerView(DSH_VIEW_TYPE, (leaf) => new DshView(leaf, this));
    this.addRibbonIcon("dsh-logo", t("cmd.ribbon"), () => void this.openView());
    this.addCommand({
      id: "open-dsh",
      name: t("cmd.openPanel"),
      callback: () => void this.openView()
    });
    this.addCommand({
      id: "send-selection-to-dsh",
      name: t("cmd.sendSelection"),
      editorCallback: (editor) => void this.sendSelectionToDsh(editor)
    });
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor) => {
        menu.addItem(
          (item) => item.setTitle(t("menu.sendSelection")).setIcon("send").onClick(() => void this.sendSelectionToDsh(editor))
        );
      })
    );
    this.registerDomEvent(window, "message", (event) => {
      var _a2;
      const frame = this.currentFrame();
      if (!frame || event.source !== frame.contentWindow) {
        return;
      }
      const data = (_a2 = event.data) != null ? _a2 : {};
      if (data.type === "dsh-bridge-ready") {
        this.bridgeReady = true;
        this.bridgeReadyFrame = frame;
        this.postToFrame(frame, { type: "dsh-open-cfg", vaultRoot: this.vaultRoot() });
        this.postToFrame(frame, { type: "dsh-kbd-cfg", keys: this.passthroughKeys() });
        this.syncAutoSendRegistration();
      }
      if (data.type === "dsh-fill-ack") {
        const resolvers = this.fillAckResolvers;
        this.fillAckResolvers = [];
        for (const resolve of resolvers) resolve();
      }
      if (data.type === "dsh-open-in-obsidian" && typeof data.path === "string" && data.path !== "") {
        if (this.settings.bridgeToObsidian !== "off") {
          this.openInBrowser(`obsidian://open?path=${encodeURIComponent(data.path)}`);
        }
      }
      if (data.type === "dsh-kbd-shortcut" && typeof data.key === "string") {
        this.executePassthroughShortcut(data.key);
      }
      if (data.type === "dsh-kbd-request") {
        this.postToFrame(frame, { type: "dsh-kbd-cfg", keys: this.passthroughKeys() });
      }
    });
    this.addSettingTab(new DshSettingTab(this.app, this));
    void this.installBridge();
    this.ensureNoOpenAdaptive();
    this.syncAutoSendRegistration();
  }
  /** 写入桥接文件；变更时提示需重启 DSH 服务生效。 */
  installBridge() {
    const result = writeBridgeFiles();
    if (result.error) {
      console.warn("[dsh-harness] \u6865\u63A5\u5B89\u88C5\u5931\u8D25:", result.error);
      return;
    }
    if (result.changed || result.pluginRewritten) {
      new import_obsidian5.Notice(t("notice.bridgeInstalled"), 1e4);
    }
  }
  /**
   * DSH 或插件更新后自动重写桥接文件：确保磁盘桥接代码与插件当前源码一致
   * （DSH 新版本可能改变注入机制；writeBridgeFiles 内置内容哈希保险，内容一致时不重写、幂等）。
   * 若桥接已安装但内容有变，提示重启 DSH 服务生效。
   */
  rewriteBridgeAfterUpdate() {
    if (!isBridgeInstalled()) return;
    const result = writeBridgeFiles();
    if (result.error) {
      console.warn("[dsh-harness] \u66F4\u65B0\u540E\u6865\u63A5\u91CD\u5199\u5931\u8D25:", result.error);
      return;
    }
    if (result.changed || result.pluginRewritten) {
      new import_obsidian5.Notice(t("notice.bridgeRewritten"), 1e4);
    }
  }
  /** 依据当前设置构造 ServiceManager。 */
  buildService() {
    var _a, _b, _c;
    const basePath = (_c = (_b = (_a = this.app.vault.adapter).getBasePath) == null ? void 0 : _b.call(_a)) != null ? _c : "";
    const startupCommand = this.settings.startupCommand || detectStartupCommand() || "pnpm dsh web --port {port}";
    const startupCwd = this.settings.startupCwd || basePath;
    this.service = new DshServiceManager({
      port: this.settings.port,
      startupCommand,
      startupCwd,
      autoStart: this.settings.autoStart,
      detached: this.settings.detached,
      readyTimeoutMs: this.settings.readyTimeoutSec * 1e3
    });
  }
  /**
   * DSH 版本自适应（后台、非阻塞）：`dsh web --help` 实测约 8 秒，放到定时器里异步执行。
   * 双向处理 `--no-open`：
   * - 当前 dsh 支持（rc.7+）且启动命令缺 flag → 自动补上（避免启动/重启服务时自动拉起浏览器）；
   * - 不支持且命令含 flag → 自动移除并保存（避免 unknown option 启动失败）。
   * 探测结果在 service-manager 内缓存，后续 `dshSupportsNoOpen()` 直接命中缓存、零开销。
   */
  ensureNoOpenAdaptive() {
    window.setTimeout(() => {
      probeNoOpenSupportAsync((supported) => {
        const next = applyNoOpenAdaptive(this.settings.startupCommand || "", supported);
        if (next === null) return;
        this.settings.startupCommand = next;
        void this.saveSettings();
        new import_obsidian5.Notice(supported ? t("notice.noOpenAdded") : t("notice.noOpenRemoved"), 8e3);
      });
    }, 500);
  }
  /** 设置变更后重建 ServiceManager，使新配置立即生效。 */
  reconfigureService() {
    var _a;
    (_a = this.service) == null ? void 0 : _a.dispose();
    this.buildService();
  }
  onunload() {
    var _a;
    this.unregisterAutoSend();
    (_a = this.service) == null ? void 0 : _a.dispose();
  }
  async openView() {
    var _a, _b;
    const existing = this.app.workspace.getLeavesOfType(DSH_VIEW_TYPE);
    if (existing.length > 0) {
      await this.app.workspace.revealLeaf(existing[0]);
    } else {
      const leaf = this.app.workspace.getRightLeaf(false);
      if (!leaf) return;
      await leaf.setViewState({ type: DSH_VIEW_TYPE, active: true });
      await this.app.workspace.revealLeaf(leaf);
    }
    (_a = this.profiler) == null ? void 0 : _a.mark("panel-ready");
    const now = Date.now();
    if (now - this.lastProfilerCommit > 1e4) {
      this.lastProfilerCommit = now;
      (_b = this.profiler) == null ? void 0 : _b.commit(true);
    }
    const frame = this.currentFrame();
    if (frame) {
      this.postToFrame(frame, { type: "dsh-kbd-cfg", keys: this.passthroughKeys() });
    }
    this.syncAutoSendRegistration();
    if (now - this.lastUpdateCheck > 6e4) {
      this.lastUpdateCheck = now;
      void this.checkUpdatesOnOpen();
    }
  }
  /** 刷新已打开的面板视图（用于设置变更后重载界面）。 */
  async refreshView() {
    for (const leaf of this.app.workspace.getLeavesOfType(DSH_VIEW_TYPE)) {
      const view = leaf.view;
      if (view instanceof DshView) {
        await view.refresh();
      }
    }
  }
  /** 一键检测本机 DSH 并应用启动配置。 */
  async detectAndApplyConfig() {
    const result = detectDshConfig({ cwd: this.settings.startupCwd });
    if (result.found) {
      this.settings.startupCommand = result.startupCommand;
      this.settings.startupCwd = result.startupCwd;
      await this.saveSettings();
      this.reconfigureService();
      new import_obsidian5.Notice(result.message);
    } else {
      new import_obsidian5.Notice(result.message, 8e3);
    }
  }
  /** 用系统默认浏览器打开任意 URL（electron shell.openExternal，失败降级新标签页）。 */
  openInBrowser(url) {
    try {
      const requireFn = window.require;
      if (requireFn) {
        const electron = requireFn("electron");
        if (electron.shell) {
          void electron.shell.openExternal(url);
          return;
        }
      }
    } catch (e) {
    }
    window.open(url, "_blank");
  }
  /** 在系统默认浏览器中打开 DSH Web GUI。 */
  openDshInBrowser() {
    this.openInBrowser(`http://127.0.0.1:${String(this.settings.port)}/`);
  }
  /** 重连 DSH 服务：刷新所有已打开面板（重新探活并渲染）。 */
  async reconnectDsh() {
    await this.refreshView();
    const online = this.isDshInstalled() ? await this.service.probe() : false;
    new import_obsidian5.Notice(online ? t("notice.reconnected") : t("notice.notRunning"), 6e3);
  }
  // ---- 框选文字发送到 DSH（Claudian 式交互：选中 → 发送 → 智能体自动处理；隐式桥接注入，不发送原文）----
  /**
   * 把选中文字送进 DSH：生成桥接隐式信息行（位置/字数/路径，不显示原文）注入聊天框；
   * 桥接未就绪时降级为直接发送隐式行。
   * @param editor - 当前编辑器（提供选区位置）
   */
  async sendSelectionToDsh(editor) {
    if (this.settings.bridgeToObsidian === "off") {
      new import_obsidian5.Notice(t("notice.bridgeOff"), 6e3);
      return;
    }
    const raw = (editor ? editor.getSelection() : "").trim();
    if (raw === "") {
      new import_obsidian5.Notice(t("notice.selectFirst"));
      return;
    }
    const message = this.bridgeSendText(editor);
    if (message === "") {
      new import_obsidian5.Notice(t("notice.sendNoFile"), 6e3);
      return;
    }
    const hotFrame = this.hotReadyFrame();
    if (hotFrame) {
      await this.fillDraftAndNotify(hotFrame, message);
      return;
    }
    const online = await this.service.probe();
    if (!online) {
      new import_obsidian5.Notice(t("notice.startingPanel"), 6e3);
      await this.openView();
      const deadline = Date.now() + 8e3;
      while (Date.now() < deadline) {
        if (await this.service.probe()) break;
        await new Promise((resolve) => window.setTimeout(resolve, 1e3));
      }
      if (!await this.service.probe()) {
        new import_obsidian5.Notice(t("notice.notRunning"), 6e3);
        return;
      }
    }
    await this.openView();
    const frame = this.currentFrame();
    if (frame && await this.ensureBridgeReady(frame)) {
      await this.fillDraftAndNotify(frame, message);
      return;
    }
    if (isBridgeInstalled() && await this.reloadPanelAndWaitForBridge()) {
      const frame2 = this.currentFrame();
      if (frame2) {
        await this.fillDraftAndNotify(frame2, message);
        return;
      }
    }
    const target = await resolveTargetSession(this.settings.port);
    if (!target.ok) {
      new import_obsidian5.Notice(t("notice.sendFailed", { err: target.error }), 8e3);
      return;
    }
    const sent = await sendTextToSession(this.settings.port, target.value, message);
    if (!sent.ok) {
      new import_obsidian5.Notice(t("notice.sendFailed", { err: sent.error }), 8e3);
      return;
    }
    new import_obsidian5.Notice(t("notice.bridgeFallback"), 8e3);
    if (this.settings.openPanelOnSend) {
      await this.openView();
    }
  }
  /** 桥接已就绪且 frame 未变（热路径）时返回该 frame，否则 null。 */
  hotReadyFrame() {
    const frame = this.currentFrame();
    if (!frame || !this.bridgeReady || this.bridgeReadyFrame !== frame) return null;
    return frame;
  }
  /** 向面板注入隐式行并等待 ACK：确认填入成功才提示「已填入」，否则提示页面仍在加载。 */
  async fillDraftAndNotify(frame, text) {
    this.postToFrame(frame, { type: "dsh-fill-draft", text });
    this.lastAutoInjected = true;
    const acked = await this.waitFillAck(1500);
    new import_obsidian5.Notice(acked ? t("notice.filled") : t("notice.fillPending"), 6e3);
  }
  /** 等待注入脚本回传 dsh-fill-ack（fill 成功后），超时返回 false。 */
  waitFillAck(timeoutMs) {
    return new Promise((resolve) => {
      let timer = 0;
      const done = () => {
        window.clearTimeout(timer);
        resolve(true);
      };
      timer = window.setTimeout(() => {
        this.fillAckResolvers = this.fillAckResolvers.filter((r) => r !== done);
        resolve(false);
      }, timeoutMs);
      this.fillAckResolvers.push(done);
    });
  }
  /** 由编辑器选区生成注入文本（仅隐式信息行；编辑指令由桥接插件的 pre-step 钩子隐藏注入，不占用聊天框）。 */
  bridgeSendText(editor) {
    return this.bridgeMessageFor(editor);
  }
  /** 由编辑器选区生成桥接隐式信息行（路径 + 精确行:列 + 字数）；无选区/无活动文件时返回空。 */
  bridgeMessageFor(editor) {
    var _a, _b, _c;
    try {
      if (!editor || !editor.somethingSelected()) {
        return "";
      }
      const from = editor.getCursor("from");
      const to = editor.getCursor("to");
      const selected = editor.getSelection();
      const file = this.app.workspace.getActiveFile();
      if (!file) return "";
      const base = (_c = (_b = (_a = this.app.vault.adapter).getBasePath) == null ? void 0 : _b.call(_a)) != null ? _c : "";
      const full = base === "" ? file.path : (0, import_node_path8.join)(base, file.path);
      return buildBridgeMessage(full, { fromLine: from.line, fromCh: from.ch, toLine: to.line, toCh: to.ch }, countWords(selected));
    } catch (e) {
      return "";
    }
  }
  /**
   * 同步「自动发送」选区监听注册：仅当「DSH 聊天框桥接到 Obsidian」= auto 且
   * DSH 面板已打开（iframe 存在）时注册 document 级选区监听（设计：面板未开不注册）。
   * 在设置变更、面板打开、桥接就绪时调用。
   */
  syncAutoSendRegistration() {
    const want = this.settings.bridgeToObsidian === "auto" && this.currentFrame() !== null;
    if (want === this.autoSendRegistered) return;
    if (want) {
      document.addEventListener("mouseup", this.onDocSelection);
      document.addEventListener("keyup", this.onDocSelection);
      document.addEventListener("selectionchange", this.onDocSelection);
      this.autoSendRegistered = true;
    } else {
      this.unregisterAutoSend();
    }
  }
  /** 无条件移除选区监听（onunload / 模式切换时调用）。 */
  unregisterAutoSend() {
    if (!this.autoSendRegistered) return;
    document.removeEventListener("mouseup", this.onDocSelection);
    document.removeEventListener("keyup", this.onDocSelection);
    document.removeEventListener("selectionchange", this.onDocSelection);
    this.autoSendRegistered = false;
    if (this.autoSendTimer !== null) {
      window.clearTimeout(this.autoSendTimer);
      this.autoSendTimer = null;
    }
  }
  /** 自动发送实际注入（仅 Markdown 编辑器；桥接未就绪/面板已关时跳过）。 */
  autoSendNow() {
    var _a;
    const frame = this.currentFrame();
    if (!frame || !this.bridgeReady || this.settings.bridgeToObsidian !== "auto") {
      return;
    }
    const editor = (_a = this.app.workspace.getActiveViewOfType(import_obsidian5.MarkdownView)) == null ? void 0 : _a.editor;
    if (!editor) return;
    if (!editor.somethingSelected()) {
      if (this.lastAutoInjected) {
        this.postToFrame(frame, { type: "dsh-fill-draft", text: "" });
        this.lastAutoInjected = false;
      }
      return;
    }
    const message = this.bridgeSendText(editor);
    if (message === "") return;
    this.postToFrame(frame, { type: "dsh-fill-draft", text: message });
    this.lastAutoInjected = true;
  }
  /** 当前 DSH 面板的 iframe（若面板打开且已渲染）。 */
  currentFrame() {
    for (const leaf of this.app.workspace.getLeavesOfType(DSH_VIEW_TYPE)) {
      const view = leaf.view;
      if (view instanceof DshView) {
        const frame = view.getFrame();
        if (frame) {
          return frame;
        }
      }
    }
    return null;
  }
  /** 向面板 iframe 发送消息（限定 targetOrigin 为本机 DSH 端口）。 */
  postToFrame(frame, payload) {
    const win = frame.contentWindow;
    if (!win) {
      return;
    }
    try {
      win.postMessage(payload, `http://127.0.0.1:${String(this.settings.port)}`);
    } catch (e) {
    }
  }
  /** 等待桥接就绪：先 ping，收到 ready 或超时返回（ready 状态与 frame 身份绑定，面板重建后自动失效）。 */
  async ensureBridgeReady(frame, timeoutMs = 1500) {
    if (this.bridgeReady && this.bridgeReadyFrame === frame) {
      return true;
    }
    this.bridgeReady = false;
    this.bridgeReadyFrame = null;
    this.postToFrame(frame, { type: "dsh-bridge-ping" });
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline && !this.bridgeReady) {
      await new Promise((resolve) => window.setTimeout(resolve, 100));
    }
    return this.bridgeReady && this.bridgeReadyFrame === frame;
  }
  /** 桥接未就绪时重建面板 iframe（加载带桥接脚本的新页面）并轮询等待握手就绪。 */
  async reloadPanelAndWaitForBridge(totalMs = 3e3) {
    if (Date.now() < this.bridgeReloadCooldownUntil) {
      return false;
    }
    await this.refreshView();
    const deadline = Date.now() + totalMs;
    while (Date.now() < deadline) {
      const frame = this.currentFrame();
      if (frame && await this.ensureBridgeReady(frame, 600)) {
        return true;
      }
      await new Promise((resolve) => window.setTimeout(resolve, 200));
    }
    this.bridgeReloadCooldownUntil = Date.now() + 3e4;
    return false;
  }
  /** 桥接状态摘要（设置页展示用）。 */
  getBridgeStatus() {
    return {
      installed: isBridgeInstalled(),
      ready: this.bridgeReady
    };
  }
  /** 主动探测桥接是否已加载（设置页展示用）：向面板发 ping 并短暂等待 ready。 */
  async probeBridgeReady() {
    const frame = this.currentFrame();
    if (!frame) {
      return false;
    }
    return this.ensureBridgeReady(frame, 800);
  }
  /** DSH 主目录（传给 AED 工具的 $DSH_HOME 定位）。 */
  aedHomeDir() {
    var _a;
    return ((_a = process.env.DSH_HOME) != null ? _a : "").trim() || (0, import_node_path8.join)((0, import_node_os5.homedir)(), ".dsh");
  }
  /** 仅以安全模式启动（dsh-fix safe）；成功后重启 DSH。 */
  async runAedSafe(home) {
    var _a;
    const result = await runAedSafe(home);
    if (result.ok) {
      new import_obsidian5.Notice(t("notice.restarting"), 6e3);
      this.killPortProcess();
      (_a = this.service) == null ? void 0 : _a.dispose();
      this.buildService();
      const state = await this.service.ensureOnline();
      await this.refreshView();
      if (state.kind === "online") {
        return { ok: true, message: result.message + " " + t("notice.restarted") };
      }
      return { ok: false, message: result.message + " " + t("notice.restartFailed", { msg: state.message }) };
    }
    return result;
  }
  /** 退出安全模式（dsh-fix clear 恢复用户插件），成功后重启 DSH。 */
  async runExitSafeMode(home) {
    var _a;
    const result = await exitSafeMode(home);
    if (result.ok) {
      new import_obsidian5.Notice(t("notice.restarting"), 6e3);
      this.killPortProcess();
      (_a = this.service) == null ? void 0 : _a.dispose();
      this.buildService();
      const state = await this.service.ensureOnline();
      await this.refreshView();
      if (state.kind === "online") {
        return { ok: true, message: result.message + " " + t("notice.restarted") };
      }
      return { ok: false, message: result.message + " " + t("notice.restartFailed", { msg: state.message }) };
    }
    return result;
  }
  /** 执行 AED 抢救流水线（dsh-fix 安全模式），成功后重启 DSH。 */
  async runAedRecovery(home, onStep) {
    var _a;
    const result = await aedRecovery(home, void 0, onStep);
    if (result.ok) {
      new import_obsidian5.Notice(t("notice.restarting"), 6e3);
      this.killPortProcess();
      (_a = this.service) == null ? void 0 : _a.dispose();
      this.buildService();
      const state = await this.service.ensureOnline();
      await this.refreshView();
      if (state.kind === "online") {
        return { ok: true, message: result.message + " " + t("notice.restarted") };
      }
      return { ok: false, message: result.message + " " + t("notice.restartFailed", { msg: state.message }) };
    }
    return result;
  }
  /** 重启 DSH 服务（结束占用端口的进程——含常驻进程——后重新启动），用于加载桥接补丁。 */
  async restartDshService() {
    var _a;
    new import_obsidian5.Notice(t("notice.restarting"), 6e3);
    this.killPortProcess();
    (_a = this.service) == null ? void 0 : _a.dispose();
    this.buildService();
    const state = await this.service.ensureOnline();
    new import_obsidian5.Notice(
      state.kind === "online" ? t("notice.restarted") : t("notice.restartFailed", { msg: state.message }),
      state.kind === "online" ? 6e3 : 1e4
    );
  }
  /** 结束监听 DSH 端口的进程（复用 service-manager 的安全实现：精确端口匹配 + DSH 身份校验，避免误杀无关进程）。 */
  killPortProcess() {
    killPortOwner(this.settings.port);
  }
  /** 一键安装 DSH 本体到指定目录并自动配置启动项；onStep 回调安装进度（step + 可选 percent）；返回是否成功。 */
  async installAndConfigure(dir, onStep) {
    new import_obsidian5.Notice(t("notice.installing"));
    const r = await installDsh(dir, {
      cloneUrl: this.settings.installUrl || DEFAULT_DSH_REPO_URL,
      onStep
    });
    if (r.ok && r.dir) {
      this.settings.installDir = r.dir;
      this.settings.startupCwd = r.dir;
      this.settings.startupCommand = "pnpm dsh web --port {port}";
      await this.saveSettings();
      this.reconfigureService();
      new import_obsidian5.Notice(r.message, 8e3);
      return true;
    }
    new import_obsidian5.Notice(r.message, 1e4);
    return false;
  }
  /** 一键安装：已检测到 DSH 仓库时跳过路径询问，直接复用并补齐依赖/CLI；否则询问用户意向的安装路径后执行。 */
  async installWithPathPrompt(onStep) {
    const detected = locateDshRepoDir(defaultCandidates(this.settings.startupCwd));
    if (detected) {
      const ok = await this.installAndConfigure(detected, onStep);
      return ok;
    }
    const def = this.settings.installDir || detected || (0, import_node_path8.join)((0, import_node_os5.homedir)(), "deepseek-harness");
    return new Promise((resolve) => {
      new InstallPathModal(this.app, {
        title: t("modal.installTitle"),
        defaultPath: def,
        onConfirm: (dir) => {
          const d = dir.trim();
          if (!d) {
            new import_obsidian5.Notice(t("notice.installDirEmpty"), 6e3);
            resolve(false);
            return;
          }
          this.settings.installDir = d;
          void this.saveSettings().then(() => {
            void this.installAndConfigure(d, onStep).then(resolve);
          });
        },
        onCancel: () => resolve(false)
      }).open();
    });
  }
  /** DSH 是否已安装（PATH 有 dsh 或检测到仓库目录）。 */
  isDshInstalled() {
    if (detectStartupCommand()) {
      return true;
    }
    const candidates = defaultCandidates(this.settings.startupCwd, (0, import_node_os5.homedir)());
    return locateDshRepoDir(candidates) !== null;
  }
  /** DSH 状态摘要（设置页横幅/面板提示用）。 */
  async getDshStatus() {
    const installed = this.isDshInstalled();
    const online = installed ? await this.service.probe() : false;
    const version = installed ? await this.getDshVersion() : t("up.unknown");
    return { installed, version, online };
  }
  /** 读取当前 DSH 版本：全局 CLI 形态显示 `dsh --version`（实际运行版本），仓库形态显示仓库版本。 */
  async getDshVersion() {
    var _a;
    if (this.startupUsesGlobalCli()) {
      const v = await getCliDshVersion();
      return v !== "" ? v : t("up.unknown");
    }
    const candidates = defaultCandidates(this.settings.startupCwd, (0, import_node_os5.homedir)());
    const dir = (_a = locateDshRepoDir(candidates)) != null ? _a : this.settings.startupCwd;
    if (!dir) return t("up.unknown");
    return getLocalDshVersion(dir);
  }
  /** 检查 DSH 更新（按启动形态：全局 CLI 走 npm，仓库走 git）；发现新版本时询问用户是否更新。 */
  async checkUpdates() {
    const result = this.startupUsesGlobalCli() ? await checkCliUpdate() : await this.checkRepoUpdate();
    if (result && result.state === "behind") {
      this.askUpdate(result);
    } else if (result) {
      new import_obsidian5.Notice(result.message, 8e3);
    }
  }
  /** 打开面板/启动服务时自动检测更新：仅当设置开启且发现新版本才弹窗提示（保持静默，避免每次打开都打扰）。 */
  async checkUpdatesOnOpen() {
    if (!this.settings.autoCheckUpdates) return;
    if (!this.isDshInstalled()) return;
    const result = this.startupUsesGlobalCli() ? await checkCliUpdate() : await this.checkRepoUpdate();
    if (result && result.state === "behind") {
      this.askUpdate(result);
    }
  }
  /** 仓库形态的更新检查（无仓库目录时返回 null）。 */
  async checkRepoUpdate() {
    const dir = this.resolveRepoDir();
    if (!dir) return null;
    return checkDshUpdates(dir, void 0, { mirrorUrl: this.updateMirrorUrl() });
  }
  /** 启动形态对应的检查目标目录（仓库形态用）。 */
  resolveRepoDir() {
    var _a;
    const candidates = defaultCandidates(this.settings.startupCwd, (0, import_node_os5.homedir)());
    return (_a = locateDshRepoDir(candidates)) != null ? _a : this.settings.startupCwd;
  }
  /** 弹出确认对话框；确认后按启动形态执行更新（全局 CLI → npm i -g；仓库 → git pull --ff-only）。 */
  askUpdate(info) {
    const isPrerelease = info.prerelease === true;
    new ConfirmModal(this.app, {
      title: isPrerelease ? t("modal.updatePrereleaseTitle") : t("modal.updateTitle"),
      body: isPrerelease ? t("modal.updatePrereleaseBody", { msg: info.message }) : t("modal.updateBody", { msg: info.message }),
      confirmText: t("modal.updateConfirm"),
      viewLink: { text: t("modal.updateViewChanges"), url: this.getDshReleasesUrl() },
      onConfirm: async () => {
        new import_obsidian5.Notice(t("notice.updating"), 6e3);
        const r = this.startupUsesGlobalCli() ? await this.updateGlobalCli() : await pullDshUpdates(this.resolveRepoDir(), void 0, { mirrorUrl: this.updateMirrorUrl() });
        if (r.ok) {
          this.rewriteBridgeAfterUpdate();
        }
        const hint = r.ok && this.startupUsesGlobalCli() ? " " + t("up.repoOnlyHint") : "";
        new import_obsidian5.Notice(r.message + hint, r.ok ? 6e3 : 1e4);
      }
    }).open();
  }
  /**
   * 更新全局 CLI（带状态弹窗）：先停止 DSH 服务释放文件锁（koffi.node 被运行进程占用会导致 npm EBUSY），
   * 再 npm i -g @deepseek-ai/dsh@latest（npmmirror 优先），成功后重启服务。
   */
  async updateGlobalCli() {
    var _a;
    const modal = new UpdatingModal(this.app);
    modal.open();
    try {
      this.killPortProcess();
      (_a = this.service) == null ? void 0 : _a.dispose();
      this.buildService();
      const r = await pullCliUpdate();
      if (!r.ok) {
        modal.fail(r.message);
        const state2 = await this.service.ensureOnline();
        const recovered = state2.kind === "online";
        return {
          ok: false,
          message: recovered ? `${r.message}\uFF08\u5DF2\u6062\u590D\u539F\u670D\u52A1\uFF09` : `${r.message} ${t("notice.restartFailed", { msg: state2.message })}`
        };
      }
      modal.setStatus(t("up.cliRestarting"));
      const state = await this.service.ensureOnline();
      modal.close();
      if (state.kind === "online") {
        return { ok: true, message: r.message };
      }
      return { ok: false, message: r.message + " " + t("notice.restartFailed", { msg: state.message }) };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      modal.fail(msg);
      void this.service.ensureOnline();
      return { ok: false, message: msg };
    }
  }
  /** 启动命令是否走全局 CLI（而非仓库 pnpm/npm 源码）：决定「仓库更新 ≠ 运行版本更新」提示。 */
  startupUsesGlobalCli() {
    const cmd = (this.settings.startupCommand || detectStartupCommand()).trim().toLowerCase();
    return cmd.startsWith("dsh");
  }
  /** DSH GitHub releases 页面地址（供「查看更新内容/更新日志」使用）。 */
  getDshReleasesUrl() {
    const base = this.settings.installUrl || DEFAULT_DSH_REPO_URL;
    return base.replace(/\.git$/, "") + "/releases";
  }
  /** 插件自身 GitHub releases 页面地址（插件更新日志）。 */
  getPluginReleasesUrl() {
    return `https://github.com/hjxcloud-tech/dsh-harness/releases`;
  }
  /** 插件 GitHub 主页地址（使用反馈欢迎留言）。 */
  getPluginRepoUrl() {
    return `https://github.com/hjxcloud-tech/dsh-harness`;
  }
  /** 插件在 Obsidian 官方商店的页面地址（检查更新/查看最新版本用）。 */
  getPluginStoreUrl() {
    return `https://community.obsidian.md/plugins/dsh-harness`;
  }
  /** 检查插件自身更新：查插件 GitHub Release 最新版本，与本地比较——已最新弹提示；有新版弹确认框，确认后打开 Obsidian 商店页（应用内更新入口在 Obsidian 设置 → 第三方插件）。 */
  async checkPluginUpdates() {
    var _a;
    const { remote, reachable } = await checkPluginUpdate();
    if (!reachable || remote === null) {
      new import_obsidian5.Notice(t("pluginUpdate.checkFail"), 8e3);
      return;
    }
    const local = (_a = this.manifest.version) != null ? _a : "";
    if (compareVersions(local, remote) >= 0) {
      new import_obsidian5.Notice(t("pluginUpdate.latest", { v: local }), 6e3);
      return;
    }
    new ConfirmModal(this.app, {
      title: t("pluginUpdate.updateTitle"),
      body: t("pluginUpdate.updateBody", { local, remote }),
      confirmText: t("pluginUpdate.goStore"),
      onConfirm: () => {
        this.openInBrowser(this.getPluginStoreUrl());
        new import_obsidian5.Notice(t("pluginUpdate.storeHint"), 8e3);
      }
    }).open();
  }
  /** 展示插件更新日志（内置弹窗，不跳转 GitHub）。 */
  showPluginChangelog() {
    new PluginChangelogModal(this.app).open();
  }
  /**
   * 读取 Obsidian 快捷键配置（对应设置页「选项 → 快捷键」），合并三个数据源：
   * ① commands.listCommands() 的 command.hotkeys（自定义快捷键，commandId 可用）
   * ② hotkeyManager.getDefaultHotkeys()（内置默认快捷键表，如 Ctrl+; → properties 命令）
   * ③ hotkeyManager.getHotkeys()（回退）
   * 返回 [组合键, commandId] 列表，如 ['ctrl+;', 'properties:add']。同键自定义优先（后写覆盖）。
   */
  passthroughKeyMap() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const map = /* @__PURE__ */ new Map();
    const push = (hk, commandId) => {
      const key = hk ? hotkeyToPassthroughKey(hk) : null;
      if (key !== null) map.set(key, commandId);
    };
    try {
      const defs = (_c = (_b = (_a = this.app.hotkeyManager) == null ? void 0 : _a.getDefaultHotkeys) == null ? void 0 : _b.call(_a)) != null ? _c : {};
      for (const [commandId, entry] of Object.entries(defs)) {
        for (const hk of (_d = entry == null ? void 0 : entry.hotkeys) != null ? _d : []) push(hk, commandId);
      }
    } catch (e) {
    }
    try {
      const cmds = (_g = (_f = (_e = this.app.commands) == null ? void 0 : _e.listCommands) == null ? void 0 : _f.call(_e)) != null ? _g : [];
      for (const cmd of cmds) {
        if (!cmd || typeof cmd.id !== "string" || !cmd.id || !Array.isArray(cmd.hotkeys)) continue;
        for (const hk of cmd.hotkeys) push(hk, cmd.id);
      }
    } catch (e) {
    }
    if (map.size === 0) {
      try {
        const hotkeys = (_j = (_i = (_h = this.app.hotkeyManager) == null ? void 0 : _h.getHotkeys) == null ? void 0 : _i.call(_h)) != null ? _j : [];
        for (const hk of hotkeys) push(hk, "");
      } catch (e) {
      }
    }
    return [...map.entries()].map(([key, commandId]) => ({ key, commandId }));
  }
  /** 快捷键透传配置：从快捷键配置生成全部组合键列表（'ctrl+o' / 'ctrl+;' 等）。 */
  passthroughKeys() {
    if (!this.settings.shortcutPassthrough) return [];
    return this.passthroughKeyMap().map((e) => e.key);
  }
  /** 把 iframe 内捕获的快捷键映射为 Obsidian 命令并执行：按组合键反查 commandId（来自命令自身的 hotkeys）。 */
  executePassthroughShortcut(key) {
    var _a, _b;
    try {
      const wanted = key.toLowerCase();
      const map = this.passthroughKeyMap();
      console.warn("[dsh-harness] passthrough key =", key, "| \u603B\u5FEB\u6377\u952E\u6570 =", map.length, "| \u542B\u76EE\u6807 =", map.some((e) => e.key === wanted));
      const hit = map.find((e) => e.key === wanted);
      if (hit && hit.commandId !== "") {
        void ((_b = (_a = this.app.commands).executeCommandById) == null ? void 0 : _b.call(_a, hit.commandId));
        return;
      }
      if (hit) {
        console.warn("[dsh-harness] \u547D\u4E2D\u5FEB\u6377\u952E\u4F46\u7F3A commandId\uFF08hotkeyManager \u56DE\u9000\u8DEF\u5F84\uFF09\uFF1A", wanted);
        return;
      }
      console.warn("[dsh-harness] no matching hotkey for", wanted);
    } catch (err) {
      console.warn("[dsh-harness] passthrough error:", err);
    }
  }
  /** 更新用的只读镜像：设置项优先；留空时若安装地址来自 github.com 则自动包成 gh-proxy 镜像。 */
  updateMirrorUrl() {
    const configured = this.settings.updateMirrorUrl.trim();
    if (configured !== "") return configured;
    const base = this.settings.installUrl || DEFAULT_DSH_REPO_URL;
    if (base.includes("github.com/")) return `https://gh-proxy.com/${base}`;
    return void 0;
  }
  async loadSettings() {
    const data = await this.loadData();
    this.settings = { ...DEFAULT_SETTINGS, ...data };
    const migrated = migrateBridgeMode(this.settings.bridgeToObsidian);
    if (migrated !== null) {
      this.settings.bridgeToObsidian = migrated;
      await this.saveSettings();
    }
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  /** 读取最近启动打点记录（设置页诊断区）。 */
  getStartupRecords() {
    var _a, _b;
    return (_b = (_a = this.profiler) == null ? void 0 : _a.readRecords()) != null ? _b : [];
  }
  /** 检测 Obsidian 界面语言（getLanguage()，zh* → 中文，其余/不可用 → English）。 */
  detectSystemLanguage() {
    var _a, _b;
    try {
      const lang = (_b = (_a = import_obsidian5.getLanguage) == null ? void 0 : _a()) != null ? _b : "";
      if (lang && lang.toLowerCase().startsWith("zh")) return "zh";
    } catch (e) {
    }
    return "en";
  }
  /** Vault 根路径（DSH 工作区通常即此；用于路径点击的 Vault 内判定）。 */
  vaultRoot() {
    var _a, _b, _c;
    return (_c = (_b = (_a = this.app.vault.adapter).getBasePath) == null ? void 0 : _b.call(_a)) != null ? _c : "";
  }
};

/* nosourcemap */