export { }
namespace a {
  // 描述函数的接口
  interface Type1 {
    (name: string): any
  }
  // 描述对象的接口，对象里有个a属性是个函数
  interface Type2 {
    a: (name: string) => any
  }

  let t1: Type1 = (name: string) => { }
  let t2: Type2 = {
    a: t1
  }
}

namespace b {
  // 还是描述函数的接口，函数自身有个age属性
  interface Type1 {
    (name: string): any
    age: number
  }
  // let t: Type1 = (name: string) => { }  报错
  let t: any = (name: string) => { }
  t.age = 10
  let t1: Type1 = t
}

// 抽象类 vs 接口

// 1、不同类之间共有的属性或方法，可以抽象成一个接口
// 2、而抽象类是提供其他类继承的基类，抽象类不允许被实例话，抽象类中的抽象方法必须在子类中实现
// 3、抽象类本质是一个无法被实例化的类，其中能够实现方法和初始化属性，而接口仅能用于描述，既不提供方法的实现，也不为属性进行初始化
// 4、一个类可以继承一个类或抽象类，但可以实现多个接口
// 5、抽象类也可以实现接口
