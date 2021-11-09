let rafa = {
    name: "Rafael",
    showName() {
        console.log(this.name)
    }
}

rafa["showName"] = function() {
    let fn = rafa.showName.bind(rafa);
    console.log("Before the method")
    fn()
    console.log("After the method")
}
fn()
rafa.showName()