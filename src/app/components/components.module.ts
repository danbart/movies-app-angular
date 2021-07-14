import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  declarations: [NavbarComponent, SlideshowComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SlideshowComponent],
})
export class ComponentsModule {}
