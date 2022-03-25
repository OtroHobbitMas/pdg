(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9od":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");



class BookService {
    constructor(firebase) {
        this.firebase = firebase;
    }
    getBooks() {
        this.bookList = this.firebase.list('books');
        return this.bookList;
    }
    deleteBooks(tagkey, $key) {
        console.log("delete $key");
        console.log(tagkey);
        this.firebase.database.ref("register").child($key).child("MisLibros").child(tagkey).remove();
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "+SNX":
/*!**************************************************************!*\
  !*** ./src/app/pages/private/my-books/my-books.component.ts ***!
  \**************************************************************/
/*! exports provided: MyBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBooksComponent", function() { return MyBooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigation-bar/navigation-bar.component */ "L0k6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "oTol");











function MyBooksComponent_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBooksComponent_6_ng_template_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.goToBook(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r2 = ctx_r7.index;
    const misLibros_r1 = ctx_r7.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "imagen" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", misLibros_r1.Imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "titulo" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](misLibros_r1.Titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "autor" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](misLibros_r1.Autor);
} }
function MyBooksComponent_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MyBooksComponent_6_ng_template_0_Template, 8, 6, "ng-template", 4);
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "mislibros" + i_r2);
} }
class MyBooksComponent {
    constructor(router, _config, authService, firebase) {
        this.router = router;
        this._config = _config;
        this.authService = authService;
        this.firebase = firebase;
        this.misLibrosList = [];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.getMisLibros();
        }, 500);
    }
    goToBook(i) {
        // console.log(this.misLibrosList[i]);
        // console.log(this.misLibrosList[i].link);
        this.router.navigate(['/book', { Pag: this.misLibrosList[i].Pag, title: this.misLibrosList[i].Titulo, url: this.misLibrosList[i].alink, group: "" }]);
    }
    getMisLibros() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("USER", firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser);
            const Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
            console.log("EMAIL", Email);
            yield this.firebase.database.ref("register").once("value", (users) => {
                let usersData = users.val();
                let user;
                Object.keys(usersData).forEach((key) => {
                    if (usersData[key].email == Email) {
                        user = usersData[key];
                    }
                });
                if (user.MisLibros) {
                    Object.keys(user.MisLibros).forEach((key) => {
                        this.misLibrosList.push(user.MisLibros[key]);
                    });
                }
            });
            console.log("MIS LIBROS", this.misLibrosList);
        });
    }
}
MyBooksComponent.ɵfac = function MyBooksComponent_Factory(t) { return new (t || MyBooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"])); };
MyBooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyBooksComponent, selectors: [["app-my-books"]], decls: 8, vars: 1, consts: [[1, "container"], [1, "librosContainer"], [1, "name", 2, "margin-top", "40px"], [4, "ngFor", "ngForOf"], ["ngbSlide", "", 3, "id"], [1, "picsum-img-wrapper", 3, "click"], ["alt", "Random first slide", 1, "portadaImg", 3, "id", "src"], [1, "carousel-caption", 2, "z-index", "0"], ["align", "center", 3, "id"], ["align", "center", 2, "margin-bottom", "10px", 3, "id"]], template: function MyBooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Mis Libros");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MyBooksComponent_6_Template, 1, 1, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.misLibrosList);
    } }, directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavigationBarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]], styles: [".name[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-align: center;\n  margin-top: 10px;\n  color: #205493;\n  align-self: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 90%;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 80px;\n}\n\n.portadaImg[_ngcontent-%COMP%] {\n  width: 300px;\n  \n  height: 470px;\n  \n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.tagImg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  right: 0px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9teS1ib29rcy9teS1ib29rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQWMsdUJBQUE7RUFDZCxhQUFBO0VBQWUsd0JBQUE7RUFDZixvQkFBQTtLQUFBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUdBLFVBQUE7RUFDQSxRQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcml2YXRlL215LWJvb2tzL215LWJvb2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjb2xvcjogIzIwNTQ5MztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5wb3J0YWRhSW1nIHtcclxuICB3aWR0aDogMzAwcHg7IC8qIHdpZHRoIG9mIGNvbnRhaW5lciAqL1xyXG4gIGhlaWdodDogNDcwcHg7IC8qIGhlaWdodCBvZiBjb250YWluZXIgKi9cclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnRhZ0ltZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB6LWluZGV4OiA1XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0b3A6IDVweDtcclxuICAvLyBsZWZ0OiAtNTBweDtcclxuICAvLyB0b3A6IDgwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyBooksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-my-books',
                templateUrl: './my-books.component.html',
                styleUrls: ['./my-books.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\maria\Desktop\pdg\Proyecto\pdg\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5VxN":
/*!*****************************************************!*\
  !*** ./src/app/pages/public/tags/tags.component.ts ***!
  \*****************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tag.service */ "lBcp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _private_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../private/navigation-bar/navigation-bar.component */ "L0k6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _private_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../private/footer/footer.component */ "oTol");
/* harmony import */ var _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../pipes/filter-tags.pipe */ "k51J");














function TagsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagsComponent_div_5_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.sendTags("categoria-" + i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagsComponent_div_5_Template_h1_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.sendTags("categoria-" + i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tags_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "key" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "tags" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "categoria" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tags_r1.Categoria);
} }
class TagsComponent {
    constructor(tagService, router, firebase, toastr) {
        this.tagService = tagService;
        this.router = router;
        this.firebase = firebase;
        this.toastr = toastr;
        this.tagsList = [];
        this.tagsListNew = [];
        this.tagsValidate = [];
        this.validate = [];
        this.tags = [];
        this.searchBoxTag = '';
        this.Key = '';
        this.confirm = false;
        this.contador = 0;
        this.name = '';
    }
    goToHome() {
        this.router.navigate(['/home']);
    }
    goToProfile() {
        this.router.navigate(['/profile']);
    }
    ngOnInit() {
        let $this = this;
        this.UserAcount();
        console.log(this.tagService.getTags());
        this.tagService.getTags()
            .snapshotChanges().subscribe(item => {
            this.tagsList = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.tagsList.push(x);
            });
            this.tagsList = Object.keys(this.tagsList[0]).map((key) => [this.tagsList[0][key]]);
            for (let i = 0; i < this.tagsList.length; i++) {
                this.tagsListNew.push({ Categoria: this.tagsList[i][0] });
            }
            for (let i = 0; i < this.tagsList.length; i++) {
                this.validate.push(this.tagsList[i][0]);
            }
            console.log(this.tagsList);
            setTimeout(function () { $this.validateTags(); }, 500);
        });
    }
    UserAcount() {
        // var user = this.firebaseAuth.auth.currentUser;
        let $this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                if (user != null) {
                    user.providerData.forEach(function (profile) {
                        // console.log("Sign-in provider: " + profile.providerId);
                        // console.log("  Provider-specific UID: " + profile.uid);
                        // console.log("  Name: " + profile.displayName);
                        // console.log("  Email: " + profile.email);
                        // console.log("  Phone Number: " + profile.photoURL);
                    });
                }
                // console.log(user);
            }
            else {
                // No user is signed in.
            }
        });
    }
    //-----------------------------------------------------Start Send tags------------------------------------------
    sendTags(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let index = i.split("-");
            let query = "#categoria" + index[1];
            let query2 = ".tagscont";
            let query3 = "#key" + index[1];
            let tag = document.querySelector(query);
            let container = document.querySelector(query2);
            let keytag = document.querySelector(query3);
            let Tags = tag.textContent;
            this.name = Tags;
            if (Tags != '') {
                const Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
                yield this.firebase.database.ref("register").once("value", (users) => {
                    users.forEach((user) => {
                        // console.log("entre nivel1");
                        const childKey = user.key;
                        const childData = user.val();
                        if (childData.email == Email) {
                            this.Key = childKey;
                            user.forEach((info) => {
                                info.forEach((MisTags) => {
                                    MisTags.forEach((Tags) => {
                                        const TagsChildKey = Tags.key;
                                        const TagsChildData = Tags.val();
                                        if (TagsChildKey == "Tag") {
                                            if (TagsChildData == this.name) {
                                                this.tags.push(TagsChildData);
                                            }
                                        }
                                    });
                                });
                            });
                        }
                    });
                });
                for (let i = 0; i < this.tags.length; i++) {
                    if (this.tags[i] == Tags) {
                        this.contador++;
                    }
                }
                if (this.contador == 0) {
                    this.confirm = true;
                }
                else {
                    this.toastr.error('El tag ya se encuentra en tu lista', 'Fallido');
                }
                if (this.confirm == true) {
                    if (keytag.value == null || keytag.value == "") {
                        this.firebase.database.ref("register").child(this.Key).child("Tags").push({
                            Tag: Tags
                        });
                        this.toastr.success('Tag ' + Tags + ' agregado', 'Exitosamente');
                        let query2 = "#tags" + index[1];
                        let image = document.querySelector(query2);
                        image.src = "../../../../assets/img/checkIcon.svg";
                    }
                    // else{
                    //   this.productService.updateProduct(productForm.value);
                    // }
                    // container.style.display = 'none';
                }
            }
            this.confirm = false;
            this.contador = 0;
            this.tags = [];
        });
    }
    //-----------------------------------------------------END Send tags------------------------------------------
    validateTags() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    // console.log("entre nivel1");
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == Email) {
                        this.Key = childKey;
                        user.forEach((info) => {
                            info.forEach((MisTags) => {
                                MisTags.forEach((Tags) => {
                                    const TagsChildKey = Tags.key;
                                    const TagsChildData = Tags.val();
                                    if (TagsChildKey == "Tag") {
                                        this.tagsValidate.push(TagsChildData);
                                    }
                                });
                            });
                        });
                    }
                });
            });
            let arr = [];
            for (let i = 0; i < this.validate.length; i++) {
                for (let j = 0; j < this.tagsValidate.length; j++) {
                    if (this.validate[i] == this.tagsValidate[j]) {
                        let query2 = "#tags" + i;
                        let image = document.querySelector(query2);
                        console.log("image");
                        console.log(image);
                        image.src = "../../../../assets/img/checkIcon.svg";
                    }
                }
            }
        });
    }
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) { return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagsComponent, selectors: [["app-tags"]], decls: 10, vars: 5, consts: [["type", "text", "name", "searchBoxTag", "placeholder", "Buscar ...", 3, "ngModel", "ngModelChange"], [1, "container"], [2, "color", "#205493", "font-weight", "bold", "font-size", "large", "font-family", "Helvetica", "margin-bottom", "10px"], [4, "ngFor", "ngForOf"], [1, "button", "is-info", 2, "width", "50%", 3, "click"], ["type", "hidden", 3, "id"], [1, "tagscont", "form-row"], ["src", "../../../../assets/img/addImg.svg", "alt", "tag", 1, "tagImg", 3, "id", "click"], ["align", "center", 2, "font-size", "medium", "line-height", "42px", "margin-left", "10px", 3, "id", "click"]], template: function TagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TagsComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchBoxTag = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Agrega Tags de tus Intereses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TagsComponent_div_5_Template, 6, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "filterTags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagsComponent_Template_button_click_7_listener() { return ctx.goToProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Continuar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchBoxTag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 2, ctx.tagsListNew, ctx.searchBoxTag));
    } }, directives: [_private_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavigationBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_9__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _private_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], pipes: [_pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterTagsPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  color: #212121;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  padding-bottom: 80px;\n  margin-left: 15px;\n}\n\n.container[_ngcontent-%COMP%]   .tagscont[_ngcontent-%COMP%]   .tagImg[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 8%;\n  height: 8%;\n  margin-left: 5%;\n  margin-top: 5px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL3RhZ3MvdGFncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBSUE7RUFFSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdWJsaWMvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge1xyXG4gICAgcGFkZGluZzogMDsgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAvLyBmb250LXNpemU6c21hbGxlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lcnsgIFxyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgIFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAudGFnc2NvbnR7XHJcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweFxyXG4gICAgICAgIC50YWdJbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-tags',
                templateUrl: './tags.component.html',
                styleUrls: ['./tags.component.scss']
            }]
    }], function () { return [{ type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ 6:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "7SGL":
/*!****************************************************!*\
  !*** ./src/app/shared/guards/custom-validators.ts ***!
  \****************************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
class CustomValidators {
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    }
    static passwordMatchValidator(control) {
        const password = control.get('password').value; // get password from our password form control
        const confirmPassword = control.get('confirmPassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCIR3JiUZvA-GQ6lPjWS3BRRgWc9u8RJZM",
        authDomain: "tesisredsocial-be58f.firebaseapp.com",
        databaseURL: "https://tesisredsocial-be58f-default-rtdb.firebaseio.com",
        projectId: "tesisredsocial-be58f",
        storageBucket: "tesisredsocial-be58f.appspot.com",
        messagingSenderId: "348716640893",
        appId: "1:348716640893:web:9f290665f9500eb053df14",
        measurementId: "G-S0D67JZESZ"
    },
    AngularFireAuthGuard: _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuthGuard"]
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

/***/ "BhhM":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    transform(value, args) {
        if (args === '') {
            return value;
        }
        const resultSearchBox = [];
        for (const post of value) {
            if (post.Title.toLowerCase().indexOf(args.toLowerCase()) > -1 || post.Autor.toLowerCase().indexOf(args.toLowerCase()) > -1) {
                resultSearchBox.push(post);
            }
        }
        return resultSearchBox;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "L0k6":
/*!**************************************************************************!*\
  !*** ./src/app/pages/private/navigation-bar/navigation-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






class NavigationBarComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.isCollapsed = true;
    }
    ngOnInit() {
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigate(['/']);
        });
    }
    // goToProfile() {
    //   this.router.navigate(['/profile']);
    // }
    goToProfile() {
        this.router.navigate(['/profile']);
    }
    goToHome() {
        this.router.navigate(['/home']);
    }
    goToAutors() {
        // this.router.navigate(['/home']);  
        console.log("aquí van los autores");
    }
    goToGroups() {
        this.router.navigate(['/groups']);
    }
    goToExternalProfiles() {
        this.router.navigate(['/externalProfiles']);
    }
}
NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) { return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigationBarComponent, selectors: [["app-navigation-bar"]], decls: 28, vars: 0, consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], ["id", "logo", "href", "#", 1, "navbar-brand"], ["src", "../../../../assets/img/Logo - Blanco.svg", "width", "30", "height", "30", "alt", ""], ["id", "toggler", "type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", "navbar-light"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 2, "margin-bottom", "10px"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["id", "item", 3, "click"], ["src", "../../../../assets/img/home.svg", "width", "30", "height", "30", "alt", "", 1, "logoItem"], ["src", "../../../../assets/img/open-book-white.svg", "width", "30", "height", "30", "alt", "", 1, "logoItem"], ["src", "../../../../assets/img/group.svg", "width", "30", "height", "30", "alt", "", 1, "logoItem"], ["src", "../../../../assets/img/user.svg", "width", "30", "height", "30", "alt", "", 1, "logoItem"], ["src", "../../../../assets/img/logout.svg", "width", "30", "height", "30", "alt", "", 1, "logoItem"]], template: function NavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Read2gether ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_9_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_13_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Libros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_17_listener() { return ctx.goToExternalProfiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Amigos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_21_listener() { return ctx.goToProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Perfil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_25_listener() { return ctx.doLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Cerrar Sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n#navbar[_ngcontent-%COMP%] {\n  background-color: #205493;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n#navbar[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\n  width: 8%;\n  height: 8%;\n  margin-left: 2%;\n  align-self: center;\n  padding: 0.6%;\n  margin-top: 8px;\n  color: white;\n  font-family: Helvetica;\n  font-size: large;\n}\n\n#navbar[_ngcontent-%COMP%]   #toggler[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n#navbar[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n#navbar[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%] {\n  color: white;\n}\n\n#navbar[_ngcontent-%COMP%]   .logoItem[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFMSjs7QUFTQTtFQUNJLHlCQUFBO0VBRUEsZ0NBQUE7RUFDQSwrQkFBQTtBQVBKOztBQVNJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBUlI7O0FBV0k7RUFDSSxrQkFBQTtBQVRSOztBQVlJO0VBQ0ksaUJBQUE7QUFWUjs7QUFhSTtFQUNJLFlBQUE7QUFYUjs7QUFjSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVpSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbG9yc1xyXG4vLyAjMDA3MWJjXHJcbi8vICMyMDU0OTNcclxuLy8gIzExMmU1MVxyXG4vLyAjMjEyMTIxXHJcblxyXG4qIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuI25hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1NDkzO1xyXG4gICAgLy8gaGVpZ2h0OiAxMHZoO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICNsb2dvIHtcclxuICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4JTtcclxuICAgICAgICAvLyBtYXJnaW46IDIlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC42JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuXHJcbiAgICAjdG9nZ2xlcntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI25hdmJhclN1cHBvcnRlZENvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2l0ZW17XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIH1cclxuICAgIC5sb2dvSXRlbXtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigationBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-navigation-bar',
                templateUrl: './navigation-bar.component.html',
                styleUrls: ['./navigation-bar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "MyXD":
/*!*************************************************************!*\
  !*** ./src/app/pages/public/register/register.component.ts ***!
  \*************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_guards_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/guards/custom-validators */ "7SGL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");














function RegisterComponent_label_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
class RegisterComponent {
    constructor(router, authService, userService, formBuilder, toastr) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.separateDialCode = false;
        this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["SearchCountryField"];
        this.TooltipLabel = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["TooltipLabel"];
        this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"];
        this.register = [];
        this.email = "ejemplo";
        this.ngForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].UnitedStates, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].UnitedKingdom];
        this.phoneForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.countEstad = 0;
        this.count = 1;
        this.countSett = 0;
        this.countGroup = 0;
        this.countImageGroup = 0;
        this.ngForm = this.createSignupForm();
    }
    changePreferredCountries() {
        this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].India, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].Canada];
    }
    createSignupForm() {
        return this.formBuilder.group({
            telefono: "",
            name: "",
            lname: "",
            email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            ],
            password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    // check whether the entered password has a number
                    // CustomValidators.patternValidator(/\d/, {
                    //   hasNumber: true
                    // }),
                    // // check whether the entered password has upper case letter
                    // CustomValidators.patternValidator(/[A-Z]/, {
                    //   hasCapitalCase: true
                    // }),  
                    // // check whether the entered password has a lower case letter
                    // CustomValidators.patternValidator(/[a-z]/, {
                    //   hasSmallCase: true
                    // }),
                    // check whether the entered password has a special character
                    // CustomValidators.patternValidator(
                    //   /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
                    //   {
                    //     hasSpecialCharacters: true
                    //   }
                    // ),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                ])
            ],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        }, {
            // check whether our password and confirm password match
            validator: src_app_shared_guards_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].passwordMatchValidator
        });
    }
    ngOnInit() {
        this.userService.getRegister()
            .snapshotChanges().subscribe(item => {
            this.registerList = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.registerList.push(x);
            });
        });
    }
    createForm() {
        this.ngForm = this.formBuilder.group({
            email: "",
            telefono: "",
            name: "",
            lname: "",
            password: "",
            confirmPassword: "",
        });
    }
    onSubmit() {
        const email = this.ngForm.controls.email.value;
        const telefono = this.ngForm.controls.telefono.value;
        const password = this.ngForm.controls.password.value;
        const confirmPassword = this.ngForm.controls.confirmPassword.value;
        let emailExist = this.registerList.find(user => user.email == email);
        let phoneExist = this.registerList.find(user => user.telefono.e164Number == telefono.e164Number);
        if (emailExist) {
            console.log("Ya existe este email");
            this.toastr.error('Ese correo ya esta registrado', 'Intenta otro correo', {
                positionClass: 'toast-top-center'
            });
        }
        else if (phoneExist) {
            this.toastr.error('El número ya esta registrado', 'Intenta otro número', {
                positionClass: 'toast-top-center'
            });
            console.log("Ya existe este número");
        }
        else {
            if (confirmPassword == password) {
                firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(email, password).then(() => {
                    this.userService.insertRegister(this.ngForm.value);
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
                this.email = email;
                firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithEmailAndPassword(email, password).then(() => {
                    this.router.navigate(['/tags']);
                    this.toastr.success('Cuenta creada', 'Exitosamente', {
                        positionClass: 'toast-top-center'
                    });
                });
                console.log("this.email");
                console.log(this.email);
                this.router.navigate(["/tags"]);
            }
        }
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigate(["/"]);
        });
    }
    goToLogin() {
        this.router.navigate(["/login"]);
    }
    goToTags() {
        this.router.navigate(["/tags"]);
    }
    addcontact(count) {
        const query = "#app .addcontact";
        const addcontact = document.querySelector(query);
        if (count == 0) {
            count = 1;
            addcontact.style.left = 0;
        }
        else {
            count = 0;
            addcontact.style.left = "-100vh";
        }
    }
    areaEstados() {
        const query = "#app .areaEstados";
        const areaEstados = document.querySelector(query);
        if (this.countEstad == 0) {
            this.countEstad = 1;
            areaEstados.style.left = 0;
        }
        else {
            this.countEstad = 0;
            areaEstados.style.left = "-100vh";
        }
    }
    openaddContact() {
        if (this.count == 0) {
            this.count = 1;
            this.addcontact(this.count);
        }
        else {
            this.count = 0;
            this.addcontact(this.count);
        }
    }
    SettingsToggle() {
        const query = "#app .DesplegableLeftMore";
        const DesplegableLeftMore = document.querySelector(query);
        if (this.countSett == 0) {
            this.countSett = 1;
            DesplegableLeftMore.style.opacity = 1;
            DesplegableLeftMore.style.transform = "scale(1)";
        }
        else {
            this.countSett = 0;
            DesplegableLeftMore.style.opacity = 0;
            DesplegableLeftMore.style.transform = "scale(0)";
        }
    }
    createGroup() {
        const query = "#app .newGroupContainer";
        const newGroupContainer = document.querySelector(query);
        if (this.countGroup == 0) {
            this.countGroup = 1;
            newGroupContainer.style.left = 0;
        }
        else {
            this.countGroup = 0;
            newGroupContainer.style.left = "-100vh";
        }
    }
    createImageGroup() {
        const query = "#app .updateImageGroup";
        const updateImageGroup = document.querySelector(query);
        if (this.countImageGroup == 0) {
            this.countImageGroup = 1;
            updateImageGroup.style.left = 0;
        }
        else {
            this.countImageGroup = 0;
            updateImageGroup.style.left = "-100vh";
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 67, vars: 31, consts: [["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], [1, "appContainer"], [1, "logoContainer"], [1, "text"], [1, "logo"], ["src", "../../../../assets/img/Logo - Azul.svg", "alt", ""], [1, "box"], [1, "media"], [1, "media-content"], [1, "content"], [3, "formGroup"], ["for", "name", 3, "ngClass"], [1, "field"], [1, "control", "has-icons-left"], ["formControlName", "name", "type", "text", "placeholder", "Name", "required", "", 1, "input", 3, "ngClass"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-lock"], ["for", "lname", 3, "ngClass"], ["type", "text", "formControlName", "lname", "placeholder", "Last Name", "required", "", 1, "input", 3, "ngClass"], ["for", "telefono", 3, "ngClass"], ["formControlName", "telefono", 3, "cssClass", "enableAutoCountrySelect", "enablePlaceholder", "searchCountryFlag", "searchCountryField", "selectFirstCountry", "selectedCountryISO", "maxLength", "tooltipField", "phoneValidation", "separateDialCode", "ngClass"], ["for", "email", 3, "ngClass"], [1, "control", "has-icons-left", "has-icons-right"], ["type", "email", "formControlName", "email", "placeholder", "Email Address", "required", "", 1, "input", 3, "ngClass"], [1, "fas", "fa-envelope"], [1, "icon", "is-small", "is-right"], [1, "fas", "fa-check"], ["for", "password", 3, "ngClass"], ["type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "input", 3, "ngClass"], [1, "col", 3, "ngClass"], [1, "material-icons"], ["for", "confirmPassword", 2, "padding-top", "5px", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm Password", "required", "", 1, "input", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 3, "disabled", "click"], [1, "text-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Read2gether ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ngx-intl-tel-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Must be at least 6 characters! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Confirmar contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, RegisterComponent_label_62_Template, 2, 0, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_65_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.ngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["name"].invalid ? "text-danger" : "text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["name"].invalid ? "is-invalid" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["lname"].invalid ? "text-danger" : "text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["lname"].invalid ? "is-invalid" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["telefono"].invalid ? "text-danger" : "text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cssClass", "custom")("enableAutoCountrySelect", true)("enablePlaceholder", true)("searchCountryFlag", true)("searchCountryField", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](28, _c0, ctx.SearchCountryField.Iso2, ctx.SearchCountryField.Name))("selectFirstCountry", false)("selectedCountryISO", ctx.CountryISO.Colombia)("maxLength", 15)("tooltipField", ctx.TooltipLabel.Name)("phoneValidation", true)("separateDialCode", true)("ngClass", ctx.ngForm.controls["telefono"].invalid ? "is-invalid" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["email"].invalid ? "text-danger" : "text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["email"].invalid ? "is-invalid" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["password"].invalid ? "text-danger" : "text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["password"].invalid ? "is-invalid" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["password"].hasError("required") || ctx.ngForm.controls["password"].hasError("minlength") ? "text-danger" : "text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ngForm.controls["password"].hasError("required") || ctx.ngForm.controls["password"].hasError("minlength") ? "cancel" : "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["confirmPassword"].invalid ? "text-danger" : "text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngForm.controls["confirmPassword"].invalid ? "is-invalid" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["confirmPassword"].hasError("NoPassswordMatch"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.ngForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["NativeElementInjectorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["NgxIntlTelInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: ["@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n.material-icons[_ngcontent-%COMP%] {\n  display: inline-flex;\n  vertical-align: middle;\n}\n.toast-success[_ngcontent-%COMP%] {\n  background-color: #51A351 !important;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-left: solid 6px red;\n}\n.success[_ngcontent-%COMP%] {\n  border-left: solid 6px green !important;\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.appContainer[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n.appContainer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  color: #205493;\n  font-size: large;\n  font-family: Helvetica;\n}\n.appContainer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n.appContainer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.appContainer[_ngcontent-%COMP%]   .logoContainer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\n.appContainer[_ngcontent-%COMP%]   .imputContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 85%;\n  padding: 15px;\n  border-radius: 10px 10px 10px 10px;\n  border: 3px solid #205493;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .iti--allow-dropdown[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background: #0071bc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksNkJBQUE7RUFDQSw0Q0FBQTtBQVJKO0FBV0E7RUFDSSw0QkFBQTtFQUNBLDJDQUFBO0FBVEo7QUFZQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7QUFWSjtBQWFDO0VBQ0csb0NBQUE7QUFWSjtBQWFDO0VBQ0csMEJBQUE7QUFWSjtBQWFFO0VBQ0UsdUNBQUE7QUFWSjtBQWFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQVZKO0FBYUE7RUFDSSxZQUFBO0FBVko7QUFnQkk7RUFDSSxlQUFBO0VBQ0EsY0E5Q0k7RUErQ0osZ0JBQUE7RUFDQSxzQkFBQTtBQWRSO0FBaUJJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQWZSO0FBZ0JRO0VBQ0ksYUFBQTtBQWRaO0FBa0JJO0VBRUksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWpCUjtBQW9CSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWxCUjtBQXFCSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUdBLGFBQUE7RUFFQSxrQ0FBQTtFQUNBLHlCQUFBO0FBdEJSO0FBNEJvQjtFQUNJLGtCQUFBO0FBMUJ4QjtBQTJCd0I7RUFDSSxrQkFBQTtBQXpCNUI7QUEyQndCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXpCNUI7QUEwQjRCO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkF4R3BCO0FBZ0ZaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRib2R5Rm9udDogc2ZQcm9UZXh0UmVndWxhcjtcclxuJHRpdGxlRm9udDogc2ZQcm9UZXh0TWVkaXVtO1xyXG5cclxuJGF6dWxPc2N1cm86ICMxMTJlNTE7XHJcbiRBenVsTWVkaW86ICMyMDU0OTM7XHJcbiRBenVsQ2xhcm86ICMwMDcxYmM7XHJcbiR0ZXh0OiAjMjEyMTIxO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2ZQcm9UZXh0UmVndWxhcjtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvU0ZQcm9UZXh0UmVndWxhci50dGYpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzZlByb1RleHRNZWRpdW07XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1NGUHJvVGV4dE1lZGl1bS50dGYpO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gfVxyXG5cclxuIC50b2FzdC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MUEzNTEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gLmlzLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDZweCByZWQ7XHJcbiAgfVxyXG5cclxuICAuc3VjY2VzcyB7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgNnB4IGdyZWVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmFwcENvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcblxyXG4gICAgXHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICRBenVsTWVkaW87XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dve1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ29Db250YWluZXJ7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbXB1dENvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3gge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMjA1NDkzO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAubWVkaWEge1xyXG4gICAgICAgICAgICAubWVkaWEtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaXRpLS1hbGxvdy1kcm9wZG93biBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pcy1pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkQXp1bENsYXJvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-register",
                templateUrl: "./register.component.html",
                styleUrls: ["./register.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "QBD8":
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/external-profiles/external-profiles.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExternalProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalProfilesComponent", function() { return ExternalProfilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../navigation-bar/navigation-bar.component */ "L0k6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../footer/footer.component */ "oTol");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../pipes/filter-external-profiles.pipe */ "v5hE");


















function ExternalProfilesComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExternalProfilesComponent_div_3_div_3_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const user_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.viewExternalProfile(user_r3.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExternalProfilesComponent_div_3_div_3_Template_h1_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const user_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.viewExternalProfile(user_r3.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExternalProfilesComponent_div_3_div_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const user_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.viewExternalProfile(user_r3.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Ver Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "imagen" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", user_r3.Images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "correo" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "nombre" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", user_r3.name, " ", user_r3.lname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "descripcion" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r3.Descripcion);
} }
function ExternalProfilesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Encuentra Amigos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExternalProfilesComponent_div_3_div_3_Template, 11, 9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "filterExternalProfiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 1, ctx_r0.registerList, ctx_r0.searchBoxExternal));
} }
function ExternalProfilesComponent_div_5_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const susTags_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "contTag" + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "mitag" + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](susTags_r11.Tags);
} }
function ExternalProfilesComponent_div_5_23_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r14 = ctx_r16.index;
    const susLibros_r13 = ctx_r16.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "imagen" + i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", susLibros_r13.Imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "titulo" + i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](susLibros_r13.Titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "autor" + i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](susLibros_r13.Autor);
} }
function ExternalProfilesComponent_div_5_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ExternalProfilesComponent_div_5_23_ng_template_0_Template, 8, 6, "ng-template", 29);
} if (rf & 2) {
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "susLibros" + i_r14);
} }
function ExternalProfilesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExternalProfilesComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.gotoExternalProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExternalProfilesComponent_div_5_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.addFriendInsidePerfil(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sus tags:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ExternalProfilesComponent_div_5_tr_18_Template, 4, 3, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sus Libros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ExternalProfilesComponent_div_5_23_Template, 1, 1, undefined, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.Currentimg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.mensaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.susTagsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.susLibrosList);
} }
class ExternalProfilesComponent {
    constructor(authService, firebaseAuth, userService, router, firebase, toastr, filter, route) {
        this.authService = authService;
        this.firebaseAuth = firebaseAuth;
        this.userService = userService;
        this.router = router;
        this.firebase = firebase;
        this.toastr = toastr;
        this.filter = filter;
        this.route = route;
        this.imgUser = [];
        this.registerListNew = [];
        this.arr = [];
        this.viewProfile = false;
        this.susTagsList = [];
        this.susLibrosList = [];
        this.correoExternoUser = '';
        this.UserName = '';
        this.UserLastName = '';
        this.FulName = '';
        this.correoExt = '';
        this.Currentimg = "../../../../../../assets/img/NoImage.png";
        this.searchBoxExternal = '';
        this.mensaje = "";
    }
    ngOnInit() {
        this.UserAcount();
        this.userService.getRegister()
            .snapshotChanges().subscribe(item => {
            this.registerList = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.registerList.push(x);
            });
            const Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
            this.registerListNew = Object.values(this.registerList);
            for (let i = 0; i < this.registerList.length; i++) {
                this.registerListNew = Object.values(this.registerList[i]);
                for (let j = 0; j < this.registerListNew.length; j++) {
                    if (this.registerListNew[j] == Email) {
                        this.registerList.splice(i, 1);
                    }
                }
            }
            this.getImgUsers(this.registerList);
        });
        this.call = this.route.snapshot.paramMap.get("email");
        if (this.call) {
            this.viewExternalProfile(this.call);
        }
    }
    UserAcount() {
        let $this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                if (user != null) {
                    user.providerData.forEach(function (profile) {
                        // console.log("Sign-in provider: " + profile.providerId);
                        // console.log("  Provider-specific UID: " + profile.uid);
                        // console.log("  Name: " + profile.displayName);
                        // console.log("  Email: " + profile.email);
                        // $this.addBookToUser(profile.email,"");
                    });
                }
            }
            else {
                // No user is signed in.
            }
        });
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigate(['/']);
        });
    }
    getImgUsers(arrList) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
            let entries;
            let entriesDescipcion;
            arrList.forEach((element, index) => {
                if ("Images" in element) {
                    entries = Object.keys(element.Images);
                    arrList[index].Images = element.Images[entries[entries.length - 1]].ImgUrl;
                }
                else {
                    arrList[index].Images = "../../../../../../assets/img/NoImage.png";
                }
                if ("Descripcion" in element) {
                    entriesDescipcion = Object.values(element.Descripcion);
                    arrList[index].Descripcion = entriesDescipcion[entriesDescipcion.length - 1].Descripcion;
                }
                else {
                    arrList[index].Descripcion = "Sin descripcion";
                }
            });
        });
    }
    addFriend(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Key;
            let contador = 0;
            let confirm = false;
            const Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
            let correoAmigo = document.querySelector("#correo" + index);
            let correoAmigoText = correoAmigo.textContent;
            let nombreAmigo = document.querySelector("#nombre" + index);
            let nombreAmigoText = nombreAmigo.textContent;
            let imagenAmigo = document.querySelector("#imagen" + index);
            let imagenAmigoSrc = imagenAmigo.src;
            if (correoAmigoText != '') {
                this.correoExternoUser = correoAmigoText;
            }
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == Email) {
                        Key = childKey;
                        user.forEach((info) => {
                            info.forEach((Amigos) => {
                                Amigos.forEach((misAmigos) => {
                                    const misAmigosChildKey = misAmigos.key;
                                    const misAmigosChildData = misAmigos.val();
                                    if (misAmigosChildKey == "Contacto") {
                                        this.arr.push(misAmigosChildData);
                                    }
                                });
                            });
                        });
                    }
                });
            });
            if (this.arr == undefined) {
                this.firebase.database.ref("register").child(Key).child("Amigos").push({
                    Contacto: correoAmigoText,
                    NombreAmigo: nombreAmigoText,
                    ImagenAmigo: imagenAmigoSrc
                });
                this.toastr.success('Amigo añadido a tu lista', 'Exitosamente');
            }
            else {
                for (let i = 0; i < this.arr.length; i++) {
                    if (this.arr[i] == correoAmigoText) {
                        contador++;
                    }
                }
                if (contador == 0) {
                    confirm = true;
                }
                else {
                    this.toastr.error('Esta persona ya se encuentra en tu lista', 'Fallido');
                }
                if (confirm == true) {
                    this.firebase.database.ref("register").child(Key).child("Amigos").push({
                        Contacto: correoAmigoText,
                        NombreAmigo: nombreAmigoText,
                        ImagenAmigo: imagenAmigoSrc
                    });
                    this.toastr.success('Amigo añadido a tu lista', 'Exitosamente');
                }
            }
        });
    }
    addFriendInsidePerfil() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Key;
            let contador = 0;
            let confirm = false;
            const Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
            // Verificar si ya esta agregado
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == Email) {
                        Key = childKey;
                        user.forEach((info) => {
                            info.forEach((Amigos) => {
                                Amigos.forEach((misAmigos) => {
                                    const misAmigosChildKey = misAmigos.key;
                                    const misAmigosChildData = misAmigos.val();
                                    if (misAmigosChildKey == "Contacto") {
                                        this.arr.push(misAmigosChildData);
                                    }
                                });
                            });
                        });
                    }
                });
            });
            if (this.arr == undefined) {
                this.firebase.database.ref("register").child(Key).child("Amigos").push({
                    Contacto: this.correoExt,
                    NombreAmigo: this.FulName,
                    ImagenAmigo: this.Currentimg
                });
                this.toastr.success('Amigo añadido a tu lista', 'Exitosamente');
            }
            else {
                for (let i = 0; i < this.arr.length; i++) {
                    if (this.arr[i] == this.correoExt) {
                        contador++;
                    }
                }
                if (contador == 0) {
                    confirm = true;
                }
                else {
                    this.toastr.error('Esta persona ya se encuentra en tu lista', 'Fallido');
                }
                if (confirm == true) {
                    this.firebase.database.ref("register").child(Key).child("Amigos").push({
                        Contacto: this.correoExt,
                        NombreAmigo: this.FulName,
                        ImagenAmigo: this.Currentimg
                    });
                    this.toastr.success('Amigo añadido a tu lista', 'Exitosamente');
                }
            }
        });
    }
    gotoExternalProfile() {
        this.viewProfile = false;
        // this.getImgUsers(this.registerList);
    }
    viewExternalProfile(correoExternoUser) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // let correoName = correoExternoUser.split("-");
            this.viewProfile = true;
            let $this = this;
            this.correoExt = correoExternoUser;
            let CurrentDescription;
            let Autor;
            let Imagen;
            let Titulo;
            let keyTAGS;
            let Tags = {};
            const Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
            this.susLibrosList = [];
            this.susTagsList = [];
            this.Currentimg = "";
            let Key;
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == correoExternoUser) {
                        Key = childKey;
                        if (childData.lname != '' && childData.name != '') {
                            this.UserName = childData.name;
                            this.UserLastName = childData.lname;
                            // this.FulName = this.UserName.concat(" "+this.UserLastName);
                            this.FulName = this.UserName + " " + this.UserLastName;
                        }
                        user.forEach((info) => {
                            info.forEach((Description) => {
                                const pruebakey = Description.key;
                                keyTAGS = pruebakey;
                                Description.forEach((DescriptionText) => {
                                    const DescriptionChildKey = DescriptionText.key;
                                    const DescriptionChildData = DescriptionText.val();
                                    if (DescriptionChildKey == "Descripcion") {
                                        CurrentDescription = DescriptionChildData;
                                    }
                                    if (DescriptionChildKey == "Autor") {
                                        Autor = DescriptionChildData;
                                    }
                                    else if (DescriptionChildKey == "Imagen") {
                                        Imagen = DescriptionChildData;
                                    }
                                    else if (DescriptionChildKey == "Titulo") {
                                        Titulo = DescriptionChildData;
                                        if (Autor != '' && Imagen != '' && Titulo != '') {
                                            this.susLibrosList.push({ Autor, Imagen, Titulo });
                                        }
                                    }
                                    if (DescriptionChildKey == "ImgUrl") {
                                        $this.Currentimg = DescriptionChildData;
                                    }
                                    if (DescriptionChildKey == "Tag") {
                                        Tags = DescriptionChildData;
                                        if (Tags != '') {
                                            this.susTagsList.push({ Tags });
                                        }
                                    }
                                });
                            });
                        });
                    }
                });
            });
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == Email) {
                        Key = childKey;
                        user.forEach((info) => {
                            info.forEach((Amigos) => {
                                Amigos.forEach((misAmigos) => {
                                    const misAmigosChildKey = misAmigos.key;
                                    const misAmigosChildData = misAmigos.val();
                                    if (misAmigosChildKey == "Contacto") {
                                        if (misAmigosChildData == correoExternoUser) {
                                            this.mensaje = "Amigo";
                                        }
                                        else {
                                            this.mensaje = "Seguir";
                                        }
                                    }
                                });
                            });
                        });
                    }
                });
            });
            setTimeout(function () {
                if ($this.UserName != '') {
                    const query = ".containerView .name";
                    // let nameInput = document.querySelector(query).innerHTML = $this.FulName;
                    let nameInput = document.querySelector(query);
                    nameInput.textContent = $this.FulName;
                }
                else {
                    const query = ".containerView .name";
                    document.querySelector(query).innerHTML = "Nombre no registrado";
                    $this.toastr.error('Error al buscar el nombre', 'Error');
                }
                if (!$this.Currentimg) {
                    $this.Currentimg = "../../../../../../assets/img/NoImage.png";
                }
                if (CurrentDescription != '') {
                    const query = ".inputDescripcion";
                    const element = document.querySelector(query);
                    element.value = CurrentDescription;
                }
                const query = "#descripcionID";
                const Descripcion = document.querySelector(query);
                let DescripcionValue = Descripcion.value;
                if (DescripcionValue == 'undefined') {
                    DescripcionValue = "Ingresa tu descripción";
                }
            }, 500);
        });
    }
}
ExternalProfilesComponent.ɵfac = function ExternalProfilesComponent_Factory(t) { return new (t || ExternalProfilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
ExternalProfilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExternalProfilesComponent, selectors: [["app-external-profiles"]], decls: 7, vars: 3, consts: [["type", "text", "name", "searchBoxExternal", "placeholder", "Buscar ...", 3, "ngModel", "ngModelChange"], [1, "container"], ["class", "container", 4, "ngIf"], ["class", "containerView", 4, "ngIf"], ["id", "name"], ["class", "card", "style", "width: 18rem; margin-bottom: 15px;", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem", "margin-bottom", "15px"], ["alt", "Card image cap", "alt", "imagenes", 1, "userImg", 3, "id", "src", "click"], [1, "card-body"], ["align", "center", 2, "display", "none", 3, "id"], ["align", "center", 1, "card-title", 3, "id", "click"], ["align", "center", 1, "card-text", 2, "width", "100%", 3, "id"], [1, "button", "is-info", 2, "margin-right", "10px", 3, "click"], [1, "containerView"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", 3, "click"], [1, "perfilContainer"], [1, "photoContainer"], ["srcset", "", "alt", "", "id", "img", 1, "Photoimg", 3, "src"], [1, "ContainerDescription"], [1, "name"], ["disabled", "", "id", "descripcionID", "type", "text", 1, "inputDescripcion"], ["id", "boton", "type", "submit", 1, "button", "is-info", 2, "padding", "5px", 3, "click"], [1, "ContainerTags"], [1, "table"], [3, "id", 4, "ngFor", "ngForOf"], [1, "librosContainer"], [1, "name", 2, "margin-top", "40px"], [4, "ngFor", "ngForOf"], [3, "id"], ["ngbSlide", "", 3, "id"], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 1, "portadaImg", 3, "id", "src"], [1, "carousel-caption", 2, "z-index", "0"], ["align", "center", 3, "id"], ["align", "center", 2, "margin-bottom", "10px", 3, "id"]], template: function ExternalProfilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExternalProfilesComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchBoxExternal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExternalProfilesComponent_div_3_Template, 5, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExternalProfilesComponent_div_5_Template, 24, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchBoxExternal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewProfile == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewProfile == true);
    } }, directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavigationBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_12__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbSlide"]], pipes: [_pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterExternalProfilesPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.inputDescripcion[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  width: 100%;\n  height: 100px;\n  border-radius: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n  margin-top: 25px;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: -2px;\n  color: #205493;\n  font-size: x-large;\n}\n\n.container[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%] {\n  color: #205493;\n}\n\n.container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n}\n\n.container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background-color: #205493;\n  padding: 5px;\n  margin-bottom: 15px;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-align: center;\n  margin-top: 10px;\n  color: #205493;\n  align-self: center;\n}\n\n.perfilContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.Photoimg[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border-radius: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 3px solid #112e51;\n}\n\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 80px;\n}\n\n.ContainerDescription[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.inputDescripcion[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 80vw;\n  height: 100px;\n  border-radius: 20px;\n  padding: 10px;\n  text-overflow: ellipsis;\n  word-break: break-word;\n}\n\n.tagsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-top: 20px;\n  width: 80%;\n}\n\n.tagsContainer[_ngcontent-%COMP%]   #titleTag[_ngcontent-%COMP%] {\n  color: #0071bc;\n  font-size: large;\n}\n\n.tagImg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  right: 0px;\n  top: 5px;\n}\n\n.Editimg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.portadaImg[_ngcontent-%COMP%] {\n  width: 300px;\n  \n  height: 500px;\n  \n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n#friendsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row nowrap;\n  vertical-align: center;\n  width: 80%;\n  margin-top: -15px;\n}\n\n#friendsContainer[_ngcontent-%COMP%]   .friendsName[_ngcontent-%COMP%] {\n  color: #0071bc;\n  font-size: large;\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n#friendsContainer[_ngcontent-%COMP%]   .friendImg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 100%;\n  border: solid 1px #212121;\n}\n\n#friendsContainer[_ngcontent-%COMP%]   .tagImg2[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9leHRlcm5hbC1wcm9maWxlcy9leHRlcm5hbC1wcm9maWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBUUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQU5KOztBQVFJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0F4Qkk7RUF5Qkosa0JBQUE7QUFOUjs7QUFVSTtFQUNJLGNBOUJJO0FBc0JaOztBQVdJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVFI7O0FBWUk7RUFDSSx5QkExQ0k7RUEyQ0osWUFBQTtFQUNBLG1CQUFBO0FBVlI7O0FBY0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQXBEUTtFQXFEUixrQkFBQTtBQVhKOztBQWNBO0VBRUksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVpKOztBQWdCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EseUJBQUE7QUFiSjs7QUFpQkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFvQkk7RUFFSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBbEJSOztBQXNCSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUtBLHVCQUFBO0VBRUEsc0JBQUE7QUF6QlI7O0FBNEJJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtBQTFCUjs7QUE0QlE7RUFDSSxjQXhIQTtFQXlIQSxnQkFBQTtBQTFCWjs7QUE4Qkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUdBLFVBQUE7RUFDQSxRQUFBO0FBN0JSOztBQWlDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBOUJSOztBQWlDSTtFQUNJLFlBQUE7RUFBYyx1QkFBQTtFQUNkLGFBQUE7RUFBZSx3QkFBQTtFQUNmLG9CQUFBO0tBQUEsaUJBQUE7QUE1QlI7O0FBK0JJO0VBRUksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUE5QlI7O0FBZ0NRO0VBQ0ksY0EvSkE7RUFnS0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUVBLGlCQUFBO0FBaENaOztBQXFDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQW5DWjs7QUF1Q1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBckNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9leHRlcm5hbC1wcm9maWxlcy9leHRlcm5hbC1wcm9maWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiRhenVsT3NjdXJvOiAjMTEyZTUxO1xyXG4kQXp1bE1lZGlvOiAjMjA1NDkzO1xyXG4kQXp1bENsYXJvOiAjMDA3MWJjO1xyXG4kdGV4dDogIzIxMjEyMTtcclxuXHJcbi5pbnB1dERlc2NyaXBjaW9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXJ7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcblxyXG4gICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICAgICAgY29sb3I6ICRBenVsTWVkaW87XHJcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICNuYW1le1xyXG4gICAgICAgIGNvbG9yOiAkQXp1bE1lZGlvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEF6dWxNZWRpbztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLm5hbWV7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICRBenVsTWVkaW87XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wZXJmaWxDb250YWluZXJ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5QaG90b2ltZ3tcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3NXB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkYXp1bE9zY3VybztcclxuXHJcbn1cclxuXHJcbi5hcHB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuXHJcblxyXG59XHJcblxyXG4gICAgLkNvbnRhaW5lckRlc2NyaXB0aW9ue1xyXG4gICAgICAgIC8vIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dERlc2NyaXBjaW9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgLy8gcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgICAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAvLyB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IFxyXG4gICAgfVxyXG5cclxuICAgIC50YWdzQ29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ29sZGVucm9kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAgICAgI3RpdGxlVGFne1xyXG4gICAgICAgICAgICBjb2xvcjogJEF6dWxDbGFybztcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAudGFnSW1ne1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gei1pbmRleDogNVxyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgLy8gbGVmdDogLTUwcHg7XHJcbiAgICAgICAgLy8gdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLkVkaXRpbWd7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3J0YWRhSW1ne1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDsgLyogd2lkdGggb2YgY29udGFpbmVyICovXHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDsgLyogaGVpZ2h0IG9mIGNvbnRhaW5lciAqL1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgICNmcmllbmRzQ29udGFpbmVye1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZmxvdzogIHJvdyBub3dyYXA7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuXHJcbiAgICAgICAgLmZyaWVuZHNOYW1le1xyXG4gICAgICAgICAgICBjb2xvcjogJEF6dWxDbGFybztcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5mcmllbmRJbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICR0ZXh0O1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFnSW1nMntcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgLy8gei1pbmRleDogNVxyXG4gICAgICAgICAgICAvLyBsZWZ0OiAtNTBweDtcclxuICAgICAgICAgICAgLy8gdG9wOiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExternalProfilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-external-profiles',
                templateUrl: './external-profiles.component.html',
                styleUrls: ['./external-profiles.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "QuX9":
/*!*******************************************************!*\
  !*** ./src/app/pages/public/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");









class LoginComponent {
    constructor(router, toastr, userService) {
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            signupEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            signupPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.register = [];
    }
    ngOnInit() {
        this.userService.getRegister()
            .snapshotChanges().subscribe(item => {
            this.registerList = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.registerList.push(x);
            });
            console.log(this.registerList);
        });
    }
    goToRegister() {
        this.router.navigate(['/register']);
    }
    doLogin() {
        let email = this.signupForm.controls.signupEmail.value;
        const password = this.signupForm.controls.signupPassword.value;
        let emailRegexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
        if (email.match(emailRegexp)) {
            let email = this.signupForm.controls.signupEmail.value;
            const password = this.signupForm.controls.signupPassword.value;
            let emailRegexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
            let userExist;
            if (email.match(emailRegexp)) {
                // Es correo
                console.log(this.registerList);
                console.log("Es correo");
                userExist = this.registerList.find(user => user.email == email);
                console.log(userExist);
            }
            else {
                console.log("Es teléfono");
                // Es teléfono
                userExist = this.registerList.find(user => user.telefono.e164Number == email && user);
                email = userExist && userExist.email || undefined;
                console.log(email);
            }
            if (userExist) {
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password).then(() => {
                    this.router.navigate(['/home']);
                    this.toastr.success('Login successful', 'Login acount', {
                        positionClass: 'toast-top-center'
                    });
                }).catch((error) => {
                    // Handle Errors here.
                    this.toastr.error('The password are incorrect', 'Error login', {
                        positionClass: 'toast-top-center'
                    });
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                    console.log(`Error [${errorCode}]: ${errorMessage}`);
                });
            }
            else {
                console.log("Ya existe este email en tus contactos");
                this.toastr.error('The email or the password are incorrect', 'Error login', {
                    positionClass: 'toast-top-center'
                });
            }
            // this.userService.findById(email).once('value').then(data => {
            //   if (data.val()) {
            //     console.log(data.val());
            //     this.login(email, password);
            //   } else {
            //     this.usuarioNoRegistrado();
            //   }
            // }).catch(() => {
            //   this.usuarioNoRegistrado();
            // });
        }
        else {
            this.userService.findByPhone(email).once('value').then(data => {
                if (data.exists()) {
                    data.forEach(element => {
                        let user = element.exportVal();
                        console.log(user.email);
                        email = user.email;
                    });
                    this.login(email, password);
                }
                else {
                    this.usuarioNoRegistrado();
                }
            }).catch(() => {
                this.usuarioNoRegistrado();
            });
        }
    }
    usuarioNoRegistrado() {
        this.toastr.success('El usuario no esta registrado', 'Fallido', {
            positionClass: 'toast-top-center'
        });
    }
    login(email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password).then(() => {
            this.router.navigate(['/home']);
            this.toastr.success('Ingreso exitoso', '', {
                positionClass: 'toast-top-center'
            });
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(`Error [${errorCode}]: ${errorMessage}`);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 32, vars: 1, consts: [[1, "page"], [1, "container"], [1, "text"], [1, "logo"], ["src", "../../../../assets/img/Logo - Azul.svg", "alt", ""], [1, "formBox"], [3, "formGroup"], [1, "field"], ["for", "", 2, "color", "#205493", "font-size", "medium"], [1, "control", "has-icons-left", "has-icons-right"], ["formControlName", "signupEmail", "type", "email", "placeholder", "Email", "required", "", 1, "input"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "icon", "is-small", "is-right"], [1, "fas", "fa-check"], [1, "control", "has-icons-left"], ["formControlName", "signupPassword", "type", "password", "placeholder", "Password", "required", "", 1, "input"], [1, "fas", "fa-lock"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 2, "width", "50%", 3, "click"], [1, "RegisterBtn", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Read2gether ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() { return ctx.doLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_30_listener() { return ctx.goToRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Click here to register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["NativeElementInjectorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.page[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  width: 95%;\n}\n.container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #205493;\n  font-size: large;\n  font-family: Helvetica;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.container[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 50px;\n  border-radius: 10px 10px 10px 10px;\n  border: 5px solid #205493;\n  width: 80%;\n  padding: 10px;\n}\n.container[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.container[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .RegisterBtn[_ngcontent-%COMP%] {\n  color: #0071bc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0ksNkJBQUE7RUFDQSw0Q0FBQTtBQVBKO0FBVUE7RUFDSSw0QkFBQTtFQUNBLDJDQUFBO0FBUko7QUFXQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFUSjtBQVlBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVlBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSxzQkFBQTtFQUNBLFVBQUE7QUFWSjtBQVlJO0VBQ0ksZ0JBQUE7RUFDQSxjQXJDSTtFQXNDSixnQkFBQTtFQUNBLHNCQUFBO0FBVlI7QUFhSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQVlRO0VBQ0ksYUFBQTtBQVZaO0FBY0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0NBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBYlI7QUFnQlE7RUFFSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWZaO0FBa0JRO0VBRUksY0F2RUE7QUFzRFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdWJsaWMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm9keUZvbnQ6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiR0aXRsZUZvbnQ6IHNmUHJvVGV4dE1lZGl1bTtcclxuXHJcbiRhenVsT3NjdXJvOiAjMTEyZTUxO1xyXG4kQXp1bE1lZGlvOiAjMjA1NDkzO1xyXG4kQXp1bENsYXJvOiAjMDA3MWJjO1xyXG4kdGV4dDogIzIxMjEyMTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1NGUHJvVGV4dFJlZ3VsYXIudHRmKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2ZQcm9UZXh0TWVkaXVtO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9TRlByb1RleHRNZWRpdW0udHRmKTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnBhZ2V7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuXHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkQXp1bE1lZGlvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybUJveHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMyMDU0OTM7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIFxyXG4gICAgICAgIC5idXR0b25ze1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkQXp1bENsYXJvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuUmVnaXN0ZXJCdG57XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkQXp1bENsYXJvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Read2gether';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "YtdO":
/*!********************************************************************!*\
  !*** ./src/app/pages/private/file-upload/file-upload.component.ts ***!
  \********************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");




class FileUploadComponent {
    constructor(storage) {
        this.storage = storage;
        this.fileUrlEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imgUrlEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    toggleHover(event) {
        this.isHovering = event;
    }
    startUpload(event) {
        //The file object
        const file = event.item(0);
        //Client-side Validation example
        // if (file.type.split('/')[0] !== 'audio' || 'image') {
        //   console.error('No hay soporte en ese tipo de archivo :(')
        //   return;
        // }
        // The storage path
        const path = `test/${new Date().getTime()}_${file.name}`;
        const ref = this.storage.ref(path);
        // Totally opcional metadata
        const customMetadata = { app: 'My AngularFire-powered PWA!' };
        // The main task
        this.task = this.storage.upload(path, file, { customMetadata });
        //progress monitoring
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges();
        //The file's download URL
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.downloadURL = ref.getDownloadURL();
            this.downloadURL.subscribe(url => {
                this.fileURL = url;
                this.fileUrlEmitter.emit(url);
                console.log("URL ES: " + url);
            });
        })).subscribe();
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.downloadURL = ref.getDownloadURL();
            this.downloadURL.subscribe(imgUrl => {
                this.imgURL = imgUrl;
                this.imgUrlEmitter.emit(imgUrl);
                console.log("URL ES: " + imgUrl);
            });
        })).subscribe();
    }
    isActive(snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"])); };
FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["app-file-upload"]], outputs: { fileUrlEmitter: "fileUrlEmitter", imgUrlEmitter: "imgUrlEmitter" }, decls: 5, vars: 2, consts: [["dropZone", "", 1, "dropzone", 3, "hovered", "dropped"], [1, "file", 2, "width", "140px", "display", "flex", "flex-flow", "column wrap"], [1, "file-label"], ["type", "file", 3, "change"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hovered", function FileUploadComponent_Template_div_hovered_0_listener($event) { return ctx.toggleHover($event); })("dropped", function FileUploadComponent_Template_div_dropped_0_listener($event) { return ctx.startUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_4_listener($event) { return ctx.startUpload($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovering", ctx.isHovering);
    } }, styles: [".dropzone[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  text-align: center;\n  flex-flow: column wrap;\n  opacity: 0;\n  cursor: pointer;\n  height: 140px;\n  width: 140px;\n  border-radius: 75px;\n}\n.dropzone[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0);\n  margin-left: 3%;\n}\n.dropzone[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.dropzone.hovering[_ngcontent-%COMP%] {\n  border: 2px solid #00f839;\n  color: #dadada !important;\n}\n.dropzone[_ngcontent-%COMP%]   .file-label[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\nprogress[_ngcontent-%COMP%]::-webkit-progress-value {\n  -webkit-transition: width 0.1s ease;\n  transition: width 0.1s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBUUEsVUFBQTtFQUdBLGVBQUE7RUFVQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBcEJGO0FBYUU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFYSjtBQWlCRTtFQUNFLFVBQUE7QUFmSjtBQW9CQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFqQkY7QUFtQkE7RUFDRSxnQkFBQTtBQWhCRjtBQWtCQTtFQUNFLG1DQUFBO0VBQUEsMkJBQUE7QUFmRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcHpvbmUge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIHotaW5kZXg6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuXHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgLy8gLy8gZm9udC13ZWlnaHQ6IDEyO1xyXG4gIC8vIGhlaWdodDogMTAwJTtcclxuICAvLyBib3JkZXI6IDJweCBkYXNoZWQgI2ZmMDAwMDtcclxuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLy8gYmFja2dyb3VuZDogd2hpdGUgO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLy8gdG9wOiAxMjJweDtcclxuICAvLyBsZWZ0OiAxMDQuMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvLyBtYXJnaW4tdG9wOiAyOSU7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDI1JTtcclxuXHJcblxyXG4gIGlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICB9XHJcblxyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDc1cHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbn1cclxuXHJcblxyXG4uZHJvcHpvbmUuaG92ZXJpbmcge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMGY4Mzk7XHJcbiAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcclxufVxyXG4uZHJvcHpvbmUgLmZpbGUtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxucHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgZWFzZTtcclxufVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-file-upload',
                templateUrl: './file-upload.component.html',
                styleUrls: ['./file-upload.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }]; }, { fileUrlEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], imgUrlEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _pages_private_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/private/file-upload/file-upload.component */ "YtdO");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/public/login/login.component */ "QuX9");
