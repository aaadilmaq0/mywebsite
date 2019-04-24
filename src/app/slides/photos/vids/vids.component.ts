import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-vids',
  templateUrl: './vids.component.html',
  styleUrls: ['./vids.component.css']
})
export class VidsComponent implements OnInit {

  selected = -1;

  private vids:any [] = [
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

  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.selected = 0;
  }

}
