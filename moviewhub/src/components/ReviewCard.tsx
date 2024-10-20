"use client"
import { Review } from '@/utils/interfaces';
import React from 'react';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <p><strong>Movie ID:</strong> {review.movieId}</p>
      {review.reviewerName && (
        <p><strong>Reviewer Name:</strong> {review.reviewerName}</p>
      )}
      <p><strong>Rating:</strong> {review.rating} / 10</p>
      <p><strong>Comments:</strong> {review.comments}</p>
    </div>
  );
};

export default ReviewCard;
