import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ISearchItem } from '../../../shared/models/search-items.models';
import { VideoSearchService } from '../../../core/services/video-search.service';
import { YoutubeApiService } from '../../services/youtube-api.service';

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
    private readonly videoSearchService: VideoSearchService,
    private readonly youtubeApiServices: YoutubeApiService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.youtubeApiServices.getVideoInfoById(this.id).subscribe((response) => {
      this.item = response;
      if (!this.item) {
        this.router.navigate(['404']);
      }
      this.isLoading = false;
      return response;
    });
  }

  public goBack(): void {
    this.location.back();
  }
}
