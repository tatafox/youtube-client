import {
  createReducer, on, Action,
} from '@ngrx/store';
import * as VideoActions from './video.actions';
import { VideoState } from './state.models';

const initialState: VideoState = {
// @ts-ignore
  items: [],
  // @ts-ignore
  customItems: [],
};

const reducer = createReducer(
  initialState,
  on(VideoActions.addCard, (state, { newCard }) => ({
    ...state,
    customItems: [...state.customItems, newCard]
  })),
  on(VideoActions.setSearchResult, (state, { items }) => ({...state, items })),
);

export function videoReducer(state: VideoState, action: Action): VideoState {
  return reducer(state, action);
}
