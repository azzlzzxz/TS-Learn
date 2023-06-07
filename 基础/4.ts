export { }
// 继承

class Person {
  name: string
  age: string
  constructor(name: string, age: string) {
    this.name = name
    this.age = age
  }
  getName(): string {
    return this.name
  }
  setName(name: string): void {
    this.name = name
  }
}

class Student extends Person {
  stuNo: number
  constructor(name: string, age: string, stuNo: number) {
    super(name, age)
    this.stuNo = stuNo
  }
  getStuNo() {
    return this.stuNo
  }
}

let s1 = new Student('sxx', '11', 1)
console.log(s1.getStuNo())
console.log(s1.name)