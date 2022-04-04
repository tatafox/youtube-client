import {
  Component, ElementRef, ViewChild,
} from '@angular/core';
import { ISortSettings, sortMap } from './shared/models/sort-settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('searchResult') searchListRef?: ElementRef;

  public settingActive: boolean = false;

  public sortSettings: ISortSettings = {
    filterBy: sortMap.empty,
    sortIncrease: true,
    keywords: '',
  };

  public title: string = 'youtube-client-app';

  public toggleSetting(): void {
    this.settingActive = !this.settingActive;
  }

  public newSortSettings(settings: ISortSettings): void {
    this.sortSettings = { ...settings };
  }
}
