import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'tableact',
  templateUrl: './tableact.component.html',
  styleUrls: ['./tableact.component.css']
})
export class TableactComponent implements OnInit {

  @Input() issues:any;
  constructor() { }

  ngOnInit(): void {
  }

}
