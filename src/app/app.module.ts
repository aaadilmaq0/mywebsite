import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./slides/home/home.component";
import { ProfessionalComponent } from "./slides/professional/professional.component";
import { BlogsComponent } from "./slides/blog/blogs/blogs.component";
import { PathNotFoundComponent } from "./path-not-found/path-not-found.component";
import { MovementDirective } from "./slides/shared/directives/movement.directive";

import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {MatRippleModule} from '@angular/material/core';


import * as Hammer from "hammerjs";
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { MovementComponent } from "./slides/shared/components/movement/movement.component";
import { PathResolverService } from "./slides/shared/services/path-resolver.service";
import { PathService } from "./slides/shared/services/path.service";
import { ParticlesComponent } from "./particles/particles.component";
import { SocialComponent } from "./slides/shared/components/social/social.component";
import { BlogTemplateComponent } from "./slides/blog/shared/blog-template/blog-template.component";
import { BlogListComponent } from "./slides/blog/shared/blog-list/blog-list.component";
import { BlogServiceService } from "./slides/blog/shared/blog-service.service";
import { BlogWriteComponent } from "./slides/blog/shared/blog-write/blog-write.component";
import { PhotosComponent } from './slides/photos/photos.component';

import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import MultiLevelPie from 'fusioncharts/viz/multilevelpie'

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { ChartComponent } from './slides/professional/chart/chart.component';
import { PicsComponent } from './slides/photos/pics/pics.component';
import { VidsComponent } from './slides/photos/vids/vids.component';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, MultiLevelPie);

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfessionalComponent,
    BlogsComponent,
    PathNotFoundComponent,
    MovementDirective,
    MovementComponent,
    ParticlesComponent,
    SocialComponent,
    BlogTemplateComponent,
    BlogListComponent,
    BlogWriteComponent,
    PhotosComponent,
    ChartComponent,
    PicsComponent,
    VidsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    FusionChartsModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    },
    PathService,
    PathResolverService,
    BlogServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
