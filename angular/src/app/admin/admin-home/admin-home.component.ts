import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  url="https://8080-bafdabebdefeddaffcbacabafcefcfcbc.examlyiopb.examly.io"
  tab:String="new"
  admin_stats:any={}
  issues:{}[]=[]
  new_issues:{}[]=[]
  active_issues:{}[]=[]
  solved_issues:{}[]=[]
  available_developers:any=[]//developers assigned issues<5
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

    this.http.get(this.url+"/admin/issuedata",{withCredentials:true})
      .toPromise().then((res)=>{console.log(res);this.admin_stats=res})
      .catch((err)=>{console.log(err);window.location.reload();})
   }

  ngOnInit(): void {
    this.fetchIssues()

  }

  getId(issue:any){
    this.selected_issue=issue
    console.log("output to parent" + issue);
    this.fetchDevelopers();
  }
  
  setTab(tab:String){
    this.tab=tab;
    if(tab=="new")this.issues=this.new_issues
    else if(tab="active") this.issues=this.active_issues
    else if(tab=="solved")this.issues=this.solved_issues
    else console.log("something is wrong")
  }
  assignDev(developer:String,issue:String){
    console.log(developer,issue);
    this.http.post(this.url+`/admin/mapIssue/${issue}`,{devid:developer}).toPromise().then((res)=>{
      if(res){
        console.log(res)
      }else{
        window.location.reload();
      }
    }).catch((err)=>{console.log(err);window.location.reload();})

  }
  fetchIssues(){
    this.http.get(this.url+"/admin",{observe:'response'}).toPromise().then((response)=>{
      let res=response.body
      if(res){
      this.sortIssues(res);
      this.setTab(this.tab)
      }
    })
  }
  
  fetchDevelopers(){
    this.http.get(this.url+"/availableDevs").toPromise().then((res)=>{
      if(res){
        console.log(res)
        this.available_developers=res
      }else{
        window.location.reload();
      }
    }).catch((err)=>{console.log(err);window.location.reload();})
  }
  sortIssues(issues:any){
    console.log(issues)
    issues.forEach((issue:any)=>{
      if(issue.status=="solved")
      this.solved_issues.push(issue);
      else if(issue.connectedby==null)
      this.new_issues.push(issue);
      else this.active_issues.push(issue);
    })
  }

}
