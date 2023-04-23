import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { ListElementDirective } from './list/list-element.directive';
import { TableCellDirective } from './table/table-cell.directive';
import { TableHeaderCellDirective } from './table/table-header-cell.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ListComponent,
    ListElementDirective,
    TableCellDirective,
    TableHeaderCellDirective,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
