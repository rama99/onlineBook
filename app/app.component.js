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
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var angular_tree_component_1 = require("angular-tree-component");
//import { Overlay } from 'angular2-modal';
//import { Modal } from 'angular2-modal/plugins/bootstrap';
var ngx_contextmenu_1 = require("ngx-contextmenu");
var AppComponent = (function () {
    function AppComponent(service, contextMenuService) {
        this.service = service;
        this.contextMenuService = contextMenuService;
        this.items = [
            { name: 'John', otherProperty: 'Foo' },
            { name: 'Joe', otherProperty: 'Bar' }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.nodes = this.service.loaddata();
        this.allChapters = this.service.getChapters();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.onActivate = function () {
        alert('onActivate');
    };
    AppComponent.prototype.go = function (node) {
        console.log('goooooooooooo');
        alert(JSON.stringify(node.data));
        this.content = "data comes here......";
    };
    AppComponent.prototype.addChapter = function () {
        console.log(this.newChapter);
        this.service.addChapter(this.newChapter);
        this.tree.treeModel.update();
        //lgModal.hide();
    };
    AppComponent.prototype.onClick = function () {
        /*  this.modal.alert()
              .size('lg')
              .showClose(true)
              .title('A simple Alert style modal window')
              .body(`
                  <h4>Alert is a classic (title/body/footer) 1 button modal window that
                  does not block.</h4>
                  <b>Configuration:</b>
                  <ul>
                      <li>Non blocking (click anywhere outside to dismiss)</li>
                      <li>Size large</li>
                      <li>Dismissed with default keyboard key (ESC)</li>
                      <li>Close wth button click</li>
                      <li>HTML content</li>
                  </ul>`)
              .open(); */
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(angular_tree_component_1.TreeComponent),
    __metadata("design:type", angular_tree_component_1.TreeComponent)
], AppComponent.prototype, "tree", void 0);
__decorate([
    core_1.ViewChild(ngx_contextmenu_1.ContextMenuComponent),
    __metadata("design:type", ngx_contextmenu_1.ContextMenuComponent)
], AppComponent.prototype, "basicMenu", void 0);
__decorate([
    core_1.ViewChild(ngx_contextmenu_1.ContextMenuComponent),
    __metadata("design:type", ngx_contextmenu_1.ContextMenuComponent)
], AppComponent.prototype, "basicMenu", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        ngx_contextmenu_1.ContextMenuService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map