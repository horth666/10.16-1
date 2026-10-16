# 如果你穿进豪门，你会是什么身份？

一个面向手机端的纯静态剧情互动测试。包含 10 幕连续剧情、12 种身份结局、动态剧情回响、稳定的结果匹配，以及原生分享与复制备用方案。

## 本地打开

直接双击根目录中的 `index.html` 即可使用，无需安装依赖，也不需要网络或服务器。

## 发布到 GitHub Pages

1. 新建一个 GitHub 仓库。
2. 将本目录中的所有文件上传到仓库根目录，确保 `index.html` 位于根目录。
3. 进入仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. 选择 `main` 分支和 `/ (root)` 目录并保存。
6. 等待 GitHub 生成访问地址。

本站不使用外部字体、图片、CDN、接口或密钥，兼容 GitHub Pages 项目子路径。

## 文件结构

- `index.html`：页面结构
- `style.css`：视觉与响应式样式
- `data.js`：题目、选项、动态剧情与结果档案
- `main.js`：流程、计分、重置和分享逻辑
- `assets/favicon.svg`：本地图标

## 修改内容

题目和结果集中在 `data.js`。每个选项的 `traits` 用于隐藏倾向计算，`affinity` 用于身份匹配；调整时请保持 12 种结果在 10 道题中都有合理的得分入口。
