function Pessoa(nome) {
    this.nome = nome;
    this.mostrarNome = () => {
        console.log(this.nome)
    }

    this.setNome = (nome) => {
        this.nome = nome
    }
}

Pessoa.mostrarNomeMinusculo = (obj) => {
    console.log(obj.nome.toLowerCase())
}

Pessoa.prototype.mostrarNomeMaiusculo = function() {
    console.log(this.nome.toUpperCase())
}

let rafa = new Pessoa("rafa");
console.log(Object.getOwnPropertyNames(rafa))
Pessoa.mostrarNomeMinusculo(rafa)
rafa.mostrarNomeMaiusculo()

rafa.setNome("Guga")
Pessoa.mostrarNomeMinusculo(rafa)
rafa.mostrarNomeMaiusculo()

let func = (b) => () => {
    console.log(b)
}

console.log(func(12)())