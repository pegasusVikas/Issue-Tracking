import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  errMsg:String=""
  hasErr:Boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(email:String,username:String,phone:String,password1:String,password2:String){
    if(password1!=password2)
    this.showError("Passwords dont match");
    else if(email=="")
    this.showError("Email cant be empty");
    else if(username=="")
    this.showError("User Name cant be empty");
    else if(phone=="")
    this.showError("Mobile Number cant be empty");
    else if(password1=="")
    this.showError("password cant be empty");

    //send form to backend

  }
  showError(error:String){
    this.errMsg=error
    this.hasErr=true
    setTimeout(()=>{this.hasErr=false},4000)
  }
  log(x: any)
  {
    console.log(x);
  }

}
