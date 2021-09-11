//Primitive, unique - ES6 (Ecmascript 2015)

Symbol("a")
Symbol("b")
Symbol("c")

let regexp = /JavaScript/;

//Turn the regex in a sinple string
regexp[Symbol.match] = false;

console.log("/JavaScript/".startsWith(regexp))

