import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    MatChipsModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
