package com.example.demoProject.services.impl;
import com.example.demoProject.entities.CategoryEntity;
import com.example.demoProject.exception.CategoryNotFoundException;
import com.example.demoProject.repositories.CategoryRepository;
import com.example.demoProject.services.CategoryService;
import com.example.demoProject.models.Category;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(Category category) {
        CategoryEntity categoryEntity = new CategoryEntity();
        categoryEntity.setName(category.getName());
        categoryEntity.setDescription(category.getDescription());
        categoryRepository.save(categoryEntity);
        categoryEntity.setId(categoryEntity.getId());
        return category;
    }

    @Override
    public Category updateCategory(Category category, long id) {
        CategoryEntity categoryEntity = categoryRepository.findById(id).get();
        categoryEntity.setName(category.getName());
        categoryEntity.setDescription(category.getDescription());
        categoryRepository.save(categoryEntity);
        return category;
    }

    @Override
    public void deleteCategory(long id) {
        if (!categoryRepository.existsById(id)){
            throw new CategoryNotFoundException(id);
        }
        categoryRepository.deleteById(id);
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll().stream().map(categoryEntity -> {
            Category category = new Category();
            category.setId(categoryEntity.getId());
            category.setName(categoryEntity.getName());
            category.setDescription(categoryEntity.getDescription());
            return category;
        }).collect(Collectors.toList());
    }

    @Override
    public Category getCategoryById(long id) {
        if (!categoryRepository.existsById(id)){
            throw new CategoryNotFoundException(id);
        }
        CategoryEntity categoryEntity = categoryRepository.findById(id).get();
        Category category = new Category();
        category.setId(categoryEntity.getId());
        category.setName(categoryEntity.getName());
        category.setDescription(categoryEntity.getDescription());
        return category;
    }
}
