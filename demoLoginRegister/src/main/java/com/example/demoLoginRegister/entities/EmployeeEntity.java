package com.example.demoLoginRegister.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "employees")
public class EmployeeEntity {
    @Id
    @Column(name = "employeeId", length = 45)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long employeeId;

    @Column(name = "employeeName", length = 255)
    private String employeeName;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "password", length = 45)
    private String password;
}
