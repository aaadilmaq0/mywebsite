import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router: Router, private elementRef: ElementRef, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.qright = this.activatedRoute.snapshot.params['qright'];
    this.qdown = this.activatedRoute.snapshot.params['qdown'];
    this.qup = this.activatedRoute.snapshot.params['qup'];
    this.qleft = this.activatedRoute.snapshot.params['qleft'];
  }

  @HostListener('window:keyup', ['$event']) onKeyPress(event: Event) {
    this.currentPath = this.router.url.toString().split(';')[0];
    if ((event['keyCode'] == 39) && (this.right != '')) {
      if (!this.qright)
        this.router.navigate([`${this.right}`, { qleft: this.currentPath }]);
      else
        this.router.navigate([`${this.qright}`, { qleft: this.currentPath }]);
    } //rightarrow
    else if ((event['keyCode'] == 38) && (this.up != '')) {
      if(!this.qup)
        this.router.navigate([`${this.up}`, { qdown: this.currentPath }]);
      else
        this.router.navigate([`${this.qup}`, { qdown: this.currentPath }]);
    }//uparrow
    else if ((event['keyCode'] == 37) && (this.left != '')) {
      if (!this.qleft)
        this.router.navigate([`${this.left}`, { qright: this.currentPath }]);
      else
        this.router.navigate([`${this.qleft}`, { qright: this.currentPath }]);
    }//leftarrow
    else if ((event['keyCode'] == 40) && (this.down != '')) {
      if (!this.qdown)
        this.router.navigate([`${this.down}`, { qup: this.currentPath }]);
      else
        this.router.navigate([`${this.qdown}`, { qup: this.currentPath }]);
    }//downarrow
  }

  @HostListener('swipe', ['$event']) onSwipe(event: Event) {
    if ((event['direction'] == 2) && (this.right != '')) {
      if (!this.qright)
        this.router.navigate([`${this.right}`, { qleft: this.currentPath }]);
      else
        this.router.navigate([`${this.qright}`, { qleft: this.currentPath }]);
    } //swilpeleft
    else if ((event['direction'] == 16) && (this.up != '')) {
      if(!this.qup)
        this.router.navigate([`${this.up}`, { qdown: this.currentPath }]);
      else
        this.router.navigate([`${this.qup}`, { qdown: this.currentPath }]);
    }//swipedown
    else if ((event['direction'] == 4) && (this.left != '')) {
      if (!this.qleft)
        this.router.navigate([`${this.left}`, { qright: this.currentPath }]);
      else
        this.router.navigate([`${this.qleft}`, { qright: this.currentPath }]);
    }//swiperight
    else if ((event['direction'] == 8) && (this.down != '')) {
      if (!this.qdown)
        this.router.navigate([`${this.down}`, { qup: this.currentPath }]);
      else
        this.router.navigate([`${this.qdown}`, { qup: this.currentPath }]);
    }//swipeup
  }
}
