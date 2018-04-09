## vui-m
### A high quality UI Toolkit built on Vue 2.x.

#### 安装依赖
```bash
npm i -S vui-m
```

#### Vue 全局安装
```bash
import Vue from 'vue';
import Vuim from 'vui-m'
Vue.use(Vuim)

import 'vui-m/dist/css/vui-m.css'
```

#### 举个栗子
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
