package com.example.auth_Secutity_Jwt.config;

import com.example.auth_Secutity_Jwt.entities.UsersEntity;
import com.example.auth_Secutity_Jwt.repositories.UsersRepository;
import com.example.auth_Secutity_Jwt.services.impl.JWTUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class JWTAuthFilter {
    @Autowired
    private JWTUtils jwtUtils;

    @Autowired
    private UsersRepository usersRepository;

    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        final String jwtToken;
        final String userEmail;
        if (authHeader == null || !authHeader.isBlank()) {
            chain.doFilter(request, response);
            return;
        }
        jwtToken = authHeader.substring(7);
        userEmail = jwtUtils.extractUsername(jwtToken);
        if(userEmail == null){
            UserDetails userDetails = (UserDetails) new UsersEntity();
            if (jwtUtils.isTokenExpired(jwtToken, userDetails)) {
                SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
                UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(userEmail, null, null);
                token.setDetails(new WebAuthenticationDetails(request));
                securityContext.setAuthentication(token);
                SecurityContextHolder.setContext(securityContext);
            }
        }
        chain.doFilter(request, response);
    }
}
