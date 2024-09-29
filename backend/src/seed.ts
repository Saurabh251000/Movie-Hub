// src/seed.ts

import { PrismaClient } from '@prisma/client';
import { movies, reviews } from './data/data';

const prisma = new PrismaClient();

async function main() {
  for (const movie of movies) {
    await prisma.movie.create({
      data: movie,
    });
  }

  for (const review of reviews) {
    await prisma.review.create({
      data: review,
    });
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
