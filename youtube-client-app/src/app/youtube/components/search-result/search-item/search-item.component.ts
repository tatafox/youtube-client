import { Component, Input } from '@angular/core';
import { ISearchItem } from '../../../../shared/models/search-items.models';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() public item!: ISearchItem;

  constructor(private router: Router) { }

  public goToDetail(): void {
    this.router.navigate(['detail', this.item.id]);
  }
}
