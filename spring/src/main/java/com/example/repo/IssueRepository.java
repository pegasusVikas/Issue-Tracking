package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.model.IssueModel;

public interface IssueRepository extends JpaRepository<IssueModel, String>{
	
	@Query("select issueid from issues order by issueid desc limit 1")
	public String genId();

}