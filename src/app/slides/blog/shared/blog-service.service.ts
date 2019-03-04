import { Injectable } from '@angular/core';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  blogs:Blog[] = [
    {
      _id: "1",
      name: "Adil",
      title: "First Blog",
      about: "This is about my first blog",
      content: "Hey aljdsflajsdakdsasdadssadas dasd",
      dpPath: "../../../../../assets/images/noprofilepicture.png"
    },
    {
      _id: "1",
      name: "Adil",
      title: "First Blog",
      about: "This is about my first blog",
      content: "Hey aljdsflajsdakdsasdadssadas dasd",
      dpPath: "../../../../../assets/images/noprofilepicture.png"
    },
    {
      _id: "1",
      name: "Adil",
      title: "First Blog",
      about: "This is about my first blog",
      content: "Hey aljdsflajsdakdsasdadssadas dasd",
      dpPath: "../../../../../assets/images/noprofilepicture.png"
    },
    {
      _id: "1",
      name: "Adil",
      title: "First Blog",
      about: "This is about my first blog",
      content: "Hey aljdsflajsdakdsasdadssadas dasd",
      dpPath: "../../../../../assets/images/noprofilepicture.png"
    },
    {
      _id: "1",
      name: "Adil",
      title: "First Blog",
      about: "This is about my first blog",
      content: "Hey aljdsflajsdakdsasdadssadas dasd",
      dpPath: "../../../../../assets/images/noprofilepicture.png"
    },
    {
      _id: "1",
      name: "Adil",
      title: "First Blog",
      about: "This is about my first blog",
      content: "Hey aljdsflajsdakdsasdadssadas dasd",
      dpPath: "../../../../../assets/images/noprofilepicture.png"
    },
  ];
  constructor() { }

  getBlogs(mood:string){
    return this.blogs;
  }
}
