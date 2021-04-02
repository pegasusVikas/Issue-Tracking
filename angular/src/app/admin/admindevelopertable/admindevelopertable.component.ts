import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-admindevelopertable',
  templateUrl: './admindevelopertable.component.html',
  styleUrls: ['./admindevelopertable.component.css']
})
export class AdmindevelopertableComponent implements OnInit {
  @Input("developers") developers:any;
  @Output() outputId =new EventEmitter<String>();
 
  constructor() { }

  ngOnInit(): void {
  }
  onClick(developer:any){
    console.log(developer);
    this.outputId.emit(developer);
  }
}
