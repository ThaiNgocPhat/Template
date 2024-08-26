package com.example.auth_Secutity_Jwt.repositories;

import com.example.auth_Secutity_Jwt.entities.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UsersRepository extends JpaRepository<UsersEntity, Integer> {
    Optional<UsersEntity> findByEmail(String email);
}
