import { Component, OnInit } from '@angular/core';
import { Language } from '../products/language';

@Component({
  selector: 'app-demopage',
  templateUrl: './demopage.component.html',
  styleUrls: ['./demopage.component.css']
})
export class DemopageComponent  {

    public langArray:Language[] = [
      {name:"Angular",img:"../assets/pic.png",desc:"Angular"},
      {name:"Chrome",img:"../../assets/chrome.jfif",desc:"Chrome"},
      {name:"Firefox",img:"../../assets/firefox.jpg",desc:"FireFox"},
      {name:"HTML5",img:"../assets/html5.jfif",desc:"HTML5"},
      {name:"CSS3",img:"../../assets/css3.jfif",desc:"CSS3"},
      {name:"Android",img:"../../assets/android.jpg",desc:"Android"},
    ]

}
