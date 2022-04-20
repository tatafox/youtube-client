import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISearchItem } from "../../../shared/models/search-items.models";
import { VideoSearchService } from '../../../core/services/video-search.service';
import { ISortSettings, sortMap } from '../../../shared/models/sort-settings.model';
import { SortSettingsService } from '../../../core/services/sort-settings.service';
import { AppState } from "../../../redux";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  public items!: ISearchItem[];

  public state$!: Observable<AppState>;

  public items$!: Observable<ISearchItem[]>;

  public isLoading!: boolean;

  public sortSettings: ISortSettings = {
    filterBy: sortMap.empty,
    sortIncrease: true,
    keywords: '',
  };

  constructor(
    private readonly videoSearchService: VideoSearchService,
    private readonly sortSettingsService: SortSettingsService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.state$ = this.store.select((state) => state);
    this.state$.subscribe((state) => {
      this.items = state.videoState.items;
    });

    this.sortSettingsService.sortSettings$.subscribe((sortSettings) => {
      this.sortSettings = sortSettings;
    });
    this.videoSearchService.isLoading$.subscribe((isLoad) => {
      this.isLoading = isLoad;
    });
  }
}
