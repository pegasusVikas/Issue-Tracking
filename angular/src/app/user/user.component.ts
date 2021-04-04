import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  new_issues=[{
    issueId:"XE65768" ,
    imageUrl: "",
    issueName: "LAN driver",
    issueDesc: "can't connect",
    createdOn: "3-09-20",
    createdBy: "",
    connectedBy: "",
     status: "Active",
     developerName:"Mr XYZ"
    },
    {
    issueId:"XE6123" ,
    imageUrl: "",
    issueName: "Camera Driver",
    issueDesc: " connect",
    createdOn: "4-09-20",
    createdBy: "",
    connectedBy: "",
     status: "Active",
     developerName:"Mr ABC"
    }
  ]
  selected_issue={
    issueId:"" ,
    imageUrl: "",
    issueName: "",
    issueDesc: "",
    createdOn: "",
    createdBy: "",
    connectedBy: "",
     status: ""
  }    
    constructor() { }
  
    ngOnInit(): void {
      
    }
  
    getId(issue:any){
      this.selected_issue=issue
      console.log("output to parent" + issue);
    }
}
