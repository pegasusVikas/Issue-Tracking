import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {environment} from '../../../environments/environment.prod'

@Component({
  selector: 'app-admindeveloper',
  templateUrl: './admindeveloper.component.html',
  styleUrls: ['./admindeveloper.component.css']
})
export class AdmindeveloperComponent implements OnInit {
  url=environment.url
  developers:any=[]
  err:any=[{hasErr:false,errMsg:""},{hasErr:false,errMsg:""}]
  selected_developer={
    id:"" ,
    username: "",
    email:"",
    role:"",
    mobilenumber: "",
    password:"",
    active:""
  }    
    constructor(private http:HttpClient,private cookies:CookieService,private router:Router) { 
    let cookie=this.cookies.get('uid');
    let role=cookie.split("_")[0];
    if(cookie){
      console.log("cookie detected")
      this.http.get(this.url+"/validateCookie",{withCredentials:true})
      .toPromise().then((res)=>{
        //change here while hosting
        if(!(res)||role!="admin")
        {
          console.log("deleting cookie")
           this.cookies.delete('uid')
          console.log("redirecting")
          this.router.navigate(['/signin'])
        }
        
      }).catch((err)=>{console.log(err);window.location.reload();})
    }else{
      this.router.navigate(['/signin']);
    }

    this.fetchDevelopers();
    }
  
    ngOnInit(): void {
      
    }
    fetchDevelopers(){
      this.http.get(this.url+"/admin/developers",{withCredentials:true})
      .toPromise().then((res)=>{console.log(res);this.developers=res})
      .catch((err)=>{console.log(err)})
    }
    getId(developer:any){
      this.selected_developer=developer
      console.log("output to parent" + developer);
    }
    
    addDev(username:String,email:String,mobilenumber:String,password:String){
      if(this.validatePhonenumber(mobilenumber)){
        this.http.post(this.url+"/admin/addDevelopers/"
        ,{email,username,password,mobilenumber}
        ,{withCredentials:true,responseType:'text'})
        .toPromise().then((res)=>{
          console.log(res)
          if(res!="Successfully added")
           this.logError(res,0)
          else
            this.fetchDevelopers()
        })
        .catch((err)=>{console.log(err)})
        }else{
          this.logError("Enter Valid MobileNo",0)
        }
    }
    editDev(username:String,email:String,mobilenumber:String,password:String){
      console.log(username,email,mobilenumber,password);
      if(this.validatePhonenumber(mobilenumber)){
      this.http.put(this.url+"/admin/updateDeveloper/"+this.selected_developer.id
      ,{email,username,password,mobilenumber}
      ,{withCredentials:true,responseType:'text'})
      .toPromise().then((res)=>{
        console.log(res)
        if(res!="Edit Successful")
         this.logError(res,1)
        else
          this.fetchDevelopers()
      })
      .catch((err)=>{console.log(err)})
      }else{
        this.logError("Enter Valid MobileNo",1)
      }
    }
    deleteDev(){
        this.http.delete(this.url+"/admin/deleteDeveloper/"+this.selected_developer.id
        ,{withCredentials:true})
        .toPromise().then((res)=>{
          this.fetchDevelopers()
        })
        .catch((err)=>{console.log(err)})
    }

    logError(msg:any,i:any){
      this.err[i].errMsg=msg
      this.err[i].hasErr=true
      setTimeout(()=>{this.err[i].hasErr=false},4000)
    }
    validatePhonenumber(inputtxt:String)
    {
    var phoneno = /^\d{10}$/;
    if(inputtxt.match(phoneno))
        {
         return true;
       }
        else
          {
          return false;
          }
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
