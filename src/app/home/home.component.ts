import { Component } from '@angular/core';
import {MatCardImage, MatCardModule} from '@angular/material/card';
import { TypingAnimationDirective } from '../directives/typing-animation.directive';
import { ResumeComponent } from '../resume/resume.component';
import { CreativeWorkComponent } from '../creative-work/creative-work.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TypingAnimationDirective,
    MatCardModule,
    MatCardImage,
    ResumeComponent,
    CreativeWorkComponent,
    ProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
