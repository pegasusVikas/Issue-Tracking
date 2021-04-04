import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-developer-home',
  templateUrl: './developer-home.component.html',
  styleUrls: ['./developer-home.component.css']
})
export class DeveloperHomeComponent implements OnInit {
  url="https://8080-bafdabebdefeddaffcbacabafcefcfcbc.examlyiopb.examly.io"
  active_issues:{}[]=[{
    issueid:"XE65768" ,
    imageurl: "",
    issuename: "LAN driver",
    issuedesc: "can't connect",
    createdon: "3-09-20",
    createdby: "",
    connectedby: "",
     status: "Active",
     developername:"Mr XYZ"
    },
    {
    issueid:"XE6123" ,
    imageurl: "",
    issuename: "Camera Driver",
    issuedesc: " connect",
    createdon: "4-09-20",
    createdby: "",
    connectedby: "",
     status: "Resolved",
     developername:"Mr ABC"
    }
  ]
  solved_issues:{}[]=[]
  selected_issue={
    issueid:"" ,
    imageurl: "",
    issuename: "",
    issuedesc: "",
    createdon: "",
    createdby: "",
    connectedby: "",
     status: ""
  }    
    constructor(private http:HttpClient,private cookies:CookieService,private router:Router) { 
      let cookie=this.cookies.get('uid');
    if(cookie){
      console.log("cookie detected")
      this.http.get(this.url+"/validateCookie",{withCredentials:true})
      .toPromise().then((res)=>{
        //change here while hosting
        // if(!(res==true))
        // {
        //   console.log("deleting cookie")
        //    this.cookies.delete('uid')
        // }else{
        //   console.log("redirecting")
        //   this.router.navigate(['/admin/home'])
        // }
        
      }).catch((err)=>{console.log(err);window.location.reload();})
    }else{
      this.router.navigate(['/signin']);
    }
     this.fetchIssue();
    }
  
    ngOnInit(): void {
      
    }
  
    getId(issue:any){
      this.selected_issue=issue
      console.log("output to parent" + issue);
    }

    fetchIssue(){
      this.http.get(this.url+"/issue/"+this.cookies.get('uid').split('_')[1],{withCredentials:true})
      .toPromise().then((res)=>{
        if(res){
          this.sortIssues(res);
        }
        else window.location.reload();//if there is no cookie

      }).catch((err)=>{console.log(err);})
    }

    sortIssues(issues:any){
      issues.map((issue:any)=>{
        if(issue.status=="active")
        this.active_issues.push(issue)
        else
        this.solved_issues.push(issue);
      })
    }
  

}
