import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slicepipe',
  templateUrl: './slicepipe.component.html',
  styleUrls: ['./slicepipe.component.css']
})
export class SlicepipeComponent {

  start:number = 0;
  end:number = 4;  

  userArray:any[]=
  [
    { ename:"RAm",job:"DeveloPer"},     
    { ename:"Bhumi",job:"Analyst"},
    { ename:"vIkram",job:"MaNAger"},
    { ename:"vaibhAV",job:"TeSter"},  
    { ename:"Amit",job:"dEveloper"}, 
    { ename:"Akram",job:"DeveloPer"},     
    { ename:"Scott",job:"Analyst"},
    { ename:"James",job:"MaNAger"},
    { ename:"Nita",job:"TeSter"},  
    { ename:"Amita",job:"dEveloper"}, 
    { ename:"kripa",job:"DeveloPer"},     
    { ename:"bhuvan",job:"Analyst"},
    { ename:"maan",job:"MaNAger"},
    { ename:"vihan",job:"TeSter"},  
    { ename:"akshay",job:"dEveloper"}, 
    { ename:"aniket",job:"DeveloPer"},     
    { ename:"rihaan",job:"Analyst"},
    { ename:"piya",job:"MaNAger"},
    { ename:"akshara",job:"TeSter"},  
    { ename:"prasad",job:"dEveloper"}, 
    { ename:"naresh",job:"DeveloPer"},     
    { ename:"lakhan",job:"Analyst"},
    { ename:"prakash",job:"MaNAger"},
    { ename:"ajay",job:"TeSter"},  
    { ename:"vikas",job:"dEveloper"},  
  ]

  loadmore_click()
  {      
      this.end =  this.end + 4;

      if(this.end >= this.userArray.length)
      {
        this.start = 0;
        this.end = 4;
      }
  }

}
