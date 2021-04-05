import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from "@angular/router"
import {environment} from '../../environments/environment.prod'

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginURL=environment.url;
  errMsg:String=""
  hasErr:Boolean=false
  constructor(private http:HttpClient,private cookies:CookieService,private router:Router) { 
    let cookie=this.cookies.get('uid');
    if(cookie){
      console.log("cookie detected")
      this.http.get(this.loginURL+"/validateCookie",{withCredentials:true})
      .toPromise().then((res)=>{
        //change here while hosting
        if(!(res))
        {
          console.log("deleting cookie")
           this.cookies.delete('uid')
        }else{
          console.log("redirecting")
          let role=cookie.split("_")[0];
        this.router.navigate([`/${role}/home`])
        }
        
      })
    }
  }

  ngOnInit(): void {
    console.log(this.cookies.get('lol'))
  }
  onSubmit(email:String,password:String){
    // if(!this.validateEmail(email))
    // this.showError("Enter a Valid Email");
    // else 
    if(password=="")
    this.showError("password cant be empty");
    else{
    //send form to backend
    this.http.post(this.loginURL+"/login",{
      email:email,
      password:password
    },{withCredentials:true}).toPromise().then((res)=>{
      if(res)
      {
        window.location.reload();
      }
      else{
        this.showError("Invalid Credentials!");
      }
    })

  }
    
  }
  showError(error:String){
    this.errMsg=error
    this.hasErr=true
    setTimeout(()=>{this.hasErr=false},4000)
  }
  validateEmail(mail:any) 
  {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
  }
  log(x: any)
  {
    console.log(x);
  }

}
