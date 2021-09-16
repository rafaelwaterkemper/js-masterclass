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

        if (command.startsWith("select")) {
            return this._select(command)
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
    },
    _select(command) {
        let regexToInsert = /select\s(.+)\sfrom\s([a-z]+)(?: where\s(.+))?/
        let [,columns,tableName,where] = regexToInsert.exec(command);
        columns = columns.split(", ");

        if (!where) {
            return this.tables[tableName].data.map(row => this.mapSelect(row, columns))
        }

        where = where.split(" = ")
        return this.tables[tableName].data
            .filter(row => {
                return row[where[0]] === where[1]
            })
            .map(row => this.mapSelect(row, columns))
    },
    mapSelect(row, columns) {
        let doc = {};
        columns.forEach(column => doc[column] = row[column])
        return doc;
    }
};

try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    database.execute("insert into author (id, name, age) values (4, Nathan o Brabo, 24)");
    let results = database.execute("select name, age from author");
    let resultsWithWhere = database.execute("select name from author where id = 2");
    console.log("Resultados do select: ", results)
    console.log("Resultados do select with where: ", resultsWithWhere)
} catch (err) {
    console.log(err.message);
}