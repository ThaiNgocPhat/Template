package ecommerce.T_shirt.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int quantity;

    private double price;

    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
}