const Database = require("../db/config")

module.exports ={
   
    async pesquisar(){
        const sql = await db.all(`SELECT * FROM imobilizado`)
        console.log(sql)
        return sql
    }



}