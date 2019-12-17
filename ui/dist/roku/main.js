(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _remote_remote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remote/remote.component */ "./src/app/remote/remote.component.ts");





var routes = [
    {
        path: 'remote',
        component: _remote_remote_component__WEBPACK_IMPORTED_MODULE_4__["RemoteComponent"]
    },
    {
        path: '**',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet class=\"mat-typography\"></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'roku';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_roku_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/roku.service */ "./src/app/services/roku.service.ts");
/* harmony import */ var _remote_remote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./remote/remote.component */ "./src/app/remote/remote.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _remote_remote_component__WEBPACK_IMPORTED_MODULE_8__["RemoteComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"]
            ],
            providers: [
                _services_roku_service__WEBPACK_IMPORTED_MODULE_7__["RokuService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n\n<a routerLink=\"remote\">\n  Remote\n</a>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/remote/remote.component.html":
/*!**********************************************!*\
  !*** ./src/app/remote/remote.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list\n  cols=\"3\"\n  [rowHeight]=\"rowHeight\"\n>\n  <mat-grid-tile>\n    <mat-form-field>\n      <mat-label>TV</mat-label>\n      <mat-select [(value)]=\"selectedId\">\n        <mat-option *ngFor=\"let tv of tvs\" \n          [value]=\"tv.id\"\n        >\n          {{ tv.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('volumeDown')\"\n    >\n      &#8609;\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('volumeUp')\"\n    >\n    &#8607;\n    </button>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-divider></mat-divider>\n\n<mat-grid-list \n  cols=\"3\"\n  [rowHeight]=\"rowHeight\"\n>\n  <mat-grid-tile>\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('back')\"\n    >\n      Back\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('*')\"\n    >\n      *\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('home')\"\n    >\n      Home\n    </button>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-divider></mat-divider>\n\n<mat-grid-list \n  cols=\"3\"\n  [rowHeight]=\"rowHeight\"\n>\n  <mat-grid-tile\n    colspan=\"3\"\n  >\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('up')\"\n    >\n      &#8679;\n    </button>\n  </mat-grid-tile\n  >\n  <mat-grid-tile>\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('left')\"\n    >\n      &#8678;\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('select')\"\n    >\n      OK\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('right')\"\n    >\n      &#8680;\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile\n    colspan=\"3\"\n  >\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('down')\"\n    >\n      &#8681;\n    </button>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-divider></mat-divider>\n\n<mat-grid-list \n  cols=\"3\"\n  [rowHeight]=\"rowHeight\"\n>\n  <mat-grid-tile>\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('rev')\"\n    >\n      &#10558;\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('play')\"\n    >\n      Play/Pause\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"primary\"\n      (click)=\"btnClick('fwd')\"\n    >\n      &#10559;\n    </button>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-divider></mat-divider>\n\n<mat-grid-list \n  cols=\"4\"\n  [rowHeight]=\"rowHeight\"\n>\n  <mat-grid-tile *ngFor=\"let key of keys\">\n    <button\n      mat-flat-button\n      type=\"button\"\n      color=\"basic\"\n      (click)=\"btnClick(key)\"\n    >\n      {{ key }}\n    </button>\n  </mat-grid-tile>\n</mat-grid-list>\n\n"

/***/ }),

/***/ "./src/app/remote/remote.component.scss":
/*!**********************************************!*\
  !*** ./src/app/remote/remote.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  font-variant: small-caps;\n  margin: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2JieS5lYXJsL0dpdEh1Yi9yb2t1L3VpL3NyYy9hcHAvcmVtb3RlL3JlbW90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZW1vdGUvcmVtb3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBtYXJnaW46IDZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/remote/remote.component.ts":
/*!********************************************!*\
  !*** ./src/app/remote/remote.component.ts ***!
  \********************************************/
/*! exports provided: RemoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteComponent", function() { return RemoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_roku_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/roku.service */ "./src/app/services/roku.service.ts");




var RemoteComponent = /** @class */ (function () {
    function RemoteComponent(snackBar, rokuService) {
        var _this = this;
        this.snackBar = snackBar;
        this.rokuService = rokuService;
        this.keys = [
            'home',
            'rev',
            'fwd',
            'play',
            'select',
            'left',
            'right',
            'down',
            'up',
            'back',
            'replay',
            'info',
            'backspace',
            'enter',
            'volumeDown',
            'volumeUp',
            'volumeMute',
            'inputTuner',
            'inputHDMI1',
            'inputHDMI2',
            'inputHDMI3',
            'inputHDMI4',
            'inputAV1',
            'channelUp',
            'channelDown'
        ].sort();
        this.keyCodeMap = {
            left: 'ArrowLeft',
            up: 'ArrowUp',
            right: 'ArrowRight',
            down: 'ArrowDown',
            play: 'Space',
            select: 'Enter'
        };
        this.duration = 3000;
        this.rowHeight = 80;
        this.rokuService
            .getTVs()
            .subscribe(function (tvs) {
            _this.tvs = tvs;
            _this.selectedId = _this.tvs[0].id;
        });
    }
    RemoteComponent.prototype.ngOnInit = function () { };
    RemoteComponent.prototype.handleKeyboardEvent = function (event) {
        var _this = this;
        Object.keys(this.keyCodeMap).some(function (name) {
            if (_this.keyCodeMap[name] === event.code) {
                _this.sendKey(name);
                return true;
            }
        });
    };
    RemoteComponent.prototype.btnClick = function (key) {
        this.sendKey(key);
    };
    RemoteComponent.prototype.sendKey = function (key) {
        var _this = this;
        this.rokuService
            .sendKey(this.selectedId, key)
            .subscribe(function (response) {
            if (response.error) {
                _this.snackBar
                    .open("Handled API error: " + response.error, 'OK', { duration: _this.duration });
            }
        }, function (err) { return _this.snackBar
            .open("Fatal Error\n" + JSON.stringify(err), 'OK', { duration: _this.duration }); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], RemoteComponent.prototype, "handleKeyboardEvent", null);
    RemoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remote',
            template: __webpack_require__(/*! ./remote.component.html */ "./src/app/remote/remote.component.html"),
            styles: [__webpack_require__(/*! ./remote.component.scss */ "./src/app/remote/remote.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _services_roku_service__WEBPACK_IMPORTED_MODULE_3__["RokuService"]])
    ], RemoteComponent);
    return RemoteComponent;
}());



/***/ }),

/***/ "./src/app/services/roku.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/roku.service.ts ***!
  \******************************************/
/*! exports provided: RokuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RokuService", function() { return RokuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RokuService = /** @class */ (function () {
    function RokuService(httpClient) {
        this.httpClient = httpClient;
        this.base = 'http://192.168.1.5/api/';
    }
    RokuService.prototype.getTVs = function () {
        return this.httpClient
            .get(this.base + "tvs");
    };
    RokuService.prototype.sendKey = function (tvId, key) {
        return this.httpClient
            .post(this.base + "tvs/" + tvId + "/keypress/" + key, {});
    };
    RokuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RokuService);
    return RokuService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bobby.earl/GitHub/roku/ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map