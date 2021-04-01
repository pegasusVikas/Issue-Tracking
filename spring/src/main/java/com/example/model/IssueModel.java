package com.example.model;



import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="issues")
public class IssueModel {

	@Id
	@Column(name="issueid")
	private String issueid;
	
	@Column(name="issuename")
	private String issuename;
	
	@Column(name="imageurl")
	private String imageurl;
	
	@Column(name="issuedesc")
	private String issuedesc;
	
	@Column(name="createdon")
	private Date createdon;
	
	@Column(name="createdby")
	private String createdby;
	
	@Column(name="connectedby")
	private String connectedby;
	
	@Column(name="status")
	private String status;

	public String getIssueid() {
		return issueid;
	}

	public void setIssueid(String issueid) {
		this.issueid = issueid;
	}

	public String getIssuename() {
		return issuename;
	}

	public void setIssuename(String issuename) {
		this.issuename = issuename;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public String getIssuedesc() {
		return issuedesc;
	}

	public void setIssuedesc(String issuedesc) {
		this.issuedesc = issuedesc;
	}

	public Date getCreatedon() {
		return createdon;
	}

	public void setCreatedon(Date createdon) {
		this.createdon = createdon;
	}

	public String getCreatedby() {
		return createdby;
	}

	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}

	public String getConnectedby() {
		return connectedby;
	}

	public void setConnectedby(String connectedby) {
		this.connectedby = connectedby;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
