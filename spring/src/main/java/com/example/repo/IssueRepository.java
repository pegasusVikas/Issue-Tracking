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
	@Query("from IssueModel where createdby=?1 order by issueid desc")
	public List<IssueModel> getIssuesOfUser(String email);
	
	//get Issues Assigned to a particular Developer
	@Query("from IssueModel where connectedby=?1 order by issueid desc")
	public List<IssueModel> getIssuesConnectedToDev(String devid);
	
	//get issue by it's id
	@Query("from IssueModel where issueid=?1")
	public IssueModel getIssueById(String issueid);
	
	//get total issues of a user
	@Query(value="select count(*) from issues where createdby=?",nativeQuery=true)
	public int getTotalCount(String email);
	
	//get active issues of a user
	@Query(value="select count(*) from issues where createdby=? and status like 'active'",nativeQuery=true)
	public int getActiveCount(String email);
	
	//get total issues of a developer
	@Query(value="select count(*) from issues where connectedby=?",nativeQuery=true)
	public int getTotalCountDev(String devid);
	
	//get active issues of a developer
	@Query(value="select count(*) from issues where connectedby=? and status like 'active'",nativeQuery=true)
	public int getActiveCountDev(String devid);
	
	//get total No. of new issues
	@Query(value="select count(*) from issues where connectedby IS NULL ",nativeQuery=true)
	public int getNewCount();
	
	//get total No. of active issues
	@Query(value="select count(*) from issues where status like 'active' ",nativeQuery=true)
	public int getActiveCount();
	
	//get total No. of solved issues
	@Query(value="select count(*) from issues where status like 'solved' ",nativeQuery=true)
	public int getSolvedCount();

	//get count of Active issues for a developer
	@Query(value="select count(*) from issues where connectedby=? and status like 'active' ",nativeQuery=true)
	public int countActiveIssuesAssigned(String devid);

	//get developers whose active issue count is greater than 5
	@Query(value="select connectedby from issues where connectedby IS NOT NULL and status='active' group by connectedby having count(status)>=5 ",nativeQuery=true)
	public List<String> unavailableDevelopers();
	
}
