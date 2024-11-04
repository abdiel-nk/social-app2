import { Component } from '@angular/core';
import { IframeVideoComponent, MainContainerComponent } from '../components';

@Component({
  selector: 'app-trailer-video',
  standalone: true,
  imports: [MainContainerComponent,IframeVideoComponent],
  templateUrl: './trailer-video.component.html',
  styleUrl: './trailer-video.component.css'
})
export class TrailerVideoComponent {
  videoSrc = 'https://www.youtube.com/embed/62uDM9w6ajU?si=CB6rVabinAbWoBt_';
}
