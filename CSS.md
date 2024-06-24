# [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 基础选择器

+ 通配符选择器

  ```css
  *{
      ......
  }
  ```

## 复合选择器

- [ ] 子选择器

  使用   **>**  选择

  ```css
  父元素>子元素{
      ...
  }
  ```

- [ ] 并集选择器

  使用  **,**  分割

  ```css
  元素1,元素2{
      ...
  }
  ```

- [ ] 伪类选择器

  使用  **:**     ,如  **[:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)**  常用于添加样式,LVHA如下

  ![image-20240606234607370](https://raw.githubusercontent.com/LiangOhh/MyPic/master/test/pic202406181921725.png)

## [字体](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font)

+ [font-family](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)   设置字体

+ [font-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style) 设置文字斜体

## [文本](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

### text-align

 	设置文本内容的水平对齐方式

### [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)

​		设置文本划线方式,常用于消除<a>标签的下划线

### [text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)

​		设置文本首行缩进

### [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

## 块级元素

+ 转化为行内元素:display :inline;

## 行内元素

+ 宽高设置无效
+ 默认宽度为本身
+ 只能放其他行内元素或文本
+ a标签内可放块级元素
+ 将元素转化为块级元素：display：block

## 行内块元素

input、img、td

可设置宽高、边距

## [背景图片](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

+ background-image:url()

+ [background-repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat):

+ [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position):

+ [background-attachment]([background-attachment - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment))

## 盒子模型

### border

### [border-collapse]()  

 合并边框

### padding

如果元素节点没有width属性(行内元素),则不会撑开盒子

### margin

利用外边距让块级盒子水平居中

1. 指定宽度width
2. 左右margin设置为auto
3. 即(**margin:0 auto**)

给行内元素或者行内块元素的父级节点增加上述外边距,也可实现水平居中效果

+ 父子嵌套的元素,同时具有外边距时会出现塌陷

解决方案(3种):

+ 给父元素定义边框
+ 给父元素定义内边距
+ 给父元素添加属性:   **overflow:hidden**

### [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

![image-20240607025414449](https://raw.githubusercontent.com/LiangOhh/MyPic/master/test/pic202406181921663.png)

![image-20240607025440309](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240607025440309.png)

## 浮动

[float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

使元素具有**行内块元素**特性(脱标),宽度由浮动元素的内容宽度，且不再保留原来位置。故需要清除浮动

### 清除浮动

[clear:both](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)

+ 额外标签法

  找到最后一个元素(必须为块级元素),添加clear:both

  

[overflow:hidden](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)

+ 给父元素添加属性overflow:hidden

:after

+ 给父元素添加伪元素:after

  ```css	
  .clearfix:after{
      content:"";
      display:block; //关键
      height:0;
      clear:both;  //关键
      visibility:hidden;
  }
  ```

+ 双伪元素闭合

  ```css
   .clearfix:before,.clearfix:after{
      content:"";
      display:table; //关键
  }
  .clearfix:after{
      clear:both;
  }
  .clearfix{
      *zoom:1
  }
  ```

  

## 定位

[position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

脱离标准流就不用考虑外边距合并问题

### static

标准流

### relative

相对定位,主要用于给绝对定位做限制,会保留原来定位(不脱标)

### absolute

绝对定位,脱标,会压住文字(浮动则不会)

+ 在没有父节点relative为限制时,参照物为浏览器dom
+ 最近一级父节点有relative为限制,参照物为最近一级父节点

### fixed

固定定位,以**浏览器可视窗口**作为基准,**脱标**

### sticky

粘性定位,**不脱标**

### 子绝父相

### z-index

### [绝对定位盒子居中算法](https://www.bilibili.com/video/BV14J4114768?p=236&vd_source=cd23ea5c7661de9d8cdf7a48eaf4f26c)

## [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

## [visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)

## [vertical-align](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)

 常用设置为表单内元素(如图片和文字)垂直对齐方式

## 文本溢出省略号

### [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)

+ 单行省略号

  ```css
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis
  ```

+ 多行省略(需考虑兼容性)

  ```css
  overflow:hidden;
  text-flow:ellipsis;
  /* 弹性伸缩盒子模型 */
  display:-webkit-box;
  /* 展示行数 */
  -webkit-line-clamp:2;
  /* 设置对齐方式 */
  -webkit-box-orient: vertical
  ```

+ 

# CSS3

## [属性选择器](https://www.runoob.com/css/css-attribute-selectors.html)

![image-20240608003819650](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240608003819650.png)

## 结构伪类选择器

+ E:first-child
+ E:last-child

+ [E:nth-child(n)](https://www.runoob.com/cssref/sel-nth-child.html)

​					n可自定义逻辑

​					n  或者 odd:奇数

​					2n 或者 even:偶数

+ [E:nth-of-type](https://www.runoob.com/cssref/sel-nth-of-type.html)

## 伪元素选择器

必须要有**content:''**

### ::before

### ::after

## [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

常用**box-sizing:border-box**

## 常用函数
### [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)

+ blur(px)        模糊
+ contrast(%)   对比

### [calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)

## 动画

+ [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

​			谁过渡给谁加

## [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

+ translate(X,Y)     平移
+ rotate(deg)           旋转
+ scale(x,y)             缩放

## [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

设置转换中心点,常配合transform:rotate()使用

## [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

动画

定义动画

```css
@keyframes name {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

## [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)

### [animation-name](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name)

### [animation-duration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration)

```css
animation-name:name;
animation-duration:s;持续时间 
```

# 移动端开发

## [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)布局

使用flex后,float、clear和vertical-align将失效

### [flex-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction)

设置主轴方向,默认为X轴方向,常用于更改**垂直方向排列**

### [flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)

默认不换行

### [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)

控制主轴上子元素排列方式

### [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)

控制侧轴子元素排列方式(单行)

### [align-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content)

控制侧轴子元素排列方式(换行排列)

### [flex-flow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow)

设置主轴方向和是否换行

## [媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media)

### [@media type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media)
