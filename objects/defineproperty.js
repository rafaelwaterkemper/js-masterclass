const javascript = {};
Object.defineProperty(javascript, "name", {
    configurable: true,
    enumerable: true,
    value: "JavaScript",
    writable: true
});
javascript.name = "ECMAScript";
delete javascript.name;
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));

const javascriptTwo = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.freeze(javascriptTwo);
javascriptTwo.name = "ECMAScript";
javascriptTwo.author = "Brendan Eich";
delete javascriptTwo.year;
console.log(javascriptTwo);
console.log(Object.isExtensible(javascriptTwo));
console.log(Object.isSealed(javascriptTwo));
console.log(Object.isFrozen(javascriptTwo));
Object.setPrototypeOf(javascriptTwo, {}); //Doesnt allow modifie the prototype if one between the follow options are applied: 
//preventExtensions - seal - freeze 