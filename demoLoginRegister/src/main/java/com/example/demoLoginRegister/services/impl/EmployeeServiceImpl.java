package com.example.demoLoginRegister.services.impl;

import com.example.demoLoginRegister.entities.EmployeeEntity;
import com.example.demoLoginRegister.models.Employee;
import com.example.demoLoginRegister.models.Login;
import com.example.demoLoginRegister.reponses.LoginResponse;
import com.example.demoLoginRegister.repositories.EmployeeRepository;
import com.example.demoLoginRegister.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String RegisterEmployee(Employee employeeRegister) {
        EmployeeEntity employeeEntity = new EmployeeEntity(
                employeeRegister.getEmployeeId(),
                employeeRegister.getEmployeeName(),
                employeeRegister.getEmail(),
                this.passwordEncoder.encode(employeeRegister.getPassword())
        );
        employeeRepository.save(employeeEntity);
        return employeeEntity.getEmployeeName();
    }

    @Override
    public LoginResponse LoginEmployee(Login employeeLogin) {
        EmployeeEntity employeeEntity = employeeRepository.findByEmail(employeeLogin.getEmail());
        if (employeeEntity != null) {
            String password = employeeLogin.getPassword();
            String encodePassword = employeeEntity.getPassword();
            Boolean isPwRight = passwordEncoder.matches(password, encodePassword);
            if (isPwRight){
                Optional<EmployeeEntity> employeeEntity1 = employeeRepository.findOneByEmailAndPassword(employeeLogin.getEmail(), encodePassword);
                if (employeeEntity1.isPresent()){
                    return new LoginResponse("Success",true);
                }else{
                    return new LoginResponse("Fail",false);
                }
            }else{
                return new LoginResponse("Password not mactch", false);
            }
        }else{
            return new LoginResponse("Email not found", false);
        }
    }


}