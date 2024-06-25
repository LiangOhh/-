# Vue3

## 目录结构

### App.vue

根组件

### main.js

挂载根组件到应用

```js
import { createApp } from 'vue'
import App from './App.vue'

// 创建实例
const app = createApp(App)
// 挂载,返回根组件的实例
app.mount('#app')

```

### index.html

### [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

ES标准对象,不支持IE

Proxy对象:代理对象

组件实例即代理对象

vm.$data为实际代理对象



## 选项式API

vue2常用

### data

```js
data(){
    return{
        msg:'',
        obj:{}
    }
}
```

### methods

页面渲染就会调用

```js
methods:{
    function(){
        
    }
}
```

### computed

调用计算属性方法不加括号

页面渲染不重新调用,diff算法

```js
computed:{
    //只有getter,可简写
    name(){
        
    }
    //有setter,完整写
    name:{
        getter(){
            retrun
        },
        setter(){
            
        }
    }
}
```

## 组合式API

### setup



## [插槽](https://cn.vuejs.org/guide/components/slots.html)

### 默认插槽

```vue
<!-- 子组件插槽位置  -->
<template>
    <div>
        <button>
            <!-- 出口  -->
            <slot></slot>
        </button>
    </div>
</template>

 <!-- 父组件组件位置中插槽传入内容,入口 -->
 <Mybutton>这是默认插槽</Mybutton>
```

### [具名插槽](https://cn.vuejs.org/guide/components/slots.html#named-slots)

```vue
<template>
    <div>
        <button>
            <slot></slot>
        </button>
        <h1>
            <slot name="myH1"></slot>
        </h1>
        <p>
            <slot name="myP"></slot>
        </p>
    </div>
</template>

<Mybutton>这是默认插槽
      <template v-slot:myH1>
        这是我的完整具名插槽
      </template>
      <template #myP>
        这是我的简写具名插槽
      </template>
</Mybutton>
```

## 事件

```
(js标识符||属性访问路径)?方法事件处理器:内联事件处理器
```

### 内联事件处理器

回调函数自己进行调用,

`$event`:事件对象

```vue
<template>
    <div>
        <form>
            <input type="text" @input="getTarget($event)">
        </form>
    </div>
</template>

<script setup>
function getTarget(event) {
    console.log(event.target.value);
}
</script>

<style scoped></style>
```

### 方法事件处理器

```vue
<template>
    <div>
        <form>
            <input type="text" @input="getTarget">
        </form>
    </div>
</template>

<script setup>
function getTarget(event) {
    console.log(event.target.value);
}
</script>

<style scoped></style>
```



### 修饰符

+ stop   停止冒泡
+ capture   捕获阶段触发
+ prevent    取消默认行为
+ self            自身触发
+ once
+ passive     用于提升滚动事件性能

## 透传

发生在没有声明`props`和`emit`的属性上组件上

自动透传发生在单根组件上

`$attrs`访问透传属性

```js
import { useAttrs } from 'vue';

const attrs = useAttrs()
console.log(attrs);
```

### 关闭自动透传

```js
<script>
// 关闭自动透传
export default {
    inheritAttrs: false
}
</script>
```

## 组件通讯

### emit

`@声明自定义事件`

#### 不推荐写法

1. 子组件Myemits发送,使用`$emit('事件名',传递参数)`

```vue	

<button @click="$event => $emit('send_one', str1)">发送1</button>
```

2. 父组件App接收

```vue
<script setup>
...
import Myemits from '../components/Myemits.vue'
import { ref } from 'vue';
const str = ref('')
function get_one(str_value) {
  str.value = str_value
}
</script>

<template>
  ...
  <div>
    <Myemits @send_one="get_one"></Myemits>
    {{ str }}
  </div>
</template>

<style scoped></style>

```

#### 推荐写法

1. 子组件,使用`defineEmits([''])`声明

```vue
<template>
    <div>
        <button @click="$event => emits('send_two', str2)">发送2</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const str2 = ref('这是推荐写法')
const emits = defineEmits(['send_two'])
</script>
<style scoped></style>
```

2. 父组件App接收

```vue
<script setup>
function get_two(str_value) {
  str.value = str_value
}
</script>

<template>
  <div>
    {{ msg }}
  </div>
  ...
  <div>
    <Myemits @send_two="get_two"></Myemits>
    {{ str }}
  </div>
</template>

<style scoped></style>

```

### [依赖注入](https://cn.vuejs.org/api/composition-api-dependency-injection.html)

**向后代provide**

#### 设置依赖

父组件`provide(key,value)`

```vue
<script setup>

import Myemits from '../components/Myemits.vue'
import { provide, ref } from 'vue';
const provide_str = ref('This is my provide_str')
provide('provide_str', provide_str.value)
</script>

<template>
</template>
<style scoped></style>

```

#### 注入依赖

子组件`inject(key)`

```vue
<template>
    <div>
        {{ str }}
    </div>
</template>
<script setup>
import { inject, ref } from 'vue'
const str = inject('provide_str')
console.log(str);
</script>
<style scoped></style>
```

## [Pinia](https://pinia.vuejs.org/zh/getting-started.html)

1. 安装Pinia库

```bash
npm i pinia
```

2. 使用插件库

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

### 选项式

#### 创建store

+ `defineStore`

使用`defineStore('storeID',OPTION)`

```js
import { defineStore } from "pinia";
export const useInfoStore = defineStore(
    'userInfo', {
    state: () => ({
        name: '椋',
        age: 18,
        address: '广东省'
    }),
    getters: {
        double: (state) => state.age * 2
    },
    actions: {
        increment() {
            this.age++
        }
    }
}
)
```

#### [解构](https://pinia.vuejs.org/zh/api/modules/pinia.html#storetorefs)

+ `storeToRefs`

`storeToRefs()`

```JS
import { useInfoStore } from '../src/store/infoStore'
import { storeToRefs } from 'pinia';
const info = useInfoStore()
//解构
const { name, age, address } = storeToRefs(info)
function btn1() {
    info.$patch(
        state => {
            state.address = '上海'
        }
    )
}
```

#### API

##### $patch

修改

```js\
info.$patch(
        state => {
            state.address = '上海'
        }
)
```

##### $subscribe

订阅

```js
info.$subscribe((mutation, state) => {
    // console.log(state);
    console.log(mutation);
})
```

##### $onAction

调用方法后触发

```js
info.$onAction((...args) => {
    console.log(args);
})
```

![image-20240625125848070](https://raw.githubusercontent.com/LiangOhh/MyPic/master/test/pic202406251258495.png)

```js
info.$onAction(
    ({ name, after, onError }) => {
        after(() => {
            console.log(name + '函数调用成功');
        })
        onError(() => {
            console.log(name + '函数调用失败');
        })
    }
)
```

