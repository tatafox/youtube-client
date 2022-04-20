import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ISearchItem } from '../../../shared/models/search-items.models';
import { ISortSettings, sortMap } from '../../../shared/models/sort-settings.model';
import { SortSettingsService } from '../../../core/services/sort-settings.service';
import { AppState } from '../../../redux';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { ICustomItem } from '../../../shared/models/custom-item.models';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  public items!: ISearchItem[];

  public itemsCustom!: ICustomItem[];

  public state$!: Observable<AppState>;

  public isLoading: boolean = false;

  private subscription!: Subscription;

  public sortSettings: ISortSettings = {
    filterBy: sortMap.empty,
    sortIncrease: true,
    keywords: '',
  };

  constructor(
    private readonly youtubeApiService: YoutubeApiService,
    private readonly sortSettingsService: SortSettingsService,
    private store: Store<AppState>,
  ) {}

  public ngOnInit(): void {
    this.state$ = this.store.select((state) => state);
    this.subscription = this.state$.subscribe((state) => {
      this.items = state.videoState.items;
      this.itemsCustom = state.videoState.customItems;
    });

    this.sortSettingsService.sortSettings$.subscribe((sortSettings) => {
      this.sortSettings = sortSettings;
    });
    this.youtubeApiService.isLoading$.subscribe((isLoad) => {
      this.isLoading = isLoad;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
