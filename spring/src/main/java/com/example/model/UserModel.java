package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class UserModel {
	
	@Override
	public String toString() {
		return "UserModel [email=" + email + ", password=" + password + ", username=" + username + ", mobileno="
				+ mobileno + ", active=" + active + ", role=" + role + "]";
	}
	
	@Id
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	@Column(name="username")
	private String username;
	
	@Column(name="mobileno")
	private String mobileno;
	
	@Column(name="active")
	private int active;
	
	@Column(name="role")
	private String role;
	
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public int getActive() {
		return active;
	}
	public void setActive(int active) {
		this.active = active;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	
}
