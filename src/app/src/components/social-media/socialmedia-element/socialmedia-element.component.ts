import { Component, Input } from '@angular/core';
import { SocialMediaElement } from '../models';
import {  MatTooltipModule } from '@angular/material/tooltip';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-socialmedia-element',
  standalone: true,
  imports: [MatTooltipModule,NgOptimizedImage],
  templateUrl: './socialmedia-element.component.html',
  styleUrl: './socialmedia-element.component.css'
})
export class SocialmediaElementComponent {
  @Input() socialMediaElement: SocialMediaElement = {
    name : '',
    link: '',
    imgPath : '',

  };
}
