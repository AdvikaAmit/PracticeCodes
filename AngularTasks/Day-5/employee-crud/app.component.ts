import { Component } from '@angular/core';
import { StructuredType } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedSort:string="";

  sort_parent(sortstr:string)
  {
     this.selectedSort = sortstr;
  }

  aclick_parent()
  {
     this.selectedSort = "eno";
  }
}
