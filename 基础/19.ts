// unknow 是any的安全类型（ts3.0新增类型）
// unknow 和 any 对比学习

// any 任何类型都可以归为any类型，类型系统里的顶级类型，全局超级类型
// 我们可以对any进行任何操作，而不用检查类型
let value: any // 不安全
value = true
value = 1
value = []
value.foo()
value.length

// unknown 也是顶级类型，任何类型都可以赋给unknown类型
// unknow 类型只能赋值给any类型或unknown本身

let value2: unknown
value2 = true
value2 = 1
value2 = []
// value2.foo() // 对象的类型为 "unknown"
// value2.length

// 如果想调用unknown类型上的方法和属性，就需呀缩小unknown的类型范围，进行类型断言，类型推断
value2 = 'hello'
console.log(value2.length) //对象的类型为 "unknown"
// 断言
console.log((value2 as string).length)

// typeof
if (typeof value2 === 'string') {
  console.log(value2.length)
}

// 联合类型中的unknown
// 在联合类型中unknown会吸收任何类型,不管跟谁联合，最后都是unknown
type u1 = unknown | null
type u2 = unknown | number[]
type u3 = unknown | string
type u4 = unknown | boolean
type u5 = unknown | undefined

// 交叉类型
// 交叉类型是将多个类型合并为一个类型
// 这让我们可以吧现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性
interface A { name: string }
interface B { age: number, c: string }
type C = A & B
let c: C = { name: 'czp', age: 10, c: 'dog' } // A,B的子类型
let a: A
let b: B

a = c
b = c

type AA = string | number
type BB = string | boolean
type CC = AA & BB //string

// never 是unknown的子类型
type isNever = never extends unknown ? true : false
type keys = keyof unknown

let aa:unknown
let bb:unknown
// unknown 只能比较===，！==不能进行运算
console.log(aa === bb)
console.log(aa !== bb)
// aa+bb

// 映射属性时
type getType<T> = {
  // keyof 拿到所有的key
  // [p in keyof T] 遍历所有的key
  [p in keyof T]:number
}
type c = getType<unknown>