/* harmony import */ var _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/public/register/register.component */ "MyXD");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var angular_epub_viewer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-epub-viewer */ "MO89");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _pages_public_tags_tags_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/public/tags/tags.component */ "5VxN");
/* harmony import */ var _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/filter-tags.pipe */ "k51J");
/* harmony import */ var _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/private/home/home.component */ "dsDk");
/* harmony import */ var _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/private/profile/profile.component */ "fu3/");
/* harmony import */ var _pages_private_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/private/navigation-bar/navigation-bar.component */ "L0k6");
/* harmony import */ var _pages_private_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/private/footer/footer.component */ "oTol");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/filter.pipe */ "BhhM");
/* harmony import */ var _pages_private_external_profiles_external_profiles_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/private/external-profiles/external-profiles.component */ "QBD8");
/* harmony import */ var _pages_private_group_group_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/private/group/group.component */ "mLow");
/* harmony import */ var _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/filter-external-profiles.pipe */ "v5hE");
/* harmony import */ var _pages_private_book_pdf_book_pdf_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/private/book-pdf/book-pdf.component */ "eu5Z");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var _pages_private_book_chat_book_chat_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/private/book-chat/book-chat.component */ "vrEl");
/* harmony import */ var _pages_private_my_books_my_books_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/private/my-books/my-books.component */ "+SNX");











//firebase







//bootstrap

//Servicios














// import { matDrawerAnimations, MatDrawerContainer } from '@angular/material/sidenav';

