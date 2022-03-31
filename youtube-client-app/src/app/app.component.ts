import {
  Component, ElementRef, OnInit, ViewChild,
} from '@angular/core';
import { IResponse } from './common/models/search-response.models';
import youtubeResponse from './common/mocks/response';
import { ISearchItem } from './common/models/search-items.models';
import { VideoSearchService } from './services/video-search.service';
import { ISortSettings } from './common/models/sort-settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('searchResult') searchListRef?: ElementRef;

  public title: string = 'youtube-client-app';

  public youtubeResponse: IResponse = youtubeResponse;

  public items: ISearchItem[] = youtubeResponse.items;

  public settingActive: boolean = false;

  public sortSettings: ISortSettings = {
    filterBy: 'NONE',
    sortIncrease: true,
  };

  constructor(private readonly videoSearchService: VideoSearchService) {}

  ngOnInit(): void {
    this.videoSearchService.searchVal$.subscribe((searchVal) => this.onSearch(searchVal));
  }

  onSearch(searchVal: string) {
    (this.searchListRef as ElementRef).nativeElement.style.display = 'block';
    (this.searchListRef as ElementRef).nativeElement.setAttribute(
      'data-search',
      searchVal,
    );
  }

  public toggleSetting(): void {
    this.settingActive = !this.settingActive;
  }

  public newSortSettings(settings: ISortSettings): void {
    this.sortSettings = { ...settings };
  }
}
