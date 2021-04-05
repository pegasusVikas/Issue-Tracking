import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {environment} from '../../../environments/environment.prod'

@Component({
  selector: 'app-developer-home',
  templateUrl: './developer-home.component.html',
  styleUrls: ['./developer-home.component.css']
})
export class DeveloperHomeComponent implements OnInit {
  url=environment.url
  active_issues:{}[]=[]
  issues:{}[]=this.active_issues
  id:any=""
  user:any={}
  solved_issues:{}[]=[]
  stats:any={}
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
          this.id=cookie.split("_")[1];
          this.fetchIssue();
          this.devStats();
          this.fetchUser();
    }
  
    ngOnInit(): void {
      
    }
  
    getId(issue:any){
      this.selected_issue=issue
      console.log("output to parent" + issue);
    }

    fetchIssue(){
      this.active_issues=[]
      this.solved_issues=[]
      this.http.get(this.url+"/issue/"+this.cookies.get('uid').split('_')[1],{withCredentials:true})
      .toPromise().then((res)=>{
        if(res){
          this.sortIssues(res);
          this.setTab("active")
        }
        else window.location.reload();//if there is no cookie

      }).catch((err)=>{console.log(err);})
    }
    devStats(){
      this.http.get(this.url+"/dev/issuedata",{withCredentials:true})
      .toPromise().then((res)=>{
        console.log(res)
        if(res){
          this.stats=res;
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
    
    setTab(tab:String){
      if(tab=="active")
      this.issues=this.active_issues
      else if(tab=="resolved")
      this.issues=this.solved_issues
    }

    issueResolve(issue:String){
      if(issue=="1"){
        this.http.put(this.url+"/status/"+this.selected_issue.issueid,{withCredentials:true})
      .toPromise().then((res)=>{
        this.fetchIssue();
      }).catch((err)=>{console.log(err)})
      }
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

    logout(){
      //this.cookies.set('uid',"/",0);
      this.cookies.delete('uid',"/",".examlyiopb.examly.io");
      this.http.put(this.url+"/logout",
      {withCredentials:true})
      .toPromise().then((res)=>{
        console.log("redirecting")
        this.router.navigate(['/signin']);
      })
      .catch((err)=>{console.log(err);window.location.reload();})
      
    }
    
}
