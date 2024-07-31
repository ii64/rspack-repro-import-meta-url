(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_addon_search_matchesonscrollbar_js"],{

/***/ "./src/third_party/codemirror/package/addon/scroll/annotatescrollbar.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/codemirror/package/addon/scroll/annotatescrollbar.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"));
  else {}
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineExtension("annotateScrollbar", function(options) {
    if (typeof options == "string") options = {className: options};
    return new Annotation(this, options);
  });

  CodeMirror.defineOption("scrollButtonHeight", 0);

  function Annotation(cm, options) {
    this.cm = cm;
    this.options = options;
    this.buttonHeight = options.scrollButtonHeight || cm.getOption("scrollButtonHeight");
    this.annotations = [];
    this.doRedraw = this.doUpdate = null;
    this.div = cm.getWrapperElement().appendChild(document.createElement("div"));
    this.div.style.cssText = "position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none";
    this.computeScale();

    function scheduleRedraw(delay) {
      clearTimeout(self.doRedraw);
      self.doRedraw = setTimeout(function() { self.redraw(); }, delay);
    }

    var self = this;
    cm.on("refresh", this.resizeHandler = function() {
      clearTimeout(self.doUpdate);
      self.doUpdate = setTimeout(function() {
        if (self.computeScale()) scheduleRedraw(20);
      }, 100);
    });
    cm.on("markerAdded", this.resizeHandler);
    cm.on("markerCleared", this.resizeHandler);
    if (options.listenForChanges !== false)
      cm.on("changes", this.changeHandler = function() {
        scheduleRedraw(250);
      });
  }

  Annotation.prototype.computeScale = function() {
    var cm = this.cm;
    var hScale = (cm.getWrapperElement().clientHeight - cm.display.barHeight - this.buttonHeight * 2) /
      cm.getScrollerElement().scrollHeight
    if (hScale != this.hScale) {
      this.hScale = hScale;
      return true;
    }
  };

  Annotation.prototype.update = function(annotations) {
    this.annotations = annotations;
    this.redraw();
  };

  Annotation.prototype.redraw = function(compute) {
    if (compute !== false) this.computeScale();
    var cm = this.cm, hScale = this.hScale;

    var frag = document.createDocumentFragment(), anns = this.annotations;

    var wrapping = cm.getOption("lineWrapping");
    var singleLineH = wrapping && cm.defaultTextHeight() * 1.5;
    var curLine = null, curLineObj = null;

    function getY(pos, top) {
      if (curLine != pos.line) {
        curLine = pos.line
        curLineObj = cm.getLineHandle(pos.line)
        var visual = cm.getLineHandleVisualStart(curLineObj)
        if (visual != curLineObj) {
          curLine = cm.getLineNumber(visual)
          curLineObj = visual
        }
      }
      if ((curLineObj.widgets && curLineObj.widgets.length) ||
          (wrapping && curLineObj.height > singleLineH))
        return cm.charCoords(pos, "local")[top ? "top" : "bottom"];
      var topY = cm.heightAtLine(curLineObj, "local");
      return topY + (top ? 0 : curLineObj.height);
    }

    var lastLine = cm.lastLine()
    if (cm.display.barWidth) for (var i = 0, nextTop; i < anns.length; i++) {
      var ann = anns[i];
      if (ann.to.line > lastLine) continue;
      var top = nextTop || getY(ann.from, true) * hScale;
      var bottom = getY(ann.to, false) * hScale;
      while (i < anns.length - 1) {
        if (anns[i + 1].to.line > lastLine) break;
        nextTop = getY(anns[i + 1].from, true) * hScale;
        if (nextTop > bottom + .9) break;
        ann = anns[++i];
        bottom = getY(ann.to, false) * hScale;
      }
      if (bottom == top) continue;
      var height = Math.max(bottom - top, 3);

      var elt = frag.appendChild(document.createElement("div"));
      elt.style.cssText = "position: absolute; right: 0px; width: " + Math.max(cm.display.barWidth - 1, 2) + "px; top: "
        + (top + this.buttonHeight) + "px; height: " + height + "px";
      elt.className = this.options.className;
      if (ann.id) {
        elt.setAttribute("annotation-id", ann.id);
      }
    }
    this.div.textContent = "";
    this.div.appendChild(frag);
  };

  Annotation.prototype.clear = function() {
    this.cm.off("refresh", this.resizeHandler);
    this.cm.off("markerAdded", this.resizeHandler);
    this.cm.off("markerCleared", this.resizeHandler);
    if (this.changeHandler) this.cm.off("changes", this.changeHandler);
    this.div.parentNode.removeChild(this.div);
  };
});


