// 泛型
export { }
// 创建一个长度为length的数组，里面的值用value填充
function createArray<T>(length: number, value: T): Array<T> { // T这个时候不确定
  let result: T[] = []
  for (let index = 0; index < length; index++) {
    // result[index] = index
    result[index] = value
  }
  return result
}
let result = createArray<string>(1, 'x') // 当调用方法的时候确定
console.log(result)

// 类数组
// function sum () {
//   let args:IArguments = arguments // IArguments 内置类型
//   for (const a of args) {
//     console.log(a)
//   }
// }
// sum(1,2,3)

// 泛型类
class MyArray<T>{
  private list: T[] = []
  add(value: T) {
    this.list.push(value)
  }
  getMAx(): T {
    return this.list[2]
  }
}

let array = new MyArray<number>()
array.add(1)
array.add(2)
array.add(3)
console.log(array.getMAx())

// 泛型与new
function factory<T>(type: { new(): T }): T {
  return new type()
}
class Person { }
let p = factory<Person>(Person)
console.log(p)

//泛型接口
interface Calculate {
  <T>(a: T, b: T): T
}

let sum: Calculate = function <T>(a: T, b: T): T {
  // return a+b // 运算符“+”不能应用于类型“T”和“T”。泛型是自己定义的，传的不是number，string就不能用+
  return a
}
sum<number>(1, 2)

// 如果就想相加怎么办
interface Calculate4 {
  <T extends (string | number)>(a: T, b: T): void
}
// 对象属性或接口是只能多不能少
// extends 严格来说是子类型
// 联合类型是比较或 的多少
let sum4: Calculate4 = function <T extends (string | number)>(a: T, b: T): void {
  // return a+b
}
sum4<number>(1, 2)


interface Calculate2<T> {
  (a: T, b: T): T
}

let sum2: Calculate2<number> = function (a: number, b: number): number {
  return a + b
}
sum2(1, 2)

interface Calculate3<T> {
  <U>(a: T, b: T): U
}

let sum3: Calculate3<number> = function <U>(a: number, b: number): U {
  return a as any
}
sum3<number>(1, 2)


// 泛型可以写多个
function swap<A, B>(tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]]
}

// 默认泛型 类似于默认参数

function createArray1<T = string>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let index = 0; index < length; index++) {
    result[index] = value
  }
  return result
}
// let result1 = createArray1<string>(1, 'x')
let result1 = createArray1(1, 'x') //不传T，T就去取默认泛型类型
console.log(result1)

interface T2<T = string> {

}
type T22 = T2

// 泛型约束 非常重要
interface LengthWise {
  length: number
}

function logger<T extends LengthWise>(val: T) {
  console.log(val.length)
}
// string 是有length属性的，number没有
logger<string>('abc')

let obj = {
  length: 10
}
type Obj = typeof obj

logger<Obj>(obj)//不用关心怎么来的，有length属性就行

// 判断兼容不兼容根extends没有一点关系，只看形状 有没有对应的属性
class GrandFather {}
class Father extends GrandFather {}
class Child extends Father {}

function get<T extends Father>(){

}
get<Child>()
get<Father>()
get<GrandFather>()

class GrandFather1 {
  grandFather: string
}
class Father1 extends GrandFather1 {
  father:string
}
class Child1 extends Father1 {
  child:string
}
// 约束
// 或者说T能赋值给Father ==>150
// T是Father的子类行
function get1<T extends Father1>(){

}
get1<Child1>()
get1<Father1>()
// get1<GrandFather1>() // 类型“GrandFather1”不满足约束“Father1”。 类型 "GrandFather1" 中缺少属性 "father"，但类型 "Father1" 中需要该属性。

let father = new Father1
let child = new Child1
father = child
// child = father // 类型 "Father1" 中缺少属性 "child"，但类型 "Child1" 中需要该属性