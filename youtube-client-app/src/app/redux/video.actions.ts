import { createAction, props } from '@ngrx/store';
import { ICustomItem } from '../shared/models/custom-item.models';
import { ISearchItem } from '../shared/models/search-items.models';

export const getVideoById = createAction(
  '[ADMIN PAGE or YOUTUBE PAGE] LOAD DETAILED',
  props<{ id: string }>(),
);

export const addCard = createAction(
  '[ADMIN PAGE] CREATE CARD',
  props<{ videoInfo: ICustomItem }>(),
);

export const deleteCard = createAction(
  '[ADMIN PAGE] DELETE CARD',
  props<{ id: string }>(),
);

export const OnSearch = createAction(
  '[YOUTUBE PAGE] LOAD SEARCH RESULT',
  props<{ value: string }>(),
);

export const loadSearchResult = createAction(
  '[YOUTUBE PAGE] GET SEARCH RESULT',
  props<{ items: ISearchItem[] }>(),
);

export const loadSearchFailed = createAction(
  '[YOUTUBE PAGE] FAILED SEARCH RESULT',
  props<{ error: Error }>(),
);

export const setSearchResult = createAction(
  '[YOUTUBE PAGE] SET SEARCH RESULT',
  props<{ items: ISearchItem[] }>(),
);
