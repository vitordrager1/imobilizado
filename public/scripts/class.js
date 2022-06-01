module.exports = class Pessoa{

    constructor(id, nome, idade){
        this.id = id
        this.nome = nome
        this.idade = idade
    }

    getName(){
        return this.nome
    }
}
