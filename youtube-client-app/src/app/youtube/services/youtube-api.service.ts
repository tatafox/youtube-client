import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, Subject } from "rxjs";
import { ISearchItem, ISearchResultItem } from '../../shared/models/search-items.models';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  private apiKey: string = 'AIzaSyC5TzcKsE0YZYoggt1pkPqFa7eDPZrg3YY';

  private pathForSearch: string = 'search?';

  private pathForVideos: string = 'videos?';

  public searchItems$ = new Subject<ISearchItem[]>();

  constructor(private http: HttpClient) { }

  private getSearchListByQuery(query: string): Observable<ISearchResultItem[]> {
    return this.http.get(this.pathForSearch, {
      params: {
        key: this.apiKey,
        type: 'video',
        part: 'snippet',
        maxResults: '20',
        q: query,
      },
    })
      .pipe(map((responce: any) => responce.items));
  }

  getVideoInfoById(id: string): Observable<ISearchItem> {
    return this.http
      .get(this.pathForVideos, {
        params: {
          key: this.apiKey,
          id,
          part: 'snippet,statistics',
        },
      })
      .pipe(map((responce: any) => responce.items[0]));
  }

  public fetchVideosByQuery(query: string) {
    return this.getSearchListByQuery(query)
      .subscribe((response) => {
        const searchList = response.map((video) => this.getVideoInfoById(video.id.videoId));
        forkJoin(searchList).subscribe((data: ISearchItem[]) => {
          this.searchItems$.next(data);
        });
        return (response);
      });
  }
}
