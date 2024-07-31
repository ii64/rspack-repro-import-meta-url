"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_util_browser_js"],{

/***/ "./src/third_party/codemirror/package/src/util/browser.js":
/*!****************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/browser.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   android: () => (/* binding */ android),
/* harmony export */   captureRightClick: () => (/* binding */ captureRightClick),
/* harmony export */   chrome: () => (/* binding */ chrome),
/* harmony export */   chromeOS: () => (/* binding */ chromeOS),
/* harmony export */   flipCtrlCmd: () => (/* binding */ flipCtrlCmd),
/* harmony export */   gecko: () => (/* binding */ gecko),
/* harmony export */   ie: () => (/* binding */ ie),
/* harmony export */   ie_version: () => (/* binding */ ie_version),
/* harmony export */   ios: () => (/* binding */ ios),
/* harmony export */   mac: () => (/* binding */ mac),
/* harmony export */   mac_geMountainLion: () => (/* binding */ mac_geMountainLion),
/* harmony export */   mobile: () => (/* binding */ mobile),
/* harmony export */   phantom: () => (/* binding */ phantom),
/* harmony export */   presto: () => (/* binding */ presto),
/* harmony export */   safari: () => (/* binding */ safari),
/* harmony export */   webkit: () => (/* binding */ webkit),
/* harmony export */   windows: () => (/* binding */ windows)
/* harmony export */ });
// Kludges for bugs and behavior differences that can't be feature
// detected are enabled based on userAgent etc sniffing.
let userAgent = navigator.userAgent
let platform = navigator.platform

let gecko = /gecko\/\d/i.test(userAgent)
let ie_upto10 = /MSIE \d/.test(userAgent)
let ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent)
let edge = /Edge\/(\d+)/.exec(userAgent)
let ie = ie_upto10 || ie_11up || edge
let ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1])
let webkit = !edge && /WebKit\//.test(userAgent)
let qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent)
let chrome = !edge && /Chrome\//.test(userAgent)
let presto = /Opera\//.test(userAgent)
let safari = /Apple Computer/.test(navigator.vendor)
let mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent)
let phantom = /PhantomJS/.test(userAgent)

let ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2)
let android = /Android/.test(userAgent)
// This is woefully incomplete. Suggestions for alternative methods welcome.
let mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent)
let mac = ios || /Mac/.test(platform)
let chromeOS = /\bCrOS\b/.test(userAgent)
let windows = /win/i.test(platform)

let presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/)
if (presto_version) presto_version = Number(presto_version[1])
if (presto_version && presto_version >= 15) { presto = false; webkit = true }
// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
let flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11))
let captureRightClick = gecko || (ie && ie_version >= 9)


/***/ })

}]);