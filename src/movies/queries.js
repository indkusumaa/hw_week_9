const getMovies = "SELECT * FROM movies LIMIT $1";
const getMoviesById = "SELECT * FROM movies WHERE id = $1";
const checkMovieExists = "SELECT m FROM movies m WHERE m.title = $1";
const addMovies = "INSERT INTO movies (title, genres, year) VALUES ($1, $2, $3)";
const removeMoviesById = "DELETE FROM movies WHERE id = $1";
const updateMoviesById = "UPDATE movies SET title = $2, genres = $3, year = $4 WHERE id = $1";

module.exports = { getMovies, getMoviesById, checkMovieExists, addMovies, removeMoviesById, updateMoviesById };
