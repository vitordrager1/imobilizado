module.exports = class Pessoa{

    constructor(id, name, role, email, pass){
        this.id = id
        this.name = name
        this.role = role
        this.email = email
        this.pass = pass
    }

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getRole(){
        return this.role
    }

    getEmail(){
        return this.email
    }

    getPass(){
        return this.pass
    }
}
