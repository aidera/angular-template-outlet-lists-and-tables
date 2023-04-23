import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTableHeaderCell]',
})
export class TableHeaderCellDirective {
  @Input() column: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
