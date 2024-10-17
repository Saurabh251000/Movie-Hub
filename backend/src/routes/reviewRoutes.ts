import { Router } from 'express';
import { addReview, fetchReview, deleteReview, updateReview } from '../controllers/reviewController';

const router = Router();

router.post('/add', addReview);
router.get('/fetch',fetchReview);
router.post('/delete', deleteReview);
router.post('/update', updateReview);

export default router;
