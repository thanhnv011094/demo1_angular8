import { Component, OnInit } from '@angular/core';
import { API_URL } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = API_URL;

  ngOnInit(): void {
    console.log(this.title);
  }
}
