import express from 'express';
import movieRoutes from './routes/movieRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import connectDB from './config/database.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
connectDB();

app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

app.use(errorHandler);

export default app;
