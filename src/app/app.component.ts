import { Component, OnInit } from '@angular/core';
import { API_URL } from './constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }

  title = API_URL;

  ngOnInit(): void {
    console.log(this.title);
    // Simple GET request with response type <any>
    // this.http.get<any>(API_URL + '/products/').subscribe(data => {
    //   console.log(data);
    // });
  }
}
