import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-creative-work',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './creative-work.component.html',
  styleUrl: './creative-work.component.css'
})
export class CreativeWorkComponent {

}
