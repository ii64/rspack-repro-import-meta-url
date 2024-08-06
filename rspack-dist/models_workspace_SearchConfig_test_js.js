"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_workspace_SearchConfig_test_js"], {
"./models/workspace/SearchConfig.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        "http://example.com/main.js"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "http://example.com/main.js"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "http://example.com/index.js"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "http://example.com/main.js"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "http://example.com/index.js"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "http://example.com/main.js"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "http://example.com/index.js"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "http://google.de/a.js"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "http://google.de/b.js"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "http://example.com/main.js"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "http://example.com/index.js"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "http://google.de/a.js"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "http://google.de/b.js"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "http://example.com/main.js"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "http://example.com/index.js"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}

var SearchConfig = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__.SearchConfig.SearchConfig;
describe('SearchConfig', function() {
    describe('filePathMatchesFileQuery', function() {
        var url = function(t) {
            return t[0];
        };
        it('returns true if the user query doesn\'t contain any f: or files: part', function() {
            var config = new SearchConfig('foo', true, false);
            assert.isTrue(config.filePathMatchesFileQuery(url(_templateObject())));
        });
        it('works if the query contains a f: part', function() {
            var config = new SearchConfig('f:main.js foo', true, false);
            assert.isTrue(config.filePathMatchesFileQuery(url(_templateObject1())));
            assert.isFalse(config.filePathMatchesFileQuery(url(_templateObject2())));
        });
        it('works if the query contains a file: part', function() {
            var config = new SearchConfig('file:main.js foo', true, false);
            assert.isTrue(config.filePathMatchesFileQuery(url(_templateObject3())));
            assert.isFalse(config.filePathMatchesFileQuery(url(_templateObject4())));
        });
        it('works with multiple f: and file: parts (all of which must match)', function() {
            var config = new SearchConfig('file:m f:.js foo', true, false);
            assert.isTrue(config.filePathMatchesFileQuery(url(_templateObject5())));
            assert.isTrue(config.filePathMatchesFileQuery(url(_templateObject6())));
            assert.isFalse(config.filePathMatchesFileQuery(url(_templateObject7())));
            assert.isFalse(config.filePathMatchesFileQuery(url(_templateObject8())));
        });
        it('allows * for f: parts', function() {
            var config = new SearchConfig('f:example.com/*.js foo', true, false);
            assert.isTrue(config.filePathMatchesFileQuery(url(_templateObject9())));
            assert.isTrue(config.filePathMatchesFileQuery(url(_templateObject10())));
            assert.isFalse(config.filePathMatchesFileQuery(url(_templateObject11())));
            assert.isFalse(config.filePathMatchesFileQuery(url(_templateObject12())));
        });
        it('allows negation of f: parts', function() {
            var config = new SearchConfig('-f:main.js foo', true, false);
            assert.isFalse(config.filePathMatchesFileQuery(url(_templateObject13())));
            assert.isTrue(config.filePathMatchesFileQuery(url(_templateObject14())));
        });
    });
    describe('queries', function() {
        it('does not contain f: or file: parts', function() {
            var config = new SearchConfig('-f:index.js f:main.js foo', true, false);
            assert.deepEqual(config.queries(), [
                'foo'
            ]);
        });
        it('contains one part for simple searches', function() {
            var config = new SearchConfig('foo', true, false);
            assert.deepEqual(config.queries(), [
                'foo'
            ]);
        });
        it('contains one part for space separated simple words', function() {
            var config = new SearchConfig('foo bar', true, false);
            assert.deepEqual(config.queries(), [
                'foo bar'
            ]);
        });
        it('contains one part each for quoted simple words', function() {
            var config = new SearchConfig('"foo""bar"', true, false);
            assert.deepEqual(config.queries(), [
                'foo',
                'bar'
            ]);
        });
        it('allows escaping of quotes', function() {
            var config = new SearchConfig('contains \\"escaped\\" quotes', true, false);
            assert.deepEqual(config.queries(), [
                'contains "escaped" quotes'
            ]);
        });
        it('doesn\'t remove quotes with the regex setting enabled', function() {
            var config = new SearchConfig('"foo""bar"', true, true);
            assert.deepEqual(config.queries(), [
                '"foo"',
                '"bar"'
            ]);
        });
        it('doesn\'t remove backslash escapes with the regex setting enabled', function() {
            var config = new SearchConfig('with an escaped \\" quote', true, true);
            assert.deepEqual(config.queries(), [
                'with an escaped \\" quote'
            ]);
        });
    });
    it('can be serialized/deserialized to a plain JS object', function() {
        var config = new SearchConfig('f:main.js foo', true, false);
        var restoredConfig = SearchConfig.fromPlainObject(config.toPlainObject());
        assert.strictEqual(restoredConfig.query(), config.query());
        assert.strictEqual(restoredConfig.ignoreCase(), config.ignoreCase());
        assert.strictEqual(restoredConfig.isRegex(), config.isRegex());
        assert.deepEqual(restoredConfig.queries(), config.queries());
    });
}); //# sourceMappingURL=SearchConfig.test.js.map


}),

}]);