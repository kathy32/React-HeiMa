// ES5
function Person (name, age) {
  this.name = name
  this.age = age
}
Person.height = 187

// 实例方法可以通过 prototype 访问到
Person.prototype.say = function () {
  console.log('Person实例方法')
}

// 静态方法在 Person 构造函数 constructor 中，实例无法访问
Person.show = function () {
  console.log('Person静态方法')
}

const p1 = new Person('lokit', 23)
console.log(p1)
p1.say()
// p1.show() 报错
Person.show()


console.log('------------------------')


// ES6
// 注意1：在 class 的 {} 区间内，只能写构造器、实例方法、静态属性、静态方法
// 注意2: class 为语法糖
class Animal {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  // 很少用
  static height = 25

  say () {
    console.log('Animal实例方法')
  }

  // 很少用
  static show () {
    console.log('Animal静态方法')
  }
}

const a1 = new Animal('bobi', 5)
console.log(a1)
a1.say()
Animal.show()
