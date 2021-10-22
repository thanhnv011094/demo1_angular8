import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Product}  from '../entities';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() removeProduct: EventEmitter<any>;

  constructor() {
    this.removeProduct = new EventEmitter<any>()
   }

  ngOnInit() {

  }

  remove($event, id){
    this.removeProduct.emit({$event, id});
  }

}
