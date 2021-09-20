function createIterable(...array) {
    return {
        [Symbol.iterator]() {
            let index = 0;
            return {
                next() {
                    if (index < array.length) {
                        return {
                            value: array[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                }
            }
        }
    }
}

let iterable = createIterable("Java", "Javascript", "C");

console.log([...iterable])
for (let it of iterable) {
    console.log(it)
}