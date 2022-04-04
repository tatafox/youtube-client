import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../common/models/search-items.models';
import { ISortSettings, sortMap } from '../common/models/sort-settings.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  private sortByViews(cards: ISearchItem[], isIncrease: boolean): ISearchItem[] {
    if (!isIncrease) {
      return cards.sort(
        (prev, next) => +next.statistics.viewCount - +prev.statistics.viewCount,
      );
    }
    return cards.sort(
      (prev, next) => +prev.statistics.viewCount - +next.statistics.viewCount,
    );
  }

  private sortByDate(cards: ISearchItem[], isIncrease: boolean): ISearchItem[] {
    if (!isIncrease) {
      return cards.sort(
        (prev, next) => new Date(next.snippet.publishedAt).getTime()
          - new Date(prev.snippet.publishedAt).getTime(),
      );
    }
    return cards.sort(
      (prev, next) => new Date(prev.snippet.publishedAt).getTime()
        - new Date(next.snippet.publishedAt).getTime(),
    );
  }

  private filterByKeyword(cards: ISearchItem[], keyword: string): ISearchItem[] {
    return cards.filter((card) => {
      const onCheck: string[] = [
        card.snippet.title,
        card.snippet.description,
        card.snippet.channelTitle,
        ...card.snippet.tags,
      ];

      return onCheck.some((item) => item.toLocaleLowerCase().includes(keyword.toLowerCase()));
    });
  }

  public transform(items: ISearchItem[], sortSettings: ISortSettings): ISearchItem[] {
    const newCards: ISearchItem[] = this.filterByKeyword(items, sortSettings.keywords);
    if (sortSettings.filterBy === sortMap.view) {
      return this.sortByViews(newCards, sortSettings.sortIncrease);
    }
    if (sortSettings.filterBy === sortMap.date) {
      return this.sortByDate(newCards, sortSettings.sortIncrease);
    }
    return newCards;
  }
}
