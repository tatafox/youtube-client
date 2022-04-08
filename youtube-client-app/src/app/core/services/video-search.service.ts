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
  public cardCollection!: ISearchItem[];

  public items$ = new Subject<ISearchItem[]>();

  public onSearch(searchVal: string) {
    if (searchVal.trim()) {
      this.cardCollection = youtubeResponse.items;
      this.items$.next(youtubeResponse.items);
    }
  }

  public findById(id: string): ISearchItem | null {
    console.log(id, this.cardCollection, this.cardCollection.find((card) => card.id === id))
    return this.cardCollection.find((card) => card.id === id) || null;
  }
}
