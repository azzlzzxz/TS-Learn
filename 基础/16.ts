export{}


// 函数的协变与逆变
// A<= B意味着A是B的子类型
// A->B指的是以A为参数类型，以B为返回值类型的函数类型
// x:A意味着x的类型为A

// 返回值类型是协变的，而参数类型是逆变的
// 返回值类型可以传子类，参数可以传父类
// 参数逆变父类，返回值协变子类 （简称：参逆父，返协子）

class Animal { }
class Dog extends Animal {
  public name: string = 'czp'
}
class BlackDog extends Dog {
  public age: number = 25
}
class WhiteDog extends Dog {
  public home: string = '杭州'
}
let animal: Animal
let dog: Dog
let blackDog: BlackDog
let whiteDog: WhiteDog
type Callback = (dog: Dog) => Dog
function exec(callback: Callback): void {
  // callback(animal)
  // callback(dog)
  // callback(blackDog)
  // callback(whiteDog)
}

// 参数可以传自己和自己的子类
// 返回值可以传自己和自己的父类
//四种情况
//1、参数是子类返回值是子类
//2、参数是子类返回值是父类
//3、参数是父类返回值是父类
//4、参数是父类返回值是子类

type ChildToChild = (blackDog: BlackDog) => BlackDog
let childToChild: ChildToChild
exec(childToChild) //n

type ChildToParent = (blackDog: BlackDog) => Animal
let childToParent: ChildToParent
exec(childToParent)//n

type ParentToParent = (animal: Animal) => Animal
let parentToParent: ParentToParent
exec(parentToParent)//n

type ParentToChild = (animal: Animal) => BlackDog
let parentToChild: ParentToChild
exec(parentToChild)//y

// "strictFunctionTypes": false 参数传自己，自己的子类，自己的父类都可
// ts中其实参数是双向协变的