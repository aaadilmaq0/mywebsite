import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Blog } from "../blog.model";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { Router, ActivatedRoute } from "@angular/router";
import { BlogServiceService } from "../blog-service.service";
@Component({
  selector: "app-blog-write",
  templateUrl: "./blog-write.component.html",
  styleUrls: ["./blog-write.component.css"]
})
export class BlogWriteComponent implements OnInit {

  @ViewChild("slideLabel") slideLabel: ElementRef;

  right:string = "home";
  left:string ="";
  up:string ="";
  down:string = "blog"

  blog: Blog = {
    name: "",
    title: "",
    email: "",
    content: "",
    dpPath: "../../../../assets/images/noprofilepicture.png",
    dateTime: new Date()
  };
  blogForm: FormGroup;

  slideDisable: boolean = false;
  slideChecked: boolean = false;
  matSlideToggleChange: MatSlideToggleChange;

  formUserName: string = "Hey there!"

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogServiceService
  ) {}

  ngOnInit() {
    this.blogForm = this.formBuilder.group({
      name: [this.blog.name, [Validators.required]],
      email: [this.blog.email, [Validators.email]],
      title: [this.blog.title, [Validators.required]],
      content: [this.blog.content, [Validators.required]]
    });
  }

  onSlideToggled(matSlideToggleChange: MatSlideToggleChange) {
    
    this.slideChecked = !this.slideChecked;
    if (this.slideChecked) {
      this.blogForm.get("name").setValue("Anonymous");
      this.blogForm.get("name").disable();
      this.blogForm.get("email").setValue("Anonymous");
      this.blogForm.get("email").disable();
      this.formUserName = "Hey there, Anonymous!"
      this.slideLabel.nativeElement.classList.add('makeItalic');
    } else {
      this.blogForm.get("name").setValue("");
      this.blogForm.get("email").setValue("");
      this.blogForm.get("name").enable();
      this.blogForm.get("email").enable();
      this.formUserName = "Hey there!";
      this.slideLabel.nativeElement.classList.remove('makeItalic');
    }
  }

  onBlogSubmit() {
    this.blog.name = this.blogForm.get("name").value;
    if (this.blogForm.get("email").value)
      this.blog.email = this.blogForm.get("email").value;
    this.blog.title = this.blogForm.get("title").value;
    this.blog.content = this.blogForm.get("content").value;
    this.blogService.pushBlog(this.blog);
    this.onFormReset();
    confirm("Blog posted! View Blog page?") ? window.location.href = '/blog/list' : {};
  }

  formUserNameChange(event:Event){
    if(!event.target['value'])
      this.setFormUserName("Hey there!");
    else
      this.setFormUserName(`Hey there, ${event.target['value'].split(' ')[0]} !`);
  }

  setFormUserName(name:string){
    this.formUserName = name;
  }

  onFormReset(){
    this.slideChecked = true;
    this.onSlideToggled(this.matSlideToggleChange);
    this.blogForm.reset();
  }
}
