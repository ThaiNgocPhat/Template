package com.example.demoLoginRegister.services.impl;

import com.example.demoLoginRegister.entities.EmployeeEntity;
import com.example.demoLoginRegister.models.Employee;
import com.example.demoLoginRegister.reponses.LoginResponse;
import com.example.demoLoginRegister.repositories.EmployeeRepository;
import com.example.demoLoginRegister.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String registerEmployee(Employee employeeRegister) {
        EmployeeEntity employee = new EmployeeEntity(
                employeeRegister.getEmployeeId(),
                employeeRegister.getEmployeeName(),
                employeeRegister.getEmail(),
                this.passwordEncoder.encode(employeeRegister.getPassword())
        );
        employeeRepository.save(employee);
        return employeeRegister.getEmployeeName();
    }

    @Override
    public LoginResponse loginEmployee(Employee employeeLogin) {
        return null;
    }
}
