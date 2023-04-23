import {
  Directive,
  Input,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[appTableCell]',
})
export class TableCellDirective {
  @Input() column: string;
  @Input() useDefaultContainer: boolean = true;

  constructor(public templateRef: TemplateRef<any>) {}
}
