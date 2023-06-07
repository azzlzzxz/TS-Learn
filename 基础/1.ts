// 普通枚举
enum Gender {
  Girl,
  Boy
}
console.log(Gender['Girl'], Gender[0])
console.log(Gender['Boy'], Gender[1])

// 常量枚举
const enum Color {
  Red, Yellow, Bule
}
let myColor = [Color.Red, Color.Yellow, Color.Bule]

// 任意类型any
// 如果变量定义为any类型，就跟JS差不多，不进行类型检查
// let root: any = document.getElementById('root')
// root.style.color = 'red'

// let element: (HTMLElement | null) = document.getElementById('root')
// ! 非空断言，告诉ts不用担心它是null，我知道这是啥
// element!.style.color = 'green'

// null undefined 是其他类型的子类型
// 如果说strictNullChecks的值为true，则不能把null undefined复制给x
let x: number
x = 1
// x = null
// x = undefined

// strictNullChecks的值为true,undefined null 只能赋给自己或any
let z: undefined = undefined
let z1: any = undefined

// strictNullChecks的值为true的写法
let y: number | null | undefined // |或操作符
y = 1
y = null
y = undefined

// never 是其他类型，null，undefined的子类型，代表不会出现的值
// 1.作为不会返回的函数的返回值 类型
function error(message: string): never {
  throw new Error('报错了') // 直接异常结束了
  console.log('ok')
}
// 死循环
function loop(): never {
  while (true) {

  }
  console.log('ok')
}

function fn(x: number | string) {
  if (typeof x === 'number') {
    console.log(x)
  } else if (typeof x === 'string') {
    console.log(x)
  } else {
    console.log(x) // never
  }
}

// void 代表没有任何类型
// 当一个函数没有返回值，那么就是void类型
// strictNullChecks=false null 可以赋值给 void ，true则不行
// undefined 可以直接赋值给void
function greeting(): void {
  return undefined
  // return null
}

// void 与 never区别
// void可以被赋值为 null undefined，never不包含任意类型
// 返回类型为void的函数还能执行，但是返回never的函数无法正常执行

// Symbol 
const s1 = Symbol('key')
const s2 = Symbol('key')
// console.log(s1 === s2) 报错

// BigInt 大数字，大整型
// const max = Number.MAX_SAFE_INTEGER // js最大数 2**53 - 1
// console.log(max+1 === max+2) // true

const max = BigInt(Number.MAX_SAFE_INTEGER)
// console.log(max+1 === max+2) // 运算符“+”不能应用于类型“bigint”和“1”
// 如果一个数字后面加个n，就代表其是BigInt类型
console.log(max + BigInt(1) === max + BigInt(2)) // false
// console.log(max+1n === max+2n) //target改成ESNEXT才行

// Number BigInt 是Js里的类型 number bigint 是Ts里的类型
let foo: number
let bar: bigint

// 类型推导
let unname;
unname = 1

let unname2 = 'sxx'
unname2 // 类型推导 给unname2赋值字符串，其自动会把unanme2类型推导成字符串
// unname2 = true

// 包装对象 wapper object
// 原始类型 对象类型
// 原始类型 string
let name2 = 'sxx'
// 自动装箱 如果要调用原始类型的方法，他会在内部自动帮你包装成对象类型
console.log(name2.toUpperCase())
console.log(new String(name2).toUpperCase())

let isOk1: boolean = true
let isOk2: boolean = Boolean(1) //Boolean(1)返回true还是基本类型
// let isOk3: boolean = new Boolean(1) // new Boolean(1)返回的是对象类型，不能把对象类型付给基本类型

// 联合类型 （表示取值可以是多种类型中的某一种）
let name3: string | number
// console.log(name3!.toString()) // 联合类型没有被赋值时可以使用联合类型的共有方法
name3 = 3
// console.log(name3!.toFixed(2)) //一旦被赋值，就只能用被赋值类型的方法
name3 = 'sxx'
console.log(name3!.length)

// 类型断言 （可以将联合类型的变量，指定成更加具体的变量）
let name4: string | number
// console.log((name4! as number).toFixed(2))
// console.log((name4! as string).length)
// 双重断言 把name4先断言成any再断言成boolean
console.log(name4! as any as boolean)

// 字面量类型和类型字面量
// 字面量类型
const up: 'Up' = 'Up'
const down: 'Down' = 'Down'
const left: 'Left' = "Left"
const right: 'Right' = 'Right'
type Direction = 'Up' | 'Down' | 'Left' | 'Right'
// 可以实现枚举的效果
function move(direction: Direction) {
  console.log(direction)
}
move('Down')

// 类型字面量
type Person = {
  name: string,
  age: number
}
let p1: Person = {
  name: 'sxx',
  age: 10
}

// 字符串字面量和联合类型的区别
type T1 = '1' | 2 | '3'
type T2 = string | number | boolean
let t1: T1 = '1'
let t2: T2 = true