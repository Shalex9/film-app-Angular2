webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NowPlayingFilmsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NowPlayingFilmsComponent = (function () {
    function NowPlayingFilmsComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        this.loading = false;
        this.index = 1;
        this.selectedView = "yCards";
    }
    NowPlayingFilmsComponent.prototype.ngOnInit = function () {
        this.filmName = "";
        this.getNowPlayingFilms();
    };
    NowPlayingFilmsComponent.prototype.isFilmListEmpty = function () {
        return this.filmList && !this.filmList.length;
    };
    NowPlayingFilmsComponent.prototype.setNewCardView = function (newCardView) {
        this.selectedView = newCardView;
    };
    NowPlayingFilmsComponent.prototype.getNowPlayingFilms = function () {
        var _this = this;
        this.loading = true;
        this.filmCardService.getNowPlayingFilms().subscribe(function (data) {
            _this.filmList = data;
            _this.loading = false;
        });
    };
    NowPlayingFilmsComponent.prototype.getFilmsBySearch = function (filmName) {
        var _this = this;
        this.filmName = filmName;
        this.loading = true;
        this.filmCardService.getSearchFilms(this.filmName).subscribe(function (data) {
            _this.filmList = data;
            _this.loading = false;
        });
    };
    NowPlayingFilmsComponent.prototype.addNowPlayingFilms = function (index, newIndex) {
        var _this = this;
        this.loading = true;
        this.max = this.filmList.length - 1;
        if (this.index < this.max) {
            this.newIndex = this.index++;
        }
        this.filmCardService.getNextNowPlayingFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = _this.filmList.concat(data);
            _this.loading = false;
        });
    };
    NowPlayingFilmsComponent.prototype.next = function (filmName, index, newIndex) {
        var _this = this;
        this.max = this.filmList.length - 1;
        if (this.index < this.max) {
            this.newIndex = this.index++;
        }
        this.filmCardService.getNextNowPlayingFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = data;
        });
    };
    NowPlayingFilmsComponent.prototype.prev = function (filmName, index, newIndex) {
        var _this = this;
        this.max = this.filmList.length - 1;
        if (this.index > 1) {
            this.index--;
        }
        this.filmCardService.getNextNowPlayingFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = data;
        });
    };
    return NowPlayingFilmsComponent;
}());
NowPlayingFilmsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'now-playing-films',
        template: __webpack_require__(250),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _a || Object])
], NowPlayingFilmsComponent);

var _a;
//# sourceMappingURL=now-playing-films.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularFilmsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopularFilmsComponent = (function () {
    function PopularFilmsComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        this.loading = false;
        this.index = 1;
        this.selectedView = "yCards";
    }
    PopularFilmsComponent.prototype.ngOnInit = function () {
        this.filmName = "";
        this.getPopularFilms();
    };
    PopularFilmsComponent.prototype.isFilmListEmpty = function () {
        return this.filmList && !this.filmList.length;
    };
    PopularFilmsComponent.prototype.setNewCardView = function (newCardView) {
        this.selectedView = newCardView;
    };
    PopularFilmsComponent.prototype.getPopularFilms = function () {
        var _this = this;
        this.loading = true;
        this.filmCardService.getPopularFilms().subscribe(function (data) {
            _this.filmList = data;
            // console.log("dataLIST Popular.TS", data)
            _this.loading = false;
        });
    };
    PopularFilmsComponent.prototype.getFilmsBySearch = function (filmName) {
        var _this = this;
        this.filmName = filmName;
        this.loading = true;
        this.filmCardService.getSearchFilms(this.filmName).subscribe(function (data) {
            _this.filmList = data;
            _this.loading = false;
        });
    };
    PopularFilmsComponent.prototype.addPopularFilms = function (index, newIndex) {
        var _this = this;
        this.loading = true;
        this.max = this.filmList.length - 1;
        if (this.index < this.max) {
            this.newIndex = this.index++;
        }
        this.filmCardService.getNextPopularFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = _this.filmList.concat(data);
            _this.loading = false;
        });
    };
    PopularFilmsComponent.prototype.next = function (filmName, index, newIndex) {
        var _this = this;
        this.max = this.filmList.length - 1;
        if (this.index < this.max) {
            this.newIndex = this.index++;
        }
        this.filmCardService.getNextPopularFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = data;
        });
    };
    PopularFilmsComponent.prototype.prev = function (filmName, index, newIndex) {
        var _this = this;
        this.max = this.filmList.length - 1;
        if (this.index > 1) {
            this.index--;
        }
        this.filmCardService.getNextPopularFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = data;
        });
    };
    return PopularFilmsComponent;
}());
PopularFilmsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'popular-films',
        template: __webpack_require__(251),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _a || Object])
], PopularFilmsComponent);

var _a;
//# sourceMappingURL=popular-films.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { InputFilmComponent } from '../../shared/input-film/input-film.component';
var SearchFilmComponent = (function () {
    function SearchFilmComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        this.loading = false;
        this.index = 1;
        this.selectedView = "yCards";
    }
    SearchFilmComponent.prototype.ngOnInit = function () {
        // this.filmName = "home"
        // this.getInitFilms();
        this.getFilmsBySearch(this.filmName);
    };
    // ifInputSearchIsEmpty(): boolean {
    //   return this.filmName === undefined;
    // }
    SearchFilmComponent.prototype.isFilmListEmpty = function () {
        return this.filmList && !this.filmList.length;
    };
    SearchFilmComponent.prototype.setNewCardView = function (newCardView) {
        this.selectedView = newCardView;
    };
    // getInitFilms(){
    //   this.loading = true;
    //   this.filmCardService.getInitSearchFilms(this.filmName).subscribe(data => {
    //     this.filmList = data;
    //     this.loading = false;
    //   })
    // } 
    // getFilms(){
    //   this.loading = true;
    //   this.filmCardService.getSearchFilms(this.filmName).subscribe(data => {
    //     this.filmList = data;
    //     this.loading = false;
    //   })
    // } 
    SearchFilmComponent.prototype.getFilmsBySearch = function (filmName) {
        var _this = this;
        this.filmName = filmName;
        this.loading = true;
        this.filmCardService.getSearchFilms(this.filmName).subscribe(function (data) {
            _this.filmList = data;
            _this.loading = false;
        });
    };
    SearchFilmComponent.prototype.addSearchFilms = function (index, newIndex) {
        var _this = this;
        this.loading = true;
        this.max = this.filmList.length - 1;
        if (this.index < this.max) {
            this.newIndex = this.index++;
        }
        this.filmCardService.getNextSearchFilms(this.filmName, this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = _this.filmList.concat(data);
            _this.loading = false;
        });
    };
    SearchFilmComponent.prototype.next = function (filmName, index, newIndex) {
        var _this = this;
        this.max = this.filmList.length - 1;
        if (this.index < this.max) {
            this.newIndex = this.index++;
        }
        this.filmCardService.getNextSearchFilms(this.filmName, this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = data;
        });
    };
    SearchFilmComponent.prototype.prev = function (filmName, index, newIndex) {
        var _this = this;
        this.max = this.filmList.length - 1;
        if (this.index > 1) {
            this.index--;
        }
        this.filmCardService.getNextSearchFilms(this.filmName, this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = data;
        });
    };
    return SearchFilmComponent;
}());
SearchFilmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'search-film',
        template: __webpack_require__(252),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _a || Object])
], SearchFilmComponent);

