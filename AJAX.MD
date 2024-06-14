## [form-serialize](https://www.npmjs.com/package/form-serialize#form-serialize)

自动获取表单value

## 查询参数

## 图片上传

使用[FormData()](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData),将数据编译成键值对，以便用[`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)来发送数据

## [本地缓存](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)

localStorage

## [XHR](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)

1. 创建实例(new)
2. 使用open('method','url'),请求数据
3. addEventListener()
4. send()

+ JSON.stringify()

  将对象装换为json字符串

+ JSON.parse()

​				将字符串装换为对象

### [URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)

查询字符串

创建实例传入需要转换的查询字符,之后用toString()

### 设置请求头

[setRequestHeader()](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/setRequestHeader)

实例化

```js
const obj = {
    a,
    b
}
const temp = new URLSearchParams(obj)
const query = temp.toString()
//query 变成 a=?&b=?
```



## [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- *待定（pending）*：初始状态，既没有被兑现，也没有被拒绝。
- *已兑现（fulfilled）*：意味着操作成功完成。
- *已拒绝（rejected）*：意味着操作失败。

### 查看promise结构

```js	
console.log(Promise)
```

![image-20240605011144351](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240605011144351.png)

### 实例化Promise

```js
new Promise((resolve,reject)=>{
    
})
```

查看实例化后的对象,状态为pending

![image-20240605011708807](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240605011708807.png)

## Axios

### 设置请求头携带token

``` js	
headers:{
    'Authorization':`Bearer ${token}``
}
```

### 请求拦截器设置token

```js
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //将存在缓存的token取出
     const token = localStorage.getItem('token')
     token && (config.headers.Authorization=`Bearer ${token}`)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
```

