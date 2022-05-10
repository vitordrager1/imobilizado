const Database = require("../db/config")

module.exports ={
    async cadastrar(req, res){
        const db = await Database()
        
        const imobilizado = req.body.imobilizado
        const descricao = req.body.descricao
        const marca = req.body.marca

        console.log(imobilizado)

        await db.run(`INSERT INTO imobilizado(id, descricao, marca)
            VALUES(
                ${imobilizado}, 
                '${descricao}', 
                '${marca}'
                )`);

        await db.close()

        res.redirect(`/consulta`)

    },
    async pesquisar(req, res){
        const db = await Database()
        const sql = await db.all(`SELECT * FROM imobilizado`)

        res.render("consulta", {sql})
        
    },

    async alterar(req, res){
        const db = await Database()
        const id = req.params.imob
        res.render("alterar", {id})

      
    }


}