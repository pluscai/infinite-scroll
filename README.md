# 基于vue指令的无限滚动 

- 实现滚动至底部时，加载更多数据
- infinite load data on the bottom use vue directive


## 用法
### 全局用法
```javascript
import Vue from 'vue'
import App from './App.vue'
import InfiniteScroll from '@sxcai/infinite-scroll'

Vue.use(InfiniteScroll) // 引入并注册
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```
### 局部用法
```html
<template>
    <ul  
        v-infinite-scroll="load" 
        class="infinite-list" 
        style="overflow:auto" 
        infinite-scroll-immediate="false" 
        infinite-scroll-distance="25" 
        infinite-scroll-delay="200" 
        infinite-scroll-disabled="false" 
    >
        <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>
<script>
import InfiniteScroll from '@sxcai/infinite-scroll'
export default {
   data() {
    return {
      count: 0
    };
  },
  directives: {
    InfiniteScroll
  },
  methods: {
    load () {
        this.count += 2
    }
  }
}
</script>

```