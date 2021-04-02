package com.example.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.LoginModel;
import com.example.model.UserModel;
import com.example.repo.UserRepository;

@RestController
public class LoginController {

	@Autowired
	UserRepository repo;
	
	@PostMapping("/login")
	public boolean checkUser(@RequestBody LoginModel data,HttpServletResponse response)
	{
		UserModel user=repo.getUserByEmail(data.getEmail());
		if(user!=null)
		{
			if(user.getPassword().equals(data.getPassword()))
			{
				user.setActive(1);
				repo.save(user);
				Cookie cookie = new Cookie("uid",String.valueOf(user.getId()));
				response.addCookie(cookie);
				return true;
			}
		}
		return false;
	}
}
