import { Component } from '@angular/core';
import {MatCardImage, MatCardModule} from '@angular/material/card';
import { TypingAnimationDirective } from '../directives/typing-animation.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TypingAnimationDirective,
    MatCardModule,
    MatCardImage,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
