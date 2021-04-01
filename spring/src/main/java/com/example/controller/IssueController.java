package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.IssueModel;
import com.example.repo.IssueRepository;

@RestController
public class IssueController {
	
	@Autowired
	IssueRepository repo;
	
	public List<IssueModel> getIssue()
	{
		return repo.findAll();
	}
	

	public List<IssueModel> getHomeIssue()
	{
		return repo.findAll();
	}
	
	public Optional<IssueModel> IssueEditData(String id)
	{
		return repo.findById(id);
	}
	
	@PostMapping(value="/addIssue")
	public void IssueSave(@RequestBody IssueModel data)
	{
		data.setConnectedby(null);
		long millis=System.currentTimeMillis();  
        java.sql.Date today=new java.sql.Date(millis); 
		data.setCreatedon(today);
		String s=repo.genId();
		data.setIssueid(idGen(s,1));
		data.setStatus("Active");
	}
	
	@PutMapping(value="/issue/{id}")
	public void IssueEditSave(IssueModel data)
	{
		
	}
	
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
}
