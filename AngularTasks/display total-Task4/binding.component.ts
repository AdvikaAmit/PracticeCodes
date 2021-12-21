import { Component, OnInit } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent  {

    pname:string ="";
    price:number=0;
    qty:number=0;
    total:number=0;
    result:string  = "";

    pid:number=0;
    prdname:string="";
    prdprice:number=0;
    category:string="";
    prdqty:number=0;

    getTotal()
    {
      
       this.total = this.price * this.qty;

       this.result = this.total.toString();
      
    }

    

    prdArray:Product[] = [
      {pid:1,pname:"Prd1",price:1000,category:"cat1",qty:1},
      {pid:2,pname:"Prd2",price:2000,category:"cat2",qty:2},
      {pid:3,pname:"Prd3",price:3000,category:"cat3",qty:3},
      {pid:4,pname:"Prd4",price:4000,category:"cat4",qty:4},
      {pid:5,pname:"Prd5",price:5000,category:"cat5",qty:2},
      {pid:6,pname:"Prd6",price:6000,category:"cat6",qty:6},
    ]
    
    prdobj:Product = new Product();
    add_product()
    {
       this.prdobj.pid = this.pid;
       this.prdobj.pname = this.prdname;
       this.prdobj.price = this.prdprice;
       this.prdobj.category = this.category;
       this.prdobj.qty = this.prdqty;
       
      this.prdArray.push(this.prdobj);
    }
}
