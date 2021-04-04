package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="solution")
public class StatusModel {
	
	@Id
	@Column(name="issueid")
	private String issueid;
	
	@Column(name="statusdesc")
	private String statusdesc;

	public String getIssueid() {
		return issueid;
	}

	public void setIssueid(String issueid) {
		this.issueid = issueid;
	}

	public String getStatusdesc() {
		return statusdesc;
	}

	public void setStatusdesc(String statusdesc) {
		this.statusdesc = statusdesc;
	}
	
	
}
