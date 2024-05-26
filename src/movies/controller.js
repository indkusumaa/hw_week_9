const pool = require("../../db.js");
const queries = require("./queries.js");

const getMovies = (req, res) => {
  const limit = req.query.limit;
  pool.query(queries.getMovies, [limit], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getMoviesById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getMoviesById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addMovies = (req, res) => {
  const { title, genres, year } = req.body;
  //   check if movie already exist
  pool.query(queries.checkMovieExists, [title], (error, result) => {
    if (result.rows.length) {
      res.send("Movie data already exist");
    }
  });

  //   add movies to db
  pool.query(queries.addMovies, [title, genres, year], (error, result) => {
    if (error) throw error;
    res.status(201).send("Movies Created Succesfully!");
  });
};

const removeMoviesById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getMoviesById, [id], (error, result) => {
    const noMovieFound = !result.rows.length;
    if (noMovieFound) {
      res.send("Movie data not found!");
    }

    pool.query(queries.removeMoviesById, [id], (error, result) => {
      if (error) throw error;
      res.status(200).send("Movies data remove sucessfully.");
    });
  });
};

const updateMoviesById = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, genres, year } = req.body;
  pool.query(queries.getMoviesById, [id], (error, result) => {
    const noMovieFound = !result.rows.length;
    if (noMovieFound) {
      res.send("Movie data not found!");
    }

    pool.query(queries.updateMoviesById, [id, title, genres, year], (error, result) => {
      if (error) throw error;
      res.status(200).send("Movies updated sucessfully.");
    });
  });
};
module.exports = { getMovies, getMoviesById, addMovies, removeMoviesById, updateMoviesById };
