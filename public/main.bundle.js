webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment_moment_module__ = __webpack_require__("../../../../angular2-moment/moment.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment_moment_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_moment_moment_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_mail_mail_component__ = __webpack_require__("../../../../../src/app/components/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_file_manager_file_manager_component__ = __webpack_require__("../../../../../src/app/components/file-manager/file-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_contacts_contacts_component__ = __webpack_require__("../../../../../src/app/components/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_to_do_to_do_component__ = __webpack_require__("../../../../../src/app/components/to-do/to-do.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// components









// providers

var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_20__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'calendar',
        component: __WEBPACK_IMPORTED_MODULE_21__components_calendar_calendar_component__["a" /* CalendarComponent */]
    },
    {
        path: 'mail',
        component: __WEBPACK_IMPORTED_MODULE_22__components_mail_mail_component__["a" /* MailComponent */]
    },
    {
        path: 'file-manager',
        component: __WEBPACK_IMPORTED_MODULE_23__components_file_manager_file_manager_component__["a" /* FileManagerComponent */]
    },
    {
        path: 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_24__components_contacts_contacts_component__["a" /* ContactsComponent */]
    },
    {
        path: 'to-do',
        component: __WEBPACK_IMPORTED_MODULE_25__components_to_do_to_do_component__["a" /* ToDoComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_mail_mail_component__["a" /* MailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_file_manager_file_manager_component__["a" /* FileManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_to_do_to_do_component__["a" /* ToDoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular2_moment_moment_module__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_checkbox__["a" /* MatCheckboxModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_26__providers_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n<div class=\"main-app-component slide-in-from-bottom\">\r\n  calendar\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.afService.isUserSignedIn();
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__("../../../../../src/app/components/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n<div class=\"main-app-component slide-in-from-bottom\">\r\n  contacts\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.afService.isUserSignedIn();
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/components/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n<div class=\"main-app-component slide-in-from-bottom\">\r\n  dashboard\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userInfo = user;
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/file-manager/file-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/file-manager/file-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n<div class=\"main-app-component slide-in-from-bottom\">\r\n  filemanager\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/file-manager/file-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileManagerComponent = /** @class */ (function () {
    function FileManagerComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    FileManagerComponent.prototype.ngOnInit = function () {
        this.afService.isUserSignedIn();
    };
    FileManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-manager',
            template: __webpack_require__("../../../../../src/app/components/file-manager/file-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/file-manager/file-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], FileManagerComponent);
    return FileManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n  color: #000000de;\r\n}\r\n\r\n.login-page-wrapper {\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/mat-dark-bg.jpg")) + ");\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 100vh;\r\n  width: 100%;\r\n}\r\n\r\n.form-wrapper {\r\n  background: #fff;\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  padding: 85px 15px;\r\n}\r\n\r\n.app-logo {\r\n  display: block;\r\n  margin: 0 auto 32px;\r\n  max-width: 100%;\r\n}\r\n\r\n.app-title {\r\n  font-size: 20px;\r\n  margin: 16px 0 32px 0;\r\n}\r\n\r\n.app-title span {\r\n  color: #9c27b0;\r\n}\r\n\r\n.login-wrapper {\r\n  position: relative;\r\n}\r\n\r\n.btn-google {\r\n  display: block;\r\n  margin: 0 auto;\r\n  position: relative;\r\n}\r\n\r\n.btn-google::before,\r\n.btn-google::after {\r\n  background: rgba(0, 0, 0, 0.12);\r\n  content: '';\r\n  height: 2px;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: 30px;\r\n}\r\n\r\n.btn-google::before {\r\n  left: -30px;\r\n}\r\n\r\n.btn-google::after {\r\n  right: -30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page-wrapper\">\r\n  <div class=\"form-wrapper slide-in-from-bottom\">\r\n    <img src=\"assets/chrono.png\" class=\"app-logo\" height=\"130\" width=\"130\">\r\n    <p class=\"text-center app-title\">WELCOME TO\r\n      <span>CRONUS</span>\r\n    </p>\r\n    <div class=\"login-wrapper\">\r\n      <!-- <div class=\"separator sep-left\"></div>\r\n      <div class=\"separator sep-right\"></div> -->\r\n      <button (click)=\"onSignInClick()\" mat-raised-button color=\"warn\" class=\"btn-google\">Login with Google</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSignInClick = function () {
        this.afService.signInWithGoogle();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/mail/mail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mail/mail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n<div class=\"main-app-component slide-in-from-bottom\">\r\n  mail\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/mail/mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailComponent = /** @class */ (function () {
    function MailComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    MailComponent.prototype.ngOnInit = function () {
        this.afService.isUserSignedIn();
    };
    MailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mail',
            template: __webpack_require__("../../../../../src/app/components/mail/mail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/mail/mail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MailComponent);
    return MailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav-container {\r\n  bottom: 0;\r\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n          box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  left: 0;\r\n  height: 100vh;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\r\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\r\n  width: 256px;\r\n  z-index: 8;\r\n}\r\n\r\n.sidenav-container.closed-side {\r\n  width: 64px;\r\n}\r\n\r\n.sidenav-container.closed-side .sidenav-header {\r\n  padding: 0 13px;\r\n}\r\n\r\n.sidenav-container.closed-side .logo-text,\r\n.sidenav-container.closed-side .nav-link-title {\r\n  opacity: 0;\r\n  -webkit-transition: opacity 0.2s ease;\r\n  transition: opacity 0.2s ease;\r\n}\r\n\r\n.sidenav-content {\r\n  background: #2d323e;\r\n  overflow-x: hidden;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.sidenav-header {\r\n  background-color: hsla(0, 0%, 100%, 0.05);\r\n  -webkit-box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),\r\n    0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\r\n    0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n  color: hsla(0, 0%, 100%, 0.87) !important;\r\n  height: 64px;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n  min-height: 64px;\r\n  padding: 0 16px 0 24px;\r\n  -webkit-transition: padding 0.2s ease;\r\n  transition: padding 0.2s ease;\r\n}\r\n\r\n.sidenav-header .logo-icon {\r\n  height: 38px;\r\n  width: 38px;\r\n}\r\n\r\n.sidenav-header .logo-text {\r\n  letter-spacing: 0.4px;\r\n  margin-left: 8px;\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\n.sidenav-items-wrapper {\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1;\r\n  flex: 1;\r\n}\r\n\r\n.sidenav-items-wrapper .group-title {\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  color: rgba(255, 255, 255, 0.498);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  height: 48px;\r\n  margin-top: 8px;\r\n  padding-left: 24px;\r\n  position: relative;\r\n  text-transform: uppercase;\r\n  white-space: nowrap;\r\n}\r\n\r\n.sidenav-container.closed-side .group-title {\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.sidenav-container.closed-side .group-title .hint-text {\r\n  opacity: 0;\r\n  -webkit-transition: opacity 0.2s ease;\r\n  transition: opacity 0.2s ease;\r\n}\r\n\r\n.sidenav-container.closed-side .group-title::before {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  min-width: 1rem;\r\n  border-top: 2px solid;\r\n  opacity: 0.2;\r\n}\r\n\r\n.drawer-container {\r\n  bottom: 0;\r\n  -webkit-box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),\r\n    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n          box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),\r\n    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n  right: 0;\r\n  height: 100vh;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\r\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\r\n  width: 0;\r\n  z-index: 10;\r\n}\r\n\r\n.drawer-container.opened {\r\n  width: 264px;\r\n}\r\n\r\n.drawer-content {\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n}\r\n\r\n.drawer-content .date-wrapper {\r\n  border-bottom: 1px solid #0000004f;\r\n  padding: 16px;\r\n}\r\n\r\n.drawer-content .sub-header {\r\n  color: #0000008a;\r\n  margin: 10px 0;\r\n}\r\n\r\n.drawer-content .sub-header.label {\r\n  font-size: 14px;\r\n}\r\n\r\n.drawer-content .sub-header.date.time {\r\n  font-size: 20px;\r\n}\r\n\r\n.drawer-content .sub-header.date {\r\n  font-size: 30px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.nav-link {\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  color: #fff;\r\n  padding: 0px 24px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-decoration: none !important;\r\n  height: 48px;\r\n}\r\n\r\n.nav-link:hover {\r\n  background-color: rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n.nav-link.active {\r\n  background-color: #673ab7;\r\n}\r\n\r\n.nav-icon {\r\n  font-size: 16px;\r\n  height: 16px;\r\n  line-height: 16px;\r\n  margin-right: 16px;\r\n  min-width: 16px;\r\n  min-height: 16px;\r\n  width: 16px;\r\n}\r\n\r\n.nav-link-title {\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1 1 0%;\r\n      flex: 1 1 0%;\r\n  font-size: 14px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.main-toolbar-wrapper {\r\n  margin-left: 256px;\r\n  -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\r\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\r\n}\r\n\r\n.toolbar-contents {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.toolbar-contents .content-right {\r\n  height: 100%;\r\n  -webkit-box-pack: end;\r\n  -ms-flex-pack: end;\r\n  justify-content: flex-end;\r\n  width: 100%;\r\n}\r\n\r\n.toolbar-contents .content-right .profile-box {\r\n  height: 100%;\r\n}\r\n\r\n.toolbar-contents .content-right .profile-box img {\r\n  border-radius: 50%;\r\n  height: 40px;\r\n  margin-right: 8px;\r\n}\r\n\r\n.toolbar-contents .content-right .profile-box p {\r\n  color: #000000de;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n\r\n.top-nav-ctrl {\r\n  height: 100%;\r\n  min-width: 0px;\r\n  padding: 0 10px;\r\n  width: 64px;\r\n}\r\n\r\n.top-nav-ctrl .ctrl-icon {\r\n  color: #0000008a;\r\n  font-size: 24px;\r\n}\r\n\r\n.btn-signout {\r\n  border-left: 1px solid #0000004f;\r\n  border-right: 1px solid #0000004f;\r\n  margin-left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!userInfo; else doneFetchingData\" class=\"loading-overlay flex-center-vertical-horizontal flex-column\">\r\n  <img src=\"./assets/chrono.png\" height=\"80\" width=\"80\">\r\n  <mat-progress-spinner color=\"primary\" mode=\"indeterminate\">\r\n  </mat-progress-spinner>\r\n</div>\r\n<ng-template #doneFetchingData>\r\n  <mat-sidenav-container class=\"sidenav-container\" id=\"sidenavContainer\">\r\n    <mat-sidenav class=\"sidenav-content\" mode=\"side\" opened=\"true\">\r\n      <div class=\"sidenav-header flex-center-vertical\">\r\n        <div class=\"logo flex-center-vertical\">\r\n          <img src=\"./assets/chrono.png\" class=\"logo-icon\">\r\n          <span class=\"logo-text\">CRONUS</span>\r\n        </div>\r\n        <button *ngIf=\"!isOpen; else closed\" (click)=\"onCloseMenu()\" color=\"primary\" mat-mini-fab class=\"bg-transparent\" id=\"menuToggle\">\r\n          <mat-icon>arrow_back</mat-icon>\r\n        </button>\r\n        <ng-template #closed>\r\n          <button (click)=\"onOpenMenu()\" color=\"primary\" mat-mini-fab class=\"bg-transparent\" id=\"menuOpen\">\r\n            <mat-icon>dehaze</mat-icon>\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"sidenav-items-wrapper\">\r\n        <div class=\"group-title\">\r\n          <span class=\"hint-text\">Applications</span>\r\n        </div>\r\n        <div class=\"group-items\">\r\n          <a routerLink='/dashboard' routerLinkActive=\"active\" class=\"nav-link flex-center-vertical\">\r\n            <mat-icon class=\"nav-icon\">dashboard</mat-icon>\r\n            <span class=\"nav-link-title\">Dashboard</span>\r\n          </a>\r\n          <a routerLink='/calendar' routerLinkActive=\"active\" class=\"nav-link flex-center-vertical\">\r\n            <mat-icon class=\"nav-icon\">today</mat-icon>\r\n            <span class=\"nav-link-title\">Calendar</span>\r\n          </a>\r\n          <a routerLink='/mail' routerLinkActive=\"active\" class=\"nav-link flex-center-vertical\">\r\n            <mat-icon class=\"nav-icon\">email</mat-icon>\r\n            <span class=\"nav-link-title\">Mail</span>\r\n          </a>\r\n          <a routerLink='/file-manager' routerLinkActive=\"active\" class=\"nav-link flex-center-vertical\">\r\n            <mat-icon class=\"nav-icon\">folder</mat-icon>\r\n            <span class=\"nav-link-title\">File Manager</span>\r\n          </a>\r\n          <a routerLink='/contacts' routerLinkActive=\"active\" class=\"nav-link flex-center-vertical\">\r\n            <mat-icon class=\"nav-icon\">account_box</mat-icon>\r\n            <span class=\"nav-link-title\">Contacts</span>\r\n          </a>\r\n          <a routerLink='/to-do' routerLinkActive=\"active\" class=\"nav-link flex-center-vertical\">\r\n            <mat-icon class=\"nav-icon\">check_box</mat-icon>\r\n            <span class=\"nav-link-title\">To-Do</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </mat-sidenav>\r\n  </mat-sidenav-container>\r\n  <div class=\"toolbar-wrapper\">\r\n    <mat-toolbar class=\"mat-elevation bg-white no-padding\">\r\n      <div class=\"toolbar-contents\">\r\n        <div class=\"content-right flex-center-vertical\">\r\n          <div class=\"profile-box flex-center-vertical\">\r\n            <img src=\"{{userInfo.photoURL}}\" alt=\"\">\r\n            <p>{{userInfo.displayName}}</p>\r\n          </div>\r\n          <button mat-button (click)=\"onSignOutClick()\" class=\"top-nav-ctrl btn-signout\">\r\n            <mat-icon class=\"ctrl-icon\" aria-label=\"Sign out button\">exit_to_app</mat-icon>\r\n          </button>\r\n          <button mat-button (click)=\"onRightMenuClick()\" class=\"top-nav-ctrl\">\r\n            <mat-icon class=\"ctrl-icon\" aria-label=\"Right menu toggle\">format_list_bulleted</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </mat-toolbar>\r\n  </div>\r\n  <mat-sidenav-container class=\"drawer-container\" id=\"drawerContainer\">\r\n    <mat-sidenav class=\"drawer-content\" mode=\"side\" opened=\"true\">\r\n      <div class=\"date-wrapper\">\r\n        <h3 class=\"sub-header label\">Today</h3>\r\n        <p class=\"sub-header date time\">{{today | date:'HH:mm:ss a'}}</p>\r\n        <p class=\"sub-header date\">{{today | date: 'EEEE'}}</p>\r\n        <p class=\"sub-header date\">\r\n          {{today | date: 'd'}}\r\n          <sup>{{ordinal}}</sup>\r\n          {{today | date: 'LLLL'}}\r\n        </p>\r\n      </div>\r\n    </mat-sidenav>\r\n  </mat-sidenav-container>\r\n  <div class=\"body-overlay\" id=\"bodyOverlay\"></div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { setInterval } from 'timers';
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(afService, afAuth) {
        this.afService = afService;
        this.afAuth = afAuth;
        this.isOpen = false;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userInfo = user;
                console.log(_this.userInfo, 'side');
            }
        });
        this.updateTime();
        var day = new Date();
        this.getGetOrdinal(day.getDate());
    };
    SidenavComponent.prototype.updateTime = function () {
        var _this = this;
        setInterval(function () {
            _this.today = Date.now();
        }, 1000);
    };
    SidenavComponent.prototype.getGetOrdinal = function (n) {
        var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
        this.ordinal = s[(v - 20) % 10] || s[v] || s[0];
    };
    SidenavComponent.prototype.onCloseMenu = function () {
        var sidenavContainer = document.getElementById('sidenavContainer');
        document.body.classList.add('menu-collapsed');
        sidenavContainer.classList.add('closed-side');
        this.isOpen = true;
        this.onHoverMenu();
    };
    SidenavComponent.prototype.enterEvent = function () {
        var sidenavContainer = document.getElementById('sidenavContainer');
        sidenavContainer.classList.remove('closed-side');
        document.body.classList.remove('menu-collapsed');
    };
    SidenavComponent.prototype.leaveEvent = function () {
        var sidenavContainer = document.getElementById('sidenavContainer');
        sidenavContainer.classList.add('closed-side');
        document.body.classList.add('menu-collapsed');
    };
    SidenavComponent.prototype.onHoverMenu = function () {
        var sidenavContainer = document.getElementById('sidenavContainer');
        if (this.isOpen === true) {
            sidenavContainer.addEventListener('mouseenter', this.enterEvent);
            sidenavContainer.addEventListener('mouseleave', this.leaveEvent);
        }
    };
    SidenavComponent.prototype.onOpenMenu = function () {
        var sidenavContainer = document.getElementById('sidenavContainer');
        sidenavContainer.classList.remove('closed-side');
        this.isOpen = false;
        this.removeEvents();
    };
    SidenavComponent.prototype.removeEvents = function () {
        var sidenavContainer = document.getElementById('sidenavContainer');
        document.body.classList.remove('menu-collapsed');
        sidenavContainer.removeEventListener('mouseenter', this.enterEvent);
        sidenavContainer.removeEventListener('mouseleave', this.leaveEvent);
    };
    SidenavComponent.prototype.onSignOutClick = function () {
        this.afService.signOut();
    };
    SidenavComponent.prototype.onRightMenuClick = function () {
        var drawer = document.getElementById('drawerContainer');
        var overlay = document.getElementById('bodyOverlay');
        drawer.classList.add('opened');
        overlay.classList.add('show-overlay');
        if (overlay.classList.contains('show-overlay')) {
            overlay.addEventListener('click', function (e) {
                drawer.classList.remove('opened');
                overlay.classList.remove('show-overlay');
            });
        }
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/to-do/to-do.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-task-btn {\r\n  display: block;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  width: 100%;\r\n}\r\n\r\n.search-wrapper-col {\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  width: 80%;\r\n}\r\n\r\n.search {\r\n  background: #fff;\r\n  -webkit-box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2),\r\n    0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12);\r\n          box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2),\r\n    0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12);\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: 56px;\r\n  line-height: 56px;\r\n  padding: 18px;\r\n  width: 100%;\r\n}\r\n\r\n.search input {\r\n  border: none;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  color: rgba(0, 0, 0, 0.54);\r\n  height: 100%;\r\n  font-size: 14px;\r\n  outline: none;\r\n  padding-left: 16px;\r\n  width: 100%;\r\n}\r\n\r\n.search-icon {\r\n  color: rgba(0, 0, 0, 0.54);\r\n  font-size: 24px;\r\n  height: 24px;\r\n  line-height: 24px;\r\n  width: 24px;\r\n}\r\n\r\n.toolbar-wrapper {\r\n  -ms-flex-item-align: end;\r\n      align-self: flex-end;\r\n  height: 56px;\r\n  width: 100%;\r\n}\r\n\r\n.todo-toolbar {\r\n  background: #fff;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\r\n  max-height: 56px;\r\n  padding: 18px;\r\n}\r\n\r\n.back-to-list-btn {\r\n  border-radius: 50%;\r\n  color: rgba(0, 0, 0, 0.54);\r\n  width: 24px;\r\n}\r\n\r\n.todo-filters {\r\n  width: 20%;\r\n}\r\n\r\n.todo-list,\r\n.todo-add {\r\n  width: 80%;\r\n}\r\n\r\n.todo-section {\r\n  padding-left: 24px;\r\n  padding-right: 24px;\r\n}\r\n\r\n.addtodo-toolbar {\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\r\n  padding: 24px;\r\n}\r\n\r\n.addtodo-toolbar span {\r\n  color: rgba(0, 0, 0, 0.87);\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/to-do/to-do.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n<div class=\"main-app-component slide-in-from-bottom\">\r\n  <div class=\"hero-wrapper flex-container\">\r\n    <div class=\"page-title-col flex-center-vertical\">\r\n      <p class=\"page-title flex-container\">\r\n        <mat-icon class=\"page-icon\">check_box</mat-icon>\r\n        <span>To-do</span>\r\n      </p>\r\n      <button mat-raised-button (click)=\"openAddTaskForm()\" color=\"primary\" class=\"add-task-btn\">Add Task</button>\r\n    </div>\r\n    <div class=\"search-wrapper-col flex-container\">\r\n      <div class=\"search flex-center-vertical\">\r\n        <mat-icon class=\"search-icon\">search</mat-icon>\r\n        <input type=\"text\">\r\n      </div>\r\n      <div class=\"toolbar-wrapper\">\r\n        <mat-toolbar class=\"todo-toolbar\">\r\n          <mat-checkbox *ngIf=\"!addTaskState; else backToList\"></mat-checkbox>\r\n        </mat-toolbar>\r\n        <ng-template #backToList>\r\n          <button class=\"back-to-list-btn\" mat-icon-button (click)=\"closeAddTaskForm()\">\r\n            <mat-icon>arrow_back</mat-icon>\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"todo-section flex-container\">\r\n    <div class=\"todo-filters\">\r\n      test\r\n    </div>\r\n    <div class=\"todo-list\" *ngIf=\"!addTaskState; else addTask\">\r\n      todo-list\r\n    </div>\r\n    <ng-template #addTask>\r\n      <div class=\"todo-add\">\r\n        <mat-toolbar class=\"addtodo-toolbar slide-in-from-bottom\">\r\n          <mat-checkbox>\r\n            <span>Mark as done</span>\r\n          </mat-checkbox>\r\n        </mat-toolbar>\r\n      </div>\r\n    </ng-template>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/to-do/to-do.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToDoComponent = /** @class */ (function () {
    function ToDoComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    ToDoComponent.prototype.ngOnInit = function () {
        this.afService.isUserSignedIn();
    };
    ToDoComponent.prototype.openAddTaskForm = function () {
        this.addTaskState = true;
    };
    ToDoComponent.prototype.closeAddTaskForm = function () {
        this.addTaskState = false;
    };
    ToDoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-to-do',
            template: __webpack_require__("../../../../../src/app/components/to-do/to-do.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/to-do/to-do.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ToDoComponent);
    return ToDoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/providers/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, zone) {
        this.afAuth = afAuth;
        this.router = router;
        this.zone = zone;
    }
    AuthService.prototype.isUserSignedIn = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userInfo = user;
                return _this.userInfo;
            }
            else {
                _this.router.navigate(['']);
            }
        });
    };
    AuthService.prototype.signInWithGoogle = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        this.afAuth.auth
            .signInWithPopup(provider)
            .then(function (result) {
            // const signInInfo = {
            var token = result.credential.accessToken;
            var user = result.user;
            _this.zone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            // };
        })
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorMessage);
        });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth
            .signOut()
            .then(function () {
            _this.router.navigate(['']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/assets/mat-dark-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mat-dark-bg.002627c6241449b9ce04.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyD7JzyGqHkvYqRQ64wgh1bsK6eEvscfqO4',
        authDomain: 'cronus-c5548.firebaseapp.com',
        databaseURL: 'https://cronus-c5548.firebaseio.com',
        projectId: 'cronus-c5548',
        storageBucket: 'cronus-c5548.appspot.com',
        messagingSenderId: '98935531261'
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map