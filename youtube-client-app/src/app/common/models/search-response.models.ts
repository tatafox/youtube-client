import { ISearchItem } from './search-items.models';

export interface IResponce {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: Array<ISearchItem>;
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
