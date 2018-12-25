webpackJsonp([0],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterPageModule = /** @class */ (function () {
    function FilterPageModule() {
    }
    FilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */]),
            ],
        })
    ], FilterPageModule);
    return FilterPageModule;
}());

//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = /** @class */ (function () {
    function FilterPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.structure = { lower: 2999, upper: 20999 };
        this.filter = {};
    }
    FilterPage.prototype.onChange = function (ev) {
        console.log('Changed', ev);
    };
    FilterPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage.prototype.logForm = function () {
        console.log('this.filter');
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"C:\Users\user01\Desktop\abang-master\src\pages\filter\filter.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>filter</ion-title>\n      <ion-buttons end (click)="onClose()">\n        <button ion-button icon-end>\n          \n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n      \n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="logForm()">  \n  <ion-list>\n\n    <ion-item>\n      <ion-label>Free water</ion-label>\n      <ion-checkbox [(ngModel)]="filter.freewater" name="freewater"></ion-checkbox>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>With cr</ion-label>\n      <ion-checkbox [(ngModel)]="filter.withcr" name="withcr"></ion-checkbox>\n    </ion-item>\n  \n  \n    <ion-item>\n      <ion-label>No curfew</ion-label>\n      <ion-checkbox [(ngModel)]="filter.nocurfew" name="nocurfew"></ion-checkbox>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Pets allowed</ion-label>\n      <ion-checkbox [(ngModel)]="filter.petsallowed" name="petsallowed"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Onsite parking</ion-label>\n      <ion-checkbox [(ngModel)]="filter.onsiteparking" name="onsiteparking"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Free electricity</ion-label>\n      <ion-checkbox [(ngModel)]="filter.freelectricity" name="freelectricity"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>In-unit laundry</ion-label>\n      <ion-checkbox [(ngModel)]="filter.in-unitlaundry" name="in-unitlaundry"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Aircon</ion-label>\n      <ion-checkbox [(ngModel)]="filter.aircon" name="aircon"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>with CCTV</ion-label>\n      <ion-checkbox [(ngModel)]="filter.cctv" name="cctv"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>with security team</ion-label>\n      <ion-checkbox [(ngModel)]="filter.security" name="security"></ion-checkbox>\n    </ion-item>\n  \n     \n  </ion-list>\n  \n<ion-list>\n\n  <ion-list-header>\n    Structure\n    <ion-badge item-end color="dark">php{{structure.lower}}</ion-badge>\n    <ion-badge item-end color="dark">php{{structure.upper}}</ion-badge>\n  </ion-list-header>\n  <ion-item>\n    <ion-range min="1000" max="30000" dualKnobs="true" pin="true" [(ngModel)]="structure" name="structure" (ionChange)="onChange($event)" color="dark">\n      <ion-label range-left>1000</ion-label>\n      <ion-label range-right>30000</ion-label>\n    </ion-range>\n  </ion-item>\n\n</ion-list>\n     <button ion-button class="btn" type="submit" block>Add Todo</button>\n    </form>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\user01\Desktop\abang-master\src\pages\filter\filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=0.js.map