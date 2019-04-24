import { Component, OnInit, Input } from "@angular/core";
import { Blog } from "../blog.model";
@Component({
  selector: "app-blog-template",
  templateUrl: "./blog-template.component.html",
  styleUrls: ["./blog-template.component.css"]
})
export class BlogTemplateComponent implements OnInit {
  @Input() blog: Blog;
  color: string= "";
  colorContrast: string = "";
  constructor() {
    this.color = 'rgb(42,21,140)';
  }
  ngOnInit() {
    this.colorContrast = `rgb(213, 234, 115)`;
  }
}
