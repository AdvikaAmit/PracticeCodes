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
    isPrdDisabled:boolean=false;
    

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
      let Obj:any = this.prdArray.find(x=>x.pid == this.pid);

      if(this.prdArray.indexOf(Obj) == -1)
      {
        let prObj:Product = new Product();

        prObj.pid = this.pid;
        prObj.pname = this.prdname;
        prObj.price = this.prdprice;
        prObj.category = this.category;
        prObj.qty = this.prdqty;
       
        this.prdArray.push(prObj);

        this.clearFields();
      }
      else
      {
        this.result = "Product with same id exist";
      }

       
    }

    deletePrd_Click(pid:number)
    {         
         let index:number = this.prdArray.findIndex(x=>x.pid == pid);
         this.prdArray.splice(index,1);
    }

    selectprd_click(pid:number)
    {
      let Obj:any = this.prdArray.find(x=>x.pid == pid);
      
      this.pid = Obj.pid;
      this.prdname = Obj.pname;
      this.prdprice = Obj.price;
      this.category = Obj.category;
      this.prdqty = Obj.qty;    
      this.isPrdDisabled=true; 
    }

    update_product()
    {
      let index:any = this.prdArray.findIndex(x=>x.pid == this.pid);
      this.prdArray[index].pid = this.pid;
      this.prdArray[index].pname = this.prdname;
      this.prdArray[index].price = this.prdprice;
      this.prdArray[index].category = this.category;
      this.prdArray[index].qty = this.prdqty;

      this.clearFields();
    }

    clearFields()
    {
       this.isPrdDisabled=false; 
       this.pid=0;
       this.prdname = "";
       this.prdprice = 0;
       this.category = "";
       this.prdqty = 0; 
       this.result="";
    }

    get_product()
    {
      this.prdArray = 
      [
        {pid:1,pname:"Prd1",price:1000,category:"cat1",qty:1},
        {pid:2,pname:"Prd2",price:2000,category:"cat2",qty:2},
        {pid:3,pname:"Prd3",price:3000,category:"cat3",qty:3},
        {pid:4,pname:"Prd4",price:4000,category:"cat4",qty:4},
        {pid:5,pname:"Prd5",price:5000,category:"cat5",qty:2},
        {pid:6,pname:"Prd6",price:6000,category:"cat6",qty:6},
      ]
    }
}
