const getUsers = "SELECT * FROM users LIMIT $1";
const getUsersById = "SELECT * FROM users WHERE id = $1";
const checkUsersExists = "SELECT u FROM users u WHERE u.email = $1";
const addUsers = "INSERT INTO users (email, gender, password, role) VALUES ($1, $2, $3, $4)";
const loginUsers = "SELECT * FROM users WHERE email = $1 AND password = $2";

module.exports = { getUsers, getUsersById, checkUsersExists, addUsers, loginUsers };
