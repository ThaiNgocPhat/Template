package com.example.demoProject.services.impl;

import com.example.demoProject.entities.ProductEntity;
import com.example.demoProject.entities.ReviewEntity;
import com.example.demoProject.exception.ReviewNotFoundException;
import com.example.demoProject.models.Review;
import com.example.demoProject.repositories.ProductRepository;
import com.example.demoProject.repositories.ReviewRepository;
import com.example.demoProject.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Review createReview(Review review) {
        ReviewEntity reviewEntity = new ReviewEntity();
        reviewEntity.setComment(review.getComment());
        reviewEntity.setRating(review.getRating());
        Optional<ProductEntity> product = productRepository.findById(review.getProductId());
        product.ifPresent(reviewEntity::setProduct);
        reviewRepository.save(reviewEntity);
        review.setId(reviewEntity.getId());
        return review;
    }

    @Override
    public Review updateReview(Review review, long id) {
        ReviewEntity reviewEntity = reviewRepository.findById(id).orElseThrow(() -> new ReviewNotFoundException(id));
        reviewEntity.setComment(review.getComment());
        reviewEntity.setRating(review.getRating());
        Optional<ProductEntity> product = productRepository.findById(review.getProductId());
        product.ifPresent(reviewEntity::setProduct);
        reviewRepository.save(reviewEntity);
        review.setId(reviewEntity.getId());
        return review;
    }

    @Override
    public void deleteReview(Long id) {
        if (!reviewRepository.existsById(id)) {
            throw new ReviewNotFoundException(id);
        }
        reviewRepository.deleteById(id);
    }

    @Override
    public Review getReviewById(Long id) {
        ReviewEntity reviewEntity = reviewRepository.findById(id).orElseThrow(() -> new ReviewNotFoundException(id));
        Review review = new Review();
        review.setId(reviewEntity.getId());
        review.setComment(reviewEntity.getComment());
        review.setRating(reviewEntity.getRating());
        if (reviewEntity.getProduct() != null) {
            review.setProductId(reviewEntity.getProduct().getId());
        }
        return review;
    }

    @Override
    public List<Review> getAllReviews() {
        return reviewRepository.findAll().stream().map(reviewEntity -> {
            Review review = new Review();
            review.setId(reviewEntity.getId());
            review.setComment(reviewEntity.getComment());
            review.setRating(reviewEntity.getRating());
            if (reviewEntity.getProduct() != null) {
                review.setProductId(reviewEntity.getProduct().getId());
            }
            return review;
        }).collect(Collectors.toList());
    }
}