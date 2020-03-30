import '@/style/index.less';
import '@/iconfont/iconfont.css';

// function add(x, y) {
//   return x + y;
// }
// function dec(x, y) {
//   return x - y;
// }

// console.log(add(1, 4));
// console.log(dec(1, 4));

// var that;
// class Star {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     that = this;
//   }
// }

// const lin = new Star('lin', 18);
// const sb = new Star('sb', 18);
// console.log(that);
// console.log(that === lin);
// console.log(that === sb);
// console.log(that);

// class Father {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   sum() {
//     console.log(this.x + this.y);
//   }
// }

// class Son extends Father {
//   constructor(x, y) {
//     // this.x = x;
//     // this.y = y;
//     super(x, y);
//   }
// }

// const son = new Son(1, 2);
// son.sum();

// class ==============================================
// class Star {
//   constructor(name) {
//     this.name = name;
//     this.hellox = function() {
//       console.log(`大家好，我是${this.name}`);
//     };
//   }
//   hello() {
//     console.log(`大家好，我是${this.name}`);
//   }
// }

// const zzh = new Star('渣渣辉');
// const zzh2 = new Star('zzh');
// zzh.hello();
// zzh.hellox();
// console.log(zzh.hello === zzh2.hello); // true 类中的方法会占用同一个内存空间，会保存在同一个原型prototype里
// console.log(zzh.hellox === zzh2.hellox); // false 构造函数属性中方法属于私有属性，不同类创建出来的实例对象的私有方法，占用不同的内存空间

// 构造方法 ============================================
// function Starx(name) {
//   this.name = name;
//   this.hellox = function() {
//     console.log(`大家好，我是${this.name}`);
//   };
// }

// 如果通过prototype.xx赋值的函数，是添加的对象属性，不会清除原先的prototype
// Starx.prototype.hello = function() {
//   console.log(`大家好，我是${this.name}`);
// };
// Starx.prototype.hi = function() {
//   console.log(`hi，我是${this.name}`);
// };

// 如果通过合并的方法，直接将prototype等于某个值的时候，原先的prototype就不复存在，需要利用constructor指向原来的构造函数
// Starx.prototype = {
//   constructor: Starx,
//   hello: function() {
//     console.log(`大家好，我是${this.name}`);
//   },
//   hi: function() {
//     console.log(`hi，我是${this.name}`);
//   },
// };

// const lin = new Starx('lin');
// const lin2 = new Starx('lin2');
// lin.hello();
// lin.hellox();
// console.log(lin.hello === lin2.hello); // true 构造函数原型prototype里的方法会占用同一个内存空间，会保存在同一个原型prototype里
// console.log(lin.hellox === lin2.hellox); // false 构造函数属性中方法属于私有属性，不同构造函数创建出来的实例对象的私有方法，占用不同的内存空间

// 输出class和构造函数
// console.log(zzh);
// console.log(lin);

// 原型链
// console.log(Starx.prototype === lin.__proto__); // true

// console.log(Starx.prototype); // 指向Starx的原型对象
// console.log(lin.__proto__); // 指向Starx的原型对象

// console.log(Star.prototype); // 指向Star的原型对象
// console.log(zzh.__proto__); // 指向Star的原型对象

// console.log(Star.prototype.constructor === Star); // true
// console.log(zzh.__proto__.constructor === Star); // true

// console.log(Starx.prototype.constructor === Starx); // true
// console.log(lin.__proto__.constructor === Starx); // true

// 构造函数的继承
// function Father(name, age) {
//   // 下面的call会将这里的this修改成Son的this，也就是son实例对象
//   this.name = name;
//   this.age = age;
// }
// Father.prototype.hello = function() {
//   console.log('hello');
// };
// function Son(name, age, job) {
//   // this 指向子构造函数的实例对象
//   // 调用父构造函数，通过call修改付构造函数的this指向
//   Father.call(this, name, age);
//   this.job = job;
// }
// // 如果要继承父构造函数的方法，
// // 不能直接将Father.prototype给子构造函数的原型
// // 一旦子构造函数有自己的方法，那么父构造函数会跟着一起变化
// // 可以借助原型链，将子构造函数的原型指向父构造函数的实例对象
// // 通过原型连，找到父构造函数的方法，不会影响父构造函数的原型
// Son.prototype = new Father();
// // 不要忘记将Son的prototype的指向
// Son.prototype.constructor = Son;
// const son = new Son('lin', 23, 'front');
// console.log(son);
// const arr = [1, 4, 3, 5, 8, 7, 44, 12, 44];

