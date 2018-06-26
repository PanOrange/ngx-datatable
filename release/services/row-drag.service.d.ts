import { EventEmitter } from '@angular/core';
import { RowDropDirective } from '../directives';
import { DataTableBodyRowComponent } from '../components';
export declare class RowDragService {
    dragActive: boolean;
    /**
     * Event which will be emitted on Drag Start
     */
    onDragStart: EventEmitter<{}>;
    /**
     * Event which will be emitted on Drag End
     */
    onDragEnd: EventEmitter<{}>;
    private currentDropDirective;
    private row;
    startDrag(row: DataTableBodyRowComponent): void;
    endDrag(): void;
    setActiveDropElement(dropDirective: RowDropDirective): void;
}
