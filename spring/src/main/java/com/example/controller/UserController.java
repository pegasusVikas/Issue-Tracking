package com.example.controller;

import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.UserModel;

import com.example.repo.UserRepository;

@RestController
public class UserController {

	@Autowired
	UserRepository repo;
	
	@GetMapping(value="/admin/developers")
	public List<UserModel> getUsers()
	{
		return repo.getDevelopers();
	}
	
	public UserModel userDataById(int uid)
	{
		return repo.getUserById(uid);
	}
	
	@PutMapping(value="/admin/updateDeveloper/{id}")
	public void userEditSave(@PathVariable String id, @RequestBody UserModel data)
	{
		int uid=Integer.parseInt(id);
		UserModel edit_user=repo.getUserById(uid);
		edit_user.setUsername(data.getUsername());
		edit_user.setMobilenumber(data.getMobilenumber());
		repo.save(edit_user);
		
	}
	
	@PostMapping(value="/admin/addDevelopers")
	public void userSave(@RequestBody UserModel data)
	{
		if(repo.getUserByEmail(data.getEmail())==null)
		{
			data.setRole("developer");
			data.setActive(0);
			repo.save(data);
		}
	}
	
	@DeleteMapping(value="/admin/deleteDeveloper/{id}")
	public void userDelete(@PathVariable String id)
	{
		int uid=Integer.parseInt(id);
		repo.deleteById(uid);
	}
	
	//User sign up
	@PostMapping(value="/signUp")
	public boolean userSignup(@RequestBody UserModel data,HttpServletResponse response)
	{
		if(repo.getUserByEmail(data.getEmail())==null)
		{
			data.setRole("user");
			data.setActive(1);
			repo.save(data);
			UserModel curr_user=repo.getUserByEmail(data.getEmail());
			Cookie cookie=new Cookie("uid",String.valueOf(curr_user.getId()));
			response.addCookie(cookie);
			return true;
		}
		System.out.println("User Already exists");
		return false;
	}
	
	@PutMapping(value="/logout")
	public void Logout(@CookieValue(value = "uid", defaultValue = "Null") String id)
	{
		int uid=Integer.parseInt(id);
		UserModel curr_user=repo.getUserById(uid);
		curr_user.setActive(0);
		repo.save(curr_user);
		return ;
	}
	
	
}
