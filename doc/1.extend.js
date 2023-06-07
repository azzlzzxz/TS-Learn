"use strict";
// var __extends = (this && this.__extends) || (function () {
//     // 继承静态属性
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();

// ====>
var extendStatics = function (Child, Father) {
  // extendStatics = function (Child, Father) {
  //         for (var p in Father)
  //             if (Object.prototype.hasOwnProperty.call(Father, p)) Child[p] = Father[p];
  //     };
  // return extendStatics(Child, Father);

  // =====>

  for (var p in Father) {
    Child[p] = Father[p];
  }
};
var __extends = function (Child, Father) {
  extendStatics(Child, Father); // 把father的静态属性都拷贝到Child身上 

  // function __() {
  //     this.constructor = Child;
  // }
  // Child.prototype = Father === null ? Object.create(Father) : (__.prototype = Father.prototype, new __());

  // ====>

  function Temp() {
    this.constructor = Child
  }
  // 原型继承
  let temp = new Temp()
  temp.prototype = Father.prototype
  Child.prototype = temp
};





// var Father = /** @class */ (function () {
//     function Father() {
//     }
//     return Father;
// }());
// ===>
function Father() {}

// var Child = /** @class */ (function (_super) {
//     __extends(Child, _super);
//     function Child() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     return Child;
// }(Father));
// ====>
__extends(Child, Father);
// function Child() {
//     return Father !== null && Father.apply(this, arguments) || this;
// }
// ===>
function Child(...args) {
  return Father(...args);
}
return Child;