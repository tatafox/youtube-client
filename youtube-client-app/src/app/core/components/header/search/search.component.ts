import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, Observable, tap } from 'rxjs';
import { VideoSearchService } from '../../../services/video-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @ViewChild('searchVideoInput') public searchVideoInput!: ElementRef<HTMLInputElement>;

  private searchVal = '';

  private isTyping = false;

  constructor(private readonly videoSearchService: VideoSearchService) {
  }

  public ngAfterViewInit(): void {
    const input: HTMLInputElement = this.searchVideoInput.nativeElement;

    const inputStream$: Observable<string> = new Observable((observer) => {
      input.oninput = () => observer.next(input.value);
    });

    inputStream$
      .pipe(
        tap(() => this.isTyping = true),
        debounceTime(700),
        tap(() => this.isTyping = false),
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
      this.videoSearchService.onSearch(this.searchVal);
    }
  }
}
