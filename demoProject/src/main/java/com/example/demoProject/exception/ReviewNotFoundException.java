package com.example.demoProject.exception;

public class ReviewNotFoundException extends RuntimeException{
    public ReviewNotFoundException(long id){
        super("Review with id " + id + " not found");
    }
}
