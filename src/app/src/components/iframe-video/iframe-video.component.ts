import { Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-iframe-video',
  standalone: true,
  imports: [MainContainerComponent],
  templateUrl: './iframe-video.component.html',
  styleUrl: './iframe-video.component.css'
})
export class IframeVideoComponent {
  domeSanitizer = inject(DomSanitizer);

  @Input() set videoSrc(value: string){
    this._videoSrc = this.domeSanitizer.bypassSecurityTrustResourceUrl(value);
  }

  _videoSrc: SafeResourceUrl = '';

}
