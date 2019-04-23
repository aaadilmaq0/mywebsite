import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./slides/home/home.component";
import { ProfessionalComponent } from "./slides/professional/professional.component";
import { BlogsComponent } from "./slides/blog/blogs/blogs.component";
import { PathNotFoundComponent } from "./path-not-found/path-not-found.component";
import { PathResolverService } from "./slides/shared/services/path-resolver.service";
import { BlogTemplateComponent } from "./slides/blog/shared/blog-template/blog-template.component";
import { BlogListComponent } from "./slides/blog/shared/blog-list/blog-list.component";
import { BlogWriteComponent } from "./slides/blog/shared/blog-write/blog-write.component";
import { PhotosComponent } from "./slides/photos/photos.component";
import { PicsComponent } from './slides/photos/pics/pics.component';
import { VidsComponent } from './slides/photos/vids/vids.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full",
    data: {
      animation: "Home",
      up: "",
      right: "photos",
      left: "blog",
      down: "professional"
    },
    resolve: { lastSlide: PathResolverService }
  },
  {
    path: "professional",
    component: ProfessionalComponent,
    data: {
      animation: "professional",
      right: "",
      left: "",
      up: "home",
      down: ""
    },
    resolve: { lastSlide: PathResolverService }
  },
  {
    path: "photos",
    component: PhotosComponent,
    pathMatch: "full",
    data: {
      animation: "photos",
      right: "",
      left: "home",
      up: "photos/vids",
      down: "photos/pics"
    },
    resolve: { lastSlide: PathResolverService }
  },
  {
    path: "photos/pics",
    component: PicsComponent,
    pathMatch: "full",
    data:{
      animation: "pics",
      right:"",
      left: "",
      up: "photos",
      down: ""
    }
  },
  {
    path: "photos/vids",
    component: VidsComponent,
    pathMatch: "full",
    data:{
      animation: "vids",
      right:"",
      left: "",
      up: "",
      down: "photos"
    }
  },
  {
    path: "blog",
    component: BlogsComponent,
    pathMatch: "full",
    data: {
      animation: "blog",
      right: "home",
      left: "",
      up: "blog/write",
      down: "blog/list"
    },
    resolve: { lastSlide: PathResolverService }
  },
  {
    path: "blog/list",
    component: BlogListComponent,
    pathMatch: "full",
    data: {
      animation: "bloglist",
      right: "",
      left: "",
      up: "blog",
      down: ""
    },
    resolve: { lastSlide: PathResolverService }
  },
  {
    path: "blog/write",
    component: BlogWriteComponent,
    pathMatch: "full",
    data: {
      animation: "blogwrite",
      right: "",
      left: "",
      up: "",
      down: "blog"
    },
    resolve: { lastSlide: PathResolverService }
  },
  {
    path: "**",
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
``;
