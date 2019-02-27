import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PathService } from './path.service';

interface lastSlide{
  qleft:string;
  qright:string;
  qup:string;
  qdown:string;
}

@Injectable()
export class PathResolverService implements Resolve<lastSlide>{

  constructor(private pathService:PathService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): lastSlide {
    return this.pathService.getLastSlide();
  }
}
