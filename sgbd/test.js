let command = "database.execute('insert into author (id, name, age) values (1, Douglas Crockford, 62)'";
let regexToInsert = /insert into\s(\w+)\s?\((.+)\)\s?values\s?\((.+)\)/
let result = regexToInsert.exec(command)
let tableName = result[1]
let fields = result[2].replace(/\s/g, "").split(",")
console.log(result[3])
let values = result[3].replace(/\s/g, "").split(",")
console.log(tableName)
console.log(fields)
console.log(values)