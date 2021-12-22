import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   mode:string="List";

  empArray: Employee[] = 
  [
    { eno:1234,ename:"Ram",job:"Developer",salary:30000,deptno:10},     
    { eno:3456,ename:"Bhumi",job:"Analyst",salary: 38000,deptno:20},
    { eno:9867,ename:"vikram",job:"Manager",salary:60000,deptno:40},
    { eno:9886,ename:"vaibhav",job:"Tester",salary:45000,deptno:30},  
    { eno:4567,ename:"Amit",job:"Developer",salary:25000,deptno:10},  
  
  ]

  display(value:string)
  {
    if(value == "List")
    {
      this.mode="List";
    }
    if(value == "Table")
    {
      this.mode="Table";
    }
    if(value == "Card")
    {
      this.mode="Card";
    }
   
  }

}
