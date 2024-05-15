import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { CreativeWorkComponent } from './creative-work/creative-work.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
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
