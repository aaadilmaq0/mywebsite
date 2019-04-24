import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog.model';
import { BlogServiceService } from '../blog-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit, OnDestroy {

  right:string = "";
  left:string = "";
  up:string = "";
  down:string = "";

  blogs:Blog[] = [];
  subscription:Subscription;
  mood: string;
  selectedBlog:Blog;
  selectedBlogIndex = -1;
  constructor(private activatedRoute: ActivatedRoute, private blogService:BlogServiceService) {
    
  }

  ngOnInit() {
    this.right = this.activatedRoute.snapshot.data['right'];
    this.left = this.activatedRoute.snapshot.data['left'];
    this.up = this.activatedRoute.snapshot.data['up'];
    this.down = this.activatedRoute.snapshot.data['down'];

    this.blogs =this.blogService.getBlogs();
    this.subscription = this.blogService.getBlogsUpdatedListener().subscribe(
      (blogs:Blog[]) => {
        this.blogs = blogs;
      }
    );
    var check = setInterval(()=>{
      if(this.blogs[0]){
        this.loadSelectedBlog(0);
        clearInterval(check);
      }
    },100);
  }

  loadSelectedBlog(i:number){
    this.selectedBlogIndex = i;
    this.selectedBlog = this.blogs[i];
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
