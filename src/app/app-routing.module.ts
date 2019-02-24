import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './slides/home/home.component';
import { ProfessionalComponent } from './slides/professional/professional.component';
import { HappyComponent } from './slides/blog/happy/happy.component';
import { SadComponent } from './slides/blog/sad/sad.component';
import { NormalComponent } from './slides/blog/normal/normal.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      animation: 'Home',
      right: "blog/happy",
      left: "blog/sad",
      up: "blog/normal",
      down: "professional",
    }
  },
  {
    path: 'professional',
    component: ProfessionalComponent,
    pathMatch: 'full',
    data :{
      animation : 'Down',
      right: "blog/happy",
      left: "blog/sad",
      up: "home",
      down: "",
    }
  },
  {
    path: 'blog/happy',
    component: HappyComponent,
    pathMatch: 'full',
    data: {
      animation: 'Right',
      right: "",
      left: "home",
      up: "",
      down: "",
    }
  },
  {
    path: 'blog/sad',
    component: SadComponent,
    pathMatch: 'full',
    data: {
      animation: 'Left',
      right: "home",
      left: "",
      up: "",
      down: "",
    }
  },
  {
    path: 'blog/normal',
    component: NormalComponent,
    pathMatch: 'full',
    data:{
      animation : 'Up',
      right: "blog/happy",
      left: "blog/sad",
      up: "",
      down: "home",
    }
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
