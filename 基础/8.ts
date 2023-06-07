// 抽象类
// 抽象描述一种抽象的概念，无法被实例化，只能继承
// 抽象方法不能在抽象类中实现，只能在抽象类的具体子类中实现，且必须实现
export {}

abstract class Animal {//抽象类 abstract
  name:string
  abstract speak ():void // 抽象方法
}

class Cat extends Animal {
  speak(): void {
    console.log('111')
  }
}

class Dog extends Animal {
  speak(): void {
    console.log('222')
  }
}

// 重写 （override） 子类重写继承父类的方法
// 重栽 （overload） 函数重栽

// 函数重栽
function double (val:number) 
function double (val:string)
function double (val:any) {
  if (typeof val === 'number') {
    return val * 2
  } else if (typeof val !== 'string') {
    return val + val
  }
}

double(2)
double('2')
double(true)

// 继承和多态
// 多态：同一个方法，不同子类有不同的实现