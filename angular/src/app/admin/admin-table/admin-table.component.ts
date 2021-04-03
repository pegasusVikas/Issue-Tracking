import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  @Input("issues") issues:any;
  @Input("tab") tab:any;
  @Output() outputId =new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
    
  }
  onClick(issue:any){
    console.log(issue);
    this.outputId.emit(issue);
  }

}
