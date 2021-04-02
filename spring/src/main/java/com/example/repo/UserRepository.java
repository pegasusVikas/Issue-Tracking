package com.example.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, String>{
	
	//generate Id for users
	@Query(value="select uid from users order by uid desc limit 1",nativeQuery=true)
	public String genId();
	
	//getDevelopers
	@Query("from UserModel where role='developer'")
	public List<UserModel> getDevelopers();

	//get user details by id
	@Query("from UserModel where uid=?1")
	public UserModel getUserById(String uid);
	
	//get user by email
	@Query("from UserModel where email=?1")
	public UserModel getUserByEmail(String email);
	
	//check user name in database
	@Query("from UserModel where username=?1")
	public UserModel checkUserNameExists(String username);
	
	//get No. of users from database
	@Query(value="select count(*) from users where role like 'user'",nativeQuery=true)
	public int getUserCount();

	//get No. of developer from database
	@Query(value="select count(*) from users where role like 'developer'",nativeQuery=true)
	public int getDevCount();
	
	
}
