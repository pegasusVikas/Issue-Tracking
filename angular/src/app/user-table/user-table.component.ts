import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @Input("issues") issues:any;
  @Output() outputId =new EventEmitter<String>();
 
  constructor() { }

  ngOnInit(): void {
  }
  onClick(issue:any){
    console.log(issue);
    this.outputId.emit(issue);
  }

}
