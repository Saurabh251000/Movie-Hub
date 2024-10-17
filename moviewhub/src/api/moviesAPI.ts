import apiCall from "@/utils/apiCall";
import { Movie } from "@/utils/interfaces";
import { addMovieURI, deleteMovieURI, fetchMovieURI, updateMovieURI } from "@/utils/apiURI";

export const addMovie = (movieData: Movie) => {
  return apiCall({ method: 'POST', uri: addMovieURI, postData: movieData });
};

export const fetchMovies = () => {
  return apiCall({ method: 'GET', uri: fetchMovieURI});
};

export const deleteMovie = (id:string) => {
  return apiCall({ method: 'POST', uri: deleteMovieURI, postData: {id}});
};

export const updateMovie = (movieData: Movie) => {
  return apiCall({ method: 'POST', uri: updateMovieURI, postData: movieData});
};
