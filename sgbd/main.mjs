import { Database } from "./database.mjs";

try {
    let database = new Database();
    console.time("performance")
    database.execute("create table author (id number, name string, age number, city string, state string, country string)")
        .then(res => {
            return Promise.all([
                database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
                database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
                database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)"),
                database.execute("insert into author (id, name, age) values (4, Nathan o Brabo, 24)"),
                database.execute("delete from author where id = 2")
            ]).then(values => {
                return database.execute("select name, age from author")
            })
        }).then(result => {
            console.log(`Result from promises ${JSON.stringify(result, null, 4)}`)
            console.timeEnd("performance")
        }).catch(err => {
            console.log("Error: ", err)
        })


    // let results = database.execute("select name, age from author");
    // let resultsWithWhere = database.execute("select name from author where id = 2");
    // console.log(results)
    // console.log(resultsWithWhere)
    // database.execute("delete from author");
    // results = database.execute("select name, age from author");
    // console.log(results)
} catch (err) {
    console.log(err.message);
}