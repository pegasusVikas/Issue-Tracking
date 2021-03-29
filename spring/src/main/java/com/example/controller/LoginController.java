package com.example.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.model.LoginModel;

@RestController
public class LoginController {
	
	public boolean checkUser(LoginModel data)
	{
		String email=data.getEmail();
		String password=data.getPassword();
		
		return true;
	}
}
