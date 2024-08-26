package ecommerce.T_shirt.repositories;

import ecommerce.T_shirt.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}