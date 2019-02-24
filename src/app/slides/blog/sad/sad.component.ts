import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sad',
  templateUrl: './sad.component.html',
  styleUrls: ['./sad.component.css']
})
export class SadComponent implements OnInit {

  right:string = "home";
  left:string = "";
  up:string = "";
  down:string = "";

  constructor() { }

  ngOnInit() {
  }

}
