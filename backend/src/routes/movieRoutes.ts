import { Router } from 'express';
import { addMovie, fetchMovies, deleteMovie, updateMovie } from '../controllers/movieController';

const router = Router();

router.post('/add', addMovie);
router.get('/fetch', fetchMovies);
router.post('/delete', deleteMovie);
router.post('/update', updateMovie);

export default router;
