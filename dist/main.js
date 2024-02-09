/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Smaller_me_pic.JPG */ \"./src/images/Smaller_me_pic.JPG\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    font-family: 'Fira Sans', sans-serif;\n}\n\nbody {\n    margin: auto;\n    background-color: gainsboro;\n}\n\nimg {\n    display: block;\n}\n\n.about-section {\n    background: linear-gradient(175deg, rgb(45, 180, 190) 50%, gainsboro 50%);\n}\n\n.about-content {\n    max-width: 1440px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5vh 10vw;\n    margin: auto;\n}\n\n.about-name {\n    color: black;\n    font-size: 50px;\n    margin: 0;\n}\n\n.about-image {\n    z-index: 1;\n    flex-shrink: 0;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    height: 450px;\n    width: 400px;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n    border-radius: 15px;\n}\n\n.about-text-box {\n    height: fit-content;\n    margin-left: -25px;\n    background-color: whitesmoke;\n    padding: 2rem;\n    border-radius: 15px;\n    box-shadow: 7px 7px 3px darkslategray;\n}\n\n.about-title {\n    font-size: 36px;\n    font-weight: bold;\n    margin: 0;\n}\n\n.about-text {\n    font-size: 24px;\n}\n\n.projects-section {\n    max-width: 1440px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));\n    justify-items: center;\n    align-items: center;\n    padding: 0 10vw 5vh 10vw;\n    grid-gap: 2rem;\n    margin: auto;\n}\n\n.project-section-title {\n    max-width: 1440px;\n    padding: 0 10vw 1rem 10vw;\n    margin: auto;\n}\n\n.project-card {\n    width: 100%;\n    height: 475px;\n    display: flex;\n    flex-direction: column;\n    border-radius: 15px;\n    box-shadow: 7px 7px 3px darkslategray;\n    transition: .2s;\n}\n\n.project-card:hover {\n    transform: scale(1.05);\n}\n\n.project-image {\n    height: 65%;\n    object-fit: contain;\n    background-color: rgb(45, 180, 190);\n    border-radius: 15px 15px 0 0;\n}\n\n.card-description {\n    height: 35%;\n    background-color: whitesmoke;\n    padding: 1rem;\n    border-radius: 0 0 15px 15px;\n}\n\n.project-title-line {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\nh3.project-title {\n    font-size: 24px;\n    margin: 0;\n}\n\n.project-link-icons {\n    display: flex;\n    gap: 5px;\n}\n\nimg.link-icon {\n    height: 35px;\n    width: 100%;\n    transition: .4s;\n}\n\n.link-icon:hover {\n    transform: scale(1.2) rotate(-360deg);\n}\n\n.project-description {\n    font-size: 18px;\n}\n\n.contact-section {\n    background-color: rgb(45, 180, 190);\n}\n\n.contact-content {\n    max-width: 1440px;\n    height: 400px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 25px;\n    padding: 0 10vw;\n    margin: auto;\n}\n\n.contact-info {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem 0;\n}\n\n.contact-blurb,\n.address,\n.phone-email {\n    padding: .5rem 0;\n    font-size: 18px;\n}\n\n.phone-email {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.phone-email-content {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    gap: 15px;\n}\n\n.contact-icon {\n    height: 35px;\n}\n\n.contact-picture {\n    display: block;\n    height: 95%;\n    margin: 1rem 0;\n    object-fit: cover;\n    border-radius: 15px;\n}\n\n@media (min-width: 769px) and (max-width: 1150px) {\n    .about-image {\n        height: 350px;\n        width: 300px;\n    }\n\n    .about-name {\n        font-size: 44px;\n    }\n    \n    .about-text {\n        font-size: 20px;\n    }\n    \n    .project-card {\n        width: 300px;\n        height: 425px;\n    }\n\n    .project-description {\n        font-size: 16px;\n    }\n}\n\n@media (max-width: 768px) {\n    .about-content {\n        padding: 5vh 5vw;\n    }\n    \n    .about-image {\n        height: 275px;\n        width: 225px;\n    }\n\n    .about-name {\n        font-size: 36px;\n    }\n\n    .about-text-box {\n        height: fit-content;\n    }\n\n    .about-title {\n        font-size: 30px;\n    }\n\n    .about-text {\n        font-size: 16px;\n    }\n\n    .project-section-title {\n        font-size: 30px;\n        padding-bottom: 1rem;\n        text-align: center;\n    }\n\n    .projects-section {\n        padding: 0 5vw 3vh 5vw;\n    }\n\n    .contact-content {\n        padding: 0 5vw;\n    }\n}\n\n@media (max-width: 575px) {\n    .about-content {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .about-image {\n        height: 350px;\n        width: 300px;\n        margin: auto;\n        border-radius: 15px 15px 0 0;\n    }\n\n    .about-text-box {\n        width: 300px;\n        padding: .5rem;\n        height: fit-content;\n        margin-left: 0;\n        border-radius: 0 0 15px 15px;\n    }\n\n    .about-title {\n        font-size: 24px;\n    }\n\n    .about-text {\n        font-size: 14px;\n    }\n\n    .project-section-title {\n        font-size: 24px;\n        text-align: center;\n        padding-bottom: 1rem;\n    }\n\n    .projects-section {\n        justify-content: center;\n    }\n\n    .project-card {\n        width: 300px;\n        height: 365px;\n    }\n\n    .project-image{\n        width: 100%;\n    }\n\n    .project-description {\n        font-size: 14px;\n    }\n\n    .contact-content {\n        flex-direction: column;\n        align-items: center;\n        height: auto;\n    }\n\n    .contact-blurb,\n    .address,\n    .phone-email {\n        padding: .5rem 0;\n        font-size: 14px;\n    }\n\n    .contact-info {\n        padding: 0;\n    }\n\n    .contact-picture {\n        max-width: 350px;\n        padding: 0;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-homepage/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-homepage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://top-homepage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-homepage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/drums.jpg */ \"./src/images/drums.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/icons/youtube.svg */ \"./src/icons/youtube.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/Battleship_screenshot.png */ \"./src/images/Battleship_screenshot.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/icons/link-box.svg */ \"./src/icons/link-box.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/Todo_list_screenshot.png */ \"./src/images/Todo_list_screenshot.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/calculator_screenshot.png */ \"./src/images/calculator_screenshot.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/tic-tac-toe_screenshot.png */ \"./src/images/tic-tac-toe_screenshot.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/etch-a-sketch_screenshot.png */ \"./src/images/etch-a-sketch_screenshot.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../src/icons/cellphone-basic.svg */ \"./src/icons/cellphone-basic.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../src/icons/email-outline.svg */ \"./src/icons/email-outline.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/GoGurt_cropped.jpg */ \"./src/images/GoGurt_cropped.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Homepage</title>\\n</head>\\n<body>\\n    <div class=\\\"about-section\\\">\\n        <div class=\\\"about-content\\\">\\n            <div class=\\\"about-image\\\">\\n                <h1 class=\\\"about-name\\\">Josh Merhar</h1>\\n            </div>\\n            <div class=\\\"about-text-box\\\">\\n                <h1 class=\\\"about-title\\\">About Me:</h1>\\n                <p class=\\\"about-text\\\">A 2014 graduate of Berklee College of Music, I'm currently a professional drummer and private drum teacher living in Boston, MA. \\n                    While I love what I do, I'm looking to begin a career in web development. Aside from drumming in my bands, teaching, and learning programming,\\n                    I enjoy solving Rubik's cubes and hanging out with my cat, Go-Gurt. Below are a few links to some of my favorite projects so far, as well as a link\\n                    to my YouTube channel where I host over 120 drum lesson videos.</p>\\n            </div>\\n        </div>\\n    </div>\\n    <div><h1 class=\\\"project-section-title\\\">Some of my work:</h1></div>\\n    <div class=\\\"projects-section\\\">\\n        <div class=\\\"project-card\\\">\\n            <img class=\\\"project-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n            <div class=\\\"card-description\\\">\\n                <div class=\\\"project-title-line\\\">\\n                    <h3 class=\\\"project-title\\\">My YouTube Channel</h3>\\n                    <div class=\\\"project-link-icons\\\">\\n                        <a href=\\\"https://www.youtube.com/@JoshMerhar\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img class=\\\"link-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"></a>\\n                    </div>\\n                </div>\\n                <div class=\\\"project-description\\\">Over 120 drum lesson videos covering a swath of topics. Made for intermediate and advanced drummers.</div>\\n            </div>\\n        </div>\\n        <div class=\\\"project-card\\\">\\n            <img class=\\\"project-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\n            <div class=\\\"card-description\\\">\\n                <div class=\\\"project-title-line\\\">\\n                    <h3 class=\\\"project-title\\\">Battleship</h3>\\n                    <div class=\\\"project-link-icons\\\">\\n                        <a href=\\\"https://joshmerhar.github.io/TOP-Battleship/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img class=\\\"link-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"></a>\\n                        <a href=\\\"https://github.com/JoshMerhar/TOP-Battleship\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img class=\\\"link-icon\\\" src=\\\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\\\" /></a>\\n                    </div>\\n                </div>\\n                <div class=\\\"project-description\\\">An implementation of Battleship where a human faces off against the computer.</div>\\n            </div>\\n        </div>\\n        <div class=\\\"project-card\\\">\\n            <img class=\\\"project-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\n            <div class=\\\"card-description\\\">\\n                <div class=\\\"project-title-line\\\">\\n                    <h3 class=\\\"project-title\\\">To-do List</h3>\\n                    <div class=\\\"project-link-icons\\\">\\n                        <a href=\\\"https://joshmerhar.github.io/TOP-Todo-List/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img class=\\\"link-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"></a>\\n                        <a href=\\\"https://github.com/JoshMerhar/TOP-Todo-List\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img class=\\\"link-icon\\\" src=\\\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\\\" /></a>\\n                    </div>\\n                </div>\\n                <div class=\\\"project-description\\\">A little app to help you keep track of all those things you need to do.</div>\\n            </div>\\n        </div>\\n        <div class=\\\"project-card\\\">\\n            <img class=\\\"project-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\">\\n            <div class=\\\"card-description\\\">\\n                <div class=\\\"project-title-line\\\">\\n                    <h3 class=\\\"project-title\\\">Calculator</h3>\\n                    <div class=\\\"project-link-icons\\\">\\n                        <a href=\\\"https://joshmerhar.github.io/TOP-calculator/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img class=\\\"link-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"></a>\\n                        <a href=\\\"https://github.com/JoshMerhar/TOP-calculator\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img class=\\\"link-icon\\\" src=\\\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\\\" /></a>\\n                    </div>\\n                </div>\\n                <div class=\\\"project-description\\\">Fancy math-doing machine with clickable buttons.</div>\\n            </div>\\n        </div>\\n        <div class=\\\"project-card\\\">\\n            <img class=\\\"project-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\">\\n            <div class=\\\"card-description\\\">\\n                <div class=\\\"project-title-line\\\">\\n                    <h3 class=\\\"project-title\\\">Tic-Tac-Toe</h3>\\n                    <div class=\\\"project-link-icons\\\">\\n                        <a href=\\\"https://joshmerhar.github.io/TOP-TicTacToe/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img class=\\\"link-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"></a>\\n                        <a href=\\\"https://github.com/JoshMerhar/TOP-TicTacToe\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img class=\\\"link-icon\\\" src=\\\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\\\" /></a>\\n                    </div>\\n                </div>\\n                <div class=\\\"project-description\\\">Tic-tac-toe for two human players that are real humans.</div>\\n            </div>\\n        </div>\\n        <div class=\\\"project-card\\\">\\n            <img class=\\\"project-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\"> \\n            <div class=\\\"card-description\\\">\\n                <div class=\\\"project-title-line\\\">\\n                    <h3 class=\\\"project-title\\\">Etch-a-Sketch</h3>\\n                    <div class=\\\"project-link-icons\\\">\\n                        <a href=\\\"https://joshmerhar.github.io/TOP-etch-a-sketch/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img class=\\\"link-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"></a>\\n                        <a href=\\\"https://github.com/JoshMerhar/TOP-etch-a-sketch\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img class=\\\"link-icon\\\" src=\\\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\\\" /></a>\\n                    </div>\\n                </div>\\n                <div class=\\\"project-description\\\">Draw fantastic pixel images in any color you can conceive of.</div>\\n            </div>\\n        </div>\\n    </div>\\n    <div class=\\\"contact-section\\\">\\n        <div class=\\\"contact-content\\\">\\n            <div class=\\\"contact-info\\\">\\n                <h1 class=\\\"contact-title\\\">Contact me</h1>\\n                <div class=\\\"contact-blurb\\\">\\n                    <span>Please get in touch if you would like to work with me in any capacity. Go-Gurt will ensure the message gets through.</span>\\n                </div>\\n                <div class=\\\"address\\\">\\n                    <span>12 Something Road</span><br>\\n                    <span>Boston, MA 01234</span>\\n                </div>\\n                <div class=\\\"phone-email\\\">\\n                    <div class=\\\"phone-email-content\\\">\\n                        <img class=\\\"contact-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\">\\n                        <span>555-123-4321</span><br>\\n                    </div>\\n                    <div class=\\\"phone-email-content\\\">\\n                        <img class=\\\"contact-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\">\\n                        <span>veryfake@notreal.com</span>\\n                    </div>\\n                </div>\\n            </div>\\n            <img class=\\\"contact-picture\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\">\\n        </div>\\n    </div>\\n</body>\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://top-homepage/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://top-homepage/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-homepage/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-homepage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-homepage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-homepage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-homepage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-homepage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-homepage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n\n\n\n//# sourceURL=webpack://top-homepage/./src/index.js?");

