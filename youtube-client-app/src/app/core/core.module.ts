import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { LoginComponent } from './components/header/login/login.component';
import { SettingsComponent } from './components/header/settings/settings.component';
import { FilterComponent } from './components/filter/filter.component';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent,
    SearchComponent,
    LoginComponent,
    SettingsComponent,
    FilterComponent,
    NotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    SettingsComponent,
    FilterComponent,
    NotFoundComponent,
  ],
})
export class CoreModule { }
