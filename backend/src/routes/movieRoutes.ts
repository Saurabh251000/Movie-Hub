// src/routes/movieRoutes.ts

import { Router } from 'express';
import { fetchMovies, addMovie } from '../controllers/movieController';

const router = Router();

router.get('/', fetchMovies);
router.post('/', addMovie);

export default router;
