import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'tablesol',
  templateUrl: './tablesol.component.html',
  styleUrls: ['./tablesol.component.css']
})
export class TablesolComponent implements OnInit {

  @Input() issues:any;
  constructor() { }

  ngOnInit(): void {
  }

}