// console.log(Math.max(...arr));

// const fn = (n) => {
//   // throw this + 'is not a function';
//   // if (n <= 2) return n;
//   return n <= 2 ? n : n * fn(n - 1);
// };

// const fob = (n) => {
//   if (n <= 0) throw '请输入大于0的整数';
//   return n <= 2 ? 1 : fob(n - 1) + fob(n - 2);
// };

// console.log(fn(3));
// console.log(fn(4));
// console.log(fob(50));

// const fn = () => {
//   const num = 10;
//   return () => {
//     return num;
//   };
// };

// const f = fn();
// console.log(f());

// (() => {
//   console.log(123);
// })();

// var name = 'window';
// var xx = 'window';

// var obj = {
//   xx: 'obj',
//   getName: function() {
//     return function() {
//       return this;
//     };
//   },
// };

// console.log(obj.getName());
// var f = obj.getName();
// console.log(f);
// console.log(f());

// console.log(this)

// const obj = {
//   name: 'lin',
//   age: 23,
//   game: ['lol', 'ow', 'mc', 'dnf'],
//   dnfer: {
//     name: 'miaomiaoguai',
//     job: 'lancer',
//   },
// };

// // // 利用对象拓展运算符进行浅拷贝
// // const copyObj = { ...obj };

// // // 利用Object的assign方法进行浅拷贝
// // const copyx = {};
// // Object.assign(copyx, obj);

// // // 查看拷贝结果
// // console.log(obj);
// // console.log(copyObj);
// // console.log(copyx);

// // // 修改引用数据，浅拷贝跟着变
// // obj.game.pop();
// // console.log(obj);
// // console.log(copyObj);
// // console.log(copyx);

// // // 修改普通数据，浅拷贝不会变
// // obj.age = 24;
// // console.log(obj);
// // console.log(copyObj);
// // console.log(copyx);

// const deepCopy = (oldObj) => {
//   let newObj;
//   if (oldObj instanceof Array) {
//     newObj = [];
//     let length = oldObj.length;
//     while (length--) {
//       newObj[length] = deepCopy(oldObj[length]);
//     }
//     return newObj;
//   } else if (oldObj instanceof Object) {
//     newObj = {};
//     for (let key in oldObj) {
//       newObj[key] = deepCopy(oldObj[key]);
//     }
//     return newObj;
//   } else {
//     return oldObj;
//   }
// };

// const deepClone = (newObj, oldObj) => {
//   for (var k in oldObj) {
//     if (oldObj[k] instanceof Array) {
//       newObj[k] = [];
//       deepClone(newObj[k], oldObj[k]);
//     } else if (oldObj[k] instanceof Object) {
//       newObj[k] = {};
//       deepClone(newObj[k], oldObj[k]);
//     } else {
//       newObj[k] = oldObj[k];
//     }
//   }
// };

// // const copyx = deepCopy(obj);
// const clonex = {};
// deepClone(clonex, obj);

// // 修改引用数据，深拷贝不变
// obj.game.pop();
// console.log(obj);
// console.log(clonex);

// // 修改普通数据，深拷贝不变
// obj.age = 24;
// console.log(obj);
// console.log(clonex);

// const reg = /^\w{2}$/
// console.log(reg.test(123));

// const fruits = [{ name: 'apple' }, { name: 'banana' }];
// console.log(fruits.find((item) => item.name === 'banana'));
// console.log(fruits.includes({ name: 'apple' }));
// console.log(fruits.findIndex((item) => item.name === 'banana'));

// const info = 'this is a string';
// console.log(info.includes('string'));
// console.log(info.includes('is'));

// const sum = (...number) => number.reduce((pre, curr) => pre + curr);

// console.log(sum(1, 23, 23, 1.2));

// const copyFruits = [...fruits];

// console.log(fruits);
// console.log(copyFruits);

// copyFruits[0].name = 'appleee';

// console.log(fruits);
// console.log(copyFruits);

// import Axios from 'axios';

// // 请求列表接口
// const getprodlist = async () => {
//   return Axios({
//     method: 'Get',
//     url: `/api/getprodlist`,
//   });
// };
// // 添加列表接口
// const addItem = async (name) => {
//   return Axios({
//     method: 'Post',
//     url: `/api/addproduct`,
//     data: { name },
//   });
// };

