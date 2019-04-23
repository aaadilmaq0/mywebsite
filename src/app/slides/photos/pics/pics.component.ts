import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../photos.model';
import { MediaService } from '../services/media.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit, OnDestroy {

  right:string = "";
  left:string = "";
  up:string = "";
  down:string = "";

  images: Image[] = [];
  imagesSubscription:Subscription;

  selectedImageIndex=-1;
  bg:string;
  bgPB:string = 'url("https://cdn.push-entertainment.com/HD/Video-Wallpaper-Aurora-Shine.jpg")';
  constructor(private activatedRoute:ActivatedRoute,private router:Router, private mediaService:MediaService) {
    
   }

  ngOnInit() {
    this.right = this.activatedRoute.snapshot.data['right'];
    this.left = this.activatedRoute.snapshot.data['left'];
    this.up = this.activatedRoute.snapshot.data['up'];
    this.down = this.activatedRoute.snapshot.data['down'];

    this.images = this.mediaService.getPhotos();
    this.imagesSubscription = this.mediaService.getImagesSubscription().subscribe(
      (images:Image[])=>{
        this.images = images;
      }
    );
  }

  selectIndex(i:number){
    this.selectedImageIndex = i;
    this.bg = `url("${this.images[i].path}")`;
  }

  ngOnDestroy(){
    this.imagesSubscription.unsubscribe();
  }
}
