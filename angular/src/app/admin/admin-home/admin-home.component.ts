import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  tab:String="new"
  new_issues=[{
  issueId:"2dr4" ,
  imageUrl: "",
  issueName: "Wifi Isuue",
  issueDesc: "cant connect",
  createdOn: "jan something",
  createdBy: "vikas.vik934@gmail.com",
  connectedBy: "",
   status: "new",
  },
  {
  issueId:"123" ,
  imageUrl: "",
  issueName: "ddedd Isuue",
  issueDesc: " connect",
  createdOn: "fan something",
  createdBy: ".vik934@gmail.com",
  connectedBy: "",
   status: "new",
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

  setTab(tab:String){
    this.tab=tab;
  }

}
