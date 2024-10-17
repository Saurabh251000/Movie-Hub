import { Request, Response } from 'express';
import prisma from '../../prisma/client';

export const addReview = async (req: Request, res: Response) => {
    const { movieId, reviewerName, rating, comments } = req.body;
    try {
        const review = await prisma.review.create({
            data: { movieId, reviewerName, rating, comments },
        });
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error });
    }
};

export const fetchReview = async (req: Request, res: Response) => {
    const { movieId } = req.query;
    try {
        const reviews = await prisma.review.findMany({
            where: { movieId: movieId as string },
        });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
};

export const deleteReview = async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
        await prisma.review.delete({
            where: { id },
        });
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error });
    }
};

export const updateReview = async (req: Request, res: Response) => {
    const { id, reviewerName, rating, comments } = req.body;
    try {
        const updatedReview = await prisma.review.update({
            where: { id },
            data: {
                reviewerName,
                rating,
                comments,
            },
        });
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: 'Error updating review', error });
    }
};


// Add functions for fetchReview, deleteReview, updateReview similarly
