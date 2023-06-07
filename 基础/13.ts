// 泛型类型别名

type Cart<T> = { list: T[] } | T[]
let c1: Cart<string> = { list: ['1'] }
let c2: Cart<number> = [1, 2, 3]

// interface 和 type 的区别
// 能用接口实现的不要用type
// 1. 接口创建了一个新的名字，他可以在其他任意地方被调用，而类型别名并不创建新的名字，例如报错信息就不会使用别名
// 2.类型别名不能被extends和implements，这时候我们应该尽量使用接口代替类型别名
// 3.当我们需要使用联合类型或元组类型的时候，剋行别名会更合适