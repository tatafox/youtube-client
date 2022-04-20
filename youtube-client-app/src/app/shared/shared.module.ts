import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorByDateDirective } from './directives/color-by-date.directive';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [ColorByDateDirective, SortPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    ColorByDateDirective,
    SortPipe,
  ],
})
export class SharedModule { }
