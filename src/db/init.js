const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE imobilizado (
            id INTEGER PRIMARY KEY,
            descricao TEXT,
            marca TEXT
        )`);

        await db.close()
    }
}

initDb.init();