import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../constants";
import { Product } from "../entities";

@Component({
  selector: "app-main-body",
  templateUrl: "./main-body.component.html",
  styleUrls: ["./main-body.component.css"],
})
export class MainBodyComponent implements OnInit {
  products: Product[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Simple GET request with response type <any>
    this.http.get<any>(API_URL + "/products/").subscribe((data) => {
      console.log(data);
      this.products = data as Product[];
      console.log(this.products);
    });
  }

  removeProduct($event) {
    console.log($event);
    const index = this.products.findIndex((x) => x.id == $event.id);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}
