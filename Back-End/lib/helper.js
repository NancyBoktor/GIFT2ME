const {db} = require("./db");

const getUserByEmail =  async (email) => {
    const {rows} = await db.query(`SELECT * from users WHERE email = $1` , [email])
    return rows[0]
}


module.exports = {
    getUserByEmail
}
