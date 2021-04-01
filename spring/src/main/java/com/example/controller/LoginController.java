package com.example.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	@CrossOrigin(origins="https://8081-bafdabebdefeddaffcbacabafcefcfcbc.examlyiopb.examly.io") //"http://localhost:8081"
	@PostMapping(value="/login")
	public boolean checkUser(@RequestBody LoginModel data)
	{
		System.out.println("inside checkUSer");
		String email=data.getEmail();
		String password=data.getPassword();
		System.out.println(email);
		UserModel curr_user=repo.getUser(email,password);
		if(!(curr_user==null))
		{
			//System.out.println("Login Successful");
			curr_user.setActive(1);
			repo.save(curr_user);
			return true;
		}

		return false;
	}
	
	@GetMapping(value="/user/{id}")
	public UserModel userDataById(@PathVariable(value="id") String email)
	{
		UserModel user=repo.getUserById(email);
		//System.out.println(user);
		return user;
	}
}
