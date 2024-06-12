import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { CreativeWorkComponent } from './creative-work/creative-work.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'creative-work',
    component: CreativeWorkComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
