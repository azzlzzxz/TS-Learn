// public private protected 类里面的修饰符

class Father {
  static fatherName: string = 'fatherName'
  toString() {
    console.log('father')
  }
  public name: string // public(公共) 自己的子类和其他类都能访问
  protected age: number // protected(受保护的) 自己和自己子类能访问，其他类不能访问
  private money: number // private(私有的) 自己能访问，子类和其他类不能访问
  constructor(name: string, age: number, money: number) {
    this.name = name
    this.age = age
    this.money = money
  }
  getName(): string {
    return this.name
  }
}

class Child extends Father {
  static childName: string = 'childName'
  constructor(name: string, age: number, money: number) {
    super(name, age, money)
  }
  toString() {
    //子类的方法可以和父类方法重名，但子类方法回覆盖父类方法
    // 父类调用不了子类方法，子类可以调用父类方法
    super.toString() //调用父类的toString方法
    console.log('child')
  }
  desc() {
    console.log(this.age)
    // console.log(this.money) // 属性“money”为私有属性，只能在类“Father”中访问。
  }
}

let father = new Father('sxx', 26, 100)
let child = new Child('czp', 25, 12)
console.log(child.name)
console.log(father.name)
// child.age //属性“age”受保护，只能在类“Father”及其子类中访问。
Child.fatherName // 静态属性给了类
console.log(Child.fatherName)
child.toString()
child.desc()
// father.toString()