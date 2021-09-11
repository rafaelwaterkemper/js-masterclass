let regExp = /^(\w+)@(\w+)(\.\w{2,3})+$/;
let result = regExp.exec("mary@hotmail.com");
console.log(result[0])
console.log(result[1])
console.log(result[2])
console.log(result[3])
console.log(result[4])
console.log(result.index)
console.log(result.input)