//PDF Viewer






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestore"],
        _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthGuard"],
        _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterTagsPipe"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"],
        _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterExternalProfilesPipe"]
    ], imports: [[
            angular_epub_viewer__WEBPACK_IMPORTED_MODULE_17__["AngularEpubViewerModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_34__["PdfViewerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"],
            ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["NgxIntlTelInputModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot({
                timeOut: 3000,
                positionClass: 'toast-top-center',
                preventDuplicates: true,
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
        _pages_private_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__["FileUploadComponent"],
        _pages_public_tags_tags_component__WEBPACK_IMPORTED_MODULE_22__["TagsComponent"],
        _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterTagsPipe"],
        _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
        _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"],
        _pages_private_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_26__["NavigationBarComponent"],
        _pages_private_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"],
        _pages_private_external_profiles_external_profiles_component__WEBPACK_IMPORTED_MODULE_29__["ExternalProfilesComponent"],
        _pages_private_group_group_component__WEBPACK_IMPORTED_MODULE_30__["GroupComponent"],
        _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterExternalProfilesPipe"],
        _pages_private_book_pdf_book_pdf_component__WEBPACK_IMPORTED_MODULE_32__["BookPDFComponent"],
        _pages_private_book_chat_book_chat_component__WEBPACK_IMPORTED_MODULE_35__["BookChatComponent"],
        _pages_private_my_books_my_books_component__WEBPACK_IMPORTED_MODULE_36__["MyBooksComponent"]], imports: [angular_epub_viewer__WEBPACK_IMPORTED_MODULE_17__["AngularEpubViewerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_34__["PdfViewerModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"],
        ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["NgxIntlTelInputModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                    _pages_private_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__["FileUploadComponent"],
                    _pages_public_tags_tags_component__WEBPACK_IMPORTED_MODULE_22__["TagsComponent"],
                    _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterTagsPipe"],
                    _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                    _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"],
                    _pages_private_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_26__["NavigationBarComponent"],
                    _pages_private_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"],
                    _pages_private_external_profiles_external_profiles_component__WEBPACK_IMPORTED_MODULE_29__["ExternalProfilesComponent"],
                    _pages_private_group_group_component__WEBPACK_IMPORTED_MODULE_30__["GroupComponent"],
                    _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterExternalProfilesPipe"],
                    _pages_private_book_pdf_book_pdf_component__WEBPACK_IMPORTED_MODULE_32__["BookPDFComponent"],
                    _pages_private_book_chat_book_chat_component__WEBPACK_IMPORTED_MODULE_35__["BookChatComponent"],
                    _pages_private_my_books_my_books_component__WEBPACK_IMPORTED_MODULE_36__["MyBooksComponent"],
                ],
                imports: [
                    angular_epub_viewer__WEBPACK_IMPORTED_MODULE_17__["AngularEpubViewerModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_34__["PdfViewerModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"],
                    ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["NgxIntlTelInputModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot({
                        timeOut: 3000,
                        positionClass: 'toast-top-center',
                        preventDuplicates: true,
                    })
                ],
                providers: [
                    _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestore"],
                    _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthGuard"],
                    _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterTagsPipe"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"],
                    _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterExternalProfilesPipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dsDk":
/*!******************************************************!*\
  !*** ./src/app/pages/private/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/tag.service */ "lBcp");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/book.service */ "+9od");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../navigation-bar/navigation-bar.component */ "L0k6");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../footer/footer.component */ "oTol");




















function HomeComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tag_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r2);
} }
function HomeComponent_div_9_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_9_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.activateSelect(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " A\u00F1adir a mi grupo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "buttonGroup-" + i_r4);
} }
function HomeComponent_div_9_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const groups_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", groups_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](groups_r12);
} }
function HomeComponent_div_9_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_9_div_31_div_1_Template_label_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const bookComent_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.goToPerfil(bookComent_r13.User); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookComent_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", bookComent_r13.Images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bookComent_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bookComent_r13.Comment);
} }
function HomeComponent_div_9_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_9_div_31_div_1_Template, 9, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookComent_r13 = ctx.$implicit;
    const book_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", bookComent_r13.Title == book_r3.Title);
} }
function HomeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const i_r4 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.addBookToUser(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " A\u00F1adir a mi lista ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_div_9_button_17_Template, 2, 1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomeComponent_div_9_Template_select_change_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const i_r4 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.addBookToGroup(i_r4); })("ngModelChange", function HomeComponent_div_9_Template_select_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.groupValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Seleccione su grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HomeComponent_div_9_option_22_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const i_r4 = ctx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.activateComent(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "A\u00F1adir Comentario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_9_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.comentario = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const book_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.sendComentario(book_r3.Title, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Enviar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Comentarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, HomeComponent_div_9_div_31_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "imagen" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", book_r3.Portada, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "titulo" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r3.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "autor" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r3.Autor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Puntaje Promedio: ", book_r3.Stars, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"](" --fill:#feca57;--value:", book_r3.Stars, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", book_r3.Stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r3.Descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "button-" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.booksListGroup.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "activateGroupSelect" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.groupValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.booksListGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "activateComentInput" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.comentario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.bookComents);
} }
class HomeComponent {
    constructor(authService, tagService, firebaseAuth, userService, bookService, router, firebase, toastr, filter) {
        this.authService = authService;
        this.tagService = tagService;
        this.firebaseAuth = firebaseAuth;
        this.userService = userService;
        this.bookService = bookService;
        this.router = router;
        this.firebase = firebase;
        this.toastr = toastr;
        this.filter = filter;
        this.FormAdd = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Numbercontact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            Namecontact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.subscriptionList = {
            connection: undefined,
            msgs: undefined
        };
        this.searchBoxHome = '';
        // bookList: any[] = [];
        this.bookComents = [];
        this.bookTags = [];
        this.register = [];
        this.macthRecomended = [];
        this.booksList = [];
        this.booksListGroup = [];
        this.tagsList = [];
        this.arrTagsBooks = [];
        this.groupList = [];
        this.confirm = false;
        this.contador = 0;
        this.arr = [];
        this.ngFormLibro = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            imagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            titulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            autor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    goToProfile() {
        this.router.navigate(['/profile']);
    }
    goToHome() {
        this.router.navigate(['/home']);
    }
    ngOnInit() {
        // this.initChat();
        let $this = this;
        this.UserAcount();
        this.userService.getRegister()
            .snapshotChanges().subscribe(item => {
            this.registerList = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.registerList.push(x);
            });
            this.getMyGroupsAndBooks(this.registerList);
        });
        this.userService.getGroups()
            .snapshotChanges().subscribe(item => {
            this.groupList = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.groupList.push(x);
            });
        });
        this.tagService.getTags()
            .snapshotChanges().subscribe(item => {
            this.tagsList = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.tagsList.push(x);
            });
            console.log(this.tagsList);
        });
        this.bookService.getBooks()
            .snapshotChanges().subscribe(item => {
            this.bookList = [];
            item.forEach((element) => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.bookList.push(x);
            });
            this.macthRecomended = this.bookList;
            $this.callTags(this.bookList, this.tagsList);
            $this.coments(this.bookList, this.registerList);
        });
    }
    callTags(lista, tags) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Key;
            let entries;
            const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            lista.forEach((element) => {
                if ("Tags" in element) {
                    entries = Object.values(element.Tags);
                    this.arrTagsBooks.push({ tags: entries, name: element.Title });
                }
            });
            // console.log(this.arrTagsBooks);
            this.tagsList = Object.values(tags[0]);
        });
    }
    getBooksByTag() {
        let entries;
        console.log("this.tag");
        console.log(this.tag);
        if (this.tag == "All") {
            this.macthRecomended = this.booksList;
        }
        else {
            this.macthRecomended = [];
            this.bookList.forEach((element, index) => {
                if ("Tags" in element) {
                    entries = Object.values(element.Tags);
                    console.log(entries);
                    for (let i = 0; i < entries.length; i++) {
                        if (this.tag == entries[i]) {
                            this.macthRecomended.push(element);
                        }
                    }
                }
            });
        }
        console.log("this.macthRecomended");
        console.log(this.macthRecomended);
        if (this.macthRecomended.length == 0) {
            this.macthRecomended = this.bookList;
        }
    }
    activateSelect(i) {
        let activate = document.getElementById("activateGroupSelect" + i);
        activate.style.display = "block";
    }
    sendComentario(nombreLibro, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            if (this.comentario != '') {
                let Key;
                yield this.bookList.forEach((element, index) => {
                    if ("Title" in element) {
                        if (element.Title == nombreLibro) {
                            Key = element.$key;
                        }
                    }
                });
                console.log("Key");
                console.log(Key);
                this.firebase.database.ref("books").child(Key).child("Comentarios").push({
                    Comment: this.comentario,
                    User: Email
                });
                this.toastr.success('Comentario enviado', 'Exitosamente');
                this.comentario = "";
                let activateComent = document.getElementById("activateComentInput" + i);
                activateComent.style.display = "none";
            }
        });
    }
    getMyGroupsAndBooks(list) {
        let entries;
        let entriesBooks;
        const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
        list.forEach((element, index) => {
            if (element.email == Email) {
                if ("Groups" in element) {
                    entries = Object.keys(element.Groups);
                    for (let i = 0; i < entries.length; i++) {
                        if (element.Groups[entries[i]].category == "owner") {
                            this.booksListGroup.push(element.Groups[entries[i]].groupName);
                        }
                    }
                }
            }
            // if ("MisLibros" in element){
            //   entriesBooks = Object.keys(element.MisLibros);
            //   for (let i = 0; i < entriesBooks.length; i++) {
            //     this.booksListGroup.push(element.MisLibros[entriesBooks[i]].Titulo);
            //   }        
            // }
        });
    }
    activateComent(i) {
        let activateComent = document.getElementById("activateComentInput" + i);
        activateComent.style.display = "block";
    }
    coments(books, register) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let entries;
            let bookComentLocal = [];
            this.bookComents = [];
            bookComentLocal = this.bookComents;
            console.log("bookComentLocal");
            console.log(bookComentLocal);
            console.log("this.bookComents");
            console.log(this.bookComents);
            yield books.forEach((element) => {
                if ("Comentarios" in element) {
                    entries = Object.keys(element.Comentarios);
                    for (let i = 0; i < entries.length; i++) {
                        bookComentLocal.push({ Comment: element.Comentarios[entries[i]].Comment, User: element.Comentarios[entries[i]].User, Title: element.Title });
                    }
                }
            });
            console.log(" register");
            console.log(register);
            yield register.forEach((element) => {
                if (bookComentLocal.length != 0) {
                    for (let i = 0; i < bookComentLocal.length; i++) {
                        if (bookComentLocal[i].User == element.email) {
                            if ("Images" in element) {
                                entries = Object.keys(element.Images);
                                let index = entries.length - 1;
                                bookComentLocal[i].Images = element.Images[entries[index]].ImgUrl;
                                bookComentLocal[i].name = element.name + " " + element.lname;
                            }
                            else {
                                bookComentLocal[i].Images = "../../../../../../assets/img/NoImage.png";
                                bookComentLocal[i].name = element.name + " " + element.lname;
                            }
                        }
                    }
                }
            });
            console.log("bookComentLocal");
            console.log(bookComentLocal);
        });
    }
    UserAcount() {
        // var user = this.firebaseAuth.auth.currentUser;
        let $this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                if (user != null) {
                    user.providerData.forEach(function (profile) {
                        // console.log("Sign-in provider: " + profile.providerId);
                        // console.log("  Provider-specific UID: " + profile.uid);
                        // console.log("  Name: " + profile.displayName);
                        // console.log("  Email: " + profile.email);
                        // $this.addBookToUser(profile.email,"");
                    });
                }
                // console.log(user);
            }
            else {
                // No user is signed in.
            }
        });
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigate(['/']);
        });
    }
    addBookToUser(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Key;
            let alink;
            const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            this.imagen = this.macthRecomended[i].Portada;
            this.titulo = this.macthRecomended[i].Title;
            this.autor = this.macthRecomended[i].Autor;
            alink = this.macthRecomended[i].alink;
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    // console.log("entre nivel1");
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == Email) {
                        Key = childKey;
                        user.forEach((info) => {
                            info.forEach((MisLibros) => {
                                MisLibros.forEach((Libros) => {
                                    const LibrosChildKey = Libros.key;
                                    const LibrosChildData = Libros.val();
                                    if (LibrosChildKey == "Titulo") {
                                        if (LibrosChildData == this.titulo) {
                                            this.arr.push(LibrosChildData);
                                        }
                                    }
                                });
                            });
                        });
                    }
                });
            });
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] == this.titulo) {
                    this.contador++;
                }
            }
            if (this.contador == 0) {
                this.confirm = true;
            }
            else {
                this.toastr.error('El libro ya se encuentra en tu lista', 'Fallido');
            }
            if (this.confirm == true) {
                this.firebase.database.ref("register").child(Key).child("MisLibros").push({
                    Imagen: this.imagen,
                    Titulo: this.titulo,
                    Autor: this.autor,
                    alink: alink,
                    Pag: 0
                });
                this.toastr.success('Libro añadido a tu lista', 'Exitosamente');
            }
            this.contador = 0;
            this.confirm = false;
            this.arr = [];
        });
    }
    goToPerfil(email) {
        this.router.navigate(['externalProfiles', { email: email }]);
    }
    addBookToGroup(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alink;
            let keygroup;
            let booksinGroup = [];
            let entries;
            let contador = 0;
            let activate = document.getElementById("activateGroupSelect" + i);
            activate.style.display = "none";
            this.titulo = this.macthRecomended[i].Title;
            this.imagen = this.macthRecomended[i].Portada;
            this.autor = this.macthRecomended[i].Autor;
            alink = this.macthRecomended[i].alink;
            yield this.firebase.database.ref("groups").once("value", (users) => {
                users.forEach((user) => {
                    // console.log("entre nivel1");
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.name == this.groupValue) {
                        keygroup = childKey;
                    }
                });
            });
            this.groupList.forEach((element) => {
                if (element.name == this.groupValue) {
                    if ("books" in element) {
                        entries = Object.keys(element.books);
                        for (let i = 0; i < entries.length; i++) {
                            booksinGroup.push(element.books[entries[i]].Titulo);
                        }
                    }
                }
            });
            if (booksinGroup.length == 0) {
                this.firebase.database.ref("groups").child(keygroup).child("books").push({
                    Autor: this.autor,
                    Imagen: this.imagen,
                    Titulo: this.titulo,
                    alink: alink,
                    Pag: 0
                });
                booksinGroup.push(this.titulo);
                this.toastr.success('Libro añadido a tu grupo', 'Exitosamente');
            }
            for (let i = 0; i < booksinGroup.length; i++) {
                if (this.titulo == booksinGroup[i]) {
                    contador++;
                }
            }
            if (contador == 0) {
                this.firebase.database.ref("groups").child(keygroup).child("books").push({
                    Autor: this.autor,
                    Imagen: this.imagen,
                    Titulo: this.titulo,
                    alink: alink,
                    Pag: 0
                });
                booksinGroup.push(this.titulo);
                this.toastr.success('Libro añadido a tu grupo', 'Exitosamente');
            }
            else {
                this.toastr.error('El libro ya se encuentra en el grupo');
            }
            this.groupValue = "";
        });
    }
    SendContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Key;
            const ContactName = this.FormAdd.controls.Namecontact.value;
            let ContactNumber = this.FormAdd.controls.Numbercontact.value;
            const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            let emailRegexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
            let userExist;
            yield this.firebase.database.ref('register').once('value', users => {
                users.forEach(user => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == Email) {
                        Key = childKey;
                        // console.log("entramos", childKey);
                    }
                    // console.log("recorrido", childKey);
                });
            });
            if (ContactNumber.match(emailRegexp)) {
                // Es correo
                // console.log("Es correo");
                userExist = this.registerList.find(user => user.email == ContactNumber);
                ContactNumber = userExist && userExist.email || undefined;
                if (!userExist) {
                    // console.log("Este usuario no existe")
                }
                else {
                    // console.log(ContactName, ContactNumber);
                    this.firebase.database.ref('register').child(Key).child('contacts').push({
                        Namecontact: ContactName,
                        Numbercontact: ContactNumber,
                    });
                }
            }
            else {
                // console.log("Es teléfono");
                // Es teléfono
                userExist = this.registerList.find(user => user.telefono.e164Number == ContactNumber && user);
                if (!userExist) {
                    // console.log("Este usuario no existe")
                }
                else {
                    // console.log(ContactName, ContactNumber);
                    this.firebase.database.ref('register').child(Key).child('contacts').push({
                        Namecontact: ContactName,
                        Numbercontact: ContactNumber,
                    });
                }
            }
            this.FormAdd.reset({
                Namecontact: "",
                Numbercontact: "",
            });
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 7, consts: [[1, "container"], [2, "margin-top", "65px", "margin-bottom", "-21px"], ["id", "form1", "type", "search", "name", "searchBoxHome", "placeholder", "Buscar", 1, "searchBar", 3, "ngModel", "ngModelChange"], [2, "margin-bottom", "3px", "display", "flex", "justify-content", "right", "width", "100%"], [3, "ngModel", "change", "ngModelChange"], ["value", "All", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "value"], ["alt", "imagenes", 1, "bookImg", 3, "id", "src"], [1, "cuerpoText"], ["align", "center", 3, "id"], [1, "contenedorStars"], [1, "rating-label"], ["max", "5", "readonly", "", "step", "0.01", "type", "range", 1, "rating", 3, "value"], [1, "descripcion"], [1, "btnContainer"], [1, "button", "is-info", 2, "width", "45%", 3, "id", "click"], ["class", "button is-info", "style", "width: 50%; margin-left: 5px;", 3, "id", "click", 4, "ngIf"], [2, "margin-top", "10px", "display", "none", 3, "id"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "button", "is-info", 2, "width", "55%", "margin-top", "5px", 3, "click"], [2, "display", "none", 3, "id"], ["type", "text", "placeholder", "Escriba su comentario", 2, "margin-top", "5px", 3, "ngModel", "ngModelChange"], [1, "button", "is-info", 2, "margin-top", "5px", "margin-left", "2px", "width", "25%", "height", "10%", 3, "click"], [2, "color", "#205493", "font-weight", "bold", "font-size", "medium", "font-family", "Helvetica", "margin-top", "15px"], [1, "button", "is-info", 2, "width", "50%", "margin-left", "5px", 3, "id", "click"], [3, "ngValue"], [4, "ngIf"], [1, "comentario"], ["alt", "", 1, "commentPhoto", 3, "src"], [1, "user", 3, "click"], [1, "commentText"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchBoxHome = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomeComponent_Template_select_change_5_listener() { return ctx.getBooksByTag(); })("ngModelChange", function HomeComponent_Template_select_ngModelChange_5_listener($event) { return ctx.tag = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeComponent_option_8_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 32, 20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchBoxHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tagsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 4, ctx.macthRecomended, ctx.searchBoxHome));
    } }, directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavigationBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_14__["NativeElementInjectorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"]], pipes: [src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]], styles: ["@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\n.rating[_ngcontent-%COMP%] {\n  --dir: right;\n  --fill: #feca57;\n  --fillbg: rgba(100, 100, 100, 0.15);\n  --heart: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 21.328l-1.453-1.313q-2.484-2.25-3.609-3.328t-2.508-2.672-1.898-2.883-0.516-2.648q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109 2.344 0 3.914 1.594t1.57 3.891q0 1.828-1.219 3.797t-2.648 3.422-4.664 4.359z\"/></svg>');\n  --star: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z\"/></svg>');\n  --stars: 5;\n  --starsize: 3rem;\n  --symbol: var(--star);\n  --value: 1;\n  --w: calc(var(--stars) * var(--starsize));\n  --x: calc(100% * (var(--value) / var(--stars)));\n  block-size: var(--starsize);\n  inline-size: var(--w);\n  position: relative;\n  touch-action: manipulation;\n  -webkit-appearance: none;\n}\n[dir=rtl][_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  --dir: left;\n}\n.rating[_ngcontent-%COMP%]::-moz-range-track {\n  background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));\n  block-size: 100%;\n  mask: repeat left center/var(--starsize) var(--symbol);\n}\n.rating[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));\n  block-size: 100%;\n  mask: repeat left center/var(--starsize) var(--symbol);\n  -webkit-mask: repeat left center/var(--starsize) var(--symbol);\n}\n.rating[_ngcontent-%COMP%]::-moz-range-thumb {\n  height: var(--starsize);\n  opacity: 0;\n  width: var(--starsize);\n}\n.rating[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  height: var(--starsize);\n  opacity: 0;\n  width: var(--starsize);\n  -webkit-appearance: none;\n}\n.rating[_ngcontent-%COMP%], .rating-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: ui-sans-serif, system-ui, sans-serif;\n}\n.rating-label[_ngcontent-%COMP%] {\n  -webkit-margin-after: 1rem;\n          margin-block-end: 1rem;\n  text-align: center;\n}\n\n.rating--nojs[_ngcontent-%COMP%]::-moz-range-track {\n  background: var(--fillbg);\n}\n.rating--nojs[_ngcontent-%COMP%]::-moz-range-progress {\n  background: var(--fill);\n  block-size: 100%;\n  mask: repeat left center/var(--starsize) var(--star);\n}\n.rating--nojs[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background: var(--fillbg);\n}\n.rating--nojs[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  background-color: var(--fill);\n  box-shadow: calc(0rem - var(--w)) 0 0 var(--w) var(--fill);\n  opacity: 1;\n  width: 1px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .rating--nojs[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: var(--w) 0 0 var(--w) var(--fill);\n}\n@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  color: #212121;\n}\n.searchBar[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 1;\n  top: 55px;\n  margin-left: 5px;\n  border-radius: 10px;\n  padding-left: 5px;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  padding-bottom: 30px;\n}\n.container[_ngcontent-%COMP%]   .bookImg[_ngcontent-%COMP%] {\n  width: 100%;\n  \n  height: 200px;\n  \n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%] {\n  padding-left: 12%;\n  padding-right: 12%;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-align: center;\n  margin-top: 5%;\n  margin-bottom: 0.5%;\n  color: #205493;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n  margin-bottom: 3%;\n  color: #0071bc;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .contenedorStars[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n  margin-top: -2%;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .contenedorStars[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  width: 10%;\n  height: 10%;\n  margin-right: 2%;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .contenedorTags[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  font-size: 18px;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .contenedorTags[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin-right: 2%;\n  color: #0071bc;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .descripcion[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n  text-align: justify;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .comentario[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  flex-wrap: nowrap;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .comentario[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  color: #0071bc;\n  margin-left: 5px;\n  font-size: medium;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .comentario[_ngcontent-%COMP%]   .commentText[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: medium;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .comentario[_ngcontent-%COMP%]   .commentPhoto[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n  border-radius: 100%;\n  border: solid 1px #212121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1EsOEVBQUE7QUFFUjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSx5VkFBQTtFQUNBLHNPQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUFISjtBQUtFO0VBQ0UsV0FBQTtBQUZKO0FBSUU7RUFDRSw0RkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7QUFESjtBQUdFO0VBQ0UsNEZBQUE7RUFDQSxnQkFBQTtFQUNBLHNEQUFBO0VBQ0EsOERBQUE7QUFBSjtBQUVFO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNFO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQUVKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsaURBQUE7QUFHSjtBQURFO0VBQ0UsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FBSUo7QUFERSxVQUFBO0FBQ0E7RUFDRSx5QkFBQTtBQUlKO0FBRkU7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0RBQUE7QUFLSjtBQUhFO0VBQ0UseUJBQUE7QUFNSjtBQUpFO0VBQ0UsNkJBQUE7RUFDQSwwREFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBT0o7QUFMRTtFQUNFLDZDQUFBO0FBUUo7QUFMQTtFQUNJLDZCQUFBO0VBQ0EsNENBQUE7QUFRSjtBQUxBO0VBQ0ksNEJBQUE7RUFDQSwyQ0FBQTtBQU9KO0FBSkE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQU1KO0FBRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDQTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUVBLG9CQUFBO0FBQUo7QUFJSTtFQUNJLFdBQUE7RUFBYSx1QkFBQTtFQUNiLGFBQUE7RUFBZSx3QkFBQTtFQUNmLG9CQUFBO0tBQUEsaUJBQUE7QUFBUjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0F4Q0E7QUFxQ1o7QUFPUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0EvQ0E7QUEwQ1o7QUFRUTtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVBaO0FBU1k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBUGhCO0FBWVE7RUFHSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFaWjtBQWNZO0VBQ0ksZ0JBQUE7RUFDQSxjQTNFSjtBQStEWjtBQWlCUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFmWjtBQWtCUTtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBakJaO0FBb0JZO0VBQ0ksY0E3Rko7RUE4RkksZ0JBQUE7RUFDQSxpQkFBQTtBQWxCaEI7QUFxQlk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBbkJkO0FBc0JZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBcEJoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvZHlGb250OiBzZlByb1RleHRSZWd1bGFyO1xyXG4kdGl0bGVGb250OiBzZlByb1RleHRNZWRpdW07XHJcblxyXG5AaW1wb3J0IHVybCgvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS8zLjIuMS9jc3MvZm9udC1hd2Vzb21lLmNzcyk7XHJcblxyXG4ucmF0aW5nIHtcclxuICAgIC0tZGlyOiByaWdodDtcclxuICAgIC0tZmlsbDogI2ZlY2E1NztcclxuICAgIC0tZmlsbGJnOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMTUpO1xyXG4gICAgLS1oZWFydDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMjEuMzI4bC0xLjQ1My0xLjMxM3EtMi40ODQtMi4yNS0zLjYwOS0zLjMyOHQtMi41MDgtMi42NzItMS44OTgtMi44ODMtMC41MTYtMi42NDhxMC0yLjI5NyAxLjU3LTMuODkxdDMuOTE0LTEuNTk0cTIuNzE5IDAgNC41IDIuMTA5IDEuNzgxLTIuMTA5IDQuNS0yLjEwOSAyLjM0NCAwIDMuOTE0IDEuNTk0dDEuNTcgMy44OTFxMCAxLjgyOC0xLjIxOSAzLjc5N3QtMi42NDggMy40MjItNC42NjQgNC4zNTl6XCIvPjwvc3ZnPicpO1xyXG4gICAgLS1zdGFyOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAxNy4yNWwtNi4xODggMy43NSAxLjY0MS03LjAzMS01LjQzOC00LjczNCA3LjE3Mi0wLjYwOSAyLjgxMy02LjYwOSAyLjgxMyA2LjYwOSA3LjE3MiAwLjYwOS01LjQzOCA0LjczNCAxLjY0MSA3LjAzMXpcIi8+PC9zdmc+Jyk7XHJcbiAgICAtLXN0YXJzOiA1O1xyXG4gICAgLS1zdGFyc2l6ZTogM3JlbTtcclxuICAgIC0tc3ltYm9sOiB2YXIoLS1zdGFyKTtcclxuICAgIC0tdmFsdWU6IDE7XHJcbiAgICAtLXc6IGNhbGModmFyKC0tc3RhcnMpICogdmFyKC0tc3RhcnNpemUpKTtcclxuICAgIC0teDogY2FsYygxMDAlICogKHZhcigtLXZhbHVlKSAvIHZhcigtLXN0YXJzKSkpO1xyXG4gICAgYmxvY2stc2l6ZTogdmFyKC0tc3RhcnNpemUpO1xyXG4gICAgaW5saW5lLXNpemU6IHZhcigtLXcpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG4gIFtkaXI9XCJydGxcIl0gLnJhdGluZyB7XHJcbiAgICAtLWRpcjogbGVmdDtcclxuICB9XHJcbiAgLnJhdGluZzo6LW1vei1yYW5nZS10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdmFyKC0tZGlyKSwgdmFyKC0tZmlsbCkgMCB2YXIoLS14KSwgdmFyKC0tZmlsbGJnKSAwIHZhcigtLXgpKTtcclxuICAgIGJsb2NrLXNpemU6IDEwMCU7XHJcbiAgICBtYXNrOiByZXBlYXQgbGVmdCBjZW50ZXIvdmFyKC0tc3RhcnNpemUpIHZhcigtLXN5bWJvbCk7XHJcbiAgfVxyXG4gIC5yYXRpbmc6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB2YXIoLS1kaXIpLCB2YXIoLS1maWxsKSAwIHZhcigtLXgpLCB2YXIoLS1maWxsYmcpIDAgdmFyKC0teCkpO1xyXG4gICAgYmxvY2stc2l6ZTogMTAwJTtcclxuICAgIG1hc2s6IHJlcGVhdCBsZWZ0IGNlbnRlci92YXIoLS1zdGFyc2l6ZSkgdmFyKC0tc3ltYm9sKTtcclxuICAgIC13ZWJraXQtbWFzazogcmVwZWF0IGxlZnQgY2VudGVyL3ZhcigtLXN0YXJzaXplKSB2YXIoLS1zeW1ib2wpO1xyXG4gIH1cclxuICAucmF0aW5nOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgIGhlaWdodDogdmFyKC0tc3RhcnNpemUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiB2YXIoLS1zdGFyc2l6ZSk7XHJcbiAgfVxyXG4gIC5yYXRpbmc6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgIGhlaWdodDogdmFyKC0tc3RhcnNpemUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiB2YXIoLS1zdGFyc2l6ZSk7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG4gIC5yYXRpbmcsIC5yYXRpbmctbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAucmF0aW5nLWxhYmVsIHtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE5PIEpTICovXHJcbiAgLnJhdGluZy0tbm9qczo6LW1vei1yYW5nZS10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1maWxsYmcpO1xyXG4gIH1cclxuICAucmF0aW5nLS1ub2pzOjotbW96LXJhbmdlLXByb2dyZXNzIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpbGwpO1xyXG4gICAgYmxvY2stc2l6ZTogMTAwJTtcclxuICAgIG1hc2s6IHJlcGVhdCBsZWZ0IGNlbnRlci92YXIoLS1zdGFyc2l6ZSkgdmFyKC0tc3Rhcik7XHJcbiAgfVxyXG4gIC5yYXRpbmctLW5vanM6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpbGxiZyk7XHJcbiAgfVxyXG4gIC5yYXRpbmctLW5vanM6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwpO1xyXG4gICAgYm94LXNoYWRvdzogY2FsYygwcmVtIC0gdmFyKC0tdykpIDAgMCB2YXIoLS13KSB2YXIoLS1maWxsKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gIH1cclxuICBbZGlyPVwicnRsXCJdIC5yYXRpbmctLW5vanM6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXcpIDAgMCB2YXIoLS13KSB2YXIoLS1maWxsKTtcclxuICB9IFxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2ZQcm9UZXh0UmVndWxhcjtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvU0ZQcm9UZXh0UmVndWxhci50dGYpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzZlByb1RleHRNZWRpdW07XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1NGUHJvVGV4dE1lZGl1bS50dGYpO1xyXG59XHJcblxyXG4qIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbn1cclxuXHJcbiRhenVsT3NjdXJvOiAjMTEyZTUxO1xyXG4kQXp1bE1lZGlvOiAjMjA1NDkzO1xyXG4kQXp1bENsYXJvOiAjMDA3MWJjO1xyXG4kdGV4dDogIzIxMjEyMTtcclxuXHJcbi5zZWFyY2hCYXJ7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xyXG4gICAgXHJcblxyXG4gICAgLmJvb2tJbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIHdpZHRoIG9mIGNvbnRhaW5lciAqL1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7IC8qIGhlaWdodCBvZiBjb250YWluZXIgKi9cclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY3VlcnBvVGV4dHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMiU7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNSU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkQXp1bE1lZGlvO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgICAgICAgICBjb2xvcjogJEF6dWxDbGFybztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW5lZG9yU3RhcnN7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMiU7XHJcblxyXG4gICAgICAgICAgICAuc3RhcnN7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjpjYWRldGJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW5lZG9yVGFnc3tcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC50YWdze1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkQXp1bENsYXJvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmRlc2NyaXBjaW9ue1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb21lbnRhcmlve1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC51c2Vye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRBenVsQ2xhcm87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb21tZW50VGV4dHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29tbWVudFBob3Rve1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJHRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _services_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__["BookService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }, { type: src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"] }]; }, null); })();


/***/ }),

/***/ "eu5Z":
/*!**************************************************************!*\
  !*** ./src/app/pages/private/book-pdf/book-pdf.component.ts ***!
  \**************************************************************/
/*! exports provided: BookPDFComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPDFComponent", function() { return BookPDFComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navigation-bar/navigation-bar.component */ "L0k6");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");
/* harmony import */ var angular_epub_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-epub-viewer */ "MO89");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../footer/footer.component */ "oTol");
/* harmony import */ var _book_chat_book_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../book-chat/book-chat.component */ "vrEl");

















const _c0 = ["epubViewer"];
function BookPDFComponent_app_book_chat_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-book-chat", 16);
} if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("msg", msg_r4);
} }
function BookPDFComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Go to chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class BookPDFComponent {
    constructor(chatService, route, firebase, userService) {
        this.chatService = chatService;
        this.route = route;
        this.firebase = firebase;
        this.userService = userService;
        this.msgs = [];
        this.subscriptionList = {
            connection: undefined,
            newMgs: undefined,
            pageUpdate: undefined
        };
        this.isGroup = false;
        this.showFiller = false;
        this.msgForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        this.url = this.route.snapshot.paramMap.get("url");
        this.pag = this.route.snapshot.paramMap.get("Pag");
        this.title = this.route.snapshot.paramMap.get("title");
        this.group = this.route.snapshot.paramMap.get("group");
        if (this.group != "") {
            this.isGroup = true;
            this.initChat();
        }
        this.name = this.title;
    }
    ngAfterViewInit() {
        this.epubViewer.openLink(this.url);
    }
    initChat() {
        this.subscriptionList.connection = this.chatService.connect().subscribe(_ => {
            console.log("Nos conectamos");
            this.subscriptionList.newMgs = this.chatService.getNewMsgs().subscribe((msg) => {
                if (msg.group == this.group && msg.book == this.title) {
                    this.msgs.push(msg);
                }
            });
            this.subscriptionList.pageUpdate = this.chatService.getChangePage().subscribe((info) => {
                if (info.group == this.group && info.book == this.title) {
                    if (info.page == "Next")
                        this.epubViewer.nextPage();
                    else if (info.page == "Previous")
                        this.epubViewer.previousPage();
                    // else if (info.page == "Continue") this.epubViewer.goTo(5); AIUDA
                }
            });
        });
    }
    nextPage() {
        const pageInfo = { group: this.group, book: this.title, page: "Next" };
        this.savePage(1);
        if (this.group != "") {
            this.chatService.sendpageChange(pageInfo);
        }
        this.epubViewer.nextPage();
    }
    previousPage() {
        this.savePage(-1);
        const pageInfo = { group: this.group, book: this.title, page: "Previous" };
        if (this.group != "") {
            this.chatService.sendpageChange(pageInfo);
        }
        this.epubViewer.previousPage();
    }
    sendMsg() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(firebase.auth().currentUser);
            let img = "";
            yield this.userService.getUserImg(firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email).then(value => {
                img = value;
            });
            const msg = {
                content: this.msgForm.value,
                time: Date.now().toString(),
                user: img == "" ? "../../../../../../assets/img/NoImage.png" : img,
                group: this.group,
                book: this.title
            };
            this.chatService.sendMsg(msg);
            this.msgForm.setValue("");
        });
    }
    savePage(pag) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isGroup == false) {
                const email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                const ref = this.firebase.database.ref('register');
                ref.orderByChild('email').equalTo(email).limitToLast(1).once("value", (user) => {
                    console.log(user.val());
                    user = user.val();
                    let userKey = Object.keys(user);
                    console.log(userKey);
                    let books = user[Object.keys(user)[0]].MisLibros;
                    let bookKeys = Object.keys(books);
                    bookKeys.forEach(element => {
                        if (books[element].Titulo == this.title) {
                            console.log(books[element].Titulo);
                            let currentpage = books[element].Pag;
                            this.firebase.database.ref("register").child(userKey[0]).child("MisLibros").child(element).child("Pag").set(currentpage + pag);
                        }
                    });
                });
            }
            else {
                const ref = this.firebase.database.ref('groups');
                ref.orderByChild('name').equalTo(this.group).limitToLast(1).once("value", (group) => {
                    group = group.val();
                    let groupKey = Object.keys(group);
                    let books = group[Object.keys(group)[0]].books;
                    let bookKeys = Object.keys(books);
                    bookKeys.forEach(element => {
                        if (books[element].Titulo == this.title) {
                            let currentpage = books[element].Pag;
                            this.firebase.database.ref("groups").child(groupKey[0]).child("books").child(element).child("Pag").set(currentpage + pag);
                        }
                    });
                });
            }
        });
    }
    btnDisplay() {
        document.getElementById("BtnContinue").style.display = "none";
    }
}
BookPDFComponent.ɵfac = function BookPDFComponent_Factory(t) { return new (t || BookPDFComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
BookPDFComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookPDFComponent, selectors: [["app-book-pdf"]], viewQuery: function BookPDFComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.epubViewer = _t.first);
    } }, decls: 25, vars: 4, consts: [[1, "name"], [1, "example-container"], ["position", "end", "mode", "side", 1, "chat"], ["drawer", ""], ["type", "button", "mat-button", "", 3, "click"], [3, "msg", 4, "ngFor", "ngForOf"], ["id", "msgID", "type", "text", 1, "inputMSG", 3, "formControl"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", 3, "click"], ["type", "button", "mat-button", "", 3, "click", 4, "ngIf"], ["id", "container"], [1, "example-sidenav-content"], [1, "epubContainer", 2, "height", "500px", "width", "80vw"], ["id", "BtnContinue", 3, "click"], ["padding", "10px"], ["epubViewer", ""], [3, "click"], [3, "msg"]], template: function BookPDFComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-drawer-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Go to book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BookPDFComponent_app_book_chat_8_Template, 1, 1, "app-book-chat", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_Template_button_click_10_listener() { return ctx.sendMsg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Enviar mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BookPDFComponent_button_12_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_Template_button_click_16_listener() { return ctx.btnDisplay(); })("click", function BookPDFComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19); return _r3.goTo(ctx.pag); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Continuar Leyendo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "angular-epub-viewer", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_Template_button_click_20_listener() { return ctx.previousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Previous page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_Template_button_click_22_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Next page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.msgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.msgForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isGroup);
    } }, directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavigationBarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], angular_epub_viewer__WEBPACK_IMPORTED_MODULE_12__["AngularEpubViewerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _book_chat_book_chat_component__WEBPACK_IMPORTED_MODULE_14__["BookChatComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  overflow-y: hidden;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: larger;\n  text-align: center;\n  color: #205493;\n  align-self: center;\n  margin-top: 80px;\n  margin-bottom: 10px;\n}\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n}\n\n#container[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 30px;\n}\n\n#bookContainer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#BtnContinue[_ngcontent-%COMP%] {\n  width: 80%;\n  background-color: rgba(255, 255, 255, 0.9);\n  position: absolute;\n  top: 100px;\n  z-index: 99;\n  height: 300px;\n  border-color: transparent;\n}\n\n.chat[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.inputMSG[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 80vw;\n  height: 100px;\n  border-radius: 20px;\n  padding: 10px;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ib29rLXBkZi9ib29rLXBkZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBUFE7RUFRUixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFNQTtFQUdJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVNBO0VBRUksV0FBQTtBQVBKOztBQVVBO0VBQ0ksVUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQVBKOztBQWNBO0VBQ0ksV0FBQTtBQVhKOztBQWVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBS0EsdUJBQUE7RUFFQSxzQkFBQTtFQUNBLGFBQUE7QUFsQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcml2YXRlL2Jvb2stcGRmL2Jvb2stcGRmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG4kYXp1bE9zY3VybzogIzExMmU1MTtcclxuJEF6dWxNZWRpbzogIzIwNTQ5MztcclxuJEF6dWxDbGFybzogIzAwNzFiYztcclxuJHRleHQ6ICMyMTIxMjE7XHJcblxyXG4ubmFtZXtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRBenVsTWVkaW87XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBhZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGFpbmVye1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMzBweDtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuXHJcbn1cclxuXHJcbiNib29rQ29udGFpbmVye1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jQnRuQ29udGludWV7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmLCAkYWxwaGE6IDAuOSkgO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uY2hhdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmlucHV0TVNHe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIC8vIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookPDFComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-book-pdf',
                templateUrl: './book-pdf.component.html',
                styleUrls: ['./book-pdf.component.scss']
            }]
    }], function () { return [{ type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, { epubViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['epubViewer']
        }] }); })();


