package com.example.auth_Secutity_Jwt.services;

import com.example.auth_Secutity_Jwt.models.ReqRes;

public interface AuthService {
    ReqRes signUp(ReqRes registerRequest);
    ReqRes logIn(ReqRes loginRequest);
}
