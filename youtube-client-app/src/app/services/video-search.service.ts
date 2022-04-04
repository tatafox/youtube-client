import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoSearchService {
  public searchVal$ = new Subject<string>();

  public onSearch(searchVal: string) {
    this.searchVal$.next(searchVal);
  }
}
