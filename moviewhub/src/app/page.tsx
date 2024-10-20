"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AddMovieModal from '@/components/AddNewMovie';
import AddReviewModal from '@/components/AddNewReview';
import MoviesContainer from '@/components/MoviesContainer';
import { addMovie } from '@/api/moviesAPI';
import { addReview } from '@/api/reviewsAPI'; 
import { Movie } from '@/utils/interfaces';
import Loader from '@/components/Loader';
import { fetchMovies } from '@/api/moviesAPI';

const Home: React.FC = () => {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [movielist, setMovielist] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const movieData = await fetchMovies();
        // console.log(movieData);
        setMovielist(movieData);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  const handleCreateMovie = async (name: string, releaseDate: string) => {
    try {
      const movieData = { name, releaseDate };
      const newMovie = await addMovie(movieData); 
      // console.log(newMovie);
      setMovielist((prevMovielist) => [...prevMovielist, newMovie]); // Correctly append the new movie
      // console.log(`New Movie added: ${name}, Release Date: ${releaseDate}`);
      setIsMovieModalOpen(false); // Close the modal after adding the movie
      return alert("Movie Added Successfully");
    } catch (error) {
      console.error("Failed to add movie:", error);
    }
  };
  

  const handleAddReview = async (movieId:string, movieName: string, reviewerName: string, rating: number, comments: string) => {
    try {
      const reviewData = { movieId, movieName, reviewerName, rating, comments };
      await addReview(reviewData);
       console.log(`Review added for ${movieName} by ${reviewerName}: Rating ${rating}/10, Comments: ${comments}`);
      setIsReviewModalOpen(false); // Close the modal after adding the review
    } catch (error) {
      console.error("Failed to add review:", error);
    }
  };

  if(loading){
    return <Loader/>
  }

  return (
    <div className="w-full min-h-screen bg-gray-500">
      <Navbar 
        onAddMovie={() => setIsMovieModalOpen(true)}
        onAddReview={() => setIsReviewModalOpen(true)}
      />
      <MoviesContainer movielist={movielist}  />
      <AddMovieModal
        isOpen={isMovieModalOpen}
        onClose={() => setIsMovieModalOpen(false)}
        onCreateMovie={handleCreateMovie}
      />
      <AddReviewModal
        movielist={movielist as Movie[]}
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />
    </div>
  );
};

export default Home;
