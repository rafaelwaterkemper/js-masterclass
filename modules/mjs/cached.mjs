let test = "test"
export function print(name) {console.log(name + test)}
export function changeTest(newValue) {test = newValue}
export function printUpperCase(name) {console.log(name.toUpperCase() + test)}