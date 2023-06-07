export { }
//1.接口兼容性
//如果传入的变量和声明的类型不匹配，TS就会进行兼容性检查
//原理Duck-Check，就是说只要目标类型中声明的属性变量在源类型中都存在就是兼容的

// 你要的我都有就兼容，否则就不兼容
interface Animal {
  name: string,
  age: number
}
interface Person {
  name: string,
  age: number,
  gender: number
}

function getName(a: Animal): string {
  return a.name
}

let a: Animal = {
  name: '',
  age: 10
}
getName(a)

let p: Person = {
  name: '',
  age: 10,
  gender: 0
}
getName(p)

// 2.基本数据类型的兼容性
let num: string | number
let str: string = 'sxx'
num = str

let num2: {
  toString(): string
}
let str2: string = 'zz'
num2 = str2
// str2 = num2 //不能将类型“{ toString(): string; }”分配给类型“string”。

// 类的兼容性
namespace abc {
  class Animal { name: string }
  class Bird extends Animal { age: number }
  let a: Animal = new Animal()
  let b: Bird = new Bird()

  a = b
  // b = a // 类型 "Animal" 中缺少属性 "age"，但类型 "Bird" 中需要该属性
}

// 函数的兼容性 （重点、难点）
// 比较参数 比较返回值
// 比较参数
type Func = (a: number, b: number) => void
let sum: Func
function f1(a: number, b: number): void { }
sum = f1
// 少一个参数可以
function f2(a: number): void { }
sum = f2
//少两个参数也可以
function f3(): void { }
sum = f3
//多一个不行 因为多的那个参数接收不到
function f4(a: number, b: number, c: number): void { }
// sum = f4

// 比较返回值
type GetPerson = () => { name: string, age: number }
let getPerson: GetPerson

function g1() {
  return { name: 'sxx', age: 26 }
}
getPerson = g1

function g2() {
  return { name: 'sxx', age: 26, gender: 0 }
}
getPerson = g2

function g3() {
  return { name: 'sxx' }
}
// getPerson = g3 // 不能将类型“() => { name: string; }”分配给类型“GetPerson”。 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "{ name: string; age: number; }" 中需要该属性

// 一切的一切是为了类型安全，为了使用不报错
