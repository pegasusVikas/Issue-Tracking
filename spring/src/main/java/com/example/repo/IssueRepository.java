package com.example.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.model.IssueModel;

public interface IssueRepository extends JpaRepository<IssueModel, String>{
	
	//generate Id for an issue
	@Query(value="select issueid from issues order by issueid desc limit 1",nativeQuery=true)
	public String genId();
	
	//get Issues of a particular User
	@Query("from IssueModel where createdby=?1")
	public List<IssueModel> getIssuesOfUser(String email);
	
	//get Issues Assigned to a particular Developer
	@Query("from IssueModel where connectedby=?1")
	public List<IssueModel> getIssuesConnectedToDev(String devname);
	
	//get issue by it's id
	@Query("from IssueModel where issueid=?1")
	public IssueModel getIssueById(String issueid);
}
