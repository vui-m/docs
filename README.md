>## vui-m
### A high quality UI Toolkit built on Vue 2.x.

#### [在线演示](https://gauseen.github.io/vui-m/#/home)

>#### 可用组件
```javascript
Toast
Swipe
  Swipe-item
ActionSheet
InfiniteScroll
Masker
```
多谢支持，持续更新中...

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
npm i vui-m -S
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

## API

### Toast

> 轻提示框，支持自定义位置、显示时间、css

------

#### 例子

基本用法

```javascript
this.$toast('提示信息');
```

```javascript
this.$toast(options);
```
### options 对象字段说明:
| 参数 | 说明 | 类型 | 可选值 | 默认值|
|------|-------|---------|-------|--------|
| message | 文本内容 | String | | |
| position | Toast 的位置 | String | 'top'<br>'bottom'<br>'middle' | 'middle' |
| duration | 持续时间（毫秒）| Number | | 2500 |

### Swipe

> 轮播图，可自定义轮播时间间隔等

------

#### 例子

基本用法

```html
<Swipe :auto="3600">
  <Swipe-item> 1 </Swipe-item>
  <Swipe-item> 2 </Swipe-item>
  <Swipe-item> 3 </Swipe-item>
</Swipe>
```

取消自动播放

```html
<Swipe :auto="0">
  <Swipe-item> 1 </Swipe-item>
  <Swipe-item> 2 </Swipe-item>
  <Swipe-item> 3 </Swipe-item>
</Swipe>
```

### API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| speed | 动画持时（毫秒） | Number | | 400 |
| auto | 自动播放的时间间隔（毫秒）, 为 0 时关闭自动轮播 | Number | | 3000 |
| startSlide | 初始显示的轮播图的索引 | Number | | 0 |
| continuous | 是否可以循环播放 | Boolean | | true |
| isShowIndicators | 是否显示indicators | Boolean | | true |
| stopPropagation | 是否在  touchstart 事件触发时阻止冒泡。 | Boolean | | true |

### Slot

#### Swipe
| name | 描述 |
|------|--------|
| - | 一个或多个 `Swipe-item` 组件 |

#### Swipe-item
| name | 描述 |
|------|--------|
| - | 单个轮播图的内容 |


### Action sheet

> 操作表，从屏幕下方移入。

----------

#### 例子

`actions` 是个数组，子元素是对象，对象里面有两个属性，分别为:
1. name 要显示的文字
2. method 点击对应选项时执行的方法

`v-model` 绑定一个变量，通过此变量控制 action-sheet 显示或隐藏

```html
<ActionSheet
  v-model="isShowSheet"
  :actions="actions"
  cancelText="取消"
>
</ActionSheet>
```

### API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| v-model | 绑定一个变量，通过此变量控制 action-sheet 显示或隐藏 | Boolean | | true |
| actions | 菜单项数组 | Array | | |
| cancelText | 取消按钮的文本。若设为空字符串，则不显示取消按钮 | String | | '取消' |
| closeOnClicelMask | 是否可以通过点击 mask 层来关闭 `actionsheet` | Boolean | | true |

### InfiniteScroll 上滑无限加载
> 上滑无限加载，瀑布流滚动加载，用于控制长列表的展示

-------------

#### 例子

基本用法

```html
<InfiniteScroll
  v-model="loading"
  :finished="finished"
  @load="loadMore"
  :scroll-distance="10"
>
  <div class="infinite-scroll__swapper">
    <ul class="infinite-scroll__list">
      <li class="infinite-scroll__item" v-for="(item, $index) in list">
        {{item}}
      </li>
    </ul>
  </div>

</InfiniteScroll>
```

```js
export default {
  data () {
    return {
      list: 5,
      finished: false,
      loading: false,
    }
  },
  mounted () {

  },
  methods: {
    loadMore () {
        setTimeout(() => {
            this.list += 5
            // 异步加载完数据后，设置此值
            this.loading = false
        }, 4500)
        if (this.list > 20) {
            this.finished = true
        }
    },
  },
}
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| loading | 异步加载完数据后将`loading=false`，加载过程中不触发`load`事件 | `Boolean` | - | `false` |
| finished | 是否已加载完成，加载完成后不再触发`load`事件 | `Boolean` | - | `false` |
| scroll-distance | 滚动条与底部距离小于 scroll-distance 时触发`load`事件 | `Number` | - | `20` |
| loading-text | 加载中提示文案 | `String` | - | `加载中...` |
| immediate-check | 是否在初始化时立即执行滚动位置检查，是否符合加载条件 | `Boolean` | - | `true` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| load | 滚动条与底部距离小于 scroll-distance 时触发 | - |

### 注：
不要把 `InfiniteScroll` 组件所有子类元素的高度都写固定

### Masker

> 遮罩层显示

------

#### 例子

基本用法

```html
<Masker v-model="visible">
  <span>自定义内容</span>
</Masker>
```

### API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| v-model | 赋值一个变量，控制是否显示遮罩 | Boolean | | |

### Slot

#### Masker
| name | 描述 |
|------|--------|
| - | 遮罩层的内容 |
