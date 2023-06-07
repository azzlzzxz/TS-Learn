export { }
// exports.__esModule = true;  表示当前是一个es6模块

// Person标识符重复：因为声明的person是全局的类，1.ts里也有 ，在ts文件中加export{},回使ts认为这个文件是一个模块，这样就不会报错
class Person {
  name: string = 'sxx';
  getName(): void {
    // console.log(this.name)
  }
}
// 类就是语法糖最后编译还是函数

let p1 = new Person()
p1.name = 'sxx'
p1.getName()

// 定义存取器
// 在ts里可以通过存取器来改变一个类中属性的读取和赋值操作
class User {
  // myName: string;
  // constructor(myName: string) {
  //   this.myName = myName
  // }
  // 优化
  constructor(public myName:string){
    // public 关键字 （公开、公共）会自动把变量赋给当前的实例
  }

  get name() {
    return this.myName
  }
  set name(val) {
    this.myName = val
  }
}

let user = new User('ws') // ws 给了constructor
user.name = 'sxx' // sxx 给了set 
console.log(user.name) // get

// readonly 只读
class Animal {
  public readonly name:string
  constructor(name:string){ // public readonly 的属性只能在constructor里赋值
    this.name = name
  }
  changeName(name:string){
    // this.name = name //无法分配到 "name" ，因为它是只读属性。
  }
}

 