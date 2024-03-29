import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {environment} from '../../environments/environment.prod'

@Component({
  selector: 'addissue',
  templateUrl: './addissue.component.html',
  styleUrls: ['./addissue.component.css']
})
export class AddissueComponent implements OnInit {
  url=environment.url
  source:String="";
  show:Boolean=false;
  id:any=""
  stats:any={}
  user:any={}
  constructor(private http:HttpClient,private cookies:CookieService,private router:Router) { 
    let cookie=this.cookies.get('uid');
    this.id=cookie.split("_")[1];
    this.fetchUser()
    this.userStats();
  }

  ngOnInit(): void {
  }
  onSubmit(issuename:String,issuedesc:String,issueurl:String)
  {
    this.image(issueurl);
    console.log(issuename+" "+issuedesc+" "+issueurl);
    this.http.post(this.url+"/addIssue",
    {issuename,issueurl,issuedesc},
    {withCredentials:true})
    .toPromise().then((res)=>{
      window.location.reload();
    })
    .catch((err)=>{console.log(err);window.location.reload();})
  }
  image(url:String)
  {
    console.log(url);
    this.source=url;
    this.show=true;
    
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
}
