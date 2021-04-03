import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindeveloper',
  templateUrl: './admindeveloper.component.html',
  styleUrls: ['./admindeveloper.component.css']
})
export class AdmindeveloperComponent implements OnInit {

  new_developers=[{
    developerId:"XE65768" ,
    developerName: "Mr XYZ",
    role:"Developer",
    createdOn: "3-09-20",
     status: "Active"
    },
    {
      developerId:"XE65433" ,
      developerName: "Mr ABC",
      role:"Developer",
      createdOn: "3-09-20",
       status: "Active"
    }
  ]
  selected_developer={
    developerId:"" ,
    developerName: "",
    role:"",
    createdOn: "",
     status: ""
  }    
    constructor() { }
  
    ngOnInit(): void {
      
    }
  
    getId(developer:any){
      this.selected_developer=developer
      console.log("output to parent" + developer);
    }
  

}
