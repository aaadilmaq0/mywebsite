import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  right:string = "blog/happy";
  left:string = "blog/sad";
  up:string = "blog/normal";
  down:string = "professional";
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
