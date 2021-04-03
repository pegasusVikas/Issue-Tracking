import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-developer-table',
  templateUrl: './developer-table.component.html',
  styleUrls: ['./developer-table.component.css']
})
export class DeveloperTableComponent implements OnInit {
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
