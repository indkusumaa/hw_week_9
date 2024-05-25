const jwt = require("jsonwebtoken");

const signToken = (data) => {
  const token = jwt.sign(data, "secretkey", { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
  const data = jwt.verify(token, "secretkey");
  return data;
};

module.exports = { signToken, verifyToken };
