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
		data.setIssueid("1");
		data.setStatus("Active");
	}
	
	@PutMapping(value="/issue/{id}")
	public void IssueEditSave(IssueModel data)
	{
		
	}
	
	
}
