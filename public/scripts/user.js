const Database = require("../../src/db/config")

module.exports = function userValid(email,password) {
    const db = Database();
   
    
    const pass = db.all(``)
}