import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TableCellDirective } from './table-cell.directive';
import { TableHeaderCellDirective } from './table-header-cell.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnChanges, AfterViewInit {
  @Input() data: any[] = [];
  @Input() displayColumns: string[] = [];

  @ContentChildren(TableCellDirective)
  templateCellElements: QueryList<TableCellDirective>;
  @ContentChildren(TableHeaderCellDirective)
  templateHeaderCellElements: QueryList<TableHeaderCellDirective>;

  @Output() dragged = new EventEmitter<any[]>();

  public displayData: {
    column: string;
    headerCellTemplate?: TableHeaderCellDirective;
    cellTemplate?: TableCellDirective;
  }[] = [];

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['displayColumns'] ||
      changes['data'] ||
      changes['templateCellElements'] ||
      changes['templateHeaderCellElements']
    ) {
      this._buildDisplayData();
    }
  }

  ngAfterViewInit(): void {
    this._buildDisplayData();
    this._cdr.detectChanges();
  }

  private _buildDisplayData(): void {
    this.displayData = this.displayColumns.map((column) => {
      return {
        column: column,
        headerCellTemplate: this._getTableHeaderCellTemplate(column),
        cellTemplate: this._getTableCellTemplate(column),
      };
    });
    this._cdr.markForCheck();
  }

  private _getTableHeaderCellTemplate(
    column: string
  ): TableHeaderCellDirective | undefined {
    return this.templateHeaderCellElements?.find((el) => el.column === column);
  }

  private _getTableCellTemplate(
    column: string
  ): TableCellDirective | undefined {
    return this.templateCellElements?.find((el) => el.column === column);
  }

  public onDrop(event: CdkDragDrop<any>): void {
    const movingElement = { ...this.data[event.previousIndex] };
    const newArray = JSON.parse(JSON.stringify(this.data));
    newArray.splice(event.previousIndex, 1);
    newArray.splice(event.currentIndex, 0, movingElement);
    this.data = newArray;
    this.dragged.emit(newArray);
    this._cdr.markForCheck();
  }
}
