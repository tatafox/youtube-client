import { createAction, props } from '@ngrx/store';
import { ICustomItem } from '../shared/models/custom-item.models';
import { ISearchItem } from '../shared/models/search-items.models';

export const addCard = createAction(
  '[ADMIN PAGE] CREATE CARD',
  props<{ newCard: ICustomItem }>(),
);

export const setSearchResult = createAction(
  '[YOUTUBE PAGE] SET SEARCH RESULT',
  props<{ items: ISearchItem[] }>(),
);
