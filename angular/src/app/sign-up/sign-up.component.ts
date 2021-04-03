import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loginURL="https://8080-bafdabebdefeddaffcbacabafcefcfcbc.examlyiopb.examly.io/signup";
  errMsg:String=""
  hasErr:Boolean=false
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(email:String,username:String,phone:String,password1:String,password2:String){
    if(password1!=password2)
    this.showError("Passwords dont match");
    else if(!this.validateEmail(email))
    this.showError("Enter a Valid Email");
    else if(username=="")
    this.showError("User Name cant be empty");
    else if(!this.validatePhonenumber(phone))
    this.showError("Enter a valid Mobile Number");
    else if(password1=="")
    this.showError("password cant be empty");
    else{
    //send form to backend
    this.http.post(this.loginURL,{
      email:email,
      password:password1,
      username:username,
      mobilenumber:phone,
      active:1,
      role:"user"
    }).toPromise().then((res:any)=>{
      if(res)
      {
        //sucess
        console.log("registered");
      }
      else{
        this.showError("Can't SignUp.User already exists");
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
  log(x: any)
  {
    console.log(x);
  }

}
