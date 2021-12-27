import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from '../models/Employee';

@Component({
  selector: 'app-api-crud',
  templateUrl: './api-crud.component.html',
  styleUrls: ['./api-crud.component.css']
})
export class ApiCrudComponent implements OnInit {


  empno:number=0;
  empname:string="";
  job:string="";
  isempnoDisable:boolean=false;
  empArray:any[]=[];
  url:string = "http://localhost:3000/employees";

  constructor(private httpObj:HttpClient) { }

  ngOnInit() {
      this.getEmp_click();
  }

  getEmp_click(){

      this.httpObj.get(this.url).subscribe((response:any) =>{
               this.empArray=response;
      });
  }

  addEmp_click(){
     let empObj:Emp= new Emp();
     empObj.empno = this.empno;
     empObj.empname = this.empname;
     empObj.job = this.job;

     this.httpObj.post(this.url, empObj).subscribe((response:any) => {

         console.log("New Employee Added");
         alert("New Employee Added");
         this.clearFields();
         this.getEmp_click();
     });
  }

  deleteEmp_click(empno:number){
 
      this.httpObj.delete(this.url + "/" + empno).subscribe((response:any) => {
        console.log("Employee Deleted");
        alert("Employee Deleted");        
        this.getEmp_click(); 
      });
  }

  select_emp(empno:number){
    this.httpObj.get(this.url + "/" + empno).subscribe((response:any) => {
       
      let empObj:any= response;
      this.empno = response.empno;
      this.empname = response.empname;
      this.job = response.job;
       this.isempnoDisable = true;
    });
  }

  updateEmp_click(){

    let empObj:Emp= new Emp();
    empObj.empno = this.empno;
    empObj.empname = this.empname;
    empObj.job = this.job;

    this.httpObj.put(this.url + "/" + this.empno, empObj).subscribe((response:any) => {

        console.log("Employee updated");
        alert("Employee updated");
        this.clearFields();
        this.getEmp_click();
    });
  }



  clearFields(){
    this.empno=0;
    this.empname="";
    this.job="";
    this.isempnoDisable=false;
    this.getEmp_click();

  }

}