/***/ }),

/***/ "fu3/":
/*!************************************************************!*\
  !*** ./src/app/pages/private/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/book.service */ "+9od");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/tag.service */ "lBcp");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../navigation-bar/navigation-bar.component */ "L0k6");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../file-upload/file-upload.component */ "YtdO");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../footer/footer.component */ "oTol");





















function ProfileComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_tr_24_Template_img_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.deleteSth("eliminate-" + i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const misTags_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "contTag" + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "mitag" + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](misTags_r4.Tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r5);
} }
function ProfileComponent_31_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_31_ng_template_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.goToBook(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_31_ng_template_0_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.deleteBook(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r9 = ctx_r16.index;
    const misLibros_r8 = ctx_r16.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "imagen" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", misLibros_r8.Imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "titulo" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](misLibros_r8.Titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "autor" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](misLibros_r8.Autor);
} }
function ProfileComponent_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProfileComponent_31_ng_template_0_Template, 9, 7, "ng-template", 23);
} if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "mislibros" + i_r9);
} }
function ProfileComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_34_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const misAmigos_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.goToPerfil(misAmigos_r17.User); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_34_Template_p_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const misAmigos_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.goToPerfil(misAmigos_r17.User); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_34_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const i_r18 = ctx.index; const misAmigos_r17 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.deleteFriend(i_r18, misAmigos_r17.User); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const misAmigos_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("containerAmigos" + i_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "foto" + i_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", misAmigos_r17.Images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](misAmigos_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r18);
} }
function ProfileComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_37_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const misgrupos_r23 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.goToGroup(misgrupos_r23.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_37_Template_p_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const misgrupos_r23 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.goToGroup(misgrupos_r23.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const misgrupos_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("containerAmigos" + i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "foto" + i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", misgrupos_r23.Images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](misgrupos_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r24);
} }
class ProfileComponent {
    constructor(_config, authService, firebaseAuth, userService, bookService, router, firebase, toastr, filterpipe, tagService) {
        this._config = _config;
        this.authService = authService;
        this.firebaseAuth = firebaseAuth;
        this.userService = userService;
        this.bookService = bookService;
        this.router = router;
        this.firebase = firebase;
        this.toastr = toastr;
        this.filterpipe = filterpipe;
        this.tagService = tagService;
        this.misTagsList = [];
        this.misLibrosList = [];
        this.misAmigosList = [];
        this.keyOrdenList = [];
        this.KeyUSER = "";
        this.keyOrdenAmigosList = [];
        this.keyOrdenBooksList = [];
        this.misGroupsList = [];
        this.ngFormProfile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.UserAcount();
            this.userService
                .getRegister()
                .snapshotChanges()
                .subscribe((item) => {
                this.registerList = [];
                item.forEach((element) => {
                    let x = element.payload.toJSON();
                    x["$key"] = element.key;
                    this.registerList.push(x);
                });
                this.archieveGroups(this.groupList, this.registerList);
                this.getMisAmigos();
            });
            this.userService
                .getGroups()
                .snapshotChanges()
                .subscribe((item) => {
                this.groupList = [];
                item.forEach((element) => {
                    let x = element.payload.toJSON();
                    x["$key"] = element.key;
                    this.groupList.push(x);
                });
                this.archieveGroups(this.groupList, this.registerList);
                this.getMisGrupos();
            });
            //  await this.PrintConsistance();
            //  await this.UpdatePerfilPhoto();
            //  await this.WhoIsWritingMe();
            //  await this.SearchImg();
        });
    }
    archieveGroups(list, list2) {
        this.groupList = list;
        this.registerList = list2;
    }
    goToHome() {
        this.router.navigate(["/home"]);
    }
    goToProfile() {
        this.router.navigate(["/profile"]);
    }
    goToTags() {
        this.router.navigate(["/tags"]);
    }
    goToBook(i) {
        // console.log(this.misLibrosList[i]);
        // console.log(this.misLibrosList[i].link);
        this.router.navigate(['/book', { Pag: this.misLibrosList[i].Pag, title: this.misLibrosList[i].Titulo, url: this.misLibrosList[i].alink, group: "" }]);
    }
    doLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigate(["/"]);
        });
    }
    UserAcount() {
        // var user = this.firebaseAuth.auth.currentUser;
        let $this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                if (user != null) {
                    user.providerData.forEach(function (profile) {
                        // console.log("Sign-in provider: " + profile.providerId);
                        // console.log("  Provider-specific UID: " + profile.uid);
                        // console.log("  Name: " + profile.displayName);
                        // console.log("  Email: " + profile.email);
                        // console.log("  Phone Number: " + profile.photoURL);
                        $this.UpdatePerfilPhoto(profile.email);
                        $this.getNameUser(profile.email);
                        $this.getDescriptionUser(profile.email);
                        $this.getMisLibros();
                        $this.getMisTags();
                    });
                }
            }
            else {
                // No user is signed in.
            }
        });
    }
    getUrl(event) {
        this.fileUrl = event;
    }
    getImg(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ImgUrl = event;
            const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            yield this.SendImage();
            yield this.UpdatePerfilPhoto(Email);
        });
    }
    // async getGroupImg(event){
    //   this.ImgGUrl = event;
    //   console.log("URL recibida en padre: " + this.ImgGUrl);
    //  await this.groupImage();
    // }
    SendImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.ImgUrl) {
                let Key;
                const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                yield this.firebase.database.ref("register").once("value", (users) => {
                    users.forEach((user) => {
                        const childKey = user.key;
                        const childData = user.val();
                        if (childData.email == Email) {
                            Key = childKey;
                        }
                    });
                });
                this.firebase.database.ref("register").child(Key).child("Images").push({
                    ImgUrl: this.ImgUrl,
                });
                this.toastr.success("Photo subida", "Exitosamente");
            }
        });
    }
    getMisGrupos() {
        const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
        let entries;
        this.misGroupsList = [];
        this.registerList.forEach((element, index) => {
            if (Email == element.email) {
                if ("Groups" in element) {
                    entries = Object.keys(element.Groups);
                    for (let i = 0; i < entries.length; i++) {
                        this.misGroupsList.push({
                            name: element.Groups[entries[i]].groupName,
                        });
                    }
                }
            }
        });
        this.groupList.forEach((element, index) => {
            console.log("element.name");
            console.log(element.name);
            for (let i = 0; i < this.misGroupsList.length; i++) {
                if (this.misGroupsList[i].name == element.name) {
                    if ("Images" in element) {
                        entries = Object.keys(element.Images);
                        this.misGroupsList[i].Images = element.Images[entries[0]].ImgUrl;
                    }
                    else {
                        this.misGroupsList[i].Images = "../../../../../../assets/img/NoImage.png";
                    }
                }
            }
        });
    }
    //-----------------------------------------------------Update perfil photo----------------------------------------------
    UpdatePerfilPhoto(Mail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Key;
            const Email = Mail;
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == Email) {
                        Key = childKey;
                        user.forEach((info) => {
                            info.forEach((Images) => {
                                Images.forEach((ImgUrl) => {
                                    const ImagesChildKey = ImgUrl.key;
                                    const ImagesChildData = ImgUrl.val();
                                    const filter = /https:/gm;
                                    if (ImagesChildKey == "ImgUrl") {
                                        this.Currentimg = ImagesChildData;
                                    }
                                });
                            });
                        });
                    }
                });
            });
            if (!this.Currentimg) {
                this.Currentimg = "../../../../../../assets/img/NoImage.png";
                const query = ".container .Photoimg";
                const Photoimg = document.querySelector(query);
                // const query2: string = "#app .profile";
                // const profile: any = document.querySelector(query2);
                Photoimg.src = this.Currentimg;
                // profile.src = this.Currentimg;
            }
            else {
                const query = ".container .Photoimg";
                const Photoimg = document.querySelector(query);
                // const query2: string = "#app .profile";
                // const profile: any = document.querySelector(query2);
                Photoimg.src = this.Currentimg;
                // profile.src = this.Currentimg;
            }
        });
    }
    //-----------------------------------------------------End Update perfil photo--------------------------------------
    //-----------------------------------------------------Search IMg----------------------------------------------
    //   async SearchImg(){
    //     let Key;
    //     let ContactNumber = this.FormAdd.controls.Numbercontact.value;
    //     await this.firebase.database.ref("register").once("value", (users) => {
    //       users.forEach((user) => {
    //         const childKey = user.key;
    //         const childData = user.val();
    //  // PRIMERA PASADA PARA RECORRER PRIMERA CAPA
    //         if (childData.email == ContactNumber || childData.telefono.e164Number == ContactNumber) {
    //           Key = childKey;
    //           // SEGUNDA PASADA PARA RECORRER DENTRO DEL USUARIO
    //           user.forEach((info) => {
    //             const infoChildKey = info.key;
    //             const infoChildData = info.val();
    //             // SEGUNDA PASADA PARA RECORRER DENTRO DE CONTACTS
    //             info.forEach((Images) => {
    //               const imagesChildKey = Images.key;
    //               const imagesChilData = Images.val();
    //               // SEGUNDA PASADA PARA RECORRER LOS NUMERO Y NOMBRE
    //               Images.forEach((ImgUrl) => {
    //                 const ImagesChildKey = ImgUrl.key;
    //                 const ImagesChildData = ImgUrl.val();
    //                 const filter = /https:/gm;
    //                 if (ImagesChildKey == "ImgUrl"){
    //                   this.ImageSelected = ImagesChildData;
    //                 }
    //               });
    //             });
    //           });
    //         }
    //       });
    //     });
    //     return this.ImageSelected;
    //   }
    //-----------------------------------------------------ENd Search IMg----------------------------------------------
    //-----------------------------------------------------Start get name----------------------------------------------
    getNameUser(Mail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Key;
            const Email = Mail;
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == Email) {
                        Key = childKey;
                        if (childData.lname != "" && childData.name != "") {
                            this.UserName = childData.name;
                            this.UserLastName = childData.lname;
                            this.FulName = this.UserName.concat(" " + this.UserLastName);
                        }
                    }
                });
            });
            if (this.UserName != "") {
                const query = ".container .name";
                document.querySelector(query).innerHTML = this.FulName;
            }
            else {
                const query = ".container .name";
                document.querySelector(query).innerHTML = "Nombre no registrado";
                this.toastr.error("Error al buscar el nombre", "Error");
            }
        });
    }
    //-----------------------------------------------------End get name----------------------------------------------
    //-----------------------------------------------------Start Send descrition------------------------------------------
    SendDescription() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const query = ".container .inputDescripcion";
            const Descript = document.querySelector(query);
            const Description = Descript.value;
            if (Description != "") {
                let Key;
                const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                yield this.firebase.database.ref("register").once("value", (users) => {
                    users.forEach((user) => {
                        const childKey = user.key;
                        const childData = user.val();
                        if (childData.email == Email) {
                            Key = childKey;
                        }
                    });
                });
                this.firebase.database.ref("register").child(Key).child("Descripcion").push({
                    Descripcion: Description,
                });
                this.toastr.success("Descripcion actualizada", "Exitosamente");
            }
        });
    }
    //-----------------------------------------------------END Send descrition------------------------------------------
    //-----------------------------------------------------Start Get descrition------------------------------------------
    getDescriptionUser(Mail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Key;
            // firebase.auth().currentUser.email
            const Email = Mail;
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == Email) {
                        Key = childKey;
                        user.forEach((info) => {
                            info.forEach((Description) => {
                                Description.forEach((DescriptionText) => {
                                    const DescriptionChildKey = DescriptionText.key;
                                    const DescriptionChildData = DescriptionText.val();
                                    if (DescriptionChildKey == "Descripcion") {
                                        this.CurrentDescription = DescriptionChildData;
                                    }
                                });
                            });
                        });
                    }
                });
            });
            if (this.CurrentDescription != "") {
                const query = ".inputDescripcion";
                const element = document.querySelector(query);
                element.value = this.CurrentDescription;
            }
            const query = "#descripcionID";
            const Descripcion = document.querySelector(query);
            let DescripcionValue = Descripcion.value;
            if (DescripcionValue == "undefined") {
                DescripcionValue = "Ingresa tu descripción";
            }
        });
    }
    //-----------------------------------------------------Start get Mislibros------------------------------------------
    getMisLibros() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            yield this.firebase.database.ref("register").once("value", (users) => {
                let usersData = users.val();
                let user;
                Object.keys(usersData).forEach((key) => {
                    if (usersData[key].email == Email) {
                        user = usersData[key];
                    }
                });
                if (user.MisLibros) {
                    Object.keys(user.MisLibros).forEach((key) => {
                        this.misLibrosList.push(user.MisLibros[key]);
                    });
                }
            });
        });
    }
    //-----------------------------------------------------END get Mislibros------------------------------------------
    getMisAmigos() {
        let entries;
        // console.log("this.registerList");
        // console.log(this.registerList);
        this.misAmigosList = [];
        const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
        this.registerList.forEach((element, index) => {
            if (Email == element.email) {
                if ("Amigos" in element) {
                    entries = Object.keys(element.Amigos);
                    for (let i = 0; i < entries.length; i++) {
                        this.misAmigosList.push({
                            name: element.Amigos[entries[i]].NombreAmigo,
                        });
                    }
                }
            }
        });
        this.registerList.forEach((element, index) => {
            for (let i = 0; i < this.misAmigosList.length; i++) {
                if (this.misAmigosList[i]) {
                    if (this.misAmigosList[i].name == element.name + " " + element.lname) {
                        this.misAmigosList[i].User = element.email;
                        if ("Images" in element) {
                            entries = Object.keys(element.Images);
                            let index = entries.length - 1;
                            this.misAmigosList[i].Images = element.Images[entries[index]].ImgUrl;
                        }
                        else {
                            this.misAmigosList[i].Images = "../../../../../../assets/img/NoImage.png";
                        }
                    }
                }
            }
        });
    }
    goToPerfil(email) {
        this.router.navigate(['externalProfiles', { email: email }]);
    }
    goToGroup(name) {
        this.router.navigate(['groups', { name: name }]);
    }
    //-----------------------------------------------------Start get MisTags------------------------------------------
    getMisTags() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Key;
            let Tags = {};
            let keyTAGS;
            const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    // console.log("entre nivel1");
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == Email) {
                        this.KeyUSER = childKey;
                        user.forEach((info) => {
                            info.forEach((MisTags) => {
                                const pruebakey = MisTags.key;
                                keyTAGS = pruebakey;
                                MisTags.forEach((Tag) => {
                                    const TagChildKey = Tag.key;
                                    const TagChildData = Tag.val();
                                    if (TagChildKey == "Tag") {
                                        Tags = TagChildData;
                                        // console.log(aut);
                                        // this.misTagsList.push({Tags:TagChildData});
                                        if (Tags != "") {
                                            // console.log("info key");
                                            // console.log(keyTAGS);
                                            this.keyOrdenList.push(keyTAGS);
                                            this.misTagsList.push({ Tags });
                                        }
                                    }
                                });
                            });
                        });
                    }
                });
            });
        });
    }
    //-----------------------------------------------------END get MisTags------------------------------------------
    deleteSth(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let index = i.split("-");
            let query2 = "#contTag" + index[1];
            let cont = document.querySelector(query2);
            cont.style.display = "none";
            this.tagService.deleteTag(this.keyOrdenList[index[1]], this.KeyUSER);
            this.toastr.warning("Tag eliminado", "Exitosamente");
        });
    }
    deleteBook(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("ENTRÉ");
            // let index = i.split("-");
            let query2 = "#mislibros" + i;
            console.log("QUERY", query2);
            let cont = document.querySelector(query2);
            console.log("CONT", cont);
            //por el carrusel no encuentra el query2
            // console.log(cont);
            // cont.style.display = "none";
            this.bookService.deleteBooks(this.keyOrdenBooksList[i], this.KeyUSER);
            this.toastr.warning("Libro eliminado", "Exitosamente");
        });
    }
    deleteFriend(i, deleteEmail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let query2 = ".containerAmigos" + i;
            let cont = document.querySelector(query2);
            cont.style.display = "none";
            const Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            let myKey;
            let entries;
            let friendKey;
            let keys;
            this.registerList.forEach((element) => {
                if (element.email == Email) {
                    myKey = element.$key;
                    if ("Amigos" in element) {
                        entries = Object.values(element.Amigos);
                        keys = Object.keys(element.Amigos);
                        for (let i = 0; i < entries.length; i++) {
                            if (entries[i].Contacto == deleteEmail) {
                                friendKey = keys[i];
                            }
                        }
                    }
                }
            });
            this.userService.deleteFriends(friendKey, myKey);
            this.toastr.error("Amigo eliminado", "Exitosamente");
        });
    }
    editUserName(register) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let variable;
            this.userService.updateUsername(variable);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_13__["TagService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 39, vars: 5, consts: [[1, "app"], [1, "container", 3, "formGroup"], [1, "perfilContainer"], [1, "photoContainer"], [3, "imgUrlEmitter"], ["src", "../../../../../../assets/img/NoImage.png", "srcset", "", "alt", "", "id", "img", 1, "Photoimg"], [1, "ContainerDescription"], [1, "name"], ["id", "descripcionID", "formControlName", "descripcion", "type", "text", 1, "inputDescripcion"], ["for", "descripcion"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", 3, "click"], [1, "tagsContainer"], [1, "name", 2, "margin-top", "20px"], [1, "table"], ["scope", "col", 2, "color", "#205493"], [3, "id", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", "width", "max-content", 3, "click"], [1, "librosContainer"], [1, "name", 2, "margin-top", "40px"], [4, "ngFor", "ngForOf"], ["id", "friendsContainer", 3, "class", 4, "ngFor", "ngForOf"], [3, "id"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", 1, "tagImg", 3, "id", "click"], ["ngbSlide", "", 3, "id"], [1, "picsum-img-wrapper", 3, "click"], ["alt", "Random first slide", 1, "portadaImg", 3, "id", "src"], [1, "carousel-caption", 2, "z-index", "0"], ["align", "center", 3, "id"], ["align", "center", 2, "margin-bottom", "10px", 3, "id"], ["id", "friendsContainer"], ["alt", "foto", 1, "friendImg", 3, "id", "src", "click"], [1, "friendsName", 3, "click"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", 1, "tagImg2", 3, "id", "click"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", 1, "tagImg2", 3, "id"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-file-upload", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imgUrlEmitter", function ProfileComponent_Template_app_file_upload_imgUrlEmitter_5_listener($event) { return ctx.getImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_11_listener() { return ctx.SendDescription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Actualizar descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Mis tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ProfileComponent_tr_24_Template, 6, 4, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_25_listener() { return ctx.goToTags(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "A\u00F1adir nuevos tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Mis Libros");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ngb-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ProfileComponent_31_Template, 1, 1, undefined, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Mis Amigos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ProfileComponent_div_34_Template, 5, 7, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Mis grupos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ProfileComponent_div_37_Template, 5, 7, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.ngFormProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.misTagsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.misLibrosList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.misAmigosList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.misGroupsList);
    } }, directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavigationBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_15__["FileUploadComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  overflow-y: hidden;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-align: center;\n  margin-top: 10px;\n  color: #205493;\n  align-self: center;\n}\n\n.perfilContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-top: 100px;\n}\n\n.Photoimg[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border-radius: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 3px solid #112e51;\n}\n\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 80px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 80px;\n}\n\n.container[_ngcontent-%COMP%]   .ContainerDescription[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.container[_ngcontent-%COMP%]   .inputDescripcion[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 80vw;\n  height: 100px;\n  border-radius: 20px;\n  padding: 10px;\n  text-overflow: ellipsis;\n  word-break: break-word;\n}\n\n.container[_ngcontent-%COMP%]   .tagsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-top: 20px;\n  width: 80%;\n}\n\n.container[_ngcontent-%COMP%]   .tagsContainer[_ngcontent-%COMP%]   #titleTag[_ngcontent-%COMP%] {\n  color: #0071bc;\n  font-size: large;\n}\n\n.container[_ngcontent-%COMP%]   .tagImg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  right: 0px;\n  top: 5px;\n}\n\n.container[_ngcontent-%COMP%]   .Editimg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.container[_ngcontent-%COMP%]   .portadaImg[_ngcontent-%COMP%] {\n  width: 300px;\n  \n  height: 500px;\n  \n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.container[_ngcontent-%COMP%]   #friendsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center !important;\n  justify-content: center;\n  flex-flow: row nowrap;\n  vertical-align: center;\n  width: 80%;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.container[_ngcontent-%COMP%]   #friendsContainer[_ngcontent-%COMP%]   .friendsName[_ngcontent-%COMP%] {\n  color: #0071bc;\n  font-size: large;\n  text-align: center;\n  text-justify: center;\n  align-self: center;\n  margin-left: 10px;\n  vertical-align: middle;\n  padding-top: 10px;\n}\n\n.container[_ngcontent-%COMP%]   #friendsContainer[_ngcontent-%COMP%]   .tagImg2[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.friendImg[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-radius: 100%;\n  border: solid 1px #212121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBUlU7RUFTVixrQkFBQTtBQUpGOztBQU9BO0VBRUUsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHlCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFPQTtFQUVFLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFPRTtFQUVFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFOSjs7QUFVRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUtBLHVCQUFBO0VBRUEsc0JBQUE7QUFkSjs7QUFpQkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0FBaEJKOztBQWtCSTtFQUNFLGNBaEZNO0VBaUZOLGdCQUFBO0FBaEJOOztBQW1CRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBR0EsVUFBQTtFQUNBLFFBQUE7QUFuQko7O0FBdUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFyQko7O0FBd0JFO0VBQ0UsWUFBQTtFQUFjLHVCQUFBO0VBQ2QsYUFBQTtFQUFlLHdCQUFBO0VBQ2Ysb0JBQUE7S0FBQSxpQkFBQTtBQXBCSjs7QUF1QkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7QUF2Qko7O0FBeUJJO0VBQ0UsY0F2SE07RUF3SE4sZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFJQSxpQkFBQTtFQUVBLHNCQUFBO0VBQ0EsaUJBQUE7QUEzQk47O0FBOEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTVCTjs7QUFvQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFqQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcml2YXRlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4kYXp1bE9zY3VybzogIzExMmU1MTtcclxuJEF6dWxNZWRpbzogIzIwNTQ5MztcclxuJEF6dWxDbGFybzogIzAwNzFiYztcclxuJHRleHQ6ICMyMTIxMjE7XHJcblxyXG4ubmFtZSB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiAkQXp1bE1lZGlvO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLnBlcmZpbENvbnRhaW5lciB7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5QaG90b2ltZyB7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNzVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXI6IDNweCBzb2xpZCAkYXp1bE9zY3VybztcclxufVxyXG5cclxuLmFwcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gIC5Db250YWluZXJEZXNjcmlwdGlvbiB7XHJcbiAgICAvLyB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICB9XHJcblxyXG4gIC5pbnB1dERlc2NyaXBjaW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgLy8gb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAvLyB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICB9XHJcblxyXG4gIC50YWdzQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAjdGl0bGVUYWcge1xyXG4gICAgICBjb2xvcjogJEF6dWxDbGFybztcclxuICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnRhZ0ltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHotaW5kZXg6IDVcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIC8vIGxlZnQ6IC01MHB4O1xyXG4gICAgLy8gdG9wOiA4MHB4O1xyXG4gIH1cclxuICAuRWRpdGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gIC5wb3J0YWRhSW1nIHtcclxuICAgIHdpZHRoOiAzMDBweDsgLyogd2lkdGggb2YgY29udGFpbmVyICovXHJcbiAgICBoZWlnaHQ6IDUwMHB4OyAvKiBoZWlnaHQgb2YgY29udGFpbmVyICovXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gICNmcmllbmRzQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgIC5mcmllbmRzTmFtZSB7XHJcbiAgICAgIGNvbG9yOiAkQXp1bENsYXJvO1xyXG4gICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIC8vIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgLy8gbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50YWdJbWcyIHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgLy8gei1pbmRleDogNVxyXG4gICAgICAvLyBsZWZ0OiAtNTBweDtcclxuICAgICAgLy8gdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZnJpZW5kSW1nIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCAkdGV4dDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-profile",
                templateUrl: "./profile.component.html",
                styleUrls: ["./profile.component.scss"],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__["BookService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }, { type: src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"] }, { type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_13__["TagService"] }]; }, null); })();


/***/ }),

