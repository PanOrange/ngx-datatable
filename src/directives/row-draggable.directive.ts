import {
  Input, HostListener, ViewChild,
  Directive, HostBinding, EventEmitter, Output, ContentChild
} from '@angular/core';
import { RowDragService } from '../services';
import { DataTableBodyRowComponent } from '../components';

export interface DraggableOptions {
  zone?: string;
  data?: any;
}

@Directive({
  selector: '[row-draggable]'
})
export class RowDraggableDirective {

  @ContentChild(DataTableBodyRowComponent) row: DataTableBodyRowComponent;
  @Output() onDragStartEvent = new EventEmitter();
  @Input() dragEnabled: boolean;
  @Input() dragData: any;  
  
  constructor(private dragService: RowDragService) {

  }

  @HostBinding('draggable')
  get draggable() {
    return this.dragEnabled;
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    // when dragging row is not selected --> select it programmatically
    if (this.row !== null) {
      this.row.simulateClick();
    }
    this.dragService.startDrag(this.row);
    event.dataTransfer.setData('data', this.dragData);
  }
}
