import { Injectable } from "@angular/core";
import { Blog } from "./blog.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BlogServiceService {
  private blogsUpdated = new Subject<Blog[]>();
  private myBlogs: Blog[] = [];

  private blogs: Blog[] = [];
  articles = [];

  constructor(private http: HttpClient) {}

  pushBlog(blog: Blog) {
    this.http
      .post("http://localhost:3000/pushBlog", {
        blog: blog
      })
      .subscribe(response => {
        console.log(response);
      });
  }

  getBlogs(): Blog[] {
    this.blogs = [];
    this.http.get("http://localhost:3000/getBlogs").subscribe(response => {
      for (var i = response["length"] - 1; i >= 0; i--) {
        this.blogs.push({
          _id: response[i]["_id"],
          about: response[i]["blog"]["about"],
          content: response[i]["blog"]["content"],
          dpPath: response[i]["blog"]["dpPath"],
          email: response[i]["blog"]["email"],
          name: response[i]["blog"]["name"],
          title: response[i]["blog"]["title"],
          dateTime: response[i]["blog"]["dateTime"]
        });
        this.blogsUpdated.next([...this.blogs]);
      }
    });
    return this.blogs;
  }

  getBlogsUpdatedListener() {
    return this.blogsUpdated.asObservable();
  }
}

// <input [ngModel]="startDate | date:'yyyy-MM-dd'" (ngModelChange)="startDate = $event" type="date" name="startDate"/>
