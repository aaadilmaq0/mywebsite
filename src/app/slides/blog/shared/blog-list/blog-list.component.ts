import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog.model';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  right:string = "";
  left:string = "";
  up:string = "";
  down:string = "";

  blogs:Blog[] = [];
  
  constructor( private activatedRoute: ActivatedRoute, private blogService:BlogServiceService) { }

  ngOnInit() {
    this.right = this.activatedRoute.snapshot.data['right'];
    this.left = this.activatedRoute.snapshot.data['left'];
    this.up = this.activatedRoute.snapshot.data['up'];
    this.down = this.activatedRoute.snapshot.data['down'];

    this.blogs = this.blogService.getBlogs('sad');
  }

}
