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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/style.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/style.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\nexports.push([module.i, \"@import url(https://use.typekit.net/enx5ndn.css);\", \"\"]);\n\n// module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box; }\\n\\nbody {\\n  text-align: center;\\n  font-size: 18px;\\n  font-family: futura-pt, sans-serif;\\n  font-weight: 400;\\n  font-style: normal; }\\n\\n.modal {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  -webkit-transform: translate(-50%, -50%);\\n  -ms-transform: translate(-50%, -50%);\\n  transform: translate(-50%, -50%);\\n  background: #fff;\\n  -webkit-box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.7);\\n  box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.7);\\n  padding: 32px;\\n  border-radius: 8px;\\n  display: none; }\\n\\n.modal.active {\\n  display: block; }\\n\\n.btn {\\n  padding: 10px 15px;\\n  font-family: inherit;\\n  font-size: 22px;\\n  color: #fff;\\n  border: none;\\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.6);\\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.6);\\n  background: #ad1457;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  margin: 8px 0; }\\n\\n.btn:hover {\\n  background: #880e4f; }\\n\\nfieldset {\\n  border: none;\\n  padding: 20px; }\\n\\ninput[type='radio'] + label {\\n  font-size: 24px;\\n  border: 1px solid transparent;\\n  border-radius: 10px;\\n  -webkit-transition: 0.3s;\\n  -o-transition: 0.3s;\\n  transition: 0.3s;\\n  display: inline-block; }\\n\\n#choose-char input[type='radio'] {\\n  position: absolute;\\n  left: -10000px; }\\n\\n#choose-char input[type='radio'] + label img {\\n  -webkit-transition: 0.2s;\\n  -o-transition: 0.2s;\\n  transition: 0.2s; }\\n\\n#choose-char input[type='radio']:focus + label {\\n  background: #14ad6a; }\\n\\n#choose-char input[type='radio']:checked + label {\\n  background: #14ad6a; }\\n\\n#choose-char input[type='radio']:focus + label img,\\n#choose-char input[type='radio']:checked + label img {\\n  -webkit-transform: translateY(-10px);\\n  -ms-transform: translateY(-10px);\\n  transform: translateY(-10px);\\n  -webkit-filter: drop-shadow(5px 5px 5px #222222);\\n  filter: drop-shadow(5px 5px 5px #222222); }\\n\\n#game-stats {\\n  position: fixed;\\n  bottom: 25px;\\n  right: 25px;\\n  background: #14ad6a;\\n  display: none;\\n  text-align: left;\\n  padding: 16px;\\n  color: #fff;\\n  font-size: 24px;\\n  border-radius: 8px; }\\n\\n#new-game-container {\\n  position: fixed;\\n  left: 25px;\\n  bottom: 25px;\\n  padding: 16px; }\\n\\n#win-popup {\\n  display: none;\\n  font-size: 24px; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/classes/enemy.js":
/*!******************************!*\
  !*** ./src/classes/enemy.js ***!
  \******************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Enemy\", function() { return Enemy; });\nclass Enemy {\r\n  constructor(speed) {\r\n    this.x = Math.floor(Math.random() * 500);\r\n    this.y = Math.random() * 184 + 50;\r\n    this.speed = speed * 50;\r\n    this.sprite = 'images/enemy-bug.png';\r\n  }\r\n  update(dt) {\r\n    this.x += this.speed * dt;\r\n    if (this.x > window.ctx.canvas.width) {\r\n      this.x = -Math.floor(Math.random() * (100 - 200) + 200);\r\n      this.y = Math.floor(Math.random() * 184) + 50;\r\n      this.speed++;\r\n    }\r\n  }\r\n  render() {\r\n    window.ctx.drawImage(window.resources.get(this.sprite), this.x, this.y);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/classes/enemy.js?");

/***/ }),

/***/ "./src/classes/engine.js":
/*!*******************************!*\
  !*** ./src/classes/engine.js ***!
  \*******************************/
