export { }

// 泛型兼容性
// 泛型在判断兼容性的时候会先判断具体的类型，然后在进行兼容性判断
namespace a {
  interface Empty<T> {

  }
  let x!: Empty<string> // string给T 返回的是{}
  let y!: Empty<number> // number给T 返回的是{}
  x = y
}

namespace b {
  interface Empty<T> {
    data: T
  }
  let x!: Empty<string> // {data:string}
  let y!: Empty<number> // {data:number}
  x = y //不能将类型“Empty<number>”分配给类型“Empty<string>”。不能将类型“number”分配给类型“string”
}

// 枚举兼容性
enum Colors { Red, Yellow }
let c: Colors
c = 1 // 数字和枚举是兼容的
let n: number
n = 1
n = Colors.Yellow

