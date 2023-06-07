export { }
// 内置工具类型
// 1.ts中内置了一些工具类型来帮助我们更好地使用类型系统
// 2.utility-types
// 3.ts中增加了对映射类型修饰符的控制
// 4.具体而言，一个 readonly 或 ? 修饰符在一个映射类型里可以用前缀 + 或 - 来表示这个修饰符应该被添加或移除
// 5.+？变为可选   -？变为必选

// 1.Partial 可以将传入的属性由非可选变为可选
interface A {
  a: string
  b: number
  c: boolean
}
// Partial源码
type Partial<T> = {
  [P in keyof T]?: T[P];
}
type PartialA = Partial<A>
let a: PartialA = {
  a: 'sa',
  b: 1
}

namespace z {
  interface Company {
    id: number,
    name: string
  }
  interface Person {
    id: number,
    name: string,
    company: Company
  }
  type PartialPerson = Partial<Person>
  let p: PartialPerson = {
    id: 1,
    name: 'sxx',
    company: { // company是可选的，但是一旦选了，那么里面的属性就必须填完整
      id: 1,
      name: 'sxx',
    }
  }
}

namespace f {
  interface Company {
    id: number,
    name: string
  }
  interface Person {
    id: number,
    name: string,
    company: Company
  }
  // 实现partial递归
  type DeepPartial<T> = {
    [U in keyof T]?: T[U] extends object ? DeepPartial<T[U]> : T[U]
  }
  type PartialPerson = DeepPartial<Person>
  let p: PartialPerson = {
    id: 1,
    name: 'sxx',
    company: { // company 也变成可选的了

    }
  }
}

// 2.Required 把可选项变成必填项
namespace e {
  interface Person {
    name?: string,
    age?: number
  }
  /**
   * Make all properties in T required  Required源码
   */
  type Required<T> = {
    [P in keyof T]-?: T[P];
  };
  type RequiredPerson = Required<Person>
  let p: RequiredPerson = {
    name: 'sxx',
    age: 18
  }
}

// 3.readonly
namespace r {
  interface Person {
    name: string,
    age?: number
  }
  /**
   * Make all properties in T readonly
   */
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type ReadOnlyPerson = Readonly<Person>
  let p: ReadOnlyPerson = {
    name: 'sxx',
    age: 26
  }
  p.name = 'ccc' // 无法分配到 "name" ，因为它是只读属性。
}

// 4.pick 能从传入属性中摘取某一项返回
namespace v {
  interface Person {
    name: string
    age: number
    gender: number
  }
  let person: Person = {
    name: 'sxx',
    age: 26,
    gender: 1
  }
  type KeyOfPerson = keyof Person // 'name'|'age'|'gender'

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  type PickPerson = Pick<Person, 'name' | 'age'>
  // type PickPerson = {name: string; age: number;}

  // Extract 有条件类型分发
  type Extract<T, U> = T extends U ? T : never
  type E = Extract<string | number | boolean, string | number>
  let e: E = '1'
}

// 5.Record 记录类型：将一个类型的所有属性值都映射到另一个类型上，并创造新的类型
namespace x {
  type KeyOf = keyof any // type KeyOf = string | number | symbol
  /**
   * Construct a type with a set of properties K of type T
   */
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };
  // string | number是key的类型，string 是value的类型
  let k: Record<string | number, string> = { name: 'sxx', age: '26', 3: '3' }



  // K是objkey的类型string｜number，T是修饰老类型，U是新类型
  function mapObj<K extends string | number, T, U>(obj: Record<K, T>, map: (x: T) => U) {
    let result: Record<K, U> = <Record<K, U>>{}
    for (const key in obj) {
      result[key] = map(obj[key])
    }
    return result
  }
  let obj = { count1: 1, count2: 2 }
  let map = (x: number): string => x * 2 + ''
  let newObj = mapObj<string | number, number, string>(obj, map)
  // {count1:2, count2:4}
  console.log(newObj)
}