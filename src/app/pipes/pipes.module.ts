import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PosterPipe } from './poster.pipe';

@NgModule({
  declarations: [PosterPipe],
  imports: [CommonModule],
  exports: [PosterPipe],
})
export class PipesModule {}
