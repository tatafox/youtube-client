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
  on(VideoActions.getVideoById, (state) => {
    console.log(state);
    return { ...state };
  }),
  on(VideoActions.addCard, (state) => {
    console.log(state);
    return { ...state };
  }),
  on(VideoActions.deleteCard, (state) => {
    console.log(state);
    return { ...state };
  }),
  on(VideoActions.setSearchResult, (store, { items }) => ({...store, items })),
);

export function videoReducer(state: VideoState, action: Action): VideoState {
  return reducer(state, action);
}
