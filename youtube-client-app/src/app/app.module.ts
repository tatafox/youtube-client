import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule} from "@ngrx/store";

import { AppComponent } from './app.component';

import { YoutubeModule } from './youtube/youtube.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { VideoEffects, videoReducer } from "./redux";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    YoutubeModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
// @ts-ignore
    StoreModule.forRoot({ videoState: videoReducer }),
    EffectsModule.forRoot([VideoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
