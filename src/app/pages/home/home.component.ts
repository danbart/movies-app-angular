import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/now-playing';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  moviesSlideshow: Movie[] = [];
  @HostListener('window:scroll', ['$event']) onScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      if (this.movieService.cargando) {
        return;
      }
      this.movieService.getNowPlaying().subscribe((movies) => {
        this.movies.push(...movies);
      });
    }
  }
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getNowPlaying().subscribe((movies) => {
      this.movies = movies;
      this.moviesSlideshow = movies;
    });
  }

  ngOnDestroy() {
    this.movieService.resetCarteleraPage();
  }
}
