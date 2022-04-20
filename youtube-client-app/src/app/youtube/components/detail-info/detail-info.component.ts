import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ISearchItem, IStatistics } from '../../../shared/models/search-items.models';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { AppState } from '../../../redux';
import { ICustomItem } from '../../../shared/models/custom-item.models';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss'],
})
export class DetailInfoComponent implements OnInit, OnDestroy {
  public item!: ISearchItem | ICustomItem;

  public id!: string;

  public isLoading: boolean = true;

  public thumbnail!: string;

  public statistics!: IStatistics;

  private subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly youtubeApiServices: YoutubeApiService,
    private location: Location,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.subscription = this.store.select((state) => state)
      .subscribe((state) => {
        const item = state.videoState.items.find((card) => card.id === this.id)
          || state.videoState.customItems.find((card) => card.id === this.id);
        if (!item) {
          this.router.navigate(['404']);
        }

        if ((item as ISearchItem).statistics) {
          this.item = item as ISearchItem;
          this.thumbnail = this.item.snippet.thumbnails.maxres?.url
            || this.item.snippet.thumbnails.high.url;
          this.statistics = this.item.statistics;
        } else {
          this.item = item as ICustomItem;
          this.thumbnail = this.item.snippet.thumbnail;
        }
        this.isLoading = false;
      });
  }

  public goBack(): void {
    this.location.back();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
