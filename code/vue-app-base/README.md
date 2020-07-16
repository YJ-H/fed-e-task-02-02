# vue-app-base

1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构
2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具）
3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务
4. 尽可能的使用上所有你了解到的功能和特性

### 思路

将webpack分成3个文件 
- webpack.common.js  基础配置文件
- webpack.dev.js  开发配置文件  开启weback dev server 开启热更新 开启source map 不开启代码压缩
- webpack.prod.js 生产环境配置文件  代码压缩 资源文件复制等