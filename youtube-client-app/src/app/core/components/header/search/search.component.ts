import {
  AfterViewInit, Component, ElementRef, ViewChild,
} from '@angular/core';
import { debounceTime, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { VideoSearchService } from '../../../services/video-search.service';
import { Store } from "@ngrx/store";
import { VideoState, OnSearch, setSearchResult } from "../../../../redux";
import { YoutubeApiService } from "../../../../youtube/services/youtube-api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchVideoInput') public searchVideoInput!: ElementRef<HTMLInputElement>;

  private searchVal = '';

  private isTyping = false;

  constructor(
    private readonly videoSearchService: VideoSearchService,
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

    inputStream$
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
      this.youtubeApiServices.fetchVideosByQuery(this.searchVal);
      this.youtubeApiServices.searchItems$.subscribe((items) => {
        this.store.dispatch(setSearchResult({ items }));
      });
    }
  }
}
