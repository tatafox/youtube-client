import { Component, Input, OnInit } from '@angular/core';
import { IStatistics } from '../../../shared/models/search-items.models';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  @Input() public statistic!: IStatistics;

  constructor() { }

  ngOnInit(): void {
  }
}
