import {
  AfterViewInit, Component, ElementRef, OnDestroy, ViewChild,
} from '@angular/core';
import {
  debounceTime, Observable, Subscription, tap,
} from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { VideoState, setSearchResult } from '../../../../redux';
import { YoutubeApiService } from '../../../../youtube/services/youtube-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  @ViewChild('searchVideoInput') public searchVideoInput!: ElementRef<HTMLInputElement>;

  private searchVal = '';

  private isTyping = false;

  private subscription!: Subscription;

  constructor(
    private readonly youtubeApiServices: YoutubeApiService,
    public router: Router,
    private readonly store: Store<VideoState>,
  ) {
  }

  public ngAfterViewInit(): void {
    const input: HTMLInputElement = this.searchVideoInput.nativeElement;

    const inputStream$: Observable<string> = new Observable((observer) => {
      input.oninput = () => observer.next(input.value);
    });

    this.subscription = inputStream$
      .pipe(
        tap(() => {
          this.isTyping = true;
        }),
        debounceTime(700),
        tap(() => {
          this.isTyping = false;
        }),
      )
      .subscribe((value) => {
        if (!this.isTyping) {
          this.searchVal = value;
          this.onSearch();
        }
      });
  }

  onSearch() {
    if (this.searchVal.trim() && this.searchVal.length > 3) {
      this.youtubeApiServices.isLoading$.next(true);
      this.youtubeApiServices.fetchVideosByQuery(this.searchVal);
      this.youtubeApiServices.searchItems$.subscribe((items) => {
        this.store.dispatch(setSearchResult({ items }));
        this.youtubeApiServices.isLoading$.next(false);
      });
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
