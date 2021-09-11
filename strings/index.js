//all operations are case sensitive
console.log("Javascript".startsWith("Java"))
console.log("Javascript".startsWith("java"))
console.log("Javascript".includes("Java"))
console.log("Javascript".includes("java"))

//localeCompare
//if string that is being compared is less, then return -1, 0 to equal and 1 if its greater
console.log("ab".localeCompare("ac"))
console.log("ab".localeCompare("ab"))
console.log("ac".localeCompare("ab"))
console.log("á".localeCompare("b"))
console.log("ã".localeCompare("b"))

console.log("Java".search(/av/));

console.log("JavaScript".slice(0, 4));
console.log("JavaScript".slice(0, -6)); //Java
console.log("JavaScript".slice(-6)); //Script - count from right to left