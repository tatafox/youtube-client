export interface ISearchResultItem {
  kind: 'youtube#searchResult';
  etag: string;
  id: IIdInfo;
  snippet: ISnipet;
}

export interface ISearchItem {
  kind: 'youtube#video';
  etag: string;
  id: string;
  snippet: ISnipet;
  statistics: IStatistics;
}

export interface IIdInfo {
  kind: 'youtube#video';
  videoId: string;
}

export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface ISnipet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
  defaultLanguage?: string;
}

export interface IThumbnails {
  default: IThumbnail;
  medium: IThumbnail;
  high: IThumbnail;
  standard: IThumbnail;
  maxres: IThumbnail;
}

export interface ILocalized {
  title: string;
  description: string;
}

export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}