/*! exports provided: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Engine\", function() { return Engine; });\nclass Engine {\r\n  constructor(player, enemies, game) {\r\n    this.reset();\r\n    this.createCanvas();\r\n    this.player = player;\r\n    this.enemies = enemies;\r\n    this.game = game;\r\n  }\r\n  createCanvas() {\r\n    this.canvas = document.createElement('canvas');\r\n    this.ctx = this.canvas.getContext('2d');\r\n    window.ctx = this.ctx;\r\n    this.canvas.width = 505;\r\n    this.canvas.height = 606;\r\n    document.body.appendChild(this.canvas);\r\n  }\r\n  main() {\r\n    let now = Date.now(),\r\n      dt = (now - this.lastTime) / 1000.0;\r\n    this.update(dt);\r\n    this.render();\r\n    this.lastTime = now;\r\n    window.requestAnimationFrame(() => {\r\n      this.main();\r\n    });\r\n  }\r\n  init() {\r\n    this.lastTime = Date.now();\r\n    this.main();\r\n  }\r\n  update(dt) {\r\n    this.updateEntities(dt);\r\n    if (this.player.y < 48) {\r\n      this.game.handleWin();\r\n      this.moveBackToStart();\r\n    }\r\n    this.detectCollisions();\r\n    this.detectGems();\r\n  }\r\n  updateEntities(dt) {\r\n    this.enemies.forEach(enemy => {\r\n      enemy.update(dt);\r\n    });\r\n    this.player.update();\r\n  }\r\n  render() {\r\n    const rowImages = [\r\n        'images/water-block.png', // Top row is water\r\n        'images/stone-block.png', // Row 1 of 3 of stone\r\n        'images/stone-block.png', // Row 2 of 3 of stone\r\n        'images/stone-block.png', // Row 3 of 3 of stone\r\n        'images/grass-block.png', // Row 1 of 2 of grass\r\n        'images/grass-block.png' // Row 2 of 2 of grass\r\n      ],\r\n      numRows = 6,\r\n      numCols = 5;\r\n    let row, col;\r\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    for (row = 0; row < numRows; row++) {\r\n      for (col = 0; col < numCols; col++) {\r\n        /*\r\n         * The drawImage function of the canvas' context element\r\n         * requires 3 parameters: the image to draw, the x coordinate\r\n         * to start drawing and the y coordinate to start drawing.\r\n         * We're using our Resources helpers to refer to our images\r\n         * so that we get the benefits of caching these images, since\r\n         * we're using them over and over.\r\n         */\r\n        this.ctx.drawImage(\r\n          window.resources.get(rowImages[row]),\r\n          col * 101,\r\n          row * 83\r\n        );\r\n      }\r\n    }\r\n    if (this.game.showWinTile) {\r\n      this.renderWinTile();\r\n    }\r\n    this.renderGems();\r\n    this.renderEntities();\r\n  }\r\n  renderWinTile() {\r\n    this.ctx.drawImage(window.resources.get('images/Selector.png'), 202.5, 383);\r\n  }\r\n  detectCollisions() {\r\n    this.enemies.forEach(enemy => {\r\n      if (\r\n        Math.abs(enemy.x - this.player.x) < 30 &&\r\n        Math.abs(enemy.y - this.player.y) < 30\r\n      ) {\r\n        this.handleCollision();\r\n      }\r\n    });\r\n  }\r\n  detectGems() {\r\n    this.gems.forEach(gem => {\r\n      if (\r\n        Math.abs(gem.x - this.player.x) < 30 &&\r\n        Math.abs(gem.y - this.player.y) < 30\r\n      ) {\r\n        this.gems = this.gems.filter(value => {\r\n          return value !== gem;\r\n        });\r\n        this.game.collectedGems++;\r\n        this.game.updateStats();\r\n      }\r\n    });\r\n  }\r\n  handleCollision() {\r\n    this.game.handleFail();\r\n    this.moveBackToStart();\r\n  }\r\n  moveBackToStart() {\r\n    this.player.x = 202.5;\r\n    this.player.y = 383;\r\n  }\r\n  renderEntities() {\r\n    this.enemies.forEach(enemy => {\r\n      enemy.render();\r\n    });\r\n    this.player.render();\r\n  }\r\n  reset() {\r\n    let existingCanvas = Array.from(document.getElementsByTagName('canvas'));\r\n    existingCanvas.forEach(el => el.parentNode.removeChild(el));\r\n  }\r\n  setGems(gems) {\r\n    this.gems = gems;\r\n  }\r\n  renderGems() {\r\n    this.gems.forEach(gem => {\r\n      this.ctx.drawImage(window.resources.get(gem.image), gem.x, gem.y);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/classes/engine.js?");

/***/ }),

/***/ "./src/classes/game.js":
/*!*****************************!*\
  !*** ./src/classes/game.js ***!
  \*****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/classes/player.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./src/classes/enemy.js\");\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ \"./src/classes/engine.js\");\n\r\n\r\n\r\nclass Game {\r\n  constructor(level, character) {\r\n    this.enemies = [];\r\n    this.level = level;\r\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"Player\"](202.5, 383, character);\r\n    for (let i = 0; i < this.level.enemies; i++) {\r\n      this.enemies[i] = new _enemy__WEBPACK_IMPORTED_MODULE_1__[\"Enemy\"](this.level.speed);\r\n    }\r\n    this.engine = new _engine__WEBPACK_IMPORTED_MODULE_2__[\"Engine\"](this.player, this.enemies, this);\r\n    this.startGame();\r\n    this.collectedGems = 0;\r\n    this.wins = 0;\r\n    this.fails = 0;\r\n    this.displayElements = {\r\n      gemNumber: document.getElementById('number-of-gems'),\r\n      winNumber: document.getElementById('number-of-wins'),\r\n      failNumber: document.getElementById('number-of-fails')\r\n    };\r\n    this.updateStats();\r\n    this.showWinTile = false;\r\n  }\r\n  startGame() {\r\n    this.renderGems();\r\n    this.engine.init();\r\n  }\r\n  renderGems() {\r\n    const gemImages = [\r\n      'images/Gem Blue.png',\r\n      'images/Gem Green.png',\r\n      'images/Gem Orange.png'\r\n    ];\r\n    const gems = [...new Array(2)].map(gem => {\r\n      gem = {};\r\n      gem.y = Math.floor(Math.random() * 2 + 1) * 120;\r\n      gem.x = Math.floor(Math.random() * 5) * 101;\r\n      gem.image = gemImages[Math.floor(Math.random() * gemImages.length)];\r\n      return gem;\r\n    });\r\n    this.engine.setGems(gems);\r\n    console.log(gems);\r\n  }\r\n  handleWin() {\r\n    this.enemies.forEach(enemy => {\r\n      enemy.speed += 2;\r\n    });\r\n    this.wins++;\r\n    this.updateStats();\r\n    this.renderGems();\r\n    this.showWinPopup();\r\n    this.showWinTile = true;\r\n    this.player.numberOfMoves = 0;\r\n    this.fails = 0;\r\n  }\r\n  handleFail() {\r\n    this.showWinTile = false;\r\n    this.fails++;\r\n    this.updateStats();\r\n  }\r\n  updateStats() {\r\n    this.displayElements.gemNumber.innerHTML = this.collectedGems;\r\n    this.displayElements.winNumber.innerHTML = this.wins;\r\n    this.displayElements.failNumber.innerHTML = this.fails;\r\n  }\r\n  showWinPopup() {\r\n    const numMovesEl = document.getElementById('number-of-moves');\r\n    const failTotEl = document.getElementById('fail-total');\r\n    const winEl = document.getElementById('win-popup');\r\n    numMovesEl.innerHTML = this.player.numberOfMoves;\r\n    failTotEl.innerHTML = this.fails;\r\n    winEl.style.display = 'block';\r\n    setTimeout(() => {\r\n      winEl.style.display = 'none';\r\n    }, 3000);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/classes/game.js?");

/***/ }),

