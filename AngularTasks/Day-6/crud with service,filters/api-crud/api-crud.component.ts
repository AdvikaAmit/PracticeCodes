import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from '../models/Employee';
import { CrudServiceService } from '../crud-service.service';

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
  empFilterArray:any[]=[];  
  strjob:string="Developer";

  constructor(private crudservice:CrudServiceService) { }

  ngOnInit() {
      this.getEmp_click();
  }

  getEmp_click(){

      this.crudservice.getAllEmployees().subscribe((response:Emp[]) =>{
               this.empArray=response;
      });
  }

  addEmp_click(){
     let empObj:Emp= new Emp();
     empObj.empno = this.empno;
     empObj.empname = this.empname;
     empObj.job = this.job;

     this.crudservice.createEmp(empObj).subscribe((response:any) => {

         console.log("New Employee Added");
         alert("New Employee Added");
         this.clearFields();
         this.getEmp_click();
     });
  }

  deleteEmp_click(empno:number){

      let isDelete:boolean = confirm("Are u sure want to delete?");

      if(isDelete == true)
      {
        this.crudservice.deleteEmpyById(empno).subscribe((response:any) => {
          console.log("Employee Deleted");
          alert("Employee Deleted");        
          this.getEmp_click(); 
        });
      }      
  }

  select_emp(empno:number){
    this.crudservice.getEmpyById(empno).subscribe((response:Emp) => {
       
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

    this.crudservice.updateEmp(empObj).subscribe((response:any) => {

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

  getEmpJobs_click(){
       this.crudservice.getEmpJobs().subscribe( (response:string[]) =>{
              console.log(response);
       })   
    }

    getEmpNo_click(){
       this.crudservice.getEmployeeNos().subscribe( (response:any[]) => {
           console.log(response); 
       })
    }

  getEmpByJob_click(){

      let str = this.strjob;

      this.crudservice.getEmployeeByJobs(str).subscribe((response:Emp[]) => {
             console.log(response);
             this.empFilterArray = response;

      })
  }

  getEmpNamesAndJobs(){
        this.crudservice.getEmpnamesAndJobs().subscribe( (response:any[]) => {
               console.log(response);
        })
  }

}
