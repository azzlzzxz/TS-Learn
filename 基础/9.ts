// 接口
export { }
// 1、描述对象的形状
interface Speakable {
  name: string
  speak(): void
}

let speakMan: Speakable = {
  name: 'sxx',
  speak() { }
}

// 2、行为的抽象
// 同名的接口可以写多个，类型会自动合并
interface Speakable {
  speak(): void
}
interface Eatable {
  eat(): void
}
// 类可以实现接口，（把接口的属性、方法都实现）
class Person implements Speakable, Eatable {
  name: string
  speak(): void {
    throw new Error("Method not implemented.")
  }
  eat(): void {
    throw new Error("Method not implemented.")
  }

}

// 任意属性
interface Person2 {
  readonly id: number
  name: string
  [key: string]: any // 任意属性
}
let p: Person2 = {
  id: 1,
  name: 'ws',
  age: 10,
  sum: 'ssss',
  11: 11
}

// 接口的继承
interface Speakable2 {
  speak(): void
}
interface SpeakChinese extends Speakable2 {
  speakChinese(): void
}
class ChineseMan implements SpeakChinese {
  speakChinese(): void {
    throw new Error("Method not implemented.")
  }
  speak(): void {
    throw new Error("Method not implemented.")
  }
}

interface Person3 {
  readonly id: number
}
let p3: Person3 = {
  id: 1
}
// p3.id = 3 无法分配到 "id" ，因为它是只读属性

// 函数类型接口
interface Discount {
  (price: number): number
}
const discount: Discount = (price: number): number => {
  return price * .8
}

// 可索引接口
// 对数组和对象进行约束
interface User {
  [index: number]: string
}
let user: User = {
  0: '0',
  // 1: 1
}
// let arr: User = ['0', '1', 2]

// 如何用接口约束类
interface Speakable {
  speak(): void
}
interface Eatable {
  eat(): void
}
class Person1 implements Speakable, Eatable {
  name: string
  speak(): void {
    throw new Error("Method not implemented.")
  }
  eat(): void {
    throw new Error("Method not implemented.")
  }

}

// 构造函数类型
// 在ts中可以用接口来描述类，同时可以用接口里的new关键字来描述类的构造函数
namespace a {
  class Animal {
    constructor(public name: string) {

    }
  }
  interface WidthNameClass {
    // (name: string): Animal 是个函数，加上new之后是描述类的构造函数类型的
    new(name: string): any // => constructor(public name: string) {}
  }
  let wc: WidthNameClass = Animal
  function createAnimal(clazz: WidthNameClass, name: string) {
    return new clazz(name)
  }
  let a = createAnimal(Animal, 'sxx')
  console.log(a.name)
}
namespace b {
  class Animal {
    constructor(public name: string) {

    }
  }
  interface WidthNameClass {
    (name: string): any
  }
  let wc: WidthNameClass = (name: string): any => { }
}
