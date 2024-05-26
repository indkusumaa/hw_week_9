const { Router } = require("express");
const router = Router();
const controller = require("./controller.js");
const { authMiddleware } = require("../../middleware/authMiddleware.js");
/**
 * @swagger
 * components:
 *  schemas:
 *   Movies:
 *    type: object
 *    required:
 *        -title
 *        -genres
 *        -year
 *    properties:
 *       id:
 *         type: integer
 *         description: The auto-generated id of the book
 *       title:
 *         type: string
 *         description: The title of the movies
 *       genres:
 *         type: string
 *         description: The genres of the movies
 *       year:
 *         type: string
 *         format: date
 *         description: The year of the movies released
 *    example:
 *      id: 123
 *      title: The Avengers
 *      genres: Sci-Fi
 *      Year: 2012
 *
 * */

/**
 * @swagger
 * tags:
 *  name: Movies
 *  description: the movies managing api
 * /api/movies/[token]:
 *  get:
 *      summary: Fetching movies data
 *      tags: [Movies]
 *      requestBody: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Movies'
 *      responses:
 *          200:
 *              description: movies data
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Movies'
 *          500:
 *              description: some server error
 */

/**
 * @swagger
 * tags:
 *  name: Movies
 *  description: the movies managing api
 * /api/movies/[id]/[token]:
 *  get:
 *      summary: Fetching 1 movie data
 *      tags: [Movies]
 *      requestBody: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Movies'
 *      responses:
 *          200:
 *              description: movies data
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Movies'
 *          500:
 *              description: some server error
 */

/**
 * @swagger
 * tags:
 *  name: Movies
 *  description: the movies managing api
 * /api/movies/:
 *  post:
 *      summary: Adding data to database
 *      tags: [Movies]
 *      requestBody: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Movies'
 *      responses:
 *          200:
 *              description: created movies data
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Movies'
 *          500:
 *              description: some server error
 */

/**
 * @swagger
 * tags:
 *  name: Movies
 *  description: the movies managing api
 * /api/movies/[id]:
 *  delete:
 *      summary: Deleting data from database
 *      tags: [Movies]
 *      requestBody: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Movies'
 *      responses:
 *          200:
 *              description: Movies data remove sucessfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Movies'
 *          500:
 *              description: some server error
 */

/**
 * @swagger
 * tags:
 *  name: Movies
 *  description: the movies managing api
 * /api/movies/[id]:
 *  put:
 *      summary: Updating data to database
 *      tags: [Movies]
 *      requestBody: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Movies'
 *      responses:
 *          200:
 *              description: Movies updated sucessfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Movies'
 *          500:
 *              description: some server error
 */
router.get("/:token", authMiddleware, controller.getMovies);
router.get("/:id/:token", authMiddleware, controller.getMoviesById);
router.post("/", controller.addMovies);
router.delete("/:id", controller.removeMoviesById);
router.put("/:id", controller.updateMoviesById);
module.exports = router;
