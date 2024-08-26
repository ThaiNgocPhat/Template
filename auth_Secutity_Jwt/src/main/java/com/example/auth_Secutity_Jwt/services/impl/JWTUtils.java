package com.example.auth_Secutity_Jwt.services.impl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;

import static org.yaml.snakeyaml.tokens.Token.ID.Key;

@Component
public class JWTUtils {
    private SecretKey key;
    private static final long EXPIRATION_TIME = 86400000;

    public JWTUtils() {
        String secretString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        byte[] keyBytes = Base64.getDecoder().decode(secretString.getBytes(StandardCharsets.UTF_8));
        this.key = new SecretKeySpec(keyBytes, "HmacSHA256");
    }

    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key)
                .compact();
    }

    public String generateRefreshToken(HashMap<String, Object> ans, UserDetails userDetails) {
        return Jwts.builder()
                .setClaims(ans)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key)
                .compact();
    }

    public <T>T extractClaim(String token, Function<Claims, T> claimsResolver) {
        return claimsResolver.apply(Jwts.parser().setSigningKey(String.valueOf(Key)).parseClaimsJws(token).getBody());
    }
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public  boolean isTokenExpired(String token, UserDetails userDetails) {
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token, userDetails));
    }
}
