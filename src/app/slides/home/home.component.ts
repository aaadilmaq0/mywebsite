import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  right:string = "";
  left:string = "";
  up:string = "";
  down:string = "";
  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.right = this.activatedRoute.snapshot.data['right'];
    this.left = this.activatedRoute.snapshot.data['left'];
    this.up = this.activatedRoute.snapshot.data['up'];
    this.down = this.activatedRoute.snapshot.data['down'];
  }

}
