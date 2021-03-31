import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginURL="https://8080-bafdabebdefeddaffcbacabafcefcfcbc.examlyiopb.examly.io/login";
  errMsg:String=""
  hasErr:Boolean=false
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(email:String,password:String){
    if(!this.validateEmail(email))
    this.showError("Enter a Valid Email");
    else if(password=="")
    this.showError("password cant be empty");
    else{
    //send form to backend
    this.http.post(this.loginURL,{
      email:email,
      password:password
    }).toPromise().then((res)=>{
      if(res)
      {
        //sucess
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
