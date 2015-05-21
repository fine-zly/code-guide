# 前端规范

## 文件规范

### 项目命名

项目名全部采用小写方式，以中划线`-`分割。比如：my-project-name

### 目录名

目录名与项目名规则相同，有复数结构时，采用复数命名法。比如：scripts, styles, images, data-models

### HTML文件命名

多个单词组成时，采用中划线连接方式。比如说：error-report.html

### JavaScript文件命名

所有js文件名，多个单词组成时，采用中划线连接方式。比如说：账号模型文件 account-model.js

### CSS文件命名

多个单词组成时，采用中划线连接方式。比如说：retina-sprites.css

### 文件组织

每个HTML页面引用的文件由三类组成。
1. 库文件。比如jquery.js、bootstrap.css
2. 公共文件，即项目中用到的公共方法或样式。比如common.js、common.css
3. 独立的文件，即每个页面中中独有的js或者css文件。比如example.html应引用example.js以及example.css

## HTML规范

### 语法

- 使用软tab即四个空格，来进行缩进。
- 标签上的属性值，使用双引号。
- id, class, name等命名为单词字母小写，单词间以 `-` 区分。
- id与name必须保证页面唯一。
- 标签名必须使用小写字母。比如，`<p></p>`
- 尽量使用语义化标签

> p - 段落  
> h1,h2,h3,h4,h5,h6 - 层级标题  
> strong,em - 强调  
> ins - 插入  
> del - 删除  
> abbr - 缩写  
> code - 代码标识  
> cite - 引述来源作品的标题  
> q - 引用  
> blockquote - 一段或长篇引用  
> ul - 无序列表  
> ol - 有序列表  
> dl,dt,dd - 定义列表  

- 自定义属性建议以`data-xxx`命名

### 一个标准的HTML文件

```HTML
<!DOCTYPE html>
<html lang="zh-cn">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1 ">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
        <link href="ico/favicon.ico" rel="shortcut icon" type="image/x-icon">

        <title>前端规范</title>

        <link rel="stylesheet" href="main.css">
    </head>
    <body>

    <script src="http://libs.useso.com/js/jquery/1.11.1/jquery.min.js" type="text/javascript"></script>
    </body>
</html>
```

## CSS规范

### 语法

