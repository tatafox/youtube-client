import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchItemComponent } from './components/search-result/search-item/search-item.component';
import { DetailInfoComponent } from './components/detail-info/detail-info.component';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { StatisticComponent } from './components/statistic/statistic.component';
import { ApiInterceptor } from './interceptors/api-interceptor.service';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true,
};

@NgModule({
  declarations: [SearchResultComponent,
    SearchItemComponent,
    DetailInfoComponent,
    StatisticComponent,
    AdminPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchResultComponent,
    SearchItemComponent,
    DetailInfoComponent,
    AdminPageComponent,
  ],
  providers: [INTERCEPTOR_PROVIDER],
})
export class YoutubeModule { }
