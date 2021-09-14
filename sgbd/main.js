const DatabaseError = function(statement, message) {
    this.statement = statement;
    this.message = message;
}

const database = {
    tables: {},
    execute(command) {
        if (command.startsWith("create table")) {
            return this._createTable(command)
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
    }
};


try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    console.log(JSON.stringify(database, undefined, " "))
    database.execute("select id, name from author");
} catch(err) {
    console.log(err.message);
}