"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Blockletter.otf */ "./src/Blockletter.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../images/sea.jpg */ "./images/sea.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'BattleFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('otf');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    min-height: 100vh;\n    margin: 0px;\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.692);\n    border-radius: 8px;\n    min-height: 80px;\n    height: 15%;\n    min-width: 540px;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-top: 2%;\n    font-size: 3rem;\n    color: white;\n    font-family: 'BattleFont';\n}\n\n.gameDiv {\n    display: flex;\n    flex-direction: row;\n    /* flex-wrap: wrap; */\n    /* background-color: rgba(0, 0, 0, 0.692); */\n    gap: 2%;\n    /* width: 100%; */\n    height: max-content;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-top: 1%;\n    margin-bottom: 2%;\n    font-size: 6vw;\n    min-width: 540px\n}\n\n@media screen and (max-width: 1500px) {\n    .gameDiv {\n        display: flex;\n        flex-direction: column;\n        gap: 15px;\n    }\n}\n\n.playerDiv {\n    width: 100%;\n    min-height: 700px;\n    /* padding: 1%; */\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.692);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.shipDiv {\n    width: 100%;\n    min-height: 700px;\n    /* padding: 1%; */\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.692);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: flex-start;\n    justify-content: flex-start;\n    gap: 20px;\n}\n\n.computerDiv {\n    width: 100%;\n    height: 700px;\n    /* padding: 1%; */\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.692);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: flex-start;\n    justify-content: flex-start;\n    gap: 20px;\n}\n\n/* .playerDiv {\n    border-right: solid red;\n} */\n\n.name {\n    font-size: 3rem;\n    color: white;\n}\n\n.grid {\n    margin-top: 150px;\n    height: 450px;\n    width: 450px;\n    display: grid;\n    grid-template: repeat(10, 45px) / repeat(10, 45px);\n    /* gap:0.25%; */\n    position: absolute;\n    padding: 0%;\n}\n\n.playerTile {\n    height: 45px;\n    width: 45px;\n    background-color: rgb(214, 214, 214);\n    border: solid black;\n    border-width: 1px;\n    display: flex;\n}\n\n.tile {\n    height: 45px;\n    width: 45px;\n    background-color: rgb(214, 214, 214);\n    border: solid black;\n    border-width: 1px;\n\n}\n\n.computertile {\n    height: 45px;\n    width: 45px;\n    background-color: rgb(214, 214, 214);\n    border: solid black;\n    border-width: 1px;\n}\n\n.shipGrid {\n    padding: 5%;\n    display: grid;\n    grid-template: repeat(5, auto) / auto;\n    gap: 15%;\n    justify-items: center;\n}\n\n.instructionDiv {\n    display: flex;\n    align-items: center;\n}\n\n\n/* container {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    margin: 30px;\n  } */\n.box {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0.7;\n    background: #0057e3;\n}\n\n\n.overlay {\n    z-index: 9;\n    margin: 0px;\n    margin-top: 150px;\n    /* background: #009938; */\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,0DAA2C;IAC3C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mDAAgC;IAChC,sBAAsB;IACtB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sCAAsC;IACtC,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,eAAe;IACf,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,4CAA4C;IAC5C,OAAO;IACP,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,cAAc;IACd;AACJ;;AAEA;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,SAAS;IACb;AACJ;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,sCAAsC;IACtC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,sCAAsC;IACtC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,2BAA2B;IAC3B,SAAS;AACb;;AAEA;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,sCAAsC;IACtC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,2BAA2B;IAC3B,SAAS;AACb;;AAEA;;GAEG;;AAEH;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,kDAAkD;IAClD,eAAe;IACf,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,mBAAmB;IACnB,iBAAiB;;AAErB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,qCAAqC;IACrC,QAAQ;IACR,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;;AAGA;;;;;KAKK;AACL;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,mBAAmB;AACvB;;;AAGA;IACI,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,yBAAyB;AAC7B","sourcesContent":["@font-face {\n    font-family: 'BattleFont';\n    src: url('./Blockletter.otf') format('otf');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    background: url(/images/sea.jpg);\n    background-size: cover;\n    min-height: 100vh;\n    margin: 0px;\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.692);\n    border-radius: 8px;\n    min-height: 80px;\n    height: 15%;\n    min-width: 540px;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-top: 2%;\n    font-size: 3rem;\n    color: white;\n    font-family: 'BattleFont';\n}\n\n.gameDiv {\n    display: flex;\n    flex-direction: row;\n    /* flex-wrap: wrap; */\n    /* background-color: rgba(0, 0, 0, 0.692); */\n    gap: 2%;\n    /* width: 100%; */\n    height: max-content;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-top: 1%;\n    margin-bottom: 2%;\n    font-size: 6vw;\n    min-width: 540px\n}\n\n@media screen and (max-width: 1500px) {\n    .gameDiv {\n        display: flex;\n        flex-direction: column;\n        gap: 15px;\n    }\n}\n\n.playerDiv {\n    width: 100%;\n    min-height: 700px;\n    /* padding: 1%; */\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.692);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.shipDiv {\n    width: 100%;\n    min-height: 700px;\n    /* padding: 1%; */\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.692);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: flex-start;\n    justify-content: flex-start;\n    gap: 20px;\n}\n\n.computerDiv {\n    width: 100%;\n    height: 700px;\n    /* padding: 1%; */\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.692);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: flex-start;\n    justify-content: flex-start;\n    gap: 20px;\n}\n\n/* .playerDiv {\n    border-right: solid red;\n} */\n\n.name {\n    font-size: 3rem;\n    color: white;\n}\n\n.grid {\n    margin-top: 150px;\n    height: 450px;\n    width: 450px;\n    display: grid;\n    grid-template: repeat(10, 45px) / repeat(10, 45px);\n    /* gap:0.25%; */\n    position: absolute;\n    padding: 0%;\n}\n\n.playerTile {\n    height: 45px;\n    width: 45px;\n    background-color: rgb(214, 214, 214);\n    border: solid black;\n    border-width: 1px;\n    display: flex;\n}\n\n.tile {\n    height: 45px;\n    width: 45px;\n    background-color: rgb(214, 214, 214);\n    border: solid black;\n    border-width: 1px;\n\n}\n\n.computertile {\n    height: 45px;\n    width: 45px;\n    background-color: rgb(214, 214, 214);\n    border: solid black;\n    border-width: 1px;\n}\n\n.shipGrid {\n    padding: 5%;\n    display: grid;\n    grid-template: repeat(5, auto) / auto;\n    gap: 15%;\n    justify-items: center;\n}\n\n.instructionDiv {\n    display: flex;\n    align-items: center;\n}\n\n\n/* container {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    margin: 30px;\n  } */\n.box {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0.7;\n    background: #0057e3;\n}\n\n\n.overlay {\n    z-index: 9;\n    margin: 0px;\n    margin-top: 150px;\n    /* background: #009938; */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/explosion.wav":
/*!***************************!*\
  !*** ./src/explosion.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "89a0ee30d91b0267b6ab86aceeb39061.wav");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _images_carrier_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../images/carrier.png */ "./images/carrier.png");
/* harmony import */ var _images_carrier90_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../images/carrier90.png */ "./images/carrier90.png");
/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../images/battleship.png */ "./images/battleship.png");
/* harmony import */ var _images_battleship90_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../images/battleship90.png */ "./images/battleship90.png");
/* harmony import */ var _images_cruiser_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../images/cruiser.png */ "./images/cruiser.png");
/* harmony import */ var _images_submarine_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../images/submarine.png */ "./images/submarine.png");
/* harmony import */ var _images_destroyer_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../images/destroyer.png */ "./images/destroyer.png");
/* harmony import */ var _images_cruiser90_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../images/cruiser90.png */ "./images/cruiser90.png");
/* harmony import */ var _images_submarine90_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../images/submarine90.png */ "./images/submarine90.png");
/* harmony import */ var _images_destroyer90_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../images/destroyer90.png */ "./images/destroyer90.png");
/* harmony import */ var _explosion_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./explosion.wav */ "./src/explosion.wav");












