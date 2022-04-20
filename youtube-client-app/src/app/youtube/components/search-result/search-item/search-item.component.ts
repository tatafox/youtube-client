import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchItem, IStatistics } from '../../../../shared/models/search-items.models';
import { ICustomItem } from '../../../../shared/models/custom-item.models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() public item!: ISearchItem;

  @Input() public itemCustom!: ICustomItem;

  public publishedAt!: string;

  public thumbnail!: string;

  public title!: string;

  public statistics!: IStatistics;

  public id!: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (this.itemCustom) {
      this.thumbnail = this.itemCustom.snippet.thumbnail;
      this.title = this.itemCustom.snippet.title;
      this.id = this.itemCustom.id;
      this.publishedAt = this.itemCustom.snippet.publishedAt;
    } else if (this.item) {
      this.thumbnail = this.item.snippet.thumbnails.medium.url;
      this.statistics = this.item.statistics;
      this.title = this.item.snippet.title;
      this.id = this.item.id;
      this.publishedAt = this.item.snippet.publishedAt;
    }
  }

  public goToDetail(): void {
    this.router.navigate(['detail', this.id]);
  }
}
