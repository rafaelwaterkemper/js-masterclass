let target = "create table author (id number, name string, age number, city string, state string, country string)"

let regexToGetTablename = /create table\s(\w+)\s\((.+)\)/
let result = regexToGetTablename.exec(target)
let tableName = result[1]
let columns = result[2].replace(/, /, ";").split(";")
console.log(tableName)
console.log(columns)