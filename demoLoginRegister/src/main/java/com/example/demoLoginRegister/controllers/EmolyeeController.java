package com.example.demoLoginRegister.controllers;

import com.example.demoLoginRegister.models.Employee;
import com.example.demoLoginRegister.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/vi/employee")
public class EmolyeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping(path = "/register")
    public  String registerEmployee(@RequestBody Employee employee) {
        employeeService.registerEmployee(employee);
        return "Employee registered successfully";
    }
}
