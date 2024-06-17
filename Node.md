#  Node

## 进程

​	程序运行的环境

## 线程

​	实际进行运算的东西

栈 -> 微任务队列 -> 宏任务队列

## 执行顺序

![image-20240614220505642](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240614220505642.png)

### 栈
后进先出
栈中放着要执行的代码

+ 全局作用域代码

### 队列
任务队列

+ 宏任务队列	(大部分代码)
+ 微任务队列    (Promise的回调函数   `await`后续代码)   **VIP**
+ tick 队列         **SVIP**

先进先出
放着将要执行的代码

+ 定时器(函数作用域代码)

## [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### state

+ pending 

  ​	state:初始值

+ fulfilled

  ​	state :fulfilled,`then`调用第一个回调函数返回数据

+ rejected

  ​	state:rejected,`then`调用第二个回调函数返回数据

state只能修改一次,且初始值为pending

![image-20240614202040237](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240614202040237.png)

![流程图展示了 Promise 状态在 pending、fulfilled 和 rejected 之间如何通过 then() 和 catch() 处理程序进行转换。一个待定的 Promise 可以变成已兑现或已拒绝的状态。如果 Promise 已经兑现，则会执行“on fulfillment”处理程序（即 then() 方法的第一个参数），并继续执行进一步的异步操作。如果 Promise 被拒绝，则会执行错误处理程序，可以将其作为 then() 方法的第二个参数或 catch() 方法的唯一参数来传递。](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

### 构造函数

### then

### catch

### finally

### async

**`async`**声明创建一个异步函数,返回值自动封装为**`promise`**

### [await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)

**`async`**声明的异步函数中,使用**`await`**调用异步函数,返回等待结果而不是**`promise`**

`await`不当使用可能会导致与之相关的线程阻塞

使用try...catch...捕捉异常

```js
try{
    
}catch{
    
}
```

## 模块化

### CommonJS

NodeJs的默认标准

`.cjs`扩展名为标准模块,引入cjs模块扩展名不可省略

`.mjs`扩展名为ES的模块化

#### 定义模块

##### cjs暴露

cjs模块定义好后需要暴露

+ exports                  单独导出
+ module.exports   多个导出

```js
/* 
exports.name='wukong',
exports.age=18,
exports.tel= 18888888
 */
module.exports={
    name:'wukong',
    age:18,
    tel:18888888
}
```

##### mjs模块暴露



```javascript
// 分别导出
export let a = 10
// 默认导出,一个模块只有一个默认导出
let obj = {
    name: 'wukong',
    age: 18,
    tel: 18888888
}
export default obj
console.log('这是mjs模块');
```



#### 引入模块

##### cjs导入

+ require

  拓展名可省略不写          js-->json-->node

```js
require(path)  //相对路径
```

+ 引入核心模块时可不用写路径,如'path','fs'

```js
require('node:核心模块名称')
require('node:fs')
require('fs')
```

##### mjs导入

+ import

  不能省略扩展名

```js
// 分别导入
import {a} from "./demo01.mjs"
// 默认导入,不需要加{},可随意起名
import obj from "./demo01.mjs"
console.log(obj);
```

## 核心模块

+ `globalThis` ES标准下,node中的标准全局对象,相似于window

### [process](https://www.nodeapp.cn/process.html)

全局变量,无需引入

+ [exit](https://www.nodeapp.cn/process.html#process_event_exit)

  使得 Node.js 进程即将结束,**`process.exit(0)`**结束进程

+ [nextTick](https://www.nodeapp.cn/process.html#process_process_nexttick_callback_args)

  `process.nextTick()`方法将 `callback` 添加到"next tick 队列"。执行级别高于微任务队列

### [path](https://www.nodeapp.cn/path.html)

- __dirname：用来**动态**获取当前文件模块所属目录的绝对路径
- __filename：用来**动态**获取当前文件的绝对路径

引入path模块

```js
const path = require('node:path')
```

+ [resolve](https://www.nodeapp.cn/path.html#path_path_resolve_paths)

  `path.resolve(__dirname,'filePath')`生成绝对路径

### [fs](https://www.nodeapp.cn/fs.html)

不推荐使用同步的方法,建议使用异步的方法

+ [readFile](https://www.nodeapp.cn/fs.html#fs_fs_readfile_path_options_callback)

## [Express](https://www.expressjs.com.cn/)

### 初始化

```bash
npm i express
npm init -y
```

#### 目录结构

`pack.json`

--main:入口文件

```js
{
  "dependencies": {
    "express": "^4.19.2"
  },
  "name": "demo_express",
  "version": "1.0.0",
  "main": "index.js",
  ...
}

```
### 启动服务器
```js
const express = require ('express')
//创建实例
const app = express()
const Port =  '端口号'  
//监听
app.listen(Potr)
```
### [设置路由](https://www.expressjs.com.cn/starter/basic-routing.html)

+ `get`

+ `post`

  ```js
  const express = require('express')
  const app = express()
  const Port = 3000
  app.get('/', (req, res) => {
      res.send('Get请求')
      console.log('这是访问get');
  
  })
  app.post('/', (req, res) => {
      res.send('POST请求')
      console.log('这是访问post');
  })
  app.listen(Port, () => {
      console.log(`${Port}端口监听中`);
  })
  ```

### 回调函数

#### req

这里面封装了用户的请求信息

+ url

  获取用户

#### res

这里面封装了服务器返回的响应信息

+ send

  send() 设置发送响应体

### 设置静态资源

**前提**:将静态资源放在public文件中

通过中间件设置静态资源

```js
app.use(express.static('public'))
```

### 查询参数

#### GET

get请求没有请求体,是通过查询字符串获取参数,用`query`

+ query

```html
<form action="/login" method="get">
        <input type="text" name="username" placeholder="账号">
        <input type="password" name="password" placeholder="密码">
        <button type="submit">登录</button>
</form>
<script>
		app.get('/login', (req, res) => {
    	// 获取查询字符串
    	console.log(req.query);
    	res.send('登录成功')    
})
</script>
```
+ params

  通过`/:key`占位,再通过**params**解析成**query**

```js
app.get('/hello/:key',(req, res)=>{
    console.log(req.params);
    res.send('这是params查询页面测试')
})
```






#### POST

POST请求参数在请求体`req.body`中,

node环境中不会去解析请求体,故需要使用`express.urlencode()`

因此可使用中间件对post请求进行解析

```js
app.use(express.urlencoded())
app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('POST登录成功')
})
```

使用`params`

```html	
<form action="/login" method="post">
        <input type="text" name="username" placeholder="账号">
        <input type="password" name="password" placeholder="密码">
        <button type="submit">登录</button>
</form>
<script>
		app.post('/login', (req, res) => {
    	
    	res.send('登录成功')    
})
</script>
```

## cookie

服务器以响应头的形式将cookie发给客户端,

`有效期`:会话

`缺点`:明文  

### 设置cookie

```js
app.get('/getcookie',(req,res)=>{
    res.cookie('mycookie','cookie_value')
    res.send('cookie发送成功')
})
```

### 解析cookie

引入中间件解析cookie 

```bash
 npm i cookie-parser
```

导入并注册

```js
const cookieParser = require('cookie-parser')
app.use(cookieParser())
```

## session

将数据cookie存在服务器中,通过唯一id返回数据cookie

`session`是服务器的一个对象

#### 引入session

```bash
npm i express-session
```

导包注册  

```js
const session = require('express-session')
app.use(session({secret:"_string"}))
req.session.'key'=''
```

