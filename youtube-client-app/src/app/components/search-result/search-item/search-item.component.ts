import { Component, Input } from '@angular/core';
import { ISearchItem } from '../../../common/models/search-items.models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() public item!: ISearchItem;

  constructor() {}
}
