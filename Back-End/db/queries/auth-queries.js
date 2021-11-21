const getUserByEmail = `
SELECT *
FROM users
WHERE email = $1`;

// const getUserById = `
// SELECT *
// FROM users
// WHERE  id = $1`;

// const addNewUser = `INSERT INTO
// users (name, email, password)
// VALUES ($1, $2, $3)
// RETURNING id;
// `;

//const modifyUserProfile = `UPDATE users SET name =$2, email =$3, password=$4  WHERE id= $1;`;

module.exports = {
  getUserByEmail
  // addNewUser,
  // getUserById,
  // modifyUserProfile,
};