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

  existMediaDevices() {
    return !!navigator.mediaDevices;
  }

  existMediaGetUserMedia() {
    return !!navigator.getUserMedia;
  }

  async playVideo() {
    const constraints = {
      video: true
    };
    const video = document.getElementById('video') as HTMLVideoElement;
    // if (this.isMobile()) {
    // alert('outside');
    navigator.mediaDevices.getUserMedia(constraints).then(mediaStream => {
        video.srcObject = mediaStream;
        // alert('inside');
        video.play();
      }
    ).catch(error => alert(error));
    // }
    // navigator.getUserMedia({video: {facingMode: (this.isMobile() ? 'user' : 'environment')}},
    //   stream => video.srcObject = stream,
    //   error => console.log(error));
  }

  isIOS() {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }

  isAndroid() {
    return !!navigator.userAgent.match(/Android/i);
  }

  isMobile() {
    return this.isAndroid() || this.isIOS();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log((this.video));
    this.playVideo();
  }

}
