package com.example.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
				Cookie cookie = new Cookie("uid",user.getId());
				response.addCookie(cookie);
				return true;
			}
		}
		return false;
	}
	
		//User sign up
		@PostMapping(value="/signUp")
		public String userSignup(@RequestBody UserModel data,HttpServletResponse response)
		{
			if(repo.getUserByEmail(data.getEmail())!=null)
			{
				return "Email already exists";
			}
			else if(repo.checkUserNameExists(data.getUsername())!=null)
			{
				return "Username already exists";
			}
			else
			{
				String s=repo.genId();
				if(s==null)
					data.setId("#1000000");
				else
					data.setId(idGen(s,1));
				data.setRole("user");
				data.setActive(1);
				repo.save(data);
				UserModel curr_user=repo.getUserByEmail(data.getEmail());
				Cookie cookie=new Cookie("uid",curr_user.getId());
				response.addCookie(cookie);
				return "Successfully registered";
			}
			
		}
		
		//helper method to generate Id for an Issue
		public String idGen(String id1,int i)
	    {
	        StringBuilder id=new StringBuilder(id1);  
	        int n=id.length()-i;
	        if (id.charAt(n)!='9')
	        {
	            int temp=Integer.parseInt(String.valueOf(id.charAt(n)))+1;
	            id.setCharAt(n,String.valueOf(temp).charAt(0));
	            return String.valueOf(id);
	        }
	        else
	        {
	            id.setCharAt(n,'0');
	            i=i+1;
	            return idGen(String.valueOf(id),i);
	        }
		
	    }
		
		@PutMapping(value="/logout")
		public void Logout(@CookieValue(value = "uid", defaultValue = "Null") String id)
		{
			UserModel curr_user=repo.getUserById(id);
			curr_user.setActive(0);
			repo.save(curr_user);
			return ;
		}
}
