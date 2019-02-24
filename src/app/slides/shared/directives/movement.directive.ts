import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMovement]'
})
export class MovementDirective {

  @Input() right: string = '';
  @Input() left: string = '';
  @Input() up: string = '';
  @Input() down: string = '';

  constructor(private router: Router, private elementRef: ElementRef) { }

  @HostListener('window:keyup', ['$event']) onKeyPress(event: Event) {
    console.log(event);
    if ((event['keyCode'] == 39) && (this.right != '')) {
      this.router.navigate([`${this.right}`]);
    } //rightarrow
    else if ((event['keyCode'] == 38) && (this.up != '')) {
      this.router.navigate([`${this.up}`])
    }//uparrow
    else if ((event['keyCode'] == 37) && (this.left != '')) {
      this.router.navigate([`${this.left}`])
    }//leftarrow
    else if ((event['keyCode'] == 40) && (this.down != '')) {
      this.router.navigate([`${this.down}`])
    }//downarrow
  }

  @HostListener('swipe', ['$event']) onSwipe(event: Event) {
    console.log(event['direction']);
    if ((event['direction'] == 2) && (this.right != '')) {
      this.router.navigate([`${this.right}`]);
    } //swilpeleft
    else if ((event['direction'] == 16) && (this.up != '')) {
      this.router.navigate([`${this.up}`])
    }//swipedown
    else if ((event['direction'] == 4) && (this.left != '')) {
      this.router.navigate([`${this.left}`])
    }//swiperight
    else if ((event['direction'] == 8) && (this.down != '')) {
      this.router.navigate([`${this.down}`])
    }//swipeup
}
}
