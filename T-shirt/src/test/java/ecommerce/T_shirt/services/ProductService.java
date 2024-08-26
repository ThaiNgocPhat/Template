package ecommerce.T_shirt.services;

import ecommerce.T_shirt.models.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product createProduct(Product product);
}