var _a;
//# sourceMappingURL=search-film.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopRatedFilmsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopRatedFilmsComponent = (function () {
    function TopRatedFilmsComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        this.loading = false;
        this.index = 1;
        this.selectedView = "yCards";
    }
    TopRatedFilmsComponent.prototype.ngOnInit = function () {
        this.filmName = "";
        this.getTopRatedFilms();
    };
    TopRatedFilmsComponent.prototype.isFilmListEmpty = function () {
        return this.filmList && !this.filmList.length;
    };
    TopRatedFilmsComponent.prototype.setNewCardView = function (newCardView) {
        this.selectedView = newCardView;
    };
    TopRatedFilmsComponent.prototype.getTopRatedFilms = function () {
        var _this = this;
        this.loading = true;
        this.filmCardService.getTopRatedFilms().subscribe(function (data) {
            _this.filmList = data;
            _this.loading = false;
        });
    };
    TopRatedFilmsComponent.prototype.getFilmsBySearch = function (filmName) {
        var _this = this;
        this.filmName = filmName;
        this.loading = true;
        this.filmCardService.getSearchFilms(this.filmName).subscribe(function (data) {
            _this.filmList = data;
            _this.loading = false;
        });
    };
    TopRatedFilmsComponent.prototype.addTopRatedFilms = function (index, newIndex) {
        var _this = this;
        this.loading = true;
        this.max = this.filmList.length - 1;
        if (this.index < this.max) {
            this.newIndex = this.index++;
        }
        this.filmCardService.getNextTopRatedFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = _this.filmList.concat(data);
            _this.loading = false;
        });
    };
    TopRatedFilmsComponent.prototype.next = function (filmName, index, newIndex) {
        var _this = this;
        this.max = this.filmList.length - 1;
        if (this.index < this.max) {
            this.newIndex = this.index++;
        }
        this.filmCardService.getNextTopRatedFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = data;
        });
    };
    TopRatedFilmsComponent.prototype.prev = function (filmName, index, newIndex) {
        var _this = this;
        this.max = this.filmList.length - 1;
        if (this.index > 1) {
            this.index--;
        }
        this.filmCardService.getNextTopRatedFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = data;
        });
    };
    return TopRatedFilmsComponent;
}());
TopRatedFilmsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'top-rated-films',
        template: __webpack_require__(254),
        styles: [__webpack_require__(239)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _a || Object])
], TopRatedFilmsComponent);

var _a;
//# sourceMappingURL=top-rated-films.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingFilmsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpcomingFilmsComponent = (function () {
    function UpcomingFilmsComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        this.loading = false;
        this.index = 1;
        this.selectedView = "yCards";
    }
    UpcomingFilmsComponent.prototype.ngOnInit = function () {
        this.filmName = "";
        this.getUpcomingFilms();
    };
    UpcomingFilmsComponent.prototype.isFilmListEmpty = function () {
        return this.filmList && !this.filmList.length;
    };
    UpcomingFilmsComponent.prototype.setNewCardView = function (newCardView) {
        this.selectedView = newCardView;
    };
    UpcomingFilmsComponent.prototype.getUpcomingFilms = function () {
        var _this = this;
        this.loading = true;
        this.filmCardService.getUpcomingFilms().subscribe(function (data) {
            _this.filmList = data;
            _this.loading = false;
        });
    };
    UpcomingFilmsComponent.prototype.getFilmsBySearch = function (filmName) {
        var _this = this;
        this.filmName = filmName;
        this.loading = true;
        this.filmCardService.getSearchFilms(this.filmName).subscribe(function (data) {
            _this.filmList = data;
            _this.loading = false;
        });
    };
    UpcomingFilmsComponent.prototype.addUpcomingFilms = function (index, newIndex) {
        var _this = this;
        this.loading = true;
        this.max = this.filmList.length - 1;
        if (this.index < this.max) {
            this.newIndex = this.index++;
        }
        this.filmCardService.getNextUpcomingFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = _this.filmList.concat(data);
            _this.loading = false;
        });
    };
    UpcomingFilmsComponent.prototype.next = function (filmName, index, newIndex) {
        var _this = this;
        this.max = this.filmList.length - 1;
        if (this.index < this.max) {
            this.newIndex = this.index++;
        }
        this.filmCardService.getNextUpcomingFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = data;
        });
    };
    UpcomingFilmsComponent.prototype.prev = function (filmName, index, newIndex) {
        var _this = this;
        this.max = this.filmList.length - 1;
        if (this.index > 1) {
            this.index--;
        }
        this.filmCardService.getNextUpcomingFilms(this.index, this.newIndex).subscribe(function (data) {
            _this.filmList = data;
        });
    };
    return UpcomingFilmsComponent;
}());
UpcomingFilmsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'upcoming-films',
        template: __webpack_require__(255),
        styles: [__webpack_require__(240)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _a || Object])
], UpcomingFilmsComponent);

var _a;
//# sourceMappingURL=upcoming-films.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROUTESSEARCH; });
var ROUTES = [
    { path: '', title: 'Home', icon: 'home', class: '' },
    // { path: 'search-film', title: 'Search Film',  icon: 'search', class: '' },
    { path: 'popular-films', title: 'Popular Films', icon: 'video_library', class: '' },
    { path: 'now-playing-films', title: 'Now Playing Films', icon: 'play_circle_filled', class: '' },
    { path: 'top-rated-films', title: 'Top Rated Films', icon: 'star', class: '' },
    { path: 'upcoming-films', title: 'Upcoming Films', icon: 'visibility_off', class: '' }
];
var ROUTESSEARCH = { path: 'search-film', title: 'Search Film', icon: 'search', class: '' };
//# sourceMappingURL=sidebar-routes.config.js.map

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 134;


/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(173);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(location, renderer) {
        var _this = this;
        this.renderer = renderer;
        this.location = location;
        this.renderer.listenGlobal('window', 'scroll', function (evt) {
            _this.scrollFunction();
            // console.log('scroll'); 
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.scrollFunction = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topBtn").style.display = "block";
        }
        else {
            document.getElementById("topBtn").style.display = "none";
        }
    };
    AppComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    AppComponent.prototype.scrollTop = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            // document.getElementById("topBtn").style.display = "block";
            console.log('yes');
        }
        else {
            // document.getElementById("topBtn").style.display = "none";
            console.log('no');
        }
        // $(".arrow-up").hide();
        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                // $('.arrow-up').fadeIn(); 
                console.log('yes');
            }
            else {
                // $('.arrow-up').fadeOut(); 
                console.log('no');
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(242),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Renderer */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__film_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sidebar_sidebar_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_footer_footer_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_navbar_navbar_module__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_13__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_15__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_14__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__film_service__["a" /* FilmService */], { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardViewComponent = (function () {
    function CardViewComponent() {
        this.sizeVariants = [
            { value: 'yCards', viewValue: 'Y-Cards' },
            { value: 'xCards', viewValue: 'X-Cards' },
            { value: 'sketchCards', viewValue: 'Sketch-Cards' }
        ];
        this.selectedView = this.sizeVariants[0].value;
        this.emitCardView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    CardViewComponent.prototype.changeCardView = function () { this.emitCardView.emit(this.selectedView); };
    return CardViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], CardViewComponent.prototype, "emitCardView", void 0);
CardViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'card-view',
        template: __webpack_require__(243),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [])
], CardViewComponent);

var _a;
//# sourceMappingURL=card-view.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'dashboard-cmp',
        template: "<router-outlet></router-outlet>"
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routes__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__film_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__popular_films_popular_films_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__top_rated_films_top_rated_films_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upcoming_films_upcoming_films_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__now_playing_films_now_playing_films_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_films_search_films_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_film_search_film_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__film_card_x_film_card_x_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__film_card_y_film_card_y_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__film_card_sketch_film_card_sketch_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__card_view_card_view_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__film_detail_film_detail_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__favorites_favorites_component__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { NavbarModule} from '../shared/navbar/navbar.module';












