package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.AssignmentModel;
import com.example.model.IssueModel;
import com.example.model.OverAllStatAdmin;
import com.example.model.OverAllStatUser;
import com.example.model.UserModel;
import com.example.repo.IssueRepository;
import com.example.repo.UserRepository;

@RestController
public class IssueController {
	
	@Autowired
	IssueRepository issue_repo;
	
	@Autowired
	UserRepository user_repo;
	
	@GetMapping("/admin")
	public List<IssueModel> getIssue()
	{
		return issue_repo.findAll();
	}
	
	@GetMapping("/issue/{id}")
	public List<IssueModel> getHomeIssue(@CookieValue(value = "uid", defaultValue = "Null") String id)
	{
		UserModel curr_user=user_repo.getUserById(id);
		if(curr_user.getRole().equals("user"))
		{
			return issue_repo.getIssuesOfUser(curr_user.getEmail());
		}
		else if(curr_user.getRole().equals("developer"))
		{
			return issue_repo.getIssuesConnectedToDev(curr_user.getId());
		}
		return null;
	}
	
	public IssueModel IssueEditData(String id)
	{
		return null;
	}
	
	public void IssueEditSave(IssueModel data)
	{
		//edit Issue
	}
	
	@PostMapping("/addIssue")
	public boolean IssueSave(@RequestBody IssueModel data, @CookieValue(value = "uid", defaultValue = "Null") String id)
	{
		UserModel curr_user=user_repo.getUserById(id);
		
		String s=issue_repo.genId();
		if(s==null)
			data.setIssueid("#10000000000");
		else
			data.setIssueid(idGen(s,1));
		
		long millis=System.currentTimeMillis();  
        java.sql.Date today=new java.sql.Date(millis); 
		data.setCreatedon(today);
		
		data.setCreatedby(curr_user.getEmail());
		data.setConnectedby(null);
		data.setStatus("active");
		
		issue_repo.save(data);
		return true;
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
	
	public void IssueDelete(String id)
	{
		issue_repo.deleteById(id);
	}
	
	//Updating Status after developer resolves the issue
	@PutMapping(value="/status/{id}")
	public void updateStatus(@PathVariable String id)
	{
		String issueid="#"+id;
		IssueModel issue=issue_repo.getIssueById(issueid);
		issue.setStatus("solved");
		issue_repo.save(issue);
		return ;
	}
	
	@PostMapping(value="/admin/mapIssue/{id}")
	public boolean assignIssue(@PathVariable String id,@RequestBody AssignmentModel data)
	{
		data.setIssueid(id);
		IssueModel issue=issue_repo.getIssueById(data.getIssueid());
		if(issue!=null)
		{
			issue.setConnectedby(data.getDevid());
			issue_repo.save(issue);
			return true;
		}
		return false;
	}
	
	@GetMapping("/user/issuedata")
	public OverAllStatUser getOverAllStatUser(@CookieValue(value = "uid", defaultValue = "Null") String id)
	{
		OverAllStatUser dataissues=new OverAllStatUser();
		UserModel curr_user=user_repo.getUserById(id);
		String email=curr_user.getEmail();
		dataissues.setTotalissues(issue_repo.getTotalCount(email));
		dataissues.setActive(issue_repo.getActiveCount(email));
		dataissues.setSolved(dataissues.getTotalissues()-dataissues.getActive());
		return dataissues;
		
	}
	
	@GetMapping("/dev/issuedata")
	public OverAllStatUser getOverAllStatDev(@CookieValue(value = "uid", defaultValue = "Null") String id)
	{
		OverAllStatUser dataissues=new OverAllStatUser();
		UserModel curr_user=user_repo.getUserById(id);
		dataissues.setTotalissues(issue_repo.getTotalCountDev(curr_user.getId()));
		dataissues.setActive(issue_repo.getActiveCountDev(curr_user.getId()));
		dataissues.setSolved(dataissues.getTotalissues()-dataissues.getActive());
		return dataissues;
		
	}
	
	@GetMapping("/admin/issuedata")
	public OverAllStatAdmin getOverAllStatAdmin(@CookieValue(value = "uid", defaultValue = "Null") String id)
	{
		OverAllStatAdmin dataissues=new OverAllStatAdmin();
		dataissues.setUsers(user_repo.getUserCount());
		dataissues.setDevelopers(user_repo.getDevCount());
		dataissues.setNew_issues(issue_repo.getNewCount());
		dataissues.setActive_issues(issue_repo.getActiveCount());
		dataissues.setSolved_issues(issue_repo.getSolvedCount());
		return dataissues;
		
	}
	
	
	
}