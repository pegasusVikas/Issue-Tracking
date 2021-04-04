package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.UserModel;
import com.example.repo.UserRepository;

@RestController
public class test {
	
	@Autowired 
	UserRepository repo;
	@GetMapping("/cookie")
	public String readCookie(@CookieValue(value = "uid", defaultValue = "Null") String uid) {
		System.out.println(uid);
	    return "uid is " + uid;
	}
	
	@GetMapping("/validateCookie")
	public Boolean validateCookie(@CookieValue(value = "uid", defaultValue = "Null") String uid) {
		System.out.println(uid);
		try{
		String[] ids=uid.split("_");
		String role=ids[0];
		
		String id=(ids[1]);
		UserModel user =repo.getUserById(id);
		if(user.getRole().equals(role))return true;
	    return false;
		}catch(Exception e){
		System.out.println(e);
		return false;
	     }
		
	}
}
