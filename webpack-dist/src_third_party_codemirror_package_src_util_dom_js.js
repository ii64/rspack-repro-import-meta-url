"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_util_dom_js"],{

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


/***/ }),

/***/ "./src/third_party/codemirror/package/src/util/dom.js":
/*!************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/dom.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeElt: () => (/* binding */ activeElt),
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   classTest: () => (/* binding */ classTest),
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   elt: () => (/* binding */ elt),
/* harmony export */   eltP: () => (/* binding */ eltP),
/* harmony export */   joinClasses: () => (/* binding */ joinClasses),
/* harmony export */   range: () => (/* binding */ range),
/* harmony export */   removeChildren: () => (/* binding */ removeChildren),
/* harmony export */   removeChildrenAndAdd: () => (/* binding */ removeChildrenAndAdd),
/* harmony export */   rmClass: () => (/* binding */ rmClass),
/* harmony export */   selectInput: () => (/* binding */ selectInput)
/* harmony export */ });
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./src/third_party/codemirror/package/src/util/browser.js");


function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

let rmClass = function(node, cls) {
  let current = node.className
  let match = classTest(cls).exec(current)
  if (match) {
    let after = current.slice(match.index + match[0].length)
    node.className = current.slice(0, match.index) + (after ? match[1] + after : "")
  }
}

function removeChildren(e) {
  for (let count = e.childNodes.length; count > 0; --count)
    e.removeChild(e.firstChild)
  return e
}

function removeChildrenAndAdd(parent, e) {
  return removeChildren(parent).appendChild(e)
}

function elt(tag, content, className, style) {
  let e = document.createElement(tag)
  if (className) e.className = className
  if (style) e.style.cssText = style
  if (typeof content == "string") e.appendChild(document.createTextNode(content))
  else if (content) for (let i = 0; i < content.length; ++i) e.appendChild(content[i])
  return e
}
// wrapper for elt, which removes the elt from the accessibility tree
function eltP(tag, content, className, style) {
  let e = elt(tag, content, className, style)
  e.setAttribute("role", "presentation")
  return e
}

let range
if (document.createRange) range = function(node, start, end, endNode) {
  let r = document.createRange()
  r.setEnd(endNode || node, end)
  r.setStart(node, start)
  return r
}
else range = function(node, start, end) {
  let r = document.body.createTextRange()
  try { r.moveToElementText(node.parentNode) }
  catch(e) { return r }
  r.collapse(true)
  r.moveEnd("character", end)
  r.moveStart("character", start)
  return r
}

function contains(parent, child) {
  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
    child = child.parentNode
  if (parent.contains)
    return parent.contains(child)
  do {
    if (child.nodeType == 11) child = child.host
    if (child == parent) return true
  } while (child = child.parentNode)
}

function activeElt() {
  // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
  // IE < 10 will throw when accessed while the page is loading or in an iframe.
  // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
  let activeElement
  try {
    activeElement = document.activeElement
  } catch(e) {
    activeElement = document.body || null
  }
  while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
    activeElement = activeElement.shadowRoot.activeElement
  return activeElement
}

function addClass(node, cls) {
  let current = node.className
  if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls
}
function joinClasses(a, b) {
  let as = a.split(" ")
  for (let i = 0; i < as.length; i++)
    if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i]
  return b
}

let selectInput = function(node) { node.select() }
if (_browser_js__WEBPACK_IMPORTED_MODULE_0__.ios) // Mobile Safari apparently has a bug where select() is broken.
  selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length }
else if (_browser_js__WEBPACK_IMPORTED_MODULE_0__.ie) // Suppress mysterious IE10 errors
  selectInput = function(node) { try { node.select() } catch(_e) {} }


/***/ })

}]);