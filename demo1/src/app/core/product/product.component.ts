import { Component, OnInit } from '@angular/core';
import {Product} from "../../Model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  disp:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  products:Product[] = [
    new Product("Leaf Rake","gdn-0011",new Date(2021,2,19),19.95,1,"1.jpg"),
    new Product("Garden Cart","gdn-0023",new Date(2021,2,18),32.99,2,"2.jpg"),
    new Product("Hammer","tbx-0048",new Date(2021,4,21),9.90,3,"3.jpg"),
    new Product("Saw","gdn-0022",new Date(2021,4,15),11.55,4,"4.jpg"),
    new Product("Video Game Controller","gmg-0042",new Date(2020,9,15),39.95,5,"5.jpg")
  ];


}
