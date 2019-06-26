/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/awesome-typescript-loader/dist/entry.js):\\nSyntaxError: C:/Users/11387/Desktop/github/Coding_yu/react/try-react-typescript/src/index.tsx: Unexpected token (6:16)\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mvar\\u001b[39m \\u001b[33mReactDOM\\u001b[39m \\u001b[33m=\\u001b[39m require(\\u001b[32m\\\"react-dom\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\n \\u001b[90m 5 | \\u001b[39m\\u001b[36mvar\\u001b[39m app_1 \\u001b[33m=\\u001b[39m require(\\u001b[32m\\\"./app\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mapp_1\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'root'\\u001b[39m))\\u001b[33m;\\u001b[39m\\n \\u001b[90m   | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 7 | \\u001b[39m\\u001b[0m\\n    at Parser.pp$5.raise (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:4454:13)\\n    at Parser.pp.unexpected (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:1761:8)\\n    at Parser.pp$3.parseExprAtom (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3750:12)\\n    at Parser.pp$3.parseExprSubscripts (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3494:19)\\n    at Parser.pp$3.parseMaybeUnary (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3474:19)\\n    at Parser.pp$3.parseExprOps (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3404:19)\\n    at Parser.pp$3.parseMaybeConditional (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3381:19)\\n    at Parser.pp$3.parseMaybeAssign (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3344:19)\\n    at Parser.pp$3.parseExprListItem (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:4312:16)\\n    at Parser.pp$3.parseCallExpressionArguments (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3573:20)\\n    at Parser.pp$3.parseSubscripts (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3533:31)\\n    at Parser.pp$3.parseExprSubscripts (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3504:15)\\n    at Parser.pp$3.parseMaybeUnary (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3474:19)\\n    at Parser.pp$3.parseExprOps (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3404:19)\\n    at Parser.pp$3.parseMaybeConditional (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3381:19)\\n    at Parser.pp$3.parseMaybeAssign (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3344:19)\\n    at Parser.pp$3.parseExpression (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:3306:19)\\n    at Parser.pp$1.parseStatement (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:1906:19)\\n    at Parser.pp$1.parseBlockBody (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:2268:21)\\n    at Parser.pp$1.parseTopLevel (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:1778:8)\\n    at Parser.parse (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:1673:17)\\n    at parse (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babylon\\\\lib\\\\index.js:7305:37)\\n    at File.parse (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\index.js:485:15)\\n    at File.parseCode (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\index.js:570:20)\\n    at C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\pipeline.js:49:12\\n    at File.wrap (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\index.js:532:16)\\n    at Pipeline.transform (C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\pipeline.js:47:17)\\n    at C:\\\\Users\\\\11387\\\\Desktop\\\\github\\\\Coding_yu\\\\react\\\\try-react-typescript\\\\node_modules\\\\awesome-typescript-loader\\\\src\\\\index.ts:153:41\\n    at process._tickCallback (internal/process/next_tick.js:68:7)\");\n\n//# sourceURL=webpack:///./index.tsx?");

/***/ })

/******/ });