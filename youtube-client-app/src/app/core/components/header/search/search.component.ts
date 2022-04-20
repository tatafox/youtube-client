import { Component } from '@angular/core';
import { VideoSearchService } from '../../../services/video-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchVal = '';

  constructor(private readonly videoSearchService: VideoSearchService) {}

  onClickSearch() {
    if (this.searchVal.trim()) {
      this.videoSearchService.onSearch(this.searchVal);
      this.searchVal = '';
    }
  }
}
