export class CommandNotFound {
    constructor(statement) {
        this.message = `Command not found: ${statement}`;
    }
}