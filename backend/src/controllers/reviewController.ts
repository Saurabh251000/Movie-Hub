// src/controllers/reviewController.ts

import { Request, Response } from 'express';
import Review from '../models/Review';

export const fetchReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.findMany();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

export const addReview = async (req: Request, res: Response) => {
  const { movieId, reviewerName, rating, comments } = req.body;
  try {
    const review = await Review.create({
      data: {
        movieId,
        reviewerName,
        rating,
        comments,
      },
    });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error });
  }
};
