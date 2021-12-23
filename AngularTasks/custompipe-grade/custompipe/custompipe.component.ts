import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent  {

  public empArray: any[] = 
  [
    { ename:"scott",grade:1},     
    { ename:"james",grade:2},
    { ename:"Ram",grade:3},
    { ename:"smitH",grade:4},
    { ename:"sita",grade:1},
    { ename:"vijay",grade:2},
    { ename:"nikita",grade:3},
    { ename:"vikram",grade:4},
  
  ]
 
}
