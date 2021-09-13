let target = "create table author (id number, name string, age number, city string, state string, country string)"

let regexToGetTablename = /create table\s(\w+)\s\((.+)\)/
let result = regexToGetTablename.exec(target)
let tableName = result[1]
let columns = result[2].replace(/, /g, ";").split(";")

const database = {
    tables: {
        [tableName]: {
            columns: {},
            data: []
        }
    }
};

for (let column of columns) {
    const [name, type] = column.split(" ");
    database.tables[tableName].columns[name] = type;
}
console.log(JSON.stringify(database, undefined, " "))