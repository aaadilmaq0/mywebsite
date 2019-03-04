import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog.model'
@Component({
  selector: 'app-blog-template',
  templateUrl: './blog-template.component.html',
  styleUrls: ['./blog-template.component.css']
})
export class BlogTemplateComponent implements OnInit {

  blog:Blog;

  constructor() { }

  ngOnInit() {
    this.blog._id = '1';
    this.blog.name = 'Adil Maqusood';
    this.blog.title = 'My first blog';
    this.blog.content = ' Hey everyone ! This is my first blog'; 
  }

}
