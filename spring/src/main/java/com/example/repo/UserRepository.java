package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, String> {

}