/***/ "k51J":
/*!*******************************************!*\
  !*** ./src/app/pipes/filter-tags.pipe.ts ***!
  \*******************************************/
/*! exports provided: FilterTagsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTagsPipe", function() { return FilterTagsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterTagsPipe {
    transform(value, args) {
        if (args === '') {
            return value;
        }
        const resultSearchBox = [];
        for (const post of value) {
            if (post.Categoria.toLowerCase().indexOf(args.toLowerCase()) > -1) {
                resultSearchBox.push(post);
            }
        }
        return resultSearchBox;
    }
}
FilterTagsPipe.ɵfac = function FilterTagsPipe_Factory(t) { return new (t || FilterTagsPipe)(); };
FilterTagsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterTags", type: FilterTagsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterTagsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterTags'
            }]
    }], null, null); })();


/***/ }),

/***/ "lBcp":
/*!*****************************************!*\
  !*** ./src/app/services/tag.service.ts ***!
  \*****************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");



class TagService {
    constructor(firebase) {
        this.firebase = firebase;
    }
    getTags() {
        this.tagsList = this.firebase.list('tags');
        return this.tagsList;
    }
    deleteTag(tagkey, $key) {
        console.log("delete $key");
        console.log(tagkey);
        this.firebase.database.ref("register").child($key).child("Tags").child(tagkey).remove();
    }
    deleteIntegrant(tagkey, $key) {
        console.log("delete $key");
        console.log(tagkey);
        this.firebase.database.ref("register").child($key).child("Groups").child(tagkey).remove();
    }
}
TagService.ɵfac = function TagService_Factory(t) { return new (t || TagService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
TagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TagService, factory: TagService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");





class AuthService {
    constructor(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "mLow":
/*!********************************************************!*\
  !*** ./src/app/pages/private/group/group.component.ts ***!
  \********************************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tag.service */ "lBcp");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../navigation-bar/navigation-bar.component */ "L0k6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../footer/footer.component */ "oTol");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../file-upload/file-upload.component */ "YtdO");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../pipes/filter-external-profiles.pipe */ "v5hE");


















