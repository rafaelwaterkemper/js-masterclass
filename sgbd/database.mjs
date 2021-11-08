import { Parser } from "./parser.mjs"

export class Database {
    constructor() {
        this.parser = new Parser();
        this.tables = {};
    }

    execute(statement) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let { command, parsedStatement } = this.parser.parse(statement)

                    if (command) {
                        resolve(this[`_${command}`](parsedStatement))
                    }
                } catch (error) {
                    reject(error);
                }
            }, 1000)
        })
    }
    _createTable(parsed) {
        let [, tableName, columns] = parsed
        columns = columns.replace(/, /g, ";").split(";")
        this.tables[tableName] = {
            columns: {},
            data: []
        }
        for (let column of columns) {
            const [name, type] = column.split(" ");
            this.tables[tableName].columns[name] = type;
        }
    }
    _insert(parsed) {
        let [, tableName, columns, values] = parsed
        columns = columns.split(", ")
        values = values.split(", ")
        let row = {};
        for (let idx in columns) {
            row[columns[idx]] = values[idx]
        }
        this.tables[tableName].data.push(row)
    }
    _select(parsed) {
        let [, columns, tableName, where] = parsed
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
    }
    _delete(parsed) {
        let [, tableName, where] = parsed
        if (where) {
            let [column, value] = where.split(" = ");
            let index = this.tables[tableName].data.findIndex(row => row[column] === value);

            if (index === -1) {
                console.log("No data to delete")
                return;
            }
            this.tables[tableName].data.splice(index, 1)
        } else {
            this.tables[tableName].data = []
        }
    }
    mapSelect(row, columns) {
        let doc = {};
        columns.forEach(column => doc[column] = row[column])
        return doc;
    }
};