function game(playerShips) {

    const explosion = new Audio(); // Explosion sound when a ship is hit
    explosion.src = _explosion_wav__WEBPACK_IMPORTED_MODULE_10__["default"];

    document.getElementById('shipDiv').remove(); // Removing the grid where the drag and drop api was used to position player ships

    const computerDiv = document.createElement('div'); // Div that will display the grid used by the Computer
    computerDiv.className = 'computerDiv';
    document.querySelector('.gameDiv').appendChild(computerDiv);

    const computerName = document.createElement('span');
    computerName.className = 'name';
    computerName.textContent = 'Computer';
    computerName.style.marginTop = '4%';
    computerDiv.appendChild(computerName);

    const computerGrid = document.createElement('div');
    computerGrid.className = 'grid';
    computerGrid.id = 'computerGrid';
    computerDiv.appendChild(computerGrid);

    const gameGrid = document.createElement('div');
    gameGrid.className = 'grid overlay';
    gameGrid.id = 'gameGrid';
    computerDiv.appendChild(gameGrid);

    const playerGameGrid = document.createElement('div');
    playerGameGrid.className = 'grid overlay';
    playerGameGrid.id = 'playerGameGrid';
    document.querySelector('.playerDiv').appendChild(playerGameGrid);

    // Overlay Grid where user can click on squares
    let h = 1;
    while (h <= 100) {
        const tileComputer = document.createElement('div');
        tileComputer.id = `${h}-playerGame`;
        tileComputer.className = 'tilePlayer';
        playerGameGrid.appendChild(tileComputer);
        h++;
    }

    // Grid where images will be inserted into
    let i = 1;
    while (i <= 100) {
        const tile = document.createElement('div');
        tile.id = `${i}-Computer`;
        tile.className = 'computertile';
        computerGrid.appendChild(tile);
        i++;
    }

    // Overlay Grid where user can click on squares
    let j = 1;
    while (j <= 100) {
        const tileComputer = document.createElement('div');
        tileComputer.id = `${j}-ComputerGame`;
        tileComputer.className = 'tileComputer';
        tileComputer.addEventListener('click', fire)
        gameGrid.appendChild(tileComputer);
        j++;
    }

    // These two arrays are used to store different strategies for ship placement that will be used randomly
    let shipPositionOne = [{
            name: 'Carrier',
            imgLocation: 50,
            position1: document.getElementById('50-ComputerGame'),
            position2: document.getElementById('60-ComputerGame'),
            position3: document.getElementById('70-ComputerGame'),
            position4: document.getElementById('80-ComputerGame'),
            position5: document.getElementById('90-ComputerGame'),
            life: 5,
            height: '224px',
            width: '44px',
            src: _images_carrier90_png__WEBPACK_IMPORTED_MODULE_1__
        },
        {
            name: 'BattleShip',
            imgLocation: 37,
            position1: document.getElementById('37-ComputerGame'),
            position2: document.getElementById('38-ComputerGame'),
            position3: document.getElementById('39-ComputerGame'),
            position4: document.getElementById('40-ComputerGame'),
            life: 4,
            height: '44px',
            width: '179px',
            src: _images_battleship_png__WEBPACK_IMPORTED_MODULE_2__
        },
        {
            name: 'Cruiser',
            imgLocation: 14,
            position1: document.getElementById('14-ComputerGame'),
            position2: document.getElementById('15-ComputerGame'),
            position3: document.getElementById('16-ComputerGame'),
            height: '44px',
            width: '134px',
            life: 3,
            src: _images_cruiser_png__WEBPACK_IMPORTED_MODULE_4__
        },
        {
            name: 'Submarine',
            imgLocation: 12,
            position1: document.getElementById('12-ComputerGame'),
            position2: document.getElementById('22-ComputerGame'),
            position3: document.getElementById('32-ComputerGame'),
            life: 3,
            height: '134px',
            width: '44px',
            src: _images_submarine90_png__WEBPACK_IMPORTED_MODULE_8__
        },
        {
            name: 'Destroyer',
            imgLocation: 65,
            position1: document.getElementById('65-ComputerGame'),
            position2: document.getElementById('75-ComputerGame'),
            life: 2,
            height: '89px',
            width: '44px',
            src: _images_destroyer90_png__WEBPACK_IMPORTED_MODULE_9__
        }
    ]

    let shipPositionTwo = [{
            name: 'Carrier',
            imgLocation: 12,
            position1: document.getElementById('12-ComputerGame'),
            position2: document.getElementById('13-ComputerGame'),
            position3: document.getElementById('14-ComputerGame'),
            position4: document.getElementById('15-ComputerGame'),
            position5: document.getElementById('16-ComputerGame'),
            life: 5,
            height: '44px',
            width: '224px',
            src: _images_carrier_png__WEBPACK_IMPORTED_MODULE_0__
        },
        {
            name: 'BattleShip',
            imgLocation: 32,
            position1: document.getElementById('32-ComputerGame'),
            position2: document.getElementById('33-ComputerGame'),
            position3: document.getElementById('34-ComputerGame'),
            position4: document.getElementById('35-ComputerGame'),
            life: 4,
            height: '44px',
            width: '179px',
            src: _images_battleship_png__WEBPACK_IMPORTED_MODULE_2__
        },
        {
            name: 'Cruiser',
            imgLocation: 56,
            position1: document.getElementById('56-ComputerGame'),
            position2: document.getElementById('57-ComputerGame'),
            position3: document.getElementById('58-ComputerGame'),
            life: 3,
            height: '44px',
            width: '134px',
            src: _images_cruiser_png__WEBPACK_IMPORTED_MODULE_4__
        },
        {
            name: 'Submarine',
            imgLocation: 72,
            position1: document.getElementById('72-ComputerGame'),
            position2: document.getElementById('73-ComputerGame'),
            position3: document.getElementById('74-ComputerGame'),
            life: 3,
            height: '44px',
            width: '134px',
            src: _images_submarine_png__WEBPACK_IMPORTED_MODULE_5__
        },
        {
            name: 'Destroyer',
            imgLocation: 88,
            position1: document.getElementById('88-ComputerGame'),
            position2: document.getElementById('89-ComputerGame'),
            life: 2,
            height: '44px',
            width: '89px',
            src: _images_destroyer_png__WEBPACK_IMPORTED_MODULE_6__
        }
    ]

    const computerShipModels = [shipPositionOne, shipPositionTwo]
    // Random Selection of Computer strategy
    let randomNumber = Math.floor(Math.random() * computerShipModels.length);
    const shipChoice = computerShipModels[randomNumber];

    // 1. Carrier :
    const carrierTiles = [shipChoice[0].position1, shipChoice[0].position2, shipChoice[0].position3, shipChoice[0].position4, shipChoice[0].position5]
    for (let i = 0; i < carrierTiles.length; i++) {
        carrierTiles[i].style.backgroundColor = 'transparent';
    }

    // 2. Battleship :
    const battleshipTiles = [shipChoice[1].position1, shipChoice[1].position2, shipChoice[1].position3, shipChoice[1].position4]
    for (let i = 0; i < battleshipTiles.length; i++) {
        battleshipTiles[i].style.backgroundColor = 'transparent';
    }

    // 3. Cruiser :
    const cruiserTiles = [shipChoice[2].position1, shipChoice[2].position2, shipChoice[2].position3]
    for (let i = 0; i < cruiserTiles.length; i++) {
        cruiserTiles[i].style.backgroundColor = 'transparent';
    }

    // 4. Submarine :
    const submarineTiles = [shipChoice[3].position1, shipChoice[3].position2, shipChoice[3].position3]
    for (let i = 0; i < submarineTiles.length; i++) {
        submarineTiles[i].style.backgroundColor = 'transparent';
    }

    // 5. Destroyer :
    const destroyerTiles = [shipChoice[4].position1, shipChoice[4].position2]
    for (let i = 0; i < destroyerTiles.length; i++) {
        destroyerTiles[i].style.backgroundColor = 'transparent';
    }

    let computerShips = shipChoice;

    const instructionDiv = document.createElement('div');
    instructionDiv.className = 'instructionDiv';
    document.querySelector('.playerDiv').appendChild(instructionDiv);

    const instructions = document.createElement('span');
    instructions.textContent = 'Click on a square in Computer Grid to start a game';
    instructions.style.fontSize = '1.25rem';
    instructions.style.color = 'white';
    instructions.style.marginTop = '4%';
    instructionDiv.appendChild(instructions);

    let playerArray = []; // Player strokes are stored in this array so the computer doesnt hit a square twice

    const computerTiles = document.querySelectorAll('.tileComputer');

    function removeFire() {
        for (let i = 0; i < computerTiles.length; i++) {
            computerTiles[i].removeEventListener('click', fire);
        }
    }

    function addFire() {
        for (let i = 0; i < computerTiles.length; i++) {
            computerTiles[i].addEventListener('click', fire);
        }
    }

    function fire() { // This function enables a player to start a game and to make subsequent shots; 

        const target = document.getElementById(this.id); // Square in grid clicked by player
        target.style.textAlign = 'center';

        removeFire(); // disabling event listeners so player must wait for computer to hit a square

        if (target.textContent === 'X' || target.textContent === 'O') {
            // Nothing happens
        } else {

            let targetHuman = undefined;

            while (targetHuman === undefined) {
                let number = Math.floor(Math.random() * 101);
                if (!playerArray.includes(number) && number !== 0) {
                    playerArray.push(number);
                    targetHuman = document.getElementById(number);
                    break
                }
            }

            let ship = undefined;
            for (let i = 0; i < computerShips.length; i++) { // iterating through computer ships to find a matching position
                for (let key in computerShips[i]) {
                    if (computerShips[i][key] === target) {
                        ship = computerShips[i];
                        break
                    }
                }
            }

            if (ship === undefined) { // No ship hit
                target.textContent = 'O';
                target.setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:blue;');
                instructions.textContent = 'You miss!'

            } else { // Ship hit
                target.textContent = 'X';
                target.setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:blue;background-color:rgba(0, 0, 0, 0.692);');
                explosion.play();
                instructions.textContent = 'You hit one of their ships!';
                ship.life--;

                if (ship.life === 0) {

                    computerShips = computerShips.filter(element => element.name !== ship.name);

                    const destroyedShip = new Image();
                    destroyedShip.style.height = ship.height;
                    destroyedShip.style.width = ship.width;
                    destroyedShip.style.position = 'absolute';
                    destroyedShip.src = ship.src;

                    instructions.textContent = `You sunk their ${ship.name.toLowerCase()}!`;
                    document.getElementById(`${ship.imgLocation}-Computer`).appendChild(destroyedShip);
                }

                if (computerShips.length === 0) {
                    instructions.textContent = 'Game Over! You won!';
                    targetHuman = undefined;
                    removeFire();
                    return;
                }
            }

            let humanShip = undefined;
            // Iterating over player ship array to find the ship with corresponding  value
            for (let i = 0; i < playerShips.length; i++) {
                for (let key in playerShips[i]) {
                    if (playerShips[i][key] === targetHuman) {
                        humanShip = playerShips[i];
                        break;
                    }
                }
            }
            if (humanShip === undefined) {
                setTimeout(() => {
                    document.getElementById(`${targetHuman.id}-playerGame`).textContent = 'O';
                }, 2000);
                document.getElementById(`${targetHuman.id}-playerGame`).setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:red;');
            } else {
                setTimeout(() => {
                    document.getElementById(`${targetHuman.id}-playerGame`).textContent = 'X';
                    document.getElementById(`${targetHuman.id}-playerGame`).setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:red;background-color:rgba(0, 0, 0, 0.692);');
                    explosion.play();
                    humanShip.life--;

                    if (humanShip.life === 0) {
                        document.getElementById(`${targetHuman.id}-playerGame`).textContent = 'X';
                        playerShips = playerShips.filter(element => element.name !== humanShip.name);
                        instructions.textContent = `They sunk your ${humanShip.name.toLowerCase()}!`;
                    }
                    if (playerShips.length === 0) {
                        removeFire(); // stopping the game
                        let ship = undefined;
                        instructions.textContent = 'Game Over! You lost!';
                        return;
                    }
                }, 2000)
            }
        }

        setTimeout(() => { // enabling squares so player can hit another shot
            if(computerShips.length > 0 || playerShips.length > 0){
            addFire()}
        }, 2000);

    }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.js */ "./src/layout.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _images_carrier_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../images/carrier.png */ "./images/carrier.png");
/* harmony import */ var _images_carrier90_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../images/carrier90.png */ "./images/carrier90.png");
/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../images/battleship.png */ "./images/battleship.png");
/* harmony import */ var _images_battleship90_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../images/battleship90.png */ "./images/battleship90.png");
/* harmony import */ var _images_cruiser_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../images/cruiser.png */ "./images/cruiser.png");
/* harmony import */ var _images_submarine_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../images/submarine.png */ "./images/submarine.png");
/* harmony import */ var _images_destroyer_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../images/destroyer.png */ "./images/destroyer.png");
/* harmony import */ var _images_cruiser90_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../images/cruiser90.png */ "./images/cruiser90.png");
/* harmony import */ var _images_submarine90_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../images/submarine90.png */ "./images/submarine90.png");
/* harmony import */ var _images_destroyer90_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../images/destroyer90.png */ "./images/destroyer90.png");















(0,_layout_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

const shipDiv = document.getElementById('shipDiv');

const carrier = new Image();
carrier.id = 'carrier';
carrier.src = _images_carrier_png__WEBPACK_IMPORTED_MODULE_3__;
carrier.setAttribute('style', 'cursor:move;');
carrier.draggable = true;
carrier.style.height = '45px';
carrier.style.width = '225px';

document.querySelector('.shipGrid').appendChild(carrier);
carrier.addEventListener('drop', dropCarrier);
carrier.addEventListener('dragover', allowDrop);
carrier.addEventListener('dragstart', drag);
carrier.addEventListener('click', rotateCarrier);

let items = document.querySelectorAll('.playerTile');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('drop', dropCarrier);
    items[i].addEventListener('dragover', allowDrop);
}

const battleship = new Image();
battleship.id = 'battleship';
battleship.src = _images_battleship_png__WEBPACK_IMPORTED_MODULE_5__;
battleship.draggable = false;
battleship.setAttribute('style', 'cursor:move;z-index:1');
battleship.style.height = '45px';
battleship.style.width = '180px';
document.querySelector('.shipGrid').appendChild(battleship);

const cruiser = new Image();
cruiser.id = 'cruiser';
cruiser.src = _images_cruiser_png__WEBPACK_IMPORTED_MODULE_7__;
cruiser.draggable = false;
cruiser.setAttribute('style', 'cursor:move;z-index:1;');
cruiser.style.height = '45px';
cruiser.style.width = '135px';
document.querySelector('.shipGrid').appendChild(cruiser);

const submarine = new Image();
submarine.id = 'submarine';
submarine.src = _images_submarine_png__WEBPACK_IMPORTED_MODULE_8__;
submarine.draggable = false;
submarine.setAttribute('style', 'cursor:move;z-index:1;');
submarine.style.height = '45px';
submarine.style.width = '135px';
document.querySelector('.shipGrid').appendChild(submarine);

const destroyer = new Image();
destroyer.id = 'destroyer';
destroyer.src = _images_destroyer_png__WEBPACK_IMPORTED_MODULE_9__;
destroyer.draggable = false;
destroyer.setAttribute('style', 'cursor:move;z-index:1;');
destroyer.style.height = '45px';
destroyer.style.width = '90px';
document.querySelector('.shipGrid').appendChild(destroyer);

const HumanCarrier = {
    name: 'Carrier',
    position1: undefined,
    position2: undefined,
    position3: undefined,
    position4: undefined,
    position5: undefined,
    shipTiles: [],
    life: 5,
    src: undefined
}

const HumanBattleship = {
    name: 'BattleShip',
    position1: undefined,
    position2: undefined,
    position3: undefined,
    position4: undefined,
    shipTiles: [],
    life: 4,
    src: undefined
}

const HumanCruiser = {
    name: 'Cruiser',
    position1: undefined,
    position2: undefined,
    position3: undefined,
    shipTiles: [],
    life: 3,
    src: undefined
}

const HumanSubmarine = {
    name: 'Submarine',
    position1: undefined,
    position2: undefined,
    position3: undefined,
    shipTiles: [],
    life: 3,
    src: undefined
}

const HumanDestroyer = {
    name: 'Destroyer',
    position1: undefined,
    position2: undefined,
    shipTiles: [],
    life: 2,
    src: undefined
}

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);

}

function allowDrop(ev) {
    ev.preventDefault();
}

function dropCarrier(ev) {
    if (carrier.src == _images_carrier_png__WEBPACK_IMPORTED_MODULE_3__) {

        if (this.id > 6 && this.id <= 10 ||
            this.id > 16 && this.id <= 20 ||
            this.id > 26 && this.id <= 30 ||
            this.id > 36 && this.id <= 40 ||
            this.id > 46 && this.id <= 50 ||
            this.id > 56 && this.id <= 60 ||
            this.id > 66 && this.id <= 70 ||
            this.id > 76 && this.id <= 80 ||
            this.id > 86 && this.id <= 90 ||
            this.id > 96 && this.id <= 100) {
            //nothing
        } else {
            ev.preventDefault();
            ev.target.appendChild(document.getElementById('carrier'));
            let num = Number(this.id);
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1), document.getElementById(num + 2), document.getElementById(num + 3), document.getElementById(num + 4)]

            HumanCarrier.position1 = document.getElementById(this.id);
            HumanCarrier.position2 = document.getElementById(num + 1);
            HumanCarrier.position3 = document.getElementById(num + 2);
            HumanCarrier.position4 = document.getElementById(num + 3);
            HumanCarrier.position5 = document.getElementById(num + 4);
            HumanCarrier.src = _images_carrier_png__WEBPACK_IMPORTED_MODULE_3__;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCarrier)
                items[i].addEventListener('drop', dropBattleShip)
            }

            shipDiv.style.height = '700px';

            carrier.style.height = '44px';
            carrier.style.width = '224px';
            carrier.style.position = 'absolute';
            carrier.draggable = false;
            carrier.removeEventListener('click', rotateCarrier);
            carrier.style.cursor = 'default';

            battleship.draggable = true;
            battleship.addEventListener('click', rotateBattleship);
            battleship.addEventListener('drop', dropBattleShip);
            battleship.addEventListener('dragover', allowDrop);
            battleship.addEventListener('dragstart', drag);
        }
    } else {

        if (this.id >= 61) {
            // nothing
        } else {

            ev.preventDefault();
            ev.target.appendChild(document.getElementById('carrier'));
            let num = Number(this.id);
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10), document.getElementById(num + 20), document.getElementById(num + 30), document.getElementById(num + 40)]

            HumanCarrier.position1 = document.getElementById(this.id);
            HumanCarrier.position2 = document.getElementById(num + 10);
            HumanCarrier.position3 = document.getElementById(num + 20);
            HumanCarrier.position4 = document.getElementById(num + 30);
            HumanCarrier.position5 = document.getElementById(num + 40);
            HumanCarrier.src = _images_carrier90_png__WEBPACK_IMPORTED_MODULE_4__;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCarrier);
                items[i].addEventListener('drop', dropBattleShip);
            }

            carrier.style.height = '224px';
            carrier.style.width = '44px';
            carrier.style.position = 'absolute'
            carrier.draggable = false;
            carrier.removeEventListener('click', rotateCarrier);
            carrier.style.cursor = 'default'
            shipDiv.style.height = '700px';

            battleship.draggable = true;
            battleship.addEventListener('click', rotateBattleship);
            battleship.addEventListener('drop', dropBattleShip);
            battleship.addEventListener('dragover', allowDrop);
            battleship.addEventListener('dragstart', drag);
        }
    }
}

