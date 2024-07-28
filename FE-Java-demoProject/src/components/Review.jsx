import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    comment: '',
    rating: '',
    product: ''
  });
  const [newReview, setNewReview] = useState({
    name: '',
    comment: '',
    rating: '',
    product: ''
  });

  const fetchReviews = async () => {
    try {
      const res = await axios.get('http://localhost:8080/reviews/');
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const deleteReview = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/reviews/${id}`);
      setReviews(reviews.filter(review => review.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (review) => {
    setToggleEdit(true);
    setFormValues(review);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleNewReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleEditReview = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/reviews/${formValues.id}`, formValues);
      setReviews(reviews.map(review => (review.id === formValues.id ? formValues : review)));
      setToggleEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/reviews/', newReview);
      setReviews([...reviews, res.data]);
      setNewReview({
        name: '',
        comment: '',
        rating: '',
        product: ''
      });
      setToggleAdd(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1>Review List</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Comment</th>
              <th>Rating</th>
              <th>Product</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id}>
                <td>{review.id}</td>
                <td>{review.comment}</td>
                <td>{review.rating}</td>
                <td>{review.productId}</td>
                <td>
                  <button onClick={() => deleteReview(review.id)}>Delete</button>
                  <button onClick={() => handleEditClick(review)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => setToggleAdd(!toggleAdd)}>Add New Review</button>
      </div>
      {toggleAdd && (
        <div className='add-review'>
          <h2>Add New Review</h2>
          <form onSubmit={handleAddReview}>
            <textarea name="comment" value={newReview.comment} onChange={handleNewReviewChange} placeholder="Comment" required />
            <input type="number" name="rating" value={newReview.rating} onChange={handleNewReviewChange} placeholder="Rating" required />
            <input type="text" name="product" value={newReview.product} onChange={handleNewReviewChange} placeholder="Product" required />
            <button type="submit">Add</button>
          </form>
          <button onClick={() => setToggleAdd(false)}>Cancel</button>
        </div>
      )}
      {toggleEdit && (
        <div className='edit-review'>
          <h2>Edit Review</h2>
          <form onSubmit={handleEditReview}>
            <textarea name="comment" value={formValues.comment} onChange={handleChange} required />
            <input type="number" name="rating" value={formValues.rating} onChange={handleChange} required />
            <input type="text" name="product" value={formValues.product} onChange={handleChange} required />
            <button type="submit">Update</button>
          </form>
          <button onClick={() => setToggleEdit(false)}>Cancel</button>
        </div>
      )}
    </>
  );
}
