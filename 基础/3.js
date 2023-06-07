"use strict";
exports.__esModule = true;
// exports.__esModule = true;  表示当前是一个es6模块
// Person标识符重复：因为声明的person是全局的类，1.ts里也有 ，在ts文件中加export{},回使ts认为这个文件是一个模块，这样就不会报错
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'sxx';
    }
    Person.prototype.getName = function () {
        // console.log(this.name)
    };
    return Person;
}());
// 类就是语法糖最后编译还是函数
var p1 = new Person();
p1.name = 'sxx';
p1.getName();
// 定义存取器
// 在ts里可以通过存取器来改变一个类中属性的读取和赋值操作
var User = /** @class */ (function () {
    function User(myName) {
        this.myName = myName;
    }
    Object.defineProperty(User.prototype, "name", { // 属性描述器
        get: function () {
            return this.myName;
        },
        set: function (val) {
            this.myName = val;
        },
        enumerable: false,// 是否可枚举 for in
        configurable: true // 可以delete
    });
    return User;
}());
var user = new User('ws'); // ws 给了constructor
user.name = 'sxx'; // sxx 给了set 
console.log(user.name); // get