var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            // NavbarModule,
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__dashboard_routes__["a" /* MODULE_ROUTES */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routes__["b" /* MODULE_COMPONENTS */],
            __WEBPACK_IMPORTED_MODULE_9__popular_films_popular_films_component__["a" /* PopularFilmsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__top_rated_films_top_rated_films_component__["a" /* TopRatedFilmsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__upcoming_films_upcoming_films_component__["a" /* UpcomingFilmsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__now_playing_films_now_playing_films_component__["a" /* NowPlayingFilmsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__search_films_search_films_component__["a" /* SearchFilmsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__search_film_search_film_component__["a" /* SearchFilmComponent */],
            __WEBPACK_IMPORTED_MODULE_15__film_card_x_film_card_x_component__["a" /* FilmCardXComponent */],
            __WEBPACK_IMPORTED_MODULE_16__film_card_y_film_card_y_component__["a" /* FilmCardYComponent */],
            __WEBPACK_IMPORTED_MODULE_17__film_card_sketch_film_card_sketch_component__["a" /* FilmCardSketchComponent */],
            __WEBPACK_IMPORTED_MODULE_18__card_view_card_view_component__["a" /* CardViewComponent */],
            __WEBPACK_IMPORTED_MODULE_19__film_detail_film_detail_component__["a" /* FilmDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_20__favorites_favorites_component__["a" /* FavoritesComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__film_service__["a" /* FilmService */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_film_search_film_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popular_films_popular_films_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__now_playing_films_now_playing_films_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__top_rated_films_top_rated_films_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upcoming_films_upcoming_films_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__film_detail_film_detail_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorites_favorites_component__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODULE_COMPONENTS; });








var MODULE_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'search-film', component: __WEBPACK_IMPORTED_MODULE_1__search_film_search_film_component__["a" /* SearchFilmComponent */] },
    { path: 'popular-films', component: __WEBPACK_IMPORTED_MODULE_2__popular_films_popular_films_component__["a" /* PopularFilmsComponent */] },
    { path: 'now-playing-films', component: __WEBPACK_IMPORTED_MODULE_3__now_playing_films_now_playing_films_component__["a" /* NowPlayingFilmsComponent */] },
    { path: 'top-rated-films', component: __WEBPACK_IMPORTED_MODULE_4__top_rated_films_top_rated_films_component__["a" /* TopRatedFilmsComponent */] },
    { path: 'upcoming-films', component: __WEBPACK_IMPORTED_MODULE_5__upcoming_films_upcoming_films_component__["a" /* UpcomingFilmsComponent */] },
    { path: 'film-detail', component: __WEBPACK_IMPORTED_MODULE_6__film_detail_film_detail_component__["a" /* FilmDetailComponent */] },
    { path: 'favorites-films', component: __WEBPACK_IMPORTED_MODULE_7__favorites_favorites_component__["a" /* FavoritesComponent */] },
    { path: '**', redirectTo: '/' }
];
var MODULE_COMPONENTS = [__WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */]];
//# sourceMappingURL=dashboard.routes.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmCardSketchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilmCardSketchComponent = (function () {
    function FilmCardSketchComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmItem = {};
    }
    FilmCardSketchComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.filmId) {
            return;
        }
        this.filmCardService.getFilmById(this.filmId).subscribe(function (data) {
            _this.filmItem = data;
        });
    };
    return FilmCardSketchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], FilmCardSketchComponent.prototype, "filmId", void 0);
FilmCardSketchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'film-card-sketch',
        template: __webpack_require__(245),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _a || Object])
], FilmCardSketchComponent);

var _a;
//# sourceMappingURL=film-card-sketch.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmCardXComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilmCardXComponent = (function () {
    function FilmCardXComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmItem = {};
    }
    FilmCardXComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.filmId) {
            return;
        }
        this.filmCardService.getFilmById(this.filmId).subscribe(function (data) {
            _this.filmItem = data;
        });
    };
    return FilmCardXComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], FilmCardXComponent.prototype, "filmId", void 0);
FilmCardXComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'film-card-x',
        template: __webpack_require__(246),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _a || Object])
], FilmCardXComponent);

var _a;
//# sourceMappingURL=film-card-x.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmCardYComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilmCardYComponent = (function () {
    function FilmCardYComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmItem = {};
        this.routeDetailPage = 'film-detail';
    }
    FilmCardYComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.filmId) {
            return;
        }
        // console.log('OLL ID: ', this.filmId);
        this.filmCardService.getFilmById(this.filmId).subscribe(function (data) {
            _this.filmItem = data;
            // console.log('filmItem: ', this.filmItem);
        });
    };
    FilmCardYComponent.prototype.clickFilm = function () {
        this.currentFilmId = this.filmId;
        // console.log("CURRENT ID: ", this.currentFilmId)
        this.filmCardService.setFilmId(this.currentFilmId);
    };
    return FilmCardYComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], FilmCardYComponent.prototype, "filmId", void 0);
FilmCardYComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'film-card-y',
        template: __webpack_require__(247),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _a || Object])
], FilmCardYComponent);

var _a;
//# sourceMappingURL=film-card-y.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'home-cmp',
        template: __webpack_require__(249)
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilmsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchFilmsComponent = (function () {
    function SearchFilmsComponent(filmService) {
        this.filmService = filmService;
        this.filmName = "matrix";
        this.emitSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    SearchFilmsComponent.prototype.ngOnInit = function () { };
    SearchFilmsComponent.prototype.inputFilms = function () { this.emitSearch.emit(this.filmName); };
    SearchFilmsComponent.prototype.reset = function () { this.filmName = ""; };
    return SearchFilmsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], SearchFilmsComponent.prototype, "emitSearch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], SearchFilmsComponent.prototype, "filmName", void 0);
SearchFilmsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'search',
        template: __webpack_require__(253),
        styles: [__webpack_require__(238)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _b || Object])
], SearchFilmsComponent);

var _a, _b;
//# sourceMappingURL=search-films.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'footer-cmp',
        template: __webpack_require__(256),
        styles: [".copyright span{margin-right: 30px;}"]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__(166);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFilmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { PopularFilmsComponent } from '../../dashboard/popular-films/popular-films.component';


var InputFilmComponent = (function () {
    // @Input() filmName: string = "";
    function InputFilmComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        this.loading = false;
        this.emitSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    InputFilmComponent.prototype.getFilmsBySearch = function (filmName) {
        var _this = this;
        this.filmName = filmName;
        this.loading = true;
        this.filmCardService.getSearchFilms(this.filmName).subscribe(function (data) {
            _this.filmList = data;
            _this.loading = false;
        });
    };
    InputFilmComponent.prototype.setFilmsBySearch = function (filmName) {
        this.filmName = filmName;
        console.log('this.filmName', this.filmName);
        // this.getFilmsBySearch();
        // this.filmCardService.getSearchFilms(this.filmName).subscribe(data => {
        //     this.filmList = data;
        // })
    };
    // setFilms(){
    //     // this.filmName = filmName;
    //     console.log('this.filmName', this.filmName)
    //     this.popularFilmsComponent.getFilmsBySearch(this.filmName)
    // }
    InputFilmComponent.prototype.setServiceFilms = function () {
        var _this = this;
        console.log('filmName change in input = ', this.filmName);
        this.filmCardService.setSearchFilms(this.filmName);
        // into getFilmsBySearch
        //   this.filmName = filmName;
        this.filmCardService.getSearchFilms(this.filmName).subscribe(function (data) {
            _this.filmList = data;
            console.log('SEARCH_FILMS list object', _this.filmList);
        });
    };
    InputFilmComponent.prototype.inputFilms = function () { this.emitSearch.emit(this.filmName); };
    InputFilmComponent.prototype.reset = function () { this.filmName = ""; };
    return InputFilmComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], InputFilmComponent.prototype, "emitSearch", void 0);
InputFilmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'input-film',
        template: __webpack_require__(257),
        styles: [__webpack_require__(241)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _b || Object])
], InputFilmComponent);

var _a, _b;
//# sourceMappingURL=input-film.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__film_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(location, filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        this.loading = false;
        this.amountFavorites = 0;
        this.location = location;
    }
    NavbarComponent.prototype.getFilmsBySearch = function (filmName) {
        var _this = this;
        this.filmName = filmName;
        this.loading = true;
        this.filmCardService.getSearchFilms(this.filmName).subscribe(function (data) {
            _this.filmList = data;
            _this.loading = false;
        });
    };
    NavbarComponent.prototype.setFilmsBySearch = function (filmName) {
        this.filmName = filmName;
        console.log('this.filmName', this.filmName);
        // this.getFilmsBySearch();
        // this.filmCardService.getSearchFilms(this.filmName).subscribe(data => {
        //     this.filmList = data;
        // })
    };
    // @ViewChild("name", { read: ElementRef })
    // nameFilm: ElementRef;
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        this.routeSearch = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__["b" /* ROUTESSEARCH */];
    };
    NavbarComponent.prototype.ngOnChanges = function (changes) {
        console.log("Hook, Проперти в дочернем компоненте поменялись");
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return this.routeSearch.title;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'navbar-cmp',
        template: __webpack_require__(258)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__film_service__["a" /* FilmService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__film_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__input_film_input_film_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_component__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__input_film_input_film_component__["a" /* InputFilmComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_10__navbar_component__["a" /* NavbarComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__film_service__["a" /* FilmService */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem; });
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'sidebar-cmp',
        template: __webpack_require__(259),
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.nav-link {\r\n  color: rgba(0,0,0,.54);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align:center;\r\n      -ms-flex-align:center;\r\n          align-items:center;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\nmd-toolbar {\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n  z-index: 1;\r\n}\r\nmd-sidenav {\r\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\r\n  width: 200px;\r\n}\r\n.mat-sidenav-container {\r\n  background: #f5f5f5;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n.sidebar .sidebar-background:after, .off-canvas-sidebar .sidebar-background:after {\r\n    opacity: .8;\r\n}\r\n.app-content {\r\n   margin: 50px auto; \r\n   max-width: 1200px;\r\n}\r\n.wrapper {\r\n  position: relative;\r\n}\r\n.arrow-up {\r\n  position: fixed;\r\n  z-index: 999;\r\n  right: 50px;\r\n  bottom: 50px;\r\n  cursor: pointer; \r\n  /*display: none;*/\r\n}\r\n.dashboard-card {\r\n  max-width: 300px;\r\n}\r\n.toolbar-button {\r\n\t\tdisplay: none;\r\n}\r\n.toolbar-button-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n@media screen and (max-width:1024px) {\r\n\t.toolbar-button {\r\n\t\tdisplay: block;\r\n\t}\r\n  .toolbar-button-row {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*#topBtn {\r\n  display: none;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 30px;\r\n  z-index: 99;\r\n  border: none;\r\n  outline: none;\r\n  background-color:teal;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#topBtn:hover {\r\n  background-color: #555;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".mat-grid-list {\r\n    margin-top: 50px !important;\r\n}\r\n.film-card {\r\n    margin: 30px 3%;\r\n    width: 94%;\r\n    height: 440px;\r\n}\r\n.overview {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 4.6em;\r\n    word-wrap: break-word;\r\n    white-space: normal;\r\n    line-height: 1.2em;\r\n    margin: 16px 0 0;\r\n}\r\n.mat-card {\r\n    padding: 0;\r\n}\r\na {\r\n    width: inherit;\r\n}\r\n.film-card img {\r\n    margin: -2px 0 15px;\r\n    width: calc(100% + 40px);\r\n    height: 370px;\r\n    min-height: 65%;\r\n}\r\n.mat-card-title {\r\n    padding-left: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".film-card {\r\n    margin: 30px 5%;\r\n    width: 90%;\r\n    height: 349px;\r\n}\r\n.film-card img {\r\n    height: 349px !important;\r\n}\r\n.overview {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 4.6em;\r\n    word-wrap: break-word;\r\n    white-space: normal;\r\n    line-height: 1.2em;\r\n    margin: 16px 0 0;\r\n}\r\n.mat-card {\r\n    padding: 0;\r\n}\r\n.content {\r\n    padding-right: 5%;\r\n}\r\n.mat-card-image:first-child {\r\n    margin-top: 0;\r\n}\r\n.mat-card-image {\r\n     margin: 0; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".film-card {\r\n    margin: 30px 5%;\r\n    width: 90%;\r\n    height: 850px;\r\n}\r\n.film-card img {\r\n    width: calc(100% + 48px);\r\n    min-height: 65%;\r\n    /*margin: 0 -24px 22px -24px;*/\r\n}\r\n.overview {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 4.6em;\r\n    word-wrap: break-word;\r\n    white-space: normal;\r\n    line-height: 1.2em;\r\n    margin-top: 16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".card .card-header.detail {\r\n    height: 60px;\r\n    /*display: flex;\r\n    flex-direction: row;*/\r\n}\r\n.col-md-8.film-detail-wrapper {\r\n    padding: 0;\r\n    margin-left: -15px;\r\n    position: relative;\r\n}\r\n.film-detail-bg {\r\n    position: absolute;\r\n    -webkit-filter: brightness(120%) grayscale(1);\r\n            filter: brightness(120%) grayscale(1);\r\n    opacity: .1;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 60px;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n.film-detail-content {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 60px;\r\n    left: 0;\r\n    z-index: 2;\r\n}\r\n/*.film-detail-content::before {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n    display: block;\r\n    filter: brightness(120%) grayscale(1);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: 50% 50%;\r\n    background-image: bg;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".reset-icon {\r\n    padding: 0 16px;\r\n}\r\n.reset-icon:hover {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".reset-icon {\r\n    padding: 0 16px;\r\n}\r\n.reset-icon:hover {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='red' data-image=\"\">\n        <sidebar-cmp></sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/bg-sidebar.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <dashboard-cmp></dashboard-cmp>\n        <div *ngIf=\"isMaps('/maps')\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n    <a class=\"arrow-up\" id=\"topBtn\" (click)=\"scrollTop()\"><i class=\"material-icons\">vertical_align_top</i></a>\n</div>\n\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<form>\n  <md-select placeholder=\"Image size\" [(ngModel)]=\"selectedView\" name=\"cardView\">\n    <md-option *ngFor=\"let size of sizeVariants\" [value]=\"size.value\" (click)=\"changeCardView()\">\n      {{ size.viewValue }}\n    </md-option>\n  </md-select>\n</form>"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                            <div class=\"tools\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\">\n                                <!--<search [filmName]=\"filmName\" (emitSearch)='getFilmsBySearch($event)' fxFlex=\"40%\"></search><br>-->\n                                <div fxFlex=\"35%\" fxLayoutAlign=\"center\">\n                                  <!--<button md-button [disabled]=\"index==1\" (click)= \"prev()\" >Назад</button>-->\n                                  <!--<button md-button [disabled]=\"index==max\" (click)= \"next()\" >Вперед</button>-->\n                                </div>\n                                <card-view (emitCardView)='setNewCardView($event)'></card-view><br>\n                            </div>\n                    </div>\n                    \n                    <div [ngSwitch]=\"selectedView\">\n                      <md-card *ngIf=\"isFilmListEmpty()\">В избранное не добавлено ни одного фильма...</md-card>\n                      <md-grid-list *ngSwitchCase=\"'yCards'\" cols=\"4\" rowHeight=\"950px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-y [filmId]=\"film.id\"></film-card-y>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'xCards'\" cols=\"2\" rowHeight=\"400px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-x [filmId]=\"film.id\"></film-card-x>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'sketchCards'\" cols=\"2\" rowHeight=\"490px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-sketch [filmId]=\"film.id\"></film-card-sketch>\n                        </md-grid-tile>\n                      </md-grid-list>\n                    </div>\n\n                    <!--<button md-button *ngIf=\"filmList[0] && !loading\" (click)=\"addPopularFilms()\">Еще фильмы</button>-->\n                    <img class='loading' *ngIf=\"loading\" src='assets/img/loading.gif'>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"film-card\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\">\n\t<a href=\"#\" title=\"{{filmItem.title ? filmItem.title : 'Нет данных'}}\">\n\t\t<img md-card-image src=\"{{filmItem.backdrop_path ? 'https://image.tmdb.org/t/p/w500'+filmItem.backdrop_path : '../../../assets/img/not-backdrop_path_500x281.jpg'}}\" alt=\"{{filmItem.title ? filmItem.title : 'Нет данных'}}\">\n\t</a>\n\t<md-card-content fxFlex=\"100\" fxLayoutAlign=\"space-between baseline\">\n\t\t<md-card-title fxFlex=\"75\">{{filmItem.title ? filmItem.title : \"Нет данных\"}}</md-card-title>\n\t\t<span fxFlex=\"7\" fxLayoutAlign=\"space-between baseline\">\n\t\t\t<i class=\"material-icons\" fxLayoutAlign=\"space-between baseline\">star</i>{{filmItem.vote_average}}</span>\n    <md-card-actions fxFlex=\"18\">\n      <button md-button>Подробнее</button>\n    </md-card-actions>\n\t</md-card-content>\n</md-card>\n"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"film-card\">\n  <md-card-content fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\">\n    <div fxFlex=\"35\">\n      <a href=\"#\" title=\"{{filmItem.title ? filmItem.title : 'Нет данных'}}\">\n        <img md-card-image src=\"{{filmItem.poster_path ? 'https://image.tmdb.org/t/p/w320'+filmItem.poster_path : '../../../assets/img/not-poster_path_320x480.jpg'}}\" alt=\"{{filmItem.title ? filmItem.title : 'Нет данных'}}\">\n      </a>\n    </div>    \n    <div class=\"content\" fxFlex=\"60%\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\">\n      <h2 fxFlex=\"100\">{{filmItem.title ? filmItem.title : \"Нет данных\"}}</h2>\n      <p fxFlex=\"100\">{{filmItem.tagline ? filmItem.tagline : \"\"}}</p><br>\n      <div fxFlex=\"60\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\" class=\"one-row\">\n        <span fxFlex=\"65\">Продолжительность: </span><span fxFlex=\"35\">{{filmItem.runtime ? filmItem.runtime : \"?\"}}мин</span>\n      </div>\n      <div fxFlex=\"40\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\" class=\"one-row\">\n        <span fxFlex=\"35\">Релиз:</span><span fxFlex=\"65\">{{filmItem.release_date ? filmItem.release_date : \"Нет данных\"}}</span>\n      </div>\n      <div fxFlex=\"100\" fxLayout=\"row\">\n        <p class=\"overview\" fxFlex=\"100\">{{filmItem.overview ? filmItem.overview : \"Описание отсутсвует\"}}</p>\n      </div>\n      <md-card-actions fxFlex=\"100\">\n        <button md-button>Подробнее</button>\n      </md-card-actions>\n    </div>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"film-card\">\n\t<a routerLink=\"/film-detail\" (click)=\"clickFilm()\" title=\"{{filmItem.title ? filmItem.title : 'Нет данных'}}\">\n\t\t<img md-card-image src=\"{{filmItem.poster_path ? 'https://image.tmdb.org/t/p/w320'+filmItem.poster_path : '../../../assets/img/not-poster_path_320x480.jpg'}}\" alt=\"{{filmItem.title ? filmItem.title : 'Нет данных'}}\">\n\t</a>\n\t<md-card-content>\n\t\t<md-card-title>{{filmItem.title ? filmItem.title : \"Нет данных\"}}</md-card-title>\n\t\t<p>{{filmItem.tagline ? filmItem.tagline : \"\"}}</p>\n\t\t<p><span class=\"film-property\">Релиз:</span> {{filmItem.release_date ? filmItem.release_date : \"Нет данных\"}}</p>\n\t\t<p><span class=\"film-property\">Продолжительность:</span> {{filmItem.runtime ? filmItem.runtime : \"?\"}}мин</p>\n\t\t<p class=\"overview\">{{filmItem.overview ? filmItem.overview : \"Описание отсутсвует\"}}</p>\n\t</md-card-content>\n\t<md-card-actions>\n\t\t<button routerLink=\"/film-detail\" (click)=\"clickFilm()\" md-button>Подробнее</button>\n\t</md-card-actions>\n</md-card>"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content home-page\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-profile\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"\">\n                                <a href=\"{{'https://image.tmdb.org/t/p/w320'+filmItem.poster_path}}\">\n                                    <img src=\"{{filmItem.poster_path ? 'https://image.tmdb.org/t/p/w320'+filmItem.poster_path : '../assets/img/no-image.jpg'}}\" alt=\"{{filmItem.title ? filmItem.title : 'Нет данных'}}\">\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"col-md-8 film-detail-wrapper\">                           \n                            <div class=\"card-header detail\" data-background-color=\"red\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\">\n                                <h4 class=\"title\" fxFlex=\"80%\">{{filmItem.title ? filmItem.title : 'Нет данных'}}</h4>\n                                <a href=\"#shalex\" class=\"set-favorite-false\" data-toggle=\"dropdown\" (click)=\"clickFavoriteItem()\">\n                                    <i class=\"material-icons md-white\" fxFlex=\"10%\">turned_in_not</i>\n                                </a>\n                                <a href=\"#shalex\" data-toggle=\"dropdown\" (click)=\"removeFavoriteItem()\">\n                                    <i class=\"material-icons md-white\" fxFlex=\"10%\">turned_in</i>\n                                </a>\n                            </div>\n                            <div class=\"film-detail-bg\">\n                                <img data-src=\"{{bg}}\">\n                            </div>\n                            <div class=\"film-detail-content\">\n                                <h3 class=\"card-title\">{{filmItem.tagline ? filmItem.tagline : \"\"}}</h3>\n                                <p class=\"card-content\">\n                                    {{filmItem.overview ? filmItem.overview : \"Описание фильма отсутсвует\"}}\n                                </p>\n                                <!--<h3>{{filmItem.production_countries ? country : \"No country\"}}</h3>\n                                <h3>{{filmItem.production_companies ? company : \"No company\"}}</h3>-->\n                            </div>\n                            <!--<a href=\"http://shalex.info/ru/\" class=\"btn btn-danger btn-round\">Перейти на мой сайт</a>-->                        \n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--[ngStyle]=\"{'background-image': bg}\" -->\n            <!--[style.background]='\"https://image.tmdb.org/t/p/w500\" + this.filmItem.backdrop_path'-->\n            <!--<div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Детальнее об этом проэкте</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <h2>Это мой тестовый проэкт на фреймворке Angular2</h2>\n                        <p>Здесь Вы можете найти нужные Вам фильмы с помощью поиска или по категориям. \n                            Кликнув по найденному фильму Вы нйдете детальную информацию о нем</p> \n                        <p>Данные получаются динамически по API с сервиса <a href=\"https://www.themoviedb.org\">The Movie DB</a></p>\n                    </div>\n                </div>\n            </div>-->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content home-page\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h4 class=\"title\">Детальнее об этом проэкте</h4>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <h2>Это мой тестовый проэкт на фреймворке Angular2</h2>\r\n                        <p>Здесь Вы можете найти нужные Вам фильмы с помощью поиска или по категориям. \r\n                            Кликнув по найденному фильму Вы нйдете детальную информацию о нем</p> \r\n                        <p>Данные получаются динамически по API с сервиса <a href=\"https://www.themoviedb.org\">The Movie DB</a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#shalex\">\r\n                            <img class=\"img\" src=\"../assets/img/shalex.jpg\" />\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class=\"content\">\r\n                        <h6 class=\"category text-gray\">Front-End Developer</h6>\r\n                        <h4 class=\"card-title\">Шевчук Александр</h4>\r\n                        <p class=\"card-content\">\r\n                            Помогу Вам с созданием своего сайта)\r\n                        </p>\r\n                        <a href=\"http://shalex.info/ru/\" class=\"btn btn-danger btn-round\">Перейти на мой сайт</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                            <div class=\"tools\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\">\n                                <!--<search [filmName]=\"filmName\" (emitSearch)='getFilmsBySearch($event)' fxFlex=\"40%\"></search><br>-->\n                                <div fxFlex=\"35%\" fxLayoutAlign=\"center\">\n                                  <button md-button [disabled]=\"index==1\" (click)= \"prev()\" >Назад</button>\n                                  <button md-button [disabled]=\"index==max\" (click)= \"next()\" >Вперед</button>\n                                </div>\n                                <card-view (emitCardView)='setNewCardView($event)'></card-view><br>\n                            </div>\n                    </div>\n                      \n                    <div [ngSwitch]=\"selectedView\">\n                      <md-card *ngIf=\"isFilmListEmpty()\">Извините, фильмы по этому запросу не найдены...</md-card>\n                      <md-grid-list *ngSwitchCase=\"'yCards'\" cols=\"4\" rowHeight=\"950px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-y [filmId]=\"film.id\"></film-card-y>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'xCards'\" cols=\"2\" rowHeight=\"400px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-x [filmId]=\"film.id\"></film-card-x>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'sketchCards'\" cols=\"2\" rowHeight=\"490px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-sketch [filmId]=\"film.id\"></film-card-sketch>\n                        </md-grid-tile>\n                      </md-grid-list>\n                    </div>\n\n                    <button md-button *ngIf=\"filmList[0] && !loading\" (click)=\"addNowPlayingFilms()\">Еще фильмы</button>\n                    <img class='loading' *ngIf=\"loading\" src='assets/img/loading.gif'>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                            <div class=\"tools\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\">\n                                <!--<search [filmName]=\"filmName\" (emitSearch)='getFilmsBySearch($event)' fxFlex=\"40%\"></search><br>-->\n                                <div fxFlex=\"35%\" fxLayoutAlign=\"center\">\n                                  <button md-button [disabled]=\"index==1\" (click)= \"prev()\" >Назад</button>\n                                  <button md-button [disabled]=\"index==max\" (click)= \"next()\" >Вперед</button>\n                                </div>\n                                <card-view (emitCardView)='setNewCardView($event)'></card-view><br>\n                            </div>\n                    </div>\n                    \n                    <div [ngSwitch]=\"selectedView\">\n                      <md-card *ngIf=\"isFilmListEmpty()\">Извините, фильмы по этому запросу не найдены...</md-card>\n                      <md-grid-list *ngSwitchCase=\"'yCards'\" cols=\"4\" rowHeight=\"950px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-y [filmId]=\"film.id\"></film-card-y>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'xCards'\" cols=\"2\" rowHeight=\"400px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-x [filmId]=\"film.id\"></film-card-x>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'sketchCards'\" cols=\"2\" rowHeight=\"490px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-sketch [filmId]=\"film.id\"></film-card-sketch>\n                        </md-grid-tile>\n                      </md-grid-list>\n                    </div>\n\n                    <button md-button *ngIf=\"filmList[0] && !loading\" (click)=\"addPopularFilms()\">Еще фильмы</button>\n                    <img class='loading' *ngIf=\"loading\" src='assets/img/loading.gif'>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                            <div class=\"tools\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\">\n                                <!--<search [filmName]=\"filmName\" (emitSearch)='getFilmsBySearch($event)' fxFlex=\"40%\"></search><br>-->\n                                <!--<input-film [filmName]=\"filmName\" (emitSearch)='getFilmsBySearch($event)' fxFlex=\"40%\"></input-film>-->\n                                <div fxFlex=\"35%\" fxLayoutAlign=\"center\">\n                                  <button md-button [disabled]=\"index==1\" (click)= \"prev()\" >Назад</button>\n                                  <button md-button [disabled]=\"index==max\" (click)= \"next()\" >Вперед</button>\n                                </div>\n                                <card-view (emitCardView)='setNewCardView($event)'></card-view><br>\n                            </div>\n                    </div>\n                    \n                    <div [ngSwitch]=\"selectedView\">\n                      <!--<md-card *ngIf=\"ifInputSearchIsEmpty()\">Поле ввода пустое...</md-card>-->\n                      <md-card *ngIf=\"isFilmListEmpty()\">Извините, фильмы по этому запросу не найдены...</md-card>\n\n                      <md-grid-list *ngSwitchCase=\"'yCards'\" cols=\"4\" rowHeight=\"950px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-y [filmId]=\"film.id\"></film-card-y>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'xCards'\" cols=\"2\" rowHeight=\"400px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-x [filmId]=\"film.id\"></film-card-x>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'sketchCards'\" cols=\"2\" rowHeight=\"490px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-sketch [filmId]=\"film.id\"></film-card-sketch>\n                        </md-grid-tile>\n                      </md-grid-list>\n                    </div>\n\n                    <button md-button *ngIf=\"filmList[0] && !loading\" (click)=\"addSearchFilms()\">Еще фильмы</button>\n                    <img class='loading' *ngIf=\"loading\" src='assets/img/loading.gif'>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"fleax-start center\">\n  <md-input-container class=\"example-full-width\">\n    <input mdInput placeholder=\"Название фильма\" name=\"filmName\" [(ngModel)]=\"filmName\" (keyup.enter)=\"inputFilms()\">\n    <span mdSuffix class=\"reset-icon\" (click)=\"reset()\"><md-icon>close</md-icon></span>\n  </md-input-container>\n\n<!--<md-autocomplete #filmNamesList=\"mdAutocomplete\">\n   <md-option *ngFor=\"let filmName of filmNames\" [value]=\"filmName\" (click)=\"inputFilms()\">\n      {{ filmName }}\n   </md-option>\n</md-autocomplete>-->\n  <!--<button md-button (click)=\"inputFilms()\">Search</button>-->\n  <button md-button (click)=\"inputFilms()\"><md-icon>search</md-icon> Найти</button>\n  <ng-content></ng-content>\n</form>\n"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                            <div class=\"tools\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\">\n                                <!--<search [filmName]=\"filmName\" (emitSearch)='getFilmsBySearch($event)' fxFlex=\"40%\"></search><br>-->\n                                <div fxFlex=\"35%\" fxLayoutAlign=\"center\">\n                                  <button md-button [disabled]=\"index==1\" (click)= \"prev()\" >Назад</button>\n                                  <button md-button [disabled]=\"index==max\" (click)= \"next()\" >Вперед</button>\n                                </div>\n                                <card-view (emitCardView)='setNewCardView($event)'></card-view><br>\n                            </div>\n                    </div>\n                      \n                    <div [ngSwitch]=\"selectedView\">\n                      <md-card *ngIf=\"isFilmListEmpty()\">Извините, фильмы по этому запросу не найдены...</md-card>\n                      <md-grid-list *ngSwitchCase=\"'yCards'\" cols=\"4\" rowHeight=\"950px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-y [filmId]=\"film.id\"></film-card-y>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'xCards'\" cols=\"2\" rowHeight=\"400px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-x [filmId]=\"film.id\"></film-card-x>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'sketchCards'\" cols=\"2\" rowHeight=\"490px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-sketch [filmId]=\"film.id\"></film-card-sketch>\n                        </md-grid-tile>\n                      </md-grid-list>\n                    </div>\n\n                    <button md-button *ngIf=\"filmList[0] && !loading\" (click)=\"addTopRatedFilms()\">Еще фильмы</button>\n                    <img class='loading' *ngIf=\"loading\" src='assets/img/loading.gif'>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                            <div class=\"tools\" fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-between center\">\n                                <!--<search [filmName]=\"filmName\" (emitSearch)='getFilmsBySearch($event)' fxFlex=\"40%\"></search><br>-->\n                                <div fxFlex=\"35%\" fxLayoutAlign=\"center\">\n                                  <button md-button [disabled]=\"index==1\" (click)= \"prev()\" >Назад</button>\n                                  <button md-button [disabled]=\"index==max\" (click)= \"next()\" >Вперед</button>\n                                </div>\n                                <card-view (emitCardView)='setNewCardView($event)'></card-view><br>\n                            </div>\n                    </div>\n                      \n                    <div [ngSwitch]=\"selectedView\">\n                      <md-card *ngIf=\"isFilmListEmpty()\">Извините, фильмы по этому запросу не найдены...</md-card>\n                      <md-grid-list *ngSwitchCase=\"'yCards'\" cols=\"4\" rowHeight=\"950px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-y [filmId]=\"film.id\"></film-card-y>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'xCards'\" cols=\"2\" rowHeight=\"400px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-x [filmId]=\"film.id\"></film-card-x>\n                        </md-grid-tile>\n                      </md-grid-list>\n\n                      <md-grid-list *ngSwitchCase=\"'sketchCards'\" cols=\"2\" rowHeight=\"490px\">\n                        <md-grid-tile *ngFor=\"let film of filmList\">\n                          <film-card-sketch [filmId]=\"film.id\"></film-card-sketch>\n                        </md-grid-tile>\n                      </md-grid-list>\n                    </div>\n\n                    <button md-button *ngIf=\"filmList[0] && !loading\" (click)=\"addUpcomingFilms()\">Еще фильмы</button>\n                    <img class='loading' *ngIf=\"loading\" src='assets/img/loading.gif'>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"http://www.shalex.info\">\r\n                        My site\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://www.shalex.info\">\r\n                        About Me\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://www.shalex.info\">\r\n                        Portfolio\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            <span><i class=\"material-icons\">system_update</i>Source:<a href=\"https://www.themoviedb.org\">The Movie DB</a></span>\r\n              &copy; {{test | date: 'yyyy'}} <a href=\"http://www.shalex.info\">Shalex</a>, made with love for a better web\r\n        </p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\" fxLayoutWrap fxLayoutAlign=\"flex-start center\">\n  <md-input-container class=\"example-full-width\">\n    <input mdInput placeholder=\"Название фильма\" name=\"filmName\" [(ngModel)]=\"filmName\" (keyup.enter)=\"setServiceFilms()\">\n    <span mdSuffix class=\"reset-icon md-white\" (click)=\"reset()\"><md-icon>close</md-icon></span>\n  </md-input-container>\n\n  <button md-button class=\"md-white\" (click)=\"setServiceFilms()\" routerLink=\"/search-film\"><md-icon class=\"md-white\">search</md-icon> Найти</button>\n  <ng-content></ng-content>\n</form>\n\n<!--<md-autocomplete #filmNamesList=\"mdAutocomplete\">\n   <md-option *ngFor=\"let filmName of filmNames\" [value]=\"filmName\" (click)=\"inputFilms()\">\n      {{ filmName }}\n   </md-option>\n</md-autocomplete>-->\n  <!--<button md-button (click)=\"inputFilms()\">Search</button>-->"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <nav class=\"navbar navbar-transparent navbar-absolute\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <h2 class=\"navbar-brand\">{{getTitle()}}</h2>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\">\r\n                <ul class=\"nav navbar-nav navbar-right\" fxLayoutWrap fxLayoutAlign=\"flex-start flex-start\">\r\n                    <li>\r\n                        <input-film></input-film>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"material-icons md-white\">dashboard</i>\r\n                            <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\" routerLink=\"/favorites-films\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"material-icons md-white\">turned_in</i>\r\n                            <span class=\"notification\">{{amountFavorites}}</span>\r\n                            <p class=\"hidden-lg hidden-md\">Favorites</p>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"dropdown\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"material-icons md-white\">notifications</i>\r\n                            <span class=\"notification\">4</span>\r\n                            <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li><a href=\"#\">Message 1</a></li>\r\n                            <li><a href=\"#\">Message 2</a></li>\r\n                            <li><a href=\"#\">Message 3</a></li>\r\n                            <li><a href=\"#\">Message 4</a></li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons md-white\">person</i>\r\n                        <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n\r\n                <!--<form class=\"navbar-form navbar-right\" role=\"search\">\r\n                    <div class=\"form-group form-black is-empty\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                        <span class=\"material-input\"></span>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </form>-->\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</div>\r\n"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a href=\"http://shalex.info/ru/\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"/assets/img/logo-shalex.png\"/>\r\n        </div>\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\r\n                <a  [routerLink]=\"[menuItem.path]\">\r\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                    <p>{{menuItem.title}}</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(135);


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilmService = (function () {
    function FilmService(http) {
        this.http = http;
        this.movieUrl = "https://api.themoviedb.org/3/movie/";
        this.searchUrl = "https://api.themoviedb.org/3/search/movie";
        this.apiKey = "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade";
        this.language = "&language=ru-RU";
        this.include = "&include_adult=false";
        this.pageIndex = 1;
    }
    FilmService.prototype.extractListData = function (res) {
        var body = res.json();
        body = body.results || body;
        return body || {};
    };
    FilmService.prototype.extractGalleryData = function (res) {
        var body = res.json();
        return body;
    };
    //MongoDB
    FilmService.prototype.getFavoritesItem = function () {
        return this.http.get("http://localhost:4200/getFavoritesList").map(this.extractGalleryData);
    };
    FilmService.prototype.saveFavoriteItem = function (filmItem) {
        // console.log('title in service =', title);
        this.filmItem = filmItem;
        console.log('filmItem in service Save =', filmItem);
        this.favorite = { jsonFilm: filmItem };
        console.log('favorite service Save=', this.favorite);
        return this.http.post("http://localhost:4200/saveFavoriteItem", this.favorite).map(this.extractGalleryData);
    };
    FilmService.prototype.deleteFavoriteItem = function (filmItem) {
        // this.filmItem = filmItem;
        // console.log('filmItem in service Delete =', filmItem);
        this.favorite = { jsonFilm: filmItem };
        // console.log('favorite service Delete =', this.favorite);
        return this.http.delete("http://localhost:4200/deleteFavoriteItem", this.favorite).map(this.extractGalleryData);
    };
    FilmService.prototype.getFilmById = function (filmId) {
        return this.http.get(this.movieUrl + filmId + this.apiKey + this.language).map(this.extractListData);
    };
    FilmService.prototype.setFilmId = function (currentFilmId) {
        this.currentFilmId = currentFilmId;
        // console.log('SET currentFilmId in Service ID', this.currentFilmId);
        // return this.http.get(this.movieUrl + this.currentFilmId + this.apiKey + this.language).map(this.extractListData);
    };
    FilmService.prototype.returnFilmId = function (filmId) {
        filmId = this.currentFilmId;
        // console.log('SET returnFilmId in Service ID', this.currentFilmId);
        return this.http.get(this.movieUrl + this.currentFilmId + this.apiKey + this.language).map(this.extractListData);
    };
    FilmService.prototype.setSearchFilms = function (filmName) {
        this.filmName = filmName;
        console.log('this.filmName SET in Service = ', this.filmName);
    };
    FilmService.prototype.getInitSearchFilms = function (filmName) {
        return this.http.get(this.searchUrl + this.apiKey + "&query=" + filmName + this.language + "&page=1").map(this.extractListData);
    };
    FilmService.prototype.getSearchFilms = function (filmName) {
        filmName = this.filmName;
        // console.log('this.filmName GET in Service', this.filmName);
        return this.http.get(this.searchUrl + this.apiKey + "&query=" + this.filmName + this.language + "&page=1").map(this.extractListData);
    };
    FilmService.prototype.getPopularFilms = function () {
        return this.http.get(this.movieUrl + "popular" + this.apiKey + this.language + "&page=1").map(this.extractListData);
    };
    FilmService.prototype.getTopRatedFilms = function () {
        return this.http.get(this.movieUrl + "top_rated" + this.apiKey + this.language + "&page=1").map(this.extractListData);
    };
    FilmService.prototype.getNowPlayingFilms = function () {
        return this.http.get(this.movieUrl + "now_playing" + this.apiKey + this.language + "&page=1").map(this.extractListData);
    };
    FilmService.prototype.getUpcomingFilms = function () {
        return this.http.get(this.movieUrl + "upcoming" + this.apiKey + this.language + "&page=1").map(this.extractListData);
    };
    FilmService.prototype.getNextSearchFilms = function (filmName, index, newIndex) {
        this.pageIndex++;
        return this.http.get(this.searchUrl + this.apiKey + "&query=" + filmName + this.language + "&page=" + index).map(this.extractListData);
    };
    FilmService.prototype.getNextPopularFilms = function (index, newIndex) {
        this.pageIndex++;
        return this.http.get(this.movieUrl + 'popular' + this.apiKey + this.language + "&page=" + index).map(this.extractListData);
    };
    FilmService.prototype.getNextTopRatedFilms = function (index, newIndex) {
        this.pageIndex++;
        return this.http.get(this.movieUrl + 'top_rated' + this.apiKey + this.language + "&page=" + index).map(this.extractListData);
    };
    FilmService.prototype.getNextNowPlayingFilms = function (index, newIndex) {
        this.pageIndex++;
        return this.http.get(this.movieUrl + 'now_playing' + this.apiKey + this.language + "&page=" + index).map(this.extractListData);
    };
    FilmService.prototype.getNextUpcomingFilms = function (index, newIndex) {
        this.pageIndex++;
        return this.http.get(this.movieUrl + 'upcoming' + this.apiKey + this.language + "&page=" + index).map(this.extractListData);
    };
    FilmService.prototype.getNextFavoritesFilms = function (index, newIndex) {
        this.pageIndex++;
        return this.http.get(this.movieUrl + 'upcoming' + this.apiKey + this.language + "&page=" + index).map(this.extractListData);
    };
    return FilmService;
}());
FilmService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FilmService);

var _a;
//# sourceMappingURL=film.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = (function () {
    function FavoritesComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmFavoritesList = [];
        this.filmList = [];
        this.loading = false;
        this.index = 1;
        this.selectedView = "yCards";
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.filmName = "";
        this.getFavoritesFilms();
    };
    FavoritesComponent.prototype.isFilmListEmpty = function () {
        return this.filmList && !this.filmList.length;
    };
    FavoritesComponent.prototype.setNewCardView = function (newCardView) {
        this.selectedView = newCardView;
    };
    FavoritesComponent.prototype.getFavoritesFilms = function () {
        var _this = this;
        this.loading = true;
        this.filmCardService.getFavoritesItem().subscribe(function (data) {
            _this.filmFavoritesList = data;
            console.log("Get This Film in Favorites = ", data);
            for (var _i = 0, _a = _this.filmFavoritesList; _i < _a.length; _i++) {
                var filmFavoriteItem = _a[_i];
                _this.filmItem = filmFavoriteItem.jsonFilm;
                // console.log("filmItem of this.filmList Favorites.TS", this.filmItem);
                _this.filmList = _this.filmList.concat(_this.filmItem);
                // console.log("Favorites filmList", this.filmList);
            }
            _this.loading = false;
        });
    };
    FavoritesComponent.prototype.getFilmsBySearch = function (filmName) {
        var _this = this;
        this.filmName = filmName;
        this.loading = true;
        this.filmCardService.getSearchFilms(this.filmName).subscribe(function (data) {
            _this.filmList = data;
            _this.loading = false;
        });
    };
    return FavoritesComponent;
}());
FavoritesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'favorites-films',
        template: __webpack_require__(244),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _a || Object])
], FavoritesComponent);

