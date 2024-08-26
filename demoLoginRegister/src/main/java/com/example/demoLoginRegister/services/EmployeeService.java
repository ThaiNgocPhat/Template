package com.example.demoLoginRegister.services;

import com.example.demoLoginRegister.models.Employee;
import com.example.demoLoginRegister.models.Login;
import com.example.demoLoginRegister.reponses.LoginResponse;

public interface EmployeeService {
    String RegisterEmployee(Employee employeeRegister);
    LoginResponse LoginEmployee(Login employeeLogin);
}
