package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, String> {

	@Query("from UserModel where email=?1 and password=?2")		//login
	public UserModel getUser(String email,String password);
	
	
	@Query("select email from UserModel where email=?1")		//email check while sign up
	public String checkUserExists(String email);
	
	@Query("from UserModel where email=?1")
	public UserModel getUserById(String id);
}
