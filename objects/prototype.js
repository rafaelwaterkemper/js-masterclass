//Prototype from constructor function take the prototype from Constructor Object;
//Updating methods from prototype through obj or Constructor Object will reflect all objects 
//that have the prototype in your prototype chain

Object.create({}) //Care with null, because its remove default methods from object

let functionLanguage = {
    paradigm: "functional"
};

let anyLanguage = {};
Object.setPrototypeOf(anyLanguage, functionLanguage)
console.log(Object.getPrototypeOf(anyLanguage))

let scheme = {
    name: "scheme",
    __proto__: functionLanguage
}

console.log(scheme.hasOwnProperty("paradigm"))

let perl = {
    name: "perl",
    __proto__: functionLanguage
}

console.log(scheme.hasOwnProperty("paradigm"))

functionLanguage.paradigm = "OO"

console.log(functionLanguage)
console.log(scheme)
console.log(scheme.paradigm)
console.log(perl)
console.log(perl.paradigm)

scheme.__proto__.paradigm = "change again"

console.log(functionLanguage)
console.log(scheme)
console.log(scheme.paradigm)
console.log(perl)
console.log(perl.paradigm)

let Person = function(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person("Rafa", 12);
p1.__proto__.getName = function () {
    return this.name;
}
console.log(p1.__proto__ === Person.prototype)
console.log(p1.getName())

let p2 = new Person("Guga", 13);

console.log(p2.__proto__ === Person.prototype)
console.log(p2.getName())

let p1Factory = {name: "Salete", age: 51}
console.log(p1Factory.__proto__ === Object.prototype)
p1Factory.__proto__.otherMethodObject = function () {
    return "inside object"
}
console.log(p1Factory.otherMethodObject())
let p2Factory = {name: "Dirceu", age: 51}
console.log(p2Factory.otherMethodObject())
console.log(p2.otherMethodObject())