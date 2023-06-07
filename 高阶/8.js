"use strict";
exports.__esModule = true;
exports.home = exports.zoo = void 0;
var _7_1 = require("./7");
// import name from './7'
console.log(_7_1.a, _7_1.b);
console.log(_7_1["default"]);
var zoo;
(function (zoo) {
    var Elephant = /** @class */ (function () {
        function Elephant() {
        }
        return Elephant;
    }());
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.eat = function () { console.log('zoo dog'); };
        return Dog;
    }());
    zoo.Dog = Dog;
    var moneyArea;
    (function (moneyArea) {
        var Money = /** @class */ (function () {
            function Money() {
            }
            Money.prototype.eat = function () { console.log('zoo Money'); };
            return Money;
        }());
        moneyArea.Money = Money;
    })(moneyArea || (moneyArea = {}));
})(zoo = exports.zoo || (exports.zoo = {}));
var home;
(function (home) {
    var Wife = /** @class */ (function () {
        function Wife() {
        }
        return Wife;
    }());
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.eat = function () { console.log('home dog'); };
        return Dog;
    }());
    home.Dog = Dog;
})(home = exports.home || (exports.home = {}));
var dogOfZoo = new zoo.Dog();
dogOfZoo.eat();
var dogOfHome = new home.Dog();
dogOfHome.eat();
