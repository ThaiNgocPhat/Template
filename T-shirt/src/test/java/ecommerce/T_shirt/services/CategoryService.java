package ecommerce.T_shirt.services;

import ecommerce.T_shirt.models.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategories();
    Category createCategory(Category category);
}