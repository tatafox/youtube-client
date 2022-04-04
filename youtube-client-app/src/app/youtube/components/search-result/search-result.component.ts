import { Component, OnInit } from '@angular/core';
import { ISearchItem } from '../../../shared/models/search-items.models';
import { VideoSearchService } from '../../../core/services/video-search.service';
import { ISortSettings, sortMap } from '../../../shared/models/sort-settings.model';

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

  constructor(private readonly videoSearchService: VideoSearchService) {}

  ngOnInit(): void {
    this.videoSearchService.items$.subscribe((items) => {
      this.items = items;
    });
  }
}