/***/ }),

/***/ "./src/icons/cellphone-basic.svg":
/*!***************************************!*\
  !*** ./src/icons/cellphone-basic.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74ff2c6ad2f9ebc5d222.svg\";\n\n//# sourceURL=webpack://top-homepage/./src/icons/cellphone-basic.svg?");

/***/ }),

/***/ "./src/icons/email-outline.svg":
/*!*************************************!*\
  !*** ./src/icons/email-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ffe24abaeb56c6af70c1.svg\";\n\n//# sourceURL=webpack://top-homepage/./src/icons/email-outline.svg?");

/***/ }),

/***/ "./src/icons/link-box.svg":
/*!********************************!*\
  !*** ./src/icons/link-box.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7edd894e2940e5fc878.svg\";\n\n//# sourceURL=webpack://top-homepage/./src/icons/link-box.svg?");

/***/ }),

/***/ "./src/icons/youtube.svg":
/*!*******************************!*\
  !*** ./src/icons/youtube.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ebca23b238db1fa7eba.svg\";\n\n//# sourceURL=webpack://top-homepage/./src/icons/youtube.svg?");

/***/ }),

/***/ "./src/images/Battleship_screenshot.png":
/*!**********************************************!*\
  !*** ./src/images/Battleship_screenshot.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce668cd00aa590fdeaf4.png\";\n\n//# sourceURL=webpack://top-homepage/./src/images/Battleship_screenshot.png?");

/***/ }),

