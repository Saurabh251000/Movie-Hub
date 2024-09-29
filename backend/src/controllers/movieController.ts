// src/controllers/movieController.ts

import { Request, Response } from 'express';
import Movie from '../models/Movie';

export const fetchMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.findMany();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies', error });
  }
};

export const addMovie = async (req: Request, res: Response) => {
  const { name, releaseDate } = req.body;
  try {
    const movie = await Movie.create({
      data: {
        name,
        releaseDate,
      },
    });
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error adding movie', error });
  }
};
