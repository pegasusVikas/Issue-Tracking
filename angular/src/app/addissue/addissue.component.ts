import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'addissue',
  templateUrl: './addissue.component.html',
  styleUrls: ['./addissue.component.css']
})
export class AddissueComponent implements OnInit {
  url="https://8080-bafdabebdefeddaffcbacabafcefcfcbc.examlyiopb.examly.io"
  source:String="";
  show:Boolean=false;
  id:any=""
  user:any={}
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
        console.log("valid cookie")
        this.id=cookie.split("_")[1];
        this.fetchUser()
      }
      
    }).catch((err)=>{console.log(err);window.location.reload();})
  }else{
    this.router.navigate(['/signin']);
  }
  }

  ngOnInit(): void {
  }
  onSubmit(issuename:String,issuedesc:String,issueurl:String)
  {
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
}
