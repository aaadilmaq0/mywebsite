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
    this.color = `rgb(${Math.random()*255 | 0},${Math.random()*255 | 0},${Math.random()*255 | 0})`;
    console.log(this.color);
    
  }
  ngOnInit() {
    let rgb:string[] = this.color.substring(4).split(')')[0].split(',');
    this.colorContrast = `rgb(${255-parseFloat(rgb[0])},${255-parseFloat(rgb[1])},${255-parseFloat(rgb[2])})`;
    console.log(this.colorContrast);
  }
}
