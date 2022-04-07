import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchItemComponent } from './components/search-result/search-item/search-item.component';
import { DetailInfoComponent } from './components/detail-info/detail-info.component';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { StatisticComponent } from './components/statistic/statistic.component';

@NgModule({
  declarations: [SearchResultComponent,
    SearchItemComponent,
    DetailInfoComponent,
    StatisticComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    SearchResultComponent,
    SearchItemComponent,
    DetailInfoComponent,
  ],
})
export class YoutubeModule { }
