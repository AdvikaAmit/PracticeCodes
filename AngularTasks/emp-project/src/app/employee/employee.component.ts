import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  public eid:number=23456234;
  public ename:string="Stephen";
  public job:string="Manager";
  public salary:number=75000;
  public dept:number=10;
}
