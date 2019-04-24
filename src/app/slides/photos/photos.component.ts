import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  right:string = "";
  left:string = "";
  up:string = "";
  down:string = "";

  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    
   }

  ngOnInit() {
    this.right = this.activatedRoute.snapshot.data['right'];
    this.left = this.activatedRoute.snapshot.data['left'];
    this.up = this.activatedRoute.snapshot.data['up'];
    this.down = this.activatedRoute.snapshot.data['down'];
  }

  showPhotos(){
    this.router.navigate(['photos/pics']);
  }

  showVideos(){
    this.router.navigate(['photos/vids']);
  }

}
