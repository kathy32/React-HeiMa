// ES5
function Person (name, age) {
  this.name = name
  this.age = age
}

let p = new Person('lokit', 23)
console.log(p)  // Person {name: "lokit", age: 23}

// 通过 new 出来的实例，访问到的属性叫做 【实例属性】
console.log(p.name)

// 【静态属性】：通过构造函数，直接访问到的属性
Person.height = 187
console.log(p.height) // undefined


console.log('-----------------')


// ES6
class Animal {
  // 每个类中都有一个构造器，如果没有手动指定，则默认一个看不见的空构造器
  // 构造器作用：每当 new 这个类时，会优先执行构造器中的代码
  constructor (name, age) {
    // 实例属性
    this.name = name
    this.age = age
  }

  // 【静态属性】：在 class 内部，通过 static 修饰的属性
  static height = 25
}

const a = new Animal('bobi', 5)
console.log(a)
console.log(a.name) // 实例属性
console.log(a.height)
console.log(Animal.height)  // 25