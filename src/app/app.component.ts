import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './src/components/toolbar/toolbar.component';
import { WelcomeComponent } from './src/components/welcome/welcome.component';
import { SocialMediaComponent } from './src/components/social-media/social-media.component';
import { TrailerVideoComponent } from './src/trailer-video';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ToolbarComponent,
    WelcomeComponent,
    RouterOutlet, 
    SocialMediaComponent,
    TrailerVideoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'social2-app';
}
