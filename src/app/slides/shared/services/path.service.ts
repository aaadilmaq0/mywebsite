import { Router } from '@angular/router';

export class PathService {
  lastSlide = {
    qleft: '',
    qright: '',
    qup: '',
    qdown: ''
  };

  constructor() { }

  setLastSlide(qleft?: string, qright?: string, qup?: string, qdown?: string) {
      this.lastSlide.qleft = (qleft) ? qleft : '';
      this.lastSlide.qright = (qright) ? qright : '';
      this.lastSlide.qup = (qup) ? qup : '';
      this.lastSlide.qdown = (qdown) ? qdown : '';
  }

  getLastSlide() {
    return this.lastSlide;
  }

}
