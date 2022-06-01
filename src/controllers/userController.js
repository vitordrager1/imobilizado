// import Pessoa from "./class";

// let user = new Pessoa('1','vitor','13')

// console.log(user)

const Database = require("../db/config")
const Pessoa = require ("../../public/scripts/class")


module.exports ={
    async create(req, res){
        const db = await Database()
        
        const name = req.body.name
        const role = req.body.role
        const email = req.body.email


        let user = new Pessoa(1002,name,role,email) 
        console.log(user.getId())
        console.log(user.getName())
        console.log(user.getRole())
        console.log(user.getEmail())

        await db.run(`INSERT INTO user(nome, cargo, email)
            VALUES(
                '${user.getName()}',
                '${user.getRole()}',
                '${user.getEmail()}')`);

        await db.close()

        res.redirect(`/list-imob`)

    }


}