var _a;
//# sourceMappingURL=favorites.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilmDetailComponent = (function () {
    function FilmDetailComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmItem = {};
    }
    FilmDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmCardService.returnFilmId(this.filmId).subscribe(function (data) {
            _this.filmItem = data;
            console.log("filmItem in film-detail", _this.filmItem);
            // this.dbId = this.filmItem.
            _this.URLjson = "https://api.themoviedb.org/3/movie/" + _this.filmItem.id + "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade&language=ru-RU";
            console.log('URL к json-файлу с исходными данними о фильме: ', _this.URLjson);
            // console.log('production_countries: ', this.production_countries);
        });
        // $(".set-favorite-false").click(this.clickFavoriteItem());
        // $(".set-favorite-false.true").click(this.deleteFavoriteItem());
    };
    //MongoDB 
    FilmDetailComponent.prototype.clickFavoriteItem = function () {
        // this.filmCardService.saveFavoriteItem(this.filmItem).subscribe(data => {
        //     console.log("Saved This Film to Favorites = ", data);
        // })
        $(".set-favorite-false").toggleClass("true");
        $(".set-favorite-false").hasClass("true") ? $(".set-favorite-false.true").children("i").html("turned_in") : $(".set-favorite-false").children("i").html("turned_in_not");
        // if($(".set-favorite-false")){
        //   $(".set-favorite-false").click(this.clickFavoriteItem())
        // }
        $(".set-favorite-false").hasClass("true") ? $(".set-favorite-false.true").click(this.filmCardService.saveFavoriteItem(this.filmItem).subscribe(function (data) {
            console.log("Saved This Film to Favorites = ", data);
        })) : $(".set-favorite-false").click(this.removeFavoriteItem());
    };
    FilmDetailComponent.prototype.removeFavoriteItem = function () {
        this.filmCardService.deleteFavoriteItem(this.filmItem).subscribe(function (data) {
            console.log("Deleted This Film into Favorites = ", data);
        });
        console.log("will be delete");
    };
    return FilmDetailComponent;
}());
FilmDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'film-detail',
        template: __webpack_require__(248),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_service__["a" /* FilmService */]) === "function" && _a || Object])
], FilmDetailComponent);

var _a;
//# sourceMappingURL=film-detail.component.js.map

/***/ })

},[311]);
//# sourceMappingURL=main.bundle.js.map