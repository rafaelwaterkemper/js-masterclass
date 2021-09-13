let person = {
    name: "rafa",
    age: 25
}

let person2 = person; //copy reference

console.log(person === person2)

let person3 = JSON.parse(JSON.stringify(person)) //Util to clone objects that doesnt need of the prototype

console.log(person === person3)