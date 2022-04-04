import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appColorByDate]',
})
export class ColorByDateDirective implements OnInit {
  @Input('appColorByDate') public date?: string;

  constructor(private element: ElementRef, private rend: Renderer2) {}

  ngOnInit(): void {
    this.addColorClass();
  }

  addColorClass(): void {
    const publishedDate = new Date(this.date as string);
    const month: number = new Date(0).setMonth(1);
    const sevenDays: number = new Date(0).setDate(7);
    const timeOffset: number = new Date().getTime() - publishedDate.getTime();

    if (timeOffset < sevenDays) {
      this.rend.addClass(this.element.nativeElement, 'card--blue');
    } else if (timeOffset < month) {
      this.rend.addClass(this.element.nativeElement, 'card--green');
    } else if (timeOffset > 6 * month) {
      this.rend.addClass(this.element.nativeElement, 'card--red');
    }
  }
}
