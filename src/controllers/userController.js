// import Pessoa from "./class";

// let user = new Pessoa('1','vitor','13')

// console.log(user)
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
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


        try {
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
        } catch (error) {
            res.render('./error/dadosincorretos2')
        }

    },

    async login(req,res){

        const cpf = req.body.cpf
        const password = req.body.password

        const results = await db.query(`SELECT p.cpf, f.senha, f.idcargo FROM pessoa p INNER JOIN funcionario f on(p.id = f.idpessoa) WHERE cpf = '${cpf}'`)     
        const result = results.rows
        
       
        try {
            const id = result[0].idcargo
            if(result[0].cpf == cpf && result[0].senha == password){
                localStorage.setItem("cargo",id)
                localStorage.setItem("cpf",cpf)
                res.render('list-imob', {result})

            }else(
                res.render('./error/passincorrect')
            )
        } catch (error) {
            console.log('fora')
            res.render('./error/passincorrect')
        }
    },
    async list(req,res){
        const results = await db.query(`select p.nome, p.idade, p.cpf, d.nome departamento, c.nome cargo,TO_CHAR( f.dataadmissao , 'DD/MM/YYYY') as dataadmissao from pessoa p 
        inner join funcionario f on(p.id = f.idpessoa)
        inner join cargo c on(c.id = f.idcargo)
        inner join departamento d on (d.id = f.iddepartamento)`)
        const result = results.rows
        res.render("list-user", {result})
    },

    async alter(req,res){
        const cpf = req.params.cpf
        const results = await db.query(`SELECT nome,idade,cpf,iddepartamento,idcargo,dataadmissao FROM funcionario inner join pessoa on (pessoa.id = funcionario.idpessoa) WHERE cpf = '${cpf}'`)
        const result = results.rows
        res.render('alter-user',{result})
    },

    async update(req,res){
        const nome = req.body.nome
        const idade = req.body.idade
        const cpf = req.body.cpf
        const idDepartamento = req.body.idDepartamento
        const idCargo = req.body.idCargo
        const dataAdmissao = req.body.dataAdmissao

       try {
        const idps = await db.query(`SELECT id from pessoa where cpf = '${cpf}'`)
        const idp = idps.rows
        await db.query(`UPDATE pessoa SET nome = '${nome}', idade = '${idade}', cpf = '${cpf}' where cpf = '${cpf}'`)
        await db.query(`UPDATE funcionario SET idcargo = ${idCargo}, iddepartamento = ${idDepartamento}, dataadmissao = '${dataAdmissao}' where idpessoa = '${idp[0].id}'`)
        res.redirect('/list-user')
       } catch (error) {
           res.render('./error/dadosincorretos3')
       }
    }


}