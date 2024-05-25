const express = require("express");
const moviesRoutes = require("./src/movies/routes.js");
const usersRoutes = require("./src/users/routes.js");
const app = express();
const port = 3000;
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");

//express logging
//app.use(morgan("tiny"));
app.use(morgan("common"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Test!");
});

//base route
app.use("/api/movies", moviesRoutes);
app.use("/api/users", usersRoutes);

//swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
      description: "This is simple CRUD API Application made with Express js and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: [`src/movies/routes.js`, `src/users/routes.js`],
};

const specs = swaggerjsdoc(options);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(specs));

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
