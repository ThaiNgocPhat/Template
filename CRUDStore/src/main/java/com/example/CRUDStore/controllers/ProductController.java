package com.example.CRUDStore.controllers;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping("/")
    public String getProduct() {
        return "Get all product";
    }

    @GetMapping("/one")
    public void getOneProduct(HttpServletResponse res) throws IOException {
        res.getWriter().write("Get one product");
    }
}