// 我们需要先添加，添加成功后查询新的列表
// addItem('Alexious')
//   .then((addRes) => {
//     console.log(addRes);
//     return getprodlist();
//   })
//   .then((getRes) => {
//     console.log(getRes);
//   });

// Promise.all([getprodlist(), addItem('好饿啊！')])
//   .then((res) => {
//     const [getRes, addRes] = res;
//     console.log(getRes);
//     console.log(addRes);
//     return getprodlist();
//   })
//   .then((res2) => {
//     console.log(res2);
//   });

// addItem('奥利给')
//   .then((res) => {
//     console.log(res);
//     return getprodlist();
//   })
//   .then((res2) => {
//     console.log(res2);
//   });

// const lin = Symbol('lin');
// const zero = Symbol('zero');
// console.log(lin);
// console.log(zero);

// console.log(Symbol('xx') == Symbol('xx'));

// const obj = {
//   [Symbol('lin')]: { name: 'lin', age: 23 },
//   [Symbol('lin')]: { name: 'lin', age: 24 },
//   [Symbol('lin')]: { name: 'linxx', age: 22 },
//   [Symbol('lin')]: { name: 'linx', age: 26 },
//   [Symbol('lin')]: { name: 'lin', age: 24 },
// };

// for (key in obj) {
//   console.log(obj[key]);
// }

// const objSyms = Object.getOwnPropertySymbols(obj).map((index) => obj[index]);
// console.log(objSyms);

// console.log(arr.includes({ name: 'xx' })); // false
// console.log(arr.includes('xxx')); // true

// const fruits = [{ name: 'apple' }, { name: 'banana' }];
// console.log(fruits.find((item) => item.name === 'banana'));
// console.log(fruits.includes({ name: 'apple' }));
// console.log(fruits.findIndex((item) => item.name === 'banana'));

// const arr = [123, '123', 'xxx', { name: 'xx' }, '123', 'xxx', 123, 321, 'lin', {}, null, null, {}, [], []];

// 无法判断引用类类型的数据，能判断null
// const unique = (arr) => {
//   return Array.from(new Set(arr));
// };

// 无法辨别引用类型的数据，能判断null
// const unique = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1);
//         // 删除后，数组长度减1，里层循环索引也要减一
//         j--;
//       }
//     }
//   }
//   return arr;
// };

// 创建一个空数组，遍历原数组，通过includes或indexOf查找，如果查找不到则添加
// 无法辨别引用类型的数据，能判断null
// const unique = (arr) => {
//   let newArr = [];
//   arr.forEach((item) => {
//     if (!newArr.includes(item)) newArr.push(item);
//   });
//   return newArr;
// };

// const unique = (arr) => {
//   return [...new Set(arr)];
// };

// console.table(unique(arr));
// [123, "123", "xxx", {…}, 321, "lin", {…}, null, {…}, Array(0), Array(0)]
// console.log([...new Set(arr)]);

// class User {
//   // 构造器
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   // 实例方法，通过实例对象调用
//   hello() {
//     console.log(`hello! I am ${this.name}`);
//   }
//   // 静态方法，通过User.info()调用
//   static info() {
//     console.log('this is an User Class');
//   }
//   // 暴露给实例对象的设置属性的方法
//   set game(value) {
//     this.gameName = value;
//   }
//   // 暴露给实例对象的获取属性的方法
//   get game() {
//     return this.gameName;
//   }
// }

// const lin = new User('lin', 23);

// console.log(lin); // User {name: "lin", age: 23}
// lin.hello(); // hello! I am lin

// User.info(); // this is an User Class

// lin.game = 'mc';
// console.log(lin); // User {name: "lin", age: 23, gameName: "dnf"}
// console.log(lin.game); // mc

// class MyArray extends Array {
//   constructor(...props) {
//     super(...props);
//   }
//   add(value) {
//     this.push(value);
//   }
// }

// const arr = new MyArray(1, 2, 3);
// console.log(arr);

// arr.add(123);
// console.table(arr);

// console.log('====================构建====================');
// // Set类似于数组，但是成员的值都是唯一的，没有重复的值
// const arr = [1, 2.3, 2, 2];
// const str = 'aanndasjasjdas';

// // 构造方法接受一个具有 iterable 接口的其他数据结构(数组,set,字符串(相当于去重的split)，html节点)
// const arrToSet = new Set(arr); // 数组去重
// const strToSet = new Set(str); // 字符串去重

// console.log(arrToSet); //Set(3) {1, 2.3, 2}
// console.log(strToSet); // Set(5) {"a", "n", "d", "s", "j"}

