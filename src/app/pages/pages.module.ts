import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingModule } from 'ng-starrating';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [HomeComponent, MovieComponent, SearchComponent],
  imports: [CommonModule, ComponentsModule, PipesModule, RatingModule],
})
export class PagesModule {}
