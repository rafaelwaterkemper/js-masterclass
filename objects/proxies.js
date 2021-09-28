let rafa = {
    name: "Rafael",
    showName() {
        console.log(this.name)
    }
}

function makeProxy(obj, fn) {
    let original = obj[fn].bind(obj)
    obj[fn] = function() {
        console.log("Before the method")
        original()
        console.log("After the method")
    }
}
makeProxy(rafa, "showName")

rafa.showName()
