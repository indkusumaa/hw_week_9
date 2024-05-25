const { verifyToken } = require("../util/auth.js");

const authMiddleware = (req, res, next) => {
  const token = req.params.token;
  const data = verifyToken(token);
  console.log(data);
  if (data.role === "Project Manager") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { authMiddleware };
