"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_FilePathScoreFunction_js"], {
"./panels/sources/FilePathScoreFunction.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FilePathScoreFunction: function() { return FilePathScoreFunction; }
});
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var FilePathScoreFunction = /*#__PURE__*/ function() {
    "use strict";
    function FilePathScoreFunction(query) {
        _class_call_check(this, FilePathScoreFunction);
        _define_property(this, "query", void 0);
        _define_property(this, "queryUpperCase", void 0);
        _define_property(this, "score", void 0);
        _define_property(this, "sequence", void 0);
        _define_property(this, "dataUpperCase", void 0);
        _define_property(this, "fileNameIndex", void 0);
        this.query = query;
        this.queryUpperCase = query.toUpperCase();
        this.score = new Int32Array(20 * 100);
        this.sequence = new Int32Array(20 * 100);
        this.dataUpperCase = '';
        this.fileNameIndex = 0;
    }
    _create_class(FilePathScoreFunction, [
        {
            key: "calculateScore",
            value: function calculateScore(data, matchIndexes) {
                if (!data || !this.query) {
                    return 0;
                }
                var n = this.query.length;
                var m = data.length;
                if (!this.score || this.score.length < n * m) {
                    this.score = new Int32Array(n * m * 2);
                    this.sequence = new Int32Array(n * m * 2);
                }
                var score = this.score;
                var sequence = this.sequence;
                this.dataUpperCase = data.toUpperCase();
                this.fileNameIndex = data.lastIndexOf('/');
                for(var i = 0; i < n; ++i){
                    for(var j = 0; j < m; ++j){
                        var skipCharScore = j === 0 ? 0 : score[i * m + j - 1];
                        var prevCharScore = i === 0 || j === 0 ? 0 : score[(i - 1) * m + j - 1];
                        var consecutiveMatch = i === 0 || j === 0 ? 0 : sequence[(i - 1) * m + j - 1];
                        var pickCharScore = this.match(this.query, data, i, j, consecutiveMatch);
                        if (pickCharScore && prevCharScore + pickCharScore >= skipCharScore) {
                            sequence[i * m + j] = consecutiveMatch + 1;
                            score[i * m + j] = prevCharScore + pickCharScore;
                        } else {
                            sequence[i * m + j] = 0;
                            score[i * m + j] = skipCharScore;
                        }
                    }
                }
                if (matchIndexes) {
                    this.restoreMatchIndexes(sequence, n, m, matchIndexes);
                }
                var maxDataLength = 256;
                return score[n * m - 1] * maxDataLength + (maxDataLength - data.length);
            }
        },
        {
            key: "testWordStart",
            value: function testWordStart(data, j) {
                if (j === 0) {
                    return true;
                }
                var prevChar = data.charAt(j - 1);
                return prevChar === '_' || prevChar === '-' || prevChar === '/' || prevChar === '.' || prevChar === ' ' || data[j - 1] !== this.dataUpperCase[j - 1] && data[j] === this.dataUpperCase[j];
            }
        },
        {
            key: "restoreMatchIndexes",
            value: function restoreMatchIndexes(sequence, n, m, out) {
                var i = n - 1, j = m - 1;
                while(i >= 0 && j >= 0){
                    switch(sequence[i * m + j]){
                        case 0:
                            --j;
                            break;
                        default:
                            out.push(j);
                            --i;
                            --j;
                            break;
                    }
                }
                out.reverse();
            }
        },
        {
            key: "singleCharScore",
            value: function singleCharScore(query, data, i, j) {
                var isWordStart = this.testWordStart(data, j);
                var isFileName = j > this.fileNameIndex;
                var isPathTokenStart = j === 0 || data[j - 1] === '/';
                var isCapsMatch = query[i] === data[j] && query[i] === this.queryUpperCase[i];
                var score = 10;
                if (isPathTokenStart) {
                    score += 4;
                }
                if (isWordStart) {
                    score += 2;
                }
                if (isCapsMatch) {
                    score += 6;
                }
                if (isFileName) {
                    score += 4;
                }
                // promote the case of making the whole match in the filename
                if (j === this.fileNameIndex + 1 && i === 0) {
                    score += 5;
                }
                if (isFileName && isWordStart) {
                    score += 3;
                }
                return score;
            }
        },
        {
            key: "sequenceCharScore",
            value: function sequenceCharScore(query, data, i, j, sequenceLength) {
                var isFileName = j > this.fileNameIndex;
                var isPathTokenStart = j === 0 || data[j - 1] === '/';
                var score = 10;
                if (isFileName) {
                    score += 4;
                }
                if (isPathTokenStart) {
                    score += 5;
                }
                score += sequenceLength * 4;
                return score;
            }
        },
        {
            key: "match",
            value: function match(query, data, i, j, consecutiveMatch) {
                if (this.queryUpperCase[i] !== this.dataUpperCase[j]) {
                    return 0;
                }
                if (!consecutiveMatch) {
                    return this.singleCharScore(query, data, i, j);
                }
                return this.sequenceCharScore(query, data, i, j - consecutiveMatch, consecutiveMatch);
            }
        }
    ]);
    return FilePathScoreFunction;
} //# sourceMappingURL=FilePathScoreFunction.js.map
();


}),

}]);