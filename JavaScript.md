# JavaScript

## 数据类型

Js为弱类型语言,变量类型可被自动确定,即数据类型可变

### 简单数据类型

内存分配(值类型):存于栈中

+ [Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)

  判断数字**isNAN()**

+ Boolean

+ [String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

+ Undefined

+ Null

### 复杂数据类型

内存分配(引用数据类型):存于堆中

## 数据类型转换

### 字符串转换



+ toString()   转换为字符串

  ```js
  let num = asd
  num.toString() //'asd'
  ```

+ String()

  ```js
  let num = asd
  String(num) //'asd'
  ```


### 数字型转换

+ 算术运算

  加法为String

  减法和乘除法为Number

+ parseInt()

  ```js
  let num = '111'
  parseInt(num) // 111
  let num = '111.99'
  parseInt(num) // 111
  let num = '111px'
  parseInt(num) // 111
  let num = 'px111px'
  parseInt(num) // NaN
  ```

+ parseFloat()

  ```js
  let num = '111.99'
  parseInt(num) // 111.99
  //其余与parseInt一致
  ```

+ Number()

  ```js
  let num = '111.99'
  Number(num) // 111.99
  //只能是纯数字
  ```

## 深浅拷贝

### 浅拷贝

**`...`**展开运算符也可实现浅拷贝

#### 数组

只复制一层,不会影响原数组

单层模型无影响

```js
let array3 = [1,2,3,4]
let array4 = array3
array4[0]=0                   //会影响array3
console.log(array3); 
console.log(array4);
console.log(array3==array4);   //true
```

```js
let array3 = [1,2,3,4]
let array4 = array3.slice()
array4[0]=0                    //slice浅拷贝,单层不会影响
console.log(array3);
console.log(array4);
console.log(array3==array4);   //false
```

多层

```js
let array = [{name:'a',age:18},
    {name:'b',age:20}
]
let array2 =array
array2[0].name ='c'            //修改会影响array
console.log(array);
console.log(array2);		
console.log(array==array2);    //true
```

```js
let array = [{name:'a',age:18},
    {name:'b',age:20}
]
// 使用slice
let array2 =array.slice()     //修改会影响array
array2[0].name ='c'
console.log(array);
console.log(array2);
console.log(array==array2);   //false
```

#### 对象

调用静态方法`Object.assign`

```
let obj = {name:'猴子',age:19}
let obj1 =obj
obj1.name='白骨精'        //会影响
console.log(obj); 
console.log(obj1);
console.log(obj==obj1);   //true
```

```js
let obj = {name:'猴子',age:19}
let obj1 = Object.assign({},obj) 
obj1.name='白骨精'        //不会会影响
console.log(obj); 
console.log(obj1);
console.log(obj==obj1);   //false
```



### 深拷贝

`structuredClone(array)`

```js
let array = [{name:'a',age:18},
    {name:'b',age:20}
]
let array5 = structuredClone(array)
array5[0].name ='c'                     //修改不会影响
console.log(array);
console.log(array5);
console.log(array==array5);              //false
```

## 高阶函数

### bind

创建新函数,并永久绑定`this`

```js
const newfn = fn.bind(obj)
```



## 闭包

闭包产生于外部函数调用,销亡于内部函数丢失(null、回收)

访问外部函数作用域的变量

1. 通过函数嵌套实现,外部函数创建变量
2. 内部函数引用外部函数的变量
3. 内部函数作为返回值

示例

```js
//闭包
function outer() {
    let num = 0;
    // 嵌套函数
    return () => {
        num++
        console.log(`闭包内联函数:${num}`);
    }
}
const newFn = outer()
for (let index = 0; index < 3; index++) {
    newFn()
}
```

### 外层函数作用域

 与调用位置无关,先找声明->外部->全局



## [数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

### 遍历

#### for ...of ...Array

#### forEach

forEach([element],[index],[array])

```JS
array.forEach(element=>{
    console.log(element)
})
```
#### [filter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

用法例子

```js
// filter
let arr = [33, 99, 22, 19, 29]
console.log('改变前', arr);
let new_arr = arr.filter(
    item => {
        return item > 30
    }
)
console.log(new_arr);
```
#### [map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```js
//map
let map_obj = [
    { name: 'a', tel: 123, scroe: 98 },
    { name: 'b', tel: 123, scroe: 98 },
    { name: 'c', tel: 123, scroe: 98 },
]
map_obj.map(
    function (item,index) {
        console.log(item.name,index);  
        // name[a-c]  ,index[0-2]
    }
)
```
### [sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

 sort()排序只看第一位数,故超过一位数排序会出错

使用`sort(compareNumbers)`进行优化

```js	
function compareNumbers(a, b) {
  return a - b;
}
//可简写成箭头函数
sort((a,b)=> a-b)   //升序
sort((a,b)=> b-a)   //降序
```
### [join](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

分割

+ `join('')`

### slice

切片,浅拷贝,因此可借助此实例方法进行复制

```js
array.slice(start,end)
```

### 破坏性方法

#### crud

+ push 尾部追加
+ unshift  头部追加
+ pop  删除末尾一个元素,返回值为**`被删除元素`**
+ shift 删除头部第一个元素,返回值为**`被删除元素`**
+ [splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 从index开始删除
+ reverse  反转数组

### 获取索引

+ [indexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

  ```js
  indexOf(searchElement, fromIndex)
  ```

  默认从头开始,只查找第一个,查找成功返回所在`index`,不成功返回`-1`

+ lastIndexOf()

  ,默认从尾开始,只查找第一个,查找成功返回所在`index`,不成功返回`-1`

### 转化为字符串  

+ toString()

​				将数组转换为字符串,默认为`,`分割

+ [join()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

  ​	将数组转换为字符串,默认为`,`分割,可自定义分割

### 数组去重

+ new Set(repeatArray)        ES6新增数组去重方法
+ 创建新数组,向其中push的过程调用indexOf()进行过滤

```js
// ES6语法
let newArry = [...new Set(repeat_Array)];
console.log(newArry);
let filterArray = []
// 过滤语法
repeat_Array.filter((item) => {
    //    console.log(item);
    if (filterArray.indexOf(item) === -1) {
        filterArray.push(item)
    }
})
console.log(filterArray);
```

### 数组排序

#### 冒泡排序

```js
for(let i = 0;i<sort_Array.length-1;i++){
    for (let j = 0; j < sort_Array.length-i-1; j++) {    
        if(sort_Array[j]>sort_Array[j+1]){ 
            let temp = sort_Array[j]        
            sort_Array[j]=sort_Array[j+1]
            sort_Array[j+1]=temp
        }
    }
}
```

#### 选择排序

时间复杂度比冒泡排序高

### [arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)
**`arguments`** 是一个对应于传递给函数的参数的类数组对象(伪数组)。

通过数组的静态方法`Array.isArray()`判断是否为数组

```js
  console.log(Array.isArray(arguments));      //false
  console.log(typeof(arguments));             //Object
```

可通过**arguments[index]**获取传递值

### 可变参数

`...args`  是数组,优化arguments不足



## [对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)

对象中,属性存储的区域有两个:

+ 对象自身
+ 原型对象  prototype

### 遍历对象属性

+ [for  (item in obj)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)
### [常用内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

+ [Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)

  `Math` 的所有属性与方法都是静态的

+ [Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

  创建一个 JavaScript `Date` 实例

## 类

+ 封装
+ 继承          **`extends`**
+ 多态

### 定义类

**es6语法**,使用构造函数**`constructor`**

```js
class Person{
    // 构造函数
    constructor(name,age){
        this.name=name
        this.age=age
    }
   sayhi(){
        console.log('hi');
    }
}
let ldh = new Person('刘德华',18)
console.log(ldh);
ldh.sayhi()
```

### static

	使用**`static`**声明,静态声明,只能用类访问,实例无法访问

### instanceof

使用**`instanceof`**判断某个对象是否属于某个类的实例

原理,检查对象的原型链上是否有该类的实例

### hasOwnProperty

检查对象自身属性是否含有,`in`会检查到原型链

### [私有属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_properties)

使用**`#`**定义,需要提前声明且不可删除,

私有属性无法直接访问,需要借助getter和setter

ES6 新语法   get   set

例子

```js
class Animal {
    // 私有属性需要先声明
    #name
    #age
    constructor(name, age) {
        this.#name = name
        this.#age = age
    }
    getName() {
        return this.#name
    }
    setName(name) {
        this.#name = name
    }
    //便捷
    get age() {
        return this.#age
    }
    set age(age) {
        this.#age = age
    }
}
const cat = new Animal('猫', 3)
console.log(cat.getName());
cat.setName('大大猫')
console.log(cat.getName());
console.log(cat);
console.log(cat.age);
cat.age = 20
console.log(cat.age);

```

### [继承](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/extends)

原理:`原型链`实现

使用关键字**`extends`**和**`super`**

super:重写构造行数第一行必须为super()

例子

```js
// 基类
class Animal_second {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log("animal saySomething");
    }
}
//派生类
class Cat extends Animal_second {
    // 重写构造函数
    constructor(name, age) {
        super(name);    //super()调用父类构造函数
        this.age = age
    }
    sayHi() {
        // 使用super调用父类方法
        super.sayHi()
        console.log('喵喵喵');
    }
}
const pa = new Animal_second("四不像");
console.log(pa.name);
pa.sayHi()
const cat1 = new Cat('三花', 10)
console.log(cat1.name, cat1.age);
cat1.sayHi()

```

### 原型对象

对象自身不包含的属性会在这个位置找

访问一个对象的原型对象

+ **`__proto__`**

+ **`Object.getPrototypeOf()`**

```js
const cat1 = new Cat('三花', 10)
console.log(cat1.__proto__);
console.log(Object.getPrototypeOf(cat1));
console.log(Cat.prototype === cat1.__proto__);
console.log(Object.getPrototypeOf(cat1) === cat1.__proto__);
```

原型对象中的数据

+ 对象中的数据(属性、方法)
+ constructor()  构造器

原型对象下还有原型对象

### 原型

修改原型

通过类的prototype进行定义

```js
Cat.prototype.catchMouse = function () {
    console.log(`${this.name}会抓老鼠`);
}
cat1.catchMouse()
console.log(Cat.prototype);
console.log(cat1);
```



## 原型链

实例-->原型-->原型-->null

![image-20240614180551981](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240614180551981.png)

同类对象的原型对象相同,即指向同一地址

```js
const cat1 = new Cat('三花', 10)

const cat2 = new Cat('大橘', 18)
console.log(cat1.name, cat1.age);
// 同类的不同实例原型相同
console.log(cat2 === cat1);    //false
console.log(Object.getPrototypeOf(cat2) === cat1.__proto__);//true
```



## 字符串

### 返回指定字符

+ at
+ charAt

### 截取字符串

+ substr

  substr(index,num)

### 替换字符串

+ replace

  自会替换第一个字符

### 转换为字符串

+ split('分隔符')

## 序列化

+ 转化为字符串

  `JSON.stringify`()

+ 转化为对象

  `JSON.parse()`

```js
 let person = {
            name: 'admin',
            age: 19
        }
 let str = JSON.stringify(person)
 let obj = JSON.parse(str)
 console.log(obj);
 console.log(str, typeof (str));           //string
 console.log(obj, typeof (obj));           //object
```



## 匿名函数

## 改变this指向

**注意!!!!!!箭头函数自身没有`this`,无法通过`call`,`apply`,`bind`改变`this`的指向,且箭头函数没有arguments**

第一个参数就是函数的this

### call

`call(this,argument)`

### apply

`apply(this,array[])`

## [prompt](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/prompt)()

## Alert()



# WEB APIs

## DOM

文档对象,处理html的接口,顶级对象为document

+ document    页面
+ element     标签
+ node      节点

DOM获取的节点为伪数组,即没有数组的实例属性

### [事件](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/click_event)

### 修改节点内容

+ [innerText](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/innerText)

+ [innerHTML](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML)

二者的区别:**`innerHTML`**能够识别html标签,innerText会取出空格和换行,但不能识别html标签

### 类名操作

+ className
+ [classList](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)

### 自定义属性

命名方式为     data-name

+ [getAttribute](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttribute)
+ [setAttribute](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute)
+ [removeAttribute](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/removeAttribute)
+ [dataset](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset)

### [事件流](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/click_event)

1. 捕获阶段
2. 当前目标阶段
3. 冒泡阶段

#### 常用键鼠事件

+ [鼠标事件](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent)

  + click

  + [contextmenu](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/contextmenu_event)  禁用鼠标右键菜单

  + mousemove

  + mouseenter 不会冒泡

  + mouseleave  不会冒泡

  + mouseover   会冒泡

  + [pageX](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/pageY)    获取距离页面的距离

    

+ [键盘事件](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent)

  + keyup   弹起触发
  + keydown  按下触发  (能识别**功能键**,不区分**大小写**)
  + keypress   按下触发  (不能识别**功能键**,区别**大小写**)

+ [聚焦事件](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/focus_event)
  + focus

#### 阻止默认行为

+ preventDefault

#### 阻止冒泡行为

+ [stopPropagation](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation)

### 事件委托

在父节点设置监听,通过冒泡影响子节点,通过target获取相应节点内容

### [正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)

**Regular Expression**,返回一个对象

创建正则表达式

```js
//创建正则表达式temp
let temp = /正则表达式/
// var re = new RegExp("正则表达式");
console.dir(temp);
let temp2 = '222正则表达式1'
//test()  检测到返回true,检测不到返回false
console.log(temp.test(temp2));
//exec()  获取起始位置index
console.log(temp.exec(temp2));
```

#### 元字符

##### 边界符

+ **`^`**:   以...开头      
+ **`$`** :  以...结尾
+ **`/^...$/`**:  精确匹配

##### 量词

+ **`*`**          等价以{0,}
+ **`+ `**          等价以{1,}
+ **`?`**            出现0次或者1次
+ {n}
+ {n,}
+ {n,m}

#### 字符类

+ **`[abc] `**         等价[a-c]包含其中一个返回true
+ **`[^abc] `**        等价[^a-c]包含其中一个
+ **`.`**

## [Node](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)

### [节点类型](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType)

+ 元素节点 ：1
+ 属性节点：2
+ 文本节点： 3

### 获取节点

+ parentNode
  + children
  + childNodes
  	+ [firstElementChild](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/firstElementChild)       //IE不兼容
  	+ children[index]

### 创建插入节点

+ [createElement()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement)
+ appendChild(newNode)        插入尾部
+ [insertBefore](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore)(newNode,'elementNode_Name') 插入到指定子节点前

```js
//获取父节点
let p =document.querySelector('.p')
//创建节点
let newLi= document.createElement("li")
// 设置新节点内容
newLi.innerHTML=6
// 插入到父节点p最后
p.appendChild(newLi)
 /* 
 	//插入到index位置前
 	let index = p.children[0]
    p.insertBefore(newLi,index) */
```

### 删除节点

+ removeChild()

## BOM

浏览器对象,顶级对象为window

### 事件

#### 常用事件

+ [load](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/load_event)   页面全部加载完触发
+ [DOMContentLoaded](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/DOMContentLoaded_event)  不需样式等资源文件全部加载完成便可触发

+ [resize](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/resize_event)  浏览器串口大小变化触发,配合[innerWidth](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerWidth)和[innerHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerWidth)使用

### 定时器

#### 设置定时器

+ [setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout)

+ [setInterval](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval)

#### 清除定时器

+ [clearTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/clearTimeout)

+ clearInterval

### this指向

+ 全局和函数下指向**`window`**
+ 谁调用指向谁

### 执行顺序

1. 栈中任务(同步任务)
2. 任务队列(异步任务),推到栈中执行
3. 

### [location](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/location)

![image-20240610224230196](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240610224230196.png)

+ hrel                   页面跳转
+ search               获取参数

### [navigator](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator)

### [history](https://developer.mozilla.org/zh-CN/docs/Web/API/History)

### offset

**`offset`**属性只读不可写,**`style`**可读可写

使用offset......获取,使用style更改

+ [offsetLeft](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetLeft) 

### [scroll](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scroll)

![image-20240611012928594](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240611012928594.png)

### 立即执行函数

{function(){}),如果有多个立即执行函数,需要用分号分开结束

### Storage

#### [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

生命周期为关闭浏览器窗口,单窗口生效

存储

  ```js
  sessionStorage.setItem("key", "value");
  ```

读取

  ```js
  sessionStorage.getItem("key");
  ```

删除

```js
//删除指定
sessionStorage.removeItem("key");
//全部删除
sessionStorage.clear();
```

#### [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

永久生效,多窗口

存储

  ```js
localStorage.setItem("key", "value");
  ```

读取

  ```js
localStorage.getItem("key");
  ```

删除

```js
localStorage.removeItem("myCat");
localStorage.clear();
```

# [jQuery](https://jquery.com/)

jQ,更好地操作DOM,**`$`**是jQuery的别称,相当于**`window`**

## 入口函数

```javascript
//DOM结构渲染完毕开始执行,无需等待样式等资源文件
$(function(){
    ...
}
)
//或者
jQuery(
function(){
    
})
```

## DOM与jQuery转换

+ 转化为jQuery对象

  ```js
  $('obj')
  ```

+ 转化为Dom对象

  ```js
  $('obj')[index]
  //$('obj'),get(index)
  ```


## 选择器

![image-20240611095436788](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240611095436788.png)

![image-20240611100026677](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240611100026677.png)

![image-20240611100255369](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240611100255369.png)

## CSS方法

### 修改样式

会隐式迭代

```js
$('jQuery_obj').css('key','value')
```

![image-20240611101730755](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240611101730755.png)

### 类名curd

+ [addClass('name')](https://www.runoob.com/jquery/html-addclass.html)

+ [removeClass('name')](https://www.runoob.com/jquery/html-removeclass.html)
+ [toggleClass](https://www.runoob.com/jquery/html-toggleclass.html)('name')

## HTML方法

### [basic](https://www.jquery123.com/category/effects/basics/)



+ [show( [duration ] [, easing ] [, complete ] )](https://www.jquery123.com/show/)

+ hide()
+ toggle()

### [Sliding](https://www.jquery123.com/category/effects/sliding/)

滑动

### [Fading](https://www.jquery123.com/fadeTo/)

淡入淡出

### [animate](https://www.jquery123.com/animate/)

自定义动画

### 键鼠事件

#### hover

## 属性操作

### 获取属性

```js
$(
    function(){
        //获取固有属性
		$('div').prop('key')
        //获取固有属性
        $('div').attr('key')
	}
)
```

### 设置属性

```js
$(
	function(){
          //设置固有属性
    	$('div').prop('key','value')   
          //获取自定义属性
        $('div').attr('key','value')
    }
)
```

## 遍历

### [each](https://www.jquery123.com/each/)

`.each()` 方法用来让DOM循环结构更简单更不易出错。它会迭代jQuery对象中的每一个DOM元素

### [$.each](https://www.jquery123.com/jQuery.each/)

## [尺寸](https://www.jquery123.com/category/manipulation/style-properties/)

![image-20240611122026240](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240611122026240.png)

## 位置

## 带定位

+ position
