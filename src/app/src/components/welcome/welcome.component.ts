import { Component } from '@angular/core';
import { MainContainerComponent } from "../layout/main-container/main-container.component";
import { FadedDirective } from '../directives/animations';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MainContainerComponent, FadedDirective],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
