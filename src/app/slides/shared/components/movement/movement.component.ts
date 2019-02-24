import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  @Input() right: string = '';
  @Input() left: string = '';
  @Input() up: string = '';
  @Input() down: string = '';
  @Input() home:string = 'home';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate(direction: string) {
    if (direction === this.right)
      this.router.navigate([`${this.right}`]);
    else if (direction === this.left)
      this.router.navigate([`${this.left}`]);
    else if (direction === this.up)
      this.router.navigate([`${this.up}`]);
    else if (direction === this.down)
      this.router.navigate([`${this.down}`]);
    else if(direction == this.home)
      this.router.navigate([`${this.home}`]);
  }
}
