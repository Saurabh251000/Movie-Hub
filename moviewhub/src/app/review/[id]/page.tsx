"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ReviewCard from '@/components/ReviewCard';
import AddMovieModal from '@/components/AddNewMovie';
import AddReviewModal from '@/components/AddNewReview';
import { findMovie, fetchMovies } from '@/api/moviesAPI';
import { Movie, Review } from '@/utils/interfaces';
import Loader from '@/components/Loader';

const ReviewPage: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const [isAddMovieModalOpen, setAddMovieModalOpen] = useState(false);
  const [isAddReviewModalOpen, setAddReviewModalOpen] = useState(false);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [movielist, setMovielist] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const movieData = await findMovie(id as string);
        const movies = await fetchMovies();
        setMovie(movieData);
        setMovielist(movies);
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  const handleCreateMovie = (name: string, releaseDate: string) => {
    console.log(`New Movie: ${name}, Release Date: ${releaseDate}`);
  };

  const handleAddReview = (movieId: string, movieName: string, reviewerName: string, rating: number, comments: string) => {
    console.log(`Review for ${movieName} (${movieId}) by ${reviewerName}: Rating ${rating}/10, Comments: ${comments}`);
  };

  if (loading) {
    return <Loader />;
  }

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

  // Check if there are any reviews
  const hasReviews = reviews && reviews.length > 0;
  const totalRating = hasReviews ? reviews.reduce((acc: number, review: Review) => acc + review.rating, 0) : 0;
  const averageRating = hasReviews ? totalRating / reviews.length : 0;
  

  return (
    <div className='w-full min-h-lvh'>
      <Navbar
        onAddMovie={() => setAddMovieModalOpen(true)}
        onAddReview={() => setAddReviewModalOpen(true)}
      />
      <div className="container mx-auto px-4 py-6">
        <div className='flex justify-between'>
          <h1 className="text-3xl font-bold mb-4 ">{movieName}</h1>
          <h1 className="text-3xl font-bold mb-4 ">{averageRating.toFixed(1)}</h1>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))
          ) : (
            <p className="text-center text-gray-500">No reviews available for this movie.</p>
          )}
        </div>
      </div>

      <AddMovieModal
        isOpen={isAddMovieModalOpen}
        onClose={() => setAddMovieModalOpen(false)}
        onCreateMovie={handleCreateMovie}
      />
      <AddReviewModal
        movielist={movielist}
        isOpen={isAddReviewModalOpen}
        onClose={() => setAddReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />
    </div>
  );
};

export default ReviewPage;
