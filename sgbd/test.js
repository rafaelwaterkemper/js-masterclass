let command = "delete from author where id = 2"
let [,tableName,where] = command.match(/delete from ([a-z]+) where (.*)/)
console.log(result)

// let command = "select name, age from author where id = 1 and nome = andre";
// let regexToInsert = /select\s(.+)\sfrom\s([a-z]+)(?: where\s(.+))*( (?:(?:and|or) (.+)))+/
// let result = regexToInsert.exec(command)
// console.log(result)
// let columns = result[1].split(",")
// let tableName = result[2]
// let where;
// if (result[3]) {
//     where = result[3].split(" = ")
// }
// console.log(columns)
// console.log(tableName)
// console.log(where)

// let command = "select name, age from author where id = 1";
// let regexToInsert = /select\s(.+)\sfrom\s([a-z]+)\swhere\s(.+)/
// let result = regexToInsert.exec(command)
// let columns = result[1].split(",")
// let tableName = result[2]
// let where = result[3].split(" = ")
// console.log(columns)
// console.log(tableName)
// console.log(where)