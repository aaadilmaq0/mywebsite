import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './slides/home/home.component';
import { ProfessionalComponent } from './slides/professional/professional.component';
import { SadComponent } from './slides/blog/sad/sad.component';
import { NormalComponent } from './slides/blog/normal/normal.component';
import { HappyComponent } from './slides/blog/happy/happy.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { MovementDirective } from './slides/shared/directives/movement.directive';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MovementComponent } from './slides/shared/components/movement/movement.component';
import { PathResolverService } from './slides/shared/services/path-resolver.service';
import { PathService } from './slides/shared/services/path.service';
import { ParticlesComponent } from './particles/particles.component';
export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfessionalComponent,
    SadComponent,
    HappyComponent,
    NormalComponent,
    PathNotFoundComponent,
    MovementDirective,
    MovementComponent,
    ParticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    },
    PathService,
    PathResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