function dropBattleShip(ev) {
    let num = Number(this.id);
    if (battleship.src == _images_battleship_png__WEBPACK_IMPORTED_MODULE_5__) {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 1).style.backgroundColor === 'transparent' || document.getElementById(num + 2).style.backgroundColor === 'transparent' || document.getElementById(num + 3).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id > 7 && this.id <= 10 ||
            this.id > 17 && this.id <= 20 ||
            this.id > 27 && this.id <= 30 ||
            this.id > 37 && this.id <= 40 ||
            this.id > 47 && this.id <= 50 ||
            this.id > 57 && this.id <= 60 ||
            this.id > 67 && this.id <= 70 ||
            this.id > 77 && this.id <= 80 ||
            this.id > 87 && this.id <= 90 ||
            this.id > 97 && this.id <= 100) {
            // nothing
        } else {
            ev.preventDefault();
            ev.target.appendChild(document.getElementById('battleship'));
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1), document.getElementById(num + 2), document.getElementById(num + 3)]

            HumanBattleship.position1 = document.getElementById(this.id);
            HumanBattleship.position2 = document.getElementById(num + 1);
            HumanBattleship.position3 = document.getElementById(num + 2);
            HumanBattleship.position4 = document.getElementById(num + 3);
            HumanBattleship.src = _images_battleship_png__WEBPACK_IMPORTED_MODULE_5__;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropBattleShip);
                items[i].addEventListener('drop', dropCruiser);
            }

            shipDiv.style.height = '700px'
            battleship.style.height = '44px';
            battleship.style.width = '179px';
            battleship.style.position = 'absolute';
            battleship.draggable = false;
            battleship.style.cursor = 'default'
            battleship.removeEventListener('click', rotateBattleship);

            cruiser.draggable = true;
            cruiser.addEventListener('click', rotateCruiser);
            cruiser.addEventListener('drop', dropCruiser);
            cruiser.addEventListener('dragover', allowDrop);
            cruiser.addEventListener('dragstart', drag);
        }
    } else {

        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 10).style.backgroundColor === 'transparent' || document.getElementById(num + 20).style.backgroundColor === 'transparent' || document.getElementById(num + 30).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 71) {
            // nothing
        } else {
            ev.preventDefault();
            ev.target.appendChild(document.getElementById('battleship'));
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10), document.getElementById(num + 20), document.getElementById(num + 30)]

            HumanBattleship.position1 = document.getElementById(this.id);
            HumanBattleship.position2 = document.getElementById(num + 10);
            HumanBattleship.position3 = document.getElementById(num + 20);
            HumanBattleship.position4 = document.getElementById(num + 30);
            HumanBattleship.src = _images_battleship90_png__WEBPACK_IMPORTED_MODULE_6__;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }
            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropBattleShip);
                items[i].addEventListener('drop', dropCruiser);
            }
            battleship.style.height = '179px';
            battleship.style.width = '44px';
            battleship.style.position = 'absolute';
            battleship.draggable = false;
            battleship.style.cursor = 'default'
            battleship.removeEventListener('click', rotateBattleship);

            shipDiv.style.height = '700px';

            cruiser.draggable = true;
            cruiser.addEventListener('click', rotateCruiser);
            cruiser.addEventListener('drop', dropCruiser);
            cruiser.addEventListener('dragover', allowDrop);
            cruiser.addEventListener('dragstart', drag);
        }
    }
}

function dropCruiser(ev) {
    let num = Number(this.id);
    if (cruiser.src == _images_cruiser_png__WEBPACK_IMPORTED_MODULE_7__) {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 1).style.backgroundColor === 'transparent' || document.getElementById(num + 2).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id > 8 && this.id <= 10 ||
            this.id > 18 && this.id <= 20 ||
            this.id > 28 && this.id <= 30 ||
            this.id > 38 && this.id <= 40 ||
            this.id > 48 && this.id <= 50 ||
            this.id > 58 && this.id <= 60 ||
            this.id > 68 && this.id <= 70 ||
            this.id > 78 && this.id <= 80 ||
            this.id > 88 && this.id <= 90 ||
            this.id > 98 && this.id <= 100) {
            // nothing
        } else {
            ev.preventDefault();
            ev.target.appendChild(document.getElementById('cruiser'));
            let num = Number(this.id);
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1), document.getElementById(num + 2)];

            HumanCruiser.position1 = document.getElementById(this.id);
            HumanCruiser.position2 = document.getElementById(num + 1);
            HumanCruiser.position3 = document.getElementById(num + 2);
            HumanCruiser.src = _images_cruiser_png__WEBPACK_IMPORTED_MODULE_7__;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCruiser);
                items[i].addEventListener('drop', dropSubmarine);
            }

            cruiser.style.height = '44px';
            cruiser.style.width = '134px';
            cruiser.style.position = 'absolute';
            cruiser.draggable = false;
            cruiser.removeEventListener('click', rotateCruiser);
            cruiser.style.cursor = 'default';

            shipDiv.style.height = '700px';

            submarine.draggable = true;
            submarine.addEventListener('click', rotateSubmarine);
            submarine.addEventListener('drop', dropSubmarine);
            submarine.addEventListener('dragover', allowDrop);
            submarine.addEventListener('dragstart', drag);
        }
    } else {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 10).style.backgroundColor === 'transparent' || document.getElementById(num + 20).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 81) {
            // nothing
        } else {
            ev.preventDefault();
            ev.target.appendChild(document.getElementById('cruiser'));
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10), document.getElementById(num + 20)];

            HumanCruiser.position1 = document.getElementById(this.id);
            HumanCruiser.position2 = document.getElementById(num + 10);
            HumanCruiser.position3 = document.getElementById(num + 20);
            HumanCruiser.src = _images_cruiser90_png__WEBPACK_IMPORTED_MODULE_10__;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCruiser)
                items[i].addEventListener('drop', dropSubmarine)
            }

            cruiser.style.height = '134px';
            cruiser.style.width = '44px';
            cruiser.style.position = 'absolute';
            cruiser.draggable = false;
            cruiser.style.cursor = 'default'
            cruiser.removeEventListener('click', rotateCruiser);

            shipDiv.style.height = '700px';

            submarine.draggable = true;
            submarine.addEventListener('click', rotateSubmarine);
            submarine.addEventListener('drop', dropSubmarine);
            submarine.addEventListener('dragover', allowDrop);
            submarine.addEventListener('dragstart', drag);
        }
    }
}

function dropSubmarine(ev) {
    let num = Number(this.id);
    if (submarine.src == _images_submarine_png__WEBPACK_IMPORTED_MODULE_8__) {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 1).style.backgroundColor === 'transparent' || document.getElementById(num + 2).style.backgroundColor === 'transparent') {
            // nothing
        } else if (
            this.id > 8 && this.id <= 10 ||
            this.id > 18 && this.id <= 20 ||
            this.id > 28 && this.id <= 30 ||
            this.id > 38 && this.id <= 40 ||
            this.id > 48 && this.id <= 50 ||
            this.id > 58 && this.id <= 60 ||
            this.id > 68 && this.id <= 70 ||
            this.id > 78 && this.id <= 80 ||
            this.id > 88 && this.id <= 90 ||
            this.id > 98 && this.id <= 100
        ) {
            // nothing
        } else {
            ev.preventDefault();
            ev.target.appendChild(document.getElementById('submarine'));
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1), document.getElementById(num + 2)]

            HumanSubmarine.position1 = document.getElementById(this.id)
            HumanSubmarine.position2 = document.getElementById(num + 1)
            HumanSubmarine.position3 = document.getElementById(num + 2)
            HumanSubmarine.src = _images_submarine_png__WEBPACK_IMPORTED_MODULE_8__

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropSubmarine)
                items[i].addEventListener('drop', dropDestroyer)
            }

            submarine.style.height = '44px'
            submarine.style.width = '134px'
            submarine.style.position = 'absolute'
            submarine.draggable = false;
            submarine.style.cursor = 'default'
            submarine.removeEventListener('click', rotateSubmarine);

            destroyer.draggable = true;
            destroyer.addEventListener('click', rotateDestroyer);
            destroyer.addEventListener('drop', dropDestroyer);
            destroyer.addEventListener('dragover', allowDrop);
            destroyer.addEventListener('dragstart', drag);
        }
    } else {

        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 10).style.backgroundColor === 'transparent' || document.getElementById(num + 20).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 81) {
            // nothing
        } else {
            ev.preventDefault();
            ev.target.appendChild(document.getElementById('submarine'));
            let num = Number(this.id);
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10), document.getElementById(num + 20)]

            HumanSubmarine.position1 = document.getElementById(this.id);
            HumanSubmarine.position2 = document.getElementById(num + 10);
            HumanSubmarine.position3 = document.getElementById(num + 20);
            HumanSubmarine.src = _images_submarine90_png__WEBPACK_IMPORTED_MODULE_11__;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropSubmarine);
                items[i].addEventListener('drop', dropDestroyer);
            }

            submarine.style.height = '134px'
            submarine.style.width = '44px'
            submarine.style.position = 'absolute';
            submarine.draggable = false;
            submarine.style.cursor = 'default'
            submarine.removeEventListener('click', rotateSubmarine);

            destroyer.draggable = true;
            destroyer.addEventListener('click', rotateDestroyer);
            destroyer.addEventListener('drop', dropDestroyer);
            destroyer.addEventListener('dragover', allowDrop);
            destroyer.addEventListener('dragstart', drag);
        }
    }
}

function dropDestroyer(ev) {
    let num = Number(this.id);
    if (destroyer.src == _images_destroyer_png__WEBPACK_IMPORTED_MODULE_9__) {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 1).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id > 9 && this.id <= 10 ||
            this.id > 19 && this.id <= 20 ||
            this.id > 29 && this.id <= 30 ||
            this.id > 39 && this.id <= 40 ||
            this.id > 49 && this.id <= 50 ||
            this.id > 59 && this.id <= 60 ||
            this.id > 69 && this.id <= 70 ||
            this.id > 79 && this.id <= 80 ||
            this.id > 89 && this.id <= 90 ||
            this.id > 99 && this.id <= 100) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('destroyer'));
            let num = Number(this.id);
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1)];

            HumanDestroyer.position1 = document.getElementById(this.id);
            HumanDestroyer.position2 = document.getElementById(num + 1);
            HumanDestroyer.src = _images_destroyer_png__WEBPACK_IMPORTED_MODULE_9__;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }
            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropDestroyer);
            }
            destroyer.style.height = '44px';
            destroyer.style.width = '89px';
            destroyer.style.position = 'absolute';
            destroyer.draggable = false;
            destroyer.style.cursor = 'default';
            destroyer.removeEventListener('click', rotateDestroyer);
        }
        (0,_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])(playerShips);

    } else {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 10).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 91) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('destroyer'));
            let num = Number(this.id);
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10)]
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
                console.log(tiles[i]);
            }
            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropDestroyer)
            }
            destroyer.style.height = '89px';
            destroyer.style.width = '44px';
            destroyer.style.position = 'absolute';
            destroyer.draggable = false;
            destroyer.style.cursor = 'default';
            destroyer.removeEventListener('click', rotateDestroyer);
        }
        (0,_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])(playerShips);
    }
}

function rotateCarrier() {
    if (carrier.src == _images_carrier_png__WEBPACK_IMPORTED_MODULE_3__) {
        carrier.src = _images_carrier90_png__WEBPACK_IMPORTED_MODULE_4__;
        carrier.style.height = '225px';
        carrier.style.width = '45px';
        shipDiv.style.height = '1000px';
    } else {
        carrier.src = _images_carrier_png__WEBPACK_IMPORTED_MODULE_3__;
        carrier.style.height = '45px';
        carrier.style.width = '225px';
        shipDiv.style.height = '700px';
    }
}

function rotateBattleship() {
    if (battleship.src == _images_battleship_png__WEBPACK_IMPORTED_MODULE_5__) {
        battleship.src = _images_battleship90_png__WEBPACK_IMPORTED_MODULE_6__;
        battleship.style.height = '180px';
        battleship.style.width = '45px';
        shipDiv.style.height = '800px';
    } else {
        battleship.src = _images_battleship_png__WEBPACK_IMPORTED_MODULE_5__;
        battleship.style.height = '45px';
        battleship.style.width = '180px';
        shipDiv.style.height = '700px';
    }
}

