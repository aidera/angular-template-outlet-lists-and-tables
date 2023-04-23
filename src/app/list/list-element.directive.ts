import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appListElement]',
})
export class ListElementDirective {
  @Input() id: number;

  constructor(public templateRef: TemplateRef<any>) {}
}
