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
                        instructions.textContent = 'Game Over! You lost!';
                        return;
                    }
                }, 2000)
            }
        }

        setTimeout(() => { // enabling squares so player can hit another shot
            addFire()
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
            
            HumanDestroyer.position1 = document.getElementById(this.id);
            HumanDestroyer.position2 = document.getElementById(num + 10);
            HumanDestroyer.src = _images_destroyer_png__WEBPACK_IMPORTED_MODULE_9__;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNCLG1EQUFTO0FBQy9CO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCLGdEQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsa0RBQVM7QUFDbEMsd0JBQXdCLHFEQUFXO0FBQ25DO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLGtEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsa0RBQVM7QUFDbEMsd0JBQXdCLHFEQUFXO0FBQ25DO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLGtEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6b0JlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2V4cGxvc2lvbi53YXYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0Jsb2NrbGV0dGVyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9pbWFnZXMvc2VhLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXR0bGVGb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnb3RmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBtaW4td2lkdGg6IDU0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0JhdHRsZUZvbnQnO1xcbn1cXG5cXG4uZ2FtZURpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5Mik7ICovXFxuICAgIGdhcDogMiU7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgICBmb250LXNpemU6IDZ2dztcXG4gICAgbWluLXdpZHRoOiA1NDBweFxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcXG4gICAgLmdhbWVEaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgIH1cXG59XFxuXFxuLnBsYXllckRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcXG4gICAgLyogcGFkZGluZzogMSU7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5Mik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwRGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xcbiAgICAvKiBwYWRkaW5nOiAxJTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjkyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5jb21wdXRlckRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbiAgICAvKiBwYWRkaW5nOiAxJTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjkyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi8qIC5wbGF5ZXJEaXYge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIHJlZDtcXG59ICovXFxuXFxuLm5hbWUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmdyaWQge1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDQ1cHgpIC8gcmVwZWF0KDEwLCA0NXB4KTtcXG4gICAgLyogZ2FwOjAuMjUlOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDAlO1xcbn1cXG5cXG4ucGxheWVyVGlsZSB7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50aWxlIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG5cXG59XFxuXFxuLmNvbXB1dGVydGlsZSB7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcblxcbi5zaGlwR3JpZCB7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNSwgYXV0bykgLyBhdXRvO1xcbiAgICBnYXA6IDE1JTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25EaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4vKiBjb250YWluZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAzMHB4O1xcbiAgfSAqL1xcbi5ib3gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDA1N2UzO1xcbn1cXG5cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgLyogYmFja2dyb3VuZDogIzAwOTkzODsgKi9cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QiwwREFBMkM7SUFDM0MsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1EQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiw0Q0FBNEM7SUFDNUMsT0FBTztJQUNQLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFNBQVM7SUFDYjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsU0FBUztBQUNiOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsUUFBUTtJQUNSLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBOzs7OztLQUtLO0FBQ0w7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0JhdHRsZUZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9CbG9ja2xldHRlci5vdGYnKSBmb3JtYXQoJ290ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2ltYWdlcy9zZWEuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgbWluLWhlaWdodDogODBweDtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIG1pbi13aWR0aDogNTQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyJTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmF0dGxlRm9udCc7XFxufVxcblxcbi5nYW1lRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjkyKTsgKi9cXG4gICAgZ2FwOiAyJTtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XFxuICAgIGZvbnQtc2l6ZTogNnZ3O1xcbiAgICBtaW4td2lkdGg6IDU0MHB4XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xcbiAgICAuZ2FtZURpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTVweDtcXG4gICAgfVxcbn1cXG5cXG4ucGxheWVyRGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xcbiAgICAvKiBwYWRkaW5nOiAxJTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjkyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXBEaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNzAwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDElOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmNvbXB1dGVyRGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDElOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLyogLnBsYXllckRpdiB7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgcmVkO1xcbn0gKi9cXG5cXG4ubmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgNDVweCkgLyByZXBlYXQoMTAsIDQ1cHgpO1xcbiAgICAvKiBnYXA6MC4yNSU7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMCU7XFxufVxcblxcbi5wbGF5ZXJUaWxlIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRpbGUge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTQsIDIxNCk7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcblxcbn1cXG5cXG4uY29tcHV0ZXJ0aWxlIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuXFxuLnNoaXBHcmlkIHtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg1LCBhdXRvKSAvIGF1dG87XFxuICAgIGdhcDogMTUlO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnN0cnVjdGlvbkRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi8qIGNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDMwcHg7XFxuICB9ICovXFxuLmJveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGJhY2tncm91bmQ6ICMwMDU3ZTM7XFxufVxcblxcblxcbi5vdmVybGF5IHtcXG4gICAgei1pbmRleDogOTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDA5OTM4OyAqL1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODlhMGVlMzBkOTFiMDI2N2I2YWI4NmFjZWViMzkwNjEud2F2XCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBDYXJyaWVyIGZyb20gJy9pbWFnZXMvY2Fycmllci5wbmcnO1xuaW1wb3J0IENhcnJpZXI5MCBmcm9tICcvaW1hZ2VzL2NhcnJpZXI5MC5wbmcnO1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSAnL2ltYWdlcy9iYXR0bGVzaGlwLnBuZyc7XG5pbXBvcnQgQmF0dGxlc2hpcDkwIGZyb20gJy9pbWFnZXMvYmF0dGxlc2hpcDkwLnBuZyc7XG5pbXBvcnQgQ3J1aXNlciBmcm9tICcvaW1hZ2VzL2NydWlzZXIucG5nJztcbmltcG9ydCBTdWJtYXJpbmUgZnJvbSAnL2ltYWdlcy9zdWJtYXJpbmUucG5nJztcbmltcG9ydCBEZXN0cm95ZXIgZnJvbSAnL2ltYWdlcy9kZXN0cm95ZXIucG5nJztcbmltcG9ydCBDcnVpc2VyOTAgZnJvbSAnL2ltYWdlcy9jcnVpc2VyOTAucG5nJztcbmltcG9ydCBTdWJtYXJpbmU5MCBmcm9tICcvaW1hZ2VzL3N1Ym1hcmluZTkwLnBuZyc7XG5pbXBvcnQgRGVzdHJveWVyOTAgZnJvbSAnL2ltYWdlcy9kZXN0cm95ZXI5MC5wbmcnO1xuaW1wb3J0IEV4cGxvc2lvbiBmcm9tICcuL2V4cGxvc2lvbi53YXYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lKHBsYXllclNoaXBzKSB7XG5cbiAgICBjb25zdCBleHBsb3Npb24gPSBuZXcgQXVkaW8oKTsgLy8gRXhwbG9zaW9uIHNvdW5kIHdoZW4gYSBzaGlwIGlzIGhpdFxuICAgIGV4cGxvc2lvbi5zcmMgPSBFeHBsb3Npb247XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcERpdicpLnJlbW92ZSgpOyAvLyBSZW1vdmluZyB0aGUgZ3JpZCB3aGVyZSB0aGUgZHJhZyBhbmQgZHJvcCBhcGkgd2FzIHVzZWQgdG8gcG9zaXRpb24gcGxheWVyIHNoaXBzXG5cbiAgICBjb25zdCBjb21wdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBEaXYgdGhhdCB3aWxsIGRpc3BsYXkgdGhlIGdyaWQgdXNlZCBieSB0aGUgQ29tcHV0ZXJcbiAgICBjb21wdXRlckRpdi5jbGFzc05hbWUgPSAnY29tcHV0ZXJEaXYnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lRGl2JykuYXBwZW5kQ2hpbGQoY29tcHV0ZXJEaXYpO1xuXG4gICAgY29uc3QgY29tcHV0ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbXB1dGVyTmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XG4gICAgY29tcHV0ZXJOYW1lLnRleHRDb250ZW50ID0gJ0NvbXB1dGVyJztcbiAgICBjb21wdXRlck5hbWUuc3R5bGUubWFyZ2luVG9wID0gJzQlJztcbiAgICBjb21wdXRlckRpdi5hcHBlbmRDaGlsZChjb21wdXRlck5hbWUpO1xuXG4gICAgY29uc3QgY29tcHV0ZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tcHV0ZXJHcmlkLmNsYXNzTmFtZSA9ICdncmlkJztcbiAgICBjb21wdXRlckdyaWQuaWQgPSAnY29tcHV0ZXJHcmlkJztcbiAgICBjb21wdXRlckRpdi5hcHBlbmRDaGlsZChjb21wdXRlckdyaWQpO1xuXG4gICAgY29uc3QgZ2FtZUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lR3JpZC5jbGFzc05hbWUgPSAnZ3JpZCBvdmVybGF5JztcbiAgICBnYW1lR3JpZC5pZCA9ICdnYW1lR3JpZCc7XG4gICAgY29tcHV0ZXJEaXYuYXBwZW5kQ2hpbGQoZ2FtZUdyaWQpO1xuXG4gICAgY29uc3QgcGxheWVyR2FtZUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJHYW1lR3JpZC5jbGFzc05hbWUgPSAnZ3JpZCBvdmVybGF5JztcbiAgICBwbGF5ZXJHYW1lR3JpZC5pZCA9ICdwbGF5ZXJHYW1lR3JpZCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckRpdicpLmFwcGVuZENoaWxkKHBsYXllckdhbWVHcmlkKTtcblxuICAgIC8vIE92ZXJsYXkgR3JpZCB3aGVyZSB1c2VyIGNhbiBjbGljayBvbiBzcXVhcmVzXG4gICAgbGV0IGggPSAxO1xuICAgIHdoaWxlIChoIDw9IDEwMCkge1xuICAgICAgICBjb25zdCB0aWxlQ29tcHV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGlsZUNvbXB1dGVyLmlkID0gYCR7aH0tcGxheWVyR2FtZWA7XG4gICAgICAgIHRpbGVDb21wdXRlci5jbGFzc05hbWUgPSAndGlsZVBsYXllcic7XG4gICAgICAgIHBsYXllckdhbWVHcmlkLmFwcGVuZENoaWxkKHRpbGVDb21wdXRlcik7XG4gICAgICAgIGgrKztcbiAgICB9XG5cbiAgICAvLyBHcmlkIHdoZXJlIGltYWdlcyB3aWxsIGJlIGluc2VydGVkIGludG9cbiAgICBsZXQgaSA9IDE7XG4gICAgd2hpbGUgKGkgPD0gMTAwKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGlsZS5pZCA9IGAke2l9LUNvbXB1dGVyYDtcbiAgICAgICAgdGlsZS5jbGFzc05hbWUgPSAnY29tcHV0ZXJ0aWxlJztcbiAgICAgICAgY29tcHV0ZXJHcmlkLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gT3ZlcmxheSBHcmlkIHdoZXJlIHVzZXIgY2FuIGNsaWNrIG9uIHNxdWFyZXNcbiAgICBsZXQgaiA9IDE7XG4gICAgd2hpbGUgKGogPD0gMTAwKSB7XG4gICAgICAgIGNvbnN0IHRpbGVDb21wdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aWxlQ29tcHV0ZXIuaWQgPSBgJHtqfS1Db21wdXRlckdhbWVgO1xuICAgICAgICB0aWxlQ29tcHV0ZXIuY2xhc3NOYW1lID0gJ3RpbGVDb21wdXRlcic7XG4gICAgICAgIHRpbGVDb21wdXRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpcmUpXG4gICAgICAgIGdhbWVHcmlkLmFwcGVuZENoaWxkKHRpbGVDb21wdXRlcik7XG4gICAgICAgIGorKztcbiAgICB9XG5cbiAgICAvLyBUaGVzZSB0d28gYXJyYXlzIGFyZSB1c2VkIHRvIHN0b3JlIGRpZmZlcmVudCBzdHJhdGVnaWVzIGZvciBzaGlwIHBsYWNlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCByYW5kb21seVxuICAgIGxldCBzaGlwUG9zaXRpb25PbmUgPSBbe1xuICAgICAgICAgICAgbmFtZTogJ0NhcnJpZXInLFxuICAgICAgICAgICAgaW1nTG9jYXRpb246IDUwLFxuICAgICAgICAgICAgcG9zaXRpb24xOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnNTAtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc2MC1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzcwLUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb240OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnODAtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc5MC1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIGxpZmU6IDUsXG4gICAgICAgICAgICBoZWlnaHQ6ICcyMjRweCcsXG4gICAgICAgICAgICB3aWR0aDogJzQ0cHgnLFxuICAgICAgICAgICAgc3JjOiBDYXJyaWVyOTBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0JhdHRsZVNoaXAnLFxuICAgICAgICAgICAgaW1nTG9jYXRpb246IDM3LFxuICAgICAgICAgICAgcG9zaXRpb24xOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMzctQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCczOC1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzM5LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb240OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnNDAtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBsaWZlOiA0LFxuICAgICAgICAgICAgaGVpZ2h0OiAnNDRweCcsXG4gICAgICAgICAgICB3aWR0aDogJzE3OXB4JyxcbiAgICAgICAgICAgIHNyYzogQmF0dGxlc2hpcFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQ3J1aXNlcicsXG4gICAgICAgICAgICBpbWdMb2NhdGlvbjogMTQsXG4gICAgICAgICAgICBwb3NpdGlvbjE6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcxNC1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzE1LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24zOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMTYtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBoZWlnaHQ6ICc0NHB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTM0cHgnLFxuICAgICAgICAgICAgbGlmZTogMyxcbiAgICAgICAgICAgIHNyYzogQ3J1aXNlclxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnU3VibWFyaW5lJyxcbiAgICAgICAgICAgIGltZ0xvY2F0aW9uOiAxMixcbiAgICAgICAgICAgIHBvc2l0aW9uMTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzEyLUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24yOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMjItQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCczMi1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIGxpZmU6IDMsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMzRweCcsXG4gICAgICAgICAgICB3aWR0aDogJzQ0cHgnLFxuICAgICAgICAgICAgc3JjOiBTdWJtYXJpbmU5MFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRGVzdHJveWVyJyxcbiAgICAgICAgICAgIGltZ0xvY2F0aW9uOiA2NSxcbiAgICAgICAgICAgIHBvc2l0aW9uMTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzY1LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24yOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnNzUtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBsaWZlOiAyLFxuICAgICAgICAgICAgaGVpZ2h0OiAnODlweCcsXG4gICAgICAgICAgICB3aWR0aDogJzQ0cHgnLFxuICAgICAgICAgICAgc3JjOiBEZXN0cm95ZXI5MFxuICAgICAgICB9XG4gICAgXVxuXG4gICAgbGV0IHNoaXBQb3NpdGlvblR3byA9IFt7XG4gICAgICAgICAgICBuYW1lOiAnQ2FycmllcicsXG4gICAgICAgICAgICBpbWdMb2NhdGlvbjogMTIsXG4gICAgICAgICAgICBwb3NpdGlvbjE6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcxMi1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzEzLUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24zOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMTQtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcxNS1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uNTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzE2LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgbGlmZTogNSxcbiAgICAgICAgICAgIGhlaWdodDogJzQ0cHgnLFxuICAgICAgICAgICAgd2lkdGg6ICcyMjRweCcsXG4gICAgICAgICAgICBzcmM6IENhcnJpZXJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0JhdHRsZVNoaXAnLFxuICAgICAgICAgICAgaW1nTG9jYXRpb246IDMyLFxuICAgICAgICAgICAgcG9zaXRpb24xOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMzItQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCczMy1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzM0LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb240OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMzUtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBsaWZlOiA0LFxuICAgICAgICAgICAgaGVpZ2h0OiAnNDRweCcsXG4gICAgICAgICAgICB3aWR0aDogJzE3OXB4JyxcbiAgICAgICAgICAgIHNyYzogQmF0dGxlc2hpcFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQ3J1aXNlcicsXG4gICAgICAgICAgICBpbWdMb2NhdGlvbjogNTYsXG4gICAgICAgICAgICBwb3NpdGlvbjE6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc1Ni1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzU3LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24zOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnNTgtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBsaWZlOiAzLFxuICAgICAgICAgICAgaGVpZ2h0OiAnNDRweCcsXG4gICAgICAgICAgICB3aWR0aDogJzEzNHB4JyxcbiAgICAgICAgICAgIHNyYzogQ3J1aXNlclxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnU3VibWFyaW5lJyxcbiAgICAgICAgICAgIGltZ0xvY2F0aW9uOiA3MixcbiAgICAgICAgICAgIHBvc2l0aW9uMTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzcyLUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgcG9zaXRpb24yOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnNzMtQ29tcHV0ZXJHYW1lJyksXG4gICAgICAgICAgICBwb3NpdGlvbjM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc3NC1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIGxpZmU6IDMsXG4gICAgICAgICAgICBoZWlnaHQ6ICc0NHB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTM0cHgnLFxuICAgICAgICAgICAgc3JjOiBTdWJtYXJpbmVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0Rlc3Ryb3llcicsXG4gICAgICAgICAgICBpbWdMb2NhdGlvbjogODgsXG4gICAgICAgICAgICBwb3NpdGlvbjE6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCc4OC1Db21wdXRlckdhbWUnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uMjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzg5LUNvbXB1dGVyR2FtZScpLFxuICAgICAgICAgICAgbGlmZTogMixcbiAgICAgICAgICAgIGhlaWdodDogJzQ0cHgnLFxuICAgICAgICAgICAgd2lkdGg6ICc4OXB4JyxcbiAgICAgICAgICAgIHNyYzogRGVzdHJveWVyXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBjb25zdCBjb21wdXRlclNoaXBNb2RlbHMgPSBbc2hpcFBvc2l0aW9uT25lLCBzaGlwUG9zaXRpb25Ud29dXG4gICAgLy8gUmFuZG9tIFNlbGVjdGlvbiBvZiBDb21wdXRlciBzdHJhdGVneVxuICAgIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclNoaXBNb2RlbHMubGVuZ3RoKTtcbiAgICBjb25zdCBzaGlwQ2hvaWNlID0gY29tcHV0ZXJTaGlwTW9kZWxzW3JhbmRvbU51bWJlcl07XG5cbiAgICAvLyAxLiBDYXJyaWVyIDpcbiAgICBjb25zdCBjYXJyaWVyVGlsZXMgPSBbc2hpcENob2ljZVswXS5wb3NpdGlvbjEsIHNoaXBDaG9pY2VbMF0ucG9zaXRpb24yLCBzaGlwQ2hvaWNlWzBdLnBvc2l0aW9uMywgc2hpcENob2ljZVswXS5wb3NpdGlvbjQsIHNoaXBDaG9pY2VbMF0ucG9zaXRpb241XVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FycmllclRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhcnJpZXJUaWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH1cblxuICAgIC8vIDIuIEJhdHRsZXNoaXAgOlxuICAgIGNvbnN0IGJhdHRsZXNoaXBUaWxlcyA9IFtzaGlwQ2hvaWNlWzFdLnBvc2l0aW9uMSwgc2hpcENob2ljZVsxXS5wb3NpdGlvbjIsIHNoaXBDaG9pY2VbMV0ucG9zaXRpb24zLCBzaGlwQ2hvaWNlWzFdLnBvc2l0aW9uNF1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhdHRsZXNoaXBUaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBiYXR0bGVzaGlwVGlsZXNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB9XG5cbiAgICAvLyAzLiBDcnVpc2VyIDpcbiAgICBjb25zdCBjcnVpc2VyVGlsZXMgPSBbc2hpcENob2ljZVsyXS5wb3NpdGlvbjEsIHNoaXBDaG9pY2VbMl0ucG9zaXRpb24yLCBzaGlwQ2hvaWNlWzJdLnBvc2l0aW9uM11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNydWlzZXJUaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjcnVpc2VyVGlsZXNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB9XG5cbiAgICAvLyA0LiBTdWJtYXJpbmUgOlxuICAgIGNvbnN0IHN1Ym1hcmluZVRpbGVzID0gW3NoaXBDaG9pY2VbM10ucG9zaXRpb24xLCBzaGlwQ2hvaWNlWzNdLnBvc2l0aW9uMiwgc2hpcENob2ljZVszXS5wb3NpdGlvbjNdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJtYXJpbmVUaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdWJtYXJpbmVUaWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH1cblxuICAgIC8vIDUuIERlc3Ryb3llciA6XG4gICAgY29uc3QgZGVzdHJveWVyVGlsZXMgPSBbc2hpcENob2ljZVs0XS5wb3NpdGlvbjEsIHNoaXBDaG9pY2VbNF0ucG9zaXRpb24yXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzdHJveWVyVGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGVzdHJveWVyVGlsZXNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB9XG5cbiAgICBsZXQgY29tcHV0ZXJTaGlwcyA9IHNoaXBDaG9pY2U7XG5cbiAgICBjb25zdCBpbnN0cnVjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluc3RydWN0aW9uRGl2LmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbkRpdic7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckRpdicpLmFwcGVuZENoaWxkKGluc3RydWN0aW9uRGl2KTtcblxuICAgIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSAnQ2xpY2sgb24gYSBzcXVhcmUgaW4gQ29tcHV0ZXIgR3JpZCB0byBzdGFydCBhIGdhbWUnO1xuICAgIGluc3RydWN0aW9ucy5zdHlsZS5mb250U2l6ZSA9ICcxLjI1cmVtJztcbiAgICBpbnN0cnVjdGlvbnMuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIGluc3RydWN0aW9ucy5zdHlsZS5tYXJnaW5Ub3AgPSAnNCUnO1xuICAgIGluc3RydWN0aW9uRGl2LmFwcGVuZENoaWxkKGluc3RydWN0aW9ucyk7XG5cbiAgICBsZXQgcGxheWVyQXJyYXkgPSBbXTsgLy8gUGxheWVyIHN0cm9rZXMgYXJlIHN0b3JlZCBpbiB0aGlzIGFycmF5IHNvIHRoZSBjb21wdXRlciBkb2VzbnQgaGl0IGEgc3F1YXJlIHR3aWNlXG5cbiAgICBjb25zdCBjb21wdXRlclRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGVDb21wdXRlcicpO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRmlyZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlclRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wdXRlclRpbGVzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlyZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRGaXJlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyVGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXB1dGVyVGlsZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcmUoKSB7IC8vIFRoaXMgZnVuY3Rpb24gZW5hYmxlcyBhIHBsYXllciB0byBzdGFydCBhIGdhbWUgYW5kIHRvIG1ha2Ugc3Vic2VxdWVudCBzaG90czsgXG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7IC8vIFNxdWFyZSBpbiBncmlkIGNsaWNrZWQgYnkgcGxheWVyXG4gICAgICAgIHRhcmdldC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcblxuICAgICAgICByZW1vdmVGaXJlKCk7IC8vIGRpc2FibGluZyBldmVudCBsaXN0ZW5lcnMgc28gcGxheWVyIG11c3Qgd2FpdCBmb3IgY29tcHV0ZXIgdG8gaGl0IGEgc3F1YXJlXG5cbiAgICAgICAgaWYgKHRhcmdldC50ZXh0Q29udGVudCA9PT0gJ1gnIHx8IHRhcmdldC50ZXh0Q29udGVudCA9PT0gJ08nKSB7XG4gICAgICAgICAgICAvLyBOb3RoaW5nIGhhcHBlbnNcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgbGV0IHRhcmdldEh1bWFuID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB3aGlsZSAodGFyZ2V0SHVtYW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDEpO1xuICAgICAgICAgICAgICAgIGlmICghcGxheWVyQXJyYXkuaW5jbHVkZXMobnVtYmVyKSAmJiBudW1iZXIgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQXJyYXkucHVzaChudW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRIdW1hbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2hpcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXJTaGlwcy5sZW5ndGg7IGkrKykgeyAvLyBpdGVyYXRpbmcgdGhyb3VnaCBjb21wdXRlciBzaGlwcyB0byBmaW5kIGEgbWF0Y2hpbmcgcG9zaXRpb25cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29tcHV0ZXJTaGlwc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcHV0ZXJTaGlwc1tpXVtrZXldID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAgPSBjb21wdXRlclNoaXBzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNoaXAgPT09IHVuZGVmaW5lZCkgeyAvLyBObyBzaGlwIGhpdFxuICAgICAgICAgICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9ICdPJztcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmZsZXg7YWxpZ24tY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjI0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6Ymx1ZTsnKTtcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSAnWW91IG1pc3MhJ1xuXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBTaGlwIGhpdFxuICAgICAgICAgICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmZsZXg7YWxpZ24tY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjI0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6Ymx1ZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC42OTIpOycpO1xuICAgICAgICAgICAgICAgIGV4cGxvc2lvbi5wbGF5KCk7XG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zLnRleHRDb250ZW50ID0gJ1lvdSBoaXQgb25lIG9mIHRoZWlyIHNoaXBzISc7XG4gICAgICAgICAgICAgICAgc2hpcC5saWZlLS07XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hpcC5saWZlID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJTaGlwcyA9IGNvbXB1dGVyU2hpcHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lICE9PSBzaGlwLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3Ryb3llZFNoaXAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJveWVkU2hpcC5zdHlsZS5oZWlnaHQgPSBzaGlwLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJveWVkU2hpcC5zdHlsZS53aWR0aCA9IHNoaXAud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGRlc3Ryb3llZFNoaXAuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgICAgICBkZXN0cm95ZWRTaGlwLnNyYyA9IHNoaXAuc3JjO1xuXG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9IGBZb3Ugc3VuayB0aGVpciAke3NoaXAubmFtZS50b0xvd2VyQ2FzZSgpfSFgO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzaGlwLmltZ0xvY2F0aW9ufS1Db21wdXRlcmApLmFwcGVuZENoaWxkKGRlc3Ryb3llZFNoaXApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb21wdXRlclNoaXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSAnR2FtZSBPdmVyISBZb3Ugd29uISc7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEh1bWFuID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVGaXJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBodW1hblNoaXAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAvLyBJdGVyYXRpbmcgb3ZlciBwbGF5ZXIgc2hpcCBhcnJheSB0byBmaW5kIHRoZSBzaGlwIHdpdGggY29ycmVzcG9uZGluZyAgdmFsdWVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyU2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGxheWVyU2hpcHNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllclNoaXBzW2ldW2tleV0gPT09IHRhcmdldEh1bWFuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodW1hblNoaXAgPSBwbGF5ZXJTaGlwc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGh1bWFuU2hpcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RhcmdldEh1bWFuLmlkfS1wbGF5ZXJHYW1lYCkudGV4dENvbnRlbnQgPSAnTyc7XG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFyZ2V0SHVtYW4uaWR9LXBsYXllckdhbWVgKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDthbGlnbi1jb250ZW50OmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MjRweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjpyZWQ7Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXJnZXRIdW1hbi5pZH0tcGxheWVyR2FtZWApLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXJnZXRIdW1hbi5pZH0tcGxheWVyR2FtZWApLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpmbGV4O2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZToyNHB4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOnJlZDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC42OTIpOycpO1xuICAgICAgICAgICAgICAgICAgICBleHBsb3Npb24ucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICBodW1hblNoaXAubGlmZS0tO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChodW1hblNoaXAubGlmZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFyZ2V0SHVtYW4uaWR9LXBsYXllckdhbWVgKS50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclNoaXBzID0gcGxheWVyU2hpcHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lICE9PSBodW1hblNoaXAubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSBgVGhleSBzdW5rIHlvdXIgJHtodW1hblNoaXAubmFtZS50b0xvd2VyQ2FzZSgpfSFgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJTaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUZpcmUoKTsgLy8gc3RvcHBpbmcgdGhlIGdhbWUgXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSAnR2FtZSBPdmVyISBZb3UgbG9zdCEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBlbmFibGluZyBzcXVhcmVzIHNvIHBsYXllciBjYW4gaGl0IGFub3RoZXIgc2hvdFxuICAgICAgICAgICAgYWRkRmlyZSgpXG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgfVxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxheW91dCBmcm9tICcuL2xheW91dC5qcyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUuanMnO1xuaW1wb3J0IENhcnJpZXIgZnJvbSAnL2ltYWdlcy9jYXJyaWVyLnBuZyc7XG5pbXBvcnQgQ2FycmllcjkwIGZyb20gJy9pbWFnZXMvY2FycmllcjkwLnBuZyc7XG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcvaW1hZ2VzL2JhdHRsZXNoaXAucG5nJztcbmltcG9ydCBCYXR0bGVzaGlwOTAgZnJvbSAnL2ltYWdlcy9iYXR0bGVzaGlwOTAucG5nJztcbmltcG9ydCBDcnVpc2VyIGZyb20gJy9pbWFnZXMvY3J1aXNlci5wbmcnO1xuaW1wb3J0IFN1Ym1hcmluZSBmcm9tICcvaW1hZ2VzL3N1Ym1hcmluZS5wbmcnO1xuaW1wb3J0IERlc3Ryb3llciBmcm9tICcvaW1hZ2VzL2Rlc3Ryb3llci5wbmcnO1xuaW1wb3J0IENydWlzZXI5MCBmcm9tICcvaW1hZ2VzL2NydWlzZXI5MC5wbmcnO1xuaW1wb3J0IFN1Ym1hcmluZTkwIGZyb20gJy9pbWFnZXMvc3VibWFyaW5lOTAucG5nJztcbmltcG9ydCBEZXN0cm95ZXI5MCBmcm9tICcvaW1hZ2VzL2Rlc3Ryb3llcjkwLnBuZyc7XG5cblxubGF5b3V0KCk7XG5cbmNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcERpdicpO1xuXG5jb25zdCBjYXJyaWVyID0gbmV3IEltYWdlKCk7XG5jYXJyaWVyLmlkID0gJ2NhcnJpZXInO1xuY2Fycmllci5zcmMgPSBDYXJyaWVyO1xuY2Fycmllci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2N1cnNvcjptb3ZlOycpO1xuY2Fycmllci5kcmFnZ2FibGUgPSB0cnVlO1xuY2Fycmllci5zdHlsZS5oZWlnaHQgPSAnNDVweCc7XG5jYXJyaWVyLnN0eWxlLndpZHRoID0gJzIyNXB4JztcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBHcmlkJykuYXBwZW5kQ2hpbGQoY2Fycmllcik7XG5jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wQ2Fycmllcik7XG5jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgYWxsb3dEcm9wKTtcbmNhcnJpZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZyk7XG5jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQ2Fycmllcik7XG5cbmxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXJUaWxlJyk7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENhcnJpZXIpO1xuICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgYWxsb3dEcm9wKTtcbn1cblxuY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBJbWFnZSgpO1xuYmF0dGxlc2hpcC5pZCA9ICdiYXR0bGVzaGlwJztcbmJhdHRsZXNoaXAuc3JjID0gQmF0dGxlc2hpcDtcbmJhdHRsZXNoaXAuZHJhZ2dhYmxlID0gZmFsc2U7XG5iYXR0bGVzaGlwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3Vyc29yOm1vdmU7ei1pbmRleDoxJyk7XG5iYXR0bGVzaGlwLnN0eWxlLmhlaWdodCA9ICc0NXB4JztcbmJhdHRsZXNoaXAuc3R5bGUud2lkdGggPSAnMTgwcHgnO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBHcmlkJykuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcCk7XG5cbmNvbnN0IGNydWlzZXIgPSBuZXcgSW1hZ2UoKTtcbmNydWlzZXIuaWQgPSAnY3J1aXNlcic7XG5jcnVpc2VyLnNyYyA9IENydWlzZXI7XG5jcnVpc2VyLmRyYWdnYWJsZSA9IGZhbHNlO1xuY3J1aXNlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2N1cnNvcjptb3ZlO3otaW5kZXg6MTsnKTtcbmNydWlzZXIuc3R5bGUuaGVpZ2h0ID0gJzQ1cHgnO1xuY3J1aXNlci5zdHlsZS53aWR0aCA9ICcxMzVweCc7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcEdyaWQnKS5hcHBlbmRDaGlsZChjcnVpc2VyKTtcblxuY29uc3Qgc3VibWFyaW5lID0gbmV3IEltYWdlKCk7XG5zdWJtYXJpbmUuaWQgPSAnc3VibWFyaW5lJztcbnN1Ym1hcmluZS5zcmMgPSBTdWJtYXJpbmU7XG5zdWJtYXJpbmUuZHJhZ2dhYmxlID0gZmFsc2U7XG5zdWJtYXJpbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjdXJzb3I6bW92ZTt6LWluZGV4OjE7Jyk7XG5zdWJtYXJpbmUuc3R5bGUuaGVpZ2h0ID0gJzQ1cHgnO1xuc3VibWFyaW5lLnN0eWxlLndpZHRoID0gJzEzNXB4JztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwR3JpZCcpLmFwcGVuZENoaWxkKHN1Ym1hcmluZSk7XG5cbmNvbnN0IGRlc3Ryb3llciA9IG5ldyBJbWFnZSgpO1xuZGVzdHJveWVyLmlkID0gJ2Rlc3Ryb3llcic7XG5kZXN0cm95ZXIuc3JjID0gRGVzdHJveWVyO1xuZGVzdHJveWVyLmRyYWdnYWJsZSA9IGZhbHNlO1xuZGVzdHJveWVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3Vyc29yOm1vdmU7ei1pbmRleDoxOycpO1xuZGVzdHJveWVyLnN0eWxlLmhlaWdodCA9ICc0NXB4JztcbmRlc3Ryb3llci5zdHlsZS53aWR0aCA9ICc5MHB4JztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwR3JpZCcpLmFwcGVuZENoaWxkKGRlc3Ryb3llcik7XG5cbmNvbnN0IEh1bWFuQ2FycmllciA9IHtcbiAgICBuYW1lOiAnQ2FycmllcicsXG4gICAgcG9zaXRpb24xOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24yOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24zOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb240OiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb241OiB1bmRlZmluZWQsXG4gICAgc2hpcFRpbGVzOiBbXSxcbiAgICBsaWZlOiA1LFxuICAgIHNyYzogdW5kZWZpbmVkXG59XG5cbmNvbnN0IEh1bWFuQmF0dGxlc2hpcCA9IHtcbiAgICBuYW1lOiAnQmF0dGxlU2hpcCcsXG4gICAgcG9zaXRpb24xOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24yOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24zOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb240OiB1bmRlZmluZWQsXG4gICAgc2hpcFRpbGVzOiBbXSxcbiAgICBsaWZlOiA0LFxuICAgIHNyYzogdW5kZWZpbmVkXG59XG5cbmNvbnN0IEh1bWFuQ3J1aXNlciA9IHtcbiAgICBuYW1lOiAnQ3J1aXNlcicsXG4gICAgcG9zaXRpb24xOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24yOiB1bmRlZmluZWQsXG4gICAgcG9zaXRpb24zOiB1bmRlZmluZWQsXG4gICAgc2hpcFRpbGVzOiBbXSxcbiAgICBsaWZlOiAzLFxuICAgIHNyYzogdW5kZWZpbmVkXG59XG5cbmNvbnN0IEh1bWFuU3VibWFyaW5lID0ge1xuICAgIG5hbWU6ICdTdWJtYXJpbmUnLFxuICAgIHBvc2l0aW9uMTogdW5kZWZpbmVkLFxuICAgIHBvc2l0aW9uMjogdW5kZWZpbmVkLFxuICAgIHBvc2l0aW9uMzogdW5kZWZpbmVkLFxuICAgIHNoaXBUaWxlczogW10sXG4gICAgbGlmZTogMyxcbiAgICBzcmM6IHVuZGVmaW5lZFxufVxuXG5jb25zdCBIdW1hbkRlc3Ryb3llciA9IHtcbiAgICBuYW1lOiAnRGVzdHJveWVyJyxcbiAgICBwb3NpdGlvbjE6IHVuZGVmaW5lZCxcbiAgICBwb3NpdGlvbjI6IHVuZGVmaW5lZCxcbiAgICBzaGlwVGlsZXM6IFtdLFxuICAgIGxpZmU6IDIsXG4gICAgc3JjOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZHJhZyhldikge1xuICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZXYudGFyZ2V0LmlkKTtcblxufVxuXG5mdW5jdGlvbiBhbGxvd0Ryb3AoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBkcm9wQ2Fycmllcihldikge1xuICAgIGlmIChjYXJyaWVyLnNyYyA9PSBDYXJyaWVyKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaWQgPiA2ICYmIHRoaXMuaWQgPD0gMTAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiAxNiAmJiB0aGlzLmlkIDw9IDIwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gMjYgJiYgdGhpcy5pZCA8PSAzMCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDM2ICYmIHRoaXMuaWQgPD0gNDAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA0NiAmJiB0aGlzLmlkIDw9IDUwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNTYgJiYgdGhpcy5pZCA8PSA2MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDY2ICYmIHRoaXMuaWQgPD0gNzAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA3NiAmJiB0aGlzLmlkIDw9IDgwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gODYgJiYgdGhpcy5pZCA8PSA5MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDk2ICYmIHRoaXMuaWQgPD0gMTAwKSB7XG4gICAgICAgICAgICAvL25vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnJpZXInKSk7XG4gICAgICAgICAgICBsZXQgbnVtID0gTnVtYmVyKHRoaXMuaWQpO1xuICAgICAgICAgICAgbGV0IHRpbGVzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDMpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyA0KV1cblxuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDIpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDMpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDQpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnNyYyA9IENhcnJpZXI7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BDYXJyaWVyKVxuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wQmF0dGxlU2hpcClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSAnNzAwcHgnO1xuXG4gICAgICAgICAgICBjYXJyaWVyLnN0eWxlLmhlaWdodCA9ICc0NHB4JztcbiAgICAgICAgICAgIGNhcnJpZXIuc3R5bGUud2lkdGggPSAnMjI0cHgnO1xuICAgICAgICAgICAgY2Fycmllci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBjYXJyaWVyLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2Fycmllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNhcnJpZXIpO1xuICAgICAgICAgICAgY2Fycmllci5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgICAgICAgICAgIGJhdHRsZXNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVCYXR0bGVzaGlwKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BCYXR0bGVTaGlwKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBhbGxvd0Ryb3ApO1xuICAgICAgICAgICAgYmF0dGxlc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaWQgPj0gNjEpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FycmllcicpKTtcbiAgICAgICAgICAgIGxldCBudW0gPSBOdW1iZXIodGhpcy5pZCk7XG4gICAgICAgICAgICBsZXQgdGlsZXMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMjApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAzMCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDQwKV1cblxuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKTtcbiAgICAgICAgICAgIEh1bWFuQ2Fycmllci5wb3NpdGlvbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyMCk7XG4gICAgICAgICAgICBIdW1hbkNhcnJpZXIucG9zaXRpb240ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMzApO1xuICAgICAgICAgICAgSHVtYW5DYXJyaWVyLnBvc2l0aW9uNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDQwKTtcbiAgICAgICAgICAgIEh1bWFuQ2Fycmllci5zcmMgPSBDYXJyaWVyOTA7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BDYXJyaWVyKTtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcEJhdHRsZVNoaXApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXJyaWVyLnN0eWxlLmhlaWdodCA9ICcyMjRweCc7XG4gICAgICAgICAgICBjYXJyaWVyLnN0eWxlLndpZHRoID0gJzQ0cHgnO1xuICAgICAgICAgICAgY2Fycmllci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAgIGNhcnJpZXIuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBjYXJyaWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQ2Fycmllcik7XG4gICAgICAgICAgICBjYXJyaWVyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgICAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSAnNzAwcHgnO1xuXG4gICAgICAgICAgICBiYXR0bGVzaGlwLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICBiYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQmF0dGxlc2hpcCk7XG4gICAgICAgICAgICBiYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wQmF0dGxlU2hpcCk7XG4gICAgICAgICAgICBiYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgYWxsb3dEcm9wKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyb3BCYXR0bGVTaGlwKGV2KSB7XG4gICAgbGV0IG51bSA9IE51bWJlcih0aGlzLmlkKTtcbiAgICBpZiAoYmF0dGxlc2hpcC5zcmMgPT0gQmF0dGxlc2hpcCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMykuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA+IDcgJiYgdGhpcy5pZCA8PSAxMCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDE3ICYmIHRoaXMuaWQgPD0gMjAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiAyNyAmJiB0aGlzLmlkIDw9IDMwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gMzcgJiYgdGhpcy5pZCA8PSA0MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDQ3ICYmIHRoaXMuaWQgPD0gNTAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA1NyAmJiB0aGlzLmlkIDw9IDYwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNjcgJiYgdGhpcy5pZCA8PSA3MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDc3ICYmIHRoaXMuaWQgPD0gODAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA4NyAmJiB0aGlzLmlkIDw9IDkwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gOTcgJiYgdGhpcy5pZCA8PSAxMDApIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdHRsZXNoaXAnKSk7XG4gICAgICAgICAgICBsZXQgdGlsZXMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMyldXG5cbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5wb3NpdGlvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5wb3NpdGlvbjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKTtcbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5wb3NpdGlvbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyKTtcbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5wb3NpdGlvbjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAzKTtcbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5zcmMgPSBCYXR0bGVzaGlwO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGlsZXNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wQmF0dGxlU2hpcCk7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BDcnVpc2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSAnNzAwcHgnXG4gICAgICAgICAgICBiYXR0bGVzaGlwLnN0eWxlLmhlaWdodCA9ICc0NHB4JztcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuc3R5bGUud2lkdGggPSAnMTc5cHgnO1xuICAgICAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBiYXR0bGVzaGlwLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCdcbiAgICAgICAgICAgIGJhdHRsZXNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVCYXR0bGVzaGlwKTtcblxuICAgICAgICAgICAgY3J1aXNlci5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNydWlzZXIpO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENydWlzZXIpO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGFsbG93RHJvcCk7XG4gICAgICAgICAgICBjcnVpc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMjApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAzMCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA+PSA3MSkge1xuICAgICAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlc2hpcCcpKTtcbiAgICAgICAgICAgIGxldCB0aWxlcyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMTApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyMCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDMwKV1cblxuICAgICAgICAgICAgSHVtYW5CYXR0bGVzaGlwLnBvc2l0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAgICAgSHVtYW5CYXR0bGVzaGlwLnBvc2l0aW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKTtcbiAgICAgICAgICAgIEh1bWFuQmF0dGxlc2hpcC5wb3NpdGlvbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyMCk7XG4gICAgICAgICAgICBIdW1hbkJhdHRsZXNoaXAucG9zaXRpb240ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMzApO1xuICAgICAgICAgICAgSHVtYW5CYXR0bGVzaGlwLnNyYyA9IEJhdHRsZXNoaXA5MDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BCYXR0bGVTaGlwKTtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENydWlzZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS5oZWlnaHQgPSAnMTc5cHgnO1xuICAgICAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS53aWR0aCA9ICc0NHB4JztcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgYmF0dGxlc2hpcC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgICAgICAgICBiYXR0bGVzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQmF0dGxlc2hpcCk7XG5cbiAgICAgICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gJzcwMHB4JztcblxuICAgICAgICAgICAgY3J1aXNlci5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNydWlzZXIpO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENydWlzZXIpO1xuICAgICAgICAgICAgY3J1aXNlci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGFsbG93RHJvcCk7XG4gICAgICAgICAgICBjcnVpc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcm9wQ3J1aXNlcihldikge1xuICAgIGxldCBudW0gPSBOdW1iZXIodGhpcy5pZCk7XG4gICAgaWYgKGNydWlzZXIuc3JjID09IENydWlzZXIpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMikuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA+IDggJiYgdGhpcy5pZCA8PSAxMCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDE4ICYmIHRoaXMuaWQgPD0gMjAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiAyOCAmJiB0aGlzLmlkIDw9IDMwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gMzggJiYgdGhpcy5pZCA8PSA0MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDQ4ICYmIHRoaXMuaWQgPD0gNTAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA1OCAmJiB0aGlzLmlkIDw9IDYwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNjggJiYgdGhpcy5pZCA8PSA3MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDc4ICYmIHRoaXMuaWQgPD0gODAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA4OCAmJiB0aGlzLmlkIDw9IDkwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gOTggJiYgdGhpcy5pZCA8PSAxMDApIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydWlzZXInKSk7XG4gICAgICAgICAgICBsZXQgbnVtID0gTnVtYmVyKHRoaXMuaWQpO1xuICAgICAgICAgICAgbGV0IHRpbGVzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMildO1xuXG4gICAgICAgICAgICBIdW1hbkNydWlzZXIucG9zaXRpb24xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgICAgICBIdW1hbkNydWlzZXIucG9zaXRpb24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMSk7XG4gICAgICAgICAgICBIdW1hbkNydWlzZXIucG9zaXRpb24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMik7XG4gICAgICAgICAgICBIdW1hbkNydWlzZXIuc3JjID0gQ3J1aXNlcjtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENydWlzZXIpO1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wU3VibWFyaW5lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3J1aXNlci5zdHlsZS5oZWlnaHQgPSAnNDRweCc7XG4gICAgICAgICAgICBjcnVpc2VyLnN0eWxlLndpZHRoID0gJzEzNHB4JztcbiAgICAgICAgICAgIGNydWlzZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgY3J1aXNlci5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNydWlzZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVDcnVpc2VyKTtcbiAgICAgICAgICAgIGNydWlzZXIuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuXG4gICAgICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9ICc3MDBweCc7XG5cbiAgICAgICAgICAgIHN1Ym1hcmluZS5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU3VibWFyaW5lKTtcbiAgICAgICAgICAgIHN1Ym1hcmluZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcFN1Ym1hcmluZSk7XG4gICAgICAgICAgICBzdWJtYXJpbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBhbGxvd0Ryb3ApO1xuICAgICAgICAgICAgc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxMCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDIwKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID49IDgxKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXYudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcnVpc2VyJykpO1xuICAgICAgICAgICAgbGV0IHRpbGVzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxMCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDIwKV07XG5cbiAgICAgICAgICAgIEh1bWFuQ3J1aXNlci5wb3NpdGlvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgICAgIEh1bWFuQ3J1aXNlci5wb3NpdGlvbjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxMCk7XG4gICAgICAgICAgICBIdW1hbkNydWlzZXIucG9zaXRpb24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMjApO1xuICAgICAgICAgICAgSHVtYW5DcnVpc2VyLnNyYyA9IENydWlzZXI5MDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcENydWlzZXIpXG4gICAgICAgICAgICAgICAgaXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BTdWJtYXJpbmUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNydWlzZXIuc3R5bGUuaGVpZ2h0ID0gJzEzNHB4JztcbiAgICAgICAgICAgIGNydWlzZXIuc3R5bGUud2lkdGggPSAnNDRweCc7XG4gICAgICAgICAgICBjcnVpc2VyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGNydWlzZXIuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBjcnVpc2VyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgICAgICAgICAgY3J1aXNlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUNydWlzZXIpO1xuXG4gICAgICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9ICc3MDBweCc7XG5cbiAgICAgICAgICAgIHN1Ym1hcmluZS5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU3VibWFyaW5lKTtcbiAgICAgICAgICAgIHN1Ym1hcmluZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcFN1Ym1hcmluZSk7XG4gICAgICAgICAgICBzdWJtYXJpbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBhbGxvd0Ryb3ApO1xuICAgICAgICAgICAgc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcm9wU3VibWFyaW5lKGV2KSB7XG4gICAgbGV0IG51bSA9IE51bWJlcih0aGlzLmlkKTtcbiAgICBpZiAoc3VibWFyaW5lLnNyYyA9PSBTdWJtYXJpbmUpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMikuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICB0aGlzLmlkID4gOCAmJiB0aGlzLmlkIDw9IDEwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gMTggJiYgdGhpcy5pZCA8PSAyMCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDI4ICYmIHRoaXMuaWQgPD0gMzAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiAzOCAmJiB0aGlzLmlkIDw9IDQwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNDggJiYgdGhpcy5pZCA8PSA1MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDU4ICYmIHRoaXMuaWQgPD0gNjAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA2OCAmJiB0aGlzLmlkIDw9IDcwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNzggJiYgdGhpcy5pZCA8PSA4MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDg4ICYmIHRoaXMuaWQgPD0gOTAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA5OCAmJiB0aGlzLmlkIDw9IDEwMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1hcmluZScpKTtcbiAgICAgICAgICAgIGxldCBudW0gPSBOdW1iZXIodGhpcy5pZClcbiAgICAgICAgICAgIGxldCB0aWxlcyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDIpXVxuXG4gICAgICAgICAgICBIdW1hblN1Ym1hcmluZS5wb3NpdGlvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKVxuICAgICAgICAgICAgSHVtYW5TdWJtYXJpbmUucG9zaXRpb24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMSlcbiAgICAgICAgICAgIEh1bWFuU3VibWFyaW5lLnBvc2l0aW9uMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDIpXG4gICAgICAgICAgICBIdW1hblN1Ym1hcmluZS5zcmMgPSBTdWJtYXJpbmVcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcFN1Ym1hcmluZSlcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcERlc3Ryb3llcilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLmhlaWdodCA9ICc0NHB4J1xuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLndpZHRoID0gJzEzNHB4J1xuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICAgc3VibWFyaW5lLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgICAgICAgICAgc3VibWFyaW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU3VibWFyaW5lKTtcblxuICAgICAgICAgICAgZGVzdHJveWVyLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICBkZXN0cm95ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVEZXN0cm95ZXIpO1xuICAgICAgICAgICAgZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wRGVzdHJveWVyKTtcbiAgICAgICAgICAgIGRlc3Ryb3llci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGFsbG93RHJvcCk7XG4gICAgICAgICAgICBkZXN0cm95ZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMTApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyMCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA+PSA4MSkge1xuICAgICAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWFyaW5lJykpO1xuICAgICAgICAgICAgbGV0IG51bSA9IE51bWJlcih0aGlzLmlkKTtcbiAgICAgICAgICAgIGxldCB0aWxlcyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMTApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAyMCldXG5cbiAgICAgICAgICAgIEh1bWFuU3VibWFyaW5lLnBvc2l0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAgICAgSHVtYW5TdWJtYXJpbmUucG9zaXRpb24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMTApO1xuICAgICAgICAgICAgSHVtYW5TdWJtYXJpbmUucG9zaXRpb24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMjApO1xuICAgICAgICAgICAgSHVtYW5TdWJtYXJpbmUuc3JjID0gU3VibWFyaW5lOTA7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BTdWJtYXJpbmUpO1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wRGVzdHJveWVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLmhlaWdodCA9ICcxMzRweCdcbiAgICAgICAgICAgIHN1Ym1hcmluZS5zdHlsZS53aWR0aCA9ICc0NHB4J1xuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHN1Ym1hcmluZS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHN1Ym1hcmluZS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCdcbiAgICAgICAgICAgIHN1Ym1hcmluZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVN1Ym1hcmluZSk7XG5cbiAgICAgICAgICAgIGRlc3Ryb3llci5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlRGVzdHJveWVyKTtcbiAgICAgICAgICAgIGRlc3Ryb3llci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcERlc3Ryb3llcik7XG4gICAgICAgICAgICBkZXN0cm95ZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBhbGxvd0Ryb3ApO1xuICAgICAgICAgICAgZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcm9wRGVzdHJveWVyKGV2KSB7XG4gICAgbGV0IG51bSA9IE51bWJlcih0aGlzLmlkKTtcbiAgICBpZiAoZGVzdHJveWVyLnNyYyA9PSBEZXN0cm95ZXIpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID4gOSAmJiB0aGlzLmlkIDw9IDEwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gMTkgJiYgdGhpcy5pZCA8PSAyMCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDI5ICYmIHRoaXMuaWQgPD0gMzAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiAzOSAmJiB0aGlzLmlkIDw9IDQwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNDkgJiYgdGhpcy5pZCA8PSA1MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDU5ICYmIHRoaXMuaWQgPD0gNjAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA2OSAmJiB0aGlzLmlkIDw9IDcwIHx8XG4gICAgICAgICAgICB0aGlzLmlkID4gNzkgJiYgdGhpcy5pZCA8PSA4MCB8fFxuICAgICAgICAgICAgdGhpcy5pZCA+IDg5ICYmIHRoaXMuaWQgPD0gOTAgfHxcbiAgICAgICAgICAgIHRoaXMuaWQgPiA5OSAmJiB0aGlzLmlkIDw9IDEwMCkge1xuICAgICAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgZXYudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXN0cm95ZXInKSk7XG4gICAgICAgICAgICBsZXQgbnVtID0gTnVtYmVyKHRoaXMuaWQpO1xuICAgICAgICAgICAgbGV0IHRpbGVzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW0gKyAxKV07XG5cbiAgICAgICAgICAgIEh1bWFuRGVzdHJveWVyLnBvc2l0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAgICAgSHVtYW5EZXN0cm95ZXIucG9zaXRpb24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtICsgMSk7XG4gICAgICAgICAgICBIdW1hbkRlc3Ryb3llci5zcmMgPSBEZXN0cm95ZXI7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wRGVzdHJveWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc3Ryb3llci5zdHlsZS5oZWlnaHQgPSAnNDRweCc7XG4gICAgICAgICAgICBkZXN0cm95ZXIuc3R5bGUud2lkdGggPSAnODlweCc7XG4gICAgICAgICAgICBkZXN0cm95ZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgZGVzdHJveWVyLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgZGVzdHJveWVyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgIGRlc3Ryb3llci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZURlc3Ryb3llcik7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZShwbGF5ZXJTaGlwcyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID49IDkxKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICAgICAgICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3Ryb3llcicpKTtcbiAgICAgICAgICAgIGxldCBudW0gPSBOdW1iZXIodGhpcy5pZCk7XG4gICAgICAgICAgICBsZXQgdGlsZXMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bSArIDEwKV1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcERlc3Ryb3llcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc3Ryb3llci5zdHlsZS5oZWlnaHQgPSAnODlweCc7XG4gICAgICAgICAgICBkZXN0cm95ZXIuc3R5bGUud2lkdGggPSAnNDRweCc7XG4gICAgICAgICAgICBkZXN0cm95ZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgZGVzdHJveWVyLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgZGVzdHJveWVyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgIGRlc3Ryb3llci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZURlc3Ryb3llcik7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZShwbGF5ZXJTaGlwcyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVDYXJyaWVyKCkge1xuICAgIGlmIChjYXJyaWVyLnNyYyA9PSBDYXJyaWVyKSB7XG4gICAgICAgIGNhcnJpZXIuc3JjID0gQ2FycmllcjkwO1xuICAgICAgICBjYXJyaWVyLnN0eWxlLmhlaWdodCA9ICcyMjVweCc7XG4gICAgICAgIGNhcnJpZXIuc3R5bGUud2lkdGggPSAnNDVweCc7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMDBweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2Fycmllci5zcmMgPSBDYXJyaWVyO1xuICAgICAgICBjYXJyaWVyLnN0eWxlLmhlaWdodCA9ICc0NXB4JztcbiAgICAgICAgY2Fycmllci5zdHlsZS53aWR0aCA9ICcyMjVweCc7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gJzcwMHB4JztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZUJhdHRsZXNoaXAoKSB7XG4gICAgaWYgKGJhdHRsZXNoaXAuc3JjID09IEJhdHRsZXNoaXApIHtcbiAgICAgICAgYmF0dGxlc2hpcC5zcmMgPSBCYXR0bGVzaGlwOTA7XG4gICAgICAgIGJhdHRsZXNoaXAuc3R5bGUuaGVpZ2h0ID0gJzE4MHB4JztcbiAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS53aWR0aCA9ICc0NXB4JztcbiAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSAnODAwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJhdHRsZXNoaXAuc3JjID0gQmF0dGxlc2hpcDtcbiAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS5oZWlnaHQgPSAnNDVweCc7XG4gICAgICAgIGJhdHRsZXNoaXAuc3R5bGUud2lkdGggPSAnMTgwcHgnO1xuICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9ICc3MDBweCc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVDcnVpc2VyKCkge1xuICAgIGlmIChjcnVpc2VyLnNyYyA9PSBDcnVpc2VyKSB7XG4gICAgICAgIGNydWlzZXIuc3JjID0gQ3J1aXNlcjkwO1xuICAgICAgICBjcnVpc2VyLnN0eWxlLmhlaWdodCA9ICcxMzVweCc7XG4gICAgICAgIGNydWlzZXIuc3R5bGUud2lkdGggPSAnNDVweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3J1aXNlci5zcmMgPSBDcnVpc2VyO1xuICAgICAgICBjcnVpc2VyLnN0eWxlLmhlaWdodCA9ICc0NXB4JztcbiAgICAgICAgY3J1aXNlci5zdHlsZS53aWR0aCA9ICcxMzVweCc7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gJzcwMHB4JztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVN1Ym1hcmluZSgpIHtcbiAgICBpZiAoc3VibWFyaW5lLnNyYyA9PSBTdWJtYXJpbmUpIHtcbiAgICAgICAgc3VibWFyaW5lLnNyYyA9IFN1Ym1hcmluZTkwO1xuICAgICAgICBzdWJtYXJpbmUuc3R5bGUuaGVpZ2h0ID0gJzEzNXB4JztcbiAgICAgICAgc3VibWFyaW5lLnN0eWxlLndpZHRoID0gJzQ1cHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Ym1hcmluZS5zcmMgPSBTdWJtYXJpbmU7XG4gICAgICAgIHN1Ym1hcmluZS5zdHlsZS5oZWlnaHQgPSAnNDVweCc7XG4gICAgICAgIHN1Ym1hcmluZS5zdHlsZS53aWR0aCA9ICcxMzVweCc7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gJzcwMHB4JztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZURlc3Ryb3llcigpIHtcbiAgICBpZiAoZGVzdHJveWVyLnNyYyA9PSBEZXN0cm95ZXIpIHtcbiAgICAgICAgZGVzdHJveWVyLnNyYyA9IERlc3Ryb3llcjkwO1xuICAgICAgICBkZXN0cm95ZXIuc3R5bGUuaGVpZ2h0ID0gJzkwcHgnO1xuICAgICAgICBkZXN0cm95ZXIuc3R5bGUud2lkdGggPSAnNDVweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVzdHJveWVyLnNyYyA9IERlc3Ryb3llcjtcbiAgICAgICAgZGVzdHJveWVyLnN0eWxlLmhlaWdodCA9ICc0NXB4JztcbiAgICAgICAgZGVzdHJveWVyLnN0eWxlLndpZHRoID0gJzkwcHgnO1xuICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9ICc3MDBweCc7XG4gICAgfVxufVxuXG4vLyBBcnJheSB0aGF0IHdpbGwgYmUgcGFzc2VkIGFzIGEgZnVuY3Rpb24gYXJndW1lbnRcbmxldCBwbGF5ZXJTaGlwcyA9IFtIdW1hbkNhcnJpZXIsIEh1bWFuQmF0dGxlc2hpcCwgSHVtYW5DcnVpc2VyLCBIdW1hblN1Ym1hcmluZSwgSHVtYW5EZXN0cm95ZXJdOyAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYXlvdXQoKSB7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XG5cbiAgICBjb25zdCBnYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZURpdi5jbGFzc05hbWUgPSAnZ2FtZURpdic7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lRGl2KTtcblxuICAgIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllckRpdi5jbGFzc05hbWUgPSAncGxheWVyRGl2JztcbiAgICBnYW1lRGl2LmFwcGVuZENoaWxkKHBsYXllckRpdik7XG5cbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHBsYXllck5hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xuICAgIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSAnSHVtYW4nO1xuICAgIHBsYXllck5hbWUuc3R5bGUubWFyZ2luVG9wID0gJzQlJztcbiAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XG5cbiAgICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyR3JpZC5jbGFzc05hbWUgPSAnZ3JpZCc7XG4gICAgcGxheWVyR3JpZC5pZCA9ICdwbGF5ZXJHcmlkJztcbiAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQocGxheWVyR3JpZCk7XG5cbiAgICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcERpdi5jbGFzc05hbWUgPSAnc2hpcERpdic7XG4gICAgc2hpcERpdi5pZCA9ICdzaGlwRGl2JztcbiAgICBnYW1lRGl2LmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuXG4gICAgY29uc3Qgc2hpcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2hpcFNwYW4udGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBTaGlwcyBpbiBncmlkJztcbiAgICBzaGlwU3Bhbi5jbGFzc05hbWUgPSAnbmFtZSc7XG4gICAgc2hpcFNwYW4uc3R5bGUubWFyZ2luVG9wID0gJzQlJztcbiAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNoaXBTcGFuKTtcblxuICAgIGNvbnN0IHJvdGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcm90YXRlU3Bhbi50ZXh0Q29udGVudCA9ICdDbGljayBzaGlwIHRvIGNoYW5nZSBvcmllbnRhdGlvbic7XG4gICAgcm90YXRlU3Bhbi5jbGFzc05hbWUgPSAncm90YXRlJztcbiAgICByb3RhdGVTcGFuLnN0eWxlLmZvbnRTaXplID0gJzEuMjVyZW0nO1xuICAgIHJvdGF0ZVNwYW4uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIHJvdGF0ZVNwYW4uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQocm90YXRlU3Bhbik7XG5cbiAgICBjb25zdCBzaGlwR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBHcmlkLmNsYXNzTmFtZSA9ICdzaGlwR3JpZCc7XG4gICAgc2hpcEdyaWQuaWQgPSAnc2hpcEdyaWQnO1xuICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoc2hpcEdyaWQpO1xuXG4gICAgbGV0IGogPSAxO1xuICAgIHdoaWxlIChqIDw9IDEwMCkge1xuXG4gICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGlsZS5pZCA9IGo7XG4gICAgICAgIHRpbGUuY2xhc3NOYW1lID0gJ3BsYXllclRpbGUnO1xuICAgICAgICBwbGF5ZXJHcmlkLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICBqKys7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
