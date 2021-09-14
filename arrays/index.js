let numbers =  [4, 3 ,5 ,6];

console.log(Object.entries(numbers))
const [key, value] = numbers
console.log("Key: " + key + " Val: " + value)

let numberSingle = [18]

const [otherKey, otherValue] = numberSingle

console.log("otherKey: " + otherKey + " otherValue: " + otherValue)

let destructiring = {
    name: "Rafael",
    age: 24
}

const {name, age} = destructiring
console.log(`name ${name} - age ${age}`)