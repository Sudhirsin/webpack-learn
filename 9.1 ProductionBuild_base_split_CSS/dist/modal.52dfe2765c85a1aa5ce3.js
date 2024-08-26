"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_8_1_course_project_initialize"] = self["webpackChunk_8_1_course_project_initialize"] || []).push([["modal"],{

/***/ "./src/components/modal.css":
/*!**********************************!*\
  !*** ./src/components/modal.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://8.1-course-project_initialize/./src/components/modal.css?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.css */ \"./src/components/modal.css\");\n\n\nfunction showModal() {\n  const modalEl = document.createElement(\"div\");\n  modalEl.id = \"myModal\";\n  modalEl.classList.add(\"modal\");\n  modalEl.innerHTML = `\n    <div class=\"modal-content\">\n      <span id=\"closeModal\" class=\"close\">&times;</span>\n      <p>Here we show our detailed pricing !!</p>\n    </div>\n  `;\n\n  document.body.appendChild(modalEl);\n\n  const closeEl = document.getElementById(\"closeModal\");\n  closeEl.addEventListener(\"click\", function () {\n    modalEl.style.display = \"none\";\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showModal);\n\n\n//# sourceURL=webpack://8.1-course-project_initialize/./src/components/modal.js?");

/***/ })

}]);