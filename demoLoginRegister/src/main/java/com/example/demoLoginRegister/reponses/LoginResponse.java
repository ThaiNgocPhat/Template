package com.example.demoLoginRegister.reponses;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
    String message;
    Boolean status;
}