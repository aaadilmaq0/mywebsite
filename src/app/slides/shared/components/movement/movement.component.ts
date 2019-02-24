import { Component, OnInit, Input,  } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Data, RoutesRecognized } from '@angular/router';
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
  data:Data;

  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
  
  ngOnInit() {
    // this.router.events.pipe(
    //     filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //     this.data = JSON.parse(JSON.stringify(''+this.activatedRoute['children'][0]['data']['_value']));
    //     console.log(this.data);
    //     console.log(this.data.animation);    
    // });
    // this.activatedRoute.data.subscribe(
    //   (data:Data) => {
    //     console.log(data);
    //   }
    // )
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
       this.data = data.state.root.firstChild.data;
       this.right = data.state.root.firstChild.data['right'];
       this.left = data.state.root.firstChild.data['left'];
       this.up = data.state.root.firstChild.data['up'];
       this.down = data.state.root.firstChild.data['down'];
      }
    });
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
    else if (direction == this.home)
      this.router.navigate([`${this.home}`]);
  }
}
