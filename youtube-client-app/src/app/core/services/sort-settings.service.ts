import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISortSettings } from '../../shared/models/sort-settings.model';

@Injectable({
  providedIn: 'root',
})

export class SortSettingsService {
  public sortSettings$ = new Subject<ISortSettings>();

  public onSort(sortSettings: ISortSettings) {
    this.sortSettings$.next(sortSettings);
  }
}
