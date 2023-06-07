export { }
// 条件类型 重点
interface Fish {
  name1: string
}
interface Water {
  name2: string
}
interface Bird {
  name3: string
}
interface Sky {
  name4: string
}

type Condition<T> = T extends Fish ? Water : Sky
let con: Condition<Fish> = { name2: '水' }

// 条件类型分发
// let con1: Water | Sky ，先传Fish返回Water，再传Bird返回Sky
let con1: Condition<Fish | Bird> = { name2: '水', name4: '天空' }
let con2: Condition<Fish | Bird> = { name2: '水' }
let con3: Condition<Fish | Bird> = { name4: '天空' }

// 条件类型有一个特征，就是【分布式有条件类型】，但是分布式有条件类型是有前提的，条件类型里待检查的类型必须是nacked type parameter（裸类型）
// nacked type parameter：必须是T extends Fish ? Water : Sky 不能是 T[]/[T]之类的
// 分布式有条件类型 （先传Fish返回Water，再传Bird返回Sky 再｜在一起）

type Diff<T, U> = T extends U ? never : T
type R = Diff<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'> // never|never|never|'d'

// 内置条件类型
//1.Exclude排除
type Exclude<T, U> = T extends U ? never : T
type R4 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'> // type R4 = "d"

//2.Extract提取
type Extract<T, U> = T extends U ? T : never
type R5 = Extract<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'> // type R5 = "a" | "b" | "c"

//3.NonNullable 非空的
type NonNullable<T> = T extends null | undefined ? never : T
type R6 = NonNullable<'a' | null | undefined> // type R6 = "a"

//4.ReturnType
// infer最早出现于PR中，表示在extends条件语句中待推断的类型变量
// ReturnType获取函数类型的返回类型
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : T // infer 根据它的位置推断类型

function getUser() {
  return {
    name: 'sxx',
    age: 26
  }
}
type GetUserType = typeof getUser
type ReturnUser = ReturnType<GetUserType>
let u: ReturnUser = {
  name: 's',
  age: 26
}

//5.Parameters 获取函数参数生成元组
function getUser1(a: string, b: number) {
  return {
    name: 'sxx',
    age: 26
  }
}
type GetUserType1 = typeof getUser1
/**
 * Obtain the parameters of a function type in a tuple
 */
// p = [string, number]
type Parameters<T> = T extends (...args: infer P) => any ? P : never

type ParamsType = Parameters<GetUserType1>

type Parameters1<T> = T extends (...args: infer P) => infer R ? P | R : never

type ParamsType1 = Parameters1<GetUserType1>

//6.InstanceType 获取构造函数实例的类型
class Person8 {
  constructor(public name: string) { }
  getName() {
    console.log(this.name)
  }
}
/**
 * Obtain the parameters of a constructor function type in a tuple
 */
// 获取类的构造函数的参数类型
// <T extends abstract new (...args: any) => any> 检查传入的泛型合不合规
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never
type Params = ConstructorParameters<typeof Person8>
// type Params = [name: string]

/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any

type Person8Instance = InstanceType<typeof Person8>
let instance: Person8Instance = {
  name: 'sxx',
  getName() { }
}

// infer案例
// 元组转联合类型
type ElementOf<T> = T extends Array<infer E> ? E : never // infer E（声明E变量） 是Ttuple 的每个值
type Ttuple = [string, number]
type TtupleToUnion = ElementOf<Ttuple> // type TtupleToUnion = string | number

// 参数 => 返回值（其余地方=>）  参数: 返回值（接口里的函数一般用：）


// 联合类型转交叉类型
// string | number => string & number
type T1 = { name: string }
type T2 = { age: number }
type ToIntersection<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void } ? U : never
type T3 = ToIntersection<{ a: (x: T1) => void, b: (x: T2) => void }> // type T3 = T1 & T2 交集 交叉类型
let t3: T3 = { name: 'sxx', age: 26 }
