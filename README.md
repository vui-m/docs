>## vui-m
### A high quality UI Toolkit built on Vue 2.x.

>#### 可用组件
```javascript
Toast
Swipe
Swipe-item
```
持续更新中...
>#### 目录结构
```
|———build       // webpack 配置项
|
|
|———config      // 配置项
|
|
|———dist        // vue ui 组件库产出目录
|
|
|———preview     // 组件（预览）测试目录
|
|
|          |————index.js    // vui-m 库入口文件
|          |
|          |————components  // vui-m 组件开发目录
|          |
|———src————|————mixins     // mixins
|          |
|          |————styles     // 公共样式及单页面抽离出的样式
|          |
|          |————utils      // 公用方法
|
|
|———npmPublish  // 发布 npm 包 所需文件
|
|
|———static      // 静态文件
|
|
|———test        // 单元测试
```
>#### 安装依赖
```bash
npm i -S vui-m
```

>#### Vue 全局安装
```bash
import Vue from 'vue';
import Vuim from 'vui-m'
Vue.use(Vuim)

import 'vui-m/dist/css/vui-m.css'
```

>#### 举个栗子
```javascript
<template>
    <Test :txt="value" />
</template>
<script>
    export default {
        data () {
            return {
                value: '传值测试'
            }
        }
    }
</script>
```