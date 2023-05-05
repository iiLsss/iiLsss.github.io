# 使用 structuredClone() 方法进行深拷贝

当我们需要将 JavaScript 对象从一个上下文复制到另一个上下文时，例如在 Web Workers 之间传递消息，通常我们需要深拷贝。深拷贝意味着复制对象及其所有可达属性，这样得到的副本与原始对象相互独立。在本文中，我们将介绍 `structuredClone()` 方法，这是一个用于执行深拷贝的实用方法。

## 一、structuredClone() 简介

`structuredClone()` 方法是一个在 JavaScript 中执行深拷贝的原生方法。它可以复制对象及其所有可达属性，但不会复制对象的方法。`structuredClone()` 支持大部分内置类型，例如数组、对象、Map、Set、Date、RegExp 等。它还支持一些特殊对象，如 ArrayBuffer、ImageData、Blob、File 等。

**特点**
  - 不需要引入外部库
  - 支持循环引用
  - 支持大部分内置类型
  - 不会复制对象的方法
  
## 二、使用示例

1. 复制普通对象

```js
const originalObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "traveling"],
}
const clonedObject = structuredClone(originalObject);

console.log(clonedObject);
// 输出：{ name: 'John', age: 30, address: { city: 'New York', country: 'USA' }, hobbies: [ 'reading', 'traveling' ] }
```
2. 复制带循环引用的对象

```js
const personA = {
  name: "Alice",
  friend: null,
};

const personB = {
  name: "Bob",
  friend: personA,
};

personA.friend = personB;

const clonedPersonA = structuredClone(personA);

console.log(clonedPersonA);
// 输出：{ name: 'Alice', friend: { name: 'Bob', friend: [Circular] } }
```
3. 复制特殊对象

```js
const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
view.setUint32(0, 42);

const clonedBuffer = structuredClone(buffer);
const clonedView = new DataView(clonedBuffer);

console.log(clonedView.getUint32(0));
// 输出：42
```

4. 复制带有 Map 和 Set 的对象

```js
const originalObject = {
  name: "John",
  scores: new Map([
    ["math", 95],
    ["english", 88],
  ]),
  friends: new Set(["Alice", "Bob"]),
};

const clonedObject = structuredClone(originalObject);

console.log(clonedObject);
// 输出：{ name: 'John', scores: Map(2) { 'math' => 95, 'english' => 88 }, friends: Set(2) { 'Alice', 'Bob' } }
```

5. 复制 RegExp 和 Date 对象
```js
const originalObject = {
  birthDate: new Date("1990-01-01"),
  phoneNumberRegex: /^\d{3}-\d{3}-\d{4}$/,
};

const clonedObject = structuredClone(originalObject);

console.log(clonedObject);
// 输出：{ birthDate: 1990-01-01T00:00:00.000Z, phoneNumberRegex: /^\d{3}-\d{3}-\d{4}$/ }
```
## 三、局限性

虽然 structuredClone() 能够满足大部分深拷贝的需求，但它也有一些局限性：

- 不能复制对象的方法
- 不能复制 Symbol 属性
- 不能复制 Error 对象、Function 对象、DOM 对象等
如果你需要复制这些不受支持的类型，可以考虑使用第三方库，如 lodash 的 _.cloneDeep()。

### 兼容性

[caniuse](https://caniuse.com/?search=structuredClone)

## 四、结论

总之，structuredClone() 是一个非常实用的深拷贝工具，适用于大多数场景。在开发过程中，可以根据实际需求选择使用 structuredClone() 进行深拷贝，如果您需要更高级的功能或对特殊类型的对象进行深拷贝，可以考虑使用第三方库，如 lodash 的 _.cloneDeep()。在实际开发过程中，请根据具体需求选择合适的深拷贝方法。

参考链接：
- [structuredClone](https://developer.mozilla.org/zh-CN/docs/Web/API/structuredClone)
- [Deep-copying in JavaScript using structuredClone](https://web.dev/structured-clone/)
