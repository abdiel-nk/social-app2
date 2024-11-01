import { Component } from '@angular/core';
import { SocialmediaElementComponent } from './socialmedia-element/socialmedia-element.component';
import { SocialMediaElement } from './models';
import { MainContainerComponent } from "../layout/main-container/main-container.component";
import { WobbleDirective } from '../directives/animations';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    SocialmediaElementComponent, 
    MainContainerComponent,
    WobbleDirective
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {
  socialMediaList : SocialMediaElement[] = [
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/',
      imgPath: './assets/social-media/linkedin.svg',
  
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/nathalyple/',
      imgPath: './assets/social-media/instagram.svg'
    },
    {
      name: 'Behance',
      link: 'https://www.behance.com/',
      imgPath: './assets/social-media/behance.svg'
    },
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/',
      imgPath: './assets/social-media/youtube.svg'
    },
    {
      name: 'GitHub',
      link: 'https://www.github.com/',
      imgPath: './assets/social-media/github.svg'
    },
  ] 
}
