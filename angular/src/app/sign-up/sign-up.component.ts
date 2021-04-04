import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loginURL="https://8080-bafdabebdefeddaffcbacabafcefcfcbc.examlyiopb.examly.io/signup";
  errMsg:String=""
  hasErr:Boolean=false
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(email:String,username:String,phone:String,password1:String,password2:String){
    if(password1!=password2)
    this.showError("Passwords don't match!");
    else if(!this.validateEmail(email))
    this.showError("Enter a Valid Email");
    else if(username=="")
    this.showError("User Name can't be empty!");
    else if(!this.validatePhonenumber(phone))
    this.showError("Enter a valid Mobile Number");
    else if(password1=="")
    this.showError("Password can't be empty!");
    else{
    //send form to backend
    this.http.post(this.loginURL,{
      email:email,
      password:password1,
      username:username,
      mobilenumber:phone,
      active:1,
      role:"user"
    },{responseType:'text'}).toPromise().then((res:any)=>{
      if(res=="Successfully registered")
      {
        //sucess
        this.router.navigate([`/signin`])
        console.log(res);
      }
      else{
        this.showError(res);
      }
    }).catch((err)=>{console.log(err)})
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
 

}
