package ecommerce.T_shirt.services.impl;

import ecommerce.T_shirt.models.Order;
import ecommerce.T_shirt.repositories.OrderRepository;
import ecommerce.T_shirt.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;
    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }
}