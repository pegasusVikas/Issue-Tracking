package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.UserModel;
import com.example.repo.UserRepository;

@RestController

public class UserController {

	@Autowired
	UserRepository repo;
	
	@PostMapping(value="/addUser")
	public void userSave(@RequestBody UserModel data)
	{
		repo.save(data);
		return ;
	}
}
