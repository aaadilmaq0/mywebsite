import { Component, OnInit, Input, } from '@angular/core';
import { Router, NavigationEnd, RoutesRecognized, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  right: string = '';
  left: string = '';
  up: string = '';
  down: string = '';
  home: string = 'home';
  qright: string = '';
  qleft: string = '';
  qup: string = '';
  qdown: string = '';
  currentPath: string = '';
  activatedRouteSnapshot: ActivatedRouteSnapshot;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.activatedRouteSnapshot = data.state.root.firstChild;

        this.right = data.state.root.firstChild.data['right'];
        this.left = data.state.root.firstChild.data['left'];
        this.up = data.state.root.firstChild.data['up'];
        this.down = data.state.root.firstChild.data['down'];

        this.qright = this.activatedRouteSnapshot.params['qright'];
        this.qdown = this.activatedRouteSnapshot.params['qdown'];
        this.qup = this.activatedRouteSnapshot.params['qup'];
        this.qleft = this.activatedRouteSnapshot.params['qleft'];

      }
    });
  }

  onNavigate(direction: string) {
    this.currentPath = this.router.url.toString().split(';')[0];
    if (direction === this.right){
      if (!this.qright)
        this.router.navigate([`${this.right}`, { qleft: this.currentPath }]);
      else
        this.router.navigate([`${this.qright}`, { qleft: this.currentPath }]);
    }
    else if (direction === this.left){
      if (!this.qleft)
        this.router.navigate([`${this.left}`, { qright: this.currentPath }]);
      else
        this.router.navigate([`${this.qleft}`, { qright: this.currentPath }]);
    }
    else if (direction === this.up){
      if(!this.qup)
        this.router.navigate([`${this.up}`, { qdown: this.currentPath }]);
      else
        this.router.navigate([`${this.qup}`, { qdown: this.currentPath }]);
    }
    else if (direction === this.down){
      if (!this.qdown)
        this.router.navigate([`${this.down}`, { qup: this.currentPath }]);
      else
        this.router.navigate([`${this.qdown}`, { qup: this.currentPath }]);
    }
    else if (direction == this.home){
      this.router.navigate([`${this.home}`]);
    }
  }œ
}
