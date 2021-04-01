package com.example.controller;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class test {
	
	@GetMapping("/cookie")
	public String readCookie(@CookieValue(value = "uid", defaultValue = "Null") String uid) {
		System.out.println(uid);
	    return "uid is " + uid;
	}
}
