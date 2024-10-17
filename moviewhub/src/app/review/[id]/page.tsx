"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ReviewCard from '@/components/ReviewCard';
import { movies } from '@/utils/data';
import AddMovieModal from '@/components/AddNewMovie';
import AddReviewModal from '@/components/AddNewReview';

const ReviewPage: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const movie = movies.find((movie) => movie.id === Number(id));

  // State for managing modal visibility
  const [isAddMovieModalOpen, setAddMovieModalOpen] = useState(false);
  const [isAddReviewModalOpen, setAddReviewModalOpen] = useState(false);

  const handleCreateMovie = (name: string, releaseDate: string) => {
    console.log(`New Movie: ${name}, Release Date: ${releaseDate}`);
  };

  const handleAddReview = (movieName: string, reviewerName: string, rating: number, comments: string) => {
    console.log(`Review for ${movieName} by ${reviewerName}: Rating ${rating}/10, Comments: ${comments}`);
  };

  if (!movie) {
    return (
      <div>
        <Navbar 
          onAddMovie={() => setAddMovieModalOpen(true)} 
          onAddReview={() => setAddReviewModalOpen(true)} 
        />
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-4 text-center">Review Not found</h1>
        </div>
      </div>
    );
  }

  const { name: movieName, reviews } = movie;
    // Calculate the average rating
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

  return (
    <div className='w-full min-h-lvh'>
      <Navbar 
        onAddMovie={() => setAddMovieModalOpen(true)} 
        onAddReview={() => setAddReviewModalOpen(true)} 
      />
      <div className="container mx-auto px-4 py-6">
        <div className='flex justify-between'>
          <h1 className="text-3xl font-bold mb-4 ">{movieName}</h1>
          <h1 className="text-3xl font-bold mb-4 ">{averageRating}</h1>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>

      {/* Modals */}
     
      <AddMovieModal
        isOpen={isAddMovieModalOpen}
        onClose={() => setAddMovieModalOpen(false)}
        onCreateMovie={handleCreateMovie}
      />
      <AddReviewModal
        isOpen={isAddReviewModalOpen}
        onClose={() => setAddReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />
    </div>
  );
};

export default ReviewPage;
