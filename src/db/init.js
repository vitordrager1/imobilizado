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
            email TEXT
        )`)

        await db.close()
    }
}

initDb.init();