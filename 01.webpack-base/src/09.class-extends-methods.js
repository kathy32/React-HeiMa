class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  say () {
    console.log('实例方法')
  }
}



class American extends Person {
  // 问题1: 为什么一定要在 constructor 中调用 super
  // 答案：规则

  // 问题2: super 是个什么东西
  // 答案：指的是父类 constructor

  // 问题3: 为什么调用了 super() 之后，a1 实例的 name 和 age 都变成 undefined
  // 答案：自身 constructor 和 super 都需要传参才能到达父类
  constructor (name, age) {
    super(name, age)
  }

}
const a1 = new American('neymar', 27)
console.log(a1)
a1.say()



class Chinese extends Person {
  constructor (name, age, IDNumber) {
    // 注意：super 必须在 this 之前出现
    super(name, age)
    this.IDNumber = IDNumber  // 子类独有的实例属性
  }
}
const c1 = new Chinese('lokit', 23, '510521*******')
console.log(c1)
c1.say()