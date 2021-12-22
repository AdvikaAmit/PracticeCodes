import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  sorting:string="";


  empArray: Employee[] = 
   [
     { eno:1234,ename:"Ram",job:"Developer",salary:30000,deptno:10},     
     { eno:3456,ename:"Bhumi",job:"Analyst",salary: 38000,deptno:20},
     { eno:9867,ename:"vikram",job:"Manager",salary:60000,deptno:40},
     { eno:9886,ename:"vaibhav",job:"Tester",salary:45000,deptno:30},  
     { eno:4567,ename:"Amit",job:"Developer",salary:25000,deptno:10},  
   
   ]

   ngOnChanges()
    {
     debugger;
     let value = this.sorting;
    
     if(value == "eno")
     {
       this.empArray = this.empArray.sort((a,b) => {
         return a.eno - b.eno
       });
     }
     else if(value == "ename")
     {
       this.empArray = this.empArray.sort((a,b) => {
           let fa = a.ename.toLowerCase(),
               fb = b.ename.toLowerCase();

               if(fa < fb){
                   return -1;
               }

               if(fa > fb){
                 return 1;
             }

             return 0;

         });
     }
     else if(value == "job")
     {
       this.empArray = this.empArray.sort((a,b) => {
         
             let fa = a.job.toLowerCase(),
                 fb = b.job.toLowerCase();

             if(fa < fb){
                  return -1;
             }
                 
             if(fa > fb){
                  return 1;
             }
                 
         return 0;
           
       }); 
     }
     else if(value == "salary")
     {
       this.empArray = this.empArray.sort((a,b) => {
         return a.salary - b.salary
       });
     }
     else if(value == "deptno")
     { 
       this.empArray = this.empArray.sort((a,b) => {
         return a.deptno - b.deptno
       });
     } 
  } 
}
