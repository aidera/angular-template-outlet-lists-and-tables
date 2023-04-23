import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { ListElementDirective } from './list-element.directive';
import { ListElement } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnChanges, AfterViewInit {
  @Input() elements: ListElement[] = [];
  @ContentChildren(ListElementDirective)
  templateElements: QueryList<ListElementDirective>;

  public displayData: {
    element: ListElement;
    template?: ListElementDirective;
  }[] = [];

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['templateElements'] || changes['elements']) {
      this._buildDisplayData();
    }
  }

  ngAfterViewInit(): void {
    this._buildDisplayData();
    this._cdr.detectChanges();
  }

  private _buildDisplayData(): void {
    this.displayData = this.elements.map((element) => {
      return {
        element: element,
        template: this._getTemplateElement(element.id),
      };
    });
    this._cdr.markForCheck();
  }

  private _getTemplateElement(id: number): ListElementDirective | undefined {
    return this.templateElements?.find((el) => el.id === id);
  }
}
