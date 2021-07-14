import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input()
  movies: Movie[] = [];
  swiper: Swiper | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }
  ngOnInit(): void {}

  onSlideNext() {
    this.swiper?.slideNext();
  }

  onSlidePrevious() {
    this.swiper?.slidePrev();
  }
}
