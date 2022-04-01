import { Component, EventEmitter, Output } from '@angular/core';
import {
  ISort,
  ISortSettings,
  sortMap,
  SortType,
} from '../../common/models/sort-settings.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() public setSortSettings: EventEmitter<ISortSettings> = new EventEmitter();

  public sortMap: ISort = sortMap;

  private pressedSort: HTMLElement | undefined;

  public sortSettings: ISortSettings = {
    filterBy: sortMap.empty,
    sortIncrease: true,
    keywords: '',
  };

  constructor() {}

  public changeSort(event: any, sortBy: SortType): void {
    // added class for sort toggle
    if (this.pressedSort === (event as PointerEvent).target) {
      this.pressedSort?.classList.toggle('active--increase');
    } else {
      this.pressedSort?.classList.remove('active');
      this.pressedSort?.classList.remove('active--increase');
      this.pressedSort = (event as PointerEvent).target as HTMLElement;
      this.pressedSort?.classList.add('active');
      this.pressedSort?.classList.add('active--increase');
    }

    if (sortBy === this.sortSettings.filterBy) {
      this.sortSettings.sortIncrease = !this.sortSettings.sortIncrease;
    } else {
      this.sortSettings.sortIncrease = true;
      this.sortSettings.filterBy = sortBy;
    }
    this.setSortSettings.emit(this.sortSettings);
  }

  public changeFilter(keyword: string): void {
    this.sortSettings.keywords = keyword.trim();
    this.setSortSettings.emit(this.sortSettings);
  }
}
