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
