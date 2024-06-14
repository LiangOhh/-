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


## [数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

### crud

+ push 尾部追加
+ unshift  头部追加
+ pop  删除末尾一个元素,返回值为**`被删除元素`**
+ shift 删除头部第一个元素,返回值为**`被删除元素`**
+ [splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 从index开始删除

### [sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

 sort()排序只看第一位数,故超过一位数排序会出错

使用`sort(compareNumbers)`进行优化

```js	
function compareNumbers(a, b) {
  return a - b;
}
```

### [map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

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

### [join](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

### [filter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

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

使用**`instanceof`**判断某个实例是否属于某个类

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

## [argument](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)



**`arguments`** 是一个对应于传递给函数的参数的类数组对象。

可通过**arguments[index]**获取传递值

## 匿名函数

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
