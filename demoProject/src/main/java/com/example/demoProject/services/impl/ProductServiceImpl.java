package com.example.demoProject.services.impl;

import com.example.demoProject.entities.CategoryEntity;
import com.example.demoProject.entities.ProductEntity;

import com.example.demoProject.exception.ProductNotFoundException;
import com.example.demoProject.models.Product;
import com.example.demoProject.repositories.CategoryRepository;
import com.example.demoProject.repositories.ProductRepository;
import com.example.demoProject.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public Product createProduct(Product product) {
        ProductEntity productEntity = new ProductEntity();
        productEntity.setName(product.getName());
        productEntity.setPrice(product.getPrice());
        productEntity.setDescription(product.getDescription());
        Optional<CategoryEntity> category = categoryRepository.findById(product.getCategoryId());
        if (category.isPresent()) {
            productEntity.setCategory(category.get());
        }
        productRepository.save(productEntity);
        product.setId(productEntity.getId());
        return product;
    }

    @Override
    public Product updateProduct(Product product, long id) {
        ProductEntity productEntity = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        productEntity.setName(product.getName());
        productEntity.setPrice(product.getPrice());
        productEntity.setDescription(product.getDescription());
        productRepository.save(productEntity);
        product.setId(productEntity.getId());
        return product;
    }

    @Override
    public void deleteProduct(Long productId) {
        if (!productRepository.existsById(productId)){
            throw new ProductNotFoundException(productId);
        }
        productRepository.deleteById(productId);
    }

    @Override
    public Product getProductById(Long productId) {
        if (!productRepository.existsById(productId)){
            throw new ProductNotFoundException(productId);
        }
        ProductEntity productEntity = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));
        Product product = new Product();
        product.setId(productEntity.getId());
        product.setName(productEntity.getName());
        product.setPrice(productEntity.getPrice());
        product.setDescription(productEntity.getDescription());
        if (productEntity.getCategory() != null){
            product.setCategoryId(productEntity.getCategory().getId());
        }
        return product;
    }

    @Override
    public List<Product> getAllProducts() {
        List<ProductEntity> productEntities = productRepository.findAll();
        return productEntities.stream().map(productEntity -> {
            Product product = new Product();
            product.setId(productEntity.getId());
            product.setName(productEntity.getName());
            product.setPrice(productEntity.getPrice());
            product.setDescription(productEntity.getDescription());
            if (productEntity.getCategory() != null){
                product.setCategoryId(productEntity.getCategory().getId());
            }
            return product;
        }).collect(Collectors.toList());
    }
}