/***/ "./src/classes/player.js":
/*!*******************************!*\
  !*** ./src/classes/player.js ***!
  \*******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\nclass Player {\r\n  constructor(x, y, sprite) {\r\n    this.sprite = sprite;\r\n    this.x = x;\r\n    this.y = y;\r\n    this.speed = 50.5;\r\n    this.numberOfMoves = 0;\r\n    console.log(this);\r\n  }\r\n  handleInput(input) {\r\n    this.numberOfMoves++;\r\n    if (input == 'left') {\r\n      if (this.x - this.speed > 0) {\r\n        this.x -= this.speed;\r\n      }\r\n    }\r\n    if (input == 'up') {\r\n      if (this.y - this.speed > 0) {\r\n        this.y -= this.speed - 20;\r\n      }\r\n    }\r\n    if (input == 'right') {\r\n      if (this.x < window.ctx.canvas.width - 101) {\r\n        this.x += this.speed;\r\n      }\r\n    }\r\n    if (input == 'down') {\r\n      if (this.y < 383) {\r\n        this.y += this.speed - 20;\r\n      }\r\n    }\r\n  }\r\n  update(dt) {}\r\n  render() {\r\n    window.ctx.drawImage(window.resources.get(this.sprite), this.x, this.y);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/classes/player.js?");

/***/ }),

/***/ "./src/classes/resources.js":
/*!**********************************!*\
  !*** ./src/classes/resources.js ***!
  \**********************************/
