import { Component } from '@angular/core';
import { IResponse } from './common/models/search-response.models';
import youtubeResponse from './common/mocks/response';
import { ISearchItem } from './common/models/search-items.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'youtube-client-app';

  public youtubeResponse: IResponse = youtubeResponse;

  public items: ISearchItem[] = youtubeResponse.items;

  constructor() {}
}
