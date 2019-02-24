import { Component, OnInit } from '@angular/core';
import { ActivationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-happy',
  templateUrl: './happy.component.html',
  styleUrls: ['./happy.component.css']
})
export class HappyComponent implements OnInit {

  right:string = "";
  left:string = "";
  up:string = "";
  down:string = "";

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.right = this.activatedRoute.snapshot.data['right'];
    this.left = this.activatedRoute.snapshot.data['left'];
    this.up = this.activatedRoute.snapshot.data['up'];
    this.down = this.activatedRoute.snapshot.data['down'];
  }

}
