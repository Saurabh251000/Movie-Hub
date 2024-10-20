import { Router } from 'express';
import { addMovie, fetchMovies, deleteMovie, updateMovie , findMovie} from '../controllers/movieController';

const router = Router();

router.post('/add', addMovie);
router.get('/fetch', fetchMovies);
router.post('/delete', deleteMovie);
router.post('/update', updateMovie);
router.post('/find',findMovie);

export default router;
