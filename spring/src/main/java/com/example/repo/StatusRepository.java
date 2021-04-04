package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.model.StatusModel;

public interface StatusRepository extends JpaRepository<StatusModel, String>{
	
	//get Status Description of a particular solved issue
	@Query(value="select statusdesc from solution where issueid=?",nativeQuery=true)
	public String solution(String issueid);
}