function GroupComponent_div_3_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_3_div_12_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const user_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.viewExternalGroup(user_r6.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_3_div_12_Template_h1_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const user_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.viewExternalGroup(user_r6.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_3_div_12_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const user_r6 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.viewExternalGroup(user_r6.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Ver Grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "imagenGroup" + i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", user_r6.Images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "nombre" + i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "descripcion" + i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.description);
} }
function GroupComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Buscar un Nuevo Grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.createGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Crear grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.searchGroupF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Buscar grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Mis grupos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Buscar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupComponent_div_3_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.searchBoxExternal = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, GroupComponent_div_3_div_12_Template, 9, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "filterExternalProfiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.searchBoxExternal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 2, ctx_r0.myGroups, ctx_r0.searchBoxExternal));
} }
function GroupComponent_form_6_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const amigos_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", amigos_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](amigos_r18);
} }
function GroupComponent_form_6_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tags_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tags_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tags_r19);
} }
function GroupComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_form_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupComponent_form_6_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.owner = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Crear nuevo Grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Nombre del Grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Agregar integrantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Seleccione uno o muchos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, GroupComponent_form_6_option_20_Template, 2, 2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Privacidad del grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Seleccione uno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "P\u00FAblico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Privado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Tags del grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Seleccione uno o multiples");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, GroupComponent_form_6_option_38_Template, 2, 2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_form_6_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Crear Grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.ngForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.amigosList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.tagsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.ngForm.invalid);
} }
function GroupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-file-upload", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imgUrlEmitter", function GroupComponent_div_7_Template_app_file_upload_imgUrlEmitter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.getImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.Currentimg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function GroupComponent_div_10_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_10_div_8_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const user_r27 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.viewExternalGroup(user_r27.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_10_div_8_Template_h1_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const user_r27 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.viewExternalGroup(user_r27.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_10_div_8_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const user_r27 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r32.viewExternalGroup(user_r27.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Ver Grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "imagenGroup" + i_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", user_r27.Images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "nombre" + i_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r27.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "descripcion" + i_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r27.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "privacity" + i_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r27.privacity);
} }
function GroupComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Encuentra grupos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Buscar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupComponent_div_10_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.searchBoxExternal = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GroupComponent_div_10_div_8_Template, 11, 8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "filterExternalProfiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.searchBoxExternal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 2, ctx_r3.groupList, ctx_r3.searchBoxExternal));
} }
function GroupComponent_div_13_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r48.addToTheGroup(select_r37.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingresar al grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GroupComponent_div_13_div_1_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r51.quitGroup(select_r37.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Abandonar grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GroupComponent_div_13_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "textarea", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupComponent_div_13_div_1_div_14_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r54.descripcion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r40.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](select_r37.description);
} }
function GroupComponent_div_13_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "textarea", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupComponent_div_13_div_1_div_15_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r57.descripcion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r41.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](select_r37.description);
} }
function GroupComponent_div_13_div_1_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r60.SendDescription(select_r37.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Actualizar descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GroupComponent_div_13_div_1_div_29_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GroupComponent_div_13_div_1_div_29_tr_10_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_div_29_tr_10_th_4_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const integrantes_r65 = ctx_r69.$implicit; const i_r66 = ctx_r69.index; const select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r68.deleteSth(integrantes_r65, select_r37.name, i_r66); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r66);
} }
function GroupComponent_div_13_div_1_div_29_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GroupComponent_div_13_div_1_div_29_tr_10_th_4_Template, 2, 1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const integrantes_r65 = ctx.$implicit;
    const i_r66 = ctx.index;
    const select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "intregante" + i_r66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](integrantes_r65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner == ctx_r64.owner);
} }
function GroupComponent_div_13_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Integrantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "integrantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GroupComponent_div_13_div_1_div_29_th_8_Template, 2, 0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GroupComponent_div_13_div_1_div_29_tr_10_Template, 5, 3, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner == ctx_r43.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r43.selectedIntegrants);
} }
function GroupComponent_div_13_div_1_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GroupComponent_div_13_div_1_tr_38_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_tr_38_th_4_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80); const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r78.deleteSth("eliminate-" + i_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r76);
} }
function GroupComponent_div_13_div_1_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GroupComponent_div_13_div_1_tr_38_th_4_Template, 2, 1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grouptags_r75 = ctx.$implicit;
    const i_r76 = ctx.index;
    const select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "contTag" + i_r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "mitag" + i_r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](grouptags_r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner == ctx_r45.owner);
} }
function GroupComponent_div_13_div_1_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r83.goToTags(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "A\u00F1adir nuevos tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GroupComponent_div_13_div_1_div_41_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Libros del grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GroupComponent_div_13_div_1_div_41_3_ng_template_0_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_div_41_3_ng_template_0_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r91.deleteBook("eliminate-" + i_r88); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r88);
} }
function GroupComponent_div_13_div_1_div_41_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GroupComponent_div_13_div_1_div_41_3_ng_template_0_img_1_Template, 1, 1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_div_41_3_ng_template_0_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r95.goToBook(i_r88); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r88 = ctx_r99.index;
    const librosGrupo_r87 = ctx_r99.$implicit;
    const select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner == ctx_r89.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "imagen" + i_r88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", librosGrupo_r87.Imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "titulo" + i_r88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](librosGrupo_r87.Titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "autor" + i_r88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](librosGrupo_r87.Autor);
} }
function GroupComponent_div_13_div_1_div_41_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GroupComponent_div_13_div_1_div_41_3_ng_template_0_Template, 10, 7, "ng-template", 86);
} if (rf & 2) {
    const i_r88 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "librosGrupo" + i_r88);
} }
function GroupComponent_div_13_div_1_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GroupComponent_div_13_div_1_div_41_h1_1_Template, 2, 0, "h1", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GroupComponent_div_13_div_1_div_41_3_Template, 1, 1, undefined, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r47.librosGrupo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r47.librosGrupo);
} }
function GroupComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r100.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GroupComponent_div_13_div_1_button_9_Template, 2, 0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GroupComponent_div_13_div_1_button_10_Template, 2, 0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, GroupComponent_div_13_div_1_div_14_Template, 3, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, GroupComponent_div_13_div_1_div_15_Template, 3, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, GroupComponent_div_13_div_1_button_17_Template, 2, 0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Creador");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, GroupComponent_div_13_div_1_div_29_Template, 11, 2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, GroupComponent_div_13_div_1_th_36_Template, 2, 0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, GroupComponent_div_13_div_1_tr_38_Template, 5, 4, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, GroupComponent_div_13_div_1_button_40_Template, 2, 0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, GroupComponent_div_13_div_1_div_41_Template, 4, 2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const select_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", select_r37.Images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](select_r37.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.permisoAdd == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.permisoAdd == false && ctx_r36.permisoAdmin == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner == ctx_r36.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner != ctx_r36.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner == ctx_r36.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "owner" + ctx_r36.i);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r36.nameOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.permisoVisual == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner == ctx_r36.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r36.selectedTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner == ctx_r36.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.permisoVisual == true);
} }
function GroupComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GroupComponent_div_13_div_1_Template, 42, 14, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.selectedGroup);
} }
class GroupComponent {
    constructor(tagService, firebase, toastr, userService, route, router) {
        this.tagService = tagService;
        this.firebase = firebase;
        this.toastr = toastr;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.Currentimg = "../../../../../../assets/img/NoImage.png";
        this.amigosList = [];
        this.amigosEmails = [];
        this.tagsList = [];
        this.searchBoxExternal = '';
        this.selectedGroup = [];
        this.selectedIntegrants = [];
        this.selectedTags = [];
        this.permisoVisual = true;
        this.permisoAdd = true;
        this.permisoAdmin = true;
        this.myGroups = [];
        this.librosGrupo = [];
        this.openedGruop = "";
        this.desaparecerBoton = true;
        this.descripcion = "";
        this.viewCreateGroup = false;
        this.firstPage = true;
        this.viewsearchGroup = false;
        this.nextImage = false;
        this.viewInsideGroup = false;
        this.ngForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            photoimg: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            integrants: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            privacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        let $this = this;
        this.tagService.getTags()
            .snapshotChanges().subscribe(item => {
            this.tagsList = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.tagsList.push(x);
            });
            this.tagsList = Object.values(this.tagsList[0]);
        });
        this.userService.getGroups()
            .snapshotChanges().subscribe(item => {
            this.groupList = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.groupList.push(x);
            });
            this.archieveGroups(this.groupList);
            this.getImgGroups();
        });
        this.userService.getRegister()
            .snapshotChanges().subscribe(item => {
            this.registerList = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x["$key"] = element.key;
                this.registerList.push(x);
            });
            this.getMygroups();
            this.getAmigos();
        });
        setTimeout(function () {
            $this.name = $this.route.snapshot.paramMap.get("name");
            if ($this.name) {
                $this.viewExternalGroup($this.name);
            }
        }, 1000);
    }
    getUrl(event) {
        this.fileUrl = event;
    }
    getImg(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ImgUrl = event;
            yield this.SendImage();
            yield this.UpdatePerfilPhoto();
            //  await this.UpdatePerfilPhoto(Email);
        });
    }
    createGroup() {
        this.firstPage = false;
        this.viewCreateGroup = true;
        this.ngForm.reset();
    }
    searchGroupF() {
        this.viewsearchGroup = true;
        this.firstPage = false;
        this.nextImage = false;
    }
    goBack() {
        this.firstPage = true;
        this.viewsearchGroup = false;
        this.viewCreateGroup = false;
        this.nextImage = false;
        this.viewsearchGroup = false;
        this.viewInsideGroup = false;
    }
    getMygroups() {
        let entries;
        this.owner = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
        this.registerList.forEach((element, index) => {
            if (element.email == this.owner) {
                if ("Groups" in element) {
                    entries = Object.keys(element.Groups);
                    for (let i = 0; i < entries.length; i++) {
                        this.myGroups.push({ name: element.Groups[entries[i]].groupName });
                    }
                }
            }
        });
        if (this.groupList) {
            this.groupList.forEach((element, index) => {
                for (let i = 0; i < this.myGroups.length; i++) {
                    if (this.myGroups[i].name == element.name) {
                        if ("Images" in element) {
                            entries = Object.keys(element.Images);
                            this.myGroups[i].Images = element.Images;
                        }
                        else {
                            this.myGroups[i].Images = "../../../../../../assets/img/NoImage.png";
                        }
                        this.myGroups[i].description = element.description;
                    }
                }
            });
        }
    }
    archieveGroups(arr) {
        this.groupList = arr;
    }
    getImgGroups() {
        let entries;
        this.groupList.forEach((element, index) => {
            if ("Images" in element) {
                entries = Object.keys(element.Images);
                this.groupList[index].Images = element.Images[entries[0]].ImgUrl;
            }
            else {
                this.groupList[index].Images = "../../../../../../assets/img/NoImage.png";
            }
        });
    }
    SendDescription(nombreGrupo) {
        let groupKey;
        console.log("this.descripcion");
        console.log(this.descripcion);
        this.groupList.forEach((element) => {
            if (element.name == nombreGrupo) {
                groupKey = element.$key;
                console.log("groupKey");
                console.log(groupKey);
            }
        });
        this.userService.updateDescripcionGroup(groupKey, this.descripcion);
        this.toastr.success('Descripcion actualizada', 'Exitosamente', {
            positionClass: 'toast-top-center'
        });
    }
    quitGroup(nombreGrupo) {
        let entries;
        let keyTodelete;
        let keys;
        let groupKey;
        this.groupList.forEach((element) => {
            if (element.name == nombreGrupo) {
                groupKey = element.$key;
                console.log("groupKey");
                console.log(groupKey);
                if ("integrants" in element) {
                    entries = Object.values(element.integrants);
                    keys = Object.keys(element.integrants);
                    for (let i = 0; i < entries.length; i++) {
                        if (entries[i].name == this.userName) {
                            keyTodelete = keys[i];
                        }
                    }
                }
            }
        });
        this.userService.deleteGroups(keyTodelete, groupKey);
        this.toastr.error('Abandonaste este grupo', 'Exitosamente', {
            positionClass: 'toast-top-center'
        });
        for (let i = 0; i < this.selectedIntegrants.length; i++) {
            if (this.userName == this.selectedIntegrants[i]) {
                this.selectedIntegrants.splice(i, 1);
                this.permisoAdd = true;
                console.log(this.selectedIntegrants);
                if (this.userName != this.selectedIntegrants[i] && this.selectedGroup[0].privacity == "privado") {
                    this.permisoVisual = false;
                }
            }
        }
    }
    addToTheGroup(nombreGrupo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.owner = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            let key;
            let keygroup;
            let nombre;
            let entries;
            let integrantes = [];
            let estoy;
            yield this.firebase.database.ref("register").once("value", (users, index) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.email == this.owner) {
                        key = childKey;
                        nombre = childData.name + " " + childData.lname;
                    }
                });
            });
            yield this.firebase.database.ref("groups").once("value", (users, index) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.name == nombreGrupo) {
                        keygroup = childKey;
                    }
                });
            });
            this.groupList.forEach((element, index) => {
                if ("integrants" in element) {
                    entries = Object.values(element.integrants);
                    for (let i = 0; i < entries.length; i++) {
                        integrantes.push(entries[i].name);
                    }
                }
            });
            for (let i = 0; i < integrantes.length; i++) {
                if (integrantes[i] != nombre) {
                    estoy = false;
                }
                else {
                    estoy = true;
                }
            }
            if (estoy == false) {
                this.firebase.database.ref("register").child(key).child("Groups").push({
                    groupName: nombreGrupo,
                    category: "integrant"
                });
                this.firebase.database.ref("groups").child(keygroup).child("integrants").push({
                    name: nombre,
                });
                this.toastr.success('Te agregaste a este grupo', 'Exitosamente', {
                    positionClass: 'toast-top-center'
                });
                this.selectedIntegrants.push(nombre);
                this.permisoAdd = false;
                this.permisoVisual = true;
            }
            else {
                this.toastr.error('Ya estas en este grupo', '', {
                    positionClass: 'toast-top-center'
                });
            }
        });
    }
    viewExternalGroup(name) {
        this.viewInsideGroup = true;
        this.viewsearchGroup = false;
        this.firstPage = false;
        this.viewCreateGroup = false;
        this.nextImage = false;
        this.permisoVisual = true;
        this.permisoAdmin = true;
        this.permisoAdd = true;
        this.selectedGroup = [];
        this.selectedIntegrants = [];
        this.selectedTags = [];
        this.librosGrupo = [];
        let activeUser = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
        let temp = [];
        let entries;
        let entriesIntegrants;
        this.groupList.forEach((element, index) => {
            if (this.groupList[index].name == name) {
                if ("integrants" in element) {
                    entriesIntegrants = Object.values(element.integrants);
                    for (let i = 0; i < entriesIntegrants.length; i++) {
                        this.selectedIntegrants.push(entriesIntegrants[i].name);
                    }
                }
                this.openedGruop = name;
                entries = Object.keys(element.Images);
                this.selectedGroup.push(element);
                this.descripcion = element.description;
                this.selectedTags.push(Object.values(element.tags));
                if (element.books) {
                    temp.push(Object.values(element.books));
                }
            }
        });
        this.librosGrupo = temp[0];
        // console.log("libros grupo",this.librosGrupo);
        this.registerList.forEach((element, index) => {
            for (let i = 0; i < this.groupList.length; i++) {
                if (this.selectedGroup[0].owner == element.email) {
                    this.nameOwner = element.name + " " + element.lname;
                }
                if (activeUser == element.email) {
                    this.userName = element.name + " " + element.lname;
                }
            }
        });
        for (let i = 0; i < this.selectedIntegrants.length; i++) {
            if (this.userName == this.selectedIntegrants[i]) {
                this.permisoAdd = false;
            }
            if (this.userName != this.selectedIntegrants[i] && this.selectedGroup[0].privacity == "privado") {
                this.permisoVisual = false;
            }
        }
        if (this.selectedGroup[0].owner == activeUser) {
            this.permisoAdd = false;
            this.permisoAdmin = false;
            this.permisoVisual = true;
        }
    }
    goToPerfil(email) {
        this.router.navigate(['externalProfiles', { email: email }]);
    }
    goToBook(i) {
        // console.log("CLICK LIBRO",this.librosGrupo[i]);
        // console.log("GRUPO",this.openedGruop);
        this.router.navigate(['/book', { Pag: this.librosGrupo[i].pag, title: this.librosGrupo[i].Titulo, url: this.librosGrupo[i].alink, group: this.openedGruop }]);
    }
    getAmigos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.owner = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            this.amigosList = [];
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    const childData = user.val();
                    if (childData.email == this.owner) {
                        user.forEach((info) => {
                            info.forEach((MisAmigos) => {
                                MisAmigos.forEach((Amigos) => {
                                    const AmigosChildKey = Amigos.key;
                                    const AmigosChildData = Amigos.val();
                                    if (AmigosChildKey == "NombreAmigo") {
                                        this.amigosList.push(AmigosChildData);
                                    }
                                    if (AmigosChildKey == "Contacto") {
                                        this.amigosEmails.push(AmigosChildData);
                                    }
                                });
                            });
                        });
                    }
                });
            });
        });
    }
    deleteSth(integrante, nombreGrupo, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let KeyUSER;
            let Keygroup;
            yield this.firebase.database.ref("register").once("value", (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.name + " " + childData.lname == integrante[0]) {
                        KeyUSER = childKey;
                        user.forEach((info) => {
                            info.forEach((MisGrupos) => {
                                const MisgruposChildKey = MisGrupos.key;
                                MisGrupos.forEach((Groups) => {
                                    const GroupsChildKey = Groups.key;
                                    const GroupsChildData = Groups.val();
                                    if (GroupsChildKey == "groupName" && GroupsChildData == nombreGrupo) {
                                        Keygroup = MisgruposChildKey;
                                    }
                                });
                            });
                        });
                    }
                });
            });
            let integrant = document.getElementById("integrante" + id);
            integrant.style.display = 'none';
            this.tagService.deleteIntegrant(Keygroup, KeyUSER);
            this.toastr.error('Integrante eliminado', 'Exitosamente');
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.owner = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            const nombreGrupo = this.ngForm.controls.name.value;
            const integrant = this.ngForm.controls.integrants.value;
            let nameExist = this.groupList.find(group => group.name == nombreGrupo);
            let keyOwner;
            let keyGroup;
            let keyIntegrants = [];
            let contador = 0;
            if (nameExist) {
                this.toastr.error('Ese nombre ya esta registrado', 'Intenta otro nombre', {
                    positionClass: 'toast-top-center'
                });
            }
            else {
                this.toastr.success('El grupo ha sido creado', 'Exitosamente', {
                    positionClass: 'toast-top-center'
                });
                this.userService.createGroup(this.ngForm.value);
                this.nextImage = true;
                yield this.firebase.database.ref("register").once("value", (users, index) => {
                    users.forEach((user) => {
                        const childKey = user.key;
                        const childData = user.val();
                        if (childData.email == this.owner) {
                            keyOwner = childKey;
                        }
                        if (childData.email == this.amigosEmails[contador]) {
                            contador++;
                            keyIntegrants.push(childKey);
                        }
                    });
                });
                yield this.firebase.database.ref("groups").once("value", (users, index) => {
                    users.forEach((user) => {
                        const childKey = user.key;
                        const childData = user.val();
                        if (childData.name == nombreGrupo) {
                            keyGroup = childKey;
                        }
                    });
                });
                if (keyGroup) {
                    for (let i = 0; i < integrant.length; i++) {
                        this.firebase.database.ref("groups").child(keyGroup).child("integrants").push({
                            name: integrant[i],
                        });
                    }
                }
                if (keyOwner) {
                    this.firebase.database.ref("register").child(keyOwner).child("Groups").push({
                        groupName: nombreGrupo,
                        category: "owner"
                    });
                }
                for (let i = 0; i < keyIntegrants.length; i++) {
                    this.firebase.database.ref("register").child(keyIntegrants[i]).child("Groups").push({
                        groupName: nombreGrupo,
                        category: "integrant"
                    });
                }
            }
        });
    }
    SendImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const nombreGrupo = this.ngForm.controls.name.value;
            if (this.ImgUrl) {
                let Key;
                // const Email = firebase.auth().currentUser.email;
                yield this.firebase.database.ref("groups").once("value", (groups) => {
                    groups.forEach((group) => {
                        const childKey = group.key;
                        const childData = group.val();
                        if (childData.name == nombreGrupo) {
                            Key = childKey;
                        }
                    });
                });
                this.firebase.database.ref("groups").child(Key).child("Images").push({
                    ImgUrl: this.ImgUrl
                });
                this.toastr.success('Foto subida', 'Exitosamente');
            }
        });
    }
    UpdatePerfilPhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const nombreGrupo = this.ngForm.controls.name.value;
            let Key;
            yield this.firebase.database.ref("groups").once("value", (users) => {
                users.forEach((user) => {
                    const childKey = user.key;
                    const childData = user.val();
                    if (childData.name == nombreGrupo) {
                        Key = childKey;
                        user.forEach((info) => {
                            info.forEach((Images) => {
                                Images.forEach((ImgUrl) => {
                                    const ImagesChildKey = ImgUrl.key;
                                    const ImagesChildData = ImgUrl.val();
                                    if (ImagesChildKey == "ImgUrl") {
                                        this.Currentimg = ImagesChildData;
                                    }
                                });
                            });
                        });
                    }
                });
            });
            if (!this.Currentimg) {
                this.Currentimg = "../../../../../../assets/img/NoImage.png";
            }
        });
    }
}
GroupComponent.ɵfac = function GroupComponent_Factory(t) { return new (t || GroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
GroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupComponent, selectors: [["app-group"]], decls: 15, vars: 5, consts: [[1, "app"], [1, "containerComponents"], ["style", "margin-top: 20% !important;", "class", "containerButtons", 4, "ngIf"], ["class", "forms", "style", "margin-top: 15px;", 3, "formGroup", 4, "ngIf"], [4, "ngIf"], [1, "app", 2, "margin-top", "-80px"], ["class", "containerSearchGroups", 4, "ngIf"], [1, "app", 2, "margin-top", "-80px", "padding-bottom", "30px"], ["class", "groupContainer", 4, "ngIf"], [1, "containerButtons", 2, "margin-top", "20% !important"], [1, "name"], ["id", "boton", 1, "button", "is-info", 3, "click"], [1, "button", "is-info", 3, "click"], [1, "name", 2, "margin-top", "30px"], [1, "subName", 2, "font-size", "large"], ["type", "text", "name", "searchBoxExternal", "placeholder", "", 3, "ngModel", "ngModelChange"], ["class", "card", "style", "width: 18rem; margin-top: 15px;", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem", "margin-top", "15px"], ["alt", "Card image cap", "alt", "imagenes", 1, "groupImg", 3, "id", "src", "click"], [1, "card-body"], ["align", "center", 1, "card-title", 3, "id", "click"], ["align", "center", 1, "card-text", 3, "id"], [1, "button", "is-info", 2, "margin-right", "10px", 3, "click"], [1, "forms", 2, "margin-top", "15px", 3, "formGroup"], ["id", "volver", 1, "button", "is-info", 2, "align-self", "left", 3, "click"], ["formControlName", "owner", "type", "text", 1, "input", 2, "display", "none", 3, "ngModel", "ngModelChange"], ["for", "name", 1, "subName"], [1, "field"], ["formControlName", "name", "type", "text", "placeholder", "Nombre del Grupo", "required", "", 1, "input"], ["for", "description", 1, "subName"], ["type", "text", "formControlName", "description", "placeholder", "Descripci\u00F3n", "required", "", 1, "input"], ["for", "tags", 1, "subName"], [1, "field", 2, "height", "15vh"], ["id", "select", "required", "", "formControlName", "integrants", "multiple", "", 2, "height", "100%"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "privacity", 1, "subName"], ["id", "select", "required", "", "formControlName", "privacity"], ["value", "publico"], ["value", "privado"], [1, "field", 2, "height", "25vh"], ["id", "select", "required", "", "formControlName", "tags", "multiple", "", 2, "height", "100%"], [1, "registrar", 2, "padding-bottom", "20px", "padding-top", "5px"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 3, "disabled", "click"], [3, "value"], [3, "imgUrlEmitter"], ["srcset", "", "alt", "", "id", "img", 1, "createGroupPhotoimg", 3, "src"], [1, "containerSearchGroups"], ["id", "name", 1, "name", 2, "margin-top", "10px"], ["type", "text", "name", "searchBoxExternal", "placeholder", "Buscar", 2, "margin-bottom", "10px", 3, "ngModel", "ngModelChange"], ["class", "card", "style", "width: 18rem; margin-bottom: 15px;", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem", "margin-bottom", "15px"], [1, "groupContainer"], [4, "ngFor", "ngForOf"], [1, "photoContainer"], ["srcset", "", "alt", "", "id", "img", 1, "Photoimg", 3, "src"], [1, "ContainerDescription", 2, "margin-top", "10px"], ["type", "submit", "class", "button is-info", "style", "padding: 5px; ", 3, "click", 4, "ngIf"], ["type", "submit", "class", "button is-danger", "style", "padding: 5px;", 3, "click", 4, "ngIf"], [1, "container"], [1, "integrants"], [1, "buttons", 2, "width", "100%"], ["type", "submit", "class", "button is-info", 3, "click", 4, "ngIf"], [1, "ownerContainer"], [1, "table"], ["scope", "col", 2, "color", "#205493"], [3, "id"], ["class", "integrantsContainer", 4, "ngIf"], [1, "tagsContainer"], ["scope", "col", "style", "color: #205493;", 4, "ngIf"], [3, "id", 4, "ngFor", "ngForOf"], ["type", "submit", "class", "button is-info", "style", "padding: 5px; width: max-content;", 3, "click", 4, "ngIf"], ["class", "librosContainer", 4, "ngIf"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", 3, "click"], ["type", "submit", 1, "button", "is-danger", 2, "padding", "5px", 3, "click"], ["type", "text", 1, "inputDescripcion", 3, "ngModel", "ngModelChange"], ["disabled", "", "type", "text", 1, "inputDescripcion", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "button", "is-info", 3, "click"], [1, "integrantsContainer"], [1, "integrants", 2, "margin-top", "20px"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", 1, "tagImg", 3, "id", "click"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", "width", "max-content", 3, "click"], [1, "librosContainer"], ["class", "name", "style", "margin-top: 40px;", 4, "ngIf"], [1, "name", 2, "margin-top", "40px"], ["ngbSlide", "", 3, "id"], [1, "eliminate"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", "class", "tagImg", "style", "margin-bottom: 5px;", 3, "id", "click", 4, "ngIf"], [1, "carusel"], [1, "picsum-img-wrapper", 3, "click"], ["alt", "Random first slide", 1, "portadaImg", 3, "id", "src"], [1, "carousel-caption", 2, "z-index", "0"], ["align", "center", 3, "id"], ["align", "center", 2, "margin-bottom", "10px", 3, "id"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", 1, "tagImg", 2, "margin-bottom", "5px", 3, "id", "click"]], template: function GroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GroupComponent_div_3_Template, 14, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GroupComponent_form_6_Template, 43, 5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GroupComponent_div_7_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GroupComponent_div_10_Template, 10, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, GroupComponent_div_13_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstPage == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewCreateGroup == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nextImage == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewsearchGroup == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewInsideGroup == true);
    } }, directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavigationBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_12__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_13__["FileUploadComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbSlide"]], pipes: [_pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterExternalProfilesPipe"]], styles: [".app[_ngcontent-%COMP%]   .containerComponents[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 80px;\n}\n.app[_ngcontent-%COMP%]   .containerComponents[_ngcontent-%COMP%]   #boton[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-align: center;\n  color: #205493;\n  align-self: center;\n}\n.integrants[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-align: center;\n  color: #205493;\n  align-self: center;\n}\n.subName[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: large;\n  color: #205493;\n  align-self: center;\n}\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n.card-text[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n.forms[_ngcontent-%COMP%] {\n  width: 90%;\n}\n#volver[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #8f8f8f;\n  border-radius: 5px;\n}\n.registrar[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n.photoContainer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.photoContainer[_ngcontent-%COMP%]   .Photoimg[_ngcontent-%COMP%] {\n  width: 100%;\n  \n  height: 200px;\n  \n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n.inputDescripcion[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  width: 80vw;\n  height: 100px;\n  border-radius: 20px;\n  padding: 10px;\n  text-overflow: ellipsis;\n  word-break: break-word;\n}\n.carusel[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n.contanier[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  justify-content: center;\n}\n.tagImg[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n}\n.eliminate[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-flow: column wrap;\n  justify-content: center;\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ncm91cC9ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZSO0FBS1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBSFo7QUFRQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVNBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtBQVBKO0FBVUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUEo7QUFVQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFQSjtBQVVBO0VBQ0ksaUJBQUE7QUFQSjtBQVVBO0VBQ0ksaUJBQUE7QUFQSjtBQVdBO0VBQ0ksVUFBQTtBQVJKO0FBV0E7RUFDSSxlQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7QUFSSjtBQVlBO0VBQ0ksV0FBQTtFQUdBLHlCQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQWNBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVhKO0FBZUE7RUFDSSxnQkFBQTtBQVpKO0FBY0k7RUFDSSxXQUFBO0VBQWEsdUJBQUE7RUFDYixhQUFBO0VBQWUsd0JBQUE7RUFDZixvQkFBQTtLQUFBLGlCQUFBO0FBVlI7QUFjQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFYSjtBQWdCQTtFQUVJLG1CQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFLQSx1QkFBQTtFQUVBLHNCQUFBO0FBcEJKO0FBdUJBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQXBCSjtBQXVCQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQXBCSjtBQXVCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBcEJKO0FBdUJBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFwQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcml2YXRlL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XHJcbiAgICAvLyB3aWR0aDogOTAlO1xyXG5cclxuICAgIC5jb250YWluZXJDb21wb25lbnRzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhICA7XHJcblxyXG4gICAgICAgICNib3RvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICMyMDU0OTM7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnRlZ3JhbnRze1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjMjA1NDkzO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyAgXHJcbn1cclxuXHJcbi5zdWJOYW1lIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgY29sb3I6ICMyMDU0OTM7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuXHJcbi5mb3Jtc3tcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbiN2b2x2ZXJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIGRhcmtvcmNoaWQ7XHJcbn1cclxuXHJcbiNzZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGJvcmRlci1jb2xvcjogIzRmNGY0ZjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGY4ZjhmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucmVnaXN0cmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG59XHJcblxyXG5cclxuLnBob3RvQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIFxyXG4gICAgLlBob3RvaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvKiB3aWR0aCBvZiBjb250YWluZXIgKi9cclxuICAgICAgICBoZWlnaHQ6IDIwMHB4OyAvKiBoZWlnaHQgb2YgY29udGFpbmVyICovXHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG59XHJcblxyXG5cclxuXHJcbi5pbnB1dERlc2NyaXBjaW9ue1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIC8vIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBcclxufVxyXG5cclxuLmNhcnVzZWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbn1cclxuXHJcbi5jb250YW5pZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhZ0ltZ3tcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4uZWxpbWluYXRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIHdpZHRoOiA4NSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-group',
                templateUrl: './group.component.html',
                styleUrls: ['./group.component.scss']
            }]
    }], function () { return [{ type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "oTol":
/*!**********************************************************!*\
  !*** ./src/app/pages/private/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToProfile() {
        this.router.navigate(['/profile']);
    }
    goToHome() {
        this.router.navigate(['/home']);
    }
    goToGroups() {
        this.router.navigate(['/groups']);
    }
    goToBook() {
        this.router.navigate(['/mybooks']);
    }
    goToExternalProfiles() {
        this.router.navigate(['/externalProfiles']);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "footer-brand", "foot"], [1, "footer-item"], ["src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDQgNTEyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTI5MS4wNTcsMjQyLjgxMWMxLjUxLDIuOTUzLDQuNTE0LDQuNjU5LDcuNjIsNC42NTljMS4yOTcsMCwyLjYyOC0wLjI5OSwzLjg2Ni0wLjkzICAgICBjMC41MDMtMC4yNTYsNTAuNzMxLTI1Ljc3MSw3NS41MDMtMzMuNTk2YzQuNDg5LTEuNDI1LDYuOTgtNi4yMjEsNS41NTUtMTAuNzA5Yy0xLjQxNy00LjQ4OS02LjE3OC02Ljk4OS0xMC43MDktNS41NzIgICAgIGMtMjYuMDk1LDguMjUyLTc1Ljk4MSwzMy41OTYtNzguMDk3LDM0LjY3MUMyOTAuNTk2LDIzMy40NjcsMjg4LjkyNCwyMzguNjA1LDI5MS4wNTcsMjQyLjgxMXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTI5OC42NzcsMTQ1LjA3MWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTNjMC41MDMtMC4yNTYsNTAuNzMxLTI1Ljc3MSw3NS41MDMtMzMuNTk2ICAgICBjNC40ODktMS40MjUsNi45OC02LjIyMSw1LjU1NS0xMC43MDljLTEuNDE3LTQuNDg5LTYuMTc4LTYuOTg5LTEwLjcwOS01LjU3MmMtMjYuMDk1LDguMjUyLTc1Ljk4MSwzMy41OTYtNzguMDk3LDM0LjY3MSAgICAgYy00LjE5OCwyLjEzMy01Ljg3MSw3LjI3LTMuNzM4LDExLjQ3N0MyOTIuNTY3LDE0My4zNjQsMjk1LjU3MSwxNDUuMDcxLDI5OC42NzcsMTQ1LjA3MXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTUwMy40NjksMTI4LjAwNGMtNC43MTksMC04LjUzMywzLjgyMy04LjUzMyw4LjUzM3YzMzIuOGMwLDE0LjExNC0xMS40ODYsMjUuNi0yNS42LDI1LjZoLTIwNC44di0xOS42MzUgICAgIGMxMi40NDItNC4zNTIsNDQuODUxLTE0LjQ5OCw3Ni44LTE0LjQ5OGM3NC4zMzQsMCwxMjQuODA5LDE2LjQ2MSwxMjUuMzEyLDE2LjYzMWMyLjU2OCwwLjg1Myw1LjQzNiwwLjQyNyw3LjY4LTEuMTc4ICAgICBjMi4yMjctMS42MDQsMy41NDEtNC4xODEsMy41NDEtNi45MjFWOTMuODcxYzAtNC4wMDItMi43NzMtNy40NjctNi42ODItOC4zMjljMCwwLTYuNjktMS40OTMtMTguMTI1LTMuNTkzICAgICBjLTQuNjE3LTAuODUzLTkuMDc5LDIuMjE5LTkuOTMzLDYuODQ0Yy0wLjg1Myw0LjY0MiwyLjIxLDkuMDg4LDYuODQ0LDkuOTQxYzQuMzYxLDAuODAyLDguMDEzLDEuNTEsMTAuODI5LDIuMDc0djM1Ny4xODggICAgIGMtMTkuMzM3LTUuMDY5LTYyLjI3Ni0xNC4yNTktMTE5LjQ2Ny0xNC4yNTljLTM3LjE4LDAtNzMuNzAyLDEyLjIxMS04NS4wMDEsMTYuMzVjLTEwLjA0NC00LjQzNy00MC40MDUtMTYuMzUtNzcuMTMzLTE2LjM1ICAgICBjLTU4Ljc3OCwwLTEwNy4xOTYsOS42OTQtMTI4LDE0LjYxOFYxMDAuNDc1YzE3LjA0MS00LjE5LDY3LjM3MS0xNS4xMzgsMTI4LTE1LjEzOGMzMS4xMTMsMCw1Ny43OTYsOS42ODUsNjguMjY3LDE0LjA2M3YzMzUuODA0ICAgICBjMCwzLjA3MiwxLjY1NSw1LjkxNCw0LjMyNiw3LjQyNGMyLjY3MSwxLjUxOSw1Ljk2NSwxLjQ3Niw4LjYwMi0wLjExMWMwLjg0NS0wLjUwMyw4NS4zOTMtNTEuMDA0LDE2MC40MzUtNzYuMDE1ICAgICBjMy40OS0xLjE2OSw1LjgzNy00LjQyLDUuODM3LTguMDk4VjguNTM3YzAtMi43OTktMS4zNzQtNS40MTktMy42NzgtNy4wMTRjLTIuMjg3LTEuNTk2LTUuMjIyLTEuOTYzLTcuODU5LTAuOTgxICAgICBDMzQ2Ljg1NiwyNi4xNSwyNzcuNzcxLDY5LjE0MSwyNzcuMDc5LDY5LjU2OGMtMy45OTQsMi41LTUuMjE0LDcuNzY1LTIuNzE0LDExLjc1OWMyLjQ5MiwzLjk5NCw3Ljc1Nyw1LjIxNCwxMS43NTksMi43MTQgICAgIGMwLjYzMS0wLjQwMSw2MC43MzItMzcuNzk0LDEyMy40NzctNjMuMDI3djMzMS4yODFjLTU4LjI0OSwyMC4yNDEtMTE5LjA2Niw1My4yOTEtMTQ1LjA2Nyw2OC4wODdWOTMuODcxICAgICBjMC0zLjIzNC0xLjgyNi02LjE4Ny00LjcxOS03LjYzN2MtMS40NjgtMC43MjUtMzYuNDM3LTE3Ljk2My04MC42MTQtMTcuOTYzYy03Ny4xMDcsMC0xMzYuMzg4LDE2LjY4My0xMzguODgsMTcuMzk5ICAgICBjLTMuNjYxLDEuMDQxLTYuMTg3LDQuMzk1LTYuMTg3LDguMjAxdjM3NS40NjdjMCwyLjY3MSwxLjI2Myw1LjE5NywzLjM4OCw2LjgxYzEuNTAyLDEuMTM1LDMuMzExLDEuNzI0LDUuMTQ2LDEuNzI0ICAgICBjMC43ODUsMCwxLjU3LTAuMTExLDIuMzM4LTAuMzMzYzAuNTg5LTAuMTYyLDU5LjU5Ny0xNi43MzQsMTM0LjE5NS0xNi43MzRjMzEuMTk4LDAsNTcuODU2LDkuNzExLDY4LjI2NywxNC4wNzF2MjAuMDYyaC0yMDQuOCAgICAgYy0xNC4xMTQsMC0yNS42LTExLjQ4Ni0yNS42LTI1LjZ2LTMzMi44YzAtNC43MS0zLjgyMy04LjUzMy04LjUzMy04LjUzM3MtOC41MzMsMy44MjMtOC41MzMsOC41MzN2MzMyLjggICAgIGMwLDIzLjUyNiwxOS4xNCw0Mi42NjcsNDIuNjY3LDQyLjY2N2g0MjYuNjY3YzIzLjUyNiwwLDQyLjY2Ny0xOS4xNCw0Mi42NjctNDIuNjY3di0zMzIuOCAgICAgQzUxMi4wMDIsMTMxLjgyNyw1MDguMTg4LDEyOC4wMDQsNTAzLjQ2OSwxMjguMDA0eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjkxLjA1NywxOTEuNjExYzEuNTEsMi45NTMsNC41MTQsNC42NTksNy42Miw0LjY1OWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTMgICAgIGMwLjUwMy0wLjI1Niw1MC43MzEtMjUuNzcxLDc1LjUwMy0zMy41OTZjNC40ODktMS40MjUsNi45OC02LjIyMSw1LjU1NS0xMC43MDljLTEuNDE3LTQuNDg5LTYuMTc4LTYuOTg5LTEwLjcwOS01LjU3MiAgICAgYy0yNi4wOTUsOC4yNTItNzUuOTgxLDMzLjU5Ni03OC4wOTcsMzQuNjcxQzI5MC41OTYsMTgyLjI2NywyODguOTI0LDE4Ny40MDUsMjkxLjA1NywxOTEuNjExeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjkxLjA1NywyOTQuMDExYzEuNTEsMi45NTMsNC41MTQsNC42NTksNy42Miw0LjY1OWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTMgICAgIGMwLjUwMy0wLjI1Niw1MC43MzEtMjUuNzcxLDc1LjUwMy0zMy41OTZjNC40ODktMS40MjUsNi45OC02LjIyMSw1LjU1NS0xMC43MDljLTEuNDE3LTQuNDg5LTYuMTc4LTYuOTg5LTEwLjcwOS01LjU3MiAgICAgYy0yNi4wOTUsOC4yNTItNzUuOTgxLDMzLjU5Ni03OC4wOTcsMzQuNjcxQzI5MC41OTYsMjg0LjY2NywyODguOTI0LDI4OS44MDUsMjkxLjA1NywyOTQuMDExeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjA2Ljc0OCwxNTguMzY2Yy01Mi42OTMtMTIuMzY1LTExMi41NzIsMy4zODgtMTE1LjA4OSw0LjA2MmMtNC41NDgsMS4yMi03LjI1Myw1Ljg5Ni02LjAzMywxMC40NTMgICAgIGMxLjAyNCwzLjgxNCw0LjQ3MSw2LjMyMyw4LjIzNSw2LjMyM2MwLjczNCwwLDEuNDc2LTAuMDk0LDIuMjE5LTAuMjljMC41NzItMC4xNjIsNTguMjIzLTE1LjMyNiwxMDYuNzc4LTMuOTM0ICAgICBjNC41NjUsMS4wNjcsOS4xODItMS43NzUsMTAuMjU3LTYuMzY2QzIxNC4xODksMTY0LjAzMiwyMTEuMzM5LDE1OS40NDEsMjA2Ljc0OCwxNTguMzY2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjA2Ljc0OCwyMDkuNTY2Yy01Mi42OTMtMTIuMzU2LTExMi41NzIsMy4zODgtMTE1LjA4OSw0LjA2MmMtNC41NDgsMS4yMi03LjI1Myw1Ljg5Ny02LjAzMywxMC40NTMgICAgIGMxLjAyNCwzLjgxNCw0LjQ3MSw2LjMyMyw4LjIzNSw2LjMyM2MwLjczNCwwLDEuNDc2LTAuMDk0LDIuMjE5LTAuMjljMC41NzItMC4xNjIsNTguMjIzLTE1LjMyNiwxMDYuNzc4LTMuOTM0ICAgICBjNC41NjUsMS4wNjcsOS4xODItMS43NzUsMTAuMjU3LTYuMzY2QzIxNC4xODksMjE1LjIzMiwyMTEuMzM5LDIxMC42NDEsMjA2Ljc0OCwyMDkuNTY2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjkxLjA1NywzNDUuMjExYzEuNTEsMi45NTMsNC41MTQsNC42NTksNy42Miw0LjY1OWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTMgICAgIGMwLjUwMy0wLjI1Niw1MC43MzEtMjUuNzcxLDc1LjUwMy0zMy41OTZjNC40ODktMS40MjUsNi45OC02LjIyMSw1LjU1NS0xMC43MDljLTEuNDE3LTQuNDg4LTYuMTc4LTYuOTg5LTEwLjcwOS01LjU3MiAgICAgYy0yNi4wOTUsOC4yNTItNzUuOTgxLDMzLjU5Ni03OC4wOTcsMzQuNjcxQzI5MC41OTYsMzM1Ljg2NywyODguOTI0LDM0MS4wMDUsMjkxLjA1NywzNDUuMjExeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjA2Ljc0OCwyNjAuNzY2Yy01Mi42OTMtMTIuMzU2LTExMi41NzIsMy4zNzktMTE1LjA4OSw0LjA2MmMtNC41NDgsMS4yMi03LjI1Myw1Ljg5Ny02LjAzMywxMC40NTMgICAgIGMxLjAyNCwzLjgxNCw0LjQ3MSw2LjMzMiw4LjIzNSw2LjMzMmMwLjczNCwwLDEuNDc2LTAuMTAyLDIuMjE5LTAuMjk5YzAuNTcyLTAuMTYyLDU4LjIyMy0xNS4zMjYsMTA2Ljc3OC0zLjkzNCAgICAgYzQuNTY1LDEuMDY3LDkuMTgyLTEuNzc1LDEwLjI1Ny02LjM2NkMyMTQuMTg5LDI2Ni40MzIsMjExLjMzOSwyNjEuODQxLDIwNi43NDgsMjYwLjc2NnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTIwNi43NDgsMzYzLjE2NmMtNTIuNjkzLTEyLjM2NS0xMTIuNTcyLDMuMzg4LTExNS4wODksNC4wNjJjLTQuNTQ4LDEuMjItNy4yNTMsNS44OTctNi4wMzMsMTAuNDUzICAgICBjMS4wMjQsMy44MTQsNC40NzEsNi4zMzIsOC4yMzUsNi4zMzJjMC43MzQsMCwxLjQ3Ni0wLjEwMiwyLjIxOS0wLjI5OWMwLjU3Mi0wLjE2Miw1OC4yMjMtMTUuMzI2LDEwNi43NzgtMy45MzQgICAgIGM0LjU2NSwxLjA1OCw5LjE4Mi0xLjc3NSwxMC4yNTctNi4zNjZDMjE0LjE4OSwzNjguODMyLDIxMS4zMzksMzY0LjI0MSwyMDYuNzQ4LDM2My4xNjZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik0yMDYuNzQ4LDMxMS45NjZjLTUyLjY5My0xMi4zNjUtMTEyLjU3MiwzLjM3OS0xMTUuMDg5LDQuMDYyYy00LjU0OCwxLjIyLTcuMjUzLDUuODk3LTYuMDMzLDEwLjQ1MyAgICAgYzEuMDI0LDMuODE0LDQuNDcxLDYuMzMyLDguMjM1LDYuMzMyYzAuNzM0LDAsMS40NzYtMC4xMDIsMi4yMTktMC4yOTljMC41NzItMC4xNjIsNTguMjIzLTE1LjMyNiwxMDYuNzc4LTMuOTM0ICAgICBjNC41NjUsMS4wNjcsOS4xODItMS43NzUsMTAuMjU3LTYuMzY2QzIxNC4xODksMzE3LjYzMiwyMTEuMzM5LDMxMy4wNDEsMjA2Ljc0OCwzMTEuOTY2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+", "alt", "", 1, "imagen", 3, "click"], ["src", "../../../../assets/img/add-user.png", "alt", "", 1, "imagen", 3, "click"], ["src", "https://firebasestorage.googleapis.com/v0/b/tesisredsocial-be58f.appspot.com/o/icons%2Fhome.png?alt=media&token=511e456d-58ab-4670-928b-84f8f93e18e0", "alt", "", 1, "imagen", 3, "click"], ["src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUwNS40IDUwNS40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik00MzcuMSwyMzMuNDVjMTQuOC0xMC40LDI0LjYtMjcuNywyNC42LTQ3LjJjMC0zMS45LTI1LjgtNTcuNy01Ny43LTU3LjdjLTMxLjksMC01Ny43LDI1LjgtNTcuNyw1Ny43ICAgIGMwLDE5LjUsOS43LDM2LjgsMjQuNiw0Ny4yYy0xMi43LDQuNC0yNC4zLDExLjItMzQuMSwyMGMtMTMuNS0xMS41LTI5LjQtMjAuMy00Ni44LTI1LjVjMjEuMS0xMi44LDM1LjMtMzYuMSwzNS4zLTYyLjYgICAgYzAtNDAuNC0zMi43LTczLjEtNzMuMS03My4xYy00MC40LDAtNzMuMSwzMi44LTczLjEsNzMuMWMwLDI2LjUsMTQuMSw0OS44LDM1LjMsNjIuNmMtMTcuMiw1LjItMzIuOSwxMy45LTQ2LjMsMjUuMiAgICBjLTkuOC04LjYtMjEuMi0xNS4zLTMzLjctMTkuNmMxNC44LTEwLjQsMjQuNi0yNy43LDI0LjYtNDcuMmMwLTMxLjktMjUuOC01Ny43LTU3LjctNTcuN3MtNTcuNywyNS44LTU3LjcsNTcuNyAgICBjMCwxOS41LDkuNywzNi44LDI0LjYsNDcuMkMyOC41LDI0Ny4yNSwwLDI4NC45NSwwLDMyOS4yNXY2LjZjMCwwLjIsMC4yLDAuNCwwLjQsMC40aDEyMi4zYy0wLjcsNS41LTEuMSwxMS4yLTEuMSwxNi45djYuOCAgICBjMCwyOS40LDIzLjgsNTMuMiw1My4yLDUzLjJoMTU1YzI5LjQsMCw1My4yLTIzLjgsNTMuMi01My4ydi02LjhjMC01LjctMC40LTExLjQtMS4xLTE2LjlINTA1YzAuMiwwLDAuNC0wLjIsMC40LTAuNHYtNi42ICAgIEM1MDUuMiwyODQuODUsNDc2LjgsMjQ3LjE1LDQzNy4xLDIzMy40NXogTTM2Mi4zLDE4Ni4xNWMwLTIzLDE4LjctNDEuNyw0MS43LTQxLjdzNDEuNywxOC43LDQxLjcsNDEuNyAgICBjMCwyMi43LTE4LjMsNDEuMi00MC45LDQxLjdjLTAuMywwLTAuNSwwLTAuOCwwcy0wLjUsMC0wLjgsMEMzODAuNSwyMjcuNDUsMzYyLjMsMjA4Ljk1LDM2Mi4zLDE4Ni4xNXogTTE5NC45LDE2NS4zNSAgICBjMC0zMS41LDI1LjYtNTcuMSw1Ny4xLTU3LjFzNTcuMSwyNS42LDU3LjEsNTcuMWMwLDMwLjQtMjMuOSw1NS4zLTUzLjgsNTdjLTEuMSwwLTIuMiwwLTMuMywwYy0xLjEsMC0yLjIsMC0zLjMsMCAgICBDMjE4LjgsMjIwLjY1LDE5NC45LDE5NS43NSwxOTQuOSwxNjUuMzV6IE01OS4zLDE4Ni4xNWMwLTIzLDE4LjctNDEuNyw0MS43LTQxLjdzNDEuNywxOC43LDQxLjcsNDEuN2MwLDIyLjctMTguMyw0MS4yLTQwLjksNDEuNyAgICBjLTAuMywwLTAuNSwwLTAuOCwwcy0wLjUsMC0wLjgsMEM3Ny42LDIyNy40NSw1OS4zLDIwOC45NSw1OS4zLDE4Ni4xNXogTTEyNS41LDMyMC4xNUgxNi4yYzQuNS00Mi42LDQwLjUtNzYsODQuMi03Ni4zICAgIGMwLjIsMCwwLjQsMCwwLjYsMHMwLjQsMCwwLjYsMGMyMC44LDAuMSwzOS44LDcuOCw1NC41LDIwLjNDMTQxLjcsMjc5Ljc1LDEzMSwyOTguOTUsMTI1LjUsMzIwLjE1eiBNMzY2LjgsMzU5Ljk1ICAgIGMwLDIwLjUtMTYuNywzNy4yLTM3LjIsMzcuMmgtMTU1Yy0yMC41LDAtMzcuMi0xNi43LTM3LjItMzcuMnYtNi44YzAtNjIuMSw0OS42LTExMi45LDExMS4zLTExNC43YzEuMSwwLjEsMi4zLDAuMSwzLjQsMC4xICAgIHMyLjMsMCwzLjQtMC4xYzYxLjcsMS44LDExMS4zLDUyLjYsMTExLjMsMTE0LjdWMzU5Ljk1eiBNMzc4LjcsMzIwLjE1Yy01LjUtMjEuMS0xNi00MC0zMC4zLTU1LjZjMTQuOC0xMi44LDM0LTIwLjUsNTUtMjAuNyAgICBjMC4yLDAsMC40LDAsMC42LDBzMC40LDAsMC42LDBjNDMuNywwLjMsNzkuNywzMy43LDg0LjIsNzYuM0gzNzguN3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+", "alt", "", 1, "imagen", 3, "click"], ["src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI0MCwwQzEwNy42NjQsMCwwLDEwNy42NjQsMCwyNDBjMCw1Ny45NiwyMC42NTYsMTExLjE4NCw1NC45OTIsMTUyLjcwNGMwLjA4OCwwLjEyLDAuMDk2LDAuMjcyLDAuMTkyLDAuMzg0ICAgIGMyNC43OTIsMjkuODk2LDU1LjkyOCw1Mi44MTYsOTAuNjI0LDY3LjYyNGMwLjQsMC4xNjgsMC43OTIsMC4zNTIsMS4xOTIsMC41MmMyLjgwOCwxLjE4NCw1LjY0OCwyLjI4LDguNDk2LDMuMzUyICAgIGMxLjEyLDAuNDI0LDIuMjQsMC44NTYsMy4zNzYsMS4yNjRjMi40NTYsMC44OCw0LjkyOCwxLjcxMiw3LjQxNiwyLjUxMmMxLjU5MiwwLjUxMiwzLjE4NCwxLjAxNiw0Ljc5MiwxLjQ5NiAgICBjMi4yLDAuNjU2LDQuNDA4LDEuMjg4LDYuNjMyLDEuODg4YzEuOTUyLDAuNTI4LDMuOTIsMS4wMTYsNS44ODgsMS40ODhjMS45OTIsMC40OCwzLjk5MiwwLjk2LDYsMS4zODQgICAgYzIuMjQsMC40OCw0LjUwNCwwLjkwNCw2Ljc3NiwxLjMyYzEuODI0LDAuMzM2LDMuNjQsMC42ODgsNS40OCwwLjk4NGMyLjUyLDAuNDA4LDUuMDU2LDAuNzI4LDcuNiwxLjA1NiAgICBjMS42NCwwLjIwOCwzLjI3MiwwLjQ0OCw0LjkyLDAuNjI0YzIuODgsMC4zMDQsNS43ODQsMC41Miw4LjY5NiwwLjcyYzEuMzUyLDAuMDk2LDIuNjk2LDAuMjQsNC4wNTYsMC4zMTIgICAgYzQuMjQ4LDAuMjQsOC41NDQsMC4zNjgsMTIuODcyLDAuMzY4czguNjI0LTAuMTI4LDEyLjg4OC0wLjM1MmMxLjM2LTAuMDcyLDIuNzA0LTAuMjE2LDQuMDU2LTAuMzEyICAgIGMyLjkxMi0wLjIwOCw1LjgxNi0wLjQxNiw4LjY5Ni0wLjcyYzEuNjQ4LTAuMTc2LDMuMjgtMC40MTYsNC45Mi0wLjYyNGMyLjU0NC0wLjMyOCw1LjA4LTAuNjQ4LDcuNi0xLjA1NiAgICBjMS44MzItMC4yOTYsMy42NTYtMC42NDgsNS40OC0wLjk4NGMyLjI2NC0wLjQxNiw0LjUyOC0wLjg0LDYuNzc2LTEuMzJjMi4wMDgtMC40MzIsNC0wLjkwNCw2LTEuMzg0ICAgIGMxLjk2OC0wLjQ4LDMuOTM2LTAuOTY4LDUuODg4LTEuNDg4YzIuMjI0LTAuNTkyLDQuNDMyLTEuMjMyLDYuNjMyLTEuODg4YzEuNjA4LTAuNDgsMy4yLTAuOTg0LDQuNzkyLTEuNDk2ICAgIGMyLjQ4OC0wLjgsNC45Ni0xLjYzMiw3LjQxNi0yLjUxMmMxLjEyOC0wLjQwOCwyLjI0OC0wLjg0LDMuMzc2LTEuMjY0YzIuODU2LTEuMDcyLDUuNjg4LTIuMTc2LDguNDk2LTMuMzUyICAgIGMwLjQtMC4xNjgsMC43OTItMC4zNTIsMS4xOTItMC41MmMzNC42ODgtMTQuODA4LDY1LjgzMi0zNy43MjgsOTAuNjI0LTY3LjYyNGMwLjA5Ni0wLjExMiwwLjEwNC0wLjI3MiwwLjE5Mi0wLjM4NCAgICBDNDU5LjM0NCwzNTEuMTg0LDQ4MCwyOTcuOTYsNDgwLDI0MEM0ODAsMTA3LjY2NCwzNzIuMzM2LDAsMjQwLDB6IE0zMzcuMjU2LDQ0MS43NmMtMC4xMiwwLjA1Ni0wLjIzMiwwLjEyLTAuMzUyLDAuMTc2ICAgIGMtMi44NTYsMS4zNzYtNS43NiwyLjY3Mi04LjY4OCwzLjkzNmMtMC42NjQsMC4yOC0xLjMyLDAuNTY4LTEuOTg0LDAuODQ4Yy0yLjU2LDEuMDcyLTUuMTUyLDIuMDg4LTcuNzYsMy4wNjQgICAgYy0xLjA4OCwwLjQwOC0yLjE3NiwwLjgwOC0zLjI3MiwxLjE5MmMtMi4zMTIsMC44MjQtNC42MzIsMS42MTYtNi45NzYsMi4zNjhjLTEuNDU2LDAuNDY0LTIuOTIsMC45MDQtNC4zODQsMS4zMzYgICAgYy0yLjA4LDAuNjI0LTQuMTY4LDEuMjI0LTYuMjgsMS43ODRjLTEuNzc2LDAuNDcyLTMuNTY4LDAuOTA0LTUuMzYsMS4zMjhjLTEuODgsMC40NDgtMy43NTIsMC45MDQtNS42NDgsMS4zMDQgICAgYy0yLjA3MiwwLjQ0LTQuMTYsMC44MTYtNi4yNCwxLjE5MmMtMS42ODgsMC4zMTItMy4zNjgsMC42NC01LjA3MiwwLjkxMmMtMi4zNDQsMC4zNjgtNC43MTIsMC42NjQtNy4wNzIsMC45NiAgICBjLTEuNDk2LDAuMTkyLTIuOTg0LDAuNDE2LTQuNDk2LDAuNTc2Yy0yLjY5NiwwLjI4OC01LjQxNiwwLjQ3Mi04LjEyOCwwLjY2NGMtMS4yMDgsMC4wOC0yLjQwOCwwLjIxNi0zLjYzMiwwLjI4ICAgIGMtMy45NiwwLjIwOC03LjkyOCwwLjMyLTExLjkxMiwwLjMycy03Ljk1Mi0wLjExMi0xMS45MDQtMC4zMmMtMS4yMTYtMC4wNjQtMi40MTYtMC4xOTItMy42MzItMC4yOCAgICBjLTIuNzItMC4xODQtNS40MzItMC4zNzYtOC4xMjgtMC42NjRjLTEuNTEyLTAuMTYtMy0wLjM4NC00LjQ5Ni0wLjU3NmMtMi4zNi0wLjI5Ni00LjcyOC0wLjU5Mi03LjA3Mi0wLjk2ICAgIGMtMS43MDQtMC4yNzItMy4zODQtMC42LTUuMDcyLTAuOTEyYy0yLjA4OC0wLjM3Ni00LjE3Ni0wLjc2LTYuMjQtMS4xOTJjLTEuODk2LTAuNC0zLjc3Ni0wLjg1Ni01LjY0OC0xLjMwNCAgICBjLTEuNzkyLTAuNDMyLTMuNTg0LTAuODU2LTUuMzYtMS4zMjhjLTIuMTA0LTAuNTYtNC4yLTEuMTY4LTYuMjgtMS43ODRjLTEuNDY0LTAuNDMyLTIuOTI4LTAuODcyLTQuMzg0LTEuMzM2ICAgIGMtMi4zNDQtMC43NTItNC42NzItMS41NDQtNi45NzYtMi4zNjhjLTEuMDk2LTAuMzkyLTIuMTg0LTAuNzkyLTMuMjcyLTEuMTkyYy0yLjYwOC0wLjk3Ni01LjItMS45OTItNy43Ni0zLjA2NCAgICBjLTAuNjY0LTAuMjcyLTEuMzEyLTAuNTYtMS45NzYtMC44NGMtMi45MjgtMS4yNTYtNS44MzItMi41Ni04LjY5Ni0zLjkzNmMtMC4xMi0wLjA1Ni0wLjIzMi0wLjExMi0wLjM1Mi0wLjE3NiAgICBjLTI3LjkxMi0xMy41MDQtNTIuNTY4LTMyLjY3Mi03Mi41NzYtNTUuOTUyYzE1LjQ2NC01Ni45NDQsNTkuMjQtMTAyLjg0OCwxMTUuNTYtMTIxLjExMmMxLjExMiwwLjY4LDIuMjcyLDEuMjg4LDMuNDE2LDEuOTI4ICAgIGMwLjY3MiwwLjM3NiwxLjMzNiwwLjc3NiwyLjAxNiwxLjEzNmMyLjM4NCwxLjI2NCw0LjgsMi40NDgsNy4yNzIsMy41MTJjMS44OTYsMC44MzIsMy44NTYsMS41MzYsNS44MDgsMi4yNTYgICAgYzAuMzg0LDAuMTM2LDAuNzY4LDAuMjg4LDEuMTUyLDAuNDI0YzEwLjg0OCwzLjg0LDIyLjQ1Niw2LjA0LDM0LjYsNi4wNHMyMy43NTItMi4yLDM0LjU5Mi02LjA0ICAgIGMwLjM4NC0wLjEzNiwwLjc2OC0wLjI4OCwxLjE1Mi0wLjQyNGMxLjk1Mi0wLjcyLDMuOTEyLTEuNDI0LDUuODA4LTIuMjU2YzIuNDcyLTEuMDY0LDQuODg4LTIuMjQ4LDcuMjcyLTMuNTEyICAgIGMwLjY4LTAuMzY4LDEuMzQ0LTAuNzYsMi4wMTYtMS4xMzZjMS4xNDQtMC42NCwyLjMxMi0xLjI0OCwzLjQzMi0xLjkzNmM1Ni4zMiwxOC4yNzIsMTAwLjA4OCw2NC4xNzYsMTE1LjU2LDEyMS4xMTIgICAgQzM4OS44MjQsNDA5LjA4LDM2NS4xNjgsNDI4LjI0OCwzMzcuMjU2LDQ0MS43NnogTTE1MiwxNzZjMC00OC41MiwzOS40OC04OCw4OC04OHM4OCwzOS40OCw4OCw4OCAgICBjMCwzMC44NjQtMTYuMDA4LDU4LjAyNC00MC4xMjgsNzMuNzM2Yy0zLjE1MiwyLjA0OC02LjQzMiwzLjg4LTkuOCw1LjQ4Yy0wLjQsMC4xOTItMC43OTIsMC4zOTItMS4xOTIsMC41NzYgICAgYy0yMy4xNjgsMTAuNTM2LTUwLjU5MiwxMC41MzYtNzMuNzYsMGMtMC40LTAuMTg0LTAuOC0wLjM4NC0xLjE5Mi0wLjU3NmMtMy4zNzYtMS42LTYuNjQ4LTMuNDMyLTkuOC01LjQ4ICAgIEMxNjguMDA4LDIzNC4wMjQsMTUyLDIwNi44NjQsMTUyLDE3NnogTTQyMS44MzIsMzcwLjU4NGMtMTguMTM2LTUzLjU1Mi01OS41MTItOTYuODMyLTExMi4zNzYtMTE3LjM5MiAgICBDMzMwLjYsMjM0LjE0NCwzNDQsMjA2LjY0LDM0NCwxNzZjMC01Ny4zNDQtNDYuNjU2LTEwNC0xMDQtMTA0cy0xMDQsNDYuNjU2LTEwNCwxMDRjMCwzMC42NCwxMy40LDU4LjE0NCwzNC41NTIsNzcuMTkyICAgIGMtNTIuODY0LDIwLjU2OC05NC4yNCw2My44NC0xMTIuMzc2LDExNy4zOTJDMzEuNjcyLDMzMy43OTIsMTYsMjg4LjcwNCwxNiwyNDBDMTYsMTE2LjQ4OCwxMTYuNDg4LDE2LDI0MCwxNnMyMjQsMTAwLjQ4OCwyMjQsMjI0ICAgIEM0NjQsMjg4LjcwNCw0NDguMzI4LDMzMy43OTIsNDIxLjgzMiwzNzAuNTg0eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=", "alt", "", 1, "imagen", 3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_4_listener() { return ctx.goToBook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_5_listener() { return ctx.goToExternalProfiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_6_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_7_listener() { return ctx.goToGroups(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_8_listener() { return ctx.goToProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: 6;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100vw;\n  bottom: 0px;\n  margin-bottom: 0px;\n  background-color: #205493;\n  position: fixed;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  justify-content: space-around;\n}\n\n.container[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%] {\n  width: 10%;\n  height: 10%;\n  margin: 4%;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.container[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFRQTtFQUNJLFdBQUE7QUFMSjs7QUFTQTtFQUNJLFlBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFkUTtFQWVSLGVBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBUUEsNkJBQUE7QUFmSjs7QUFtQkk7RUFHSSxVQUFBO0VBQ0EsV0FBQTtFQUdBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFyQlI7O0FBeUJJO0VBRUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQXhCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB6LWluZGV4OiA2O1xyXG59XHJcblxyXG4vLyBDb2xvcnNcclxuJGF6dWxPc2N1cm86ICMxMTJlNTE7XHJcbiRBenVsTWVkaW86ICMyMDU0OTM7XHJcbiRBenVsQ2xhcm86ICMwMDcxYmM7XHJcbiR0ZXh0OiAjMjEyMTIxO1xyXG5cclxuLmZvb3RlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIC8vIGhlaWdodDogOXZoOyBcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJEF6dWxNZWRpbztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuIFxyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBtYXJnaW46IDAlO1xyXG4gICAgLy8gcGFkZGluZzogMCU7XHJcbiAgICAvLyAvLyBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICAvLyAvLyBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIC8vIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxuICAgIC5pbWFnZW57XHJcbiAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIGhlaWdodDoxMCU7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgLy8gZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBtYXJnaW46IDQlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiUgO1xyXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItaXRlbXtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBob25leWRldztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuICAgICAgICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");




class UserService {
    constructor(firebase) {
        this.firebase = firebase;
        this.collection = 'register';
        this.subCollectionPhone = "telefono";
    }
    getUserImg(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let image = "";
            yield this.firebase.database.ref(this.collection).orderByChild('email').equalTo(email).limitToLast(1).once("value", (user) => {
                user = user.val();
                let Images = user[Object.keys(user)[0]].Images;
                let keys = Object.keys(Images);
                image = Images[keys[keys.length - 1]].ImgUrl;
            });
            return image;
        });
    }
    getRegister() {
        this.registerList = this.firebase.list(this.collection);
        return this.registerList;
    }
    getGroups() {
        this.groupsList = this.firebase.list('groups');
        return this.groupsList;
    }
    findById(email) {
        const ref = this.firebase.database.ref(this.collection);
        return ref.orderByChild('email').equalTo(email).limitToLast(1);
    }
    findByPhone(numero) {
        const ref = this.firebase.database.ref(this.collection);
        return ref.orderByChild(this.subCollectionPhone + '/e164Number').equalTo('+57' + numero).limitToLast(1);
    }
    deleteFriends(tagkey, $key) {
        console.log("delete $key");
        console.log(tagkey);
        this.firebase.database.ref(this.collection).child($key).child("Amigos").child(tagkey).remove();
    }
    deleteGroups(tagkey, $key) {
        console.log("delete $key");
        console.log(tagkey);
        this.firebase.database.ref("groups").child($key).child("integrants").child(tagkey).remove();
    }
    updateDescripcionGroup($key, value) {
        this.firebase.database.ref("groups").child($key).child("description").set(value);
    }
    updateUsername(user) {
        console.log("user.$key");
        console.log(user.$key);
        // this.registerList.update(register.$key, {
        //   name: register.name,
        // });
    }
    insertRegister(user) {
        // this.firebase.object(this.collection).set({...user});
        this.firebase.list('register').push({
            email: user.email,
            telefono: user.telefono,
            password: user.password,
            name: user.name,
            lname: user.lname
        });
    }
    createGroup(group) {
        this.firebase.list('groups').push({
            owner: group.owner,
            name: group.name,
            description: group.description,
            privacity: group.privacity,
            tags: group.tags,
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "2qj+");




class ChatService {
    constructor() { }
    connect() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            // this.socket = io('http://192.168.0.23:3000');
            this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])('https://c6e7-186-170-64-187.ngrok.io', { transports: ['websocket'] });
            //AQUI CAMBIO LA IP V4
            this.socket.on('connect', () => {
                this.socket.emit("connected");
                observer.next();
            });
        });
    }
    getNewMsgs() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.socket.on("newMsg", msg => {
                observer.next(msg);
            });
        });
    }
    getChangePage() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.socket.on("pageChange", info => {
                observer.next(info);
            });
        });
    }
    sendMsg(msg) {
        console.log(msg);
        this.socket.emit('newMsg', msg);
    }
    sendpageChange(info) {
        console.log("Service", info);
        this.socket.emit("pageChange", info);
    }
    disconnect() {
        this.socket.disconnect();
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "v5hE":
/*!********************************************************!*\
  !*** ./src/app/pipes/filter-external-profiles.pipe.ts ***!
  \********************************************************/
/*! exports provided: FilterExternalProfilesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterExternalProfilesPipe", function() { return FilterExternalProfilesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterExternalProfilesPipe {
    transform(value, args) {
        if (args === '') {
            return value;
        }
        const resultSearchBox = [];
        for (const post of value) {
            if (post.name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
                resultSearchBox.push(post);
            }
        }
        return resultSearchBox;
    }
}
FilterExternalProfilesPipe.ɵfac = function FilterExternalProfilesPipe_Factory(t) { return new (t || FilterExternalProfilesPipe)(); };
FilterExternalProfilesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterExternalProfiles", type: FilterExternalProfilesPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterExternalProfilesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterExternalProfiles'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/private/profile/profile.component */ "fu3/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/private/home/home.component */ "dsDk");
/* harmony import */ var _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/public/login/login.component */ "QuX9");
/* harmony import */ var _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/public/register/register.component */ "MyXD");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _pages_public_tags_tags_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/public/tags/tags.component */ "5VxN");
/* harmony import */ var _pages_private_external_profiles_external_profiles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/private/external-profiles/external-profiles.component */ "QBD8");
/* harmony import */ var _pages_private_group_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/private/group/group.component */ "mLow");
/* harmony import */ var _pages_private_book_pdf_book_pdf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/private/book-pdf/book-pdf.component */ "eu5Z");
/* harmony import */ var _pages_private_my_books_my_books_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/private/my-books/my-books.component */ "+SNX");




