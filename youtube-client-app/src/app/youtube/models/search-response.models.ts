import { ISearchItem } from '../../shared/models/search-items.models';

export interface IResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: Array<ISearchItem>;
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
