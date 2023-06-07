"use strict";
// 模块
// 全局模块
// 1.在默认情况下，当你开始一个新的ts文件中写代码是，它处于全局命名空间中
// 2.使用全局变量空间是危险的，因为它会与文件内的代码命名冲突，我们推荐使用文件模块 
exports.__esModule = true;
exports.b = exports.a = void 0;
// 默认处在全局下
// let foo =123
// 文件模块
// 1.文件模块也被称为外部模块，如果在你的ts文件的跟级别位置含有important或export，那么它会在这个文件中创建一个本地的作用域
// 2.模块是ts中外部模块的简称，侧重于代码和服用
// 3.模块在其自身的作用域里执行，而不是在全局作用域里
// 4.一个模块里的变量、函数、类等在外部是不可见的除非你把它导出
// 5.如果想要使用一个模块里导出的变量，则需要导入
// 如果出现了import或export，那么这个文件就成为一个外部模块，简称模块
exports.a = 1;
exports.b = 2;
var c = 3;
exports["default"] = 'sxx';
// 模块规范
// 1.AMD 不要使用它，它仅能在浏览器工作
// 2.SystemJs 这是一个好的实验，已经被ES模块替代
// 3.ES模块，它并没有准备好，浏览器还不支持
// 4.使用module:commonjs选项来替代这些模式，将会是一个好主意
