import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-recognition',
  templateUrl: './video-recognition.component.html',
  styleUrls: ['./video-recognition.component.scss']
})
export class VideoRecognitionComponent implements OnInit, AfterViewInit {
  @ViewChild('video', {static: true}) video: HTMLVideoElement;

  constructor() {
  }

  playVideo() {
    const video = document.getElementById('video') as HTMLVideoElement;
    navigator.getUserMedia({video: {}},
      stream => video.srcObject = stream,
      error => console.log(error));
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log((this.video));
    this.playVideo();
  }

}
