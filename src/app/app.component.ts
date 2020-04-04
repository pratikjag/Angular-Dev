import { Component } from '@angular/core';
import {Hero} from './Hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnularIoEx1';
  heros = ['Rahul','Santosh','Dada','Daya'];
  NeHeros=[
    new Hero(1,'Sagar'),
    new Hero(2,'samer')

  ];
}
