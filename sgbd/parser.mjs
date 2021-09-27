class CommandNotFound {
    constructor(statement) {
        this.message = `Command not found: ${statement}`;
    }
}

export class Parser {
    constructor() {
        this.commands = new Map([
            ['createTable', /create table\s(\w+)\s\((.+)\)/],
            ['select', /select\s(.+)\sfrom\s([a-z]+)(?: where\s(.+))?/],
            ['insert', /insert into\s(\w+)\s?\((.+)\)\s?values\s?\((.+)\)/],
            ['delete', /delete from ([a-z]+)(?: where (.*))?/]
        ])
    }

    parse = (statement) => {
        for (let [command, regex] of this.commands) {
            let parsedStatement = statement.match(regex);
            if (parsedStatement) {
                return {
                    command,
                    parsedStatement
                }
            }
        }
        throw new CommandNotFound(statement)
    }
}