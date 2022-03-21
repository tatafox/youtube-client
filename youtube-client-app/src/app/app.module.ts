import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/header/login/login.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchComponent } from './components/header/search/search.component';
import { SettingsComponent } from './components/header/settings/settings.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchItemComponent } from './components/search-result/search-item/search-item.component';

function components() {
  return [
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    SettingsComponent,
    LogoComponent,
    SearchResultComponent,
    SearchItemComponent,
    FilterComponent,
  ];
}

@NgModule({
  declarations: [AppComponent, ...components()],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
