(self["webpackChunkpytorch"] = self["webpackChunkpytorch"] || []).push([["card-grid-github-card"],{

/***/ "./src/_components/pagination.js":
/*!***************************************!*\
  !*** ./src/_components/pagination.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/pagination */ "./src/utilities/pagination.js");
/* harmony import */ var _utilities_pagination__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var paginationComponents = document.getElementsByClassName("Pagination");

var _iterator = _createForOfIteratorHelper(paginationComponents),
    _step;

try {
  var _loop = function _loop() {
    var paginationElement = _step.value;
    var pages = paginationElement.getElementsByClassName("page");
    var prevPage = paginationElement.getElementsByClassName("prev-page")[0];
    var nextPage = paginationElement.getElementsByClassName("next-page")[0];
    var pagination = (0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.initPagination)(paginationElement);
    if (!pagination.containers || !pagination.containers.length) return "continue"; // Load initial page

    var _iterator2 = _createForOfIteratorHelper(pagination.containers),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var container = _step2.value;
        (0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.goToPage)(container, (0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)(container));
        updatePagination(container);
      } // Pagination events

    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var _iterator3 = _createForOfIteratorHelper(pages),
        _step3;

    try {
      var _loop2 = function _loop2() {
        var page = _step3.value;
        page.addEventListener("click", function () {
          var _iterator7 = _createForOfIteratorHelper(pagination.containers),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _container = _step7.value;
              (0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_container, page.dataset.page);
              updatePagination(_container);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        });
      };

      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    prevPage.addEventListener("click", function () {
      var _iterator4 = _createForOfIteratorHelper(pagination.containers),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var container = _step4.value;
          if ((0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)(container) == 1) return;
          (0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.goToPage)(container, (0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)(container) - 1);
          updatePagination(container);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    });
    nextPage.addEventListener("click", function () {
      var _iterator5 = _createForOfIteratorHelper(pagination.containers),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var container = _step5.value;
          if ((0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)(container) == pages.length) return;
          (0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.goToPage)(container, (0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)(container) + 1);
          updatePagination(container);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    });

    function updatePagination(container) {
      // Page number highlighting
      var i = 1;

      var _iterator6 = _createForOfIteratorHelper(pages),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var page = _step6.value;
          if ((0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)(container) == i) page.classList.add("current");else page.classList.remove("current");
          i++;
        } // Arrow highlighting

      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      prevPage.classList.remove("hidden");
      nextPage.classList.remove("hidden");
      if ((0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)(container) == 1) prevPage.classList.add("hidden");else if ((0,_utilities_pagination__WEBPACK_IMPORTED_MODULE_0__.getCurrentPage)(container) == pages.length) nextPage.classList.add("hidden");
    }
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var _ret = _loop();

    if (_ret === "continue") continue;
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./src/blocks/card-grid-github-card/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/card-grid-github-card/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/card-grid-github-card/style.scss");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_components/pagination */ "./src/_components/pagination.js");



/***/ }),

/***/ "./src/utilities/pagination.js":
/*!*************************************!*\
  !*** ./src/utilities/pagination.js ***!
  \*************************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function initPagination(paginationEl, itemsPerPage) {
  var paginationContainerClass = paginationEl.dataset.containerClass;
  var paginationItemClass = paginationEl.dataset.itemClass;
  var paginationItemsPerPage = itemsPerPage || paginationEl.dataset.itemsPerPage || 0;
  var paginationCurrentPage = paginationEl.dataset.currentPage || 1;
  if (!paginationContainerClass) return {};
  var containers = document.getElementsByClassName(paginationContainerClass);
  if (!containers || !containers.length) return {}; // Assign base settings to each element tied to the pagination

  var _iterator = _createForOfIteratorHelper(containers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var container = _step.value;
      container.dataset.itemClass = container.dataset.itemClass || paginationItemClass;
      if (!container.dataset.itemClass) continue;
      if (!getItemsPerPage(container)) setItemsPerPage(container, paginationItemsPerPage);
      if (!getCurrentPage(container)) setCurrentPage(container, paginationCurrentPage);
      resetPagination(container);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return {
    containers: containers
  };
}

function goToPage(container) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  page = parseInt(page);
  var items = getItems(container);
  var lastItem = getItemsPerPage(container) * page;
  var i = 1;

  var _iterator2 = _createForOfIteratorHelper(items),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      if (i > lastItem - getItemsPerPage(container) && i <= lastItem) item.style.display = item.dataset.display;else item.style.display = "none";
      i++;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  setCurrentPage(container, page);
}

function loadMore(container, itemCount) {
  var i = 0;
  var j = 0;
  var items = getItems(container);

  var _iterator3 = _createForOfIteratorHelper(items),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;
      i++;
      if (item.style.display == item.dataset.display) continue;
      item.style.display = item.dataset.display;
      j++;
      if (j == (itemCount || getItemsPerPage(container))) break;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  setRemainingItems(container, items.length - i);
}

function resetPagination(container) {
  var items = getItems(container);
  if (!items || !items.length || getItemsPerPage(container) <= 1) return; // Store default item display style

  var _iterator4 = _createForOfIteratorHelper(items),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var item = _step4.value;
      item.style.display = null;
      item.dataset.display = window.getComputedStyle(item, null).display;
      item.style.display = "none";
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}

function getCurrentPage(container) {
  return parseInt(container.dataset.currentPage);
}

function setCurrentPage(container, page) {
  container.dataset.currentPage = page;
}

function getItemsPerPage(container) {
  return parseInt(container.dataset.itemsPerPage);
}

function setItemsPerPage(container, itemsPerPage) {
  container.dataset.itemsPerPage = itemsPerPage;
}

function getItems(container) {
  return container.getElementsByClassName(container.dataset.itemClass);
}

function getRemainingItems(container) {
  return parseInt(container.dataset.remainingItems);
}

function setRemainingItems(container, remainingItems) {
  container.dataset.remainingItems = remainingItems;
}

module.exports = {
  initPagination: initPagination,
  resetPagination: resetPagination,
  goToPage: goToPage,
  loadMore: loadMore,
  getCurrentPage: getCurrentPage,
  getItemsPerPage: getItemsPerPage,
  getItems: getItems,
  getRemainingItems: getRemainingItems
};

/***/ }),

