import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  right:string = "";
  left:string = "";
  up:string = "";
  down:string = "";

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.right = this.activatedRoute.snapshot.data['right'];
    this.left = this.activatedRoute.snapshot.data['left'];
    this.up = this.activatedRoute.snapshot.data['up'];
    this.down = this.activatedRoute.snapshot.data['down'];
  }

  write(){
    this.router.navigate(['blog/write']);
  }

  read(){
    this.router.navigate(['blog/list']);
  }

}
