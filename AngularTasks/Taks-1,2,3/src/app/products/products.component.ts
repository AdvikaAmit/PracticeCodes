import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {  

  public prdArray:Product[] = [
    {pid:1,pname:"Prd1",price:1000,category:"cat1",qty:1},
    {pid:2,pname:"Prd2",price:2000,category:"cat2",qty:2},
    {pid:3,pname:"Prd3",price:3000,category:"cat3",qty:3},
    {pid:4,pname:"Prd4",price:4000,category:"cat4",qty:4},
    {pid:5,pname:"Prd5",price:5000,category:"cat5",qty:2},
    {pid:6,pname:"Prd6",price:6000,category:"cat6",qty:6},
  ]

}
