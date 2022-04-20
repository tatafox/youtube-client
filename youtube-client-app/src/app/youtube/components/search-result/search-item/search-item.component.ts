import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchItem } from '../../../../shared/models/search-items.models';

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
