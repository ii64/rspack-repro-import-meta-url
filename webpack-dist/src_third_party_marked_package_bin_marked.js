(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_marked_package_bin_marked"],{

/***/ "./src/third_party/marked/package/bin/marked":
/*!***************************************************!*\
  !*** ./src/third_party/marked/package/bin/marked ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __dirname = "/";
/* module decorator */ module = __webpack_require__.nmd(module);
//#!/usr/bin/env node

/**
 * Marked CLI
 * Copyright (c) 2011-2013, Christopher Jeffrey (MIT License)
 */

const fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
  path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
  marked = __webpack_require__(/*! ../ */ "./src/third_party/marked/package/lib/marked.umd.js");

/**
 * Man Page
 */

function help() {
  const spawn = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

  const options = {
    cwd: process.cwd(),
    env: process.env,
    setsid: false,
    stdio: 'inherit'
  };

  spawn('man', [path.resolve(__dirname, '../man/marked.1')], options)
    .on('error', function() {
      fs.readFile(path.resolve(__dirname, '../man/marked.1.txt'), 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
      });
    });
}

function version() {
  const pkg = __webpack_require__(/*! ../package.json */ "./src/third_party/marked/package/package.json");
  console.log(pkg.version);
}

/**
 * Main
 */

function main(argv, callback) {
  const files = [],
    options = {};
  let input,
    output,
    string,
    arg,
    tokens,
    opt;

  function getarg() {
    let arg = argv.shift();

    if (arg.indexOf('--') === 0) {
      // e.g. --opt
      arg = arg.split('=');
      if (arg.length > 1) {
        // e.g. --opt=val
        argv.unshift(arg.slice(1).join('='));
      }
      arg = arg[0];
    } else if (arg[0] === '-') {
      if (arg.length > 2) {
        // e.g. -abc
        argv = arg.substring(1).split('').map(function(ch) {
          return '-' + ch;
        }).concat(argv);
        arg = argv.shift();
      } else {
        // e.g. -a
      }
    } else {
      // e.g. foo
    }

    return arg;
  }

  while (argv.length) {
    arg = getarg();
    switch (arg) {
      case '--test':
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../test'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(process.argv.slice());
      case '-o':
      case '--output':
        output = argv.shift();
        break;
      case '-i':
      case '--input':
        input = argv.shift();
        break;
      case '-s':
      case '--string':
        string = argv.shift();
        break;
      case '-t':
      case '--tokens':
        tokens = true;
        break;
      case '-h':
      case '--help':
        return help();
      case '-v':
      case '--version':
        return version();
      default:
        if (arg.indexOf('--') === 0) {
          opt = camelize(arg.replace(/^--(no-)?/, ''));
          if (!marked.defaults.hasOwnProperty(opt)) {
            continue;
          }
          if (arg.indexOf('--no-') === 0) {
            options[opt] = typeof marked.defaults[opt] !== 'boolean'
              ? null
              : false;
          } else {
            options[opt] = typeof marked.defaults[opt] !== 'boolean'
              ? argv.shift()
              : true;
          }
        } else {
          files.push(arg);
        }
        break;
    }
  }

  function getData(callback) {
    if (!input) {
      if (files.length <= 2) {
        if (string) {
          return callback(null, string);
        }
        return getStdin(callback);
      }
      input = files.pop();
    }
    return fs.readFile(input, 'utf8', callback);
  }

  return getData(function(err, data) {
    if (err) return callback(err);

    data = tokens
      ? JSON.stringify(marked.lexer(data, options), null, 2)
      : marked(data, options);

    if (!output) {
      process.stdout.write(data + '\n');
      return callback();
    }

    return fs.writeFile(output, data, callback);
  });
}

/**
 * Helpers
 */

function getStdin(callback) {
  const stdin = process.stdin;
  let buff = '';

  stdin.setEncoding('utf8');

  stdin.on('data', function(data) {
    buff += data;
  });

  stdin.on('error', function(err) {
    return callback(err);
  });

  stdin.on('end', function() {
    return callback(null, buff);
  });

  try {
    stdin.resume();
  } catch (e) {
    callback(e);
  }
}

function camelize(text) {
  return text.replace(/(\w)-(\w)/g, function(_, a, b) {
    return a + b.toUpperCase();
  });
}

