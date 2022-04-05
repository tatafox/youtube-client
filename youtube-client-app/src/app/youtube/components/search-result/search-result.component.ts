import { Component, OnInit } from '@angular/core';
import { ISearchItem } from '../../../shared/models/search-items.models';
import { VideoSearchService } from '../../../core/services/video-search.service';
import { ISortSettings, sortMap } from '../../../shared/models/sort-settings.model';
import { SortSettingsService } from "../../../core/services/sort-settings.service";

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

  constructor(private readonly videoSearchService: VideoSearchService, private readonly sortSettingsService: SortSettingsService) {}

  ngOnInit(): void {
    this.videoSearchService.items$.subscribe((items) => {
      this.items = items;
    });
    this.sortSettingsService.sortSettings$.subscribe((sortSettings) => {
      this.sortSettings = sortSettings;
    })
  }
}
