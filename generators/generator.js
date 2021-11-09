//Generator will pause execution at the last line before the "yield" word

function* infinite() {
    let value = 0
    console.log('Rafa')
    while (true) {
        try {
            const reset = yield value++
            console.log('After ', reset)
            if (reset) {
                value = 0
            }
        } catch (err) {
            console.log(err)
        }
    }
}

function today() {
    console.log(new Date())
}

let infiniteGenerator = infinite()

console.log(infiniteGenerator.next())
console.log(infiniteGenerator.next())
today()
infiniteGenerator.throw('The error can be handled using try/catch')
console.log(infiniteGenerator.next())
console.log(infiniteGenerator.next(true))