import { useEffect, useState } from 'react';
import { fetchReviewsInfo } from 'services/apiService';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await fetchReviewsInfo(id);
        setReviews(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          {content}
        </li>
      ))}
      {isLoading && <Loader />}
      {error && toast.error('Подождите...')}
    </div>
  );
};

export default Reviews;
