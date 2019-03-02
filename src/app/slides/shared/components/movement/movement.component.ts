import { Component, OnInit, Input, AfterViewChecked, } from '@angular/core';
import { Router, NavigationEnd, RoutesRecognized, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PathService } from '../../services/path.service';


@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit, AfterViewChecked{
  
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
  private routerData;
  
  constructor(private router: Router, private pathService:PathService) { }
  
  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routerData = data;
        this.right = this.routerData.state.root.firstChild.data['right'];
        this.left = this.routerData.state.root.firstChild.data['left'];
        this.up = this.routerData.state.root.firstChild.data['up'];
        this.down = this.routerData.state.root.firstChild.data['down'];
        }
      });
    }
    
    ngAfterViewChecked(){
      try{
        this.qright = this.routerData.state.root.firstChild.data['lastSlide']['qright'];
        this.qleft = this.routerData.state.root.firstChild.data['lastSlide']['qleft'];
        this.qup = this.routerData.state.root.firstChild.data['lastSlide']['qup'];
        this.qdown = this.routerData.state.root.firstChild.data['lastSlide']['qdown'];
      }catch(e){

      }
    }

    onNavigate(direction: string) {
    this.currentPath = this.router.url.toString().split(';')[0];
    if (direction === this.right) {
      this.movetoRight();
    }
    else if (direction === this.left) {
      this.moveToLeft();
    }
    else if (direction === this.up) {
      this.moveToUp();
    }
    else if (direction === this.down) {
      this.moveToDown();
    }
    else if (direction == this.home) {
      this.router.navigate([`${this.home}`]);
    }
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

  moveToHome(){
    this.pathService.setLastSlide(undefined, undefined, this.currentPath, undefined);
    this.router.navigate([`${this.home}`]);
  }
}
