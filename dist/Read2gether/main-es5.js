(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+9od":
    /*!******************************************!*\
      !*** ./src/app/services/book.service.ts ***!
      \******************************************/

    /*! exports provided: BookService */

    /***/
    function od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookService", function () {
        return BookService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");

      var BookService = /*#__PURE__*/function () {
        function BookService(firebase) {
          _classCallCheck(this, BookService);

          this.firebase = firebase;
        }

        _createClass(BookService, [{
          key: "getBooks",
          value: function getBooks() {
            this.bookList = this.firebase.list('books');
            return this.bookList;
          }
        }, {
          key: "deleteBooks",
          value: function deleteBooks(tagkey, $key) {
            console.log("delete $key");
            console.log(tagkey);
            this.firebase.database.ref("register").child($key).child("MisLibros").child(tagkey).remove();
          }
        }]);

        return BookService;
      }();

      BookService.ɵfac = function BookService_Factory(t) {
        return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]));
      };

      BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BookService,
        factory: BookService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "+SNX":
    /*!**************************************************************!*\
      !*** ./src/app/pages/private/my-books/my-books.component.ts ***!
      \**************************************************************/

    /*! exports provided: MyBooksComponent */

    /***/
    function SNX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyBooksComponent", function () {
        return MyBooksComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../navigation-bar/navigation-bar.component */
      "L0k6");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../footer/footer.component */
      "oTol");

      function MyBooksComponent_6_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBooksComponent_6_ng_template_0_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.goToBook(i_r2);
          });

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
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var i_r2 = ctx_r7.index;
          var misLibros_r1 = ctx_r7.$implicit;

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
        }
      }

      function MyBooksComponent_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MyBooksComponent_6_ng_template_0_Template, 8, 6, "ng-template", 4);
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "mislibros" + i_r2);
        }
      }

      var MyBooksComponent = /*#__PURE__*/function () {
        function MyBooksComponent(router, _config, authService, firebase) {
          _classCallCheck(this, MyBooksComponent);

          this.router = router;
          this._config = _config;
          this.authService = authService;
          this.firebase = firebase;
          this.misLibrosList = [];
        }

        _createClass(MyBooksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            setTimeout(function () {
              _this.getMisLibros();
            }, 500);
          }
        }, {
          key: "goToBook",
          value: function goToBook(i) {
            // console.log(this.misLibrosList[i]);
            // console.log(this.misLibrosList[i].link);
            this.router.navigate(['/book', {
              Pag: this.misLibrosList[i].Pag,
              title: this.misLibrosList[i].Titulo,
              url: this.misLibrosList[i].alink,
              group: ""
            }]);
          }
        }, {
          key: "getMisLibros",
          value: function getMisLibros() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var Email;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("USER", firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser);
                      Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
                      console.log("EMAIL", Email);
                      _context.next = 5;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        var usersData = users.val();
                        var user;
                        Object.keys(usersData).forEach(function (key) {
                          if (usersData[key].email == Email) {
                            user = usersData[key];
                          }
                        });

                        if (user.MisLibros) {
                          Object.keys(user.MisLibros).forEach(function (key) {
                            _this2.misLibrosList.push(user.MisLibros[key]);
                          });
                        }
                      });

                    case 5:
                      console.log("MIS LIBROS", this.misLibrosList);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MyBooksComponent;
      }();

      MyBooksComponent.ɵfac = function MyBooksComponent_Factory(t) {
        return new (t || MyBooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]));
      };

      MyBooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MyBooksComponent,
        selectors: [["app-my-books"]],
        decls: 8,
        vars: 1,
        consts: [[1, "container"], [1, "librosContainer"], [1, "name", 2, "margin-top", "40px"], [4, "ngFor", "ngForOf"], ["ngbSlide", "", 3, "id"], [1, "picsum-img-wrapper", 3, "click"], ["alt", "Random first slide", 1, "portadaImg", 3, "id", "src"], [1, "carousel-caption", 2, "z-index", "0"], ["align", "center", 3, "id"], ["align", "center", 2, "margin-bottom", "10px", 3, "id"]],
        template: function MyBooksComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.misLibrosList);
          }
        },
        directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavigationBarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]],
        styles: [".name[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-align: center;\n  margin-top: 10px;\n  color: #205493;\n  align-self: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 90%;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 80px;\n}\n\n.portadaImg[_ngcontent-%COMP%] {\n  width: 300px;\n  \n  height: 470px;\n  \n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.tagImg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  right: 0px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9teS1ib29rcy9teS1ib29rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQWMsdUJBQUE7RUFDZCxhQUFBO0VBQWUsd0JBQUE7RUFDZixvQkFBQTtLQUFBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUdBLFVBQUE7RUFDQSxRQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcml2YXRlL215LWJvb2tzL215LWJvb2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjb2xvcjogIzIwNTQ5MztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5wb3J0YWRhSW1nIHtcclxuICB3aWR0aDogMzAwcHg7IC8qIHdpZHRoIG9mIGNvbnRhaW5lciAqL1xyXG4gIGhlaWdodDogNDcwcHg7IC8qIGhlaWdodCBvZiBjb250YWluZXIgKi9cclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnRhZ0ltZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB6LWluZGV4OiA1XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0b3A6IDVweDtcclxuICAvLyBsZWZ0OiAtNTBweDtcclxuICAvLyB0b3A6IDgwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyBooksComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-my-books',
            templateUrl: './my-books.component.html',
            styleUrls: ['./my-books.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\maria\Desktop\pdg\Proyecto\pdg\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!************************!*\
      !*** canvas (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    3:
    /*!**********************!*\
      !*** zlib (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    4:
    /*!**********************!*\
      !*** http (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    5:
    /*!***********************!*\
      !*** https (ignored) ***!
      \***********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "5VxN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/public/tags/tags.component.ts ***!
      \*****************************************************/

    /*! exports provided: TagsComponent */

    /***/
    function VxN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsComponent", function () {
        return TagsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tag.service */
      "lBcp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _private_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../private/navigation-bar/navigation-bar.component */
      "L0k6");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _private_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../private/footer/footer.component */
      "oTol");
      /* harmony import */


      var _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../pipes/filter-tags.pipe */
      "k51J");

      function TagsComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagsComponent_div_5_Template_img_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.sendTags("categoria-" + i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagsComponent_div_5_Template_h1_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.sendTags("categoria-" + i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tags_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "key" + i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "tags" + i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "categoria" + i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tags_r1.Categoria);
        }
      }

      var TagsComponent = /*#__PURE__*/function () {
        function TagsComponent(tagService, router, firebase, toastr) {
          _classCallCheck(this, TagsComponent);

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

        _createClass(TagsComponent, [{
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['/home']);
          }
        }, {
          key: "goToProfile",
          value: function goToProfile() {
            this.router.navigate(['/profile']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            var $this = this;
            this.UserAcount();
            console.log(this.tagService.getTags());
            this.tagService.getTags().snapshotChanges().subscribe(function (item) {
              _this3.tagsList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;

                _this3.tagsList.push(x);
              });
              _this3.tagsList = Object.keys(_this3.tagsList[0]).map(function (key) {
                return [_this3.tagsList[0][key]];
              });

              for (var i = 0; i < _this3.tagsList.length; i++) {
                _this3.tagsListNew.push({
                  Categoria: _this3.tagsList[i][0]
                });
              }

              for (var _i = 0; _i < _this3.tagsList.length; _i++) {
                _this3.validate.push(_this3.tagsList[_i][0]);
              }

              console.log(_this3.tagsList);
              setTimeout(function () {
                $this.validateTags();
              }, 500);
            });
          }
        }, {
          key: "UserAcount",
          value: function UserAcount() {
            // var user = this.firebaseAuth.auth.currentUser;
            var $this = this;
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
              if (user) {
                // User is signed in.
                if (user != null) {
                  user.providerData.forEach(function (profile) {// console.log("Sign-in provider: " + profile.providerId);
                    // console.log("  Provider-specific UID: " + profile.uid);
                    // console.log("  Name: " + profile.displayName);
                    // console.log("  Email: " + profile.email);
                    // console.log("  Phone Number: " + profile.photoURL);
                  });
                } // console.log(user);

              } else {// No user is signed in.
                }
            });
          } //-----------------------------------------------------Start Send tags------------------------------------------

        }, {
          key: "sendTags",
          value: function sendTags(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var index, query, query2, query3, tag, container, keytag, Tags, Email, _i2, _query, image;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      index = i.split("-");
                      query = "#categoria" + index[1];
                      query2 = ".tagscont";
                      query3 = "#key" + index[1];
                      tag = document.querySelector(query);
                      container = document.querySelector(query2);
                      keytag = document.querySelector(query3);
                      Tags = tag.textContent;
                      this.name = Tags;

                      if (!(Tags != '')) {
                        _context2.next = 16;
                        break;
                      }

                      Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
                      _context2.next = 13;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          // console.log("entre nivel1");
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            _this4.Key = childKey;
                            user.forEach(function (info) {
                              info.forEach(function (MisTags) {
                                MisTags.forEach(function (Tags) {
                                  var TagsChildKey = Tags.key;
                                  var TagsChildData = Tags.val();

                                  if (TagsChildKey == "Tag") {
                                    if (TagsChildData == _this4.name) {
                                      _this4.tags.push(TagsChildData);
                                    }
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 13:
                      for (_i2 = 0; _i2 < this.tags.length; _i2++) {
                        if (this.tags[_i2] == Tags) {
                          this.contador++;
                        }
                      }

                      if (this.contador == 0) {
                        this.confirm = true;
                      } else {
                        this.toastr.error('El tag ya se encuentra en tu lista', 'Fallido');
                      }

                      if (this.confirm == true) {
                        if (keytag.value == null || keytag.value == "") {
                          this.firebase.database.ref("register").child(this.Key).child("Tags").push({
                            Tag: Tags
                          });
                          this.toastr.success('Tag ' + Tags + ' agregado', 'Exitosamente');
                          _query = "#tags" + index[1];
                          image = document.querySelector(_query);
                          image.src = "../../../../assets/img/checkIcon.svg";
                        } // else{
                        //   this.productService.updateProduct(productForm.value);
                        // }
                        // container.style.display = 'none';

                      }

                    case 16:
                      this.confirm = false;
                      this.contador = 0;
                      this.tags = [];

                    case 19:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } //-----------------------------------------------------END Send tags------------------------------------------

        }, {
          key: "validateTags",
          value: function validateTags() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var Email, arr, i, j, query2, image;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
                      _context3.next = 3;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          // console.log("entre nivel1");
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            _this5.Key = childKey;
                            user.forEach(function (info) {
                              info.forEach(function (MisTags) {
                                MisTags.forEach(function (Tags) {
                                  var TagsChildKey = Tags.key;
                                  var TagsChildData = Tags.val();

                                  if (TagsChildKey == "Tag") {
                                    _this5.tagsValidate.push(TagsChildData);
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 3:
                      arr = [];

                      for (i = 0; i < this.validate.length; i++) {
                        for (j = 0; j < this.tagsValidate.length; j++) {
                          if (this.validate[i] == this.tagsValidate[j]) {
                            query2 = "#tags" + i;
                            image = document.querySelector(query2);
                            console.log("image");
                            console.log(image);
                            image.src = "../../../../assets/img/checkIcon.svg";
                          }
                        }
                      }

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return TagsComponent;
      }();

      TagsComponent.ɵfac = function TagsComponent_Factory(t) {
        return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
      };

      TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TagsComponent,
        selectors: [["app-tags"]],
        decls: 10,
        vars: 5,
        consts: [["type", "text", "name", "searchBoxTag", "placeholder", "Buscar ...", 3, "ngModel", "ngModelChange"], [1, "container"], [2, "color", "#205493", "font-weight", "bold", "font-size", "large", "font-family", "Helvetica", "margin-bottom", "10px"], [4, "ngFor", "ngForOf"], [1, "button", "is-info", 2, "width", "50%", 3, "click"], ["type", "hidden", 3, "id"], [1, "tagscont", "form-row"], ["src", "../../../../assets/img/addImg.svg", "alt", "tag", 1, "tagImg", 3, "id", "click"], ["align", "center", 2, "font-size", "medium", "line-height", "42px", "margin-left", "10px", 3, "id", "click"]],
        template: function TagsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TagsComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.searchBoxTag = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Agrega Tags de tus Intereses");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TagsComponent_div_5_Template, 6, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "filterTags");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagsComponent_Template_button_click_7_listener() {
              return ctx.goToProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Continuar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchBoxTag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 2, ctx.tagsListNew, ctx.searchBoxTag));
          }
        },
        directives: [_private_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavigationBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_9__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _private_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]],
        pipes: [_pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterTagsPipe"]],
        styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  color: #212121;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  padding-bottom: 80px;\n  margin-left: 15px;\n}\n\n.container[_ngcontent-%COMP%]   .tagscont[_ngcontent-%COMP%]   .tagImg[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 8%;\n  height: 8%;\n  margin-left: 5%;\n  margin-top: 5px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL3RhZ3MvdGFncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBSUE7RUFFSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdWJsaWMvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge1xyXG4gICAgcGFkZGluZzogMDsgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAvLyBmb250LXNpemU6c21hbGxlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lcnsgIFxyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgIFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAudGFnc2NvbnR7XHJcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweFxyXG4gICAgICAgIC50YWdJbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-tags',
            templateUrl: './tags.component.html',
            styleUrls: ['./tags.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    6:
    /*!*********************!*\
      !*** url (ignored) ***!
      \*********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "7SGL":
    /*!****************************************************!*\
      !*** ./src/app/shared/guards/custom-validators.ts ***!
      \****************************************************/

    /*! exports provided: CustomValidators */

    /***/
    function SGL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
        return CustomValidators;
      });

      var CustomValidators = /*#__PURE__*/function () {
        function CustomValidators() {
          _classCallCheck(this, CustomValidators);
        }

        _createClass(CustomValidators, null, [{
          key: "patternValidator",
          value: function patternValidator(regex, error) {
            return function (control) {
              if (!control.value) {
                // if control is empty return no error
                return null;
              } // test the value of the control against the regexp supplied


              var valid = regex.test(control.value); // if true, return no error (no error), else return error passed in the second parameter

              return valid ? null : error;
            };
          }
        }, {
          key: "passwordMatchValidator",
          value: function passwordMatchValidator(control) {
            var password = control.get('password').value; // get password from our password form control

            var confirmPassword = control.get('confirmPassword').value; // get password from our confirmPassword form control
            // compare is the password math

            if (password !== confirmPassword) {
              // if they don't match, set an error in our confirmPassword form control
              control.get('confirmPassword').setErrors({
                NoPassswordMatch: true
              });
            }
          }
        }]);

        return CustomValidators;
      }();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "HTFn"); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "BhhM":
    /*!**************************************!*\
      !*** ./src/app/pipes/filter.pipe.ts ***!
      \**************************************/

    /*! exports provided: FilterPipe */

    /***/
    function BhhM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
        return FilterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilterPipe = /*#__PURE__*/function () {
        function FilterPipe() {
          _classCallCheck(this, FilterPipe);
        }

        _createClass(FilterPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (args === '') {
              return value;
            }

            var resultSearchBox = [];

            var _iterator = _createForOfIteratorHelper(value),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var post = _step.value;

                if (post.Title.toLowerCase().indexOf(args.toLowerCase()) > -1 || post.Autor.toLowerCase().indexOf(args.toLowerCase()) > -1) {
                  resultSearchBox.push(post);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return resultSearchBox;
          }
        }]);

        return FilterPipe;
      }();

      FilterPipe.ɵfac = function FilterPipe_Factory(t) {
        return new (t || FilterPipe)();
      };

      FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: FilterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "L0k6":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/private/navigation-bar/navigation-bar.component.ts ***!
      \**************************************************************************/

    /*! exports provided: NavigationBarComponent */

    /***/
    function L0k6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function () {
        return NavigationBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NavigationBarComponent = /*#__PURE__*/function () {
        function NavigationBarComponent(router, authService) {
          _classCallCheck(this, NavigationBarComponent);

          this.router = router;
          this.authService = authService;
          this.isCollapsed = true;
        }

        _createClass(NavigationBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doLogout",
          value: function doLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.authService.logout();

                    case 2:
                      this.router.navigate(['/']);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // goToProfile() {
          //   this.router.navigate(['/profile']);
          // }

        }, {
          key: "goToProfile",
          value: function goToProfile() {
            this.router.navigate(['/profile']);
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['/home']);
          }
        }, {
          key: "goToAutors",
          value: function goToAutors() {
            // this.router.navigate(['/home']);  
            console.log("aquí van los autores");
          }
        }, {
          key: "goToGroups",
          value: function goToGroups() {
            this.router.navigate(['/groups']);
          }
        }, {
          key: "goToExternalProfiles",
          value: function goToExternalProfiles() {
            this.router.navigate(['/externalProfiles']);
          }
        }]);

        return NavigationBarComponent;
      }();

      NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) {
        return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NavigationBarComponent,
        selectors: [["app-navigation-bar"]],
        decls: 28,
        vars: 0,
        consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], ["id", "logo", "href", "#", 1, "navbar-brand"], ["src", "../../../../assets/img/Logo - Blanco.svg", "width", "30", "height", "30", "alt", ""], ["id", "toggler", "type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", "navbar-light"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 2, "margin-bottom", "10px"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["id", "item", 3, "click"], ["src", "../../../../assets/img/home.svg", "width", "30", "height", "30", "alt", "", 1, "logoItem"], ["src", "../../../../assets/img/open-book-white.svg", "width", "30", "height", "30", "alt", "", 1, "logoItem"], ["src", "../../../../assets/img/group.svg", "width", "30", "height", "30", "alt", "", 1, "logoItem"], ["src", "../../../../assets/img/user.svg", "width", "30", "height", "30", "alt", "", 1, "logoItem"], ["src", "../../../../assets/img/logout.svg", "width", "30", "height", "30", "alt", "", 1, "logoItem"]],
        template: function NavigationBarComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_9_listener() {
              return ctx.goToHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Inicio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_13_listener() {
              return ctx.goToHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Libros ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_17_listener() {
              return ctx.goToExternalProfiles();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Amigos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_21_listener() {
              return ctx.goToProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Perfil ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_25_listener() {
              return ctx.doLogout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Cerrar Sesi\xF3n ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"]],
        styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n#navbar[_ngcontent-%COMP%] {\n  background-color: #205493;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n#navbar[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\n  width: 8%;\n  height: 8%;\n  margin-left: 2%;\n  align-self: center;\n  padding: 0.6%;\n  margin-top: 8px;\n  color: white;\n  font-family: Helvetica;\n  font-size: large;\n}\n\n#navbar[_ngcontent-%COMP%]   #toggler[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n#navbar[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n#navbar[_ngcontent-%COMP%]   #item[_ngcontent-%COMP%] {\n  color: white;\n}\n\n#navbar[_ngcontent-%COMP%]   .logoItem[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFMSjs7QUFTQTtFQUNJLHlCQUFBO0VBRUEsZ0NBQUE7RUFDQSwrQkFBQTtBQVBKOztBQVNJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBUlI7O0FBV0k7RUFDSSxrQkFBQTtBQVRSOztBQVlJO0VBQ0ksaUJBQUE7QUFWUjs7QUFhSTtFQUNJLFlBQUE7QUFYUjs7QUFjSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVpSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbG9yc1xyXG4vLyAjMDA3MWJjXHJcbi8vICMyMDU0OTNcclxuLy8gIzExMmU1MVxyXG4vLyAjMjEyMTIxXHJcblxyXG4qIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuI25hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1NDkzO1xyXG4gICAgLy8gaGVpZ2h0OiAxMHZoO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICNsb2dvIHtcclxuICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4JTtcclxuICAgICAgICAvLyBtYXJnaW46IDIlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC42JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuXHJcbiAgICAjdG9nZ2xlcntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI25hdmJhclN1cHBvcnRlZENvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2l0ZW17XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIH1cclxuICAgIC5sb2dvSXRlbXtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigationBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-navigation-bar',
            templateUrl: './navigation-bar.component.html',
            styleUrls: ['./navigation-bar.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MyXD":
    /*!*************************************************************!*\
      !*** ./src/app/pages/public/register/register.component.ts ***!
      \*************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function MyXD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_shared_guards_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/guards/custom-validators */
      "7SGL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RegisterComponent_label_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password do not match ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(router, authService, userService, formBuilder, toastr) {
          _classCallCheck(this, RegisterComponent);

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
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
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

        _createClass(RegisterComponent, [{
          key: "changePreferredCountries",
          value: function changePreferredCountries() {
            this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].India, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].Canada];
          }
        }, {
          key: "createSignupForm",
          value: function createSignupForm() {
            return this.formBuilder.group({
              telefono: "",
              name: "",
              lname: "",
              email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
              password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, // check whether the entered password has a number
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
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
              confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
            }, {
              // check whether our password and confirm password match
              validator: src_app_shared_guards_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].passwordMatchValidator
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.userService.getRegister().snapshotChanges().subscribe(function (item) {
              _this6.registerList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;

                _this6.registerList.push(x);
              });
            });
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.ngForm = this.formBuilder.group({
              email: "",
              telefono: "",
              name: "",
              lname: "",
              password: "",
              confirmPassword: ""
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            var email = this.ngForm.controls.email.value;
            var telefono = this.ngForm.controls.telefono.value;
            var password = this.ngForm.controls.password.value;
            var confirmPassword = this.ngForm.controls.confirmPassword.value;
            var emailExist = this.registerList.find(function (user) {
              return user.email == email;
            });
            var phoneExist = this.registerList.find(function (user) {
              return user.telefono.e164Number == telefono.e164Number;
            });

            if (emailExist) {
              console.log("Ya existe este email");
              this.toastr.error('Ese correo ya esta registrado', 'Intenta otro correo', {
                positionClass: 'toast-top-center'
              });
            } else if (phoneExist) {
              this.toastr.error('El número ya esta registrado', 'Intenta otro número', {
                positionClass: 'toast-top-center'
              });
              console.log("Ya existe este número");
            } else {
              if (confirmPassword == password) {
                firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(email, password).then(function () {
                  _this7.userService.insertRegister(_this7.ngForm.value);
                })["catch"](function (error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(errorCode);
                  console.log(errorMessage);
                });
                this.email = email;
                firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithEmailAndPassword(email, password).then(function () {
                  _this7.router.navigate(['/tags']);

                  _this7.toastr.success('Cuenta creada', 'Exitosamente', {
                    positionClass: 'toast-top-center'
                  });
                });
                console.log("this.email");
                console.log(this.email);
                this.router.navigate(["/tags"]);
              }
            }
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.authService.logout();

                    case 2:
                      this.router.navigate(["/"]);

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.router.navigate(["/login"]);
          }
        }, {
          key: "goToTags",
          value: function goToTags() {
            this.router.navigate(["/tags"]);
          }
        }, {
          key: "addcontact",
          value: function addcontact(count) {
            var query = "#app .addcontact";
            var addcontact = document.querySelector(query);

            if (count == 0) {
              count = 1;
              addcontact.style.left = 0;
            } else {
              count = 0;
              addcontact.style.left = "-100vh";
            }
          }
        }, {
          key: "areaEstados",
          value: function areaEstados() {
            var query = "#app .areaEstados";
            var areaEstados = document.querySelector(query);

            if (this.countEstad == 0) {
              this.countEstad = 1;
              areaEstados.style.left = 0;
            } else {
              this.countEstad = 0;
              areaEstados.style.left = "-100vh";
            }
          }
        }, {
          key: "openaddContact",
          value: function openaddContact() {
            if (this.count == 0) {
              this.count = 1;
              this.addcontact(this.count);
            } else {
              this.count = 0;
              this.addcontact(this.count);
            }
          }
        }, {
          key: "SettingsToggle",
          value: function SettingsToggle() {
            var query = "#app .DesplegableLeftMore";
            var DesplegableLeftMore = document.querySelector(query);

            if (this.countSett == 0) {
              this.countSett = 1;
              DesplegableLeftMore.style.opacity = 1;
              DesplegableLeftMore.style.transform = "scale(1)";
            } else {
              this.countSett = 0;
              DesplegableLeftMore.style.opacity = 0;
              DesplegableLeftMore.style.transform = "scale(0)";
            }
          }
        }, {
          key: "createGroup",
          value: function createGroup() {
            var query = "#app .newGroupContainer";
            var newGroupContainer = document.querySelector(query);

            if (this.countGroup == 0) {
              this.countGroup = 1;
              newGroupContainer.style.left = 0;
            } else {
              this.countGroup = 0;
              newGroupContainer.style.left = "-100vh";
            }
          }
        }, {
          key: "createImageGroup",
          value: function createImageGroup() {
            var query = "#app .updateImageGroup";
            var updateImageGroup = document.querySelector(query);

            if (this.countImageGroup == 0) {
              this.countImageGroup = 1;
              updateImageGroup.style.left = 0;
            } else {
              this.countImageGroup = 0;
              updateImageGroup.style.left = "-100vh";
            }
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 67,
        vars: 31,
        consts: [["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], [1, "appContainer"], [1, "logoContainer"], [1, "text"], [1, "logo"], ["src", "../../../../assets/img/Logo - Azul.svg", "alt", ""], [1, "box"], [1, "media"], [1, "media-content"], [1, "content"], [3, "formGroup"], ["for", "name", 3, "ngClass"], [1, "field"], [1, "control", "has-icons-left"], ["formControlName", "name", "type", "text", "placeholder", "Name", "required", "", 1, "input", 3, "ngClass"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-lock"], ["for", "lname", 3, "ngClass"], ["type", "text", "formControlName", "lname", "placeholder", "Last Name", "required", "", 1, "input", 3, "ngClass"], ["for", "telefono", 3, "ngClass"], ["formControlName", "telefono", 3, "cssClass", "enableAutoCountrySelect", "enablePlaceholder", "searchCountryFlag", "searchCountryField", "selectFirstCountry", "selectedCountryISO", "maxLength", "tooltipField", "phoneValidation", "separateDialCode", "ngClass"], ["for", "email", 3, "ngClass"], [1, "control", "has-icons-left", "has-icons-right"], ["type", "email", "formControlName", "email", "placeholder", "Email Address", "required", "", 1, "input", 3, "ngClass"], [1, "fas", "fa-envelope"], [1, "icon", "is-small", "is-right"], [1, "fas", "fa-check"], ["for", "password", 3, "ngClass"], ["type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "input", 3, "ngClass"], [1, "col", 3, "ngClass"], [1, "material-icons"], ["for", "confirmPassword", 2, "padding-top", "5px", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm Password", "required", "", 1, "input", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 3, "disabled", "click"], [1, "text-danger"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Contrase\xF1a");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Confirmar contrase\xF1a");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_65_listener() {
              return ctx.onSubmit();
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["NativeElementInjectorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["NgxIntlTelInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
        styles: ["@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n.material-icons[_ngcontent-%COMP%] {\n  display: inline-flex;\n  vertical-align: middle;\n}\n.toast-success[_ngcontent-%COMP%] {\n  background-color: #51A351 !important;\n}\n.is-invalid[_ngcontent-%COMP%] {\n  border-left: solid 6px red;\n}\n.success[_ngcontent-%COMP%] {\n  border-left: solid 6px green !important;\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.appContainer[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n.appContainer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  color: #205493;\n  font-size: large;\n  font-family: Helvetica;\n}\n.appContainer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n.appContainer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.appContainer[_ngcontent-%COMP%]   .logoContainer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\n.appContainer[_ngcontent-%COMP%]   .imputContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 85%;\n  padding: 15px;\n  border-radius: 10px 10px 10px 10px;\n  border: 3px solid #205493;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .iti--allow-dropdown[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background: #0071bc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksNkJBQUE7RUFDQSw0Q0FBQTtBQVJKO0FBV0E7RUFDSSw0QkFBQTtFQUNBLDJDQUFBO0FBVEo7QUFZQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7QUFWSjtBQWFDO0VBQ0csb0NBQUE7QUFWSjtBQWFDO0VBQ0csMEJBQUE7QUFWSjtBQWFFO0VBQ0UsdUNBQUE7QUFWSjtBQWFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQVZKO0FBYUE7RUFDSSxZQUFBO0FBVko7QUFnQkk7RUFDSSxlQUFBO0VBQ0EsY0E5Q0k7RUErQ0osZ0JBQUE7RUFDQSxzQkFBQTtBQWRSO0FBaUJJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQWZSO0FBZ0JRO0VBQ0ksYUFBQTtBQWRaO0FBa0JJO0VBRUksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWpCUjtBQW9CSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWxCUjtBQXFCSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUdBLGFBQUE7RUFFQSxrQ0FBQTtFQUNBLHlCQUFBO0FBdEJSO0FBNEJvQjtFQUNJLGtCQUFBO0FBMUJ4QjtBQTJCd0I7RUFDSSxrQkFBQTtBQXpCNUI7QUEyQndCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXpCNUI7QUEwQjRCO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkF4R3BCO0FBZ0ZaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRib2R5Rm9udDogc2ZQcm9UZXh0UmVndWxhcjtcclxuJHRpdGxlRm9udDogc2ZQcm9UZXh0TWVkaXVtO1xyXG5cclxuJGF6dWxPc2N1cm86ICMxMTJlNTE7XHJcbiRBenVsTWVkaW86ICMyMDU0OTM7XHJcbiRBenVsQ2xhcm86ICMwMDcxYmM7XHJcbiR0ZXh0OiAjMjEyMTIxO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2ZQcm9UZXh0UmVndWxhcjtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvU0ZQcm9UZXh0UmVndWxhci50dGYpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzZlByb1RleHRNZWRpdW07XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1NGUHJvVGV4dE1lZGl1bS50dGYpO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gfVxyXG5cclxuIC50b2FzdC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MUEzNTEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gLmlzLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDZweCByZWQ7XHJcbiAgfVxyXG5cclxuICAuc3VjY2VzcyB7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgNnB4IGdyZWVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmFwcENvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcblxyXG4gICAgXHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICRBenVsTWVkaW87XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dve1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ29Db250YWluZXJ7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbXB1dENvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3gge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMjA1NDkzO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAubWVkaWEge1xyXG4gICAgICAgICAgICAubWVkaWEtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaXRpLS1hbGxvdy1kcm9wZG93biBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pcy1pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkQXp1bENsYXJvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "app-register",
            templateUrl: "./register.component.html",
            styleUrls: ["./register.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QBD8":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/private/external-profiles/external-profiles.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ExternalProfilesComponent */

    /***/
    function QBD8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExternalProfilesComponent", function () {
        return ExternalProfilesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/pipes/filter.pipe */
      "BhhM");
      /* harmony import */


      var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../navigation-bar/navigation-bar.component */
      "L0k6");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../footer/footer.component */
      "oTol");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../pipes/filter-external-profiles.pipe */
      "v5hE");

      function ExternalProfilesComponent_div_3_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExternalProfilesComponent_div_3_div_3_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var user_r3 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r5.viewExternalProfile(user_r3.email);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExternalProfilesComponent_div_3_div_3_Template_h1_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var user_r3 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7.viewExternalProfile(user_r3.email);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExternalProfilesComponent_div_3_div_3_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var user_r3 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.viewExternalProfile(user_r3.email);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Ver Perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

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
        }
      }

      function ExternalProfilesComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Encuentra Amigos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExternalProfilesComponent_div_3_div_3_Template, 11, 9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "filterExternalProfiles");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 1, ctx_r0.registerList, ctx_r0.searchBoxExternal));
        }
      }

      function ExternalProfilesComponent_div_5_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var susTags_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "contTag" + i_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "mitag" + i_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](susTags_r11.Tags);
        }
      }

      function ExternalProfilesComponent_div_5_23_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var i_r14 = ctx_r16.index;
          var susLibros_r13 = ctx_r16.$implicit;

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
        }
      }

      function ExternalProfilesComponent_div_5_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ExternalProfilesComponent_div_5_23_ng_template_0_Template, 8, 6, "ng-template", 29);
        }

        if (rf & 2) {
          var i_r14 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "susLibros" + i_r14);
        }
      }

      function ExternalProfilesComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExternalProfilesComponent_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r17.gotoExternalProfile();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExternalProfilesComponent_div_5_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.addFriendInsidePerfil();
          });

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
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.Currentimg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.mensaje);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.susTagsList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.susLibrosList);
        }
      }

      var ExternalProfilesComponent = /*#__PURE__*/function () {
        function ExternalProfilesComponent(authService, firebaseAuth, userService, router, firebase, toastr, filter, route) {
          _classCallCheck(this, ExternalProfilesComponent);

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

        _createClass(ExternalProfilesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.UserAcount();
            this.userService.getRegister().snapshotChanges().subscribe(function (item) {
              _this8.registerList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;

                _this8.registerList.push(x);
              });
              var Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
              _this8.registerListNew = Object.values(_this8.registerList);

              for (var i = 0; i < _this8.registerList.length; i++) {
                _this8.registerListNew = Object.values(_this8.registerList[i]);

                for (var j = 0; j < _this8.registerListNew.length; j++) {
                  if (_this8.registerListNew[j] == Email) {
                    _this8.registerList.splice(i, 1);
                  }
                }
              }

              _this8.getImgUsers(_this8.registerList);
            });
            this.call = this.route.snapshot.paramMap.get("email");

            if (this.call) {
              this.viewExternalProfile(this.call);
            }
          }
        }, {
          key: "UserAcount",
          value: function UserAcount() {
            var $this = this;
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
              if (user) {
                if (user != null) {
                  user.providerData.forEach(function (profile) {// console.log("Sign-in provider: " + profile.providerId);
                    // console.log("  Provider-specific UID: " + profile.uid);
                    // console.log("  Name: " + profile.displayName);
                    // console.log("  Email: " + profile.email);
                    // $this.addBookToUser(profile.email,"");
                  });
                }
              } else {// No user is signed in.
              }
            });
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.authService.logout();

                    case 2:
                      this.router.navigate(['/']);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getImgUsers",
          value: function getImgUsers(arrList) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var Email, entries, entriesDescipcion;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
                      arrList.forEach(function (element, index) {
                        if ("Images" in element) {
                          entries = Object.keys(element.Images);
                          arrList[index].Images = element.Images[entries[entries.length - 1]].ImgUrl;
                        } else {
                          arrList[index].Images = "../../../../../../assets/img/NoImage.png";
                        }

                        if ("Descripcion" in element) {
                          entriesDescipcion = Object.values(element.Descripcion);
                          arrList[index].Descripcion = entriesDescipcion[entriesDescipcion.length - 1].Descripcion;
                        } else {
                          arrList[index].Descripcion = "Sin descripcion";
                        }
                      });

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }, {
          key: "addFriend",
          value: function addFriend(index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this9 = this;

              var Key, contador, confirm, Email, correoAmigo, correoAmigoText, nombreAmigo, nombreAmigoText, imagenAmigo, imagenAmigoSrc, i;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      contador = 0;
                      confirm = false;
                      Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
                      correoAmigo = document.querySelector("#correo" + index);
                      correoAmigoText = correoAmigo.textContent;
                      nombreAmigo = document.querySelector("#nombre" + index);
                      nombreAmigoText = nombreAmigo.textContent;
                      imagenAmigo = document.querySelector("#imagen" + index);
                      imagenAmigoSrc = imagenAmigo.src;

                      if (correoAmigoText != '') {
                        this.correoExternoUser = correoAmigoText;
                      }

                      _context8.next = 12;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            Key = childKey;
                            user.forEach(function (info) {
                              info.forEach(function (Amigos) {
                                Amigos.forEach(function (misAmigos) {
                                  var misAmigosChildKey = misAmigos.key;
                                  var misAmigosChildData = misAmigos.val();

                                  if (misAmigosChildKey == "Contacto") {
                                    _this9.arr.push(misAmigosChildData);
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 12:
                      if (this.arr == undefined) {
                        this.firebase.database.ref("register").child(Key).child("Amigos").push({
                          Contacto: correoAmigoText,
                          NombreAmigo: nombreAmigoText,
                          ImagenAmigo: imagenAmigoSrc
                        });
                        this.toastr.success('Amigo añadido a tu lista', 'Exitosamente');
                      } else {
                        for (i = 0; i < this.arr.length; i++) {
                          if (this.arr[i] == correoAmigoText) {
                            contador++;
                          }
                        }

                        if (contador == 0) {
                          confirm = true;
                        } else {
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

                    case 13:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "addFriendInsidePerfil",
          value: function addFriendInsidePerfil() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this10 = this;

              var Key, contador, confirm, Email, i;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      contador = 0;
                      confirm = false;
                      Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email; // Verificar si ya esta agregado

                      _context9.next = 5;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            Key = childKey;
                            user.forEach(function (info) {
                              info.forEach(function (Amigos) {
                                Amigos.forEach(function (misAmigos) {
                                  var misAmigosChildKey = misAmigos.key;
                                  var misAmigosChildData = misAmigos.val();

                                  if (misAmigosChildKey == "Contacto") {
                                    _this10.arr.push(misAmigosChildData);
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 5:
                      if (this.arr == undefined) {
                        this.firebase.database.ref("register").child(Key).child("Amigos").push({
                          Contacto: this.correoExt,
                          NombreAmigo: this.FulName,
                          ImagenAmigo: this.Currentimg
                        });
                        this.toastr.success('Amigo añadido a tu lista', 'Exitosamente');
                      } else {
                        for (i = 0; i < this.arr.length; i++) {
                          if (this.arr[i] == this.correoExt) {
                            contador++;
                          }
                        }

                        if (contador == 0) {
                          confirm = true;
                        } else {
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

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "gotoExternalProfile",
          value: function gotoExternalProfile() {
            this.viewProfile = false; // this.getImgUsers(this.registerList);
          }
        }, {
          key: "viewExternalProfile",
          value: function viewExternalProfile(correoExternoUser) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this11 = this;

              var $this, CurrentDescription, Autor, Imagen, Titulo, keyTAGS, Tags, Email, Key;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      // let correoName = correoExternoUser.split("-");
                      this.viewProfile = true;
                      $this = this;
                      this.correoExt = correoExternoUser;
                      Tags = {};
                      Email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
                      this.susLibrosList = [];
                      this.susTagsList = [];
                      this.Currentimg = "";
                      _context10.next = 10;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == correoExternoUser) {
                            Key = childKey;

                            if (childData.lname != '' && childData.name != '') {
                              _this11.UserName = childData.name;
                              _this11.UserLastName = childData.lname; // this.FulName = this.UserName.concat(" "+this.UserLastName);

                              _this11.FulName = _this11.UserName + " " + _this11.UserLastName;
                            }

                            user.forEach(function (info) {
                              info.forEach(function (Description) {
                                var pruebakey = Description.key;
                                keyTAGS = pruebakey;
                                Description.forEach(function (DescriptionText) {
                                  var DescriptionChildKey = DescriptionText.key;
                                  var DescriptionChildData = DescriptionText.val();

                                  if (DescriptionChildKey == "Descripcion") {
                                    CurrentDescription = DescriptionChildData;
                                  }

                                  if (DescriptionChildKey == "Autor") {
                                    Autor = DescriptionChildData;
                                  } else if (DescriptionChildKey == "Imagen") {
                                    Imagen = DescriptionChildData;
                                  } else if (DescriptionChildKey == "Titulo") {
                                    Titulo = DescriptionChildData;

                                    if (Autor != '' && Imagen != '' && Titulo != '') {
                                      _this11.susLibrosList.push({
                                        Autor: Autor,
                                        Imagen: Imagen,
                                        Titulo: Titulo
                                      });
                                    }
                                  }

                                  if (DescriptionChildKey == "ImgUrl") {
                                    $this.Currentimg = DescriptionChildData;
                                  }

                                  if (DescriptionChildKey == "Tag") {
                                    Tags = DescriptionChildData;

                                    if (Tags != '') {
                                      _this11.susTagsList.push({
                                        Tags: Tags
                                      });
                                    }
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 10:
                      _context10.next = 12;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            Key = childKey;
                            user.forEach(function (info) {
                              info.forEach(function (Amigos) {
                                Amigos.forEach(function (misAmigos) {
                                  var misAmigosChildKey = misAmigos.key;
                                  var misAmigosChildData = misAmigos.val();

                                  if (misAmigosChildKey == "Contacto") {
                                    if (misAmigosChildData == correoExternoUser) {
                                      _this11.mensaje = "Amigo";
                                    } else {
                                      _this11.mensaje = "Seguir";
                                    }
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 12:
                      setTimeout(function () {
                        if ($this.UserName != '') {
                          var _query2 = ".containerView .name"; // let nameInput = document.querySelector(query).innerHTML = $this.FulName;

                          var nameInput = document.querySelector(_query2);
                          nameInput.textContent = $this.FulName;
                        } else {
                          var _query3 = ".containerView .name";
                          document.querySelector(_query3).innerHTML = "Nombre no registrado";
                          $this.toastr.error('Error al buscar el nombre', 'Error');
                        }

                        if (!$this.Currentimg) {
                          $this.Currentimg = "../../../../../../assets/img/NoImage.png";
                        }

                        if (CurrentDescription != '') {
                          var _query4 = ".inputDescripcion";
                          var element = document.querySelector(_query4);
                          element.value = CurrentDescription;
                        }

                        var query = "#descripcionID";
                        var Descripcion = document.querySelector(query);
                        var DescripcionValue = Descripcion.value;

                        if (DescripcionValue == 'undefined') {
                          DescripcionValue = "Ingresa tu descripción";
                        }
                      }, 500);

                    case 13:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return ExternalProfilesComponent;
      }();

      ExternalProfilesComponent.ɵfac = function ExternalProfilesComponent_Factory(t) {
        return new (t || ExternalProfilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
      };

      ExternalProfilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ExternalProfilesComponent,
        selectors: [["app-external-profiles"]],
        decls: 7,
        vars: 3,
        consts: [["type", "text", "name", "searchBoxExternal", "placeholder", "Buscar ...", 3, "ngModel", "ngModelChange"], [1, "container"], ["class", "container", 4, "ngIf"], ["class", "containerView", 4, "ngIf"], ["id", "name"], ["class", "card", "style", "width: 18rem; margin-bottom: 15px;", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem", "margin-bottom", "15px"], ["alt", "Card image cap", "alt", "imagenes", 1, "userImg", 3, "id", "src", "click"], [1, "card-body"], ["align", "center", 2, "display", "none", 3, "id"], ["align", "center", 1, "card-title", 3, "id", "click"], ["align", "center", 1, "card-text", 2, "width", "100%", 3, "id"], [1, "button", "is-info", 2, "margin-right", "10px", 3, "click"], [1, "containerView"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", 3, "click"], [1, "perfilContainer"], [1, "photoContainer"], ["srcset", "", "alt", "", "id", "img", 1, "Photoimg", 3, "src"], [1, "ContainerDescription"], [1, "name"], ["disabled", "", "id", "descripcionID", "type", "text", 1, "inputDescripcion"], ["id", "boton", "type", "submit", 1, "button", "is-info", 2, "padding", "5px", 3, "click"], [1, "ContainerTags"], [1, "table"], [3, "id", 4, "ngFor", "ngForOf"], [1, "librosContainer"], [1, "name", 2, "margin-top", "40px"], [4, "ngFor", "ngForOf"], [3, "id"], ["ngbSlide", "", 3, "id"], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 1, "portadaImg", 3, "id", "src"], [1, "carousel-caption", 2, "z-index", "0"], ["align", "center", 3, "id"], ["align", "center", 2, "margin-bottom", "10px", 3, "id"]],
        template: function ExternalProfilesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExternalProfilesComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.searchBoxExternal = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExternalProfilesComponent_div_3_Template, 5, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExternalProfilesComponent_div_5_Template, 24, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchBoxExternal);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewProfile == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewProfile == true);
          }
        },
        directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavigationBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_12__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbSlide"]],
        pipes: [_pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterExternalProfilesPipe"]],
        styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.inputDescripcion[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  width: 100%;\n  height: 100px;\n  border-radius: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n  margin-top: 25px;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: -2px;\n  color: #205493;\n  font-size: x-large;\n}\n\n.container[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%] {\n  color: #205493;\n}\n\n.container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n}\n\n.container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background-color: #205493;\n  padding: 5px;\n  margin-bottom: 15px;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-align: center;\n  margin-top: 10px;\n  color: #205493;\n  align-self: center;\n}\n\n.perfilContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.Photoimg[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border-radius: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 3px solid #112e51;\n}\n\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 80px;\n}\n\n.ContainerDescription[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.inputDescripcion[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 80vw;\n  height: 100px;\n  border-radius: 20px;\n  padding: 10px;\n  text-overflow: ellipsis;\n  word-break: break-word;\n}\n\n.tagsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-top: 20px;\n  width: 80%;\n}\n\n.tagsContainer[_ngcontent-%COMP%]   #titleTag[_ngcontent-%COMP%] {\n  color: #0071bc;\n  font-size: large;\n}\n\n.tagImg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  right: 0px;\n  top: 5px;\n}\n\n.Editimg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.portadaImg[_ngcontent-%COMP%] {\n  width: 300px;\n  \n  height: 500px;\n  \n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n#friendsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row nowrap;\n  vertical-align: center;\n  width: 80%;\n  margin-top: -15px;\n}\n\n#friendsContainer[_ngcontent-%COMP%]   .friendsName[_ngcontent-%COMP%] {\n  color: #0071bc;\n  font-size: large;\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n#friendsContainer[_ngcontent-%COMP%]   .friendImg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 100%;\n  border: solid 1px #212121;\n}\n\n#friendsContainer[_ngcontent-%COMP%]   .tagImg2[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9leHRlcm5hbC1wcm9maWxlcy9leHRlcm5hbC1wcm9maWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBUUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQU5KOztBQVFJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0F4Qkk7RUF5Qkosa0JBQUE7QUFOUjs7QUFVSTtFQUNJLGNBOUJJO0FBc0JaOztBQVdJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVFI7O0FBWUk7RUFDSSx5QkExQ0k7RUEyQ0osWUFBQTtFQUNBLG1CQUFBO0FBVlI7O0FBY0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQXBEUTtFQXFEUixrQkFBQTtBQVhKOztBQWNBO0VBRUksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVpKOztBQWdCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EseUJBQUE7QUFiSjs7QUFpQkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFvQkk7RUFFSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBbEJSOztBQXNCSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUtBLHVCQUFBO0VBRUEsc0JBQUE7QUF6QlI7O0FBNEJJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtBQTFCUjs7QUE0QlE7RUFDSSxjQXhIQTtFQXlIQSxnQkFBQTtBQTFCWjs7QUE4Qkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUdBLFVBQUE7RUFDQSxRQUFBO0FBN0JSOztBQWlDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBOUJSOztBQWlDSTtFQUNJLFlBQUE7RUFBYyx1QkFBQTtFQUNkLGFBQUE7RUFBZSx3QkFBQTtFQUNmLG9CQUFBO0tBQUEsaUJBQUE7QUE1QlI7O0FBK0JJO0VBRUksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUE5QlI7O0FBZ0NRO0VBQ0ksY0EvSkE7RUFnS0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUVBLGlCQUFBO0FBaENaOztBQXFDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQW5DWjs7QUF1Q1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBckNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9leHRlcm5hbC1wcm9maWxlcy9leHRlcm5hbC1wcm9maWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiRhenVsT3NjdXJvOiAjMTEyZTUxO1xyXG4kQXp1bE1lZGlvOiAjMjA1NDkzO1xyXG4kQXp1bENsYXJvOiAjMDA3MWJjO1xyXG4kdGV4dDogIzIxMjEyMTtcclxuXHJcbi5pbnB1dERlc2NyaXBjaW9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXJ7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcblxyXG4gICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICAgICAgY29sb3I6ICRBenVsTWVkaW87XHJcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICNuYW1le1xyXG4gICAgICAgIGNvbG9yOiAkQXp1bE1lZGlvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEF6dWxNZWRpbztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLm5hbWV7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICRBenVsTWVkaW87XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wZXJmaWxDb250YWluZXJ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5QaG90b2ltZ3tcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3NXB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkYXp1bE9zY3VybztcclxuXHJcbn1cclxuXHJcbi5hcHB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuXHJcblxyXG59XHJcblxyXG4gICAgLkNvbnRhaW5lckRlc2NyaXB0aW9ue1xyXG4gICAgICAgIC8vIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dERlc2NyaXBjaW9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgLy8gcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgICAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAvLyB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IFxyXG4gICAgfVxyXG5cclxuICAgIC50YWdzQ29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ29sZGVucm9kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAgICAgI3RpdGxlVGFne1xyXG4gICAgICAgICAgICBjb2xvcjogJEF6dWxDbGFybztcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAudGFnSW1ne1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gei1pbmRleDogNVxyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgLy8gbGVmdDogLTUwcHg7XHJcbiAgICAgICAgLy8gdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLkVkaXRpbWd7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3J0YWRhSW1ne1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDsgLyogd2lkdGggb2YgY29udGFpbmVyICovXHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDsgLyogaGVpZ2h0IG9mIGNvbnRhaW5lciAqL1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgICNmcmllbmRzQ29udGFpbmVye1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZmxvdzogIHJvdyBub3dyYXA7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuXHJcbiAgICAgICAgLmZyaWVuZHNOYW1le1xyXG4gICAgICAgICAgICBjb2xvcjogJEF6dWxDbGFybztcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5mcmllbmRJbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICR0ZXh0O1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFnSW1nMntcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgLy8gei1pbmRleDogNVxyXG4gICAgICAgICAgICAvLyBsZWZ0OiAtNTBweDtcclxuICAgICAgICAgICAgLy8gdG9wOiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExternalProfilesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-external-profiles',
            templateUrl: './external-profiles.component.html',
            styleUrls: ['./external-profiles.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
          }, {
            type: src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QuX9":
    /*!*******************************************************!*\
      !*** ./src/app/pages/public/login/login.component.ts ***!
      \*******************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QuX9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, toastr, userService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.toastr = toastr;
          this.userService = userService;
          this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            signupEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            signupPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
          });
          this.register = [];
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.userService.getRegister().snapshotChanges().subscribe(function (item) {
              _this12.registerList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;

                _this12.registerList.push(x);
              });
              console.log(_this12.registerList);
            });
          }
        }, {
          key: "goToRegister",
          value: function goToRegister() {
            this.router.navigate(['/register']);
          }
        }, {
          key: "doLogin",
          value: function doLogin() {
            var _this13 = this;

            var email = this.signupForm.controls.signupEmail.value;
            var password = this.signupForm.controls.signupPassword.value;
            var emailRegexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

            if (email.match(emailRegexp)) {
              var _email = this.signupForm.controls.signupEmail.value;
              var _password = this.signupForm.controls.signupPassword.value;

              var _emailRegexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

              var userExist;

              if (_email.match(_emailRegexp)) {
                // Es correo
                console.log(this.registerList);
                console.log("Es correo");
                userExist = this.registerList.find(function (user) {
                  return user.email == _email;
                });
                console.log(userExist);
              } else {
                console.log("Es teléfono"); // Es teléfono

                userExist = this.registerList.find(function (user) {
                  return user.telefono.e164Number == _email && user;
                });
                _email = userExist && userExist.email || undefined;
                console.log(_email);
              }

              if (userExist) {
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(_email, _password).then(function () {
                  _this13.router.navigate(['/home']);

                  _this13.toastr.success('Login successful', 'Login acount', {
                    positionClass: 'toast-top-center'
                  });
                })["catch"](function (error) {
                  // Handle Errors here.
                  _this13.toastr.error('The password are incorrect', 'Error login', {
                    positionClass: 'toast-top-center'
                  });

                  var errorCode = error.code;
                  var errorMessage = error.message; // ...

                  console.log("Error [".concat(errorCode, "]: ").concat(errorMessage));
                });
              } else {
                console.log("Ya existe este email en tus contactos");
                this.toastr.error('The email or the password are incorrect', 'Error login', {
                  positionClass: 'toast-top-center'
                });
              } // this.userService.findById(email).once('value').then(data => {
              //   if (data.val()) {
              //     console.log(data.val());
              //     this.login(email, password);
              //   } else {
              //     this.usuarioNoRegistrado();
              //   }
              // }).catch(() => {
              //   this.usuarioNoRegistrado();
              // });

            } else {
              this.userService.findByPhone(email).once('value').then(function (data) {
                if (data.exists()) {
                  data.forEach(function (element) {
                    var user = element.exportVal();
                    console.log(user.email);
                    email = user.email;
                  });

                  _this13.login(email, password);
                } else {
                  _this13.usuarioNoRegistrado();
                }
              })["catch"](function () {
                _this13.usuarioNoRegistrado();
              });
            }
          }
        }, {
          key: "usuarioNoRegistrado",
          value: function usuarioNoRegistrado() {
            this.toastr.success('El usuario no esta registrado', 'Fallido', {
              positionClass: 'toast-top-center'
            });
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this14 = this;

            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password).then(function () {
              _this14.router.navigate(['/home']);

              _this14.toastr.success('Ingreso exitoso', '', {
                positionClass: 'toast-top-center'
              });
            })["catch"](function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message; // ...

              console.log("Error [".concat(errorCode, "]: ").concat(errorMessage));
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 32,
        vars: 1,
        consts: [[1, "page"], [1, "container"], [1, "text"], [1, "logo"], ["src", "../../../../assets/img/Logo - Azul.svg", "alt", ""], [1, "formBox"], [3, "formGroup"], [1, "field"], ["for", "", 2, "color", "#205493", "font-size", "medium"], [1, "control", "has-icons-left", "has-icons-right"], ["formControlName", "signupEmail", "type", "email", "placeholder", "Email", "required", "", 1, "input"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "icon", "is-small", "is-right"], [1, "fas", "fa-check"], [1, "control", "has-icons-left"], ["formControlName", "signupPassword", "type", "password", "placeholder", "Password", "required", "", 1, "input"], [1, "fas", "fa-lock"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 2, "width", "50%", 3, "click"], [1, "RegisterBtn", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() {
              return ctx.doLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_30_listener() {
              return ctx.goToRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Click here to register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["NativeElementInjectorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
        styles: ["@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.page[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  width: 95%;\n}\n.container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #205493;\n  font-size: large;\n  font-family: Helvetica;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.container[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 50px;\n  border-radius: 10px 10px 10px 10px;\n  border: 5px solid #205493;\n  width: 80%;\n  padding: 10px;\n}\n.container[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.container[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .RegisterBtn[_ngcontent-%COMP%] {\n  color: #0071bc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0ksNkJBQUE7RUFDQSw0Q0FBQTtBQVBKO0FBVUE7RUFDSSw0QkFBQTtFQUNBLDJDQUFBO0FBUko7QUFXQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFUSjtBQVlBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVlBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSxzQkFBQTtFQUNBLFVBQUE7QUFWSjtBQVlJO0VBQ0ksZ0JBQUE7RUFDQSxjQXJDSTtFQXNDSixnQkFBQTtFQUNBLHNCQUFBO0FBVlI7QUFhSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQVlRO0VBQ0ksYUFBQTtBQVZaO0FBY0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0NBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBYlI7QUFnQlE7RUFFSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWZaO0FBa0JRO0VBRUksY0F2RUE7QUFzRFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdWJsaWMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm9keUZvbnQ6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiR0aXRsZUZvbnQ6IHNmUHJvVGV4dE1lZGl1bTtcclxuXHJcbiRhenVsT3NjdXJvOiAjMTEyZTUxO1xyXG4kQXp1bE1lZGlvOiAjMjA1NDkzO1xyXG4kQXp1bENsYXJvOiAjMDA3MWJjO1xyXG4kdGV4dDogIzIxMjEyMTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1NGUHJvVGV4dFJlZ3VsYXIudHRmKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2ZQcm9UZXh0TWVkaXVtO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9TRlByb1RleHRNZWRpdW0udHRmKTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnBhZ2V7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuXHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkQXp1bE1lZGlvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybUJveHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMyMDU0OTM7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIFxyXG4gICAgICAgIC5idXR0b25ze1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkQXp1bENsYXJvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuUmVnaXN0ZXJCdG57XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkQXp1bENsYXJvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Read2gether';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "YtdO":
    /*!********************************************************************!*\
      !*** ./src/app/pages/private/file-upload/file-upload.component.ts ***!
      \********************************************************************/

    /*! exports provided: FileUploadComponent */

    /***/
    function YtdO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () {
        return FileUploadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");

      var FileUploadComponent = /*#__PURE__*/function () {
        function FileUploadComponent(storage) {
          _classCallCheck(this, FileUploadComponent);

          this.storage = storage;
          this.fileUrlEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.imgUrlEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(FileUploadComponent, [{
          key: "toggleHover",
          value: function toggleHover(event) {
            this.isHovering = event;
          }
        }, {
          key: "startUpload",
          value: function startUpload(event) {
            var _this15 = this;

            //The file object
            var file = event.item(0); //Client-side Validation example
            // if (file.type.split('/')[0] !== 'audio' || 'image') {
            //   console.error('No hay soporte en ese tipo de archivo :(')
            //   return;
            // }
            // The storage path

            var path = "test/".concat(new Date().getTime(), "_").concat(file.name);
            var ref = this.storage.ref(path); // Totally opcional metadata

            var customMetadata = {
              app: 'My AngularFire-powered PWA!'
            }; // The main task

            this.task = this.storage.upload(path, file, {
              customMetadata: customMetadata
            }); //progress monitoring

            this.percentage = this.task.percentageChanges();
            this.snapshot = this.task.snapshotChanges(); //The file's download URL

            this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
              _this15.downloadURL = ref.getDownloadURL();

              _this15.downloadURL.subscribe(function (url) {
                _this15.fileURL = url;

                _this15.fileUrlEmitter.emit(url);

                console.log("URL ES: " + url);
              });
            })).subscribe();
            this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
              _this15.downloadURL = ref.getDownloadURL();

              _this15.downloadURL.subscribe(function (imgUrl) {
                _this15.imgURL = imgUrl;

                _this15.imgUrlEmitter.emit(imgUrl);

                console.log("URL ES: " + imgUrl);
              });
            })).subscribe();
          }
        }, {
          key: "isActive",
          value: function isActive(snapshot) {
            return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
          }
        }]);

        return FileUploadComponent;
      }();

      FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) {
        return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]));
      };

      FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FileUploadComponent,
        selectors: [["app-file-upload"]],
        outputs: {
          fileUrlEmitter: "fileUrlEmitter",
          imgUrlEmitter: "imgUrlEmitter"
        },
        decls: 5,
        vars: 2,
        consts: [["dropZone", "", 1, "dropzone", 3, "hovered", "dropped"], [1, "file", 2, "width", "140px", "display", "flex", "flex-flow", "column wrap"], [1, "file-label"], ["type", "file", 3, "change"]],
        template: function FileUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hovered", function FileUploadComponent_Template_div_hovered_0_listener($event) {
              return ctx.toggleHover($event);
            })("dropped", function FileUploadComponent_Template_div_dropped_0_listener($event) {
              return ctx.startUpload($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_4_listener($event) {
              return ctx.startUpload($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovering", ctx.isHovering);
          }
        },
        styles: [".dropzone[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  text-align: center;\n  flex-flow: column wrap;\n  opacity: 0;\n  cursor: pointer;\n  height: 140px;\n  width: 140px;\n  border-radius: 75px;\n}\n.dropzone[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0);\n  margin-left: 3%;\n}\n.dropzone[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.dropzone.hovering[_ngcontent-%COMP%] {\n  border: 2px solid #00f839;\n  color: #dadada !important;\n}\n.dropzone[_ngcontent-%COMP%]   .file-label[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\nprogress[_ngcontent-%COMP%]::-webkit-progress-value {\n  -webkit-transition: width 0.1s ease;\n  transition: width 0.1s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBUUEsVUFBQTtFQUdBLGVBQUE7RUFVQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBcEJGO0FBYUU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFYSjtBQWlCRTtFQUNFLFVBQUE7QUFmSjtBQW9CQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFqQkY7QUFtQkE7RUFDRSxnQkFBQTtBQWhCRjtBQWtCQTtFQUNFLG1DQUFBO0VBQUEsMkJBQUE7QUFmRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcHpvbmUge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIHotaW5kZXg6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuXHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgLy8gLy8gZm9udC13ZWlnaHQ6IDEyO1xyXG4gIC8vIGhlaWdodDogMTAwJTtcclxuICAvLyBib3JkZXI6IDJweCBkYXNoZWQgI2ZmMDAwMDtcclxuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLy8gYmFja2dyb3VuZDogd2hpdGUgO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLy8gdG9wOiAxMjJweDtcclxuICAvLyBsZWZ0OiAxMDQuMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvLyBtYXJnaW4tdG9wOiAyOSU7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDI1JTtcclxuXHJcblxyXG4gIGlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICB9XHJcblxyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDc1cHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbn1cclxuXHJcblxyXG4uZHJvcHpvbmUuaG92ZXJpbmcge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMGY4Mzk7XHJcbiAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcclxufVxyXG4uZHJvcHpvbmUgLmZpbGUtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxucHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgZWFzZTtcclxufVxyXG4gICJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-file-upload',
            templateUrl: './file-upload.component.html',
            styleUrls: ['./file-upload.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
          }];
        }, {
          fileUrlEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          imgUrlEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _pages_private_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages/private/file-upload/file-upload.component */
      "YtdO");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/public/login/login.component */
      "QuX9");
      /* harmony import */


      var _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/public/register/register.component */
      "MyXD");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var angular_epub_viewer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! angular-epub-viewer */
      "MO89");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "HTFn");
      /* harmony import */


      var _pages_public_tags_tags_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./pages/public/tags/tags.component */
      "5VxN");
      /* harmony import */


      var _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./pipes/filter-tags.pipe */
      "k51J");
      /* harmony import */


      var _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pages/private/home/home.component */
      "dsDk");
      /* harmony import */


      var _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./pages/private/profile/profile.component */
      "fu3/");
      /* harmony import */


      var _pages_private_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./pages/private/navigation-bar/navigation-bar.component */
      "L0k6");
      /* harmony import */


      var _pages_private_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./pages/private/footer/footer.component */
      "oTol");
      /* harmony import */


      var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./pipes/filter.pipe */
      "BhhM");
      /* harmony import */


      var _pages_private_external_profiles_external_profiles_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./pages/private/external-profiles/external-profiles.component */
      "QBD8");
      /* harmony import */


      var _pages_private_group_group_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./pages/private/group/group.component */
      "mLow");
      /* harmony import */


      var _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./pipes/filter-external-profiles.pipe */
      "v5hE");
      /* harmony import */


      var _pages_private_book_pdf_book_pdf_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./pages/private/book-pdf/book-pdf.component */
      "eu5Z");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ng2-pdf-viewer */
      "IkSl");
      /* harmony import */


      var _pages_private_book_chat_book_chat_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./pages/private/book-chat/book-chat.component */
      "vrEl");
      /* harmony import */


      var _pages_private_my_books_my_books_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./pages/private/my-books/my-books.component */
      "+SNX"); //firebase
      //bootstrap
      //Servicios
      // import { matDrawerAnimations, MatDrawerContainer } from '@angular/material/sidenav';
      //PDF Viewer


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestore"], _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthGuard"], _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterTagsPipe"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"], _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterExternalProfilesPipe"]],
        imports: [[angular_epub_viewer__WEBPACK_IMPORTED_MODULE_17__["AngularEpubViewerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_34__["PdfViewerModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["NgxIntlTelInputModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot({
          timeOut: 3000,
          positionClass: 'toast-top-center',
          preventDuplicates: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _pages_private_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__["FileUploadComponent"], _pages_public_tags_tags_component__WEBPACK_IMPORTED_MODULE_22__["TagsComponent"], _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterTagsPipe"], _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"], _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"], _pages_private_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_26__["NavigationBarComponent"], _pages_private_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"], _pages_private_external_profiles_external_profiles_component__WEBPACK_IMPORTED_MODULE_29__["ExternalProfilesComponent"], _pages_private_group_group_component__WEBPACK_IMPORTED_MODULE_30__["GroupComponent"], _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterExternalProfilesPipe"], _pages_private_book_pdf_book_pdf_component__WEBPACK_IMPORTED_MODULE_32__["BookPDFComponent"], _pages_private_book_chat_book_chat_component__WEBPACK_IMPORTED_MODULE_35__["BookChatComponent"], _pages_private_my_books_my_books_component__WEBPACK_IMPORTED_MODULE_36__["MyBooksComponent"]],
          imports: [angular_epub_viewer__WEBPACK_IMPORTED_MODULE_17__["AngularEpubViewerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_34__["PdfViewerModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["NgxIntlTelInputModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _pages_private_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__["FileUploadComponent"], _pages_public_tags_tags_component__WEBPACK_IMPORTED_MODULE_22__["TagsComponent"], _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterTagsPipe"], _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"], _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"], _pages_private_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_26__["NavigationBarComponent"], _pages_private_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"], _pages_private_external_profiles_external_profiles_component__WEBPACK_IMPORTED_MODULE_29__["ExternalProfilesComponent"], _pages_private_group_group_component__WEBPACK_IMPORTED_MODULE_30__["GroupComponent"], _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterExternalProfilesPipe"], _pages_private_book_pdf_book_pdf_component__WEBPACK_IMPORTED_MODULE_32__["BookPDFComponent"], _pages_private_book_chat_book_chat_component__WEBPACK_IMPORTED_MODULE_35__["BookChatComponent"], _pages_private_my_books_my_books_component__WEBPACK_IMPORTED_MODULE_36__["MyBooksComponent"]],
            imports: [angular_epub_viewer__WEBPACK_IMPORTED_MODULE_17__["AngularEpubViewerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_34__["PdfViewerModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["NgxIntlTelInputModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot({
              timeOut: 3000,
              positionClass: 'toast-top-center',
              preventDuplicates: true
            })],
            providers: [_pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestore"], _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthGuard"], _pipes_filter_tags_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterTagsPipe"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"], _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterExternalProfilesPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dsDk":
    /*!******************************************************!*\
      !*** ./src/app/pages/private/home/home.component.ts ***!
      \******************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function dsDk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_tag_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../services/tag.service */
      "lBcp");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/book.service */
      "+9od");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/pipes/filter.pipe */
      "BhhM");
      /* harmony import */


      var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../navigation-bar/navigation-bar.component */
      "L0k6");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../footer/footer.component */
      "oTol");

      function HomeComponent_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tag_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r2);
        }
      }

      function HomeComponent_div_9_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_9_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.activateSelect(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " A\xF1adir a mi grupo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "buttonGroup-" + i_r4);
        }
      }

      function HomeComponent_div_9_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var groups_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", groups_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](groups_r12);
        }
      }

      function HomeComponent_div_9_div_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_9_div_31_div_1_Template_label_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var bookComent_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r15.goToPerfil(bookComent_r13.User);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bookComent_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", bookComent_r13.Images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bookComent_r13.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bookComent_r13.Comment);
        }
      }

      function HomeComponent_div_9_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_9_div_31_div_1_Template, 9, 3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bookComent_r13 = ctx.$implicit;

          var book_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", bookComent_r13.Title == book_r3.Title);
        }
      }

      function HomeComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var i_r4 = ctx.index;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.addBookToUser(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " A\xF1adir a mi lista ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_div_9_button_17_Template, 2, 1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomeComponent_div_9_Template_select_change_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var i_r4 = ctx.index;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.addBookToGroup(i_r4);
          })("ngModelChange", function HomeComponent_div_9_Template_select_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.groupValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Seleccione su grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HomeComponent_div_9_option_22_Template, 2, 2, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var i_r4 = ctx.index;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24.activateComent(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "A\xF1adir Comentario");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_9_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.comentario = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var book_r3 = ctx.$implicit;
            var i_r4 = ctx.index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.sendComentario(book_r3.Title, i_r4);
          });

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
        }

        if (rf & 2) {
          var book_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

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
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(authService, tagService, firebaseAuth, userService, bookService, router, firebase, toastr, filter) {
          _classCallCheck(this, HomeComponent);

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
          this.searchBoxHome = ''; // bookList: any[] = [];

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
            autor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
        }

        _createClass(HomeComponent, [{
          key: "goToProfile",
          value: function goToProfile() {
            this.router.navigate(['/profile']);
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['/home']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            // this.initChat();
            var $this = this;
            this.UserAcount();
            this.userService.getRegister().snapshotChanges().subscribe(function (item) {
              _this16.registerList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;

                _this16.registerList.push(x);
              });

              _this16.getMyGroupsAndBooks(_this16.registerList);
            });
            this.userService.getGroups().snapshotChanges().subscribe(function (item) {
              _this16.groupList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;

                _this16.groupList.push(x);
              });
            });
            this.tagService.getTags().snapshotChanges().subscribe(function (item) {
              _this16.tagsList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;

                _this16.tagsList.push(x);
              });
              console.log(_this16.tagsList);
            });
            this.bookService.getBooks().snapshotChanges().subscribe(function (item) {
              _this16.bookList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;

                _this16.bookList.push(x);
              });
              _this16.macthRecomended = _this16.bookList;
              $this.callTags(_this16.bookList, _this16.tagsList);
              $this.coments(_this16.bookList, _this16.registerList);
            });
          }
        }, {
          key: "callTags",
          value: function callTags(lista, tags) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this17 = this;

              var Key, entries, Email;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      lista.forEach(function (element) {
                        if ("Tags" in element) {
                          entries = Object.values(element.Tags);

                          _this17.arrTagsBooks.push({
                            tags: entries,
                            name: element.Title
                          });
                        }
                      }); // console.log(this.arrTagsBooks);

                      this.tagsList = Object.values(tags[0]);

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "getBooksByTag",
          value: function getBooksByTag() {
            var _this18 = this;

            var entries;
            console.log("this.tag");
            console.log(this.tag);

            if (this.tag == "All") {
              this.macthRecomended = this.booksList;
            } else {
              this.macthRecomended = [];
              this.bookList.forEach(function (element, index) {
                if ("Tags" in element) {
                  entries = Object.values(element.Tags);
                  console.log(entries);

                  for (var i = 0; i < entries.length; i++) {
                    if (_this18.tag == entries[i]) {
                      _this18.macthRecomended.push(element);
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
        }, {
          key: "activateSelect",
          value: function activateSelect(i) {
            var activate = document.getElementById("activateGroupSelect" + i);
            activate.style.display = "block";
          }
        }, {
          key: "sendComentario",
          value: function sendComentario(nombreLibro, i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var Email, Key, activateComent;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;

                      if (!(this.comentario != '')) {
                        _context12.next = 11;
                        break;
                      }

                      _context12.next = 4;
                      return this.bookList.forEach(function (element, index) {
                        if ("Title" in element) {
                          if (element.Title == nombreLibro) {
                            Key = element.$key;
                          }
                        }
                      });

                    case 4:
                      console.log("Key");
                      console.log(Key);
                      this.firebase.database.ref("books").child(Key).child("Comentarios").push({
                        Comment: this.comentario,
                        User: Email
                      });
                      this.toastr.success('Comentario enviado', 'Exitosamente');
                      this.comentario = "";
                      activateComent = document.getElementById("activateComentInput" + i);
                      activateComent.style.display = "none";

                    case 11:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "getMyGroupsAndBooks",
          value: function getMyGroupsAndBooks(list) {
            var _this19 = this;

            var entries;
            var entriesBooks;
            var Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            list.forEach(function (element, index) {
              if (element.email == Email) {
                if ("Groups" in element) {
                  entries = Object.keys(element.Groups);

                  for (var i = 0; i < entries.length; i++) {
                    if (element.Groups[entries[i]].category == "owner") {
                      _this19.booksListGroup.push(element.Groups[entries[i]].groupName);
                    }
                  }
                }
              } // if ("MisLibros" in element){
              //   entriesBooks = Object.keys(element.MisLibros);
              //   for (let i = 0; i < entriesBooks.length; i++) {
              //     this.booksListGroup.push(element.MisLibros[entriesBooks[i]].Titulo);
              //   }        
              // }

            });
          }
        }, {
          key: "activateComent",
          value: function activateComent(i) {
            var activateComent = document.getElementById("activateComentInput" + i);
            activateComent.style.display = "block";
          }
        }, {
          key: "coments",
          value: function coments(books, register) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var entries, bookComentLocal;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      bookComentLocal = [];
                      this.bookComents = [];
                      bookComentLocal = this.bookComents;
                      console.log("bookComentLocal");
                      console.log(bookComentLocal);
                      console.log("this.bookComents");
                      console.log(this.bookComents);
                      _context13.next = 9;
                      return books.forEach(function (element) {
                        if ("Comentarios" in element) {
                          entries = Object.keys(element.Comentarios);

                          for (var i = 0; i < entries.length; i++) {
                            bookComentLocal.push({
                              Comment: element.Comentarios[entries[i]].Comment,
                              User: element.Comentarios[entries[i]].User,
                              Title: element.Title
                            });
                          }
                        }
                      });

                    case 9:
                      console.log(" register");
                      console.log(register);
                      _context13.next = 13;
                      return register.forEach(function (element) {
                        if (bookComentLocal.length != 0) {
                          for (var i = 0; i < bookComentLocal.length; i++) {
                            if (bookComentLocal[i].User == element.email) {
                              if ("Images" in element) {
                                entries = Object.keys(element.Images);
                                var index = entries.length - 1;
                                bookComentLocal[i].Images = element.Images[entries[index]].ImgUrl;
                                bookComentLocal[i].name = element.name + " " + element.lname;
                              } else {
                                bookComentLocal[i].Images = "../../../../../../assets/img/NoImage.png";
                                bookComentLocal[i].name = element.name + " " + element.lname;
                              }
                            }
                          }
                        }
                      });

                    case 13:
                      console.log("bookComentLocal");
                      console.log(bookComentLocal);

                    case 15:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "UserAcount",
          value: function UserAcount() {
            // var user = this.firebaseAuth.auth.currentUser;
            var $this = this;
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
              if (user) {
                // User is signed in.
                if (user != null) {
                  user.providerData.forEach(function (profile) {// console.log("Sign-in provider: " + profile.providerId);
                    // console.log("  Provider-specific UID: " + profile.uid);
                    // console.log("  Name: " + profile.displayName);
                    // console.log("  Email: " + profile.email);
                    // $this.addBookToUser(profile.email,"");
                  });
                } // console.log(user);

              } else {// No user is signed in.
                }
            });
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.authService.logout();

                    case 2:
                      this.router.navigate(['/']);

                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "addBookToUser",
          value: function addBookToUser(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this20 = this;

              var Key, alink, Email, _i3;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      this.imagen = this.macthRecomended[i].Portada;
                      this.titulo = this.macthRecomended[i].Title;
                      this.autor = this.macthRecomended[i].Autor;
                      alink = this.macthRecomended[i].alink;
                      _context15.next = 7;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          // console.log("entre nivel1");
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            Key = childKey;
                            user.forEach(function (info) {
                              info.forEach(function (MisLibros) {
                                MisLibros.forEach(function (Libros) {
                                  var LibrosChildKey = Libros.key;
                                  var LibrosChildData = Libros.val();

                                  if (LibrosChildKey == "Titulo") {
                                    if (LibrosChildData == _this20.titulo) {
                                      _this20.arr.push(LibrosChildData);
                                    }
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 7:
                      for (_i3 = 0; _i3 < this.arr.length; _i3++) {
                        if (this.arr[_i3] == this.titulo) {
                          this.contador++;
                        }
                      }

                      if (this.contador == 0) {
                        this.confirm = true;
                      } else {
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

                    case 13:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "goToPerfil",
          value: function goToPerfil(email) {
            this.router.navigate(['externalProfiles', {
              email: email
            }]);
          }
        }, {
          key: "addBookToGroup",
          value: function addBookToGroup(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this21 = this;

              var alink, keygroup, booksinGroup, entries, contador, activate, _i5;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      booksinGroup = [];
                      contador = 0;
                      activate = document.getElementById("activateGroupSelect" + i);
                      activate.style.display = "none";
                      this.titulo = this.macthRecomended[i].Title;
                      this.imagen = this.macthRecomended[i].Portada;
                      this.autor = this.macthRecomended[i].Autor;
                      alink = this.macthRecomended[i].alink;
                      _context16.next = 10;
                      return this.firebase.database.ref("groups").once("value", function (users) {
                        users.forEach(function (user) {
                          // console.log("entre nivel1");
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.name == _this21.groupValue) {
                            keygroup = childKey;
                          }
                        });
                      });

                    case 10:
                      this.groupList.forEach(function (element) {
                        if (element.name == _this21.groupValue) {
                          if ("books" in element) {
                            entries = Object.keys(element.books);

                            for (var _i4 = 0; _i4 < entries.length; _i4++) {
                              booksinGroup.push(element.books[entries[_i4]].Titulo);
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

                      for (_i5 = 0; _i5 < booksinGroup.length; _i5++) {
                        if (this.titulo == booksinGroup[_i5]) {
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
                      } else {
                        this.toastr.error('El libro ya se encuentra en el grupo');
                      }

                      this.groupValue = "";

                    case 15:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "SendContact",
          value: function SendContact() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var Key, ContactName, ContactNumber, Email, emailRegexp, userExist;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      ContactName = this.FormAdd.controls.Namecontact.value;
                      ContactNumber = this.FormAdd.controls.Numbercontact.value;
                      Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      emailRegexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
                      _context17.next = 6;
                      return this.firebase.database.ref('register').once('value', function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            Key = childKey; // console.log("entramos", childKey);
                          } // console.log("recorrido", childKey);

                        });
                      });

                    case 6:
                      if (ContactNumber.match(emailRegexp)) {
                        // Es correo
                        // console.log("Es correo");
                        userExist = this.registerList.find(function (user) {
                          return user.email == ContactNumber;
                        });
                        ContactNumber = userExist && userExist.email || undefined;

                        if (!userExist) {// console.log("Este usuario no existe")
                        } else {
                          // console.log(ContactName, ContactNumber);
                          this.firebase.database.ref('register').child(Key).child('contacts').push({
                            Namecontact: ContactName,
                            Numbercontact: ContactNumber
                          });
                        }
                      } else {
                        // console.log("Es teléfono");
                        // Es teléfono
                        userExist = this.registerList.find(function (user) {
                          return user.telefono.e164Number == ContactNumber && user;
                        });

                        if (!userExist) {// console.log("Este usuario no existe")
                        } else {
                          // console.log(ContactName, ContactNumber);
                          this.firebase.database.ref('register').child(Key).child('contacts').push({
                            Namecontact: ContactName,
                            Numbercontact: ContactNumber
                          });
                        }
                      }

                      this.FormAdd.reset({
                        Namecontact: "",
                        Numbercontact: ""
                      });

                    case 8:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 12,
        vars: 7,
        consts: [[1, "container"], [2, "margin-top", "65px", "margin-bottom", "-21px"], ["id", "form1", "type", "search", "name", "searchBoxHome", "placeholder", "Buscar", 1, "searchBar", 3, "ngModel", "ngModelChange"], [2, "margin-bottom", "3px", "display", "flex", "justify-content", "right", "width", "100%"], [3, "ngModel", "change", "ngModelChange"], ["value", "All", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "value"], ["alt", "imagenes", 1, "bookImg", 3, "id", "src"], [1, "cuerpoText"], ["align", "center", 3, "id"], [1, "contenedorStars"], [1, "rating-label"], ["max", "5", "readonly", "", "step", "0.01", "type", "range", 1, "rating", 3, "value"], [1, "descripcion"], [1, "btnContainer"], [1, "button", "is-info", 2, "width", "45%", 3, "id", "click"], ["class", "button is-info", "style", "width: 50%; margin-left: 5px;", 3, "id", "click", 4, "ngIf"], [2, "margin-top", "10px", "display", "none", 3, "id"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "button", "is-info", 2, "width", "55%", "margin-top", "5px", 3, "click"], [2, "display", "none", 3, "id"], ["type", "text", "placeholder", "Escriba su comentario", 2, "margin-top", "5px", 3, "ngModel", "ngModelChange"], [1, "button", "is-info", 2, "margin-top", "5px", "margin-left", "2px", "width", "25%", "height", "10%", 3, "click"], [2, "color", "#205493", "font-weight", "bold", "font-size", "medium", "font-family", "Helvetica", "margin-top", "15px"], [1, "button", "is-info", 2, "width", "50%", "margin-left", "5px", 3, "id", "click"], [3, "ngValue"], [4, "ngIf"], [1, "comentario"], ["alt", "", 1, "commentPhoto", 3, "src"], [1, "user", 3, "click"], [1, "commentText"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.searchBoxHome = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomeComponent_Template_select_change_5_listener() {
              return ctx.getBooksByTag();
            })("ngModelChange", function HomeComponent_Template_select_ngModelChange_5_listener($event) {
              return ctx.tag = $event;
            });

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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchBoxHome);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.tag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tagsList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 4, ctx.macthRecomended, ctx.searchBoxHome));
          }
        },
        directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavigationBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_14__["NativeElementInjectorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"]],
        pipes: [src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]],
        styles: ["@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\n.rating[_ngcontent-%COMP%] {\n  --dir: right;\n  --fill: #feca57;\n  --fillbg: rgba(100, 100, 100, 0.15);\n  --heart: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 21.328l-1.453-1.313q-2.484-2.25-3.609-3.328t-2.508-2.672-1.898-2.883-0.516-2.648q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109 2.344 0 3.914 1.594t1.57 3.891q0 1.828-1.219 3.797t-2.648 3.422-4.664 4.359z\"/></svg>');\n  --star: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z\"/></svg>');\n  --stars: 5;\n  --starsize: 3rem;\n  --symbol: var(--star);\n  --value: 1;\n  --w: calc(var(--stars) * var(--starsize));\n  --x: calc(100% * (var(--value) / var(--stars)));\n  block-size: var(--starsize);\n  inline-size: var(--w);\n  position: relative;\n  touch-action: manipulation;\n  -webkit-appearance: none;\n}\n[dir=rtl][_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  --dir: left;\n}\n.rating[_ngcontent-%COMP%]::-moz-range-track {\n  background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));\n  block-size: 100%;\n  mask: repeat left center/var(--starsize) var(--symbol);\n}\n.rating[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));\n  block-size: 100%;\n  mask: repeat left center/var(--starsize) var(--symbol);\n  -webkit-mask: repeat left center/var(--starsize) var(--symbol);\n}\n.rating[_ngcontent-%COMP%]::-moz-range-thumb {\n  height: var(--starsize);\n  opacity: 0;\n  width: var(--starsize);\n}\n.rating[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  height: var(--starsize);\n  opacity: 0;\n  width: var(--starsize);\n  -webkit-appearance: none;\n}\n.rating[_ngcontent-%COMP%], .rating-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: ui-sans-serif, system-ui, sans-serif;\n}\n.rating-label[_ngcontent-%COMP%] {\n  -webkit-margin-after: 1rem;\n          margin-block-end: 1rem;\n  text-align: center;\n}\n\n.rating--nojs[_ngcontent-%COMP%]::-moz-range-track {\n  background: var(--fillbg);\n}\n.rating--nojs[_ngcontent-%COMP%]::-moz-range-progress {\n  background: var(--fill);\n  block-size: 100%;\n  mask: repeat left center/var(--starsize) var(--star);\n}\n.rating--nojs[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background: var(--fillbg);\n}\n.rating--nojs[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  background-color: var(--fill);\n  box-shadow: calc(0rem - var(--w)) 0 0 var(--w) var(--fill);\n  opacity: 1;\n  width: 1px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .rating--nojs[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: var(--w) 0 0 var(--w) var(--fill);\n}\n@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  color: #212121;\n}\n.searchBar[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 1;\n  top: 55px;\n  margin-left: 5px;\n  border-radius: 10px;\n  padding-left: 5px;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  padding-bottom: 30px;\n}\n.container[_ngcontent-%COMP%]   .bookImg[_ngcontent-%COMP%] {\n  width: 100%;\n  \n  height: 200px;\n  \n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%] {\n  padding-left: 12%;\n  padding-right: 12%;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-align: center;\n  margin-top: 5%;\n  margin-bottom: 0.5%;\n  color: #205493;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n  margin-bottom: 3%;\n  color: #0071bc;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .contenedorStars[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n  margin-top: -2%;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .contenedorStars[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  width: 10%;\n  height: 10%;\n  margin-right: 2%;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .contenedorTags[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  font-size: 18px;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .contenedorTags[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin-right: 2%;\n  color: #0071bc;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .descripcion[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n  text-align: justify;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .comentario[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  flex-wrap: nowrap;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .comentario[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  color: #0071bc;\n  margin-left: 5px;\n  font-size: medium;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .comentario[_ngcontent-%COMP%]   .commentText[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: medium;\n}\n.container[_ngcontent-%COMP%]   .cuerpoText[_ngcontent-%COMP%]   .comentario[_ngcontent-%COMP%]   .commentPhoto[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n  border-radius: 100%;\n  border: solid 1px #212121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1EsOEVBQUE7QUFFUjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSx5VkFBQTtFQUNBLHNPQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUFISjtBQUtFO0VBQ0UsV0FBQTtBQUZKO0FBSUU7RUFDRSw0RkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7QUFESjtBQUdFO0VBQ0UsNEZBQUE7RUFDQSxnQkFBQTtFQUNBLHNEQUFBO0VBQ0EsOERBQUE7QUFBSjtBQUVFO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNFO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQUVKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsaURBQUE7QUFHSjtBQURFO0VBQ0UsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FBSUo7QUFERSxVQUFBO0FBQ0E7RUFDRSx5QkFBQTtBQUlKO0FBRkU7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0RBQUE7QUFLSjtBQUhFO0VBQ0UseUJBQUE7QUFNSjtBQUpFO0VBQ0UsNkJBQUE7RUFDQSwwREFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBT0o7QUFMRTtFQUNFLDZDQUFBO0FBUUo7QUFMQTtFQUNJLDZCQUFBO0VBQ0EsNENBQUE7QUFRSjtBQUxBO0VBQ0ksNEJBQUE7RUFDQSwyQ0FBQTtBQU9KO0FBSkE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQU1KO0FBRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDQTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUVBLG9CQUFBO0FBQUo7QUFJSTtFQUNJLFdBQUE7RUFBYSx1QkFBQTtFQUNiLGFBQUE7RUFBZSx3QkFBQTtFQUNmLG9CQUFBO0tBQUEsaUJBQUE7QUFBUjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0F4Q0E7QUFxQ1o7QUFPUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0EvQ0E7QUEwQ1o7QUFRUTtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVBaO0FBU1k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBUGhCO0FBWVE7RUFHSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFaWjtBQWNZO0VBQ0ksZ0JBQUE7RUFDQSxjQTNFSjtBQStEWjtBQWlCUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFmWjtBQWtCUTtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBakJaO0FBb0JZO0VBQ0ksY0E3Rko7RUE4RkksZ0JBQUE7RUFDQSxpQkFBQTtBQWxCaEI7QUFxQlk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBbkJkO0FBc0JZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBcEJoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvZHlGb250OiBzZlByb1RleHRSZWd1bGFyO1xyXG4kdGl0bGVGb250OiBzZlByb1RleHRNZWRpdW07XHJcblxyXG5AaW1wb3J0IHVybCgvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS8zLjIuMS9jc3MvZm9udC1hd2Vzb21lLmNzcyk7XHJcblxyXG4ucmF0aW5nIHtcclxuICAgIC0tZGlyOiByaWdodDtcclxuICAgIC0tZmlsbDogI2ZlY2E1NztcclxuICAgIC0tZmlsbGJnOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMTUpO1xyXG4gICAgLS1oZWFydDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMjEuMzI4bC0xLjQ1My0xLjMxM3EtMi40ODQtMi4yNS0zLjYwOS0zLjMyOHQtMi41MDgtMi42NzItMS44OTgtMi44ODMtMC41MTYtMi42NDhxMC0yLjI5NyAxLjU3LTMuODkxdDMuOTE0LTEuNTk0cTIuNzE5IDAgNC41IDIuMTA5IDEuNzgxLTIuMTA5IDQuNS0yLjEwOSAyLjM0NCAwIDMuOTE0IDEuNTk0dDEuNTcgMy44OTFxMCAxLjgyOC0xLjIxOSAzLjc5N3QtMi42NDggMy40MjItNC42NjQgNC4zNTl6XCIvPjwvc3ZnPicpO1xyXG4gICAgLS1zdGFyOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAxNy4yNWwtNi4xODggMy43NSAxLjY0MS03LjAzMS01LjQzOC00LjczNCA3LjE3Mi0wLjYwOSAyLjgxMy02LjYwOSAyLjgxMyA2LjYwOSA3LjE3MiAwLjYwOS01LjQzOCA0LjczNCAxLjY0MSA3LjAzMXpcIi8+PC9zdmc+Jyk7XHJcbiAgICAtLXN0YXJzOiA1O1xyXG4gICAgLS1zdGFyc2l6ZTogM3JlbTtcclxuICAgIC0tc3ltYm9sOiB2YXIoLS1zdGFyKTtcclxuICAgIC0tdmFsdWU6IDE7XHJcbiAgICAtLXc6IGNhbGModmFyKC0tc3RhcnMpICogdmFyKC0tc3RhcnNpemUpKTtcclxuICAgIC0teDogY2FsYygxMDAlICogKHZhcigtLXZhbHVlKSAvIHZhcigtLXN0YXJzKSkpO1xyXG4gICAgYmxvY2stc2l6ZTogdmFyKC0tc3RhcnNpemUpO1xyXG4gICAgaW5saW5lLXNpemU6IHZhcigtLXcpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG4gIFtkaXI9XCJydGxcIl0gLnJhdGluZyB7XHJcbiAgICAtLWRpcjogbGVmdDtcclxuICB9XHJcbiAgLnJhdGluZzo6LW1vei1yYW5nZS10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdmFyKC0tZGlyKSwgdmFyKC0tZmlsbCkgMCB2YXIoLS14KSwgdmFyKC0tZmlsbGJnKSAwIHZhcigtLXgpKTtcclxuICAgIGJsb2NrLXNpemU6IDEwMCU7XHJcbiAgICBtYXNrOiByZXBlYXQgbGVmdCBjZW50ZXIvdmFyKC0tc3RhcnNpemUpIHZhcigtLXN5bWJvbCk7XHJcbiAgfVxyXG4gIC5yYXRpbmc6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB2YXIoLS1kaXIpLCB2YXIoLS1maWxsKSAwIHZhcigtLXgpLCB2YXIoLS1maWxsYmcpIDAgdmFyKC0teCkpO1xyXG4gICAgYmxvY2stc2l6ZTogMTAwJTtcclxuICAgIG1hc2s6IHJlcGVhdCBsZWZ0IGNlbnRlci92YXIoLS1zdGFyc2l6ZSkgdmFyKC0tc3ltYm9sKTtcclxuICAgIC13ZWJraXQtbWFzazogcmVwZWF0IGxlZnQgY2VudGVyL3ZhcigtLXN0YXJzaXplKSB2YXIoLS1zeW1ib2wpO1xyXG4gIH1cclxuICAucmF0aW5nOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgIGhlaWdodDogdmFyKC0tc3RhcnNpemUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiB2YXIoLS1zdGFyc2l6ZSk7XHJcbiAgfVxyXG4gIC5yYXRpbmc6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgIGhlaWdodDogdmFyKC0tc3RhcnNpemUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiB2YXIoLS1zdGFyc2l6ZSk7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG4gIC5yYXRpbmcsIC5yYXRpbmctbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAucmF0aW5nLWxhYmVsIHtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE5PIEpTICovXHJcbiAgLnJhdGluZy0tbm9qczo6LW1vei1yYW5nZS10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1maWxsYmcpO1xyXG4gIH1cclxuICAucmF0aW5nLS1ub2pzOjotbW96LXJhbmdlLXByb2dyZXNzIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpbGwpO1xyXG4gICAgYmxvY2stc2l6ZTogMTAwJTtcclxuICAgIG1hc2s6IHJlcGVhdCBsZWZ0IGNlbnRlci92YXIoLS1zdGFyc2l6ZSkgdmFyKC0tc3Rhcik7XHJcbiAgfVxyXG4gIC5yYXRpbmctLW5vanM6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpbGxiZyk7XHJcbiAgfVxyXG4gIC5yYXRpbmctLW5vanM6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwpO1xyXG4gICAgYm94LXNoYWRvdzogY2FsYygwcmVtIC0gdmFyKC0tdykpIDAgMCB2YXIoLS13KSB2YXIoLS1maWxsKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gIH1cclxuICBbZGlyPVwicnRsXCJdIC5yYXRpbmctLW5vanM6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXcpIDAgMCB2YXIoLS13KSB2YXIoLS1maWxsKTtcclxuICB9IFxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2ZQcm9UZXh0UmVndWxhcjtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvU0ZQcm9UZXh0UmVndWxhci50dGYpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzZlByb1RleHRNZWRpdW07XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1NGUHJvVGV4dE1lZGl1bS50dGYpO1xyXG59XHJcblxyXG4qIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbn1cclxuXHJcbiRhenVsT3NjdXJvOiAjMTEyZTUxO1xyXG4kQXp1bE1lZGlvOiAjMjA1NDkzO1xyXG4kQXp1bENsYXJvOiAjMDA3MWJjO1xyXG4kdGV4dDogIzIxMjEyMTtcclxuXHJcbi5zZWFyY2hCYXJ7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xyXG4gICAgXHJcblxyXG4gICAgLmJvb2tJbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIHdpZHRoIG9mIGNvbnRhaW5lciAqL1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7IC8qIGhlaWdodCBvZiBjb250YWluZXIgKi9cclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY3VlcnBvVGV4dHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMiU7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNSU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkQXp1bE1lZGlvO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgICAgICAgICBjb2xvcjogJEF6dWxDbGFybztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW5lZG9yU3RhcnN7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMiU7XHJcblxyXG4gICAgICAgICAgICAuc3RhcnN7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjpjYWRldGJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW5lZG9yVGFnc3tcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC50YWdze1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkQXp1bENsYXJvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmRlc2NyaXBjaW9ue1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb21lbnRhcmlve1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC51c2Vye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRBenVsQ2xhcm87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb21tZW50VGV4dHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29tbWVudFBob3Rve1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJHRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _services_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"]
          }, {
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
          }, {
            type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__["BookService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }, {
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]
          }, {
            type: src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "eu5Z":
    /*!**************************************************************!*\
      !*** ./src/app/pages/private/book-pdf/book-pdf.component.ts ***!
      \**************************************************************/

    /*! exports provided: BookPDFComponent */

    /***/
    function eu5Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookPDFComponent", function () {
        return BookPDFComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/chat.service */
      "sjK5");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../navigation-bar/navigation-bar.component */
      "L0k6");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");
      /* harmony import */


      var angular_epub_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angular-epub-viewer */
      "MO89");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../footer/footer.component */
      "oTol");
      /* harmony import */


      var _book_chat_book_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../book-chat/book-chat.component */
      "vrEl");

      var _c0 = ["epubViewer"];

      function BookPDFComponent_app_book_chat_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-book-chat", 16);
        }

        if (rf & 2) {
          var msg_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("msg", msg_r4);
        }
      }

      function BookPDFComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Go to chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var BookPDFComponent = /*#__PURE__*/function () {
        function BookPDFComponent(chatService, route, firebase, userService) {
          _classCallCheck(this, BookPDFComponent);

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

        _createClass(BookPDFComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.epubViewer.openLink(this.url);
          }
        }, {
          key: "initChat",
          value: function initChat() {
            var _this22 = this;

            this.subscriptionList.connection = this.chatService.connect().subscribe(function (_) {
              console.log("Nos conectamos");
              _this22.subscriptionList.newMgs = _this22.chatService.getNewMsgs().subscribe(function (msg) {
                if (msg.group == _this22.group && msg.book == _this22.title) {
                  _this22.msgs.push(msg);
                }
              });
              _this22.subscriptionList.pageUpdate = _this22.chatService.getChangePage().subscribe(function (info) {
                if (info.group == _this22.group && info.book == _this22.title) {
                  if (info.page == "Next") _this22.epubViewer.nextPage();else if (info.page == "Previous") _this22.epubViewer.previousPage(); // else if (info.page == "Continue") this.epubViewer.goTo(5); AIUDA
                }
              });
            });
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            var pageInfo = {
              group: this.group,
              book: this.title,
              page: "Next"
            };
            this.savePage(1);

            if (this.group != "") {
              this.chatService.sendpageChange(pageInfo);
            }

            this.epubViewer.nextPage();
          }
        }, {
          key: "previousPage",
          value: function previousPage() {
            this.savePage(-1);
            var pageInfo = {
              group: this.group,
              book: this.title,
              page: "Previous"
            };

            if (this.group != "") {
              this.chatService.sendpageChange(pageInfo);
            }

            this.epubViewer.previousPage();
          }
        }, {
          key: "sendMsg",
          value: function sendMsg() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var img, msg;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      // console.log(firebase.auth().currentUser);
                      img = "";
                      _context18.next = 3;
                      return this.userService.getUserImg(firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email).then(function (value) {
                        img = value;
                      });

                    case 3:
                      msg = {
                        content: this.msgForm.value,
                        time: Date.now().toString(),
                        user: img == "" ? "../../../../../../assets/img/NoImage.png" : img,
                        group: this.group,
                        book: this.title
                      };
                      this.chatService.sendMsg(msg);
                      this.msgForm.setValue("");

                    case 6:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "savePage",
          value: function savePage(pag) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this23 = this;

              var email, ref, _ref;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      if (this.isGroup == false) {
                        email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                        ref = this.firebase.database.ref('register');
                        ref.orderByChild('email').equalTo(email).limitToLast(1).once("value", function (user) {
                          console.log(user.val());
                          user = user.val();
                          var userKey = Object.keys(user);
                          console.log(userKey);
                          var books = user[Object.keys(user)[0]].MisLibros;
                          var bookKeys = Object.keys(books);
                          bookKeys.forEach(function (element) {
                            if (books[element].Titulo == _this23.title) {
                              console.log(books[element].Titulo);
                              var currentpage = books[element].Pag;

                              _this23.firebase.database.ref("register").child(userKey[0]).child("MisLibros").child(element).child("Pag").set(currentpage + pag);
                            }
                          });
                        });
                      } else {
                        _ref = this.firebase.database.ref('groups');

                        _ref.orderByChild('name').equalTo(this.group).limitToLast(1).once("value", function (group) {
                          group = group.val();
                          var groupKey = Object.keys(group);
                          var books = group[Object.keys(group)[0]].books;
                          var bookKeys = Object.keys(books);
                          bookKeys.forEach(function (element) {
                            if (books[element].Titulo == _this23.title) {
                              var currentpage = books[element].Pag;

                              _this23.firebase.database.ref("groups").child(groupKey[0]).child("books").child(element).child("Pag").set(currentpage + pag);
                            }
                          });
                        });
                      }

                    case 1:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "btnDisplay",
          value: function btnDisplay() {
            document.getElementById("BtnContinue").style.display = "none";
          }
        }]);

        return BookPDFComponent;
      }();

      BookPDFComponent.ɵfac = function BookPDFComponent_Factory(t) {
        return new (t || BookPDFComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]));
      };

      BookPDFComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BookPDFComponent,
        selectors: [["app-book-pdf"]],
        viewQuery: function BookPDFComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.epubViewer = _t.first);
          }
        },
        decls: 25,
        vars: 4,
        consts: [[1, "name"], [1, "example-container"], ["position", "end", "mode", "side", 1, "chat"], ["drawer", ""], ["type", "button", "mat-button", "", 3, "click"], [3, "msg", 4, "ngFor", "ngForOf"], ["id", "msgID", "type", "text", 1, "inputMSG", 3, "formControl"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", 3, "click"], ["type", "button", "mat-button", "", 3, "click", 4, "ngIf"], ["id", "container"], [1, "example-sidenav-content"], [1, "epubContainer", 2, "height", "500px", "width", "80vw"], ["id", "BtnContinue", 3, "click"], ["padding", "10px"], ["epubViewer", ""], [3, "click"], [3, "msg"]],
        template: function BookPDFComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-drawer-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-drawer", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_Template_button_click_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

              return _r0.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Go to book");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BookPDFComponent_app_book_chat_8_Template, 1, 1, "app-book-chat", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_Template_button_click_10_listener() {
              return ctx.sendMsg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Enviar mensaje");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BookPDFComponent_button_12_Template, 2, 0, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_Template_button_click_16_listener() {
              return ctx.btnDisplay();
            })("click", function BookPDFComponent_Template_button_click_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

              return _r3.goTo(ctx.pag);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Continuar Leyendo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "angular-epub-viewer", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_Template_button_click_20_listener() {
              return ctx.previousPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Previous page");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookPDFComponent_Template_button_click_22_listener() {
              return ctx.nextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Next page");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.msgs);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.msgForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isGroup);
          }
        },
        directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavigationBarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], angular_epub_viewer__WEBPACK_IMPORTED_MODULE_12__["AngularEpubViewerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _book_chat_book_chat_component__WEBPACK_IMPORTED_MODULE_14__["BookChatComponent"]],
        styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  overflow-y: hidden;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: larger;\n  text-align: center;\n  color: #205493;\n  align-self: center;\n  margin-top: 80px;\n  margin-bottom: 10px;\n}\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n}\n\n#container[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 30px;\n}\n\n#bookContainer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#BtnContinue[_ngcontent-%COMP%] {\n  width: 80%;\n  background-color: rgba(255, 255, 255, 0.9);\n  position: absolute;\n  top: 100px;\n  z-index: 99;\n  height: 300px;\n  border-color: transparent;\n}\n\n.chat[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.inputMSG[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 80vw;\n  height: 100px;\n  border-radius: 20px;\n  padding: 10px;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ib29rLXBkZi9ib29rLXBkZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBUFE7RUFRUixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFNQTtFQUdJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVNBO0VBRUksV0FBQTtBQVBKOztBQVVBO0VBQ0ksVUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQVBKOztBQWNBO0VBQ0ksV0FBQTtBQVhKOztBQWVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBS0EsdUJBQUE7RUFFQSxzQkFBQTtFQUNBLGFBQUE7QUFsQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcml2YXRlL2Jvb2stcGRmL2Jvb2stcGRmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG4kYXp1bE9zY3VybzogIzExMmU1MTtcclxuJEF6dWxNZWRpbzogIzIwNTQ5MztcclxuJEF6dWxDbGFybzogIzAwNzFiYztcclxuJHRleHQ6ICMyMTIxMjE7XHJcblxyXG4ubmFtZXtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRBenVsTWVkaW87XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBhZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGFpbmVye1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMzBweDtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuXHJcbn1cclxuXHJcbiNib29rQ29udGFpbmVye1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jQnRuQ29udGludWV7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmLCAkYWxwaGE6IDAuOSkgO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uY2hhdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmlucHV0TVNHe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIC8vIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookPDFComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-book-pdf',
            templateUrl: './book-pdf.component.html',
            styleUrls: ['./book-pdf.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
          }];
        }, {
          epubViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['epubViewer']
          }]
        });
      })();
      /***/

    },

    /***/
    "fu3/":
    /*!************************************************************!*\
      !*** ./src/app/pages/private/profile/profile.component.ts ***!
      \************************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function fu3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/book.service */
      "+9od");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/pipes/filter.pipe */
      "BhhM");
      /* harmony import */


      var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/tag.service */
      "lBcp");
      /* harmony import */


      var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../navigation-bar/navigation-bar.component */
      "L0k6");
      /* harmony import */


      var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../file-upload/file-upload.component */
      "YtdO");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../footer/footer.component */
      "oTol");

      function ProfileComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_tr_24_Template_img_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var i_r5 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.deleteSth("eliminate-" + i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var misTags_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "contTag" + i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "mitag" + i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](misTags_r4.Tags);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r5);
        }
      }

      function ProfileComponent_31_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_31_ng_template_0_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.goToBook(i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_31_ng_template_0_Template_img_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.deleteBook(i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var i_r9 = ctx_r16.index;
          var misLibros_r8 = ctx_r16.$implicit;

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
        }
      }

      function ProfileComponent_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProfileComponent_31_ng_template_0_Template, 9, 7, "ng-template", 23);
        }

        if (rf & 2) {
          var i_r9 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "mislibros" + i_r9);
        }
      }

      function ProfileComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_34_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var misAmigos_r17 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.goToPerfil(misAmigos_r17.User);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_34_Template_p_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var misAmigos_r17 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.goToPerfil(misAmigos_r17.User);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_34_Template_img_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var i_r18 = ctx.index;
            var misAmigos_r17 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.deleteFriend(i_r18, misAmigos_r17.User);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var misAmigos_r17 = ctx.$implicit;
          var i_r18 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("containerAmigos" + i_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "foto" + i_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", misAmigos_r17.Images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](misAmigos_r17.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r18);
        }
      }

      function ProfileComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_37_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var misgrupos_r23 = ctx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.goToGroup(misgrupos_r23.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_37_Template_p_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var misgrupos_r23 = ctx.$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.goToGroup(misgrupos_r23.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var misgrupos_r23 = ctx.$implicit;
          var i_r24 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("containerAmigos" + i_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "foto" + i_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", misgrupos_r23.Images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](misgrupos_r23.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r24);
        }
      }

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(_config, authService, firebaseAuth, userService, bookService, router, firebase, toastr, filterpipe, tagService) {
          _classCallCheck(this, ProfileComponent);

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
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this24 = this;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      this.UserAcount();
                      this.userService.getRegister().snapshotChanges().subscribe(function (item) {
                        _this24.registerList = [];
                        item.forEach(function (element) {
                          var x = element.payload.toJSON();
                          x["$key"] = element.key;

                          _this24.registerList.push(x);
                        });

                        _this24.archieveGroups(_this24.groupList, _this24.registerList);

                        _this24.getMisAmigos();
                      });
                      this.userService.getGroups().snapshotChanges().subscribe(function (item) {
                        _this24.groupList = [];
                        item.forEach(function (element) {
                          var x = element.payload.toJSON();
                          x["$key"] = element.key;

                          _this24.groupList.push(x);
                        });

                        _this24.archieveGroups(_this24.groupList, _this24.registerList);

                        _this24.getMisGrupos();
                      }); //  await this.PrintConsistance();
                      //  await this.UpdatePerfilPhoto();
                      //  await this.WhoIsWritingMe();
                      //  await this.SearchImg();

                    case 3:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "archieveGroups",
          value: function archieveGroups(list, list2) {
            this.groupList = list;
            this.registerList = list2;
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(["/home"]);
          }
        }, {
          key: "goToProfile",
          value: function goToProfile() {
            this.router.navigate(["/profile"]);
          }
        }, {
          key: "goToTags",
          value: function goToTags() {
            this.router.navigate(["/tags"]);
          }
        }, {
          key: "goToBook",
          value: function goToBook(i) {
            // console.log(this.misLibrosList[i]);
            // console.log(this.misLibrosList[i].link);
            this.router.navigate(['/book', {
              Pag: this.misLibrosList[i].Pag,
              title: this.misLibrosList[i].Titulo,
              url: this.misLibrosList[i].alink,
              group: ""
            }]);
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.authService.logout();

                    case 2:
                      this.router.navigate(["/"]);

                    case 3:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "UserAcount",
          value: function UserAcount() {
            // var user = this.firebaseAuth.auth.currentUser;
            var $this = this;
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
              } else {// No user is signed in.
              }
            });
          }
        }, {
          key: "getUrl",
          value: function getUrl(event) {
            this.fileUrl = event;
          }
        }, {
          key: "getImg",
          value: function getImg(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var Email;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      this.ImgUrl = event;
                      Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      _context22.next = 4;
                      return this.SendImage();

                    case 4:
                      _context22.next = 6;
                      return this.UpdatePerfilPhoto(Email);

                    case 6:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          } // async getGroupImg(event){
          //   this.ImgGUrl = event;
          //   console.log("URL recibida en padre: " + this.ImgGUrl);
          //  await this.groupImage();
          // }

        }, {
          key: "SendImage",
          value: function SendImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var Key, Email;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      if (!this.ImgUrl) {
                        _context23.next = 6;
                        break;
                      }

                      Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      _context23.next = 4;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            Key = childKey;
                          }
                        });
                      });

                    case 4:
                      this.firebase.database.ref("register").child(Key).child("Images").push({
                        ImgUrl: this.ImgUrl
                      });
                      this.toastr.success("Photo subida", "Exitosamente");

                    case 6:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "getMisGrupos",
          value: function getMisGrupos() {
            var _this25 = this;

            var Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            var entries;
            this.misGroupsList = [];
            this.registerList.forEach(function (element, index) {
              if (Email == element.email) {
                if ("Groups" in element) {
                  entries = Object.keys(element.Groups);

                  for (var i = 0; i < entries.length; i++) {
                    _this25.misGroupsList.push({
                      name: element.Groups[entries[i]].groupName
                    });
                  }
                }
              }
            });
            this.groupList.forEach(function (element, index) {
              console.log("element.name");
              console.log(element.name);

              for (var i = 0; i < _this25.misGroupsList.length; i++) {
                if (_this25.misGroupsList[i].name == element.name) {
                  if ("Images" in element) {
                    entries = Object.keys(element.Images);
                    _this25.misGroupsList[i].Images = element.Images[entries[0]].ImgUrl;
                  } else {
                    _this25.misGroupsList[i].Images = "../../../../../../assets/img/NoImage.png";
                  }
                }
              }
            });
          } //-----------------------------------------------------Update perfil photo----------------------------------------------

        }, {
          key: "UpdatePerfilPhoto",
          value: function UpdatePerfilPhoto(Mail) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this26 = this;

              var Key, Email, query, Photoimg, _query5, _Photoimg;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      Email = Mail;
                      _context24.next = 3;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            Key = childKey;
                            user.forEach(function (info) {
                              info.forEach(function (Images) {
                                Images.forEach(function (ImgUrl) {
                                  var ImagesChildKey = ImgUrl.key;
                                  var ImagesChildData = ImgUrl.val();
                                  var filter = /https:/gm;

                                  if (ImagesChildKey == "ImgUrl") {
                                    _this26.Currentimg = ImagesChildData;
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 3:
                      if (!this.Currentimg) {
                        this.Currentimg = "../../../../../../assets/img/NoImage.png";
                        query = ".container .Photoimg";
                        Photoimg = document.querySelector(query); // const query2: string = "#app .profile";
                        // const profile: any = document.querySelector(query2);

                        Photoimg.src = this.Currentimg; // profile.src = this.Currentimg;
                      } else {
                        _query5 = ".container .Photoimg";
                        _Photoimg = document.querySelector(_query5); // const query2: string = "#app .profile";
                        // const profile: any = document.querySelector(query2);

                        _Photoimg.src = this.Currentimg; // profile.src = this.Currentimg;
                      }

                    case 4:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          } //-----------------------------------------------------End Update perfil photo--------------------------------------
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

        }, {
          key: "getNameUser",
          value: function getNameUser(Mail) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var _this27 = this;

              var Key, Email, query, _query6;

              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      Email = Mail;
                      _context25.next = 3;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            Key = childKey;

                            if (childData.lname != "" && childData.name != "") {
                              _this27.UserName = childData.name;
                              _this27.UserLastName = childData.lname;
                              _this27.FulName = _this27.UserName.concat(" " + _this27.UserLastName);
                            }
                          }
                        });
                      });

                    case 3:
                      if (this.UserName != "") {
                        query = ".container .name";
                        document.querySelector(query).innerHTML = this.FulName;
                      } else {
                        _query6 = ".container .name";
                        document.querySelector(_query6).innerHTML = "Nombre no registrado";
                        this.toastr.error("Error al buscar el nombre", "Error");
                      }

                    case 4:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          } //-----------------------------------------------------End get name----------------------------------------------
          //-----------------------------------------------------Start Send descrition------------------------------------------

        }, {
          key: "SendDescription",
          value: function SendDescription() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var query, Descript, Description, Key, Email;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      query = ".container .inputDescripcion";
                      Descript = document.querySelector(query);
                      Description = Descript.value;

                      if (!(Description != "")) {
                        _context26.next = 9;
                        break;
                      }

                      Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      _context26.next = 7;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            Key = childKey;
                          }
                        });
                      });

                    case 7:
                      this.firebase.database.ref("register").child(Key).child("Descripcion").push({
                        Descripcion: Description
                      });
                      this.toastr.success("Descripcion actualizada", "Exitosamente");

                    case 9:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          } //-----------------------------------------------------END Send descrition------------------------------------------
          //-----------------------------------------------------Start Get descrition------------------------------------------

        }, {
          key: "getDescriptionUser",
          value: function getDescriptionUser(Mail) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var _this28 = this;

              var Key, Email, _query7, element, query, Descripcion, DescripcionValue;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      // firebase.auth().currentUser.email
                      Email = Mail;
                      _context27.next = 3;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            Key = childKey;
                            user.forEach(function (info) {
                              info.forEach(function (Description) {
                                Description.forEach(function (DescriptionText) {
                                  var DescriptionChildKey = DescriptionText.key;
                                  var DescriptionChildData = DescriptionText.val();

                                  if (DescriptionChildKey == "Descripcion") {
                                    _this28.CurrentDescription = DescriptionChildData;
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 3:
                      if (this.CurrentDescription != "") {
                        _query7 = ".inputDescripcion";
                        element = document.querySelector(_query7);
                        element.value = this.CurrentDescription;
                      }

                      query = "#descripcionID";
                      Descripcion = document.querySelector(query);
                      DescripcionValue = Descripcion.value;

                      if (DescripcionValue == "undefined") {
                        DescripcionValue = "Ingresa tu descripción";
                      }

                    case 8:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          } //-----------------------------------------------------Start get Mislibros------------------------------------------

        }, {
          key: "getMisLibros",
          value: function getMisLibros() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var _this29 = this;

              var Email;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      _context28.next = 3;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        var usersData = users.val();
                        var user;
                        Object.keys(usersData).forEach(function (key) {
                          if (usersData[key].email == Email) {
                            user = usersData[key];
                          }
                        });

                        if (user.MisLibros) {
                          Object.keys(user.MisLibros).forEach(function (key) {
                            _this29.misLibrosList.push(user.MisLibros[key]);
                          });
                        }
                      });

                    case 3:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          } //-----------------------------------------------------END get Mislibros------------------------------------------

        }, {
          key: "getMisAmigos",
          value: function getMisAmigos() {
            var _this30 = this;

            var entries; // console.log("this.registerList");
            // console.log(this.registerList);

            this.misAmigosList = [];
            var Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            this.registerList.forEach(function (element, index) {
              if (Email == element.email) {
                if ("Amigos" in element) {
                  entries = Object.keys(element.Amigos);

                  for (var i = 0; i < entries.length; i++) {
                    _this30.misAmigosList.push({
                      name: element.Amigos[entries[i]].NombreAmigo
                    });
                  }
                }
              }
            });
            this.registerList.forEach(function (element, index) {
              for (var i = 0; i < _this30.misAmigosList.length; i++) {
                if (_this30.misAmigosList[i]) {
                  if (_this30.misAmigosList[i].name == element.name + " " + element.lname) {
                    _this30.misAmigosList[i].User = element.email;

                    if ("Images" in element) {
                      entries = Object.keys(element.Images);

                      var _index = entries.length - 1;

                      _this30.misAmigosList[i].Images = element.Images[entries[_index]].ImgUrl;
                    } else {
                      _this30.misAmigosList[i].Images = "../../../../../../assets/img/NoImage.png";
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "goToPerfil",
          value: function goToPerfil(email) {
            this.router.navigate(['externalProfiles', {
              email: email
            }]);
          }
        }, {
          key: "goToGroup",
          value: function goToGroup(name) {
            this.router.navigate(['groups', {
              name: name
            }]);
          } //-----------------------------------------------------Start get MisTags------------------------------------------

        }, {
          key: "getMisTags",
          value: function getMisTags() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var _this31 = this;

              var Key, Tags, keyTAGS, Email;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      Tags = {};
                      Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      _context29.next = 4;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          // console.log("entre nivel1");
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == Email) {
                            _this31.KeyUSER = childKey;
                            user.forEach(function (info) {
                              info.forEach(function (MisTags) {
                                var pruebakey = MisTags.key;
                                keyTAGS = pruebakey;
                                MisTags.forEach(function (Tag) {
                                  var TagChildKey = Tag.key;
                                  var TagChildData = Tag.val();

                                  if (TagChildKey == "Tag") {
                                    Tags = TagChildData; // console.log(aut);
                                    // this.misTagsList.push({Tags:TagChildData});

                                    if (Tags != "") {
                                      // console.log("info key");
                                      // console.log(keyTAGS);
                                      _this31.keyOrdenList.push(keyTAGS);

                                      _this31.misTagsList.push({
                                        Tags: Tags
                                      });
                                    }
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 4:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          } //-----------------------------------------------------END get MisTags------------------------------------------

        }, {
          key: "deleteSth",
          value: function deleteSth(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var index, query2, cont;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      index = i.split("-");
                      query2 = "#contTag" + index[1];
                      cont = document.querySelector(query2);
                      cont.style.display = "none";
                      this.tagService.deleteTag(this.keyOrdenList[index[1]], this.KeyUSER);
                      this.toastr.warning("Tag eliminado", "Exitosamente");

                    case 6:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "deleteBook",
          value: function deleteBook(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var query2, cont;
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      console.log("ENTRÉ"); // let index = i.split("-");

                      query2 = "#mislibros" + i;
                      console.log("QUERY", query2);
                      cont = document.querySelector(query2);
                      console.log("CONT", cont); //por el carrusel no encuentra el query2
                      // console.log(cont);
                      // cont.style.display = "none";

                      this.bookService.deleteBooks(this.keyOrdenBooksList[i], this.KeyUSER);
                      this.toastr.warning("Libro eliminado", "Exitosamente");

                    case 7:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "deleteFriend",
          value: function deleteFriend(i, deleteEmail) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var query2, cont, Email, myKey, entries, friendKey, keys;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      query2 = ".containerAmigos" + i;
                      cont = document.querySelector(query2);
                      cont.style.display = "none";
                      Email = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      this.registerList.forEach(function (element) {
                        if (element.email == Email) {
                          myKey = element.$key;

                          if ("Amigos" in element) {
                            entries = Object.values(element.Amigos);
                            keys = Object.keys(element.Amigos);

                            for (var _i6 = 0; _i6 < entries.length; _i6++) {
                              if (entries[_i6].Contacto == deleteEmail) {
                                friendKey = keys[_i6];
                              }
                            }
                          }
                        }
                      });
                      this.userService.deleteFriends(friendKey, myKey);
                      this.toastr.error("Amigo eliminado", "Exitosamente");

                    case 7:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "editUserName",
          value: function editUserName(register) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var variable;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      this.userService.updateUsername(variable);

                    case 1:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_13__["TagService"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 39,
        vars: 5,
        consts: [[1, "app"], [1, "container", 3, "formGroup"], [1, "perfilContainer"], [1, "photoContainer"], [3, "imgUrlEmitter"], ["src", "../../../../../../assets/img/NoImage.png", "srcset", "", "alt", "", "id", "img", 1, "Photoimg"], [1, "ContainerDescription"], [1, "name"], ["id", "descripcionID", "formControlName", "descripcion", "type", "text", 1, "inputDescripcion"], ["for", "descripcion"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", 3, "click"], [1, "tagsContainer"], [1, "name", 2, "margin-top", "20px"], [1, "table"], ["scope", "col", 2, "color", "#205493"], [3, "id", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", "width", "max-content", 3, "click"], [1, "librosContainer"], [1, "name", 2, "margin-top", "40px"], [4, "ngFor", "ngForOf"], ["id", "friendsContainer", 3, "class", 4, "ngFor", "ngForOf"], [3, "id"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", 1, "tagImg", 3, "id", "click"], ["ngbSlide", "", 3, "id"], [1, "picsum-img-wrapper", 3, "click"], ["alt", "Random first slide", 1, "portadaImg", 3, "id", "src"], [1, "carousel-caption", 2, "z-index", "0"], ["align", "center", 3, "id"], ["align", "center", 2, "margin-bottom", "10px", 3, "id"], ["id", "friendsContainer"], ["alt", "foto", 1, "friendImg", 3, "id", "src", "click"], [1, "friendsName", 3, "click"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", 1, "tagImg2", 3, "id", "click"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", 1, "tagImg2", 3, "id"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-file-upload", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imgUrlEmitter", function ProfileComponent_Template_app_file_upload_imgUrlEmitter_5_listener($event) {
              return ctx.getImg($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "h1", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "textarea", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_11_listener() {
              return ctx.SendDescription();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Actualizar descripci\xF3n");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_25_listener() {
              return ctx.goToTags();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "A\xF1adir nuevos tags");

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavigationBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_15__["FileUploadComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]],
        styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  overflow-y: hidden;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-align: center;\n  margin-top: 10px;\n  color: #205493;\n  align-self: center;\n}\n\n.perfilContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-top: 100px;\n}\n\n.Photoimg[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border-radius: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 3px solid #112e51;\n}\n\n.app[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 80px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 80px;\n}\n\n.container[_ngcontent-%COMP%]   .ContainerDescription[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.container[_ngcontent-%COMP%]   .inputDescripcion[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 80vw;\n  height: 100px;\n  border-radius: 20px;\n  padding: 10px;\n  text-overflow: ellipsis;\n  word-break: break-word;\n}\n\n.container[_ngcontent-%COMP%]   .tagsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-top: 20px;\n  width: 80%;\n}\n\n.container[_ngcontent-%COMP%]   .tagsContainer[_ngcontent-%COMP%]   #titleTag[_ngcontent-%COMP%] {\n  color: #0071bc;\n  font-size: large;\n}\n\n.container[_ngcontent-%COMP%]   .tagImg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  right: 0px;\n  top: 5px;\n}\n\n.container[_ngcontent-%COMP%]   .Editimg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.container[_ngcontent-%COMP%]   .portadaImg[_ngcontent-%COMP%] {\n  width: 300px;\n  \n  height: 500px;\n  \n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.container[_ngcontent-%COMP%]   #friendsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center !important;\n  justify-content: center;\n  flex-flow: row nowrap;\n  vertical-align: center;\n  width: 80%;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.container[_ngcontent-%COMP%]   #friendsContainer[_ngcontent-%COMP%]   .friendsName[_ngcontent-%COMP%] {\n  color: #0071bc;\n  font-size: large;\n  text-align: center;\n  text-justify: center;\n  align-self: center;\n  margin-left: 10px;\n  vertical-align: middle;\n  padding-top: 10px;\n}\n\n.container[_ngcontent-%COMP%]   #friendsContainer[_ngcontent-%COMP%]   .tagImg2[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.friendImg[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-radius: 100%;\n  border: solid 1px #212121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBUlU7RUFTVixrQkFBQTtBQUpGOztBQU9BO0VBRUUsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHlCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFPQTtFQUVFLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFPRTtFQUVFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFOSjs7QUFVRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUtBLHVCQUFBO0VBRUEsc0JBQUE7QUFkSjs7QUFpQkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0FBaEJKOztBQWtCSTtFQUNFLGNBaEZNO0VBaUZOLGdCQUFBO0FBaEJOOztBQW1CRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBR0EsVUFBQTtFQUNBLFFBQUE7QUFuQko7O0FBdUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFyQko7O0FBd0JFO0VBQ0UsWUFBQTtFQUFjLHVCQUFBO0VBQ2QsYUFBQTtFQUFlLHdCQUFBO0VBQ2Ysb0JBQUE7S0FBQSxpQkFBQTtBQXBCSjs7QUF1QkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7QUF2Qko7O0FBeUJJO0VBQ0UsY0F2SE07RUF3SE4sZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFJQSxpQkFBQTtFQUVBLHNCQUFBO0VBQ0EsaUJBQUE7QUEzQk47O0FBOEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTVCTjs7QUFvQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFqQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcml2YXRlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4kYXp1bE9zY3VybzogIzExMmU1MTtcclxuJEF6dWxNZWRpbzogIzIwNTQ5MztcclxuJEF6dWxDbGFybzogIzAwNzFiYztcclxuJHRleHQ6ICMyMTIxMjE7XHJcblxyXG4ubmFtZSB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiAkQXp1bE1lZGlvO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLnBlcmZpbENvbnRhaW5lciB7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5QaG90b2ltZyB7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNzVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXI6IDNweCBzb2xpZCAkYXp1bE9zY3VybztcclxufVxyXG5cclxuLmFwcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gIC5Db250YWluZXJEZXNjcmlwdGlvbiB7XHJcbiAgICAvLyB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICB9XHJcblxyXG4gIC5pbnB1dERlc2NyaXBjaW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgLy8gb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAvLyB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICB9XHJcblxyXG4gIC50YWdzQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAjdGl0bGVUYWcge1xyXG4gICAgICBjb2xvcjogJEF6dWxDbGFybztcclxuICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnRhZ0ltZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHotaW5kZXg6IDVcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIC8vIGxlZnQ6IC01MHB4O1xyXG4gICAgLy8gdG9wOiA4MHB4O1xyXG4gIH1cclxuICAuRWRpdGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gIC5wb3J0YWRhSW1nIHtcclxuICAgIHdpZHRoOiAzMDBweDsgLyogd2lkdGggb2YgY29udGFpbmVyICovXHJcbiAgICBoZWlnaHQ6IDUwMHB4OyAvKiBoZWlnaHQgb2YgY29udGFpbmVyICovXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gICNmcmllbmRzQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgIC5mcmllbmRzTmFtZSB7XHJcbiAgICAgIGNvbG9yOiAkQXp1bENsYXJvO1xyXG4gICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIC8vIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgLy8gbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50YWdJbWcyIHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgLy8gei1pbmRleDogNVxyXG4gICAgICAvLyBsZWZ0OiAtNTBweDtcclxuICAgICAgLy8gdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZnJpZW5kSW1nIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCAkdGV4dDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "app-profile",
            templateUrl: "./profile.component.html",
            styleUrls: ["./profile.component.scss"]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
          }, {
            type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_8__["BookService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }, {
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]
          }, {
            type: src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]
          }, {
            type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_13__["TagService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "k51J":
    /*!*******************************************!*\
      !*** ./src/app/pipes/filter-tags.pipe.ts ***!
      \*******************************************/

    /*! exports provided: FilterTagsPipe */

    /***/
    function k51J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterTagsPipe", function () {
        return FilterTagsPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilterTagsPipe = /*#__PURE__*/function () {
        function FilterTagsPipe() {
          _classCallCheck(this, FilterTagsPipe);
        }

        _createClass(FilterTagsPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (args === '') {
              return value;
            }

            var resultSearchBox = [];

            var _iterator2 = _createForOfIteratorHelper(value),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var post = _step2.value;

                if (post.Categoria.toLowerCase().indexOf(args.toLowerCase()) > -1) {
                  resultSearchBox.push(post);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return resultSearchBox;
          }
        }]);

        return FilterTagsPipe;
      }();

      FilterTagsPipe.ɵfac = function FilterTagsPipe_Factory(t) {
        return new (t || FilterTagsPipe)();
      };

      FilterTagsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filterTags",
        type: FilterTagsPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterTagsPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filterTags'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lBcp":
    /*!*****************************************!*\
      !*** ./src/app/services/tag.service.ts ***!
      \*****************************************/

    /*! exports provided: TagService */

    /***/
    function lBcp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagService", function () {
        return TagService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");

      var TagService = /*#__PURE__*/function () {
        function TagService(firebase) {
          _classCallCheck(this, TagService);

          this.firebase = firebase;
        }

        _createClass(TagService, [{
          key: "getTags",
          value: function getTags() {
            this.tagsList = this.firebase.list('tags');
            return this.tagsList;
          }
        }, {
          key: "deleteTag",
          value: function deleteTag(tagkey, $key) {
            console.log("delete $key");
            console.log(tagkey);
            this.firebase.database.ref("register").child($key).child("Tags").child(tagkey).remove();
          }
        }, {
          key: "deleteIntegrant",
          value: function deleteIntegrant(tagkey, $key) {
            console.log("delete $key");
            console.log(tagkey);
            this.firebase.database.ref("register").child($key).child("Groups").child(tagkey).remove();
          }
        }]);

        return TagService;
      }();

      TagService.ɵfac = function TagService_Factory(t) {
        return new (t || TagService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]));
      };

      TagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TagService,
        factory: TagService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(firebaseAuth) {
          _classCallCheck(this, AuthService);

          this.firebaseAuth = firebaseAuth;
        }

        _createClass(AuthService, [{
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();

                    case 2:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mLow":
    /*!********************************************************!*\
      !*** ./src/app/pages/private/group/group.component.ts ***!
      \********************************************************/

    /*! exports provided: GroupComponent */

    /***/
    function mLow(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupComponent", function () {
        return GroupComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tag.service */
      "lBcp");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../navigation-bar/navigation-bar.component */
      "L0k6");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../footer/footer.component */
      "oTol");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "t34c");
      /* harmony import */


      var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../file-upload/file-upload.component */
      "YtdO");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../pipes/filter-external-profiles.pipe */
      "v5hE");

      function GroupComponent_div_3_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_3_div_12_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var user_r6 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.viewExternalGroup(user_r6.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_3_div_12_Template_h1_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var user_r6 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r10.viewExternalGroup(user_r6.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_3_div_12_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var user_r6 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r11.viewExternalGroup(user_r6.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Ver Grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

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
        }
      }

      function GroupComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Buscar un Nuevo Grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_3_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.createGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Crear grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_3_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.searchGroupF();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Buscar grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Mis grupos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Buscar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupComponent_div_3_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.searchBoxExternal = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, GroupComponent_div_3_div_12_Template, 9, 6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "filterExternalProfiles");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.searchBoxExternal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 2, ctx_r0.myGroups, ctx_r0.searchBoxExternal));
        }
      }

      function GroupComponent_form_6_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var amigos_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", amigos_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](amigos_r18);
        }
      }

      function GroupComponent_form_6_option_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tags_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tags_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tags_r19);
        }
      }

      function GroupComponent_form_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_form_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Volver");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupComponent_form_6_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.owner = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Descripci\xF3n");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "P\xFAblico");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_form_6_Template_button_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Crear Grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.ngForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.owner);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.amigosList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.tagsList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.ngForm.invalid);
        }
      }

      function GroupComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-file-upload", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imgUrlEmitter", function GroupComponent_div_7_Template_app_file_upload_imgUrlEmitter_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24.getImg($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.Currentimg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function GroupComponent_div_10_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_10_div_8_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

            var user_r27 = ctx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r29.viewExternalGroup(user_r27.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_10_div_8_Template_h1_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

            var user_r27 = ctx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r31.viewExternalGroup(user_r27.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_10_div_8_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

            var user_r27 = ctx.$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r32.viewExternalGroup(user_r27.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Ver Grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r27 = ctx.$implicit;
          var i_r28 = ctx.index;

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
        }
      }

      function GroupComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_10_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r33.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Volver");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Encuentra grupos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Buscar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupComponent_div_10_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r35.searchBoxExternal = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GroupComponent_div_10_div_8_Template, 11, 8, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "filterExternalProfiles");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.searchBoxExternal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 2, ctx_r3.groupList, ctx_r3.searchBoxExternal));
        }
      }

      function GroupComponent_div_13_div_1_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r48.addToTheGroup(select_r37.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingresar al grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GroupComponent_div_13_div_1_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53);

            var select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r51.quitGroup(select_r37.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Abandonar grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GroupComponent_div_13_div_1_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "textarea", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupComponent_div_13_div_1_div_14_Template_textarea_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r54.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r40.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](select_r37.description);
        }
      }

      function GroupComponent_div_13_div_1_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "textarea", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupComponent_div_13_div_1_div_15_Template_textarea_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r57.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r41.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](select_r37.description);
        }
      }

      function GroupComponent_div_13_div_1_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62);

            var select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r60.SendDescription(select_r37.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Actualizar descripci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GroupComponent_div_13_div_1_div_29_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Eliminar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GroupComponent_div_13_div_1_div_29_tr_10_th_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_div_29_tr_10_th_4_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var integrantes_r65 = ctx_r69.$implicit;
            var i_r66 = ctx_r69.index;

            var select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r68.deleteSth(integrantes_r65, select_r37.name, i_r66);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r66);
        }
      }

      function GroupComponent_div_13_div_1_div_29_tr_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GroupComponent_div_13_div_1_div_29_tr_10_th_4_Template, 2, 1, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var integrantes_r65 = ctx.$implicit;
          var i_r66 = ctx.index;

          var select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "intregante" + i_r66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](integrantes_r65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner == ctx_r64.owner);
        }
      }

      function GroupComponent_div_13_div_1_div_29_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner == ctx_r43.owner);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r43.selectedIntegrants);
        }
      }

      function GroupComponent_div_13_div_1_th_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Eliminar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GroupComponent_div_13_div_1_tr_38_th_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_tr_38_th_4_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80);

            var i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r78.deleteSth("eliminate-" + i_r76);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r76);
        }
      }

      function GroupComponent_div_13_div_1_tr_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GroupComponent_div_13_div_1_tr_38_th_4_Template, 2, 1, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var grouptags_r75 = ctx.$implicit;
          var i_r76 = ctx.index;

          var select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "contTag" + i_r76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "mitag" + i_r76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](grouptags_r75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", select_r37.owner == ctx_r45.owner);
        }
      }

      function GroupComponent_div_13_div_1_button_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_button_40_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r83.goToTags();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "A\xF1adir nuevos tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GroupComponent_div_13_div_1_div_41_h1_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Libros del grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GroupComponent_div_13_div_1_div_41_3_ng_template_0_img_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_div_41_3_ng_template_0_img_1_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93);

            var i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r91.deleteBook("eliminate-" + i_r88);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "eliminate" + i_r88);
        }
      }

      function GroupComponent_div_13_div_1_div_41_3_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GroupComponent_div_13_div_1_div_41_3_ng_template_0_img_1_Template, 1, 1, "img", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_div_41_3_ng_template_0_Template_div_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97);

            var i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r95.goToBook(i_r88);
          });

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
        }

        if (rf & 2) {
          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var i_r88 = ctx_r99.index;
          var librosGrupo_r87 = ctx_r99.$implicit;

          var select_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

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
        }
      }

      function GroupComponent_div_13_div_1_div_41_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GroupComponent_div_13_div_1_div_41_3_ng_template_0_Template, 10, 7, "ng-template", 86);
        }

        if (rf & 2) {
          var i_r88 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "librosGrupo" + i_r88);
        }
      }

      function GroupComponent_div_13_div_1_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GroupComponent_div_13_div_1_div_41_h1_1_Template, 2, 0, "h1", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ngb-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GroupComponent_div_13_div_1_div_41_3_Template, 1, 1, undefined, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r47.librosGrupo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r47.librosGrupo);
        }
      }

      function GroupComponent_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_div_13_div_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101);

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r100.goBack();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Descripci\xF3n");

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
        }

        if (rf & 2) {
          var select_r37 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

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
        }
      }

      function GroupComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GroupComponent_div_13_div_1_Template, 42, 14, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.selectedGroup);
        }
      }

      var GroupComponent = /*#__PURE__*/function () {
        function GroupComponent(tagService, firebase, toastr, userService, route, router) {
          _classCallCheck(this, GroupComponent);

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
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
        }

        _createClass(GroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this32 = this;

            var $this = this;
            this.tagService.getTags().snapshotChanges().subscribe(function (item) {
              _this32.tagsList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;

                _this32.tagsList.push(x);
              });
              _this32.tagsList = Object.values(_this32.tagsList[0]);
            });
            this.userService.getGroups().snapshotChanges().subscribe(function (item) {
              _this32.groupList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;

                _this32.groupList.push(x);
              });

              _this32.archieveGroups(_this32.groupList);

              _this32.getImgGroups();
            });
            this.userService.getRegister().snapshotChanges().subscribe(function (item) {
              _this32.registerList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;

                _this32.registerList.push(x);
              });

              _this32.getMygroups();

              _this32.getAmigos();
            });
            setTimeout(function () {
              $this.name = $this.route.snapshot.paramMap.get("name");

              if ($this.name) {
                $this.viewExternalGroup($this.name);
              }
            }, 1000);
          }
        }, {
          key: "getUrl",
          value: function getUrl(event) {
            this.fileUrl = event;
          }
        }, {
          key: "getImg",
          value: function getImg(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      this.ImgUrl = event;
                      _context35.next = 3;
                      return this.SendImage();

                    case 3:
                      _context35.next = 5;
                      return this.UpdatePerfilPhoto();

                    case 5:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          }
        }, {
          key: "createGroup",
          value: function createGroup() {
            this.firstPage = false;
            this.viewCreateGroup = true;
            this.ngForm.reset();
          }
        }, {
          key: "searchGroupF",
          value: function searchGroupF() {
            this.viewsearchGroup = true;
            this.firstPage = false;
            this.nextImage = false;
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.firstPage = true;
            this.viewsearchGroup = false;
            this.viewCreateGroup = false;
            this.nextImage = false;
            this.viewsearchGroup = false;
            this.viewInsideGroup = false;
          }
        }, {
          key: "getMygroups",
          value: function getMygroups() {
            var _this33 = this;

            var entries;
            this.owner = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            this.registerList.forEach(function (element, index) {
              if (element.email == _this33.owner) {
                if ("Groups" in element) {
                  entries = Object.keys(element.Groups);

                  for (var i = 0; i < entries.length; i++) {
                    _this33.myGroups.push({
                      name: element.Groups[entries[i]].groupName
                    });
                  }
                }
              }
            });

            if (this.groupList) {
              this.groupList.forEach(function (element, index) {
                for (var i = 0; i < _this33.myGroups.length; i++) {
                  if (_this33.myGroups[i].name == element.name) {
                    if ("Images" in element) {
                      entries = Object.keys(element.Images);
                      _this33.myGroups[i].Images = element.Images;
                    } else {
                      _this33.myGroups[i].Images = "../../../../../../assets/img/NoImage.png";
                    }

                    _this33.myGroups[i].description = element.description;
                  }
                }
              });
            }
          }
        }, {
          key: "archieveGroups",
          value: function archieveGroups(arr) {
            this.groupList = arr;
          }
        }, {
          key: "getImgGroups",
          value: function getImgGroups() {
            var _this34 = this;

            var entries;
            this.groupList.forEach(function (element, index) {
              if ("Images" in element) {
                entries = Object.keys(element.Images);
                _this34.groupList[index].Images = element.Images[entries[0]].ImgUrl;
              } else {
                _this34.groupList[index].Images = "../../../../../../assets/img/NoImage.png";
              }
            });
          }
        }, {
          key: "SendDescription",
          value: function SendDescription(nombreGrupo) {
            var groupKey;
            console.log("this.descripcion");
            console.log(this.descripcion);
            this.groupList.forEach(function (element) {
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
        }, {
          key: "quitGroup",
          value: function quitGroup(nombreGrupo) {
            var _this35 = this;

            var entries;
            var keyTodelete;
            var keys;
            var groupKey;
            this.groupList.forEach(function (element) {
              if (element.name == nombreGrupo) {
                groupKey = element.$key;
                console.log("groupKey");
                console.log(groupKey);

                if ("integrants" in element) {
                  entries = Object.values(element.integrants);
                  keys = Object.keys(element.integrants);

                  for (var i = 0; i < entries.length; i++) {
                    if (entries[i].name == _this35.userName) {
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

            for (var i = 0; i < this.selectedIntegrants.length; i++) {
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
        }, {
          key: "addToTheGroup",
          value: function addToTheGroup(nombreGrupo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              var _this36 = this;

              var key, keygroup, nombre, entries, integrantes, estoy, i;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      this.owner = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      integrantes = [];
                      _context36.next = 4;
                      return this.firebase.database.ref("register").once("value", function (users, index) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == _this36.owner) {
                            key = childKey;
                            nombre = childData.name + " " + childData.lname;
                          }
                        });
                      });

                    case 4:
                      _context36.next = 6;
                      return this.firebase.database.ref("groups").once("value", function (users, index) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.name == nombreGrupo) {
                            keygroup = childKey;
                          }
                        });
                      });

                    case 6:
                      this.groupList.forEach(function (element, index) {
                        if ("integrants" in element) {
                          entries = Object.values(element.integrants);

                          for (var i = 0; i < entries.length; i++) {
                            integrantes.push(entries[i].name);
                          }
                        }
                      });

                      for (i = 0; i < integrantes.length; i++) {
                        if (integrantes[i] != nombre) {
                          estoy = false;
                        } else {
                          estoy = true;
                        }
                      }

                      if (estoy == false) {
                        this.firebase.database.ref("register").child(key).child("Groups").push({
                          groupName: nombreGrupo,
                          category: "integrant"
                        });
                        this.firebase.database.ref("groups").child(keygroup).child("integrants").push({
                          name: nombre
                        });
                        this.toastr.success('Te agregaste a este grupo', 'Exitosamente', {
                          positionClass: 'toast-top-center'
                        });
                        this.selectedIntegrants.push(nombre);
                        this.permisoAdd = false;
                        this.permisoVisual = true;
                      } else {
                        this.toastr.error('Ya estas en este grupo', '', {
                          positionClass: 'toast-top-center'
                        });
                      }

                    case 9:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));
          }
        }, {
          key: "viewExternalGroup",
          value: function viewExternalGroup(name) {
            var _this37 = this;

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
            var activeUser = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
            var temp = [];
            var entries;
            var entriesIntegrants;
            this.groupList.forEach(function (element, index) {
              if (_this37.groupList[index].name == name) {
                if ("integrants" in element) {
                  entriesIntegrants = Object.values(element.integrants);

                  for (var i = 0; i < entriesIntegrants.length; i++) {
                    _this37.selectedIntegrants.push(entriesIntegrants[i].name);
                  }
                }

                _this37.openedGruop = name;
                entries = Object.keys(element.Images);

                _this37.selectedGroup.push(element);

                _this37.descripcion = element.description;

                _this37.selectedTags.push(Object.values(element.tags));

                if (element.books) {
                  temp.push(Object.values(element.books));
                }
              }
            });
            this.librosGrupo = temp[0]; // console.log("libros grupo",this.librosGrupo);

            this.registerList.forEach(function (element, index) {
              for (var i = 0; i < _this37.groupList.length; i++) {
                if (_this37.selectedGroup[0].owner == element.email) {
                  _this37.nameOwner = element.name + " " + element.lname;
                }

                if (activeUser == element.email) {
                  _this37.userName = element.name + " " + element.lname;
                }
              }
            });

            for (var i = 0; i < this.selectedIntegrants.length; i++) {
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
        }, {
          key: "goToPerfil",
          value: function goToPerfil(email) {
            this.router.navigate(['externalProfiles', {
              email: email
            }]);
          }
        }, {
          key: "goToBook",
          value: function goToBook(i) {
            // console.log("CLICK LIBRO",this.librosGrupo[i]);
            // console.log("GRUPO",this.openedGruop);
            this.router.navigate(['/book', {
              Pag: this.librosGrupo[i].pag,
              title: this.librosGrupo[i].Titulo,
              url: this.librosGrupo[i].alink,
              group: this.openedGruop
            }]);
          }
        }, {
          key: "getAmigos",
          value: function getAmigos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              var _this38 = this;

              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      this.owner = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      this.amigosList = [];
                      _context37.next = 4;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          var childData = user.val();

                          if (childData.email == _this38.owner) {
                            user.forEach(function (info) {
                              info.forEach(function (MisAmigos) {
                                MisAmigos.forEach(function (Amigos) {
                                  var AmigosChildKey = Amigos.key;
                                  var AmigosChildData = Amigos.val();

                                  if (AmigosChildKey == "NombreAmigo") {
                                    _this38.amigosList.push(AmigosChildData);
                                  }

                                  if (AmigosChildKey == "Contacto") {
                                    _this38.amigosEmails.push(AmigosChildData);
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 4:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));
          }
        }, {
          key: "deleteSth",
          value: function deleteSth(integrante, nombreGrupo, id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              var KeyUSER, Keygroup, integrant;
              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      _context38.next = 2;
                      return this.firebase.database.ref("register").once("value", function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.name + " " + childData.lname == integrante[0]) {
                            KeyUSER = childKey;
                            user.forEach(function (info) {
                              info.forEach(function (MisGrupos) {
                                var MisgruposChildKey = MisGrupos.key;
                                MisGrupos.forEach(function (Groups) {
                                  var GroupsChildKey = Groups.key;
                                  var GroupsChildData = Groups.val();

                                  if (GroupsChildKey == "groupName" && GroupsChildData == nombreGrupo) {
                                    Keygroup = MisgruposChildKey;
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 2:
                      integrant = document.getElementById("integrante" + id);
                      integrant.style.display = 'none';
                      this.tagService.deleteIntegrant(Keygroup, KeyUSER);
                      this.toastr.error('Integrante eliminado', 'Exitosamente');

                    case 6:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
              var _this39 = this;

              var nombreGrupo, integrant, nameExist, keyOwner, keyGroup, keyIntegrants, contador, i, _i7;

              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      this.owner = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.email;
                      nombreGrupo = this.ngForm.controls.name.value;
                      integrant = this.ngForm.controls.integrants.value;
                      nameExist = this.groupList.find(function (group) {
                        return group.name == nombreGrupo;
                      });
                      keyIntegrants = [];
                      contador = 0;

                      if (!nameExist) {
                        _context39.next = 10;
                        break;
                      }

                      this.toastr.error('Ese nombre ya esta registrado', 'Intenta otro nombre', {
                        positionClass: 'toast-top-center'
                      });
                      _context39.next = 20;
                      break;

                    case 10:
                      this.toastr.success('El grupo ha sido creado', 'Exitosamente', {
                        positionClass: 'toast-top-center'
                      });
                      this.userService.createGroup(this.ngForm.value);
                      this.nextImage = true;
                      _context39.next = 15;
                      return this.firebase.database.ref("register").once("value", function (users, index) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.email == _this39.owner) {
                            keyOwner = childKey;
                          }

                          if (childData.email == _this39.amigosEmails[contador]) {
                            contador++;
                            keyIntegrants.push(childKey);
                          }
                        });
                      });

                    case 15:
                      _context39.next = 17;
                      return this.firebase.database.ref("groups").once("value", function (users, index) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.name == nombreGrupo) {
                            keyGroup = childKey;
                          }
                        });
                      });

                    case 17:
                      if (keyGroup) {
                        for (i = 0; i < integrant.length; i++) {
                          this.firebase.database.ref("groups").child(keyGroup).child("integrants").push({
                            name: integrant[i]
                          });
                        }
                      }

                      if (keyOwner) {
                        this.firebase.database.ref("register").child(keyOwner).child("Groups").push({
                          groupName: nombreGrupo,
                          category: "owner"
                        });
                      }

                      for (_i7 = 0; _i7 < keyIntegrants.length; _i7++) {
                        this.firebase.database.ref("register").child(keyIntegrants[_i7]).child("Groups").push({
                          groupName: nombreGrupo,
                          category: "integrant"
                        });
                      }

                    case 20:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));
          }
        }, {
          key: "SendImage",
          value: function SendImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              var nombreGrupo, Key;
              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      nombreGrupo = this.ngForm.controls.name.value;

                      if (!this.ImgUrl) {
                        _context40.next = 6;
                        break;
                      }

                      _context40.next = 4;
                      return this.firebase.database.ref("groups").once("value", function (groups) {
                        groups.forEach(function (group) {
                          var childKey = group.key;
                          var childData = group.val();

                          if (childData.name == nombreGrupo) {
                            Key = childKey;
                          }
                        });
                      });

                    case 4:
                      this.firebase.database.ref("groups").child(Key).child("Images").push({
                        ImgUrl: this.ImgUrl
                      });
                      this.toastr.success('Foto subida', 'Exitosamente');

                    case 6:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this);
            }));
          }
        }, {
          key: "UpdatePerfilPhoto",
          value: function UpdatePerfilPhoto() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              var _this40 = this;

              var nombreGrupo, Key;
              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      nombreGrupo = this.ngForm.controls.name.value;
                      _context41.next = 3;
                      return this.firebase.database.ref("groups").once("value", function (users) {
                        users.forEach(function (user) {
                          var childKey = user.key;
                          var childData = user.val();

                          if (childData.name == nombreGrupo) {
                            Key = childKey;
                            user.forEach(function (info) {
                              info.forEach(function (Images) {
                                Images.forEach(function (ImgUrl) {
                                  var ImagesChildKey = ImgUrl.key;
                                  var ImagesChildData = ImgUrl.val();

                                  if (ImagesChildKey == "ImgUrl") {
                                    _this40.Currentimg = ImagesChildData;
                                  }
                                });
                              });
                            });
                          }
                        });
                      });

                    case 3:
                      if (!this.Currentimg) {
                        this.Currentimg = "../../../../../../assets/img/NoImage.png";
                      }

                    case 4:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));
          }
        }]);

        return GroupComponent;
      }();

      GroupComponent.ɵfac = function GroupComponent_Factory(t) {
        return new (t || GroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
      };

      GroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GroupComponent,
        selectors: [["app-group"]],
        decls: 15,
        vars: 5,
        consts: [[1, "app"], [1, "containerComponents"], ["style", "margin-top: 20% !important;", "class", "containerButtons", 4, "ngIf"], ["class", "forms", "style", "margin-top: 15px;", 3, "formGroup", 4, "ngIf"], [4, "ngIf"], [1, "app", 2, "margin-top", "-80px"], ["class", "containerSearchGroups", 4, "ngIf"], [1, "app", 2, "margin-top", "-80px", "padding-bottom", "30px"], ["class", "groupContainer", 4, "ngIf"], [1, "containerButtons", 2, "margin-top", "20% !important"], [1, "name"], ["id", "boton", 1, "button", "is-info", 3, "click"], [1, "button", "is-info", 3, "click"], [1, "name", 2, "margin-top", "30px"], [1, "subName", 2, "font-size", "large"], ["type", "text", "name", "searchBoxExternal", "placeholder", "", 3, "ngModel", "ngModelChange"], ["class", "card", "style", "width: 18rem; margin-top: 15px;", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem", "margin-top", "15px"], ["alt", "Card image cap", "alt", "imagenes", 1, "groupImg", 3, "id", "src", "click"], [1, "card-body"], ["align", "center", 1, "card-title", 3, "id", "click"], ["align", "center", 1, "card-text", 3, "id"], [1, "button", "is-info", 2, "margin-right", "10px", 3, "click"], [1, "forms", 2, "margin-top", "15px", 3, "formGroup"], ["id", "volver", 1, "button", "is-info", 2, "align-self", "left", 3, "click"], ["formControlName", "owner", "type", "text", 1, "input", 2, "display", "none", 3, "ngModel", "ngModelChange"], ["for", "name", 1, "subName"], [1, "field"], ["formControlName", "name", "type", "text", "placeholder", "Nombre del Grupo", "required", "", 1, "input"], ["for", "description", 1, "subName"], ["type", "text", "formControlName", "description", "placeholder", "Descripci\xF3n", "required", "", 1, "input"], ["for", "tags", 1, "subName"], [1, "field", 2, "height", "15vh"], ["id", "select", "required", "", "formControlName", "integrants", "multiple", "", 2, "height", "100%"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "privacity", 1, "subName"], ["id", "select", "required", "", "formControlName", "privacity"], ["value", "publico"], ["value", "privado"], [1, "field", 2, "height", "25vh"], ["id", "select", "required", "", "formControlName", "tags", "multiple", "", 2, "height", "100%"], [1, "registrar", 2, "padding-bottom", "20px", "padding-top", "5px"], [1, "buttons"], ["type", "submit", 1, "button", "is-info", 3, "disabled", "click"], [3, "value"], [3, "imgUrlEmitter"], ["srcset", "", "alt", "", "id", "img", 1, "createGroupPhotoimg", 3, "src"], [1, "containerSearchGroups"], ["id", "name", 1, "name", 2, "margin-top", "10px"], ["type", "text", "name", "searchBoxExternal", "placeholder", "Buscar", 2, "margin-bottom", "10px", 3, "ngModel", "ngModelChange"], ["class", "card", "style", "width: 18rem; margin-bottom: 15px;", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem", "margin-bottom", "15px"], [1, "groupContainer"], [4, "ngFor", "ngForOf"], [1, "photoContainer"], ["srcset", "", "alt", "", "id", "img", 1, "Photoimg", 3, "src"], [1, "ContainerDescription", 2, "margin-top", "10px"], ["type", "submit", "class", "button is-info", "style", "padding: 5px; ", 3, "click", 4, "ngIf"], ["type", "submit", "class", "button is-danger", "style", "padding: 5px;", 3, "click", 4, "ngIf"], [1, "container"], [1, "integrants"], [1, "buttons", 2, "width", "100%"], ["type", "submit", "class", "button is-info", 3, "click", 4, "ngIf"], [1, "ownerContainer"], [1, "table"], ["scope", "col", 2, "color", "#205493"], [3, "id"], ["class", "integrantsContainer", 4, "ngIf"], [1, "tagsContainer"], ["scope", "col", "style", "color: #205493;", 4, "ngIf"], [3, "id", 4, "ngFor", "ngForOf"], ["type", "submit", "class", "button is-info", "style", "padding: 5px; width: max-content;", 3, "click", 4, "ngIf"], ["class", "librosContainer", 4, "ngIf"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", 3, "click"], ["type", "submit", 1, "button", "is-danger", 2, "padding", "5px", 3, "click"], ["type", "text", 1, "inputDescripcion", 3, "ngModel", "ngModelChange"], ["disabled", "", "type", "text", 1, "inputDescripcion", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "button", "is-info", 3, "click"], [1, "integrantsContainer"], [1, "integrants", 2, "margin-top", "20px"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", 1, "tagImg", 3, "id", "click"], ["type", "submit", 1, "button", "is-info", 2, "padding", "5px", "width", "max-content", 3, "click"], [1, "librosContainer"], ["class", "name", "style", "margin-top: 40px;", 4, "ngIf"], [1, "name", 2, "margin-top", "40px"], ["ngbSlide", "", 3, "id"], [1, "eliminate"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", "class", "tagImg", "style", "margin-bottom: 5px;", 3, "id", "click", 4, "ngIf"], [1, "carusel"], [1, "picsum-img-wrapper", 3, "click"], ["alt", "Random first slide", 1, "portadaImg", 3, "id", "src"], [1, "carousel-caption", 2, "z-index", "0"], ["align", "center", 3, "id"], ["align", "center", 2, "margin-bottom", "10px", 3, "id"], ["src", "../../../../assets/img/xIcon.svg", "alt", "tag", 1, "tagImg", 2, "margin-bottom", "5px", 3, "id", "click"]],
        template: function GroupComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavigationBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_12__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_13__["FileUploadComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbSlide"]],
        pipes: [_pipes_filter_external_profiles_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterExternalProfilesPipe"]],
        styles: [".app[_ngcontent-%COMP%]   .containerComponents[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  margin-bottom: 80px;\n}\n.app[_ngcontent-%COMP%]   .containerComponents[_ngcontent-%COMP%]   #boton[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-align: center;\n  color: #205493;\n  align-self: center;\n}\n.integrants[_ngcontent-%COMP%] {\n  font-size: x-large;\n  text-align: center;\n  color: #205493;\n  align-self: center;\n}\n.subName[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: large;\n  color: #205493;\n  align-self: center;\n}\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n.card-text[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n.forms[_ngcontent-%COMP%] {\n  width: 90%;\n}\n#volver[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #8f8f8f;\n  border-radius: 5px;\n}\n.registrar[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n.photoContainer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.photoContainer[_ngcontent-%COMP%]   .Photoimg[_ngcontent-%COMP%] {\n  width: 100%;\n  \n  height: 200px;\n  \n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n.inputDescripcion[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  width: 80vw;\n  height: 100px;\n  border-radius: 20px;\n  padding: 10px;\n  text-overflow: ellipsis;\n  word-break: break-word;\n}\n.carusel[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n.contanier[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  justify-content: center;\n}\n.tagImg[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n}\n.eliminate[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-flow: column wrap;\n  justify-content: center;\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ncm91cC9ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZSO0FBS1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBSFo7QUFRQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVNBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtBQVBKO0FBVUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUEo7QUFVQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFQSjtBQVVBO0VBQ0ksaUJBQUE7QUFQSjtBQVVBO0VBQ0ksaUJBQUE7QUFQSjtBQVdBO0VBQ0ksVUFBQTtBQVJKO0FBV0E7RUFDSSxlQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7QUFSSjtBQVlBO0VBQ0ksV0FBQTtFQUdBLHlCQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQWNBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVhKO0FBZUE7RUFDSSxnQkFBQTtBQVpKO0FBY0k7RUFDSSxXQUFBO0VBQWEsdUJBQUE7RUFDYixhQUFBO0VBQWUsd0JBQUE7RUFDZixvQkFBQTtLQUFBLGlCQUFBO0FBVlI7QUFjQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFYSjtBQWdCQTtFQUVJLG1CQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFLQSx1QkFBQTtFQUVBLHNCQUFBO0FBcEJKO0FBdUJBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQXBCSjtBQXVCQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQXBCSjtBQXVCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBcEJKO0FBdUJBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFwQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcml2YXRlL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XHJcbiAgICAvLyB3aWR0aDogOTAlO1xyXG5cclxuICAgIC5jb250YWluZXJDb21wb25lbnRzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhICA7XHJcblxyXG4gICAgICAgICNib3RvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICMyMDU0OTM7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnRlZ3JhbnRze1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjMjA1NDkzO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyAgXHJcbn1cclxuXHJcbi5zdWJOYW1lIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgY29sb3I6ICMyMDU0OTM7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuXHJcbi5mb3Jtc3tcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbiN2b2x2ZXJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIGRhcmtvcmNoaWQ7XHJcbn1cclxuXHJcbiNzZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGJvcmRlci1jb2xvcjogIzRmNGY0ZjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGY4ZjhmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucmVnaXN0cmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG59XHJcblxyXG5cclxuLnBob3RvQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIFxyXG4gICAgLlBob3RvaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvKiB3aWR0aCBvZiBjb250YWluZXIgKi9cclxuICAgICAgICBoZWlnaHQ6IDIwMHB4OyAvKiBoZWlnaHQgb2YgY29udGFpbmVyICovXHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG59XHJcblxyXG5cclxuXHJcbi5pbnB1dERlc2NyaXBjaW9ue1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIC8vIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBcclxufVxyXG5cclxuLmNhcnVzZWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbn1cclxuXHJcbi5jb250YW5pZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhZ0ltZ3tcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4uZWxpbWluYXRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIHdpZHRoOiA4NSU7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GroupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-group',
            templateUrl: './group.component.html',
            styleUrls: ['./group.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"]
          }, {
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "oTol":
    /*!**********************************************************!*\
      !*** ./src/app/pages/private/footer/footer.component.ts ***!
      \**********************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function oTol(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent(router) {
          _classCallCheck(this, FooterComponent);

          this.router = router;
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToProfile",
          value: function goToProfile() {
            this.router.navigate(['/profile']);
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['/home']);
          }
        }, {
          key: "goToGroups",
          value: function goToGroups() {
            this.router.navigate(['/groups']);
          }
        }, {
          key: "goToBook",
          value: function goToBook() {
            this.router.navigate(['/mybooks']);
          }
        }, {
          key: "goToExternalProfiles",
          value: function goToExternalProfiles() {
            this.router.navigate(['/externalProfiles']);
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 9,
        vars: 0,
        consts: [[1, "footer"], [1, "container"], [1, "footer-brand", "foot"], [1, "footer-item"], ["src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDQgNTEyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTI5MS4wNTcsMjQyLjgxMWMxLjUxLDIuOTUzLDQuNTE0LDQuNjU5LDcuNjIsNC42NTljMS4yOTcsMCwyLjYyOC0wLjI5OSwzLjg2Ni0wLjkzICAgICBjMC41MDMtMC4yNTYsNTAuNzMxLTI1Ljc3MSw3NS41MDMtMzMuNTk2YzQuNDg5LTEuNDI1LDYuOTgtNi4yMjEsNS41NTUtMTAuNzA5Yy0xLjQxNy00LjQ4OS02LjE3OC02Ljk4OS0xMC43MDktNS41NzIgICAgIGMtMjYuMDk1LDguMjUyLTc1Ljk4MSwzMy41OTYtNzguMDk3LDM0LjY3MUMyOTAuNTk2LDIzMy40NjcsMjg4LjkyNCwyMzguNjA1LDI5MS4wNTcsMjQyLjgxMXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTI5OC42NzcsMTQ1LjA3MWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTNjMC41MDMtMC4yNTYsNTAuNzMxLTI1Ljc3MSw3NS41MDMtMzMuNTk2ICAgICBjNC40ODktMS40MjUsNi45OC02LjIyMSw1LjU1NS0xMC43MDljLTEuNDE3LTQuNDg5LTYuMTc4LTYuOTg5LTEwLjcwOS01LjU3MmMtMjYuMDk1LDguMjUyLTc1Ljk4MSwzMy41OTYtNzguMDk3LDM0LjY3MSAgICAgYy00LjE5OCwyLjEzMy01Ljg3MSw3LjI3LTMuNzM4LDExLjQ3N0MyOTIuNTY3LDE0My4zNjQsMjk1LjU3MSwxNDUuMDcxLDI5OC42NzcsMTQ1LjA3MXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTUwMy40NjksMTI4LjAwNGMtNC43MTksMC04LjUzMywzLjgyMy04LjUzMyw4LjUzM3YzMzIuOGMwLDE0LjExNC0xMS40ODYsMjUuNi0yNS42LDI1LjZoLTIwNC44di0xOS42MzUgICAgIGMxMi40NDItNC4zNTIsNDQuODUxLTE0LjQ5OCw3Ni44LTE0LjQ5OGM3NC4zMzQsMCwxMjQuODA5LDE2LjQ2MSwxMjUuMzEyLDE2LjYzMWMyLjU2OCwwLjg1Myw1LjQzNiwwLjQyNyw3LjY4LTEuMTc4ICAgICBjMi4yMjctMS42MDQsMy41NDEtNC4xODEsMy41NDEtNi45MjFWOTMuODcxYzAtNC4wMDItMi43NzMtNy40NjctNi42ODItOC4zMjljMCwwLTYuNjktMS40OTMtMTguMTI1LTMuNTkzICAgICBjLTQuNjE3LTAuODUzLTkuMDc5LDIuMjE5LTkuOTMzLDYuODQ0Yy0wLjg1Myw0LjY0MiwyLjIxLDkuMDg4LDYuODQ0LDkuOTQxYzQuMzYxLDAuODAyLDguMDEzLDEuNTEsMTAuODI5LDIuMDc0djM1Ny4xODggICAgIGMtMTkuMzM3LTUuMDY5LTYyLjI3Ni0xNC4yNTktMTE5LjQ2Ny0xNC4yNTljLTM3LjE4LDAtNzMuNzAyLDEyLjIxMS04NS4wMDEsMTYuMzVjLTEwLjA0NC00LjQzNy00MC40MDUtMTYuMzUtNzcuMTMzLTE2LjM1ICAgICBjLTU4Ljc3OCwwLTEwNy4xOTYsOS42OTQtMTI4LDE0LjYxOFYxMDAuNDc1YzE3LjA0MS00LjE5LDY3LjM3MS0xNS4xMzgsMTI4LTE1LjEzOGMzMS4xMTMsMCw1Ny43OTYsOS42ODUsNjguMjY3LDE0LjA2M3YzMzUuODA0ICAgICBjMCwzLjA3MiwxLjY1NSw1LjkxNCw0LjMyNiw3LjQyNGMyLjY3MSwxLjUxOSw1Ljk2NSwxLjQ3Niw4LjYwMi0wLjExMWMwLjg0NS0wLjUwMyw4NS4zOTMtNTEuMDA0LDE2MC40MzUtNzYuMDE1ICAgICBjMy40OS0xLjE2OSw1LjgzNy00LjQyLDUuODM3LTguMDk4VjguNTM3YzAtMi43OTktMS4zNzQtNS40MTktMy42NzgtNy4wMTRjLTIuMjg3LTEuNTk2LTUuMjIyLTEuOTYzLTcuODU5LTAuOTgxICAgICBDMzQ2Ljg1NiwyNi4xNSwyNzcuNzcxLDY5LjE0MSwyNzcuMDc5LDY5LjU2OGMtMy45OTQsMi41LTUuMjE0LDcuNzY1LTIuNzE0LDExLjc1OWMyLjQ5MiwzLjk5NCw3Ljc1Nyw1LjIxNCwxMS43NTksMi43MTQgICAgIGMwLjYzMS0wLjQwMSw2MC43MzItMzcuNzk0LDEyMy40NzctNjMuMDI3djMzMS4yODFjLTU4LjI0OSwyMC4yNDEtMTE5LjA2Niw1My4yOTEtMTQ1LjA2Nyw2OC4wODdWOTMuODcxICAgICBjMC0zLjIzNC0xLjgyNi02LjE4Ny00LjcxOS03LjYzN2MtMS40NjgtMC43MjUtMzYuNDM3LTE3Ljk2My04MC42MTQtMTcuOTYzYy03Ny4xMDcsMC0xMzYuMzg4LDE2LjY4My0xMzguODgsMTcuMzk5ICAgICBjLTMuNjYxLDEuMDQxLTYuMTg3LDQuMzk1LTYuMTg3LDguMjAxdjM3NS40NjdjMCwyLjY3MSwxLjI2Myw1LjE5NywzLjM4OCw2LjgxYzEuNTAyLDEuMTM1LDMuMzExLDEuNzI0LDUuMTQ2LDEuNzI0ICAgICBjMC43ODUsMCwxLjU3LTAuMTExLDIuMzM4LTAuMzMzYzAuNTg5LTAuMTYyLDU5LjU5Ny0xNi43MzQsMTM0LjE5NS0xNi43MzRjMzEuMTk4LDAsNTcuODU2LDkuNzExLDY4LjI2NywxNC4wNzF2MjAuMDYyaC0yMDQuOCAgICAgYy0xNC4xMTQsMC0yNS42LTExLjQ4Ni0yNS42LTI1LjZ2LTMzMi44YzAtNC43MS0zLjgyMy04LjUzMy04LjUzMy04LjUzM3MtOC41MzMsMy44MjMtOC41MzMsOC41MzN2MzMyLjggICAgIGMwLDIzLjUyNiwxOS4xNCw0Mi42NjcsNDIuNjY3LDQyLjY2N2g0MjYuNjY3YzIzLjUyNiwwLDQyLjY2Ny0xOS4xNCw0Mi42NjctNDIuNjY3di0zMzIuOCAgICAgQzUxMi4wMDIsMTMxLjgyNyw1MDguMTg4LDEyOC4wMDQsNTAzLjQ2OSwxMjguMDA0eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjkxLjA1NywxOTEuNjExYzEuNTEsMi45NTMsNC41MTQsNC42NTksNy42Miw0LjY1OWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTMgICAgIGMwLjUwMy0wLjI1Niw1MC43MzEtMjUuNzcxLDc1LjUwMy0zMy41OTZjNC40ODktMS40MjUsNi45OC02LjIyMSw1LjU1NS0xMC43MDljLTEuNDE3LTQuNDg5LTYuMTc4LTYuOTg5LTEwLjcwOS01LjU3MiAgICAgYy0yNi4wOTUsOC4yNTItNzUuOTgxLDMzLjU5Ni03OC4wOTcsMzQuNjcxQzI5MC41OTYsMTgyLjI2NywyODguOTI0LDE4Ny40MDUsMjkxLjA1NywxOTEuNjExeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjkxLjA1NywyOTQuMDExYzEuNTEsMi45NTMsNC41MTQsNC42NTksNy42Miw0LjY1OWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTMgICAgIGMwLjUwMy0wLjI1Niw1MC43MzEtMjUuNzcxLDc1LjUwMy0zMy41OTZjNC40ODktMS40MjUsNi45OC02LjIyMSw1LjU1NS0xMC43MDljLTEuNDE3LTQuNDg5LTYuMTc4LTYuOTg5LTEwLjcwOS01LjU3MiAgICAgYy0yNi4wOTUsOC4yNTItNzUuOTgxLDMzLjU5Ni03OC4wOTcsMzQuNjcxQzI5MC41OTYsMjg0LjY2NywyODguOTI0LDI4OS44MDUsMjkxLjA1NywyOTQuMDExeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjA2Ljc0OCwxNTguMzY2Yy01Mi42OTMtMTIuMzY1LTExMi41NzIsMy4zODgtMTE1LjA4OSw0LjA2MmMtNC41NDgsMS4yMi03LjI1Myw1Ljg5Ni02LjAzMywxMC40NTMgICAgIGMxLjAyNCwzLjgxNCw0LjQ3MSw2LjMyMyw4LjIzNSw2LjMyM2MwLjczNCwwLDEuNDc2LTAuMDk0LDIuMjE5LTAuMjljMC41NzItMC4xNjIsNTguMjIzLTE1LjMyNiwxMDYuNzc4LTMuOTM0ICAgICBjNC41NjUsMS4wNjcsOS4xODItMS43NzUsMTAuMjU3LTYuMzY2QzIxNC4xODksMTY0LjAzMiwyMTEuMzM5LDE1OS40NDEsMjA2Ljc0OCwxNTguMzY2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjA2Ljc0OCwyMDkuNTY2Yy01Mi42OTMtMTIuMzU2LTExMi41NzIsMy4zODgtMTE1LjA4OSw0LjA2MmMtNC41NDgsMS4yMi03LjI1Myw1Ljg5Ny02LjAzMywxMC40NTMgICAgIGMxLjAyNCwzLjgxNCw0LjQ3MSw2LjMyMyw4LjIzNSw2LjMyM2MwLjczNCwwLDEuNDc2LTAuMDk0LDIuMjE5LTAuMjljMC41NzItMC4xNjIsNTguMjIzLTE1LjMyNiwxMDYuNzc4LTMuOTM0ICAgICBjNC41NjUsMS4wNjcsOS4xODItMS43NzUsMTAuMjU3LTYuMzY2QzIxNC4xODksMjE1LjIzMiwyMTEuMzM5LDIxMC42NDEsMjA2Ljc0OCwyMDkuNTY2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjkxLjA1NywzNDUuMjExYzEuNTEsMi45NTMsNC41MTQsNC42NTksNy42Miw0LjY1OWMxLjI5NywwLDIuNjI4LTAuMjk5LDMuODY2LTAuOTMgICAgIGMwLjUwMy0wLjI1Niw1MC43MzEtMjUuNzcxLDc1LjUwMy0zMy41OTZjNC40ODktMS40MjUsNi45OC02LjIyMSw1LjU1NS0xMC43MDljLTEuNDE3LTQuNDg4LTYuMTc4LTYuOTg5LTEwLjcwOS01LjU3MiAgICAgYy0yNi4wOTUsOC4yNTItNzUuOTgxLDMzLjU5Ni03OC4wOTcsMzQuNjcxQzI5MC41OTYsMzM1Ljg2NywyODguOTI0LDM0MS4wMDUsMjkxLjA1NywzNDUuMjExeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjA2Ljc0OCwyNjAuNzY2Yy01Mi42OTMtMTIuMzU2LTExMi41NzIsMy4zNzktMTE1LjA4OSw0LjA2MmMtNC41NDgsMS4yMi03LjI1Myw1Ljg5Ny02LjAzMywxMC40NTMgICAgIGMxLjAyNCwzLjgxNCw0LjQ3MSw2LjMzMiw4LjIzNSw2LjMzMmMwLjczNCwwLDEuNDc2LTAuMTAyLDIuMjE5LTAuMjk5YzAuNTcyLTAuMTYyLDU4LjIyMy0xNS4zMjYsMTA2Ljc3OC0zLjkzNCAgICAgYzQuNTY1LDEuMDY3LDkuMTgyLTEuNzc1LDEwLjI1Ny02LjM2NkMyMTQuMTg5LDI2Ni40MzIsMjExLjMzOSwyNjEuODQxLDIwNi43NDgsMjYwLjc2NnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTIwNi43NDgsMzYzLjE2NmMtNTIuNjkzLTEyLjM2NS0xMTIuNTcyLDMuMzg4LTExNS4wODksNC4wNjJjLTQuNTQ4LDEuMjItNy4yNTMsNS44OTctNi4wMzMsMTAuNDUzICAgICBjMS4wMjQsMy44MTQsNC40NzEsNi4zMzIsOC4yMzUsNi4zMzJjMC43MzQsMCwxLjQ3Ni0wLjEwMiwyLjIxOS0wLjI5OWMwLjU3Mi0wLjE2Miw1OC4yMjMtMTUuMzI2LDEwNi43NzgtMy45MzQgICAgIGM0LjU2NSwxLjA1OCw5LjE4Mi0xLjc3NSwxMC4yNTctNi4zNjZDMjE0LjE4OSwzNjguODMyLDIxMS4zMzksMzY0LjI0MSwyMDYuNzQ4LDM2My4xNjZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik0yMDYuNzQ4LDMxMS45NjZjLTUyLjY5My0xMi4zNjUtMTEyLjU3MiwzLjM3OS0xMTUuMDg5LDQuMDYyYy00LjU0OCwxLjIyLTcuMjUzLDUuODk3LTYuMDMzLDEwLjQ1MyAgICAgYzEuMDI0LDMuODE0LDQuNDcxLDYuMzMyLDguMjM1LDYuMzMyYzAuNzM0LDAsMS40NzYtMC4xMDIsMi4yMTktMC4yOTljMC41NzItMC4xNjIsNTguMjIzLTE1LjMyNiwxMDYuNzc4LTMuOTM0ICAgICBjNC41NjUsMS4wNjcsOS4xODItMS43NzUsMTAuMjU3LTYuMzY2QzIxNC4xODksMzE3LjYzMiwyMTEuMzM5LDMxMy4wNDEsMjA2Ljc0OCwzMTEuOTY2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+", "alt", "", 1, "imagen", 3, "click"], ["src", "../../../../assets/img/add-user.png", "alt", "", 1, "imagen", 3, "click"], ["src", "https://firebasestorage.googleapis.com/v0/b/tesisredsocial-be58f.appspot.com/o/icons%2Fhome.png?alt=media&token=511e456d-58ab-4670-928b-84f8f93e18e0", "alt", "", 1, "imagen", 3, "click"], ["src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUwNS40IDUwNS40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik00MzcuMSwyMzMuNDVjMTQuOC0xMC40LDI0LjYtMjcuNywyNC42LTQ3LjJjMC0zMS45LTI1LjgtNTcuNy01Ny43LTU3LjdjLTMxLjksMC01Ny43LDI1LjgtNTcuNyw1Ny43ICAgIGMwLDE5LjUsOS43LDM2LjgsMjQuNiw0Ny4yYy0xMi43LDQuNC0yNC4zLDExLjItMzQuMSwyMGMtMTMuNS0xMS41LTI5LjQtMjAuMy00Ni44LTI1LjVjMjEuMS0xMi44LDM1LjMtMzYuMSwzNS4zLTYyLjYgICAgYzAtNDAuNC0zMi43LTczLjEtNzMuMS03My4xYy00MC40LDAtNzMuMSwzMi44LTczLjEsNzMuMWMwLDI2LjUsMTQuMSw0OS44LDM1LjMsNjIuNmMtMTcuMiw1LjItMzIuOSwxMy45LTQ2LjMsMjUuMiAgICBjLTkuOC04LjYtMjEuMi0xNS4zLTMzLjctMTkuNmMxNC44LTEwLjQsMjQuNi0yNy43LDI0LjYtNDcuMmMwLTMxLjktMjUuOC01Ny43LTU3LjctNTcuN3MtNTcuNywyNS44LTU3LjcsNTcuNyAgICBjMCwxOS41LDkuNywzNi44LDI0LjYsNDcuMkMyOC41LDI0Ny4yNSwwLDI4NC45NSwwLDMyOS4yNXY2LjZjMCwwLjIsMC4yLDAuNCwwLjQsMC40aDEyMi4zYy0wLjcsNS41LTEuMSwxMS4yLTEuMSwxNi45djYuOCAgICBjMCwyOS40LDIzLjgsNTMuMiw1My4yLDUzLjJoMTU1YzI5LjQsMCw1My4yLTIzLjgsNTMuMi01My4ydi02LjhjMC01LjctMC40LTExLjQtMS4xLTE2LjlINTA1YzAuMiwwLDAuNC0wLjIsMC40LTAuNHYtNi42ICAgIEM1MDUuMiwyODQuODUsNDc2LjgsMjQ3LjE1LDQzNy4xLDIzMy40NXogTTM2Mi4zLDE4Ni4xNWMwLTIzLDE4LjctNDEuNyw0MS43LTQxLjdzNDEuNywxOC43LDQxLjcsNDEuNyAgICBjMCwyMi43LTE4LjMsNDEuMi00MC45LDQxLjdjLTAuMywwLTAuNSwwLTAuOCwwcy0wLjUsMC0wLjgsMEMzODAuNSwyMjcuNDUsMzYyLjMsMjA4Ljk1LDM2Mi4zLDE4Ni4xNXogTTE5NC45LDE2NS4zNSAgICBjMC0zMS41LDI1LjYtNTcuMSw1Ny4xLTU3LjFzNTcuMSwyNS42LDU3LjEsNTcuMWMwLDMwLjQtMjMuOSw1NS4zLTUzLjgsNTdjLTEuMSwwLTIuMiwwLTMuMywwYy0xLjEsMC0yLjIsMC0zLjMsMCAgICBDMjE4LjgsMjIwLjY1LDE5NC45LDE5NS43NSwxOTQuOSwxNjUuMzV6IE01OS4zLDE4Ni4xNWMwLTIzLDE4LjctNDEuNyw0MS43LTQxLjdzNDEuNywxOC43LDQxLjcsNDEuN2MwLDIyLjctMTguMyw0MS4yLTQwLjksNDEuNyAgICBjLTAuMywwLTAuNSwwLTAuOCwwcy0wLjUsMC0wLjgsMEM3Ny42LDIyNy40NSw1OS4zLDIwOC45NSw1OS4zLDE4Ni4xNXogTTEyNS41LDMyMC4xNUgxNi4yYzQuNS00Mi42LDQwLjUtNzYsODQuMi03Ni4zICAgIGMwLjIsMCwwLjQsMCwwLjYsMHMwLjQsMCwwLjYsMGMyMC44LDAuMSwzOS44LDcuOCw1NC41LDIwLjNDMTQxLjcsMjc5Ljc1LDEzMSwyOTguOTUsMTI1LjUsMzIwLjE1eiBNMzY2LjgsMzU5Ljk1ICAgIGMwLDIwLjUtMTYuNywzNy4yLTM3LjIsMzcuMmgtMTU1Yy0yMC41LDAtMzcuMi0xNi43LTM3LjItMzcuMnYtNi44YzAtNjIuMSw0OS42LTExMi45LDExMS4zLTExNC43YzEuMSwwLjEsMi4zLDAuMSwzLjQsMC4xICAgIHMyLjMsMCwzLjQtMC4xYzYxLjcsMS44LDExMS4zLDUyLjYsMTExLjMsMTE0LjdWMzU5Ljk1eiBNMzc4LjcsMzIwLjE1Yy01LjUtMjEuMS0xNi00MC0zMC4zLTU1LjZjMTQuOC0xMi44LDM0LTIwLjUsNTUtMjAuNyAgICBjMC4yLDAsMC40LDAsMC42LDBzMC40LDAsMC42LDBjNDMuNywwLjMsNzkuNywzMy43LDg0LjIsNzYuM0gzNzguN3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+", "alt", "", 1, "imagen", 3, "click"], ["src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI0MCwwQzEwNy42NjQsMCwwLDEwNy42NjQsMCwyNDBjMCw1Ny45NiwyMC42NTYsMTExLjE4NCw1NC45OTIsMTUyLjcwNGMwLjA4OCwwLjEyLDAuMDk2LDAuMjcyLDAuMTkyLDAuMzg0ICAgIGMyNC43OTIsMjkuODk2LDU1LjkyOCw1Mi44MTYsOTAuNjI0LDY3LjYyNGMwLjQsMC4xNjgsMC43OTIsMC4zNTIsMS4xOTIsMC41MmMyLjgwOCwxLjE4NCw1LjY0OCwyLjI4LDguNDk2LDMuMzUyICAgIGMxLjEyLDAuNDI0LDIuMjQsMC44NTYsMy4zNzYsMS4yNjRjMi40NTYsMC44OCw0LjkyOCwxLjcxMiw3LjQxNiwyLjUxMmMxLjU5MiwwLjUxMiwzLjE4NCwxLjAxNiw0Ljc5MiwxLjQ5NiAgICBjMi4yLDAuNjU2LDQuNDA4LDEuMjg4LDYuNjMyLDEuODg4YzEuOTUyLDAuNTI4LDMuOTIsMS4wMTYsNS44ODgsMS40ODhjMS45OTIsMC40OCwzLjk5MiwwLjk2LDYsMS4zODQgICAgYzIuMjQsMC40OCw0LjUwNCwwLjkwNCw2Ljc3NiwxLjMyYzEuODI0LDAuMzM2LDMuNjQsMC42ODgsNS40OCwwLjk4NGMyLjUyLDAuNDA4LDUuMDU2LDAuNzI4LDcuNiwxLjA1NiAgICBjMS42NCwwLjIwOCwzLjI3MiwwLjQ0OCw0LjkyLDAuNjI0YzIuODgsMC4zMDQsNS43ODQsMC41Miw4LjY5NiwwLjcyYzEuMzUyLDAuMDk2LDIuNjk2LDAuMjQsNC4wNTYsMC4zMTIgICAgYzQuMjQ4LDAuMjQsOC41NDQsMC4zNjgsMTIuODcyLDAuMzY4czguNjI0LTAuMTI4LDEyLjg4OC0wLjM1MmMxLjM2LTAuMDcyLDIuNzA0LTAuMjE2LDQuMDU2LTAuMzEyICAgIGMyLjkxMi0wLjIwOCw1LjgxNi0wLjQxNiw4LjY5Ni0wLjcyYzEuNjQ4LTAuMTc2LDMuMjgtMC40MTYsNC45Mi0wLjYyNGMyLjU0NC0wLjMyOCw1LjA4LTAuNjQ4LDcuNi0xLjA1NiAgICBjMS44MzItMC4yOTYsMy42NTYtMC42NDgsNS40OC0wLjk4NGMyLjI2NC0wLjQxNiw0LjUyOC0wLjg0LDYuNzc2LTEuMzJjMi4wMDgtMC40MzIsNC0wLjkwNCw2LTEuMzg0ICAgIGMxLjk2OC0wLjQ4LDMuOTM2LTAuOTY4LDUuODg4LTEuNDg4YzIuMjI0LTAuNTkyLDQuNDMyLTEuMjMyLDYuNjMyLTEuODg4YzEuNjA4LTAuNDgsMy4yLTAuOTg0LDQuNzkyLTEuNDk2ICAgIGMyLjQ4OC0wLjgsNC45Ni0xLjYzMiw3LjQxNi0yLjUxMmMxLjEyOC0wLjQwOCwyLjI0OC0wLjg0LDMuMzc2LTEuMjY0YzIuODU2LTEuMDcyLDUuNjg4LTIuMTc2LDguNDk2LTMuMzUyICAgIGMwLjQtMC4xNjgsMC43OTItMC4zNTIsMS4xOTItMC41MmMzNC42ODgtMTQuODA4LDY1LjgzMi0zNy43MjgsOTAuNjI0LTY3LjYyNGMwLjA5Ni0wLjExMiwwLjEwNC0wLjI3MiwwLjE5Mi0wLjM4NCAgICBDNDU5LjM0NCwzNTEuMTg0LDQ4MCwyOTcuOTYsNDgwLDI0MEM0ODAsMTA3LjY2NCwzNzIuMzM2LDAsMjQwLDB6IE0zMzcuMjU2LDQ0MS43NmMtMC4xMiwwLjA1Ni0wLjIzMiwwLjEyLTAuMzUyLDAuMTc2ICAgIGMtMi44NTYsMS4zNzYtNS43NiwyLjY3Mi04LjY4OCwzLjkzNmMtMC42NjQsMC4yOC0xLjMyLDAuNTY4LTEuOTg0LDAuODQ4Yy0yLjU2LDEuMDcyLTUuMTUyLDIuMDg4LTcuNzYsMy4wNjQgICAgYy0xLjA4OCwwLjQwOC0yLjE3NiwwLjgwOC0zLjI3MiwxLjE5MmMtMi4zMTIsMC44MjQtNC42MzIsMS42MTYtNi45NzYsMi4zNjhjLTEuNDU2LDAuNDY0LTIuOTIsMC45MDQtNC4zODQsMS4zMzYgICAgYy0yLjA4LDAuNjI0LTQuMTY4LDEuMjI0LTYuMjgsMS43ODRjLTEuNzc2LDAuNDcyLTMuNTY4LDAuOTA0LTUuMzYsMS4zMjhjLTEuODgsMC40NDgtMy43NTIsMC45MDQtNS42NDgsMS4zMDQgICAgYy0yLjA3MiwwLjQ0LTQuMTYsMC44MTYtNi4yNCwxLjE5MmMtMS42ODgsMC4zMTItMy4zNjgsMC42NC01LjA3MiwwLjkxMmMtMi4zNDQsMC4zNjgtNC43MTIsMC42NjQtNy4wNzIsMC45NiAgICBjLTEuNDk2LDAuMTkyLTIuOTg0LDAuNDE2LTQuNDk2LDAuNTc2Yy0yLjY5NiwwLjI4OC01LjQxNiwwLjQ3Mi04LjEyOCwwLjY2NGMtMS4yMDgsMC4wOC0yLjQwOCwwLjIxNi0zLjYzMiwwLjI4ICAgIGMtMy45NiwwLjIwOC03LjkyOCwwLjMyLTExLjkxMiwwLjMycy03Ljk1Mi0wLjExMi0xMS45MDQtMC4zMmMtMS4yMTYtMC4wNjQtMi40MTYtMC4xOTItMy42MzItMC4yOCAgICBjLTIuNzItMC4xODQtNS40MzItMC4zNzYtOC4xMjgtMC42NjRjLTEuNTEyLTAuMTYtMy0wLjM4NC00LjQ5Ni0wLjU3NmMtMi4zNi0wLjI5Ni00LjcyOC0wLjU5Mi03LjA3Mi0wLjk2ICAgIGMtMS43MDQtMC4yNzItMy4zODQtMC42LTUuMDcyLTAuOTEyYy0yLjA4OC0wLjM3Ni00LjE3Ni0wLjc2LTYuMjQtMS4xOTJjLTEuODk2LTAuNC0zLjc3Ni0wLjg1Ni01LjY0OC0xLjMwNCAgICBjLTEuNzkyLTAuNDMyLTMuNTg0LTAuODU2LTUuMzYtMS4zMjhjLTIuMTA0LTAuNTYtNC4yLTEuMTY4LTYuMjgtMS43ODRjLTEuNDY0LTAuNDMyLTIuOTI4LTAuODcyLTQuMzg0LTEuMzM2ICAgIGMtMi4zNDQtMC43NTItNC42NzItMS41NDQtNi45NzYtMi4zNjhjLTEuMDk2LTAuMzkyLTIuMTg0LTAuNzkyLTMuMjcyLTEuMTkyYy0yLjYwOC0wLjk3Ni01LjItMS45OTItNy43Ni0zLjA2NCAgICBjLTAuNjY0LTAuMjcyLTEuMzEyLTAuNTYtMS45NzYtMC44NGMtMi45MjgtMS4yNTYtNS44MzItMi41Ni04LjY5Ni0zLjkzNmMtMC4xMi0wLjA1Ni0wLjIzMi0wLjExMi0wLjM1Mi0wLjE3NiAgICBjLTI3LjkxMi0xMy41MDQtNTIuNTY4LTMyLjY3Mi03Mi41NzYtNTUuOTUyYzE1LjQ2NC01Ni45NDQsNTkuMjQtMTAyLjg0OCwxMTUuNTYtMTIxLjExMmMxLjExMiwwLjY4LDIuMjcyLDEuMjg4LDMuNDE2LDEuOTI4ICAgIGMwLjY3MiwwLjM3NiwxLjMzNiwwLjc3NiwyLjAxNiwxLjEzNmMyLjM4NCwxLjI2NCw0LjgsMi40NDgsNy4yNzIsMy41MTJjMS44OTYsMC44MzIsMy44NTYsMS41MzYsNS44MDgsMi4yNTYgICAgYzAuMzg0LDAuMTM2LDAuNzY4LDAuMjg4LDEuMTUyLDAuNDI0YzEwLjg0OCwzLjg0LDIyLjQ1Niw2LjA0LDM0LjYsNi4wNHMyMy43NTItMi4yLDM0LjU5Mi02LjA0ICAgIGMwLjM4NC0wLjEzNiwwLjc2OC0wLjI4OCwxLjE1Mi0wLjQyNGMxLjk1Mi0wLjcyLDMuOTEyLTEuNDI0LDUuODA4LTIuMjU2YzIuNDcyLTEuMDY0LDQuODg4LTIuMjQ4LDcuMjcyLTMuNTEyICAgIGMwLjY4LTAuMzY4LDEuMzQ0LTAuNzYsMi4wMTYtMS4xMzZjMS4xNDQtMC42NCwyLjMxMi0xLjI0OCwzLjQzMi0xLjkzNmM1Ni4zMiwxOC4yNzIsMTAwLjA4OCw2NC4xNzYsMTE1LjU2LDEyMS4xMTIgICAgQzM4OS44MjQsNDA5LjA4LDM2NS4xNjgsNDI4LjI0OCwzMzcuMjU2LDQ0MS43NnogTTE1MiwxNzZjMC00OC41MiwzOS40OC04OCw4OC04OHM4OCwzOS40OCw4OCw4OCAgICBjMCwzMC44NjQtMTYuMDA4LDU4LjAyNC00MC4xMjgsNzMuNzM2Yy0zLjE1MiwyLjA0OC02LjQzMiwzLjg4LTkuOCw1LjQ4Yy0wLjQsMC4xOTItMC43OTIsMC4zOTItMS4xOTIsMC41NzYgICAgYy0yMy4xNjgsMTAuNTM2LTUwLjU5MiwxMC41MzYtNzMuNzYsMGMtMC40LTAuMTg0LTAuOC0wLjM4NC0xLjE5Mi0wLjU3NmMtMy4zNzYtMS42LTYuNjQ4LTMuNDMyLTkuOC01LjQ4ICAgIEMxNjguMDA4LDIzNC4wMjQsMTUyLDIwNi44NjQsMTUyLDE3NnogTTQyMS44MzIsMzcwLjU4NGMtMTguMTM2LTUzLjU1Mi01OS41MTItOTYuODMyLTExMi4zNzYtMTE3LjM5MiAgICBDMzMwLjYsMjM0LjE0NCwzNDQsMjA2LjY0LDM0NCwxNzZjMC01Ny4zNDQtNDYuNjU2LTEwNC0xMDQtMTA0cy0xMDQsNDYuNjU2LTEwNCwxMDRjMCwzMC42NCwxMy40LDU4LjE0NCwzNC41NTIsNzcuMTkyICAgIGMtNTIuODY0LDIwLjU2OC05NC4yNCw2My44NC0xMTIuMzc2LDExNy4zOTJDMzEuNjcyLDMzMy43OTIsMTYsMjg4LjcwNCwxNiwyNDBDMTYsMTE2LjQ4OCwxMTYuNDg4LDE2LDI0MCwxNnMyMjQsMTAwLjQ4OCwyMjQsMjI0ICAgIEM0NjQsMjg4LjcwNCw0NDguMzI4LDMzMy43OTIsNDIxLjgzMiwzNzAuNTg0eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=", "alt", "", 1, "imagen", 3, "click"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_4_listener() {
              return ctx.goToBook();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_5_listener() {
              return ctx.goToExternalProfiles();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_6_listener() {
              return ctx.goToHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_7_listener() {
              return ctx.goToGroups();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_8_listener() {
              return ctx.goToProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: 6;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100vw;\n  bottom: 0px;\n  margin-bottom: 0px;\n  background-color: #205493;\n  position: fixed;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  justify-content: space-around;\n}\n\n.container[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%] {\n  width: 10%;\n  height: 10%;\n  margin: 4%;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.container[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFRQTtFQUNJLFdBQUE7QUFMSjs7QUFTQTtFQUNJLFlBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFkUTtFQWVSLGVBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBUUEsNkJBQUE7QUFmSjs7QUFtQkk7RUFHSSxVQUFBO0VBQ0EsV0FBQTtFQUdBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFyQlI7O0FBeUJJO0VBRUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQXhCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB6LWluZGV4OiA2O1xyXG59XHJcblxyXG4vLyBDb2xvcnNcclxuJGF6dWxPc2N1cm86ICMxMTJlNTE7XHJcbiRBenVsTWVkaW86ICMyMDU0OTM7XHJcbiRBenVsQ2xhcm86ICMwMDcxYmM7XHJcbiR0ZXh0OiAjMjEyMTIxO1xyXG5cclxuLmZvb3RlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIC8vIGhlaWdodDogOXZoOyBcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJEF6dWxNZWRpbztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuIFxyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBtYXJnaW46IDAlO1xyXG4gICAgLy8gcGFkZGluZzogMCU7XHJcbiAgICAvLyAvLyBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICAvLyAvLyBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIC8vIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxuICAgIC5pbWFnZW57XHJcbiAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIGhlaWdodDoxMCU7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgLy8gZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBtYXJnaW46IDQlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiUgO1xyXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItaXRlbXtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBob25leWRldztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuICAgICAgICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");

      var UserService = /*#__PURE__*/function () {
        function UserService(firebase) {
          _classCallCheck(this, UserService);

          this.firebase = firebase;
          this.collection = 'register';
          this.subCollectionPhone = "telefono";
        }

        _createClass(UserService, [{
          key: "getUserImg",
          value: function getUserImg(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              var image;
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      image = "";
                      _context42.next = 3;
                      return this.firebase.database.ref(this.collection).orderByChild('email').equalTo(email).limitToLast(1).once("value", function (user) {
                        user = user.val();
                        var Images = user[Object.keys(user)[0]].Images;
                        var keys = Object.keys(Images);
                        image = Images[keys[keys.length - 1]].ImgUrl;
                      });

                    case 3:
                      return _context42.abrupt("return", image);

                    case 4:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          }
        }, {
          key: "getRegister",
          value: function getRegister() {
            this.registerList = this.firebase.list(this.collection);
            return this.registerList;
          }
        }, {
          key: "getGroups",
          value: function getGroups() {
            this.groupsList = this.firebase.list('groups');
            return this.groupsList;
          }
        }, {
          key: "findById",
          value: function findById(email) {
            var ref = this.firebase.database.ref(this.collection);
            return ref.orderByChild('email').equalTo(email).limitToLast(1);
          }
        }, {
          key: "findByPhone",
          value: function findByPhone(numero) {
            var ref = this.firebase.database.ref(this.collection);
            return ref.orderByChild(this.subCollectionPhone + '/e164Number').equalTo('+57' + numero).limitToLast(1);
          }
        }, {
          key: "deleteFriends",
          value: function deleteFriends(tagkey, $key) {
            console.log("delete $key");
            console.log(tagkey);
            this.firebase.database.ref(this.collection).child($key).child("Amigos").child(tagkey).remove();
          }
        }, {
          key: "deleteGroups",
          value: function deleteGroups(tagkey, $key) {
            console.log("delete $key");
            console.log(tagkey);
            this.firebase.database.ref("groups").child($key).child("integrants").child(tagkey).remove();
          }
        }, {
          key: "updateDescripcionGroup",
          value: function updateDescripcionGroup($key, value) {
            this.firebase.database.ref("groups").child($key).child("description").set(value);
          }
        }, {
          key: "updateUsername",
          value: function updateUsername(user) {
            console.log("user.$key");
            console.log(user.$key); // this.registerList.update(register.$key, {
            //   name: register.name,
            // });
          }
        }, {
          key: "insertRegister",
          value: function insertRegister(user) {
            // this.firebase.object(this.collection).set({...user});
            this.firebase.list('register').push({
              email: user.email,
              telefono: user.telefono,
              password: user.password,
              name: user.name,
              lname: user.lname
            });
          }
        }, {
          key: "createGroup",
          value: function createGroup(group) {
            this.firebase.list('groups').push({
              owner: group.owner,
              name: group.name,
              description: group.description,
              privacity: group.privacity,
              tags: group.tags
            });
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sjK5":
    /*!******************************************!*\
      !*** ./src/app/services/chat.service.ts ***!
      \******************************************/

    /*! exports provided: ChatService */

    /***/
    function sjK5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatService", function () {
        return ChatService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! socket.io-client */
      "2qj+");

      var ChatService = /*#__PURE__*/function () {
        function ChatService() {
          _classCallCheck(this, ChatService);
        }

        _createClass(ChatService, [{
          key: "connect",
          value: function connect() {
            var _this41 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              // this.socket = io('http://192.168.0.23:3000');
              _this41.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])('https://c6e7-186-170-64-187.ngrok.io', {
                transports: ['websocket']
              }); //AQUI CAMBIO LA IP V4

              _this41.socket.on('connect', function () {
                _this41.socket.emit("connected");

                observer.next();
              });
            });
          }
        }, {
          key: "getNewMsgs",
          value: function getNewMsgs() {
            var _this42 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              _this42.socket.on("newMsg", function (msg) {
                observer.next(msg);
              });
            });
          }
        }, {
          key: "getChangePage",
          value: function getChangePage() {
            var _this43 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              _this43.socket.on("pageChange", function (info) {
                observer.next(info);
              });
            });
          }
        }, {
          key: "sendMsg",
          value: function sendMsg(msg) {
            console.log(msg);
            this.socket.emit('newMsg', msg);
          }
        }, {
          key: "sendpageChange",
          value: function sendpageChange(info) {
            console.log("Service", info);
            this.socket.emit("pageChange", info);
          }
        }, {
          key: "disconnect",
          value: function disconnect() {
            this.socket.disconnect();
          }
        }]);

        return ChatService;
      }();

      ChatService.ɵfac = function ChatService_Factory(t) {
        return new (t || ChatService)();
      };

      ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChatService,
        factory: ChatService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "v5hE":
    /*!********************************************************!*\
      !*** ./src/app/pipes/filter-external-profiles.pipe.ts ***!
      \********************************************************/

    /*! exports provided: FilterExternalProfilesPipe */

    /***/
    function v5hE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterExternalProfilesPipe", function () {
        return FilterExternalProfilesPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilterExternalProfilesPipe = /*#__PURE__*/function () {
        function FilterExternalProfilesPipe() {
          _classCallCheck(this, FilterExternalProfilesPipe);
        }

        _createClass(FilterExternalProfilesPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (args === '') {
              return value;
            }

            var resultSearchBox = [];

            var _iterator3 = _createForOfIteratorHelper(value),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var post = _step3.value;

                if (post.name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
                  resultSearchBox.push(post);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return resultSearchBox;
          }
        }]);

        return FilterExternalProfilesPipe;
      }();

      FilterExternalProfilesPipe.ɵfac = function FilterExternalProfilesPipe_Factory(t) {
        return new (t || FilterExternalProfilesPipe)();
      };

      FilterExternalProfilesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filterExternalProfiles",
        type: FilterExternalProfilesPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterExternalProfilesPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filterExternalProfiles'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages/private/profile/profile.component */
      "fu3/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/private/home/home.component */
      "dsDk");
      /* harmony import */


      var _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/public/login/login.component */
      "QuX9");
      /* harmony import */


      var _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/public/register/register.component */
      "MyXD");
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "HTFn");
      /* harmony import */


      var _pages_public_tags_tags_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/public/tags/tags.component */
      "5VxN");
      /* harmony import */


      var _pages_private_external_profiles_external_profiles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/private/external-profiles/external-profiles.component */
      "QBD8");
      /* harmony import */


      var _pages_private_group_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/private/group/group.component */
      "mLow");
      /* harmony import */


      var _pages_private_book_pdf_book_pdf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/private/book-pdf/book-pdf.component */
      "eu5Z");
      /* harmony import */


      var _pages_private_my_books_my_books_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/private/my-books/my-books.component */
      "+SNX"); // import { HomeModule } from './pages/private/home/home.module';


      var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["redirectUnauthorizedTo"])(['login']);
      };

      var redirectAuthorizedToHome = function redirectAuthorizedToHome() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["redirectLoggedInTo"])(['home']);
      };

      var routes = [{
        path: 'home',
        component: _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin
        }
      }, {
        path: 'login',
        component: _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: redirectAuthorizedToHome
        }
      }, {
        path: 'register',
        component: _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
      }, {
        path: 'profile',
        component: _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]
      }, {
        path: 'profile/**',
        component: _pages_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]
      }, {
        path: 'tags',
        component: _pages_public_tags_tags_component__WEBPACK_IMPORTED_MODULE_7__["TagsComponent"]
      }, {
        path: 'externalProfiles',
        component: _pages_private_external_profiles_external_profiles_component__WEBPACK_IMPORTED_MODULE_8__["ExternalProfilesComponent"]
      }, {
        path: 'groups',
        component: _pages_private_group_group_component__WEBPACK_IMPORTED_MODULE_9__["GroupComponent"]
      }, {
        path: 'book',
        component: _pages_private_book_pdf_book_pdf_component__WEBPACK_IMPORTED_MODULE_10__["BookPDFComponent"]
      }, {
        path: 'mybooks',
        component: _pages_private_my_books_my_books_component__WEBPACK_IMPORTED_MODULE_11__["MyBooksComponent"]
      }, {
        path: '**',
        redirectTo: '/login'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vrEl":
    /*!****************************************************************!*\
      !*** ./src/app/pages/private/book-chat/book-chat.component.ts ***!
      \****************************************************************/

    /*! exports provided: BookChatComponent */

    /***/
    function vrEl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookChatComponent", function () {
        return BookChatComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BookChatComponent = /*#__PURE__*/function () {
        function BookChatComponent() {
          _classCallCheck(this, BookChatComponent);
        }

        _createClass(BookChatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BookChatComponent;
      }();

      BookChatComponent.ɵfac = function BookChatComponent_Factory(t) {
        return new (t || BookChatComponent)();
      };

      BookChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BookChatComponent,
        selectors: [["app-book-chat"]],
        inputs: {
          msg: "msg"
        },
        decls: 4,
        vars: 2,
        consts: [[1, "mensaje"], ["alt", "", 1, "img", 3, "src"], [1, "text"]],
        template: function BookChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.msg.user, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg.content);
          }
        },
        styles: [".img[_ngcontent-%COMP%] {\n  height: 10%;\n  width: 10%;\n  border-radius: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid #112e51;\n  margin: 2%;\n}\n\n.mensaje[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ib29rLWNoYXQvYm9vay1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFOSjs7QUFVQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ib29rLWNoYXQvYm9vay1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGF6dWxPc2N1cm86ICMxMTJlNTE7XHJcbiRBenVsTWVkaW86ICMyMDU0OTM7XHJcbiRBenVsQ2xhcm86ICMwMDcxYmM7XHJcbiR0ZXh0OiAjMjEyMTIxO1xyXG5cclxuXHJcblxyXG4uaW1ne1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGF6dWxPc2N1cm87XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5tZW5zYWple1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookChatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-book-chat',
            templateUrl: './book-chat.component.html',
            styleUrls: ['./book-chat.component.scss']
          }]
        }], function () {
          return [];
        }, {
          msg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map