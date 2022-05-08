const res = require("express/lib/response")
const Database = require("../db/config")

module.exports ={
   
    async pesquisar(req, res){
        const db = await Database()
        const sql = await db.all(`SELECT * FROM imobilizado`)
        
        console.log(sql)

        res.render("consulta", {sql: sql})
        
    }



}