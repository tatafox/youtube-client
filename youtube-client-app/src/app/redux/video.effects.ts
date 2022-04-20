import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import {
  catchError, map, mergeMap, Observable, of, switchMap,
} from 'rxjs';
import { YoutubeApiService } from '../youtube/services/youtube-api.service';
import { OnSearch, loadSearchResult, loadSearchFailed } from './video.actions';

@Injectable()
export class VideoEffects {
  constructor(
    private actions$: Actions,
    private youtubeApiService: YoutubeApiService,
    private readonly store: Store,
  ) {
  }

  search$ = createEffect(() => this.actions$.pipe(
    ofType(OnSearch),
    switchMap((data) => this.youtubeApiService.getVideosByQuery(data.value).pipe(
      // @ts-ignore
      map((result) => loadSearchResult({ result })),
      catchError((err) => of(loadSearchFailed(err))),
    )),
  ));
}