// import { HomeModule } from './pages/private/home/home.module';










const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["redirectUnauthorizedTo"])(['login']);
const redirectAuthorizedToHome = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["redirectLoggedInTo"])(['home']);
const routes = [
    { path: 'home', component: _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthGuard"]], data: { authGuardPipe: redirectUnauthorizedToLogin } },
    { path: 'login', component: _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthGuard"]], data: { authGuardPipe: redirectAuthorizedToHome } },
    { path: 'register', component: _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'profile', component: _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"] },
    { path: 'profile/**', component: _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"] },
    { path: 'tags', component: _pages_public_tags_tags_component__WEBPACK_IMPORTED_MODULE_7__["TagsComponent"] },
    { path: 'externalProfiles', component: _pages_private_external_profiles_external_profiles_component__WEBPACK_IMPORTED_MODULE_8__["ExternalProfilesComponent"] },
    { path: 'groups', component: _pages_private_group_group_component__WEBPACK_IMPORTED_MODULE_9__["GroupComponent"] },
    { path: 'book', component: _pages_private_book_pdf_book_pdf_component__WEBPACK_IMPORTED_MODULE_10__["BookPDFComponent"] },
    { path: 'mybooks', component: _pages_private_my_books_my_books_component__WEBPACK_IMPORTED_MODULE_11__["MyBooksComponent"] },
    { path: '**', redirectTo: '/login' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vrEl":
/*!****************************************************************!*\
  !*** ./src/app/pages/private/book-chat/book-chat.component.ts ***!
  \****************************************************************/
/*! exports provided: BookChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookChatComponent", function() { return BookChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BookChatComponent {
    constructor() { }
    ngOnInit() {
    }
}
BookChatComponent.ɵfac = function BookChatComponent_Factory(t) { return new (t || BookChatComponent)(); };
BookChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookChatComponent, selectors: [["app-book-chat"]], inputs: { msg: "msg" }, decls: 4, vars: 2, consts: [[1, "mensaje"], ["alt", "", 1, "img", 3, "src"], [1, "text"]], template: function BookChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.msg.user, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg.content);
    } }, styles: [".img[_ngcontent-%COMP%] {\n  height: 10%;\n  width: 10%;\n  border-radius: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid #112e51;\n  margin: 2%;\n}\n\n.mensaje[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ib29rLWNoYXQvYm9vay1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFOSjs7QUFVQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ib29rLWNoYXQvYm9vay1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGF6dWxPc2N1cm86ICMxMTJlNTE7XHJcbiRBenVsTWVkaW86ICMyMDU0OTM7XHJcbiRBenVsQ2xhcm86ICMwMDcxYmM7XHJcbiR0ZXh0OiAjMjEyMTIxO1xyXG5cclxuXHJcblxyXG4uaW1ne1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGF6dWxPc2N1cm87XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5tZW5zYWple1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-chat',
                templateUrl: './book-chat.component.html',
                styleUrls: ['./book-chat.component.scss']
            }]
    }], function () { return []; }, { msg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map