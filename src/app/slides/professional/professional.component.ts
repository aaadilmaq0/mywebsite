import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  right: string = "";
  left: string = "";
  up: string = "";
  down: string = "";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.right = this.activatedRoute.snapshot.data['right'];
    this.left = this.activatedRoute.snapshot.data['left'];
    this.up = this.activatedRoute.snapshot.data['up'];
    this.down = this.activatedRoute.snapshot.data['down'];
  }

}