function rotateCruiser() {
    if (cruiser.src == _images_cruiser_png__WEBPACK_IMPORTED_MODULE_7__) {
        cruiser.src = _images_cruiser90_png__WEBPACK_IMPORTED_MODULE_10__;
        cruiser.style.height = '135px';
        cruiser.style.width = '45px';
    } else {
        cruiser.src = _images_cruiser_png__WEBPACK_IMPORTED_MODULE_7__;
        cruiser.style.height = '45px';
        cruiser.style.width = '135px';
        shipDiv.style.height = '700px';
    }
}

function rotateSubmarine() {
    if (submarine.src == _images_submarine_png__WEBPACK_IMPORTED_MODULE_8__) {
        submarine.src = _images_submarine90_png__WEBPACK_IMPORTED_MODULE_11__;
        submarine.style.height = '135px';
        submarine.style.width = '45px';
    } else {
        submarine.src = _images_submarine_png__WEBPACK_IMPORTED_MODULE_8__;
        submarine.style.height = '45px';
        submarine.style.width = '135px';
        shipDiv.style.height = '700px';
    }
}

function rotateDestroyer() {
    if (destroyer.src == _images_destroyer_png__WEBPACK_IMPORTED_MODULE_9__) {
        destroyer.src = _images_destroyer90_png__WEBPACK_IMPORTED_MODULE_12__;
        destroyer.style.height = '90px';
        destroyer.style.width = '45px';
    } else {
        destroyer.src = _images_destroyer_png__WEBPACK_IMPORTED_MODULE_9__;
        destroyer.style.height = '45px';
        destroyer.style.width = '90px';
        shipDiv.style.height = '700px';
    }
}

// Array that will be passed as a function argument
let playerShips = [HumanCarrier, HumanBattleship, HumanCruiser, HumanSubmarine, HumanDestroyer]; 

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ layout)
/* harmony export */ });
function layout() {

    const title = document.createElement('div');
    title.className = 'title';
    document.body.appendChild(title);

    const titleSpan = document.createElement('span');
    titleSpan.textContent = 'BATTLESHIP';
    title.appendChild(titleSpan);

    const gameDiv = document.createElement('div');
    gameDiv.className = 'gameDiv';
    document.body.appendChild(gameDiv);

    const playerDiv = document.createElement('div');
    playerDiv.className = 'playerDiv';
    gameDiv.appendChild(playerDiv);

    const playerName = document.createElement('span');
    playerName.className = 'name';
    playerName.textContent = 'Human';
    playerName.style.marginTop = '4%';
    playerDiv.appendChild(playerName);

    const playerGrid = document.createElement('div');
    playerGrid.className = 'grid';
    playerGrid.id = 'playerGrid';
    playerDiv.appendChild(playerGrid);

    const shipDiv = document.createElement('div');
    shipDiv.className = 'shipDiv';
    shipDiv.id = 'shipDiv';
    gameDiv.appendChild(shipDiv);

    const shipSpan = document.createElement('span');
    shipSpan.textContent = 'Place your Ships in grid';
    shipSpan.className = 'name';
    shipSpan.style.marginTop = '4%';
    shipDiv.appendChild(shipSpan);

    const rotateSpan = document.createElement('span');
    rotateSpan.textContent = 'Click ship to change orientation';
    rotateSpan.className = 'rotate';
    rotateSpan.style.fontSize = '1.25rem';
    rotateSpan.style.cursor = 'pointer';
    rotateSpan.style.color = 'white';
    shipDiv.appendChild(rotateSpan);

    const shipGrid = document.createElement('div');
    shipGrid.className = 'shipGrid';
    shipGrid.id = 'shipGrid';
    shipDiv.appendChild(shipGrid);

    let j = 1;
    while (j <= 100) {

        const tile = document.createElement('div');
        tile.id = j;
        tile.className = 'playerTile';
        playerGrid.appendChild(tile);
        j++;
    }
}

/***/ }),

/***/ "./images/battleship.png":
/*!*******************************!*\
  !*** ./images/battleship.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "934210c3a34c6ddc7b4e.png";

/***/ }),

/***/ "./images/battleship90.png":
/*!*********************************!*\
  !*** ./images/battleship90.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "967707c586b3914b3d8b.png";

/***/ }),

/***/ "./images/carrier.png":
/*!****************************!*\
  !*** ./images/carrier.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf437607b23e4c3e5fed.png";

/***/ }),

/***/ "./images/carrier90.png":
/*!******************************!*\
  !*** ./images/carrier90.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4a96e317365212dfc56.png";

/***/ }),

/***/ "./images/cruiser.png":
/*!****************************!*\
  !*** ./images/cruiser.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79674db388fc57da3b1a.png";

/***/ }),

/***/ "./images/cruiser90.png":
/*!******************************!*\
  !*** ./images/cruiser90.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffcf5834fe8f6fcc766a.png";

/***/ }),

/***/ "./images/destroyer.png":
/*!******************************!*\
  !*** ./images/destroyer.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30824532687ceb9dfc1e.png";

/***/ }),

/***/ "./images/destroyer90.png":
/*!********************************!*\
  !*** ./images/destroyer90.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3e7c1186bafeddada5d.png";

/***/ }),

/***/ "./images/sea.jpg":
/*!************************!*\
  !*** ./images/sea.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "624c1f232ec09bf7eb2d.jpg";

/***/ }),

/***/ "./images/submarine.png":
/*!******************************!*\
  !*** ./images/submarine.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8724ca4031cda34cf451.png";

/***/ }),

/***/ "./images/submarine90.png":
/*!********************************!*\
  !*** ./images/submarine90.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7deb7922cd8ebc082d98.png";

/***/ }),

