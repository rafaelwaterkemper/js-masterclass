function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0;i < 500;i++) {
                console.log(`Sequential ${i}`)
            }
            resolve(a +b)
        }, 1000)
    })
}
console.time("performance")
Promise.all([
    sum(2, 2),
    sum(5, 5)
]).then(values => {
    console.log(`Returned ${values[0]}:${values[1]} }`)
    console.timeEnd("performance")
}).catch(err => console.log(err))
