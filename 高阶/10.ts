// 类型声明
// 1.声明文件可以让我们不需要将JS重构为TS，只需要加上声明文件就可以使用系统
// 2.类型声明在编译时都会被删除，不会影响真正的代码
// 3.关键字declare表示声明的意思，我们可以用它来做出各种声明

export { }
// 普通类型声明
declare let age: number
declare function getName(): string
declare class Animal { }

console.log(age)
getName()
new Animal()

// 外部枚举：用来描述已经存在的枚举类型形状
declare enum Seasons {
  Spring,
  Summer,
  Autumn,
  Winter
}
let seasons = [
  Seasons.Spring,
  Seasons.Summer,
  Seasons.Autumn,
  Seasons.Winter,
]

//命名空间
//一个全局变量有很多子属性,就可以用namespace
//声明文件里的namespace表示一个全局变量包含很多子属性
//在命名空间内部不需要再使用 declare了
declare namespace $ {
  function ajax(url: string, settings: object): void
  let name: string;
  namespace fn {
    function extend(object: object): void
  }
}
$.ajax('/get', {})
$.name
$.fn.extend({})

// 类型声明文件 （即可以自己写也能自动生成）
// 可以把类型声明单独放在一个文件中，可以在类型声明文件中使用类型声明，其格式规范以 .d.ts 结尾，通过观察类型声明文件来获得使用