import { Component, OnInit, Input } from "@angular/core";
import { Blog } from "../blog.model";
@Component({
  selector: "app-blog-template",
  templateUrl: "./blog-template.component.html",
  styleUrls: ["./blog-template.component.css"]
})
export class BlogTemplateComponent implements OnInit {
  @Input() blog: Blog;
  
  constructor() {}
  ngOnInit() {}
}
