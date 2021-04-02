package com.example.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Integer>{
	
	//getDevelopers
	@Query("from UserModel where role='developer'")
	public List<UserModel> getDevelopers();

	//get user details by id
	@Query("from UserModel where uid=?1")
	public UserModel getUserById(int uid);
	
	//get user by email
	@Query("from UserModel where email=?1")
	public UserModel getUserByEmail(String email);

}
