"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.walk = function () {
        console.log("I'm walking here!");
    };
    Person.run = function () {
        console.log("I'm running. bitch!");
    };
    return Person;
}());
exports.default = Person;
