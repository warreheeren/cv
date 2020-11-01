import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { InterestsComponent } from '../interests/interests.component';
import { JobExperienceComponent } from '../job-experience/job-experience.component';
import { SkillsComponent } from '../skills/skills.component';

const routes: Routes = [
   { path: '', redirectTo: "about", pathMatch: "full" },
   { path: 'about', component: AboutMeComponent },
   { path: 'interests', component: InterestsComponent },
   { path: 'experience', component: JobExperienceComponent },
   { path: 'skills', component: SkillsComponent }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: []
})
export class AppRoutingModule { }