import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  right:string = "blog/happy";
  left:string = "blog/sad";
  up:string = "home";
  down:string = "";

  constructor() { }

  ngOnInit() {
  }

}
