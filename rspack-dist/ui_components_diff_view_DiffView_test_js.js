"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_diff_view_DiffView_test_js"], {
"./ui/components/diff_view/DiffView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/diff/diff.js */ "./third_party/diff/diff.js");
/* harmony import */var _diff_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diff_view.js */ "./ui/components/diff_view/diff_view.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}



function buildDiff(original, updated) {
    var diff = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.DiffWrapper.lineDiff(original.split('\n'), updated.split('\n'));
    var view = new _diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.DiffView({
        diff: diff,
        mimeType: 'text/javascript'
    });
    return view.loaded.then(function() {
        return view.shadowRoot;
    });
}
var cachedSimpleDiff = null;
var original = 'let x = `one\ntwo` /* with a\ncomment */\nreturn okay()';
var updated = 'let x = `one\nthree` // with a\n"comment"\nreturn okay()';
function simpleDiff() {
    if (!cachedSimpleDiff) {
        cachedSimpleDiff = buildDiff(original, updated);
    }
    return cachedSimpleDiff;
}
function text(elt) {
    if (_instanceof(elt, Text)) {
        return elt.nodeValue;
    }
    if (_instanceof(elt, HTMLElement) && !elt.classList.contains('diff-hidden-text')) {
        return Array.from(elt.childNodes).map(text).join('');
    }
    return '';
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('DiffView', function() {
    it('renders the proper content', /*#__PURE__*/ _async_to_generator(function() {
        var output, lines;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        simpleDiff()
                    ];
                case 1:
                    output = _state.sent();
                    lines = Array.from(output.querySelectorAll('.diff-line-content'));
                    assert.strictEqual(lines.length, 6);
                    assert.strictEqual(lines.filter(function(l) {
                        return !l.classList.contains('diff-line-addition');
                    }).map(text).join('\n'), original);
                    assert.strictEqual(lines.filter(function(l) {
                        return !l.classList.contains('diff-line-deletion');
                    }).map(text).join('\n'), updated);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders line numbers', /*#__PURE__*/ _async_to_generator(function() {
        var output, numbers;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        simpleDiff()
                    ];
                case 1:
                    output = _state.sent();
                    numbers = Array.from(output.querySelectorAll('.diff-line-number'));
                    // Line numbers are rendered pairwise per line, with one number
                    // omitted from inserted/deleted lines
                    assert.strictEqual(numbers.map(text).join('-'), '1-1-2--3---2--3-4-4');
                    return [
                        2
                    ];
            }
        });
    }));
    it('highlights code properly', /*#__PURE__*/ _async_to_generator(function() {
        var output, lines;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        simpleDiff()
                    ];
                case 1:
                    output = _state.sent();
                    lines = output.querySelectorAll('.diff-line-content');
                    // Basic highlighting
                    assert.isNotNull(lines[0].querySelector('.token-keyword'));
                    // Accurate per-file highlighting
                    // - lines[2] holds 'comment */', lines[4] holds '"comment"'.
                    assert.isNotNull(lines[2].querySelector('.token-comment'));
                    assert.isNotNull(lines[4].querySelector('.token-string'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('collapses long stretches of equal text', /*#__PURE__*/ _async_to_generator(function() {
        var original, changed, view;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    original = 'boring\n'.repeat(100);
                    changed = 'interesting\n' + original.slice(0, 500) + '...' + original.slice(500);
                    return [
                        4,
                        buildDiff(original, changed)
                    ];
                case 1:
                    view = _state.sent();
                    assert.isTrue(view.querySelectorAll('.diff-line-content').length < 100);
                    assert.isNotNull(view.querySelector('.diff-line-spacer'));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=DiffView.test.js.map


}),
"./ui/components/diff_view/diff_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DiffView: function() { return /* reexport module object */ _DiffView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _DiffView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiffView.js */ "./ui/components/diff_view/DiffView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=diff_view.js.map



}),

}]);