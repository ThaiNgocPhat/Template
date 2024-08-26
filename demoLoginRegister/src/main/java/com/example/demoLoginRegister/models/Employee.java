package com.example.demoLoginRegister.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    private int employeeId;
    private String employeeName;
    private String email;
    private String password;
}