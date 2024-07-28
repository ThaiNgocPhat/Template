package com.example.demoLoginRegister.services;

import com.example.demoLoginRegister.models.Employee;
import com.example.demoLoginRegister.reponses.LoginResponse;

public interface EmployeeService {
    String registerEmployee(Employee employeeRegister);
    LoginResponse loginEmployee(Employee employeeLogin);
}
