import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

@Directive({
  selector: '[appColorByDate]',
})
export class ColorByDateDirective implements OnInit {
  @Input('appColorByDate') public date?: string;

  private cardElements: ElementRef;

  constructor(private element: ElementRef) {
    this.cardElements = this.element;
  }

  ngOnInit(): void {
    this.addColorClass();
  }

  addColorClass(): void {
    const publishedDate = new Date(this.date as string);
    const month: number = new Date(0).setMonth(1);
    const sevenDays: number = new Date(0).setDate(7);
    const timeOffset: number = new Date().getTime() - publishedDate.getTime();

    if (timeOffset < sevenDays) {
      this.cardElements.nativeElement.classList.add('card--blue');
    } else if (timeOffset < month) {
      this.cardElements.nativeElement.classList.add('card--green');
    } else if (timeOffset > 6 * month) {
      this.cardElements.nativeElement.classList.add('card--red');
    }
  }
}
