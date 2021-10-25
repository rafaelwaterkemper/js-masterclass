let test = "test"
module.exports.print = (name) => console.log(name + test)
module.exports.changeTest = (newValue) => test = newValue
module.exports.printUpperCase = (name) => console.log(name.toUpperCase() + test)