- 使用四个空格的 soft tabs
- 这是保证代码在各种环境下显示一致的唯一方式。
- 使用组合选择器时，保持每个独立的选择器占用一行。
- 为了代码的易读性，在每个声明的左括号前增加一个空格。
- 声明块的右括号应该另起一行。
- 每条声明 : 后应该插入一个空格。
- 每条声明应该只占用一行来保证错误报告更加准确。
- 所有声明应该以分号结尾。虽然最后一条声明后的分号是可选的，但是如果没有他，你的代码会更容易出错。
- 逗号分隔的取值，都应该在逗号之后增加一个空格。比如说box-shadow
- 不要在颜色值 rgb() rgba() hsl() hsla()和 rect() 中增加空格，并且不要带有取值前面不必要的 0 (比如，使用 .5 替代 0.5)。This helps differentiate multiple color values (comma, no space) from multiple property values (comma with space).
- 所有的十六进制值都应该使用小写字母，例如 #fff。因为小写字母有更多样的外形，在浏览文档时，他们能够更轻松的被区分开来。
- 尽可能使用短的十六进制数值，例如使用 #fff 替代 #ffffff。
- 为选择器中的属性取值添加引号，例如 input[type="text"]。 [他们只在某些情况下可有可无](http://mathiasbynens.be/notes/unquoted-attribute-values#css)，所以都使用引号可以增加一致性。
- 不要为 0 指明单位，比如使用 margin: 0; 而不是 margin: 0px;。

```CSS
/* Bad CSS */
.selector, .selector-secondary, .selector[type=text] {
    padding: 15px;
    margin: 0px 0px 15px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 1px 2px #CCC, inset 0 1px 0 #FFFFFF
}

/* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
    padding: 15px;
    margin-bottom: 15px;
    background-color: rgba(0,0,0,.5);
    box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

### 声明顺序

相关的属性声明应当归为一组，并按照下面的顺序排列：

1. Positioning 定位
2. Display & Box Model 显示与盒模型
3. Color 颜色
4. Text 文字
5. Other 其他

由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。

其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。

这样的书写顺序可以提高浏览器渲染DOM的性能。

推荐文章：
[Poll Results: How do you order your CSS properties?](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)。

完整的属性列表及其排列顺序请参考 [Recess](http://twitter.github.com/recess)。

```CSS
.declaration-order {
  /* 定位 */
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  /* 显示与盒模型 */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid #333;
  margin: 10px;

  /* 颜色 */
  background: #000;
  color: #fff

  /* 文字 */
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: right;

  /* 其他 */
  cursor: pointer;
}
```

### 媒体查询位置

尽量将媒体查询的位置靠近他们相关的规则。不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部。这样做只会让大家以后更容易忘记他们。这里是一个典型的案例。

```CSS
.element { ... }
.element-avatar { ... }
.element-selected { ... }

@media (min-width: 480px) {
    .element { ...}
    .element-avatar { ... }
    .element-selected { ... }
}
```

### 代码组织

- 以组件为单位组织代码。
- 制定一个一致的注释层级结构。
- 使用一致的空白来分割代码块，这样做在查看大的文档时更有优势。
- 当使用多个 CSS 文件时，通过组件而不是页面来区分他们。页面会被重新排列，而组件移动就可以了。

```CSS
/*
 * Component section heading
 */

.element { ... }


/*
 * Component section heading
 *
 * Sometimes you need to include optional context for the entire component. Do that up here if it's important enough.
 */

.element { ... }

/* Contextual sub-component or modifer */
.element-heading { ... }
```

### IE Hack List

```CSS
/* 针对ie的hack */
 selector {
     property: value;     /* 所有浏览器 */ 
     property: value\9;   /* 所有IE浏览器 */ 
     property: value\0;   /* IE8 */
     +property: value;    /* IE7 */
     _property: value;    /* IE6 */
     *property: value;    /* IE6-7 */
 }
```

### 性能建议

- 不推荐使用IE的filter
- 所有的动画使用CSS3动画实现，低版本IE应不予支持（写一个JS动画消耗的性能很大，又很浪费时间，边际效益提升有限）

## JavaScript规范

### 语法

- 使用四个空格的 soft tabs
```javascript
if (typeof qqfind === "undefined" ||
    typeof qqfind.cdnrejected === "undefined" ||
    qqfind.cdnrejected !== true) {
    url = "http://pub.idqqimg.com/qqfind/js/location4.js";
} else {
    url = "http://find.qq.com/js/location4.js";
}
```
- Statement 之后一律以分号结束， 不可以省略
- 在方法之间、单行或多行注释前、逻辑块之间加入空行，增加可读性
- 标准变量采用驼峰标识
- 使用的ID的地方一定全大写
- 使用的URL的地方一定全大写, 比如说 reportURL
- 常量采用大写字母，下划线连接的方式
- 构造函数，大写第一个字母
```javascript
var thisIsMyName;

var goodID;

var MAX_COUNT = 10;

function Person(name) {
    this.name = name
}
```
- 字符常量统一使用单引号`'`
- if else 前后留有空格
```javascript
if (condition) {
    doSomething();
} else {
    doSomethingElse();
}
```

### undefined使用场景
- 永远不要直接使用undefined进行变量判断
- 使用字符串 "undefined" 对变量进行判断
```javascript
// Bad
var person;
console.log(person === undefined);    //true

// Good
console.log(typeof person);    // "undefined"
```

### 括号对齐
- 标准示例 括号前后有空格， 花括号起始 不另换行，结尾新起一行
- 花括号必须要， 即使内容只有一行， 决不允许右边第二种情况
- 涉及 if for while do...while  try...catch...finally的地方都必须使用花括号

```javascript
// Good
if (condition) {
    doSomething();
}
// Bad
if (condition)
    doSomething();
    doSomethingElse();
```

### 变量声明
- 所有函数内变量声明放在函数内头部，只使用一个 var(多了JSLint报错)， 一个变量一行， 在行末跟注释
```javascript
function doSomethingWithItems(items) {

    var value = 10,    // 注释
        result = value + 10,    // 注
        i,    // 注释
        len;    // 注释

    for (i=0, len=items.length; i < len; i++) {
        doSomething(items[i]);
    }
}
```

### 函数声明
- 函数声明（function declaration）和函数表达式（function expression）的不同，函数声明的()前后必须有空格，而函数表达式在有函数名的时候不需要空格， 没有函数名的时候需要空格
- 应尽量使用函数表达式
- 函数调用括号前后不需要空格
- 立即执行函数的写法, 最外层必须包一层括号
```javascript
function doSomething(item) {
    // do something
}

// good
var doSomething = function (item) {
    // do something
}


// Good
doSomething(item);

// Bad: Looks like a block statement
doSomething (item);


// Good
var value = (function() {

    // function body
    return {
        message: "Hi"
    }
}());
```

### 建议
- 完全避免 `==` `!=` 的使用， 用严格比较条件 `===` `!==`
- `eval` 禁用
- `with` 禁用
- 使用局部变量缓存反复查找的对象(包括但不限于全局变量、dom查询结果、作用域链较深的对象)
```javascript
 // 缓存对象
 var getComment = function() {
     var dom = $("#common-container"),               // 缓存dom
         appendTo = $.appendTo,                      // 缓存全局变量
         data = this.json.data;                      // 缓存作用域链较深的对象

 }
```
- 当需要缓存`this`时必须使用`self`变量进行缓存
```javascript
// 缓存this
 function Row(name) {
     var self = this;

     self.name = name;
     $(".row").click(function() {
         self.getName();
     });
 }
```


## 引用 & 参考

[Code Guide by @AlloyTeam](http://alloyteam.github.io/code-guide/)  
[前端代码规范 及 最佳实践](http://coderlmn.github.io/code-standards/)  
[Baidu Front-end Style Guides](http://zhuanlan.zhihu.com/fuyun/19884834)  
[关于CSS的编码规范](http://www.cnblogs.com/hustskyking/p/css-spec.html)  
[前端编码规范之JavaScript](http://www.cnblogs.com/hustskyking/p/javascript-spec.html)  
[Popular Coding Convention on Github](http://sideeffect.kr/popularconvention#javascript)  
