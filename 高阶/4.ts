export { }
// 自定义类型
// 库 utility-types

// 1.Proxy
type Proxy<T> = {
  get(): T
  set(vaule: T): void
}
type Proxyify<T> = {
  [P in keyof T]: Proxy<T[P]>
}
function proxyify<T>(obj: T): Proxyify<T> {
  let result: any = <Proxyify<T>>{}
  for (const key in obj) {
    // type KeyType = typeof key
    Object.defineProperty(result, key, {
      get: () => {
        return obj[key]
      },
      set: (value) => {
        obj[key] = value
      }
    })
  }
  return result
}

interface Props {
  name: string
  age: number
}
let props: Props = {
  name: 'sxx',
  age: 26
}
let proxyProps: any = proxyify<Props>(props)
console.log(proxyProps)
console.log(proxyProps.name)
// proxyProps.name = '无敌'
// proxyProps.age = 10
console.log(proxyProps.name)

// 2.取消代理
function unProxyify<T>(t: Proxyify<T>): T {
  let result: any = {} as T
  console.log(t)
  for (const k in t) {
    result[k] = t[k].get()
  }
  return result
}
let originalProps = unProxyify<Props>(proxyProps)
console.log(originalProps)