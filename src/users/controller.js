const pool = require("../../db.js");
const queries = require("./queries.js");
const bycript = require("bcrypt");
const { signToken } = require("../../util/auth.js");

//  get user data
const getUsers = (req, res) => {
  const limit = req.query.limit;
  pool.query(queries.getUsers, [limit], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

//get user data by id
const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUsersById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

//insert user data
const addUsers = async (req, res) => {
  var { email, gender, password, role } = req.body;
  //   check if email already exist
  pool.query(queries.checkUsersExists, [email], (error, result) => {
    if (result.rows.length) {
      res.send("User data already exist");
    }
  });

  //hashing user password before insert to db
  let hashedPassword = await bycript.hash(password, 10);
  console.log(hashedPassword);
  //   add Users to db
  pool.query(queries.addUsers, [email, gender, hashedPassword, role], (error, result) => {
    if (error) throw error;
    res.status(201).send("User Created Succesfully!");
  });
};

const loginUsers = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  pool.query(queries.loginUsers, [email, password], (error, result) => {
    if (error) {
      //console.log(result.rows);
      res.status(401).json({ message: "Error!" });
    } else {
      if (result.rows < 1) {
        res.status(401).json({ message: "Not Found!" });
      } else {
        const token = signToken(result.rows[0]);
        res.json({
          token: token,
        });
      }
    }
  });
};

module.exports = { getUsers, getUsersById, addUsers, loginUsers };
