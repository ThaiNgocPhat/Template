package com.example.demoLoginRegister.repositories;

import com.example.demoLoginRegister.entities.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Integer> {
    Optional<EmployeeEntity> findOneByEmailAndPassword(String email, String password);
    EmployeeEntity findByEmail(String email);
}
