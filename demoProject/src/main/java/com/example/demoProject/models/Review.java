package com.example.demoProject.models;

import lombok.Data;

@Data
public class Review {
    private long id;
    private String comment;
    private int rating;
    private long productId;
}
