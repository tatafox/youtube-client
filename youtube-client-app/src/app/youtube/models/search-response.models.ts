import { ISearchItem } from '../../shared/models/search-items.models';

export interface IVideoSearchResponce {
  kind: 'youtube#searchListResponse';
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: Array<ISearchItem>;
}
export interface IResponse {
  kind: 'youtube#videoListResponse';
  etag: string;
  pageInfo: IPageInfo;
  items: Array<ISearchItem>;
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
