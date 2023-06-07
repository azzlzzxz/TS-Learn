// 函数
// 函数定义
// (name: string)定义参数
// :void 定义返回值（没有返回值用void）
function hello(name: string): void {
  console.log('hello', name)
}
hello('sxx')

// 函数表达式
type GetName = (firstName: string, lastName: string) => string
let getName: GetName = function (firstName: string, lastName: string): string {
  return firstName + lastName
}

type GetName1 = (firstName: string, lastName: string) => void
let getName1: GetName1 = function (firstName: string, lastName: string): void {

}

// 可选参数
// ? 表示可选，age这个参数可穿可不传
function print(name: string, age?: number): void {
  console.log(name, age)
}

print('sxx', 25)

// 默认参数
// method: string = 'GET'   GET是method的默认参数
function ajax(url: string, method: string = 'GET'): void {
  console.log(url, method)
}
ajax('/')

// 剩于参数
function sum(...numbers: number[]) {
  return numbers.reduce((val, item) => val + item, 0)
}
console.log(sum(1, 2, 3))

// 函数的重栽
// 一个函数有很多传参的方式
let obj: any = {}
//如果穿的val是一个字符串复制给obj.name  如果是数字复制给obj.age

// 函数声明和函数实现要紧密的连在一起
function attr(val: string):void // 函数声明
function attr(val: number):void
function attr(val: any): void { // 函数实现
  if (typeof val === 'string') {
    obj.name = val
  } else if (typeof val === 'number') {
    obj.age = val
  }
} 
attr('sxx')
attr(12)
// attr(true) // 报错

function add1(a:string|number, b:string|number):void{

}
add1('a','b')
add1(1,2)
add1(1,'b') // 约束不了a,b的传参只能同时是string｜number

function add(a:string, b:string):void
function add(a:number,b:number):void
function add(a:string|number, b:string|number):void{

}
add('a','b')
add(1,2)
// add(1,'b') //报错


// 函数重栽的一个非常有名的例子: redux的compose源码实现