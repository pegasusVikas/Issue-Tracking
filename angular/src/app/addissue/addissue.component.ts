import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addissue',
  templateUrl: './addissue.component.html',
  styleUrls: ['./addissue.component.css']
})
export class AddissueComponent implements OnInit {

  source:String="";
  show:Boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(name:String,desc:String,url:String)
  {
    console.log(name+" "+desc+" "+url);
  }
  image(url:String)
  {
    console.log(url);
    this.source=url;
    this.show=true;
    
  }
}
