/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/courses.js":
/*!******************************!*\
  !*** ./src/pages/courses.js ***!
  \******************************/
/***/ (() => {

eval("// import courseData from \"../data/courses.json\";\n\nfunction loadCourses() {\n  const courseListSection = $(\"#course-list\")[0];\n\n  let courseItems = \"\";\n  _.each(courseData, (course) => {\n    const courseItem =\n      '<div class=\"card mb-3 rounded-3\" style=\"max-width: 350px\"><div class=\"row g-0 p-3\"><div class=\"col-md-4\"> <img src=\"' +\n      course.imageUrl +\n      '\" class=\"img-fluid rounded-start\"alt=\"css\"/></div><div class=\"col-md-8\"><div class=\"card-body\"><h2 class=\"card-title\">' +\n      course.title +\n      '</h2><p class=\"card-text\">' +\n      course.description +\n      '</p><p class=\"card-text\"><strong>Author: </strong><small class=\"text-muted\">' +\n      course.author +\n      \"</small></p></div></div></div> </div>\";\n    courseItems += courseItem;\n  });\n\n  courseListSection.innerHTML = courseItems;\n}\n\nloadCourses();\n\n\n//# sourceURL=webpack://8-course-project_base_initialize/./src/pages/courses.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pages/courses.js"]();
/******/ 	
/******/ })()
;