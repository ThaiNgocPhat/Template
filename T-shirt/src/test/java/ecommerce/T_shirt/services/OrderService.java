package ecommerce.T_shirt.services;


import ecommerce.T_shirt.models.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();
    Order createOrder(Order order);
}