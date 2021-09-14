const database = {
    tables: {},
    execute(command) {
        if (command.startsWith("create table")) {
            this._createTable(command)
        }
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

database.execute("create table author (id number, name string, age number, city string, state string, country string)");
console.log(JSON.stringify(database, undefined, " "))