/***/ }),

/***/ "./src/third_party/codemirror/package/addon/search/matchesonscrollbar.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/codemirror/package/addon/search/matchesonscrollbar.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"), __webpack_require__(/*! ./searchcursor */ "./src/third_party/codemirror/package/addon/search/searchcursor.js"), __webpack_require__(/*! ../scroll/annotatescrollbar */ "./src/third_party/codemirror/package/addon/scroll/annotatescrollbar.js"));
  else {}
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineExtension("showMatchesOnScrollbar", function(query, caseFold, options) {
    if (typeof options == "string") options = {className: options};
    if (!options) options = {};
    return new SearchAnnotation(this, query, caseFold, options);
  });

  function SearchAnnotation(cm, query, caseFold, options) {
    this.cm = cm;
    this.options = options;
    var annotateOptions = {listenForChanges: false};
    for (var prop in options) annotateOptions[prop] = options[prop];
    if (!annotateOptions.className) annotateOptions.className = "CodeMirror-search-match";
    this.annotation = cm.annotateScrollbar(annotateOptions);
    this.query = query;
    this.caseFold = caseFold;
    this.gap = {from: cm.firstLine(), to: cm.lastLine() + 1};
    this.matches = [];
    this.update = null;

    this.findMatches();
    this.annotation.update(this.matches);

    var self = this;
    cm.on("change", this.changeHandler = function(_cm, change) { self.onChange(change); });
  }

  var MAX_MATCHES = 1000;

  SearchAnnotation.prototype.findMatches = function() {
    if (!this.gap) return;
    for (var i = 0; i < this.matches.length; i++) {
      var match = this.matches[i];
      if (match.from.line >= this.gap.to) break;
      if (match.to.line >= this.gap.from) this.matches.splice(i--, 1);
    }
    var cursor = this.cm.getSearchCursor(this.query, CodeMirror.Pos(this.gap.from, 0), {caseFold: this.caseFold, multiline: this.options.multiline});
    var maxMatches = this.options && this.options.maxMatches || MAX_MATCHES;
    while (cursor.findNext()) {
      var match = {from: cursor.from(), to: cursor.to()};
      if (match.from.line >= this.gap.to) break;
      this.matches.splice(i++, 0, match);
      if (this.matches.length > maxMatches) break;
    }
    this.gap = null;
  };

  function offsetLine(line, changeStart, sizeChange) {
    if (line <= changeStart) return line;
    return Math.max(changeStart, line + sizeChange);
  }

  SearchAnnotation.prototype.onChange = function(change) {
    var startLine = change.from.line;
    var endLine = CodeMirror.changeEnd(change).line;
    var sizeChange = endLine - change.to.line;
    if (this.gap) {
      this.gap.from = Math.min(offsetLine(this.gap.from, startLine, sizeChange), change.from.line);
      this.gap.to = Math.max(offsetLine(this.gap.to, startLine, sizeChange), change.from.line);
    } else {
      this.gap = {from: change.from.line, to: endLine + 1};
    }

    if (sizeChange) for (var i = 0; i < this.matches.length; i++) {
      var match = this.matches[i];
      var newFrom = offsetLine(match.from.line, startLine, sizeChange);
      if (newFrom != match.from.line) match.from = CodeMirror.Pos(newFrom, match.from.ch);
      var newTo = offsetLine(match.to.line, startLine, sizeChange);
      if (newTo != match.to.line) match.to = CodeMirror.Pos(newTo, match.to.ch);
    }
    clearTimeout(this.update);
    var self = this;
    this.update = setTimeout(function() { self.updateAfterChange(); }, 250);
  };

  SearchAnnotation.prototype.updateAfterChange = function() {
    this.findMatches();
    this.annotation.update(this.matches);
  };

  SearchAnnotation.prototype.clear = function() {
    this.cm.off("change", this.changeHandler);
    this.annotation.clear();
  };
});


/***/ })

}]);