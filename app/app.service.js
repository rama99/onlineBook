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
var http_1 = require("@angular/http");
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.nodes = [];
    }
    AppService.prototype.loaddata = function () {
        /*  this.nodes.push( {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    }); */
        return this.nodes;
    };
    AppService.prototype.addChapter = function (newChapter) {
        this.nodes.push({
            id: 4,
            name: newChapter,
            overView: "All about overview",
            children: [
                { id: 2, name: 'child1', children: [
                        { id: 2, name: 'A' },
                        { id: 3, name: 'B' }
                    ] }
            ]
        });
    };
    AppService.prototype.getChapters = function () {
        return this.http.get('http://localhost:9000/chapters');
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map