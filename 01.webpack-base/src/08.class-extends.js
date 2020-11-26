// 父类，可以理解为 prototype
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}


// 子类1
class American extends Person {

}
const a1 = new American('neymar', 27)
console.log(a1)


// 子类2
class Chinese extends Person {

}
const c1 = new Chinese('lokit', 23)
console.log(c1)