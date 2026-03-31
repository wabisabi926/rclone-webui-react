# rclone-webui-react 中文说明

## 项目简介

这是 rclone 命令行工具的 React 基于的 web 界面，由 negative0 在 Google Summer of Code 2019 和 2020 期间开发。

## 主要修改

### 1. 国际化支持

- 添加了 `i18n` 目录，包含国际化配置文件和翻译文件
- 集成了 `i18next` 和 `react-i18next` 库，实现国际化功能
- 默认语言设置为中文

### 2. 中文翻译

- 创建了 `src/i18n/locales/zh.js` 中文翻译文件
- 翻译了所有组件中的文本内容，包括：
  - 导航菜单
  - 首页
  - 后端状态卡片
  - 带宽状态卡片
  - 运行任务

### 3. 语言切换功能

- 在导航栏右侧添加了语言切换按钮
- 点击按钮可以在中文和英文之间切换
- 切换语言后，整个应用的文本会相应地切换到所选语言

### 4. 依赖更新

- 在 `package.json` 文件中添加了以下依赖：
  - `i18next`
  - `i18next-browser-languagedetector`
  - `react-i18next`

## 使用方法

### 安装依赖

```bash
npm install
```

### 运行项目

```bash
npm start
```

### 运行 rclone

需要使用以下命令运行 rclone：

```bash
rclone rcd --rc-user=<username> --rc-pass=<password> --rc-serve
```

### 语言切换

- 导航栏右侧会显示语言切换按钮
- 点击按钮即可在中英文之间切换

## 项目结构

- `src/i18n/` - 国际化配置和翻译文件
  - `index.js` - 国际化配置
  - `locales/` - 翻译文件目录
    - `en.js` - 英文翻译
    - `zh.js` - 中文翻译

## 注意事项

- 项目默认使用中文显示
- 语言切换功能会在整个应用中生效
- 所有翻译文本都可以在 `src/i18n/locales/zh.js` 文件中进行调整

## 贡献

欢迎提交 issue 和 pull request 来改进这个项目。