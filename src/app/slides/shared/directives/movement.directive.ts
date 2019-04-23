import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PathService } from '../services/path.service';

@Directive({
  selector: '[appMovement]'
})
export class MovementDirective implements OnInit {

  @Input() right: string = '';
  @Input() left: string = '';
  @Input() up: string = '';
  @Input() down: string = '';

  qright: string = '';
  qleft: string = '';
  qup: string = '';
  qdown: string = '';
  currentPath: string = '';

  constructor(private router: Router, private elementRef: ElementRef, private activatedRoute: ActivatedRoute, private pathService: PathService) {

  }

  ngOnInit() {
    // this.qright = this.activatedRoute.snapshot.data['lastSlide']['qright'];
    // this.qdown = this.activatedRoute.snapshot.data['lastSlide']['qdown'];
    // this.qup = this.activatedRoute.snapshot.data['lastSlide']['qup'];
    // this.qleft = this.activatedRoute.snapshot.data['lastSlide']['qleft'];
  }

  @HostListener('window:keyup', ['$event']) onKeyPress(event: Event) {
    this.currentPath = this.router.url.toString().split(';')[0];
    if ((event['keyCode'] == 39) && (this.right != '')) {
      this.movetoRight();
    } //rightarrow
    else if ((event['keyCode'] == 38) && (this.up != '')) {
      this.moveToUp();
    }//uparrow
    else if ((event['keyCode'] == 37) && (this.left != '')) {
      this.moveToLeft();
    }//leftarrow
    else if ((event['keyCode'] == 40) && (this.down != '')) {
      this.moveToDown();
    }//downarrow
  }

  @HostListener('swipe', ['$event']) onSwipe(event: Event) {
    this.currentPath = this.router.url.toString().split(';')[0];
    if ((event['direction'] == 2) && (this.right != '')) {
      this.movetoRight();
    } //swilpeleft
    else if ((event['direction'] == 16) && (this.up != '')) {
      this.moveToUp();
    }//swipedown
    else if ((event['direction'] == 4) && (this.left != '')) {
      this.moveToLeft();
    }//swiperight
    else if ((event['direction'] == 8) && (this.down != '')) {
      this.moveToDown();
    }//swipeup
  }

  moveToLeft() {
    this.pathService.setLastSlide(undefined, this.currentPath, undefined, undefined);
    (this.qleft) ? this.router.navigate([`${this.qleft}`]) : this.router.navigate([`${this.left}`]);
  }

  movetoRight() {
    this.pathService.setLastSlide(this.currentPath, undefined, undefined, undefined);
    (this.qright) ? this.router.navigate([`${this.qright}`]) : this.router.navigate([`${this.right}`]);
  }

  moveToUp() {
    this.pathService.setLastSlide(undefined, undefined, undefined, this.currentPath);
    (this.qup) ? this.router.navigate([`${this.qup}`]) : this.router.navigate([`${this.up}`]);
  }

  moveToDown() {
    this.pathService.setLastSlide(undefined, undefined, this.currentPath, undefined);
    (this.qdown) ? this.router.navigate([`${this.qdown}`]) : this.router.navigate([`${this.down}`]);
  }
}