/***/ "./src/blocks/card-grid-github-card/style.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/card-grid-github-card/style.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/blocks/card-grid-github-card/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekIsRUFBb0NVLFlBQXBDLEVBQWtEO0FBQ2hEVixFQUFBQSxTQUFTLENBQUNJLE9BQVYsQ0FBa0JNLFlBQWxCLEdBQWlDQSxZQUFqQztBQUNEOztBQUVELFNBQVNjLFFBQVQsQ0FBa0J4QixTQUFsQixFQUE2QjtBQUMzQixTQUFPQSxTQUFTLENBQUNSLHNCQUFWLENBQWlDUSxTQUFTLENBQUNJLE9BQVYsQ0FBa0JVLFNBQW5ELENBQVA7QUFDRDs7QUFFRCxTQUFTcUIsaUJBQVQsQ0FBMkJuQyxTQUEzQixFQUFzQztBQUNwQyxTQUFPc0IsUUFBUSxDQUFDdEIsU0FBUyxDQUFDSSxPQUFWLENBQWtCZ0MsY0FBbkIsQ0FBZjtBQUNEOztBQUVELFNBQVNKLGlCQUFULENBQTJCaEMsU0FBM0IsRUFBc0NvQyxjQUF0QyxFQUFzRDtBQUNwRHBDLEVBQUFBLFNBQVMsQ0FBQ0ksT0FBVixDQUFrQmdDLGNBQWxCLEdBQW1DQSxjQUFuQztBQUNEOztBQUVEQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZm5ELEVBQUFBLGNBQWMsRUFBZEEsY0FEZTtBQUVma0MsRUFBQUEsZUFBZSxFQUFmQSxlQUZlO0FBR2ZqQyxFQUFBQSxRQUFRLEVBQVJBLFFBSGU7QUFJZnlDLEVBQUFBLFFBQVEsRUFBUkEsUUFKZTtBQUtmeEMsRUFBQUEsY0FBYyxFQUFkQSxjQUxlO0FBTWY2QixFQUFBQSxlQUFlLEVBQWZBLGVBTmU7QUFPZk0sRUFBQUEsUUFBUSxFQUFSQSxRQVBlO0FBUWZXLEVBQUFBLGlCQUFpQixFQUFqQkE7QUFSZSxDQUFqQjs7Ozs7Ozs7Ozs7O0FDcEdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHl0b3JjaC8uL3NyYy9fY29tcG9uZW50cy9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovL3B5dG9yY2gvLi9zcmMvYmxvY2tzL2NhcmQtZ3JpZC1naXRodWItY2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9weXRvcmNoLy4vc3JjL3V0aWxpdGllcy9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovL3B5dG9yY2gvLi9zcmMvYmxvY2tzL2NhcmQtZ3JpZC1naXRodWItY2FyZC9zdHlsZS5zY3NzP2MxNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFBhZ2luYXRpb24sIGdvVG9QYWdlLCBnZXRDdXJyZW50UGFnZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFnaW5hdGlvblwiO1xuXG5jb25zdCBwYWdpbmF0aW9uQ29tcG9uZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJQYWdpbmF0aW9uXCIpO1xuXG5mb3IgKGxldCBwYWdpbmF0aW9uRWxlbWVudCBvZiBwYWdpbmF0aW9uQ29tcG9uZW50cykge1xuICBjb25zdCBwYWdlcyA9IHBhZ2luYXRpb25FbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYWdlXCIpO1xuICBjb25zdCBwcmV2UGFnZSA9IHBhZ2luYXRpb25FbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmV2LXBhZ2VcIilbMF07XG4gIGNvbnN0IG5leHRQYWdlID0gcGFnaW5hdGlvbkVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5leHQtcGFnZVwiKVswXTtcblxuICBjb25zdCBwYWdpbmF0aW9uID0gaW5pdFBhZ2luYXRpb24ocGFnaW5hdGlvbkVsZW1lbnQpO1xuXG4gIGlmICghcGFnaW5hdGlvbi5jb250YWluZXJzIHx8ICFwYWdpbmF0aW9uLmNvbnRhaW5lcnMubGVuZ3RoKSBjb250aW51ZTtcblxuICAvLyBMb2FkIGluaXRpYWwgcGFnZVxuICBmb3IgKGxldCBjb250YWluZXIgb2YgcGFnaW5hdGlvbi5jb250YWluZXJzKSB7XG4gICAgZ29Ub1BhZ2UoY29udGFpbmVyLCBnZXRDdXJyZW50UGFnZShjb250YWluZXIpKTtcbiAgICB1cGRhdGVQYWdpbmF0aW9uKGNvbnRhaW5lcik7XG4gIH1cblxuICAvLyBQYWdpbmF0aW9uIGV2ZW50c1xuICBmb3IgKGxldCBwYWdlIG9mIHBhZ2VzKSB7XG4gICAgcGFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZm9yIChsZXQgY29udGFpbmVyIG9mIHBhZ2luYXRpb24uY29udGFpbmVycykge1xuICAgICAgICBnb1RvUGFnZShjb250YWluZXIsIHBhZ2UuZGF0YXNldC5wYWdlKTtcbiAgICAgICAgdXBkYXRlUGFnaW5hdGlvbihjb250YWluZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJldlBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBmb3IgKGxldCBjb250YWluZXIgb2YgcGFnaW5hdGlvbi5jb250YWluZXJzKSB7XG4gICAgICBpZiAoZ2V0Q3VycmVudFBhZ2UoY29udGFpbmVyKSA9PSAxKSByZXR1cm47XG4gICAgICBnb1RvUGFnZShjb250YWluZXIsIGdldEN1cnJlbnRQYWdlKGNvbnRhaW5lcikgLSAxKTtcbiAgICAgIHVwZGF0ZVBhZ2luYXRpb24oY29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5leHRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZm9yIChsZXQgY29udGFpbmVyIG9mIHBhZ2luYXRpb24uY29udGFpbmVycykge1xuICAgICAgaWYgKGdldEN1cnJlbnRQYWdlKGNvbnRhaW5lcikgPT0gcGFnZXMubGVuZ3RoKSByZXR1cm47XG4gICAgICBnb1RvUGFnZShjb250YWluZXIsIGdldEN1cnJlbnRQYWdlKGNvbnRhaW5lcikgKyAxKTtcbiAgICAgIHVwZGF0ZVBhZ2luYXRpb24oY29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb24oY29udGFpbmVyKSB7XG4gICAgLy8gUGFnZSBudW1iZXIgaGlnaGxpZ2h0aW5nXG4gICAgbGV0IGkgPSAxO1xuICAgIGZvciAobGV0IHBhZ2Ugb2YgcGFnZXMpIHtcbiAgICAgIGlmIChnZXRDdXJyZW50UGFnZShjb250YWluZXIpID09IGkpIHBhZ2UuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XG4gICAgICBlbHNlIHBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gQXJyb3cgaGlnaGxpZ2h0aW5nXG4gICAgcHJldlBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBuZXh0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gICAgaWYgKGdldEN1cnJlbnRQYWdlKGNvbnRhaW5lcikgPT0gMSkgcHJldlBhZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBlbHNlIGlmIChnZXRDdXJyZW50UGFnZShjb250YWluZXIpID09IHBhZ2VzLmxlbmd0aCkgbmV4dFBhZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgXCIuLi8uLi9fY29tcG9uZW50cy9wYWdpbmF0aW9uXCI7XG4iLCJmdW5jdGlvbiBpbml0UGFnaW5hdGlvbihwYWdpbmF0aW9uRWwsIGl0ZW1zUGVyUGFnZSkge1xuICBjb25zdCBwYWdpbmF0aW9uQ29udGFpbmVyQ2xhc3MgPSBwYWdpbmF0aW9uRWwuZGF0YXNldC5jb250YWluZXJDbGFzcztcbiAgY29uc3QgcGFnaW5hdGlvbkl0ZW1DbGFzcyA9IHBhZ2luYXRpb25FbC5kYXRhc2V0Lml0ZW1DbGFzcztcbiAgY29uc3QgcGFnaW5hdGlvbkl0ZW1zUGVyUGFnZSA9IGl0ZW1zUGVyUGFnZSB8fCBwYWdpbmF0aW9uRWwuZGF0YXNldC5pdGVtc1BlclBhZ2UgfHwgMDtcbiAgY29uc3QgcGFnaW5hdGlvbkN1cnJlbnRQYWdlID0gcGFnaW5hdGlvbkVsLmRhdGFzZXQuY3VycmVudFBhZ2UgfHwgMTtcblxuICBpZiAoIXBhZ2luYXRpb25Db250YWluZXJDbGFzcykgcmV0dXJuIHt9O1xuXG4gIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHBhZ2luYXRpb25Db250YWluZXJDbGFzcyk7XG5cbiAgaWYgKCFjb250YWluZXJzIHx8ICFjb250YWluZXJzLmxlbmd0aCkgcmV0dXJuIHt9O1xuXG4gIC8vIEFzc2lnbiBiYXNlIHNldHRpbmdzIHRvIGVhY2ggZWxlbWVudCB0aWVkIHRvIHRoZSBwYWdpbmF0aW9uXG4gIGZvciAobGV0IGNvbnRhaW5lciBvZiBjb250YWluZXJzKSB7XG4gICAgY29udGFpbmVyLmRhdGFzZXQuaXRlbUNsYXNzID0gY29udGFpbmVyLmRhdGFzZXQuaXRlbUNsYXNzIHx8IHBhZ2luYXRpb25JdGVtQ2xhc3M7XG5cbiAgICBpZiAoIWNvbnRhaW5lci5kYXRhc2V0Lml0ZW1DbGFzcykgY29udGludWU7XG5cbiAgICBpZiAoIWdldEl0ZW1zUGVyUGFnZShjb250YWluZXIpKSBzZXRJdGVtc1BlclBhZ2UoY29udGFpbmVyLCBwYWdpbmF0aW9uSXRlbXNQZXJQYWdlKTtcblxuICAgIGlmICghZ2V0Q3VycmVudFBhZ2UoY29udGFpbmVyKSkgc2V0Q3VycmVudFBhZ2UoY29udGFpbmVyLCBwYWdpbmF0aW9uQ3VycmVudFBhZ2UpO1xuXG4gICAgcmVzZXRQYWdpbmF0aW9uKGNvbnRhaW5lcik7XG4gIH1cblxuICByZXR1cm4geyBjb250YWluZXJzIH07XG59XG5cbmZ1bmN0aW9uIGdvVG9QYWdlKGNvbnRhaW5lciwgcGFnZSA9IDEpIHtcbiAgcGFnZSA9IHBhcnNlSW50KHBhZ2UpO1xuICBjb25zdCBpdGVtcyA9IGdldEl0ZW1zKGNvbnRhaW5lcik7XG4gIGNvbnN0IGxhc3RJdGVtID0gZ2V0SXRlbXNQZXJQYWdlKGNvbnRhaW5lcikgKiBwYWdlO1xuXG4gIGxldCBpID0gMTtcbiAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xuICAgIGlmIChpID4gbGFzdEl0ZW0gLSBnZXRJdGVtc1BlclBhZ2UoY29udGFpbmVyKSAmJiBpIDw9IGxhc3RJdGVtKSBpdGVtLnN0eWxlLmRpc3BsYXkgPSBpdGVtLmRhdGFzZXQuZGlzcGxheTtcbiAgICBlbHNlIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGkrKztcbiAgfVxuXG4gIHNldEN1cnJlbnRQYWdlKGNvbnRhaW5lciwgcGFnZSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNb3JlKGNvbnRhaW5lciwgaXRlbUNvdW50KSB7XG4gIGxldCBpID0gMDtcbiAgbGV0IGogPSAwO1xuICBjb25zdCBpdGVtcyA9IGdldEl0ZW1zKGNvbnRhaW5lcik7XG5cbiAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xuICAgIGkrKztcbiAgICBpZiAoaXRlbS5zdHlsZS5kaXNwbGF5ID09IGl0ZW0uZGF0YXNldC5kaXNwbGF5KSBjb250aW51ZTtcbiAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBpdGVtLmRhdGFzZXQuZGlzcGxheTtcbiAgICBqKys7XG4gICAgaWYgKGogPT0gKGl0ZW1Db3VudCB8fCBnZXRJdGVtc1BlclBhZ2UoY29udGFpbmVyKSkpIGJyZWFrO1xuICB9XG5cbiAgc2V0UmVtYWluaW5nSXRlbXMoY29udGFpbmVyLCBpdGVtcy5sZW5ndGggLSBpKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQYWdpbmF0aW9uKGNvbnRhaW5lcikge1xuICBjb25zdCBpdGVtcyA9IGdldEl0ZW1zKGNvbnRhaW5lcik7XG5cbiAgaWYgKCFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoIHx8IGdldEl0ZW1zUGVyUGFnZShjb250YWluZXIpIDw9IDEpIHJldHVybjtcblxuICAvLyBTdG9yZSBkZWZhdWx0IGl0ZW0gZGlzcGxheSBzdHlsZVxuICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICBpdGVtLmRhdGFzZXQuZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGl0ZW0sIG51bGwpLmRpc3BsYXk7XG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoY29udGFpbmVyKSB7XG4gIHJldHVybiBwYXJzZUludChjb250YWluZXIuZGF0YXNldC5jdXJyZW50UGFnZSk7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQYWdlKGNvbnRhaW5lciwgcGFnZSkge1xuICBjb250YWluZXIuZGF0YXNldC5jdXJyZW50UGFnZSA9IHBhZ2U7XG59XG5cbmZ1bmN0aW9uIGdldEl0ZW1zUGVyUGFnZShjb250YWluZXIpIHtcbiAgcmV0dXJuIHBhcnNlSW50KGNvbnRhaW5lci5kYXRhc2V0Lml0ZW1zUGVyUGFnZSk7XG59XG5cbmZ1bmN0aW9uIHNldEl0ZW1zUGVyUGFnZShjb250YWluZXIsIGl0ZW1zUGVyUGFnZSkge1xuICBjb250YWluZXIuZGF0YXNldC5pdGVtc1BlclBhZ2UgPSBpdGVtc1BlclBhZ2U7XG59XG5cbmZ1bmN0aW9uIGdldEl0ZW1zKGNvbnRhaW5lcikge1xuICByZXR1cm4gY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29udGFpbmVyLmRhdGFzZXQuaXRlbUNsYXNzKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVtYWluaW5nSXRlbXMoY29udGFpbmVyKSB7XG4gIHJldHVybiBwYXJzZUludChjb250YWluZXIuZGF0YXNldC5yZW1haW5pbmdJdGVtcyk7XG59XG5cbmZ1bmN0aW9uIHNldFJlbWFpbmluZ0l0ZW1zKGNvbnRhaW5lciwgcmVtYWluaW5nSXRlbXMpIHtcbiAgY29udGFpbmVyLmRhdGFzZXQucmVtYWluaW5nSXRlbXMgPSByZW1haW5pbmdJdGVtcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRQYWdpbmF0aW9uLFxuICByZXNldFBhZ2luYXRpb24sXG4gIGdvVG9QYWdlLFxuICBsb2FkTW9yZSxcbiAgZ2V0Q3VycmVudFBhZ2UsXG4gIGdldEl0ZW1zUGVyUGFnZSxcbiAgZ2V0SXRlbXMsXG4gIGdldFJlbWFpbmluZ0l0ZW1zLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJpbml0UGFnaW5hdGlvbiIsImdvVG9QYWdlIiwiZ2V0Q3VycmVudFBhZ2UiLCJwYWdpbmF0aW9uQ29tcG9uZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInBhZ2luYXRpb25FbGVtZW50IiwicGFnZXMiLCJwcmV2UGFnZSIsIm5leHRQYWdlIiwicGFnaW5hdGlvbiIsImNvbnRhaW5lcnMiLCJsZW5ndGgiLCJjb250YWluZXIiLCJ1cGRhdGVQYWdpbmF0aW9uIiwicGFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhc2V0IiwiaSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhZ2luYXRpb25FbCIsIml0ZW1zUGVyUGFnZSIsInBhZ2luYXRpb25Db250YWluZXJDbGFzcyIsImNvbnRhaW5lckNsYXNzIiwicGFnaW5hdGlvbkl0ZW1DbGFzcyIsIml0ZW1DbGFzcyIsInBhZ2luYXRpb25JdGVtc1BlclBhZ2UiLCJwYWdpbmF0aW9uQ3VycmVudFBhZ2UiLCJjdXJyZW50UGFnZSIsImdldEl0ZW1zUGVyUGFnZSIsInNldEl0ZW1zUGVyUGFnZSIsInNldEN1cnJlbnRQYWdlIiwicmVzZXRQYWdpbmF0aW9uIiwicGFyc2VJbnQiLCJpdGVtcyIsImdldEl0ZW1zIiwibGFzdEl0ZW0iLCJpdGVtIiwic3R5bGUiLCJkaXNwbGF5IiwibG9hZE1vcmUiLCJpdGVtQ291bnQiLCJqIiwic2V0UmVtYWluaW5nSXRlbXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UmVtYWluaW5nSXRlbXMiLCJyZW1haW5pbmdJdGVtcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9