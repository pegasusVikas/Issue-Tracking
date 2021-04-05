import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from "@angular/router"
import { CookieService } from "ngx-cookie-service";
import {environment} from '../../environments/environment.prod'

@Injectable()
export class AuthenticateGuard implements CanActivate{
    url=environment.url
    constructor(private http:HttpClient,private router :Router,private cookies:CookieService){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
        let cookie=this.cookies.get('uid');
        if(cookie){
          console.log("cookie detected")
          return this.http.get(this.url+"/validateCookie",{withCredentials:true})
          .toPromise().then((res)=>{
            //change here while hosting
            if(!(res))
            {
              console.log("deleting cookie")
               this.cookies.delete('uid',"/",".examlyiopb.examly.io")
               return true;
            }else{
              console.log("redirecting")
              let role=cookie.split("_")[0];
            this.router.navigate([`/${role}/home`])
            return false;
            }
            
          })
        }
        return true;
    }

}