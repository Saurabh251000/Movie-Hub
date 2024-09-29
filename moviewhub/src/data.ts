// src/data/data.ts

export interface Review {
  movieId: number;
  reviewerName?: string;
  rating: number;
  comments: string;
}

export interface Movie {
  id: number;
  name: string;
  releaseDate: string;
  reviews: Review[];
}

export const movies: Movie[] = [
  {
    id: 1,
    name: "Inception",
    releaseDate: "2010-07-16",
    reviews: [ ],
  },
  {
    id: 2,
    name: "The Dark Knight",
    releaseDate: "2008-07-18",
    reviews: [
      
    ],
  },
  {
    id: 3,
    name: "Bahubali-2",
    releaseDate: "2008-07-18",
    reviews: [
      
    ],
  },
  {
    id: 4,
    name: "Maze Runner",
    releaseDate: "2008-07-18",
    reviews: [],
  },
  {
    id: 5,
    name: "Thor and Ragnock",
    releaseDate: "2008-07-18",
    reviews: [ ],
  },
  {
    id: 6,
    name: "Spider-Man: Home Coming ",
    releaseDate: "2008-07-18",
    reviews: [],
  },
  // Add more movies  as needed
];


export const reviews : Review[] = [
  {
    movieId: 1,
    reviewerName: "Alice",
    rating: 9,
    comments: "A mind-bending masterpiece!",
  },
  {
    movieId: 6,
    reviewerName: "Bob",
    rating: 10,
    comments: "Best superhero movie ever!",
  },
  {
    movieId: 5,
    reviewerName: "Bob",
    rating: 10,
    comments: "Best superhero movie ever!",
  },
  {
    movieId: 4,
    reviewerName: "Bob",
    rating: 10,
    comments: "Best superhero movie ever!",
  },
  {
    movieId: 3,
    reviewerName: "Bob",
    rating: 10,
    comments: "Best superhero movie ever!",
  },
  {
    movieId: 2,
    reviewerName: "Bob",
    rating: 10,
    comments: "Best superhero movie ever!",
  },
  {
    movieId: 1,
    rating: 8,
    comments: "Complex but rewarding.",
  },
   // Add more reviews as needed
]

