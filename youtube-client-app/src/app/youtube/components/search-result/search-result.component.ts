import { Component, OnInit } from '@angular/core';
import { ISearchItem } from '../../../shared/models/search-items.models';
import { VideoSearchService } from '../../../core/services/video-search.service';
import { ISortSettings, sortMap } from '../../../shared/models/sort-settings.model';
import { SortSettingsService } from '../../../core/services/sort-settings.service';
import { YoutubeApiService } from "../../services/youtube-api.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  public items!: ISearchItem[];

  public sortSettings: ISortSettings = {
    filterBy: sortMap.empty,
    sortIncrease: true,
    keywords: '',
  };

  constructor(
    private readonly videoSearchService: VideoSearchService,
    private readonly sortSettingsService: SortSettingsService,
    private readonly youtubeApiService: YoutubeApiService,
  ) {}

  ngOnInit(): void {
    if (this.videoSearchService.cardCollection) {
      this.items = this.videoSearchService.cardCollection;
    }
    this.videoSearchService.items$.subscribe((items) => {
      this.items = items;
      console.log(items);
      //console.log(this.youtubeApiService.fetchVideosByQuery('Angular'))

    });
    this.sortSettingsService.sortSettings$.subscribe((sortSettings) => {
      this.sortSettings = sortSettings;
    });
  }
}
