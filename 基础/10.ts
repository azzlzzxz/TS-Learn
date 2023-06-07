// react也非常重要的一个知识点
export {}

//当我们写一个类的时候，会得到2个类型
//1、构造函数类型的函数类型
//2、类的实例类型

namespace a {
  class Component {
    static myName:string = '静态名称属性'
    myName:string = '实例名称属性'
  }
  let com = Component
  // Component类型本身表示的是实例类型
  let c:Component = {myName:'实例名称属性'}
  let e:Component = new Component()
  // ts里有两个概念：一个叫类型，一个叫值
  // 放在冒号后面的是类型，放在 = 后面的是值
  let f:typeof Component = com
}
// es6=>es5
namespace b{
  function Component () {
    this.myName = '实例名称属性'
  }
  Component.myName = '静态名称属性'
  let com = Component
  // let e:Component = new Component()
  let f:typeof Component = com
}
