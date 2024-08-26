package com.example.demoLoginRegister.controllers;

import com.example.demoLoginRegister.models.Employee;
import com.example.demoLoginRegister.models.Login;
import com.example.demoLoginRegister.reponses.LoginResponse;
import com.example.demoLoginRegister.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/register")
    public String registerEmployee(@RequestBody Employee employee) {
        employeeService.RegisterEmployee(employee);
        return "Employee registered successfully";
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginEmployee(@RequestBody Login loginEmployee){
        LoginResponse loginResponse = employeeService.LoginEmployee(loginEmployee);
        return ResponseEntity.ok(loginResponse);
    }
}
