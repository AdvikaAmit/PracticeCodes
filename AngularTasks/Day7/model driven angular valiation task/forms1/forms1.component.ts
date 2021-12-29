import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.css']
})
export class Forms1Component {

public registerForm : FormGroup  = new FormGroup({

    name    :   new FormControl("",Validators.required),
    contact :   new FormControl("", [Validators.required, Validators.pattern("\\d{10}"), Validators.minLength(10), Validators.maxLength(10)]),    
    email   :   new FormControl("", [Validators.required,Validators.email]),
    regNo   :   new FormControl("", [Validators.pattern("[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}"), Validators.minLength(10), Validators.maxLength(10)] ),
    address :   new FormControl("", Validators.required),
    model   :   new FormControl("",[ Validators.minLength(3), Validators.maxLength(10)]),
    color   :   new FormControl("", Validators.required),
    year    :   new FormControl("",Validators.pattern("\\b(201[2-9]|202[1-2])\\b"))

   });


   public submit_click():void{
     alert("vehicle registered");
   }
}
