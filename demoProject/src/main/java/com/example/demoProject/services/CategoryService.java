package com.example.demoProject.services;
import com.example.demoProject.models.Category;

import java.util.List;

public interface CategoryService {
    Category createCategory(Category category);

    Category updateCategory(Category category, long id);

    void deleteCategory(long id);

    List<Category> getAllCategories();

    Category getCategoryById(long id);
}