/***/ "./src/images/GoGurt_cropped.jpg":
/*!***************************************!*\
  !*** ./src/images/GoGurt_cropped.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3889c2b7a119fd1decc.jpg\";\n\n//# sourceURL=webpack://top-homepage/./src/images/GoGurt_cropped.jpg?");

/***/ }),

/***/ "./src/images/Smaller_me_pic.JPG":
/*!***************************************!*\
  !*** ./src/images/Smaller_me_pic.JPG ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"523cf7e2ac598b3167ef.JPG\";\n\n//# sourceURL=webpack://top-homepage/./src/images/Smaller_me_pic.JPG?");

/***/ }),

/***/ "./src/images/Todo_list_screenshot.png":
/*!*********************************************!*\
  !*** ./src/images/Todo_list_screenshot.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"284b6d5400e610859765.png\";\n\n//# sourceURL=webpack://top-homepage/./src/images/Todo_list_screenshot.png?");

/***/ }),

/***/ "./src/images/calculator_screenshot.png":
/*!**********************************************!*\
  !*** ./src/images/calculator_screenshot.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8bf3aea6e1a4ef3c5bc.png\";\n\n//# sourceURL=webpack://top-homepage/./src/images/calculator_screenshot.png?");

/***/ }),

/***/ "./src/images/drums.jpg":
/*!******************************!*\
  !*** ./src/images/drums.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39c4960e2408814a45a8.jpg\";\n\n//# sourceURL=webpack://top-homepage/./src/images/drums.jpg?");

/***/ }),

/***/ "./src/images/etch-a-sketch_screenshot.png":
/*!*************************************************!*\
  !*** ./src/images/etch-a-sketch_screenshot.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f31880b7a3a15caad3a.png\";\n\n//# sourceURL=webpack://top-homepage/./src/images/etch-a-sketch_screenshot.png?");

/***/ }),

/***/ "./src/images/tic-tac-toe_screenshot.png":
/*!***********************************************!*\
  !*** ./src/images/tic-tac-toe_screenshot.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"15572506ccc161f23908.png\";\n\n//# sourceURL=webpack://top-homepage/./src/images/tic-tac-toe_screenshot.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;