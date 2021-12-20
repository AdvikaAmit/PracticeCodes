import { Component, OnInit } from '@angular/core';
import {FormsModule}  from '@angular/forms';

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

    getTotal()
    {
      
       this.total = this.price * this.qty;

       this.result = this.total.toString();

      
    }
    

}
