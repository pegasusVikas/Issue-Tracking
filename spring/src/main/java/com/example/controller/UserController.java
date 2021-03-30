package com.example.controller;

import java.util.List;

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
		if((repo.checkUserExists(data.getEmail()))==null)
			repo.save(data);
		else
			System.out.println("User already exists");
		return ;
	}
	
	public List<UserModel> getUsers()
	{
		return repo.findAll();
	}
	
	public UserModel userDataById(String id)
	{
		return repo.getUserById(id);
	}
	
	public void userDelete(String id)
	{
		repo.deleteById(id);
	}
}
