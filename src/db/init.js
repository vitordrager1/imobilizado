const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE imobilizado (
            id INTEGER PRIMARY KEY,
            descricao TEXT,
            marca TEXT
        )`);

        await db.exec(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            cargo TEXT,
            email TEXT,
            senha TEXT
        )`)

        await db.run(`INSERT INTO user(id,nome,cargo,email,senha)VALUES(1000,'name','cargo','email','senha')`)

        await db.close()
    }
}

initDb.init();