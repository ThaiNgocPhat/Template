package ecommerce.T_shirt.controllers;

import ecommerce.T_shirt.models.Order;
import ecommerce.T_shirt.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Order> getOrders() {
        return orderService.getAllOrders();
    }

    @PostMapping
    public Order addOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }
}