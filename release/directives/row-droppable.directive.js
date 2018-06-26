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
var RowDropDirective = /** @class */ (function () {
    function RowDropDirective(element, renderer, dragService) {
        this.element = element;
        this.renderer = renderer;
        this.dragService = dragService;
        this.onDropEvent = new core_1.EventEmitter();
        this.options = {};
    }
    RowDropDirective.prototype.addDragOverClass = function () {
        this.renderer.addClass(this.element.nativeElement, this.dragOverClass);
    };
    RowDropDirective.prototype.removeDragOverClass = function () {
        this.renderer.removeClass(this.element.nativeElement, this.dragOverClass);
    };
    RowDropDirective.prototype.onDragOver = function (event) {
        var _a = this.options.zone, zone = _a === void 0 ? 'zone' : _a;
        this.dragService.setActiveDropElement(this);
        event.preventDefault();
    };
    RowDropDirective.prototype.onDragLeave = function () {
        this.removeDragOverClass();
    };
    RowDropDirective.prototype.onDrop = function (event) {
        var data = Number.parseInt(event.dataTransfer.getData('data'));
        this.removeDragOverClass();
        this.dragService.endDrag();
        this.onDropEvent.emit(data);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RowDropDirective.prototype, "dragActiveClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RowDropDirective.prototype, "dragOverClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RowDropDirective.prototype, "onDropEvent", void 0);
    __decorate([
        core_1.HostListener('dragenter', ['$event']),
        core_1.HostListener('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], RowDropDirective.prototype, "onDragOver", null);
    __decorate([
        core_1.HostListener('dragexit', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RowDropDirective.prototype, "onDragLeave", null);
    __decorate([
        core_1.HostListener('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], RowDropDirective.prototype, "onDrop", null);
    RowDropDirective = __decorate([
        core_1.Directive({
            selector: '[row-droppable]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2,
            services_1.RowDragService])
    ], RowDropDirective);
    return RowDropDirective;
}());
exports.RowDropDirective = RowDropDirective;
//# sourceMappingURL=row-droppable.directive.js.map