// console.log('====================原型====================');
// // Set原型中的方法
// /**
//  * __proto__: Set
//  *add: ƒ add()
//  *clear: ƒ clear()
//  *constructor: ƒ Set()
//  *delete: ƒ delete()
//  *entries: ƒ entries()
//  *forEach: ƒ forEach()
//  *has: ƒ has()
//  *keys: ƒ values()
//  *size: (...)
//  *values: ƒ values()
//  *Symbol(Symbol.iterator): ƒ values()
//  *Symbol(Symbol.toStringTag): "Set"
//  *get size: ƒ size()
//  *__proto__: Object
//  */

// console.log('========================属性和方法===============================');
// // 通过size获取Set长度，而不是length
// console.log(arrToSet.size); // 3
// console.log(arrToSet.length); // undefined

// // 通过add（）添加,返回添加后的Set
// console.log(arrToSet.add(2)); // Set(3) {1, 2.3, 2} 添加重复的值失败，但是依旧会返回Set
// console.log(arrToSet.add(123)); // Set(4) {1, 2.3, 2, 123} 添加成功，返回新Set

// // 通过delete（）删除，返回一个布尔值，表示删除是否成功
// console.log(arrToSet.delete(1)); // true
// console.log(arrToSet.delete(314)); //false

// // 通过has（）检查，返回一个布尔值，表示该值是否为Set的成员。
// console.log(arrToSet.has(2)); // true
// console.log(arrToSet.has(314)); //false

// // 通过clear（）清除所有成员，没有返回值。
// // arrToSet.clear();

// console.log('========================遍历===============================');
// // 遍历 通过forEach和for（let value of Set)直接遍历
// arrToSet.forEach((item) => {
//   console.log(item);
// });
// /**
//  * 2.3
//  * 2
//  * 123
//  */

// // 或者keys(),values(),entries()获取接口
// for (let item of arrToSet.entries()) {
//   console.log(item);
// }
// // Set的key和value相等
// /**
//  * (2) [2.3, 2.3]
//  * (2) [2, 2]
//  * (2) [123, 123]
//  */

const maps = new Map();
console.log(maps);

console.log('========================原型===============================');
/**
 * __proto__: Map
 *clear: ƒ clear()
 *constructor: ƒ Map()
 *delete: ƒ delete()
 *entries: ƒ entries()
 *forEach: ƒ forEach()
 *get: ƒ ()
 *has: ƒ has()
 *keys: ƒ keys()
 *set: ƒ ()
 *size: (...)
 *values: ƒ values()
 *Symbol(Symbol.iterator): ƒ entries()
 *Symbol(Symbol.toStringTag): "Map"
 *get size: ƒ size()
 *__proto__: Object
 */

console.log('========================属性和方法===============================');
// 通过size获取Set长度，而不是length
console.log(maps.size); // 0
console.log(maps.length); // undefined

// 通过set（）添加,返回添加后的Map
console.log(maps.set(123, 345)); // Map(1) {123 => 345}
console.log(maps.set(true, 123)); // Map(2) {123 => 345, true => 123}
console.log(maps.set('123', '321')); // Map(3) {123 => 345, true => 123, "123" => "321"}
console.log(maps.set('123', '321321')); // Map(3) {123 => 345, true => 123, "123" => "321321"} 跟对象一样 没有重复的键 添加会覆盖原来的值

// 通过get（key）获取value
console.log(maps.get(true)); // 123
console.log(maps.get(false)); // undefined

// 通过delete(key)删除某一项，返回删除结果的bool值
console.log(maps.delete(true)); // true
console.log(maps.delete(false)); // false

// 通过has(key),查找是否拥有当前这个键
console.log(maps.has(123)); // true
console.log(maps.has(true)); // false

// 通过clear()清空map，无返回值
// console.log(maps.clear()); // undefined
// console.log(maps); // Map(0) {}

console.log('========================遍历===============================');
// 遍历 通过for（let item of Set)直接遍历
// Set的for of调用的是values()接口，Map调用的是entries()
for (let item of maps) {
  console.log(item);
}
/**
 * (2) [123, 345]
 * (2) ["123", "321321"]
 */

// 或者keys(),values(),entries()获取接口
for (let item of maps.entries()) {
  console.log(item);
}
/**
 * (2) [123, 345]
 * (2) ["123", "321321"]
 */

// 这里的item是数组  数组是value
for (let [key, value] of maps.entries()) {
  console.log(key + '=>' + value);
}

const arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}