/*! exports provided: Resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Resources\", function() { return Resources; });\nclass Resources {\r\n  constructor() {\r\n    this.resourceCache = {};\r\n    this.callbacks = [];\r\n    console.log(this);\r\n  }\r\n  load(urlOrArr) {\r\n    if (urlOrArr instanceof Array) {\r\n      /**\r\n       * I.e. the user has passed in an array of images.\r\n       */\r\n      urlOrArr.forEach(url => {\r\n        this._load(url);\r\n      });\r\n    } else {\r\n      _load(urlOrArr);\r\n    }\r\n  }\r\n  _load(url) {\r\n    if (this.resourceCache[url]) {\r\n      return this.resourceCache[url];\r\n    } else {\r\n      let img = new Image();\r\n      img.onload = () => {\r\n        this.resourceCache[url] = img;\r\n        if (this.isReady()) {\r\n          this.callbacks.forEach(fn => {\r\n            fn();\r\n          });\r\n        }\r\n      };\r\n      this.resourceCache[url] = false;\r\n      img.src = url;\r\n    }\r\n  }\r\n  get(url) {\r\n    return this.resourceCache[url];\r\n  }\r\n  isReady() {\r\n    let ready = true;\r\n    for (var k in this.resourceCache) {\r\n      if (this.resourceCache.hasOwnProperty(k) && !this.resourceCache[k]) {\r\n        ready = false;\r\n      }\r\n    }\r\n    return ready;\r\n  }\r\n  onReady(func) {\r\n    this.callbacks.push(func);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/classes/resources.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./style.css */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/game */ \"./src/classes/game.js\");\n/* harmony import */ var _classes_resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/resources */ \"./src/classes/resources.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n // Importing CSS into JS so WebPack can deal with it.\r\nclass Main {\r\n  constructor() {\r\n    this.resourcesLoaded = false;\r\n    this.config = {\r\n      levels: {\r\n        easy: {\r\n          speed: 1,\r\n          enemies: 3\r\n        },\r\n        medium: {\r\n          speed: 2,\r\n          enemies: 5\r\n        },\r\n        hard: {\r\n          speed: 3,\r\n          enemies: 7\r\n        }\r\n      }\r\n    };\r\n  }\r\n  toggleModal(modalSelector) {\r\n    document.querySelector('#modal-backdrop').classList.toggle('active');\r\n    document.querySelector(modalSelector).classList.toggle('active');\r\n    return this; // Returning {this} enables function chaining.\r\n  }\r\n  startNewGame(level, character) {\r\n    this.loadResources()\r\n      .then(() => {\r\n        this.game = new _classes_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](this.config.levels[level], character);\r\n        console.log(this.game);\r\n        this.gameRunning = true;\r\n        this.showStats();\r\n      })\r\n      .catch(e => {\r\n        console.log(e);\r\n      });\r\n  }\r\n  newGame() {\r\n    this.toggleModal('#new-game-modal');\r\n  }\r\n  handleInput(input) {\r\n    this.game.player.handleInput(input);\r\n  }\r\n  showStats() {\r\n    document.getElementById('game-stats').style.display = 'block';\r\n  }\r\n  loadResources() {\r\n    return new Promise((resolve, reject) => {\r\n      try {\r\n        console.log(this.resourcesLoaded);\r\n        if (this.resourcesLoaded === true) {\r\n          resolve(true);\r\n        }\r\n        window.resources.load([\r\n          'images/stone-block.png',\r\n          'images/water-block.png',\r\n          'images/grass-block.png',\r\n          'images/enemy-bug.png',\r\n          'images/char-boy.png',\r\n          'images/char-horn-girl.png',\r\n          'images/char-cat-girl.png',\r\n          'images/char-pink-girl.png',\r\n          'images/char-princess-girl.png',\r\n          'images/Gem Blue.png',\r\n          'images/Gem Green.png',\r\n          'images/Gem Orange.png',\r\n          'images/Selector.png'\r\n        ]);\r\n        window.resources.onReady(() => {\r\n          this.resourcesLoaded = true;\r\n          resolve(true);\r\n        });\r\n      } catch ($e) {\r\n        reject($e);\r\n      }\r\n    });\r\n  }\r\n}\r\nconst main = new Main();\r\nwindow.resources = new _classes_resources__WEBPACK_IMPORTED_MODULE_1__[\"Resources\"]();\r\n\r\nconst startBtn = document.querySelector('#start-game-btn');\r\nstartBtn.addEventListener('click', () => {\r\n  console.log('CLICKED');\r\n  main.toggleModal('#new-game-modal');\r\n  main.startNewGame(\r\n    document.querySelector('input[name=\"start-diff\"]:checked').value,\r\n    document.querySelector('input[name=\"start-char\"]:checked').value\r\n  );\r\n});\r\nconst newGameBtn = document.getElementById('new-game');\r\nnewGameBtn.addEventListener('click', () => {\r\n  main.gameRunning = false;\r\n  main.newGame();\r\n});\r\ndocument.addEventListener('keyup', e => {\r\n  let allowedKeys = {\r\n    37: 'left',\r\n    38: 'up',\r\n    39: 'right',\r\n    40: 'down'\r\n  };\r\n  if (main.gameRunning) {\r\n    main.handleInput(allowedKeys[e.keyCode]);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });