function createIterable(... array) {
    return {
        *[Symbol.iterator]() {
            let i = 0;
            while (i < array.length) {
                yield array[i++]
            }
        }
    }
}

const languages = createIterable('Java', 'Python', 'Golang')

for (let language of languages) {
    console.log(language)
}