"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var components_1 = require("../components");
var RowDraggableDirective = /** @class */ (function () {
    function RowDraggableDirective(dragService) {
        this.dragService = dragService;
        this.onDragStartEvent = new core_1.EventEmitter();
    }
    Object.defineProperty(RowDraggableDirective.prototype, "draggable", {
        get: function () {
            return this.dragEnabled;
        },
        enumerable: true,
        configurable: true
    });
    RowDraggableDirective.prototype.onDragStart = function (event) {
        // when dragging row is not selected --> select it programmatically
        if (this.row !== null) {
            this.row.simulateClick();
        }
        this.dragService.startDrag(this.row);
        event.dataTransfer.setData('data', this.dragData);
    };
    __decorate([
        core_1.ContentChild(components_1.DataTableBodyRowComponent),
        __metadata("design:type", components_1.DataTableBodyRowComponent)
    ], RowDraggableDirective.prototype, "row", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RowDraggableDirective.prototype, "onDragStartEvent", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RowDraggableDirective.prototype, "dragEnabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RowDraggableDirective.prototype, "dragData", void 0);
    __decorate([
        core_1.HostBinding('draggable'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], RowDraggableDirective.prototype, "draggable", null);
    __decorate([
        core_1.HostListener('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], RowDraggableDirective.prototype, "onDragStart", null);
    RowDraggableDirective = __decorate([
        core_1.Directive({
            selector: '[row-draggable]'
        }),
        __metadata("design:paramtypes", [services_1.RowDragService])
    ], RowDraggableDirective);
    return RowDraggableDirective;
}());
exports.RowDraggableDirective = RowDraggableDirective;
//# sourceMappingURL=row-draggable.directive.js.map