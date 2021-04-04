package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.StatusModel;
import com.example.repo.StatusRepository;

@RestController
public class StatusController {
	
	@Autowired
	StatusRepository status_repo;

	@PostMapping(value="/setStatusDesc/{id}")
	public boolean setStatusDesc(@PathVariable String issueid,@RequestBody StatusModel sol)
	{
		sol.setIssueid(issueid);
		status_repo.save(sol);
		return true;
	}
	
	@GetMapping(value="/getStatusDesc/{id}")
	public String getStatusDesc(@PathVariable String issueid)
	{
		return status_repo.solution(issueid);
	}
}
