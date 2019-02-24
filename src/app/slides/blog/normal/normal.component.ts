import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NormalComponent implements OnInit {

  right:string = "blog/happy";
  left:string = "blog/sad";
  up:string = "";
  down:string = "home";

  constructor() { }

  ngOnInit() {
  }

}
