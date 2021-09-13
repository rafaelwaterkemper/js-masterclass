let address = { street: "São José", number: 123 }

let assigned = Object.assign({},
    {
        name: "Rafael",
        age: 25,
        address //copy reference from object, doesnt clone
    },
    {
        role: "Software Architect" 
    }
)

console.log(assigned)

address.number = 852

console.log(assigned)