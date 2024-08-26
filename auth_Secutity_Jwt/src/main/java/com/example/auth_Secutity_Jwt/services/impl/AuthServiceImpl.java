package com.example.auth_Secutity_Jwt.services.impl;

import com.example.auth_Secutity_Jwt.entities.UsersEntity;
import com.example.auth_Secutity_Jwt.models.ReqRes;
import com.example.auth_Secutity_Jwt.repositories.UsersRepository;
import com.example.auth_Secutity_Jwt.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private JWTUtils jwtUtils;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public ReqRes signUp(ReqRes registerRequest) {
        ReqRes resq = new ReqRes();
        try {
            UsersEntity user = new UsersEntity();
            user.setEmail(registerRequest.getEmail());
            user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
            user.setRole(registerRequest.getRole());
            UsersEntity ourUser = usersRepository.save(user);
            if (ourUser != null && ourUser.getId() > 0) {
                resq.setUsersEntity(ourUser);
                resq.setMessage("User registered successfully");
                resq.setStatusCode(200);
            }
        } catch (Exception e) {
            resq.setStatusCode(500);
            resq.setError(e.getMessage());
        }
        return resq;
    }

    @Override
    public ReqRes logIn(ReqRes loginRequest) {
        ReqRes resq = new ReqRes();
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
            UsersEntity user = usersRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
            String jwt = jwtUtils.generateToken((UserDetails) user);
            String refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), (UserDetails) user);
            resq.setStatusCode(200);
            resq.setToken(jwt);
            resq.setRefreshToken(refreshToken);
            resq.setMessage("Login Successful");
            resq.setExpirationTime("24Hrs");
        } catch (Exception e) {
            resq.setStatusCode(500);
            resq.setError(e.getMessage());
        }
        return resq;
    }
}
