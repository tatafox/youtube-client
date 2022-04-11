import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISearchItem } from '../../shared/models/search-items.models';
import youtubeResponse from '../../common/mocks/response';
import { IResponse } from '../../youtube/models/search-response.models';
import { YoutubeApiService } from "../../youtube/services/youtube-api.service";

@Injectable({
  providedIn: 'root',
})
export class VideoSearchService {
  public searchVal$ = new Subject<string>();

  public youtubeResponse: IResponse = youtubeResponse;

  public cardCollection!: ISearchItem[];

  public items$ = new Subject<ISearchItem[]>();

  constructor(private readonly youtubeApiServices: YoutubeApiService) {
  }

  public onSearch(searchVal: string) {
    if (searchVal.trim() && searchVal.length > 3) {
      this.youtubeApiServices.fetchVideosByQuery(searchVal)
      this.youtubeApiServices.searchItems$.subscribe((items) => {
        this.cardCollection = items;
        this.items$.next(items);

      })
    }
  }

  public findById(id: string): ISearchItem | null {
    return this.cardCollection.find((card) => card.id === id) || null;
  }
}
