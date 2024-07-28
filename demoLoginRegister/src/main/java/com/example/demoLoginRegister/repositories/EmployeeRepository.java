package com.example.demoLoginRegister.repositories;

import com.example.demoLoginRegister.entities.EmployeeEntity;
import com.example.demoLoginRegister.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Integer> {
    Optional<EmployeeEntity> findOneByEmailAndPassword(String email, String password);
    EmployeeEntity findByEmail(String email);
}
