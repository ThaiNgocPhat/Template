package com.example.demoLoginRegister.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "employees")
public class EmployeeEntity {
    @Id
    @Column(name = "employee_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long employeeId;

    private String employeeName;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "password", length = 255)
    private String password;
}
