package ecommerce.T_shirt.services.impl;

import ecommerce.T_shirt.models.Category;
import ecommerce.T_shirt.repositories.CategoryRepository;
import ecommerce.T_shirt.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }
}