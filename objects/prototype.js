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