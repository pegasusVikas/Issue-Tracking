import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

 @Input("user") user:any=""
 url="https://8080-bafdabebdefeddaffcbacabafcefcfcbc.examlyiopb.examly.io"
  constructor(private http:HttpClient,private cookies:CookieService,private router:Router) { }

  ngOnInit(): void {
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
