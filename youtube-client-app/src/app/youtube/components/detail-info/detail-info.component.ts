import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ISearchItem } from '../../../shared/models/search-items.models';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { AppState } from '../../../redux';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss'],
})
export class DetailInfoComponent implements OnInit {
  public item!: ISearchItem;

  public id!: string;

  public isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly youtubeApiServices: YoutubeApiService,
    private location: Location,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.store.select((state) => state)
      .subscribe((state) => {
        const item = state.videoState.items.find((card) => card.id === this.id);
        if (!item) {
          this.router.navigate(['404']);
        }
        this.item = item as ISearchItem;
        this.isLoading = false;
      });

    /*
    this.youtubeApiServices.getVideoInfoById(this.id).subscribe((response) => {
      this.item = response;
      if (!this.item) {
        this.router.navigate(['404']);
      }
      this.isLoading = false;
      return response;
    }); */
  }

  public goBack(): void {
    this.location.back();
  }
}
