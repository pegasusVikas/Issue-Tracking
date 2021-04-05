import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {environment} from '../../environments/environment.prod'

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  url=environment.url
  stats:any={}
  id:any=""
  user:any={}
  active_issues:any=[
  ]
  solved_issues:any=[

  ]
  issues=this.active_issues
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
    let role=cookie.split("_")[0];
  if(cookie){
    console.log("cookie detected")
    this.http.get(this.url+"/validateCookie",{withCredentials:true})
    .toPromise().then((res)=>{
      //change here while hosting
       if(!(res)||role!="user")
       {
         console.log("deleting cookie")
          this.cookies.delete('uid')
           console.log("redirecting")
         this.router.navigate(['/signin'])
      }else{
        console.log("lol")
        this.id=cookie.split("_")[1];
        this.fetchIssue();
        this.userStats();
        this.fetchUser();
      }
      
    }).catch((err)=>{console.log(err);window.location.reload();})
  }else{
    this.router.navigate(['/signin']);
  }
  }
  
    ngOnInit(): void {
      
    }
  
    getId(issue:any){
      this.selected_issue=issue
      console.log("output to parent" + issue);
    }

    setTab(tab:String){
      if(tab=="active"){
       this.issues=this.active_issues
      }else if(tab=="resolved"){
        this.issues=this.solved_issues
      }
    }

    sortIssues(issues:any){
      issues.map((issue:any)=>{
        if(issue.status=="active")
        this.active_issues.push(issue)
        else
        this.solved_issues.push(issue);
      })
    }

    fetchIssue(){
      this.http.get(this.url+"/issue/"+this.id,{withCredentials:true})
      .toPromise().then((res)=>{
        if(res){
          this.sortIssues(res);
          this.setTab("active")
        }
        else window.location.reload();//if there is no cookie

      }).catch((err)=>{console.log(err);})
    }

    userStats(){
      this.http.get(this.url+"/user/issuedata",{withCredentials:true})
      .toPromise().then((res)=>{
        console.log(res)
        if(res){
          this.stats=res;
        }
        else window.location.reload();//if there is no cookie

      }).catch((err)=>{console.log(err);})
    }

    fetchUser(){
      this.http.get(this.url+"/user/"+this.id,{withCredentials:true})
      .toPromise().then((res)=>{
        console.log(res)
        if(res){
          this.user=res;
        }
        else window.location.reload();//if there is no cookie

      }).catch((err)=>{console.log(err);})
    }
}
