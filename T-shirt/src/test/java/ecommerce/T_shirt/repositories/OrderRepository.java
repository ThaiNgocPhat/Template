package ecommerce.T_shirt.repositories;

import ecommerce.T_shirt.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}