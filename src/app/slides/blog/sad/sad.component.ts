import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.right = this.activatedRoute.snapshot.data['right'];
    this.left = this.activatedRoute.snapshot.data['left'];
    this.up = this.activatedRoute.snapshot.data['up'];
    this.down = this.activatedRoute.snapshot.data['down'];
  }

}
