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
        const pass = req.body.password


        let user = new Pessoa(1002,name,role,email,pass) 
      

        await db.run(`INSERT INTO user(nome, cargo, email, senha)
            VALUES(
                '${user.getName()}',
                '${user.getRole()}',
                '${user.getEmail()}',
                '${user.getPass()}')`);

        await db.close()

        res.redirect(`/list-imob`)

    },

    async login(req,res){
        const db = await Database()
        const email = req.body.email
        const password = req.body.password

        const verifyUser = await db.all(`SELECT * FROM user WHERE email = '${email}'`)        
       
        try {
            if(verifyUser[0].email == email && verifyUser[0].senha == password){
                res.redirect('/list-imob')
            }else(
                res.render('passincorrect')
            )
        } catch (error) {
            res.render('passincorrect')
        }
    }


}