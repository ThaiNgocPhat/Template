package com.example.demoProject.services;

import com.example.demoProject.models.Product;

import java.util.List;

public interface ProductService {
    Product createProduct(Product product);

    Product updateProduct(Product product, long id);

    void deleteProduct(Long productId);

    Product getProductById(Long productId);

    List<Product> getAllProducts();
}
