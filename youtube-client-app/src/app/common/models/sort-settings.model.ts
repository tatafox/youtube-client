export interface ISortSettings {
  filterBy: SortType;
  sortIncrease: boolean;
}
export interface ISort {
  date: SortType;
  view: SortType;
  empty: SortType;
}

export type SortType = 'NONE' | 'VIEW' | 'DATE';

export const sortMap: ISort = {
  date: 'DATE',
  view: 'VIEW',
  empty: 'NONE',
};
