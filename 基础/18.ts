export { }
// 类型保护
// 1.类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域变量的类型
// 2.类型保护就是能通过关键字(typeof,instanceof,in)来缩小范围，判断出分支中的类型

function double(input: string | number) {
  if (typeof input === 'string') {
    console.log(input)
  } else if (typeof input === 'number') {
    console.log(input)
  }
}

class Animal { }
class Bird extends Animal { }
class Dog extends Animal { }

function getName(animal: Animal) {
  if (animal instanceof Bird) {
    console.log(animal)
  } else if (animal instanceof Dog) {
    console.log(animal)
  }
}

// null 保护
function getFirstLetter(s: string | null) {
  // "strictNullChecks": false,
  // return s.charAt(0) // 不会报错

  // "strictNullChecks": true,
  // return s.charAt(0) // s可能为null，会报错
  // 怎么解决
  // 1
  // if (s === null) {
  //   return ''
  // }

  // 2
  // s = s || ''

  // 3
  // return s!.charAt(0)

  // 但是这种就识别不了
  // function log () {
  //   s = s || ''
  // }
  // log()
  // return s.charAt(0) // 会报错

  // return s.charAt(0)
}

// 链判断运算符 (处于stage1阶段，ts也不支持)
// 先检查属性是否存在，再访问属性上的运算符，符号为?
let a = { b: 2 }
let result = a?.b
// a?.b ===> a === null ? undefined : a.b
console.log(result)

let x = 'b'
a?.[x]
// a?.b() // 调方法
// a?.[x]() 

// 可辨的识联合类型
// 利用联合类型中的公共字段，来进行类型保护的一种技巧
interface WarningButton {
  class: 'warning',
  text1: '修改'
}

interface DangerButton {
  class: 'danger',
  text2: '删除'
}

// 相同属性,值不一样能够区分类型
type Button = WarningButton | DangerButton
function getButton(button: Button) {
  if (button.class === 'warning') {
    console.log(button)
  } else if (button.class === 'danger') {
    console.log(button)
  }
}

interface User {
  userName: string
}

type Action = { type: 'add', payload: User } | { type: 'delete', payload: number }
const reducer = (action: Action) => {
  switch (action.type) {
    case 'add':
      action.payload.userName
      break;
    case 'delete':
      let id: number = action.payload
      break;
    default:
      break;
  }
}

// in操作符
interface Bird {
  swing: string
}
interface Dog {
  leg: string
}
function get(x: Bird | Dog) {
  if ('swing' in x) {
    console.log(x)
  } else if ('leg' in x) {
    console.log(x)
  }
}

// 自定义类型保护
namespace c {
  interface Bird {
    leg: number //2
  }
  interface Dog {
    leg: number //4
  }
  // function isType(type: Type1 | Type2): type is Type1 {

  // }

  // 类型谓词： parameterName is Type 那个参数是什么类型 ，parameter必须是函数的参数名
  function isBird(x: Bird | Dog): x is Bird {
    return x.leg === 2 // true x is Bird 就是true
  }
  function getAnimal (x: Bird | Dog) {
    if (isBird(x)){
      console.log(x)
    } else {
      console.log(x)
    }
  }
}