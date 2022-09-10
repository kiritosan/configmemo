https://www.bilibili.com/video/BV1vA4y197C7?p=101&spm_id_from=pageDriver&vd_source=8237c1b247b860b4776b5cf7378d3908

## 运算符

### 逻辑

&&

||

?? (difference bwtween falsy and nullish)

### 赋值

||=

??=

&&=

optional chaining operator

objdect?.open

objdect.fn?.(1,2)

## EC 和 VE

## 对象字面量增强

```javascript

{a}

{
  fn(){}
}

```

## 对象和数组的遍历

### obj

因为对象不 iterable,所以需要使用 Object 的方法 convert 对象(map 可迭代,所以不需要)

for of (Object.keys(obj) | Object.values(obj) | Object.entries(obj))

### array

for of (array.entries()|array)

### map

for (const [k, v] of map)

### difference

array has it's entries method and it's iterable, but obj is not iterable.

## 内置数据结构的选择(array vs set | object vs map)

set 当需要避免重复值的时候使用

https://www.bilibili.com/video/BV1vA4y197C7?p=101&spm_id_from=pageDriver&vd_source=8237c1b247b860b4776b5cf7378d3908

object 的 key 只能是 string

value 是函数的时候需要使用 object,此时这个函数是这个对象的方法

## 字符串处理

```javascript
.length

.indexOf

.lastIndexOf

.slice(index, index(可以是负数))

.replace

.includes

.toUpperCase

.toLowerCase

.startsWith

.split

.join

.padStart

.padEnd

.repeat
```

## call apply and bind

改变 this 的指向

.call(this, 参数)

.call(this, ...参数列表)

.apply(this, 参数列表)

## this 指向问题

| 调用方法      | 指向                                      |
| ------------- | ----------------------------------------- |
| 常规函数调用  | 严格模式下 undefined⋅floppy 模式下 Window |
| 方法调用      | .前面的对象                               |
| new 构造函数  | 新生成的对象                              |
| eventlistener | 指向元素                                  |

## 数组方法

es2022 新增 at (可以使用负索引拿到对应 index 的值)

<!-- 获取最后一个元素 -->

```javascript
const array = [1, 2, 3];
console.log(array[array.length - 1]);
console.log(array.slice(-1)[0]);
console.log(array.at(-1));
```

### 相等

```javascript
array.includes(-120); // -> true or false
```

### 条件

#### some 有就行

```javascript
array.some((val) => val > 500); // -> true or false
```

#### every 都得是

```javascript
array.every((val) => val > 500); // -> true or false
```

#### flat

```javascript
array.flat(3);
array.flat(Infinity);
```

#### sorting array

```javascript
array.sort(fn);

// return < 0  a, b
// return > 0  b, a

// if ascending
array.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

// simplify ascending
array.sort((a, b) => a - b);

// descening
array.sort((a, b) => b - a);
```

### 生成 array

```javascript
1. 字面量
const arr1 = [1,2,23]

2. new Array() 参数为值
cosnt arr2 = new Array(1,23)

3. new Array() 参数为数组长度 + arr.fill() 方法 参数为数组值
const arr3 = new Array(3) <!-- WARN: 此方法生成的数组元素为empty 可能会导致错误 -->
arr3 调用 map 方法不能返回想要的结果
想要填充 arr3 只能使用 fill
arr3.fill(1)

4. Array.from() 方法
Array.from({length:7}, () => 1)
Array.from({length:7}, (_, i) => i+1)

Array.from(document.querySelectorAll('.class'), cb) // 从类数组转换为数组 第二个参数可以当成map的回调

[...document.querySelectorAll('.class'), cb] // 另一种类数组转换为数组的方法
```

## 数组方法的选择 23 选 1

https://www.bilibili.com/video/BV1vA4y197C7?p=155&spm_id_from=pageDriver&vd_source=8237c1b247b860b4776b5cf7378d3908

### 场景

1. to mutate original array

- 增
  - .push
  - .unshift
- 删
  - .pop
  - .shift
  - .splice
- 其他
  - .reverse
  - .sort (可以通过 slice()方法来防止原来数组改变)
  - .fill

2. a new array <!-- 原数组不会改变 -->

- .map
- .filter
- .slice
- .concat

- .flat
- .flatMap

3. an array index

- .indexOf <!-- based on value -->
- .findIndex <!-- base on test condition (a cb) -->

4. an array element

- .find

5. know if array includes

- .includes

- .includes <!-- value -->
- .some <!-- test condition (a cb) -->
- .every <!-- test condition (a cb) -->

6. a new string

- .join

7. transform to value

- .reduce

8. to just loop array

- .forEach

## number

