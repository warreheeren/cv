
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './about-me/about-me.component';
import { InterestsComponent } from './interests/interests.component';
import { JobExperienceComponent } from './job-experience/job-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialComponent } from './social/social.component';
import { CardComponent } from './job-experience/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    InterestsComponent,
    JobExperienceComponent,
    SkillsComponent,
    NavbarComponent,
    SocialComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
