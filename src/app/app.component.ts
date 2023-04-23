import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ListElement } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private _cdr: ChangeDetectorRef) {}

  public listElements: ListElement[] = [
    { id: 1, title: 'My title 1', description: 'Lo1rem ipsum', number: 0 },
    { id: 2, title: 'My title 2', description: 'Lore2m ipsum', number: 0 },
    { id: 3, title: 'My title 3', description: 'Lorem ipsum', number: 0 },
    { id: 4, title: 'My title 4', description: 'L3orem ipsum', number: 0 },
    { id: 5, title: 'My title 5', description: 'Lorem ips4um', number: 0 },
    { id: 6, title: 'My title 6', description: 'L5orem ipsum', number: 0 },
    { id: 7, title: 'My title 7', description: 'Lore6m ipsum', number: 0 },
    { id: 8, title: 'My title 8', description: 'L8orem ip7sum', number: 0 },
    { id: 9, title: 'My title 9', description: 'Lorem9 ipsum', number: 0 },
    { id: 10, title: 'My title 10', description: 'Lorem 10ipsum', number: 0 },
  ];

  public increase(id: number) {
    this.listElements = this.listElements.map((el) => {
      return { ...el, number: el.id === id ? el.number + 1 : el.number };
    });
    this._cdr.markForCheck();
  }

  public dragHandler(listElements: ListElement[]): void {
    this.listElements = listElements;
    this._cdr.markForCheck();
  }

  public clickHandler(): void {
    console.log('clicked')
  }
}
