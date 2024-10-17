"use client";
import React, {useState } from 'react';
import Card from '@/components/Card';
import {  updateMovie, deleteMovie } from '@/api/moviesAPI';
// import Loader from './Loader';
import { Movie, Review } from '@/utils/interfaces';

interface MoviesContainerProps {
  movielist: Movie[];
}

const MoviesContainer: React.FC<MoviesContainerProps> =({movielist}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<Movie[]>(movielist);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     try {
  //       setLoading(true);
  //       const movieData = await fetchMovies();
  //       console.log(movieData);
  //       setMovies(movieData);
  //     } catch (error) {
  //       console.error("Failed to fetch movies:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getMovies();
  // }, []);

  const handleEdit = async (id: string, name: string, releaseDate: string) => {
    try {
      const updatedMovie: Movie = { id, name, releaseDate, reviews: [] };
      await updateMovie(updatedMovie);
      setMovies((prevMovies) =>
        prevMovies.map((movie) => (movie.id === id ? updatedMovie : movie))
      );
    } catch (error) {
      console.error("Failed to update movie:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMovie(id);
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Failed to delete movie:", error);
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div className="w-full px-10 py-10">
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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMovies.length === 0 ? (
          <p className="text-gray-600">No movies found.</p>
        ) : (
          filteredMovies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id as string}
              name={movie.name}
              releaseDate={movie.releaseDate}
              reviews={movie.reviews as Review[]}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MoviesContainer;
