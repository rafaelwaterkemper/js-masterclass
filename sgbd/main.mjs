import { Database } from "./database.mjs";

(async function () {
    try {
        let database = new Database();

        console.time("performance")
        await database.execute("create table author (id number, name string, age number, city string, state string, country string)")
        await Promise.all([
            database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
            database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
            database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)"),
            database.execute("insert into author (id, name, age) values (4, Nathan o Brabo, 24)"),
            database.execute("delete from author where id = 2")
        ])
        const selected = await database.execute("select name, age from author")
        console.log(`Result from promises ${JSON.stringify(selected, null, 4)}`)
        console.timeEnd("performance")
    } catch (err) {
        console.log(err.message);
    }
})();

