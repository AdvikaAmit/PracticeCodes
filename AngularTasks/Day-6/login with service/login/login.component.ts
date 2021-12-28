import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  uid:string="";
  pwd:string="";
  result:string="";
  isButtonDisabled:boolean=false;
  count:number=0;

  constructor(private crudservice:CrudServiceService){

  }

  loginButton_click(){
    this.crudservice.getTokenForValidUser(this.uid,this.pwd).subscribe( (response:any) => {

          console.log(response.accessToken);
    })
  }

}
