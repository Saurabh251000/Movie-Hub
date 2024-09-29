// src/routes/reviewRoutes.ts

import { Router } from 'express';
import { fetchReviews, addReview } from '../controllers/reviewController';

const router = Router();

router.get('/', fetchReviews);
router.post('/', addReview);

export default router;
