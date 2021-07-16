import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from '../../interfaces/movie-detail';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: MovieDetail | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.movieService
      .getMovieDetail(id)
      .subscribe((movie) => (this.movie = movie));
  }

  onRegresar() {}
}