```javascript
// conversion

Number('23') + '23';

// parsing

Number.parseInt('30px', 10);
Number.parseInt('e23', 10);

Number.parseInt('2.5rem');
Number.parseFloat('.2.5rem');

Number.isNaN(20);
Number.isNaN('20');
Number.isNaN(+'20');
Number.isNaN(23 / 0);

Numeber.isFinite(20);
Numeber.isFinite('20');
Number.isFinite(+'20');
Number.isFinite(23 / 0);

Number.isInteger();

Math.sqrt();
25 ** (1 / 2);

Math.max();

Math.trunc(Math.random() * 6 + 1);

const randomInt = (min, max) => Math.trunc(Math.random(max - min) + 1) + min;

// Rounding integers
Math.trunc(23.3); // 截取

Math.round(23.3); // 四舍五入
Math.round(23.9);

Math.ceil(23.3);
Math.ceil(23.9);

Math.floor(23.3);
Math.floor(23.9);

Math.fround(23.3);
Math.fround(23.9);

Math.fround('23.9'); // type coercion 类型强制

Math.trunc(-23.3); // 截断
Math.floor(-23.3)(
  // 往小的一方

  // rounding decimals

  // boxing
  2.7
).toFixed(0) + // 得到一个字符串
  (2.345).toFixed(2); // 字符串变number
```

### 数字分隔符

```javascript
const diameter = 287_460_000_000;
```

## guojihua

```javascript
const now = new Date();
const options = {
  hours: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
new Intl.DateTimeFormat('en-US', options).format(now);

const locale = navigator.language;
console.log(locale);

new Intl.DateTimeFormat(locale, options).format(now);

const num = 399.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
};

new Intl.NumberFormat('en-US').format(num);
new Intl.NumberFormat('de-DE').format(num);
```

## timer

```javascript
const startLogOutTimer = function () {
  let time = 120;

  const timer = setInterval(() => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    lableTimer.textContent = `${min}:${sec}`;

    time--;

    if (time === 0) clearInterval(timer);
  }, 1000);
};
```

## DOM

```javascript
document.getElementByID(); // 返回NODE list(死的 不会自己更新)
document.getElementsByTagName(); // 返回HTML LIST(活得, 当页面改变, 变量的值也会改变)

// create elements
const msg = document.createElement('div');
msg.classList.add('coolie-messgae');
// msg.textContent = 'test';
msg.innerHTML = 'test<button class='btn'>gotit</button>';

header.prepend(msg);
header.append(msg); // 一个元素不能同时出现在两个地方
// msg在header的前面, 之后移动到了header的后面 而不是有两个msg
header.append(msg.cloneNode(true));

header.before(msg);
header.after(msg);

// delete elements

document.querySelector('.btn').addEventListener('click', function() {
    message.remove() // new way
    message.parentElement.remvoeChild(message) // old way
  })

// style attributes 属性 classes 类
msg.style.color
msg.style.backgroundcolor

msg.alt
msg.src
msg.className

msg.designer // designer不是标准属性 读不出来 需要使用api
msg.getAttribute('designer')
msg.setAttribute('company', 'bankist')

// data attributes 数据属性

<img data-version-number = '3.0' />
img.dataset.versionNumber

// Classes

logo.calssList.add('c', 'j')
logo.calssList.remove('c', 'j')
logo.calssList.toggle('c')
logo.calssList.contains('c')

// 不应使用 会覆盖所有之前存在的类,并且只能赋值一个类
logo.className = 'test'
```

```javascript
h1.childNodes;
h1.children;

h1.parentNode;
h1.parentElement;

h1.closest('.header').style.background = 'xxx';
```

## 滚动

```javascript
const s1coords = section1.getBoundingClientRect();

window.pageXOffset;
window.pageYOffset;

document.documentElement.clientHeight;
document.documentElement.clientWidth;

window.scrollTo(
  s1coords.left + window.pageXOffset,
  s1coords.top + window.pageYOffset
);

window.scrollTo(
  left: s1coords.left + window.pageXOffset,
  top: s1coords.top + window.pageYOffset,
  behavior: 'smooth',
);

// 现代的方法
section1.scrollIntoView({behavior: 'smooth'})

```

## event

https://www.bilibili.com/video/BV1vA4y197C7?p=179&spm_id_from=pageDriver&vd_source=8237c1b247b860b4776b5cf7378d3908

```javascript
e.target;
// 事件首次发生的地方(元素) 不是事件处理函数绑定的元素
e.currentTarget;
// 附加event handler的元素

// addEventListener函数里面的this是绑定事件处理程序的元素;
// this === e.currentTarget

// 停止传播 能不用绝对不用
e.stopPropagation();
```

## observer

https://www.bilibili.com/video/BV1vA4y197C7?p=185&vd_source=8237c1b247b860b4776b5cf7378d3908

```javascript
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};
const obsOptions = {
  root: null,
  threshold: 0.1,
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
```

```javascript
/* lazyload img */
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');

  entry.target.addEventListener('load', function () {});

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
```

## DOM lifecycle

1. DOMContentLoaded
2. load
3. beforeunload e.returnValue = ''

https://www.bilibili.com/video/BV1vA4y197C7?p=200&vd_source=8237c1b247b860b4776b5cf7378d3908
