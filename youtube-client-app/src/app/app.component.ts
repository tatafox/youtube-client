import {
  Component, ElementRef, OnInit, ViewChild,
} from '@angular/core';
import { IResponse } from './common/models/search-response.models';
import youtubeResponse from './common/mocks/response';
import { ISearchItem } from './common/models/search-items.models';
import { VideoSearchService } from './services/video-search.service';
import { ISortSettings, sortMap } from './common/models/sort-settings.model';

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

  public keyword: string = '';

  public searchVal: string = '';

  public sortSettings: ISortSettings = {
    filterBy: sortMap.empty,
    sortIncrease: true,
    keywords: '',
  };

  constructor(private readonly videoSearchService: VideoSearchService) {}

  ngOnInit(): void {
    this.videoSearchService.searchVal$.subscribe((searchVal) => this.searchVal = searchVal);
  }

  public toggleSetting(): void {
    this.settingActive = !this.settingActive;
  }

  public newSortSettings(settings: ISortSettings): void {
    this.sortSettings = { ...settings };
  }
}
