const DatabaseError = function (statement, message) {
    this.statement = statement;
    this.message = message;
}

const database = {
    tables: {},
    execute(command) {
        if (command.startsWith("create table")) {
            return this._createTable(command)
        }
        if (command.startsWith("insert")) {
            return this._insert(command)
        }
        throw new DatabaseError(command, `Syntax error: "${command}"`)
    },
    _createTable(command) {
        let regexToGetTablename = /create table\s(\w+)\s\((.+)\)/
        let result = regexToGetTablename.exec(command)
        let tableName = result[1]
        let columns = result[2].replace(/, /g, ";").split(";")
        this.tables[tableName] = {
            columns: {},
            data: []
        }
        for (let column of columns) {
            const [name, type] = column.split(" ");
            this.tables[tableName].columns[name] = type;
        }
    },
    _insert(command) {
        let regexToInsert = /insert into\s(\w+)\s?\((.+)\)\s?values\s?\((.+)\)/
        let result = regexToInsert.exec(command)
        let tableName = result[1]
        let columns = result[2].split(", ")
        let values = result[3].split(", ")
        let row = {};
        for (let idx in columns) {
            row[columns[idx]] = values[idx]
        }
        this.tables[tableName].data.push(row)
    }
};

try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    console.log(JSON.stringify(database, undefined, " "))
    database.execute("select id, name from author");
} catch (err) {
    console.log(err.message);
}