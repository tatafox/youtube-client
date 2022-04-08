import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { ISearchItem } from "../../../shared/models/search-items.models";
import { VideoSearchService } from "../../../core/services/video-search.service";

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  public item!: ISearchItem;

  public id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly videoSearchService: VideoSearchService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    const item: ISearchItem | null = this.videoSearchService.findById(this.id);
    if (!item) {
      this.router.navigate(['404']);
    } else {
      this.item = item;
    }
  }

  public goBack(): void {
    this.location.back();
  }

}
