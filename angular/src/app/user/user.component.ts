import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  issues=[
    {
      issueID:"100" ,
  issueName: "LAN Driver",
  createdOn: "31-08-2000",
    },
    {
      issueID:"101" ,
  issueName: "Wifi Driver",
  createdOn: "21-09-2000",
    }

  ]
   
  solIssues=[
    {
      issueID:"100" ,
  issueName: "LAN Driver",
  createdOn: "31-08-2000",
    },
    {
      issueID:"101" ,
  issueName: "Wifi Driver",
  createdOn: "21-09-2000",
    }

  ]
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
