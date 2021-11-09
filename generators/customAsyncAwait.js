function sum(a, b) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
function async(fn) {
    const gen = fn();
    asyncR(gen);
}
function asyncR(gen, value) {
    const obj = gen.next(value);
    console.log('obj', obj)
    if (obj.done) return;
    obj.value.then(function (result) {
        asyncR(gen, result);
    });
}
async(function* () {
    const a = yield sum(2, 2);
    const b = yield sum(4, 4)
    const result = yield sum(a, b);
    console.log(result);
});