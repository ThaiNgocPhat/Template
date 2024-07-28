package com.example.demoProject.services;

import com.example.demoProject.models.Review;

import java.util.List;

public interface ReviewService {
    Review createReview(Review review);

    Review updateReview(Review review, long id);

    void deleteReview(Long id);

    Review getReviewById(Long id);

    List<Review> getAllReviews();
}
