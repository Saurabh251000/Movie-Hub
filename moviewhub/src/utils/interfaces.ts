
export interface Movie {
  id?: string,
  name: string;
  releaseDate: string;
  reviews?: Review[]
}

export interface Review {
  movieId: string;
  reviewerName?: string;
  rating: number;
  comments: string;
}

export interface postData {
  name?: string;
  releaseDate?: string;
  movieId?: string;
  reviewerName?: string;
  rating?: number;
  comments?: string;
}