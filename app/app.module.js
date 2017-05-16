"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var angular_tree_component_1 = require("angular-tree-component");
var app_service_1 = require("./app.service");
var modal_1 = require("ngx-bootstrap/modal");
var ngx_contextmenu_1 = require("ngx-contextmenu");
//import { ModalModule } from 'angular2-modal';
//import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_tree_component_1.TreeModule,
            modal_1.ModalModule.forRoot(),
            ngx_contextmenu_1.ContextMenuModule
        ],
        exports: [],
        declarations: [app_component_1.AppComponent],
        providers: [app_service_1.AppService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map