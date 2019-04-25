import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vids',
  templateUrl: './vids.component.html',
  styleUrls: ['./vids.component.css']
})
export class VidsComponent implements OnInit {

  selected = -1;

  right:string = "";
  left:string = "";
  up:string = "";
  down:string = "";

  public vids:any [] = [
    {
      url : "https://www.youtube.com/embed/JSlzW2oZcpU",
      title : "Game of Thrones Theme(Simple)",
      thumbnail : "../../../../assets/images/gotthemesimple.png"
    },
    {
      url : "https://www.youtube.com/embed/4Ygb_L5xHRQ",
      title : "Game of Thrones Full Theme(Piano)",
      thumbnail : "../../../../assets/images/gotfulltheme.png"
    },
    {
      url : "https://www.youtube.com/embed/GFi5ZCo4MPI",
      title : "Lights of the Seven Piano",
      thumbnail : "../../../../assets/images/lots.png"
    },
  ];

  constructor(public sanitizer:DomSanitizer, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.selected = 0;
    this.right = this.activatedRoute.snapshot.data['right'];
    this.left = this.activatedRoute.snapshot.data['left'];
    this.up = this.activatedRoute.snapshot.data['up'];
    this.down = this.activatedRoute.snapshot.data['down'];
  }

}
