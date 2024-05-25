const { Router } = require("express");
const router = Router();
const controller = require("./controller.js");

/**
 * @swagger
 * components:
 *  schemas:
 *   Movies:
 *    type: object
 *    required:
 *        -id
 *        -email
 *        -password
 *        -gender
 *        -role
 *    properties:
 *       id:
 *         type: integer
 *         description: The auto-generated id of the book
 *       email:
 *         type: string
 *         description: The title of the movies
 *       password:
 *         type: string
 *         description: The genres of the movies
 *       gender:
 *         type: string
 *         description: The year of the movies released
 *       role:
 *         type: string
 *         description: The year of the movies released
 *    example:
 *       id: 123
 *       email: ind@gmail.com
 *       password: skanslkdanw
 *       gender: male
 *       role: Engineer
 *
 * */

router.get("/", controller.getUsers);
router.get("/:id", controller.getUsersById);
router.post("/", controller.addUsers);
router.post("/login", controller.loginUsers);

module.exports = router;
