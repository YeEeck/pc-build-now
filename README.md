# PC BUILD NOW

## 项目说明
本项目使用Vue2 + Vuetify框架进行开发。
该WEB应用能够在不需要后端支持的情况下，提供包括**配置单编写、配置单分析、配置单发布（生成发布链接、二维码、配置单图片）以及配置单查看等功能**。
<br>
**该应用尚在开发中。除基础的编辑、分享、查看功能外，其他功能正在开发中。**
<br>
DEMO页面：
[Github](https://yeeeck.github.io/pc-build-now) 
[Gitee](https://yeeeck.gitee.io/pc-build-now)

### 开发起因
一到双十一、618，就有了很多给别人写配置单的需求。以前一直在用EXCEL写，但是这种方法逐渐也暴露了它的缺点：
- 只能以文件形式发给他人，接收者需要下载文件后才能查看，而大多数在线聊天软件中，文件往往不容易被多端同步。
- EXCEL内含的图表功能产生的图表与整个配置单的风格并不融合，图表自定义性不足。同时EXCEL的分析结果呈现效果有限，难以产生一个足够美观易用的界面。
- EXCEL文件并不利于交流分享，采用URL、JSON形式，能够方便的进行分析，并接入类似论坛的平台。

### 主要特性
- 更好更优化的PC配置单编写体验
- 集成Echarts，使用Javascript实现更科学完善的配置单数据分析与结果展示
- 更好的配置单分享与查看体验
- 基于以上功能，接入后端，实现轻量级交流论坛（待开发）


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
