import { Component } from '@angular/core';
import {environment} from './../environments/environment.prod';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Issue Tracker';
  url=environment.url;
}
