import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from '../../interfaces/credits';
import { MovieDetail } from '../../interfaces/movie-detail';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: MovieDetail | undefined;
  cast: Cast[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.movieService.getMovieDetail(id).subscribe((movie) => {
      if (!movie) {
        this.router.navigate(['/']);
        return;
      }
      this.movie = movie;
    });

    this.movieService
      .getCreditsCast(id)
      .subscribe(
        (cast) =>
          (this.cast = cast.filter((actor) => actor.profile_path != null))
      );
  }

  onRegresar() {
    this.location.back();
  }
}