function handleError(err) {
  if (err.code === 'ENOENT') {
    console.error('marked: output to ' + err.path + ': No such directory');
    return process.exit(1);
  }
  throw err;
}

/**
 * Expose / Entry Point
 */

if (!module.parent) {
  process.title = 'marked';
  main(process.argv.slice(), function(err, code) {
    if (err) return handleError(err);
    return process.exit(code || 0);
  });
} else {
  module.exports = main;
}


/***/ }),

/***/ "./src/third_party/marked/package/package.json":
/*!*****************************************************!*\
  !*** ./src/third_party/marked/package/package.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"marked","description":"A markdown parser built for speed","author":"Christopher Jeffrey","version":"13.0.1","type":"module","main":"./lib/marked.cjs","module":"./lib/marked.esm.js","browser":"./lib/marked.umd.js","types":"./lib/marked.d.ts","bin":{"marked":"bin/marked.js"},"man":"./man/marked.1","files":["bin/","lib/","man/","marked.min.js"],"exports":{".":{"import":{"types":"./lib/marked.d.ts","default":"./lib/marked.esm.js"},"default":{"types":"./lib/marked.d.cts","default":"./lib/marked.cjs"}},"./bin/marked":"./bin/marked.js","./marked.min.js":"./marked.min.js","./package.json":"./package.json"},"publishConfig":{"provenance":true},"repository":"git://github.com/markedjs/marked.git","homepage":"https://marked.js.org","bugs":{"url":"http://github.com/markedjs/marked/issues"},"license":"MIT","keywords":["markdown","markup","html"],"tags":["markdown","markup","html"],"devDependencies":{"@markedjs/testutils":"12.0.0-0","@arethetypeswrong/cli":"^0.15.3","@rollup/plugin-terser":"^0.4.4","@rollup/plugin-typescript":"^11.1.6","@semantic-release/commit-analyzer":"^13.0.0","@semantic-release/git":"^10.0.1","@semantic-release/github":"^10.0.6","@semantic-release/npm":"^12.0.1","@semantic-release/release-notes-generator":"^14.0.0","@typescript-eslint/eslint-plugin":"^7.13.0","@typescript-eslint/parser":"^7.13.1","cheerio":"1.0.0-rc.12","commonmark":"0.31.0","cross-env":"^7.0.3","dts-bundle-generator":"^9.5.1","eslint":"^8.57.0","eslint-config-standard":"^17.1.0","eslint-plugin-import":"^2.29.1","eslint-plugin-n":"^16.6.2","eslint-plugin-promise":"^6.2.0","highlight.js":"^11.9.0","markdown-it":"14.1.0","marked-highlight":"^2.1.2","marked-man":"^2.1.0","node-fetch":"^3.3.2","recheck":"^4.4.5","rollup":"^4.18.0","semantic-release":"^24.0.0","titleize":"^4.0.0","ts-expect":"^1.3.0","typescript":"5.4.5"},"scripts":{"test":"npm run build && npm run test:specs && npm run test:unit","test:all":"npm test && npm run test:umd && npm run test:types && npm run test:lint","test:unit":"node --test --test-reporter=spec test/unit/*.test.js","test:specs":"node --test --test-reporter=spec test/run-spec-tests.js","test:lint":"eslint .","test:redos":"node test/recheck.js > vuln.js","test:types":"tsc --project tsconfig-type-test.json && attw -P --exclude-entrypoints ./bin/marked ./marked.min.js","test:umd":"node test/umd-test.js","test:update":"node test/update-specs.js","rules":"node test/rules.js","bench":"npm run build && node test/bench.js","lint":"eslint --fix .","build:reset":"git checkout upstream/master lib/marked.cjs lib/marked.umd.js lib/marked.esm.js marked.min.js","build":"npm run rollup && npm run build:types && npm run build:man","build:docs":"npm run build && node docs/build.js","build:types":"tsc && dts-bundle-generator --project tsconfig.json -o lib/marked.d.ts src/marked.ts && dts-bundle-generator --project tsconfig.json -o lib/marked.d.cts src/marked.ts","build:man":"marked-man man/marked.1.md > man/marked.1","rollup":"rollup -c rollup.config.js"},"engines":{"node":">= 18"}}');

/***/ })

}]);