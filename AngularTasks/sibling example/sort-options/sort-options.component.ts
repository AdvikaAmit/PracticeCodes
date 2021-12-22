import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.css']
})
export class SortOptionsComponent  {

 @Output()
 onSortChanged:EventEmitter<string> = new EventEmitter();

 

 strSorting:string=""; 

 sortemployee()
 {
   this.onSortChanged.emit(this.strSorting);
 } 
}
