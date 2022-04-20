import { ICustomItem } from '../shared/models/custom-item.models';
import { ISearchItem } from '../shared/models/search-items.models';

export interface IStateItem {
  item: ISearchItem | ICustomItem;
}

export interface VideoState {
  items: ISearchItem[];
  customItems: ICustomItem[];
}

export interface AppState {
  videoState: VideoState;
}
