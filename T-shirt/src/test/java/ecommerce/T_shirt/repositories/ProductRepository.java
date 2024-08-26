package ecommerce.T_shirt.repositories;

import ecommerce.T_shirt.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}