import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-happy',
  templateUrl: './happy.component.html',
  styleUrls: ['./happy.component.css']
})
export class HappyComponent implements OnInit {

  right:string = "";
  left:string = "home";
  up:string = "";
  down:string = "";

  constructor() { }

  ngOnInit() {
  }

}
