import { EventEmitter } from '@angular/core';
import { RowDragService } from '../services';
import { DataTableBodyRowComponent } from '../components';
export interface DraggableOptions {
    zone?: string;
    data?: any;
}
export declare class RowDraggableDirective {
    private dragService;
    row: DataTableBodyRowComponent;
    onDragStartEvent: EventEmitter<{}>;
    dragEnabled: boolean;
    dragData: any;
    constructor(dragService: RowDragService);
    readonly draggable: boolean;
    onDragStart(event: DragEvent): void;
}
