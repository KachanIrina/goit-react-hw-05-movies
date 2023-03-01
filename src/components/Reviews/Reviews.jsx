import { useEffect, useState } from 'react';
import { fetchReviewsInfo } from 'services/apiService';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviewsInfo(id).then(setReviews);
    // fetchReviewsInfo(id).then(data => {
    //   console.log(data);
    // });
  }, [id]);

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          {review.content}
        </li>
      ))}
    </div>
  );
};

export default Reviews;
