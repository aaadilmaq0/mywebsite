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
      thumbnail : "https://i9.ytimg.com/vi/JSlzW2oZcpU/mq2.jpg?sqp=CPDv-uUF&rs=AOn4CLAjRw2HO4LQG5BReO-7od94ltd_pw"
    },
    {
      url : "https://www.youtube.com/embed/4Ygb_L5xHRQ",
      title : "Game of Thrones Full Theme(Piano)",
      thumbnail : "https://i9.ytimg.com/vi/4Ygb_L5xHRQ/mq1.jpg?sqp=CPDv-uUF&rs=AOn4CLBDjRdr_XEGMrRqx05VeT31xSMJqQ"
    },
    {
      url : "https://www.youtube.com/embed/GFi5ZCo4MPI",
      title : "Lights of the Seven Piano",
      thumbnail : "https://i9.ytimg.com/vi/GFi5ZCo4MPI/mq2.jpg?sqp=CMTt-uUF&rs=AOn4CLDUWj_qdZnm7m6BDDlXbop2IhVIGQ"
    },
  ];

  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.selected = 0;
  }

}
