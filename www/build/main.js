webpackJsonp([1],{

/***/ 187:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/filter/filter.module": [
		464,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 228;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user1_user1__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user2_user2__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onGoToUser1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user1_user1__["a" /* User1Page */]);
    };
    HomePage.prototype.onGoToUsers2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user2_user2__["a" /* User2Page */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\user01\Desktop\abang-master\src\pages\home\home.html"*/'\n<ion-header>\n\n  \n\n</ion-header>\n\n\n<ion-content padding class="bg">\n     \n     <ion-row>\n          <ion-col> </ion-col>\n          <ion-col col-6>\n          </ion-col>\n          <ion-col></ion-col>\n     </ion-row>    \n     <ion-row>\n          <ion-col> </ion-col>\n          <ion-col col-6>\n          <img src="../../assets/imgs/2000px-House.svg.png" alt="ikwhdiwd">\n\n          </ion-col>\n          <ion-col></ion-col>\n     </ion-row>    \n        \n\n\n          <ion-grid class="margin-user"  >\n              \n              \n               \n               <ion-row  >\n                       \n              <ion-col col-12 >  \n                   <button   ion-button round outline class=\'btn\' (click)="onGoToUser1()">I\'m just browsing.</button>\n              </ion-col>\n      \n                        \n              </ion-row>\n\n              <ion-row >\n                         \n                <ion-col col-12> \n                     <button  ion-button round outline class=\'btn\'(click)="onGoToUsers2()">I\'m a bhouse owner.</button>\n                    \n                </ion-col>    \n                          \n               </ion-row>\n          \n              </ion-grid>\n     \n     \n      \n          \n  \n</ion-content>\n\n   \n  \n  \n\n\n'/*ion-inline-end:"C:\Users\user01\Desktop\abang-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User1Page = /** @class */ (function () {
    function User1Page(modalCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    User1Page.prototype.doConfirm = function () {
        var alert = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    User1Page.prototype.onGoToFilter = function () {
        var modalPage = this.modalCtrl.create('FilterPage', {}, {
            enterAnimation: 'modal-translate-up-enter',
            leaveAnimation: 'modal-translate-up-leave'
        });
        modalPage.onDidDismiss(function (data) {
        });
        modalPage.present();
    };
    User1Page.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    User1Page.prototype.loadMap = function () {
        // This code is necessary for browser
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* Environment */].setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBv0UmuFOwhuIVMYK9X9RuaeqcgLJMC-k4',
            'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBv0UmuFOwhuIVMYK9X9RuaeqcgLJMC-k4'
        });
        var mapOptions = {
            camera: {
                target: {
                    lat: 10.302870,
                    lng: 123.892940
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMaps */].create('map_canvas', mapOptions);
        var marker = this.map.addMarkerSync({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 10.302292,
                lng: 123.893222
            }
        });
        marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
            alert('clicked');
        });
    };
    User1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user1',template:/*ion-inline-start:"C:\Users\user01\Desktop\abang-master\src\pages\user1\user1.html"*/'\n<ion-header>\n\n  <ion-navbar >\n    <ion-buttons end> <button ion-button   (click)="onGoToFilter()"clear>Filter</button></ion-buttons> \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n        <ion-grid class="grid-overlay">\n            \n              \n              <ion-row >\n                 \n           \n                <ion-col >\n                      <ion-searchbar  \n                        class="search" >\n                      </ion-searchbar> \n                     <button   ion-button color="secondary" block \n                        class=\'btn2\'(click)="doConfirm()"> <ion-icon name="locate">\n                     </ion-icon> Locate me</button>\n                </ion-col>\n              </ion-row>\n       </ion-grid>\n       \n         \n           \n\n              <div id="map_canvas">\n              </div>\n  \n \n</ion-content>\n'/*ion-inline-end:"C:\Users\user01\Desktop\abang-master\src\pages\user1\user1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], User1Page);
    return User1Page;
}());

//# sourceMappingURL=user1.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var User2Page = /** @class */ (function () {
    function User2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    User2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad User2Page');
    };
    User2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user2',template:/*ion-inline-start:"C:\Users\user01\Desktop\abang-master\src\pages\user2\user2.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>user2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user01\Desktop\abang-master\src\pages\user2\user2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], User2Page);
    return User2Page;
}());

//# sourceMappingURL=user2.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(409);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user1_user1__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user2_user2__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__transitions_on_enter_translate_transition__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__transitions_on_leave_translate_transition__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = /** @class */ (function () {
    function AppModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    AppModule.prototype.setCustomTransitions = function () {
        this.config.setTransition('modal-translate-up-enter', __WEBPACK_IMPORTED_MODULE_9__transitions_on_enter_translate_transition__["a" /* ModalTranslateEnterTransition */]);
        this.config.setTransition('modal-translate-up-leave', __WEBPACK_IMPORTED_MODULE_10__transitions_on_leave_translate_transition__["a" /* ModalTranslateLeaveTransition */]);
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user1_user1__["a" /* User1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user2_user2__["a" /* User2Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user1_user1__["a" /* User1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user2_user2__["a" /* User2Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__["b" /* GoogleMaps */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\user01\Desktop\abang-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\user01\Desktop\abang-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTranslateEnterTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(35);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModalTranslateEnterTransition = /** @class */ (function (_super) {
    __extends(ModalTranslateEnterTransition, _super);
    function ModalTranslateEnterTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalTranslateEnterTransition.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'transform': 'translateX(100%);', 'opacity': 1 });
        wrapper.fromTo('transform', 'translateX(100%)', 'translateX(0)');
        wrapper.fromTo('opacity', 1, 1);
        this
            .element(this.enteringView.pageRef())
            .duration(500)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalTranslateEnterTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* PageTransition */]));

//# sourceMappingURL=on-enter-translate.transition.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTranslateLeaveTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(35);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModalTranslateLeaveTransition = /** @class */ (function (_super) {
    __extends(ModalTranslateLeaveTransition, _super);
    function ModalTranslateLeaveTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalTranslateLeaveTransition.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Animation */](this.plt, ele.querySelector('.wrapper'));
        wrapper.beforeStyles({ 'transform': 'translateX(100%)', 'opacity': 1 });
        wrapper.fromTo('transform', 'translateX(0)', 'translateX(100%)');
        wrapper.fromTo('opacity', 1, 1);
        contentWrapper.fromTo('opacity', 1, 0);
        this
            .element(this.leavingView.pageRef())
            .duration(500)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(contentWrapper)
            .add(wrapper);
    };
    return ModalTranslateLeaveTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* PageTransition */]));

//# sourceMappingURL=on-leave-translate.transition.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.js.map