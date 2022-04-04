import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISearchItem } from '../../shared/models/search-items.models';
import youtubeResponse from '../../common/mocks/response';
import { IResponse } from '../../youtube/models/search-response.models';

@Injectable({
  providedIn: 'root',
})
export class VideoSearchService {
  public searchVal$ = new Subject<string>();

  public youtubeResponse: IResponse = youtubeResponse;

  public items$ = new Subject<ISearchItem[]>();

  public onSearch(searchVal: string) {
    if (searchVal.trim()) {
      this.items$.next(youtubeResponse.items);
    }
  }
}
