import { Component, Input } from '@angular/core';
import { ISearchItem } from '../../common/models/search-items.models';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input() items!: ISearchItem[];

  constructor() {}
}
