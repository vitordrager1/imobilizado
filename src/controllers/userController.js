// import Pessoa from "./class";

// let user = new Pessoa('1','vitor','13')

// console.log(user)

const db = require("../db/config")
const matricula = require("../../public/scripts/user")
const {Pessoa, Funcionario, Endereco, Cargo, Departamento} = require ("../../public/scripts/class")


module.exports ={
    async create(req, res){
        
        const nome = req.body.nome
        const idade = req.body.idade
        const cpf = req.body.cpf
        const idDepartamento = req.body.idDepartamento
        const idCargo = req.body.idCargo
        const dataAdmissao = req.body.dataAdmissao
        const senha = req.body.password


        let user = new Funcionario(0,nome,idade,cpf,idDepartamento,idCargo,dataAdmissao,senha) 


        await db.query(`INSERT INTO pessoa(nome, idade, cpf)
            VALUES('${user.getNomePessoa()}',${user.getIdadePessoa()},'${user.getCpf()}')`);

        const results = await db.query(`SELECT id FROM pessoa WHERE cpf = '${cpf}'`)
        const result = results.rows


        await db.query(`INSERT INTO funcionario (idPessoa, idCargo, idDepartamento, dataAdmissao, senha)
            VALUES(
                ${result[0].id},
                ${idCargo},
                ${idDepartamento},
                '${dataAdmissao}',
                '${senha}'
            )`);


        res.redirect(`/list-imob`)

    },

    async login(req,res){

        const cpf = req.body.cpf
        const password = req.body.password

        const results = await db.query(`SELECT p.cpf, f.senha FROM pessoa p INNER JOIN funcionario f on(p.id = f.idpessoa) WHERE cpf = '${cpf}'`)     
        const result = results.rows
       
        try {
            if(result[0].cpf == cpf && result[0].senha == password){
                res.redirect('/list-imob')
            }else(
                res.render('passincorrect')
            )
        } catch (error) {
            res.render('passincorrect')
        }
    }


}