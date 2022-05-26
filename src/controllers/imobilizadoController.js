const Database = require("../db/config")

module.exports ={
    async create(req, res){
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

        res.redirect(`/list-imob`)

    },
    async list(req, res){
        const db = await Database()
        const sql = await db.all(`SELECT * FROM imobilizado`)

        res.render("list-imob", {sql})
        
    },

    async alter(req, res){
        const db = await Database()
        const id = req.params.imob
        const sql = await db.all(`SELECT * FROM imobilizado WHERE id = ${id}`)

        await db.close();
        res.render("alter-imob", {sql})

      
    },

    async update(req,res){
        const db = await Database()
        const id = req.params.imob
        const descricao = req.body.descricao
        const marca = req.body.marca
        await db.run(`UPDATE imobilizado SET descricao = "${descricao}", marca = "${marca}" WHERE id = "${id}"`);

        await db.close()

        res.redirect("/list-imob")
    }


}