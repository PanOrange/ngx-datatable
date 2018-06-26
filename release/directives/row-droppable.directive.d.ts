import { EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { RowDragService } from '../services';
export interface DropTargetOptions {
    zone?: string;
}
export declare class RowDropDirective {
    private element;
    private renderer;
    private dragService;
    /**
     * Added to the element any time a draggable element is being dragged
     */
    dragActiveClass: string;
    /**
     * Added to the element when an element is dragged over it
     */
    dragOverClass: string;
    onDropEvent: EventEmitter<{}>;
    private options;
    constructor(element: ElementRef<HTMLElement>, renderer: Renderer2, dragService: RowDragService);
    addDragOverClass(): void;
    removeDragOverClass(): void;
    onDragOver(event: DragEvent): void;
    onDragLeave(): void;
    onDrop(event: DragEvent): void;
}
