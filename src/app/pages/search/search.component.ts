import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../interfaces/now-playing';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  title: string = '';
  movies: Movie[] = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.title = params.text;
      this.movieService
        .SearchMovie(params.text)
        .subscribe((movies) => (this.movies = movies));
    });
  }
}
