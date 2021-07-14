import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/now-playing';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getNowPlaying().subscribe((result) => {
      this.movies = result.results;
    });
  }
}