/***/ "./src/Blockletter.otf":
/*!*****************************!*\
  !*** ./src/Blockletter.otf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1148b96b8d22acea8b8c.otf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUEsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrREFBUzs7QUFFeEMsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBOztBQUVBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtREFBVTtBQUNwQztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtREFBVTs7QUFFNUMsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBOztBQUVBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscURBQVk7O0FBRTlDLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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TztBQUM5QixzQkFBc0IsbURBQVM7QUFDL0I7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IsZ0RBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixrREFBUztBQUNsQyx3QkFBd0IscURBQVc7QUFDbkM7QUFDQTtBQUNBLE1BQU07QUFDTix3QkFBd0Isa0RBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixrREFBUztBQUNsQyx3QkFBd0IscURBQVc7QUFDbkM7QUFDQTtBQUNBLE1BQU07QUFDTix3QkFBd0Isa0RBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pvQmU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZXhwbG9zaW9uLndhdiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQmxvY2tsZXR0ZXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL2ltYWdlcy9zZWEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0JhdHRsZUZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCdvdGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgbWluLWhlaWdodDogODBweDtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIG1pbi13aWR0aDogNTQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyJTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmF0dGxlRm9udCc7XFxufVxcblxcbi5nYW1lRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjkyKTsgKi9cXG4gICAgZ2FwOiAyJTtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XFxuICAgIGZvbnQtc2l6ZTogNnZ3O1xcbiAgICBtaW4td2lkdGg6IDU0MHB4XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xcbiAgICAuZ2FtZURpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTVweDtcXG4gICAgfVxcbn1cXG5cXG4ucGxheWVyRGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xcbiAgICAvKiBwYWRkaW5nOiAxJTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjkyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXBEaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNzAwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDElOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmNvbXB1dGVyRGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDElOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLyogLnBsYXllckRpdiB7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgcmVkO1xcbn0gKi9cXG5cXG4ubmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgNDVweCkgLyByZXBlYXQoMTAsIDQ1cHgpO1xcbiAgICAvKiBnYXA6MC4yNSU7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMCU7XFxufVxcblxcbi5wbGF5ZXJUaWxlIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRpbGUge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTQsIDIxNCk7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcblxcbn1cXG5cXG4uY29tcHV0ZXJ0aWxlIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuXFxuLnNoaXBHcmlkIHtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg1LCBhdXRvKSAvIGF1dG87XFxuICAgIGdhcDogMTUlO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnN0cnVjdGlvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi8qIGNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDMwcHg7XFxuICB9ICovXFxuLmJveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGJhY2tncm91bmQ6ICMwMDU3ZTM7XFxufVxcblxcblxcbi5vdmVybGF5IHtcXG4gICAgei1pbmRleDogOTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDA5OTM4OyAqL1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDBEQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbURBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRDQUE0QztJQUM1QyxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsU0FBUztJQUNiO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixTQUFTO0FBQ2I7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxRQUFRO0lBQ1IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0E7Ozs7O0tBS0s7QUFDTDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmF0dGxlRm9udCc7XFxuICAgIHNyYzogdXJsKCcuL0Jsb2NrbGV0dGVyLm90ZicpIGZvcm1hdCgnb3RmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL3NlYS5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjkyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgbWluLXdpZHRoOiA1NDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDIlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXR0bGVGb250JztcXG59XFxuXFxuLmdhbWVEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTIpOyAqL1xcbiAgICBnYXA6IDIlO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi10b3A6IDElO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gICAgZm9udC1zaXplOiA2dnc7XFxuICAgIG1pbi13aWR0aDogNTQwcHhcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XFxuICAgIC5nYW1lRGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICB9XFxufVxcblxcbi5wbGF5ZXJEaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNzAwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDElOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcERpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcXG4gICAgLyogcGFkZGluZzogMSU7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5Mik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY29tcHV0ZXJEaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gICAgLyogcGFkZGluZzogMSU7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5Mik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4vKiAucGxheWVyRGl2IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCByZWQ7XFxufSAqL1xcblxcbi5uYW1lIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCA0NXB4KSAvIHJlcGVhdCgxMCwgNDVweCk7XFxuICAgIC8qIGdhcDowLjI1JTsgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwJTtcXG59XFxuXFxuLnBsYXllclRpbGUge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTQsIDIxNCk7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGlsZSB7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuXFxufVxcblxcbi5jb21wdXRlcnRpbGUge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTQsIDIxNCk7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG4uc2hpcEdyaWQge1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDUsIGF1dG8pIC8gYXV0bztcXG4gICAgZ2FwOiAxNSU7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluc3RydWN0aW9uRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMzBweDtcXG4gIH0gKi9cXG4uYm94IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYmFja2dyb3VuZDogIzAwNTdlMztcXG59XFxuXFxuXFxuLm92ZXJsYXkge1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDk5Mzg7ICovXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4OWEwZWUzMGQ5MWIwMjY3YjZhYjg2YWNlZWIzOTA2MS53YXZcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IENhcnJpZXIgZnJvbSAnL2ltYWdlcy9jYXJyaWVyLnBuZyc7XG5pbXBvcnQgQ2FycmllcjkwIGZyb20gJy9pbWFnZXMvY2FycmllcjkwLnBuZyc7XG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcvaW1hZ2VzL2JhdHRsZXNoaXAucG5nJztcbmltcG9ydCBCYXR0bGVzaGlwOTAgZnJvbSAnL2ltYWdlcy9iYXR0bGVzaGlwOTAucG5nJztcbmltcG9ydCBDcnVpc2VyIGZyb20gJy9pbWFnZXMvY3J1aXNlci5wbmcnO1xuaW1wb3J0IFN1Ym1hcmluZSBmcm9tICcvaW1hZ2VzL3N1Ym1hcmluZS5wbmcnO1xuaW1wb3J0IERlc3Ryb3llciBmcm9tICcvaW1hZ2VzL2Rlc3Ryb3llci5wbmcnO1xuaW1wb3J0IENydWlzZXI5MCBmcm9tICcvaW1hZ2VzL2NydWlzZXI5MC5wbmcnO1xuaW1wb3J0IFN1Ym1hcmluZTkwIGZyb20gJy9pbWFnZXMvc3VibWFyaW5lOTAucG5nJztcbmltcG9ydCBEZXN0cm95ZXI5MCBmcm9tICcvaW1hZ2VzL2Rlc3Ryb3llcjkwLnBuZyc7XG5pbXBvcnQgRXhwbG9zaW9uIGZyb20gJy4vZXhwbG9zaW9uLndhdic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWUocGxheWVyU2hpcHMpIHtcblxuICAgIGNvbnN0IGV4cGxvc2lvbiA9IG5ldyBBdWRpbygpOyAvLyBFeHBsb3Npb24gc291bmQgd2hlbiBhIHNoaXAgaXMgaGl0XG4gICAgZXhwbG9zaW9uLnNyYyA9IEV4cGxvc2lvbjtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwRGl2JykucmVtb3ZlKCk7IC8vIFJlbW92aW5nIHRoZSBncmlkIHdoZXJlIHRoZSBkcmFnIGFuZCBkcm9wIGFwaSB3YXMgdXNlZCB0byBwb3NpdGlvbiBwbGF5ZXIgc2hpcHNcblxuICAgIGNvbnN0IGNvbXB1dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIERpdiB0aGF0IHdpbGwgZGlzcGxheSB0aGUgZ3JpZCB1c2VkIGJ5IHRoZSBDb21wdXRlclxuICAgIGNvbXB1dGVyRGl2LmNsYXNzTmFtZSA9ICdjb21wdXRlckRpdic7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVEaXYnKS5hcHBlbmRDaGlsZChjb21wdXRlckRpdik7XG5cbiAgICBjb25zdCBjb21wdXRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29tcHV0ZXJOYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcbiAgICBjb21wdXRlck5hbWUudGV4dENvbnRlbnQgPSAnQ29tcHV0ZXInO1xuICAgIGNvbXB1dGVyTmFtZS5zdHlsZS5tYXJnaW5Ub3AgPSAnNCUnO1xuICAgIGNvbXB1dGVyRGl2LmFwcGVuZENoaWxkKGNvbXB1dGVyTmFtZSk7XG5cbiAgICBjb25zdCBjb21wdXRlckdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wdXRlckdyaWQuY2xhc3NOYW1lID0gJ2dyaWQnO1xuICAgIGNvbXB1dGVyR3JpZC5pZCA9ICdjb21wdXRlckdyaWQnO1xuICAgIGNvbXB1dGVyRGl2LmFwcGVuZENoaWxkKGNvbXB1dGVyR3JpZCk7XG5cbiAgICBjb25zdCBnYW1lR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVHcmlkLmNsYXNzTmFtZSA9ICdncmlkIG92ZXJsYXknO1xuICAgIGdhbWVHcmlkLmlkID0gJ2dhbWVHcmlkJztcbiAgICBjb21wdXRlckRpdi5hcHBlbmRDaGlsZChnYW1lR3JpZCk7XG5cbiAgICBjb25zdCBwbGF5ZXJHYW1lR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllckdhbWVHcmlkLmNsYXNzTmFtZSA9ICdncmlkIG92ZXJsYXknO1xuICAgIHBsYXllckdhbWVHcmlkLmlkID0gJ3BsYXllckdhbWVHcmlkJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyRGl2JykuYXBwZW5kQ2hpbGQocGxheWVyR2FtZUdyaWQpO1xuXG4gICAgLy8gT3ZlcmxheSBHcmlkIHdoZXJlIHVzZXIgY2FuIGNsaWNrIG9uIHNxdWFyZXNcbiAgICBsZXQgaCA9IDE7XG4gICAgd2hpbGUgKGggPD0gMTAwKSB7XG4gICAgICAgIGNvbnN0IHRpbGVDb21wdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aWxlQ29tcHV0ZXIuaWQgPSBgJHtofS1wbGF5ZXJHYW1lYDtcbiAgICAgICAgdGlsZUNvbXB1dGVyLmNsYXNzTmFtZSA9ICd0aWxlUGxheWVyJztcbiAgICAgICAgcGxheWVyR2FtZUdyaWQuYXBwZW5kQ2hpbGQodGlsZUNvbXB1dGVyKTtcbiAgICAgICAgaCsrO1xuICAgIH1cblxuICAgIC8vIEdyaWQgd2hlcmUgaW1hZ2VzIHdpbGwgYmUgaW5zZXJ0ZWQgaW50b1xuICAgIGxldCBpID0gMTtcbiAgICB3aGlsZSAoaSA8PSAxMDApIHtcbiAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aWxlLmlkID0gYCR7aX0tQ29tcHV0ZXJgO1xuICAgICAgICB0aWxlLmNsYXNzTmFtZSA9ICdjb21wdXRlcnRpbGUnO1xuICAgICAgICBjb21wdXRlckdyaWQuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBPdmVybGF5IEdyaWQgd2hlcmUgdXNlciBjYW4gY2xpY2sgb24gc3F1YXJlc1xuICAgIGxldCBqID0gMTtcbiAgICB3aGlsZSAoaiA8PSAxMDApIHtcbiAgICAgICAgY29uc3QgdGlsZUNvbXB1dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpbGVDb21wdXRlci5pZCA9IGAke2p9LUNvbXB1dGVyR2FtZWA7XG4gICAgICAgIHRpbGVDb21wdXRlci5jbGFzc05hbWUgPSAndGlsZUNvbXB1dGVyJztcbiAgICAgICAgdGlsZUNvbXB1dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlyZSlcbiAgICAgICAgZ2FtZUdyaWQuYXBwZW5kQ2hpbGQodGlsZUNvbXB1dGVyKTtcbiAgICAgICAgaisrO1xuICAgIH1cblxuICAgIC8vIFRoZXNlIHR3byBhcnJheXMgYXJlIHVzZWQgdG8gc3RvcmUgZGlmZmVyZW50IHN0cmF0ZWdpZXMgZm9yIHNoaXAgcGxhY2VtZW50IHRoYXQgd2lsbCBiZSB1c2VkIHJhbmRvbWx5XG4gICAgbGV0IHNoaXBQb3NpdGlvbk9uZSA9IFt7XG4gICAgICAgICAgICBuYW1lOiAnQ2FycmllcicsXG4gICAgICAgICAgICBpbWdMb2NhdGlvbjogNTAsXG4gICAgICAgICAgICBwb3NpdGlvbjE6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc1MC1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzYwLUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24zOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnNzAtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc4MC1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uNTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzkwLUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgbGlmZTogNSxcbiAgICAgICAgICAgIGhlaWdodDogJzIyNHB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnNDRweCcsXG4gICAgICAgICAgICBzcmM6IENhcnJpZXI5MFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQmF0dGxlU2hpcCcsXG4gICAgICAgICAgICBpbWdMb2NhdGlvbjogMzcsXG4gICAgICAgICAgICBwb3NpdGlvbjE6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCczNy1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzM4LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24zOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMzktQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc0MC1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIGxpZmU6IDQsXG4gICAgICAgICAgICBoZWlnaHQ6ICc0NHB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTc5cHgnLFxuICAgICAgICAgICAgc3JjOiBCYXR0bGVzaGlwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdDcnVpc2VyJyxcbiAgICAgICAgICAgIGltZ0xvY2F0aW9uOiAxNCxcbiAgICAgICAgICAgIHBvc2l0aW9uMTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzE0LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24yOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMTUtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcxNi1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIGhlaWdodDogJzQ0cHgnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMzRweCcsXG4gICAgICAgICAgICBsaWZlOiAzLFxuICAgICAgICAgICAgc3JjOiBDcnVpc2VyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdTdWJtYXJpbmUnLFxuICAgICAgICAgICAgaW1nTG9jYXRpb246IDEyLFxuICAgICAgICAgICAgcG9zaXRpb24xOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMTItQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcyMi1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzMyLUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgbGlmZTogMyxcbiAgICAgICAgICAgIGhlaWdodDogJzEzNHB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnNDRweCcsXG4gICAgICAgICAgICBzcmM6IFN1Ym1hcmluZTkwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdEZXN0cm95ZXInLFxuICAgICAgICAgICAgaW1nTG9jYXRpb246IDY1LFxuICAgICAgICAgICAgcG9zaXRpb24xOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnNjUtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc3NS1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIGxpZmU6IDIsXG4gICAgICAgICAgICBoZWlnaHQ6ICc4OXB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnNDRweCcsXG4gICAgICAgICAgICBzcmM6IERlc3Ryb3llcjkwXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBsZXQgc2hpcFBvc2l0aW9uVHdvID0gW3tcbiAgICAgICAgICAgIG5hbWU6ICdDYXJyaWVyJyxcbiAgICAgICAgICAgIGltZ0xvY2F0aW9uOiAxMixcbiAgICAgICAgICAgIHBvc2l0aW9uMTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzEyLUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24yOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMTMtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcxNC1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uNDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzE1LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb241OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMTYtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBsaWZlOiA1LFxuICAgICAgICAgICAgaGVpZ2h0OiAnNDRweCcsXG4gICAgICAgICAgICB3aWR0aDogJzIyNHB4JyxcbiAgICAgICAgICAgIHNyYzogQ2FycmllclxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQmF0dGxlU2hpcCcsXG4gICAgICAgICAgICBpbWdMb2NhdGlvbjogMzIsXG4gICAgICAgICAgICBwb3NpdGlvbjE6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCczMi1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzMzLUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24zOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMzQtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCczNS1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIGxpZmU6IDQsXG4gICAgICAgICAgICBoZWlnaHQ6ICc0NHB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTc5cHgnLFxuICAgICAgICAgICAgc3JjOiBCYXR0bGVzaGlwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdDcnVpc2VyJyxcbiAgICAgICAgICAgIGltZ0xvY2F0aW9uOiA1NixcbiAgICAgICAgICAgIHBvc2l0aW9uMTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzU2LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24yOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnNTctQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc1OC1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIGxpZmU6IDMsXG4gICAgICAgICAgICBoZWlnaHQ6ICc0NHB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTM0cHgnLFxuICAgICAgICAgICAgc3JjOiBDcnVpc2VyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdTdWJtYXJpbmUnLFxuICAgICAgICAgICAgaW1nTG9jYXRpb246IDcyLFxuICAgICAgICAgICAgcG9zaXRpb24xOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnNzItQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc3My1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzc0LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgbGlmZTogMyxcbiAgICAgICAgICAgIGhlaWdodDogJzQ0cHgnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMzRweCcsXG4gICAgICAgICAgICBzcmM6IFN1Ym1hcmluZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRGVzdHJveWVyJyxcbiAgICAgICAgICAgIGltZ0xvY2F0aW9uOiA4OCxcbiAgICAgICAgICAgIHBvc2l0aW9uMTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzg4LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24yOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnODktQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBsaWZlOiAyLFxuICAgICAgICAgICAgaGVpZ2h0OiAnNDRweCcsXG4gICAgICAgICAgICB3aWR0aDogJzg5cHgnLFxuICAgICAgICAgICAgc3JjOiBEZXN0cm95ZXJcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IGNvbXB1dGVyU2hpcE1vZGVscyA9IFtzaGlwUG9zaXRpb25PbmUsIHNoaXBQb3NpdGlvblR3b11cbiAgICAvLyBSYW5kb20gU2VsZWN0aW9uIG9mIENvbXB1dGVyIHN0cmF0ZWd5XG4gICAgbGV0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyU2hpcE1vZGVscy5sZW5ndGgpO1xuICAgIGNvbnN0IHNoaXBDaG9pY2UgPSBjb21wdXRlclNoaXBNb2RlbHNbcmFuZG9tTnVtYmVyXTtcblxuICAgIC8vIDEuIENhcnJpZXIgOlxuICAgIGNvbnN0IGNhcnJpZXJUaWxlcyA9IFtzaGlwQ2hvaWNlWzBdLnBvc2l0aW9uMSwgc2hpcENob2ljZVswXS5wb3NpdGlvbjIsIHNoaXBDaG9pY2VbMF0ucG9zaXRpb24zLCBzaGlwQ2hvaWNlWzBdLnBvc2l0aW9uNCwgc2hpcENob2ljZVswXS5wb3NpdGlvbjVdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJyaWVyVGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FycmllclRpbGVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfVxuXG4gICAgLy8gMi4gQmF0dGxlc2hpcCA6XG4gICAgY29uc3QgYmF0dGxlc2hpcFRpbGVzID0gW3NoaXBDaG9pY2VbMV0ucG9zaXRpb24xLCBzaGlwQ2hvaWNlWzFdLnBvc2l0aW9uMiwgc2hpcENob2ljZVsxXS5wb3NpdGlvbjMsIHNoaXBDaG9pY2VbMV0ucG9zaXRpb240XVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmF0dGxlc2hpcFRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJhdHRsZXNoaXBUaWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH1cblxuICAgIC8vIDMuIENydWlzZXIgOlxuICAgIGNvbnN0IGNydWlzZXJUaWxlcyA9IFtzaGlwQ2hvaWNlWzJdLnBvc2l0aW9uMSwgc2hpcENob2ljZVsyXS5wb3NpdGlvbjIsIHNoaXBDaG9pY2VbMl0ucG9zaXRpb24zXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3J1aXNlclRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNydWlzZXJUaWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH1cblxuICAgIC8vIDQuIFN1Ym1hcmluZSA6XG4gICAgY29uc3Qgc3VibWFyaW5lVGlsZXMgPSBbc2hpcENob2ljZVszXS5wb3NpdGlvbjEsIHNoaXBDaG9pY2VbM10ucG9zaXRpb24yLCBzaGlwQ2hvaWNlWzNdLnBvc2l0aW9uM11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Ym1hcmluZVRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN1Ym1hcmluZVRpbGVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfVxuXG4gICAgLy8gNS4gRGVzdHJveWVyIDpcbiAgICBjb25zdCBkZXN0cm95ZXJUaWxlcyA9IFtzaGlwQ2hvaWNlWzRdLnBvc2l0aW9uMSwgc2hpcENob2ljZVs0XS5wb3NpdGlvbjJdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0cm95ZXJUaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkZXN0cm95ZXJUaWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH1cblxuICAgIGxldCBjb21wdXRlclNoaXBzID0gc2hpcENob2ljZTtcblxuICAgIGNvbnN0IGluc3RydWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5zdHJ1Y3Rpb25EaXYuY2xhc3NOYW1lID0gJ2luc3RydWN0aW9uRGl2JztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyRGl2JykuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25EaXYpO1xuXG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9ICdDbGljayBvbiBhIHNxdWFyZSBpbiBDb21wdXRlciBHcmlkIHRvIHN0YXJ0IGEgZ2FtZSc7XG4gICAgaW5zdHJ1Y3Rpb25zLnN0eWxlLmZvbnRTaXplID0gJzEuMjVyZW0nO1xuICAgIGluc3RydWN0aW9ucy5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgaW5zdHJ1Y3Rpb25zLnN0eWxlLm1hcmdpblRvcCA9ICc0JSc7XG4gICAgaW5zdHJ1Y3Rpb25EaXYuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zKTtcblxuICAgIGxldCBwbGF5ZXJBcnJheSA9IFtdOyAvLyBQbGF5ZXIgc3Ryb2tlcyBhcmUgc3RvcmVkIGluIHRoaXMgYXJyYXkgc28gdGhlIGNvbXB1dGVyIGRvZXNudCBoaXQgYSBzcXVhcmUgdHdpY2VcblxuICAgIGNvbnN0IGNvbXB1dGVyVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZUNvbXB1dGVyJyk7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGaXJlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyVGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXB1dGVyVGlsZXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEZpcmUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXJUaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcHV0ZXJUaWxlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpcmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyZSgpIHsgLy8gVGhpcyBmdW5jdGlvbiBlbmFibGVzIGEgcGxheWVyIHRvIHN0YXJ0IGEgZ2FtZSBhbmQgdG8gbWFrZSBzdWJzZXF1ZW50IHNob3RzOyBcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTsgLy8gU3F1YXJlIGluIGdyaWQgY2xpY2tlZCBieSBwbGF5ZXJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXG4gICAgICAgIHJlbW92ZUZpcmUoKTsgLy8gZGlzYWJsaW5nIGV2ZW50IGxpc3RlbmVycyBzbyBwbGF5ZXIgbXVzdCB3YWl0IGZvciBjb21wdXRlciB0byBoaXQgYSBzcXVhcmVcblxuICAgICAgICBpZiAodGFyZ2V0LnRleHRDb250ZW50ID09PSAnWCcgfHwgdGFyZ2V0LnRleHRDb250ZW50ID09PSAnTycpIHtcbiAgICAgICAgICAgIC8vIE5vdGhpbmcgaGFwcGVuc1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBsZXQgdGFyZ2V0SHVtYW4gPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXRIdW1hbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwbGF5ZXJBcnJheS5pbmNsdWRlcyhudW1iZXIpICYmIG51bWJlciAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJBcnJheS5wdXNoKG51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEh1bWFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzaGlwID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlclNoaXBzLmxlbmd0aDsgaSsrKSB7IC8vIGl0ZXJhdGluZyB0aHJvdWdoIGNvbXB1dGVyIHNoaXBzIHRvIGZpbmQgYSBtYXRjaGluZyBwb3NpdGlvblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBjb21wdXRlclNoaXBzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wdXRlclNoaXBzW2ldW2tleV0gPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcCA9IGNvbXB1dGVyU2hpcHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hpcCA9PT0gdW5kZWZpbmVkKSB7IC8vIE5vIHNoaXAgaGl0XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gJ08nO1xuICAgICAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDthbGlnbi1jb250ZW50OmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MjRweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjpibHVlOycpO1xuICAgICAgICAgICAgICAgIGluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9ICdZb3UgbWlzcyEnXG5cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIFNoaXAgaGl0XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDthbGlnbi1jb250ZW50OmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MjRweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjpibHVlO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjY5Mik7Jyk7XG4gICAgICAgICAgICAgICAgZXhwbG9zaW9uLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSAnWW91IGhpdCBvbmUgb2YgdGhlaXIgc2hpcHMhJztcbiAgICAgICAgICAgICAgICBzaGlwLmxpZmUtLTtcblxuICAgICAgICAgICAgICAgIGlmIChzaGlwLmxpZmUgPT09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlclNoaXBzID0gY29tcHV0ZXJTaGlwcy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IHNoaXAubmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdHJveWVkU2hpcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBkZXN0cm95ZWRTaGlwLnN0eWxlLmhlaWdodCA9IHNoaXAuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBkZXN0cm95ZWRTaGlwLnN0eWxlLndpZHRoID0gc2hpcC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJveWVkU2hpcC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGRlc3Ryb3llZFNoaXAuc3JjID0gc2hpcC5zcmM7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zLnRleHRDb250ZW50ID0gYFlvdSBzdW5rIHRoZWlyICR7c2hpcC5uYW1lLnRvTG93ZXJDYXNlKCl9IWA7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NoaXAuaW1nTG9jYXRpb259LUNvbXB1dGVyYCkuYXBwZW5kQ2hpbGQoZGVzdHJveWVkU2hpcCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXB1dGVyU2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9ICdHYW1lIE92ZXIhIFlvdSB3b24hJztcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SHVtYW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUZpcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGh1bWFuU2hpcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIEl0ZXJhdGluZyBvdmVyIHBsYXllciBzaGlwIGFycmF5IHRvIGZpbmQgdGhlIHNoaXAgd2l0aCBjb3JyZXNwb25kaW5nICB2YWx1ZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJTaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwbGF5ZXJTaGlwc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyU2hpcHNbaV1ba2V5XSA9PT0gdGFyZ2V0SHVtYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh1bWFuU2hpcCA9IHBsYXllclNoaXBzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaHVtYW5TaGlwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFyZ2V0SHVtYW4uaWR9LXBsYXllckdhbWVgKS50ZXh0Q29udGVudCA9ICdPJztcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXJnZXRIdW1hbi5pZH0tcGxheWVyR2FtZWApLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpmbGV4O2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZToyNHB4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOnJlZDsnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RhcmdldEh1bWFuLmlkfS1wbGF5ZXJHYW1lYCkudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RhcmdldEh1bWFuLmlkfS1wbGF5ZXJHYW1lYCkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmZsZXg7YWxpZ24tY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjI0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6cmVkO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjY5Mik7Jyk7XG4gICAgICAgICAgICAgICAgICAgIGV4cGxvc2lvbi5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIGh1bWFuU2hpcC5saWZlLS07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGh1bWFuU2hpcC5saWZlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXJnZXRIdW1hbi5pZH0tcGxheWVyR2FtZWApLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU2hpcHMgPSBwbGF5ZXJTaGlwcy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IGh1bWFuU2hpcC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9IGBUaGV5IHN1bmsgeW91ciAke2h1bWFuU2hpcC5uYW1lLnRvTG93ZXJDYXNlKCl9IWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllclNoaXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRmlyZSgpOyAvLyBzdG9wcGluZyB0aGUgZ2FtZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSAnR2FtZSBPdmVyISBZb3UgbG9zdCEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBlbmFibGluZyBzcXVhcmVzIHNvIHBsYXllciBjYW4gaGl0IGFub3RoZXIgc2hvdFxuICAgICAgICAgICAgaWYoY29tcHV0ZXJTaGlwcy5sZW5ndGggPiAwIHx8IHBsYXllclNoaXBzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgYWRkRmlyZSgpfVxuICAgICAgICB9LCAyMDAwKTtcblxuICAgIH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxheW91dCBmcm9tICcuL2xheW91dC5qcyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUuanMnO1xuaW1wb3J0IENhcnJpZXIgZnJvbSAnL2ltYWdlcy9jYXJyaWVyLnBuZyc7XG5pbXBvcnQgQ2FycmllcjkwIGZyb20gJy9pbWFnZXMvY2FycmllcjkwLnBuZyc7XG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcvaW1hZ2VzL2JhdHRsZXNoaXAucG5nJztcbmltcG9ydCBCYXR0bGVzaGlwOTAgZnJvbSAnL2ltYWdlcy9iYXR0bGVzaGlwOTAucG5nJztcbmltcG9ydCBDcnVpc2VyIGZyb20gJy9pbWFnZXMvY3J1aXNlci5wbmcnO1xuaW1wb3J0IFN1Ym1hcmluZSBmcm9tICcvaW1hZ2VzL3N1Ym1hcmluZS5wbmcnO1xuaW1wb3J0IERlc3Ryb3llciBmcm9tICcvaW1hZ2VzL2Rlc3Ryb3llci5wbmcnO1xuaW1wb3J0IENydWlzZXI5MCBmcm9tICcvaW1hZ2VzL2NydWlzZXI5MC5wbmcnO1xuaW1wb3J0IFN1Ym1hcmluZTkwIGZyb20gJy9pbWFnZXMvc3VibWFyaW5lOTAucG5nJztcbmltcG9ydCBEZXN0cm95ZXI5MCBmcm9tICcvaW1hZ2VzL2Rlc3Ryb3llcjkwLnBuZyc7XG5cblxubGF5b3V0KCk7XG5cbmNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcERpdicpO1xuXG5jb25zdCBjYXJyaWVyID0gbmV3IEltYWdlKCk7XG5jYXJyaWVyLmlkID0gJ2NhcnJpZXInO1xuY2Fycmllci5zcmMgPSBDYXJyaWVyO1xuY2Fycmllci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2N1cnNvcjptb3ZlOycpO1xuY2Fycmllci5kcmFnZ2FibGUgPSB0cnVlO1xuY2Fycmllci5zdHlsZS5oZWlnaHQgPSAnNDVweCc7XG5jYXJyaWVyLnN0eWxlLndpZHRoID0gJzIyNXB4JztcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBHcmlkJykuYXBwZW5kQ2hpbGQoY2Fycmllcik7XG5jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wQ2Fycmllcik7XG5jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgYWxsb3dEcm9wKTtcbmNhcnJpZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZyk7XG5jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQ2Fycmllcik7XG5cbmxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXJUaWxlJyk7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENhcnJpZXIpO1xuICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgYWxsb3dEcm9wKTtcbn1cblxuY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBJbWFnZSgpO1xuYmF0dGxlc2hpcC5pZCA9ICdiYXR0bGVzaGlwJztcbmJhdHRsZXNoaXAuc3JjID0gQmF0dGxlc2hpcDtcbmJhdHRsZXNoaXAuZHJhZ2dhYmxlID0gZmFsc2U7XG5iYXR0bGVzaGlwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3Vyc29yOm1vdmU7ei1pbmRleDoxJyk7XG5iYXR0bGVzaGlwLnN0eWxlLmhlaWdodCA9ICc0NXB4JztcbmJhdHRsZXNoaXAuc3R5bGUud2lkdGggPSAnMTgwcHgnO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBHcmlkJykuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcCk7XG5cbmNvbnN0IGNydWlzZXIgPSBuZXcgSW1hZ2UoKTtcbmNydWlzZXIuaWQgPSAnY3J1aXNlcic7XG5jcnVpc2VyLnNyYyA9IENydWlzZXI7XG5jcnVpc2VyLmRyYWdnYWJsZSA9IGZhbHNlO1xuY3J1aXNlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2N1cnNvcjptb3ZlO3otaW5kZXg6MTsnKTtcbmNydWlzZXIuc3R5bGUuaGVpZ2h0ID0gJzQ1cHgnO1xuY3J1aXNlci5zdHlsZS53aWR0aCA9ICcxMzVweCc7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcEdyaWQnKS5hcHBlbmRDaGlsZChjcnVpc2VyKTtcblxuY29uc3Qgc3VibWFyaW5lID0gbmV3IEltYWdlKCk7XG5zdWJtYXJpbmUuaWQgPSAnc3VibWFyaW5lJztcbnN1Ym1hcmluZS5zcmMgPSBTdWJtYXJpbmU7XG5zdWJtYXJpbmUuZHJhZ2dhYmxlID0gZmFsc2U7XG5zdWJtYXJpbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjdXJzb3I6bW92ZTt6LWluZGV4OjE7Jyk7XG5zdWJtYXJpbmUuc3R5bGUuaGVpZ2h0ID0gJzQ1cHgnO1xuc3VibWFyaW5lLnN0eWxlLndpZHRoID0gJzEzNXB4JztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwR3JpZCcpLmFwcGVuZENoaWxkKHN1Ym1hcmluZSk7XG5cbmNvbnN0IGRlc3Ryb3llciA9IG5ldyBJbWFnZSgpO1xuZGVzdHJveWVyLmlkID0gJ2Rlc3Ryb3llcic7XG5kZXN0cm95ZXIuc3JjID0gRGVzdHJveWVyO1xuZGVzdHJveWVyLmRyYWdnYWJsZSA9IGZhbHNlO1xuZGVzdHJveWVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3Vyc29yOm1vdmU7ei1pbmRleDoxOycpO1xuZGVzdHJveWVyLnN0eWxlLmhlaWdodCA9ICc0NXB4JztcbmRlc3Ryb3llci5zdHlsZS53aWR0aCA9ICc5MHB4JztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwR3JpZCcpLmFwcGVuZENoaWxkKGRlc3Ryb3llcik7XG5cbmNvbnN0IEh1bWFuQ2FycmllciA9IHtcbiAgICBuYW1lOiAnQ2FycmllcicsXG4gICAgcG9zaXRpb24xOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24yOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24zOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb240OiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb241OiB1bmRlZmluZWQsXG4gICAgc2hpcFRpbGVzOiBbXSxcbiAgICBsaWZlOiA1LFxuICAgIHNyYzogdW5kZWZpbmVkXG59XG5cbmNvbnN0IEh1bWFuQmF0dGxlc2hpcCA9IHtcbiAgICBuYW1lOiAnQmF0dGxlU2hpcCcsXG4gICAgcG9zaXRpb24xOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24yOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24zOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb240OiB1bmRlZmluZWQsXG4gICAgc2hpcFRpbGVzOiBbXSxcbiAgICBsaWZlOiA0LFxuICAgIHNyYzogdW5kZWZpbmVkXG59XG5cbmNvbnN0IEh1bWFuQ3J1aXNlciA9IHtcbiAgICBuYW1lOiAnQ3J1aXNlcicsXG4gICAgcG9zaXRpb24xOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24yOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24zOiB1bmRlZmluZWQsXG4gICAgc2hpcFRpbGVzOiBbXSxcbiAgICBsaWZlOiAzLFxuICAgIHNyYzogdW5kZWZpbmVkXG59XG5cbmNvbnN0IEh1bWFuU3VibWFyaW5lID0ge1xuICAgIG5hbWU6ICdTdWJtYXJpbmUnLFxuICAgIHBvc2l0aW9uMTogdW5kZWZpbmVkLFxuICAgIHBvc2l0aW9uMjogdW5kZWZpbmVkLFxuICAgIHBvc2l0aW9uMzogdW5kZWZpbmVkLFxuICAgIHNoaXBUaWxlczogW10sXG4gICAgbGlmZTogMyxcbiAgICBzcmM6IHVuZGVmaW5lZFxufVxuXG5jb25zdCBIdW1hbkRlc3Ryb3llciA9IHtcbiAgICBuYW1lOiAnRGVzdHJveWVyJyxcbiAgICBwb3NpdGlvbjE6IHVuZGVmaW5lZCxcbiAgICBwb3NpdGlvbjI6IHVuZGVmaW5lZCxcbiAgICBzaGlwVGlsZXM6IFtdLFxuICAgIGxpZmU6IDIsXG4gICAgc3JjOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZHJhZyhldikge1xuICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZXYudGFyZ2V0LmlkKTtcblxufVxuXG5mdW5jdGlvbiBhbGxvd0Ryb3AoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBkcm9wQ2Fycmllcihldikge1xuICAgIGlmIChjYXJyaWVyLnNyYyA9PSBDYXJyaWVyKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaWQgPiA2ICYmIHRoaXMuaWQgPD0gMTAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiAxNiAmJiB0aGlzLmlkIDw9IDIwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gMjYgJiYgdGhpcy5pZCA8PSAzMCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDM2ICYmIHRoaXMuaWQgPD0gNDAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA0NiAmJiB0aGlzLmlkIDw9IDUwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNTYgJiYgdGhpcy5pZCA8PSA2MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDY2ICYmIHRoaXMuaWQgPD0gNzAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA3NiAmJiB0aGlzLmlkIDw9IDgwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gODYgJiYgdGhpcy5pZCA8PSA5MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDk2ICYmIHRoaXMuaWQgPD0gMTAwKSB7XG4gICAgICAgICAgICAvL25vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnJpZXInKSk7XG4gICAgICAgICAgICBsZXQgbnVtID0gTnVtYmVyKHRoaXMuaWQpO1xuICAgICAgICAgICAgbGV0IHRpbGVzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDMpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyA0KV1cblxuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDIpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDMpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDQpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnNyYyA9IENhcnJpZXI7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BDYXJyaWVyKVxuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wQmF0dGxlU2hpcClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSAnNzAwcHgnO1xuXG4gICAgICAgICAgICBjYXJyaWVyLnN0eWxlLmhlaWdodCA9ICc0NHB4JztcbiAgICAgICAgICAgIGNhcnJpZXIuc3R5bGUud2lkdGggPSAnMjI0cHgnO1xuICAgICAgICAgICAgY2Fycmllci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBjYXJyaWVyLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2Fycmllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNhcnJpZXIpO1xuICAgICAgICAgICAgY2Fycmllci5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgICAgICAgICAgIGJhdHRsZXNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVCYXR0bGVzaGlwKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BCYXR0bGVTaGlwKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBhbGxvd0Ryb3ApO1xuICAgICAgICAgICAgYmF0dGxlc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaWQgPj0gNjEpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FycmllcicpKTtcbiAgICAgICAgICAgIGxldCBudW0gPSBOdW1iZXIodGhpcy5pZCk7XG4gICAgICAgICAgICBsZXQgdGlsZXMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMjApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAzMCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDQwKV1cblxuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKTtcbiAgICAgICAgICAgIEh1bWFuQ2Fycmllci5wb3NpdGlvbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyMCk7XG4gICAgICAgICAgICBIdW1hbkNhcnJpZXIucG9zaXRpb240ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMzApO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDQwKTtcbiAgICAgICAgICAgIEh1bWFuQ2Fycmllci5zcmMgPSBDYXJyaWVyOTA7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BDYXJyaWVyKTtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcEJhdHRsZVNoaXApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXJyaWVyLnN0eWxlLmhlaWdodCA9ICcyMjRweCc7XG4gICAgICAgICAgICBjYXJyaWVyLnN0eWxlLndpZHRoID0gJzQ0cHgnO1xuICAgICAgICAgICAgY2Fycmllci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAgIGNhcnJpZXIuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBjYXJyaWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQ2Fycmllcik7XG4gICAgICAgICAgICBjYXJyaWVyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgICAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSAnNzAwcHgnO1xuXG4gICAgICAgICAgICBiYXR0bGVzaGlwLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICBiYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQmF0dGxlc2hpcCk7XG4gICAgICAgICAgICBiYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wQmF0dGxlU2hpcCk7XG4gICAgICAgICAgICBiYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgYWxsb3dEcm9wKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyb3BCYXR0bGVTaGlwKGV2KSB7XG4gICAgbGV0IG51bSA9IE51bWJlcih0aGlzLmlkKTtcbiAgICBpZiAoYmF0dGxlc2hpcC5zcmMgPT0gQmF0dGxlc2hpcCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMykuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA+IDcgJiYgdGhpcy5pZCA8PSAxMCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDE3ICYmIHRoaXMuaWQgPD0gMjAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiAyNyAmJiB0aGlzLmlkIDw9IDMwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gMzcgJiYgdGhpcy5pZCA8PSA0MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDQ3ICYmIHRoaXMuaWQgPD0gNTAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA1NyAmJiB0aGlzLmlkIDw9IDYwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNjcgJiYgdGhpcy5pZCA8PSA3MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDc3ICYmIHRoaXMuaWQgPD0gODAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA4NyAmJiB0aGlzLmlkIDw9IDkwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gOTcgJiYgdGhpcy5pZCA8PSAxMDApIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdHRsZXNoaXAnKSk7XG4gICAgICAgICAgICBsZXQgdGlsZXMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMyldXG5cbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5wb3NpdGlvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5wb3NpdGlvbjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKTtcbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5wb3NpdGlvbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyKTtcbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5wb3NpdGlvbjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAzKTtcbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5zcmMgPSBCYXR0bGVzaGlwO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGlsZXNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wQmF0dGxlU2hpcCk7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BDcnVpc2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSAnNzAwcHgnXG4gICAgICAgICAgICBiYXR0bGVzaGlwLnN0eWxlLmhlaWdodCA9ICc0NHB4JztcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuc3R5bGUud2lkdGggPSAnMTc5cHgnO1xuICAgICAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBiYXR0bGVzaGlwLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCdcbiAgICAgICAgICAgIGJhdHRsZXNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVCYXR0bGVzaGlwKTtcblxuICAgICAgICAgICAgY3J1aXNlci5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNydWlzZXIpO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENydWlzZXIpO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGFsbG93RHJvcCk7XG4gICAgICAgICAgICBjcnVpc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMjApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAzMCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA+PSA3MSkge1xuICAgICAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlc2hpcCcpKTtcbiAgICAgICAgICAgIGxldCB0aWxlcyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMTApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyMCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDMwKV1cblxuICAgICAgICAgICAgSHVtYW5CYXR0bGVzaGlwLnBvc2l0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAgICAgSHVtYW5CYXR0bGVzaGlwLnBvc2l0aW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKTtcbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5wb3NpdGlvbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyMCk7XG4gICAgICAgICAgICBIdW1hbkJhdHRsZXNoaXAucG9zaXRpb240ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMzApO1xuICAgICAgICAgICAgSHVtYW5CYXR0bGVzaGlwLnNyYyA9IEJhdHRsZXNoaXA5MDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BCYXR0bGVTaGlwKTtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENydWlzZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS5oZWlnaHQgPSAnMTc5cHgnO1xuICAgICAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS53aWR0aCA9ICc0NHB4JztcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgYmF0dGxlc2hpcC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgICAgICAgICBiYXR0bGVzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQmF0dGxlc2hpcCk7XG5cbiAgICAgICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gJzcwMHB4JztcblxuICAgICAgICAgICAgY3J1aXNlci5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNydWlzZXIpO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENydWlzZXIpO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGFsbG93RHJvcCk7XG4gICAgICAgICAgICBjcnVpc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcm9wQ3J1aXNlcihldikge1xuICAgIGxldCBudW0gPSBOdW1iZXIodGhpcy5pZCk7XG4gICAgaWYgKGNydWlzZXIuc3JjID09IENydWlzZXIpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMikuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA+IDggJiYgdGhpcy5pZCA8PSAxMCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDE4ICYmIHRoaXMuaWQgPD0gMjAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiAyOCAmJiB0aGlzLmlkIDw9IDMwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gMzggJiYgdGhpcy5pZCA8PSA0MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDQ4ICYmIHRoaXMuaWQgPD0gNTAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA1OCAmJiB0aGlzLmlkIDw9IDYwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNjggJiYgdGhpcy5pZCA8PSA3MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDc4ICYmIHRoaXMuaWQgPD0gODAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA4OCAmJiB0aGlzLmlkIDw9IDkwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gOTggJiYgdGhpcy5pZCA8PSAxMDApIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydWlzZXInKSk7XG4gICAgICAgICAgICBsZXQgbnVtID0gTnVtYmVyKHRoaXMuaWQpO1xuICAgICAgICAgICAgbGV0IHRpbGVzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMildO1xuXG4gICAgICAgICAgICBIdW1hbkNydWlzZXIucG9zaXRpb24xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgICAgICBIdW1hbkNydWlzZXIucG9zaXRpb24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMSk7XG4gICAgICAgICAgICBIdW1hbkNydWlzZXIucG9zaXRpb24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMik7XG4gICAgICAgICAgICBIdW1hbkNydWlzZXIuc3JjID0gQ3J1aXNlcjtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENydWlzZXIpO1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wU3VibWFyaW5lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3J1aXNlci5zdHlsZS5oZWlnaHQgPSAnNDRweCc7XG4gICAgICAgICAgICBjcnVpc2VyLnN0eWxlLndpZHRoID0gJzEzNHB4JztcbiAgICAgICAgICAgIGNydWlzZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgY3J1aXNlci5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNydWlzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVDcnVpc2VyKTtcbiAgICAgICAgICAgIGNydWlzZXIuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuXG4gICAgICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9ICc3MDBweCc7XG5cbiAgICAgICAgICAgIHN1Ym1hcmluZS5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU3VibWFyaW5lKTtcbiAgICAgICAgICAgIHN1Ym1hcmluZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcFN1Ym1hcmluZSk7XG4gICAgICAgICAgICBzdWJtYXJpbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBhbGxvd0Ryb3ApO1xuICAgICAgICAgICAgc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxMCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDIwKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID49IDgxKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXYudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcnVpc2VyJykpO1xuICAgICAgICAgICAgbGV0IHRpbGVzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxMCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDIwKV07XG5cbiAgICAgICAgICAgIEh1bWFuQ3J1aXNlci5wb3NpdGlvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgICAgIEh1bWFuQ3J1aXNlci5wb3NpdGlvbjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxMCk7XG4gICAgICAgICAgICBIdW1hbkNydWlzZXIucG9zaXRpb24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMjApO1xuICAgICAgICAgICAgSHVtYW5DcnVpc2VyLnNyYyA9IENydWlzZXI5MDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENydWlzZXIpXG4gICAgICAgICAgICAgICAgaXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BTdWJtYXJpbmUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNydWlzZXIuc3R5bGUuaGVpZ2h0ID0gJzEzNHB4JztcbiAgICAgICAgICAgIGNydWlzZXIuc3R5bGUud2lkdGggPSAnNDRweCc7XG4gICAgICAgICAgICBjcnVpc2VyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGNydWlzZXIuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBjcnVpc2VyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgICAgICAgICAgY3J1aXNlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNydWlzZXIpO1xuXG4gICAgICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9ICc3MDBweCc7XG5cbiAgICAgICAgICAgIHN1Ym1hcmluZS5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU3VibWFyaW5lKTtcbiAgICAgICAgICAgIHN1Ym1hcmluZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcFN1Ym1hcmluZSk7XG4gICAgICAgICAgICBzdWJtYXJpbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBhbGxvd0Ryb3ApO1xuICAgICAgICAgICAgc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcm9wU3VibWFyaW5lKGV2KSB7XG4gICAgbGV0IG51bSA9IE51bWJlcih0aGlzLmlkKTtcbiAgICBpZiAoc3VibWFyaW5lLnNyYyA9PSBTdWJtYXJpbmUpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMikuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICB0aGlzLmlkID4gOCAmJiB0aGlzLmlkIDw9IDEwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gMTggJiYgdGhpcy5pZCA8PSAyMCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDI4ICYmIHRoaXMuaWQgPD0gMzAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiAzOCAmJiB0aGlzLmlkIDw9IDQwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNDggJiYgdGhpcy5pZCA8PSA1MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDU4ICYmIHRoaXMuaWQgPD0gNjAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA2OCAmJiB0aGlzLmlkIDw9IDcwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNzggJiYgdGhpcy5pZCA8PSA4MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDg4ICYmIHRoaXMuaWQgPD0gOTAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA5OCAmJiB0aGlzLmlkIDw9IDEwMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1hcmluZScpKTtcbiAgICAgICAgICAgIGxldCBudW0gPSBOdW1iZXIodGhpcy5pZClcbiAgICAgICAgICAgIGxldCB0aWxlcyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDIpXVxuXG4gICAgICAgICAgICBIdW1hblN1Ym1hcmluZS5wb3NpdGlvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKVxuICAgICAgICAgICAgSHVtYW5TdWJtYXJpbmUucG9zaXRpb24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMSlcbiAgICAgICAgICAgIEh1bWFuU3VibWFyaW5lLnBvc2l0aW9uMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDIpXG4gICAgICAgICAgICBIdW1hblN1Ym1hcmluZS5zcmMgPSBTdWJtYXJpbmVcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcFN1Ym1hcmluZSlcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcERlc3Ryb3llcilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLmhlaWdodCA9ICc0NHB4J1xuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLndpZHRoID0gJzEzNHB4J1xuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICAgc3VibWFyaW5lLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgICAgICAgICAgc3VibWFyaW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU3VibWFyaW5lKTtcblxuICAgICAgICAgICAgZGVzdHJveWVyLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICBkZXN0cm95ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVEZXN0cm95ZXIpO1xuICAgICAgICAgICAgZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wRGVzdHJveWVyKTtcbiAgICAgICAgICAgIGRlc3Ryb3llci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGFsbG93RHJvcCk7XG4gICAgICAgICAgICBkZXN0cm95ZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMTApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyMCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA+PSA4MSkge1xuICAgICAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWFyaW5lJykpO1xuICAgICAgICAgICAgbGV0IG51bSA9IE51bWJlcih0aGlzLmlkKTtcbiAgICAgICAgICAgIGxldCB0aWxlcyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMTApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyMCldXG5cbiAgICAgICAgICAgIEh1bWFuU3VibWFyaW5lLnBvc2l0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAgICAgSHVtYW5TdWJtYXJpbmUucG9zaXRpb24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMTApO1xuICAgICAgICAgICAgSHVtYW5TdWJtYXJpbmUucG9zaXRpb24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMjApO1xuICAgICAgICAgICAgSHVtYW5TdWJtYXJpbmUuc3JjID0gU3VibWFyaW5lOTA7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BTdWJtYXJpbmUpO1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wRGVzdHJveWVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLmhlaWdodCA9ICcxMzRweCdcbiAgICAgICAgICAgIHN1Ym1hcmluZS5zdHlsZS53aWR0aCA9ICc0NHB4J1xuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHN1Ym1hcmluZS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHN1Ym1hcmluZS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCdcbiAgICAgICAgICAgIHN1Ym1hcmluZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVN1Ym1hcmluZSk7XG5cbiAgICAgICAgICAgIGRlc3Ryb3llci5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlRGVzdHJveWVyKTtcbiAgICAgICAgICAgIGRlc3Ryb3llci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcERlc3Ryb3llcik7XG4gICAgICAgICAgICBkZXN0cm95ZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBhbGxvd0Ryb3ApO1xuICAgICAgICAgICAgZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcm9wRGVzdHJveWVyKGV2KSB7XG4gICAgbGV0IG51bSA9IE51bWJlcih0aGlzLmlkKTtcbiAgICBpZiAoZGVzdHJveWVyLnNyYyA9PSBEZXN0cm95ZXIpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID4gOSAmJiB0aGlzLmlkIDw9IDEwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gMTkgJiYgdGhpcy5pZCA8PSAyMCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDI5ICYmIHRoaXMuaWQgPD0gMzAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiAzOSAmJiB0aGlzLmlkIDw9IDQwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNDkgJiYgdGhpcy5pZCA8PSA1MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDU5ICYmIHRoaXMuaWQgPD0gNjAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA2OSAmJiB0aGlzLmlkIDw9IDcwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNzkgJiYgdGhpcy5pZCA8PSA4MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDg5ICYmIHRoaXMuaWQgPD0gOTAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA5OSAmJiB0aGlzLmlkIDw9IDEwMCkge1xuICAgICAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgZXYudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXN0cm95ZXInKSk7XG4gICAgICAgICAgICBsZXQgbnVtID0gTnVtYmVyKHRoaXMuaWQpO1xuICAgICAgICAgICAgbGV0IHRpbGVzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKV07XG5cbiAgICAgICAgICAgIEh1bWFuRGVzdHJveWVyLnBvc2l0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAgICAgSHVtYW5EZXN0cm95ZXIucG9zaXRpb24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMSk7XG4gICAgICAgICAgICBIdW1hbkRlc3Ryb3llci5zcmMgPSBEZXN0cm95ZXI7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wRGVzdHJveWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc3Ryb3llci5zdHlsZS5oZWlnaHQgPSAnNDRweCc7XG4gICAgICAgICAgICBkZXN0cm95ZXIuc3R5bGUud2lkdGggPSAnODlweCc7XG4gICAgICAgICAgICBkZXN0cm95ZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgZGVzdHJveWVyLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgZGVzdHJveWVyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgIGRlc3Ryb3llci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZURlc3Ryb3llcik7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZShwbGF5ZXJTaGlwcyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID49IDkxKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICAgICAgICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3Ryb3llcicpKTtcbiAgICAgICAgICAgIGxldCBudW0gPSBOdW1iZXIodGhpcy5pZCk7XG4gICAgICAgICAgICBsZXQgdGlsZXMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKV1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcERlc3Ryb3llcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc3Ryb3llci5zdHlsZS5oZWlnaHQgPSAnODlweCc7XG4gICAgICAgICAgICBkZXN0cm95ZXIuc3R5bGUud2lkdGggPSAnNDRweCc7XG4gICAgICAgICAgICBkZXN0cm95ZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgZGVzdHJveWVyLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgZGVzdHJveWVyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgIGRlc3Ryb3llci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZURlc3Ryb3llcik7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZShwbGF5ZXJTaGlwcyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVDYXJyaWVyKCkge1xuICAgIGlmIChjYXJyaWVyLnNyYyA9PSBDYXJyaWVyKSB7XG4gICAgICAgIGNhcnJpZXIuc3JjID0gQ2FycmllcjkwO1xuICAgICAgICBjYXJyaWVyLnN0eWxlLmhlaWdodCA9ICcyMjVweCc7XG4gICAgICAgIGNhcnJpZXIuc3R5bGUud2lkdGggPSAnNDVweCc7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMDBweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2Fycmllci5zcmMgPSBDYXJyaWVyO1xuICAgICAgICBjYXJyaWVyLnN0eWxlLmhlaWdodCA9ICc0NXB4JztcbiAgICAgICAgY2Fycmllci5zdHlsZS53aWR0aCA9ICcyMjVweCc7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gJzcwMHB4JztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZUJhdHRsZXNoaXAoKSB7XG4gICAgaWYgKGJhdHRsZXNoaXAuc3JjID09IEJhdHRsZXNoaXApIHtcbiAgICAgICAgYmF0dGxlc2hpcC5zcmMgPSBCYXR0bGVzaGlwOTA7XG4gICAgICAgIGJhdHRsZXNoaXAuc3R5bGUuaGVpZ2h0ID0gJzE4MHB4JztcbiAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS53aWR0aCA9ICc0NXB4JztcbiAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSAnODAwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJhdHRsZXNoaXAuc3JjID0gQmF0dGxlc2hpcDtcbiAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS5oZWlnaHQgPSAnNDVweCc7XG4gICAgICAgIGJhdHRsZXNoaXAuc3R5bGUud2lkdGggPSAnMTgwcHgnO1xuICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9ICc3MDBweCc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVDcnVpc2VyKCkge1xuICAgIGlmIChjcnVpc2VyLnNyYyA9PSBDcnVpc2VyKSB7XG4gICAgICAgIGNydWlzZXIuc3JjID0gQ3J1aXNlcjkwO1xuICAgICAgICBjcnVpc2VyLnN0eWxlLmhlaWdodCA9ICcxMzVweCc7XG4gICAgICAgIGNydWlzZXIuc3R5bGUud2lkdGggPSAnNDVweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3J1aXNlci5zcmMgPSBDcnVpc2VyO1xuICAgICAgICBjcnVpc2VyLnN0eWxlLmhlaWdodCA9ICc0NXB4JztcbiAgICAgICAgY3J1aXNlci5zdHlsZS53aWR0aCA9ICcxMzVweCc7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gJzcwMHB4JztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVN1Ym1hcmluZSgpIHtcbiAgICBpZiAoc3VibWFyaW5lLnNyYyA9PSBTdWJtYXJpbmUpIHtcbiAgICAgICAgc3VibWFyaW5lLnNyYyA9IFN1Ym1hcmluZTkwO1xuICAgICAgICBzdWJtYXJpbmUuc3R5bGUuaGVpZ2h0ID0gJzEzNXB4JztcbiAgICAgICAgc3VibWFyaW5lLnN0eWxlLndpZHRoID0gJzQ1cHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Ym1hcmluZS5zcmMgPSBTdWJtYXJpbmU7XG4gICAgICAgIHN1Ym1hcmluZS5zdHlsZS5oZWlnaHQgPSAnNDVweCc7XG4gICAgICAgIHN1Ym1hcmluZS5zdHlsZS53aWR0aCA9ICcxMzVweCc7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gJzcwMHB4JztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZURlc3Ryb3llcigpIHtcbiAgICBpZiAoZGVzdHJveWVyLnNyYyA9PSBEZXN0cm95ZXIpIHtcbiAgICAgICAgZGVzdHJveWVyLnNyYyA9IERlc3Ryb3llcjkwO1xuICAgICAgICBkZXN0cm95ZXIuc3R5bGUuaGVpZ2h0ID0gJzkwcHgnO1xuICAgICAgICBkZXN0cm95ZXIuc3R5bGUud2lkdGggPSAnNDVweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVzdHJveWVyLnNyYyA9IERlc3Ryb3llcjtcbiAgICAgICAgZGVzdHJveWVyLnN0eWxlLmhlaWdodCA9ICc0NXB4JztcbiAgICAgICAgZGVzdHJveWVyLnN0eWxlLndpZHRoID0gJzkwcHgnO1xuICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9ICc3MDBweCc7XG4gICAgfVxufVxuXG4vLyBBcnJheSB0aGF0IHdpbGwgYmUgcGFzc2VkIGFzIGEgZnVuY3Rpb24gYXJndW1lbnRcbmxldCBwbGF5ZXJTaGlwcyA9IFtIdW1hbkNhcnJpZXIsIEh1bWFuQmF0dGxlc2hpcCwgSHVtYW5DcnVpc2VyLCBIdW1hblN1Ym1hcmluZSwgSHVtYW5EZXN0cm95ZXJdOyAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYXlvdXQoKSB7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XG5cbiAgICBjb25zdCBnYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZURpdi5jbGFzc05hbWUgPSAnZ2FtZURpdic7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lRGl2KTtcblxuICAgIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllckRpdi5jbGFzc05hbWUgPSAncGxheWVyRGl2JztcbiAgICBnYW1lRGl2LmFwcGVuZENoaWxkKHBsYXllckRpdik7XG5cbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHBsYXllck5hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xuICAgIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSAnSHVtYW4nO1xuICAgIHBsYXllck5hbWUuc3R5bGUubWFyZ2luVG9wID0gJzQlJztcbiAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XG5cbiAgICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyR3JpZC5jbGFzc05hbWUgPSAnZ3JpZCc7XG4gICAgcGxheWVyR3JpZC5pZCA9ICdwbGF5ZXJHcmlkJztcbiAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQocGxheWVyR3JpZCk7XG5cbiAgICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcERpdi5jbGFzc05hbWUgPSAnc2hpcERpdic7XG4gICAgc2hpcERpdi5pZCA9ICdzaGlwRGl2JztcbiAgICBnYW1lRGl2LmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuXG4gICAgY29uc3Qgc2hpcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2hpcFNwYW4udGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBTaGlwcyBpbiBncmlkJztcbiAgICBzaGlwU3Bhbi5jbGFzc05hbWUgPSAnbmFtZSc7XG4gICAgc2hpcFNwYW4uc3R5bGUubWFyZ2luVG9wID0gJzQlJztcbiAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNoaXBTcGFuKTtcblxuICAgIGNvbnN0IHJvdGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcm90YXRlU3Bhbi50ZXh0Q29udGVudCA9ICdDbGljayBzaGlwIHRvIGNoYW5nZSBvcmllbnRhdGlvbic7XG4gICAgcm90YXRlU3Bhbi5jbGFzc05hbWUgPSAncm90YXRlJztcbiAgICByb3RhdGVTcGFuLnN0eWxlLmZvbnRTaXplID0gJzEuMjVyZW0nO1xuICAgIHJvdGF0ZVNwYW4uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIHJvdGF0ZVNwYW4uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQocm90YXRlU3Bhbik7XG5cbiAgICBjb25zdCBzaGlwR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBHcmlkLmNsYXNzTmFtZSA9ICdzaGlwR3JpZCc7XG4gICAgc2hpcEdyaWQuaWQgPSAnc2hpcEdyaWQnO1xuICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoc2hpcEdyaWQpO1xuXG4gICAgbGV0IGogPSAxO1xuICAgIHdoaWxlIChqIDw9IDEwMCkge1xuXG4gICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGlsZS5pZCA9IGo7XG4gICAgICAgIHRpbGUuY2xhc3NOYW1lID0gJ3BsYXllclRpbGUnO1xuICAgICAgICBwbGF5ZXJHcmlkLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICBqKys7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==