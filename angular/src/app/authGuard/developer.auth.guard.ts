import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from "@angular/router"
import { CookieService } from "ngx-cookie-service";
import {environment} from '../../environments/environment.prod'

@Injectable()
export class DeveloperAuthGuard implements CanActivate{
    url=environment.url
    constructor(private http:HttpClient,private router :Router,private cookies:CookieService){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
    let cookie=this.cookies.get('uid');
    let role=cookie.split("_")[0];
    if(cookie){
      console.log("cookie detected")
      return this.http.get(this.url+"/validateCookie",{withCredentials:true})
      .toPromise().then((res:any)=>{
        //change here while hosting
        console.log("cookie is "+res);
        if(!(res)||role!="developer")
        {
          console.log("deleting cookie")
           this.cookies.delete('uid',"/",".examlyiopb.examly.io");
           console.log("redirecting")
          this.router.navigate(['/signin']);
          return false;
        }
        // this.router.navigate(['/signup']);
        return true;
        
      }).catch((err:any)=>{console.log(err);window.location.reload();return false;})
    }else{
       this.router.navigate(['/signin']);
       return false;
    }

    }

}