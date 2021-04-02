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
	
	public UserModel userDataById(String uid)
	{
		return repo.getUserById(uid);
	}
	
	@PutMapping(value="/admin/updateDeveloper/{id}")
	public boolean userEditSave(@PathVariable String id, @RequestBody UserModel data)
	{
		UserModel edit_user=repo.getUserById(id);
		if(edit_user!=null)
		{
			edit_user.setUsername(data.getUsername());
			edit_user.setMobilenumber(data.getMobilenumber());
			edit_user.setPassword(data.getPassword());
			repo.save(edit_user);
			return true;
		}
		return false;
	}
	
	@PostMapping(value="/admin/addDevelopers")
	public String userSave(@RequestBody UserModel data)
	{
		if (repo.getUserByEmail(data.getEmail())!=null)
		{
			return "Email already exists";
		}
		else if(repo.checkUserNameExists(data.getUsername())!=null)
		{
			return "Already existing developer";
		}
		else
		{
			String s=repo.genId();
			if(s==null)
				data.setId("1000000");
			else
				data.setId(idGen(s,1));
			
			data.setRole("developer");
			data.setActive(0);
			repo.save(data);
			return "Successfully added";
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
	
	@DeleteMapping(value="/admin/deleteDeveloper/{id}")
	public void userDelete(@PathVariable String id)
	{
		repo.deleteById(id);
	}
	
}
