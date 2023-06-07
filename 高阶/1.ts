export { }
// 类型推断
// ts能够根据一些简单的规则推断变量的类型
// 1.从右向左
// 变量类型可以由定义推断，类型从右向左流动
let foo = 1 // 从赋的值中推断出来的
let bar = 'sxx'

// 2.底部流出
// 通过return关键字推断返回值的类型
function add(a: number, b: number) {
  return a + b
}
let c = add(1, 2)

// 3.从左向右流动
type Sum = (a: number, b: number) => number
let sum: Sum = (a, b) => {
  // a = '' // 不能将类型“string”分配给类型“number”
  return a + b
}
let person = {
  name: 'sxx',
  age: 26
}
// let name = person.name
// let age = person.age

let { name, age } = person

let numbers = [1, 2, 3]
let c2 = numbers[0]

// 很重要的例子
interface DefaultProps {
  name?: string,
  age?: number
}
// let defaultProps = {
//   name: 'sxx',
//   age: 26
// }
// DefaultProps会影响Props的类型
let defaultProps: DefaultProps = {
  name: 'sxx',
  age: 26
}
let props = {
  ...defaultProps,
  home: '杭州'
}
type Props = typeof props

// 小心使用返回值
function addOne(a: any) {
  return a + 1
}
function sum3(a: number, b: number) {
  return a + addOne(b) // number + any = any
}
let k = sum3(1, 2) // k是any

// mixin 混合
function mixin<T, U>(one: T, two: U) {
  const result = <T & U>{} // <T&U>强转
  for (let key in one) (result as T)[key] = one[key] // 单个类型不能赋给交叉类型，需要强转一下
  for (let key in two) (<U>result)[key] = two[key]
  return result
}
const x = mixin({ name: 'sxx' }, { age: 26 }) // 没传<T,U>是因为类型推断
console.log(x.name, x.age)

// typeof 获取变量的类型
// 先定义类型，再定义变量
type Person3 = {
  name: string
}
let p3: Person3 = {
  name: 'sxx'
}

// 反推类型
let p4 = {
  name: 'sxx'
}
type P4 = typeof p4

// 索引访问操作符
interface Person5 {
  name: string,
  age: number,
  job: {
    name: string
  }
}

let FrontJob: Person5['job'] = {
  name: '前端'
}

// 映射类型
interface Person6 {
  name: string,
  age: number,
  gender: 'male' | 'female'
}
// 批量把一个接口中的属性全部变成可选的
// Partial源码
type PartialPerson = {
  [key in keyof Person6]?: Person6[key]
}
// 内置类型Partial，也可以实现
type PPerson = Partial<Person6>