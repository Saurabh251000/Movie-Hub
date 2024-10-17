import apiCall from "@/utils/apiCall";
import { Review } from "@/utils/interfaces";
import { addReviewURI, fetchReviewURI, deleteReviewURI, updateReviewURI} from "@/utils/apiURI";

export const addReview = (reviewData: Review) => {
  return apiCall({ method: 'POST', uri: addReviewURI, postData: reviewData });
};

export const fetchReviews = () => {
  return apiCall({ method: 'GET', uri: fetchReviewURI});
};

export const deleteReview = (id:string) => {
  return apiCall({ method: 'POST', uri: deleteReviewURI, postData: {id}});
};

export const updateReview = (reviewData: Review) => {
  return apiCall({ method: 'POST', uri: updateReviewURI, postData: reviewData});
};
