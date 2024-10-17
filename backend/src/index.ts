import app from './app'; // Import the Express app
import dotenv from 'dotenv';
import prisma from '../prisma/client'; 
dotenv.config(); 

const PORT = process.env.PORT || 3000; 

// Handle database connection
async function connectToDatabase() {
  try {
    await prisma.$connect(); // Connect to MongoDB
    console.log('Connected to MongoDB via Prisma');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); 
  }
}


async function startServer() {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
  });
}

startServer(); 
