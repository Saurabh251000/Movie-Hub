import { Request, Response } from 'express';
import prisma from '../../prisma/client';

export const addMovie = async (req: Request, res: Response) => {
    const { name, releaseDate } = req.body;
    try {
        const newMovie = await prisma.movie.create({
            data: { name, releaseDate: new Date(releaseDate) },
        });
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ message: 'Error adding movie', error });
    }
};

export const fetchMovies = async (req: Request, res: Response) => {
    try {
        const movies = await prisma.movie.findMany();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies', error });
    }
};

export const updateMovie = async (req: Request, res: Response) => {
    const { id, name, releaseDate } = req.body;
    try {
        const updatedMovie = await prisma.movie.update({
            where: { id },
            data: {
                name,
                releaseDate: new Date(releaseDate),
            },
        });
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(500).json({ message: 'Error updating movie', error });
    }
};

export const deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
        await prisma.movie.delete({
            where: { id },
        });
        res.status(200).json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting movie', error });
    }
};

