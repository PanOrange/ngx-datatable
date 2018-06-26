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
var RowDragService = /** @class */ (function () {
    function RowDragService() {
        // variable for holding if drag is active at the moment
        // This is important for dynamically setting z-index on drop areas
        // @see body.component.ts
        this.dragActive = false;
        /**
         * Event which will be emitted on Drag Start
         */
        this.onDragStart = new core_1.EventEmitter();
        /**
         * Event which will be emitted on Drag End
         */
        this.onDragEnd = new core_1.EventEmitter();
        this.currentDropDirective = null;
        this.row = null;
    }
    RowDragService.prototype.startDrag = function (row) {
        this.row = row;
        this.dragActive = true;
        this.onDragStart.emit();
    };
    RowDragService.prototype.endDrag = function () {
        this.row = null;
        this.dragActive = false;
        this.onDragEnd.emit();
        if (this.currentDropDirective !== null) {
            this.currentDropDirective.removeDragOverClass();
            this.currentDropDirective = null;
        }
    };
    RowDragService.prototype.setActiveDropElement = function (dropDirective) {
        if (this.currentDropDirective !== dropDirective) {
            if (this.currentDropDirective !== null) {
                this.currentDropDirective.removeDragOverClass();
                this.currentDropDirective = null;
            }
            dropDirective.addDragOverClass();
            this.currentDropDirective = dropDirective;
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RowDragService.prototype, "onDragStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RowDragService.prototype, "onDragEnd", void 0);
    RowDragService = __decorate([
        core_1.Injectable()
    ], RowDragService);
    return RowDragService;
}());
exports.RowDragService = RowDragService;
//# sourceMappingURL=row-drag.service.js.map