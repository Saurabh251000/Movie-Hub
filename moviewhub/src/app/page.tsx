"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import AddMovieModal from '@/components/AddNewMovie';
import AddReviewModal from '@/components/AddNewReview';
import { movies} from '@/data';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleEdit = (movieName: string) => {
    console.log(`Edit movie: ${movieName}`);
  };

  const handleDelete = (movieName: string) => {
    console.log(`Delete movie: ${movieName}`);
  };

  const handleCreateMovie = (name: string, releaseDate: string) => {
    console.log(`New Movie: ${name}, Release Date: ${releaseDate}`);
  };

  const handleAddReview = (movieName: string, reviewerName: string, rating: number, comments: string) => {
    console.log(`Review for ${movieName} by ${reviewerName}: Rating ${rating}/10, Comments: ${comments}`);
  };

  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <Navbar 
        onAddMovie={() => setIsMovieModalOpen(true)}
        onAddReview={() => setIsReviewModalOpen(true)}
      />
      <div className="w-full px-10 py-10 ">
        <h1 className="text-4xl font-bold mb-4">The best movie reviews site!</h1>
        <div className="my-8">
          <input
            type="text"
            placeholder="Search your favourite movie..."
            className="border rounded-lg py-2 px-4 w-full md:w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {filteredMovies.map((movie, index) => (
            <Card
              key={index}
              id={movie.id}
              name={movie.name}
              releaseDate={movie.releaseDate}
              reviews = {movie.reviews}
              onEdit={() => handleEdit(movie.name)}
              onDelete={() => handleDelete(movie.name)}
            />
          ))}
        </div>
      </div>

      <AddMovieModal
        isOpen={isMovieModalOpen}
        onClose={() => setIsMovieModalOpen(false)}
        onCreateMovie={handleCreateMovie}
      />
      <AddReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />
    </div>
  );
};

export default Home;
