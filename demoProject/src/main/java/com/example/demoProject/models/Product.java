package com.example.demoProject.models;

import lombok.Data;

@Data
public class Product {
    private long id;
    private String name;
    private double price;
    private String description;
    private long categoryId;
}
