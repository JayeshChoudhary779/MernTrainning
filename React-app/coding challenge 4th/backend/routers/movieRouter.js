/* eslint-disable object-curly-spacing */
/* eslint-disable comma-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Movie from '../models/movieModel.js';

const movieRouter = express.Router();

/// //////////////////////// fetching data//////////////////////////////
movieRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const movies = await Movie.find();
    res.send(movies);
  }),
);

/// ////////// adding data //////////////////////////////////
movieRouter.post(
  '/add',
  expressAsyncHandler(async (req, res) => {
    const movie = new Movie({
      Title: req.body.Title,
      Poster: req.body.Poster,
      Type: req.body.Type,
      Year: req.body.Year,
      imdbID: req.body.imdbID,
      Plot: req.body.Plot,
    });
    const createdMovie = await movie.save();
    res.send({
      _id: createdMovie._id,
      Title: createdMovie.Title,
      Poster: createdMovie.Poster,
      Type: createdMovie.Type,
      Year: createdMovie.Year,
      imdbID: createdMovie.imdbID,
      Plot: createdMovie.Plot,
    });
  }),
);

movieRouter.post(
  '/Generic/add',
  expressAsyncHandler(async (req, res) => {
    const moviesData=req.body;
    console.log("add :",moviesData);
    const movie = await Movie.insertMany(moviesData);
    res.send(movie);
  }),
);

/// /////////// search by id//////////////////

movieRouter.get(
  '/id/:id',
  expressAsyncHandler(async (req, res) => {
    const movie = await Movie.find({imdbID: req.params.id});
    if (movie) {
      res.send(movie);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  }),
);

/// ///////////// search by text /////////////////////

movieRouter.get(
  '/text/:Title',
  expressAsyncHandler(async (req, res) => {
    const search = new RegExp(req.params.Title, 'i');
    const movie = await Movie.find({Title: search});
    if (movie) {
      res.send(movie);
    } else {
      res.status(404).send({ message: 'Movie Not Found' });
    }
  }),
);

export default movieRouter;
