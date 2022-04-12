import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorByDateDirective } from './directives/color-by-date.directive';
import { SortPipe } from './pipes/sort.pipe';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [ColorByDateDirective, SortPipe, LoadingComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ColorByDateDirective,
    SortPipe,
    LoadingComponent
  ],
})
export class SharedModule { }
