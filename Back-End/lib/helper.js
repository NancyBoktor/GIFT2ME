const jwt = require("jsonwebtoken");
const { db } = require("./db");

const getUserByEmail =  async (email) => {
    const {rows} = await db.query(`SELECT * from users WHERE email = $1` , [email])
    return rows[0]
}

const createToken = (data)=>{
     return jwt.sign(data, process.env.TOKEN_SECRET)
}
module.exports = {
    getUserByEmail,
    createToken
}
