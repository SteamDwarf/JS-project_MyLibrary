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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @param {string} selector 
 * @returns {Object}
 */
const $ = function (selector) {
  return new $.prototype.init(selector); //вызывается функция init
};
/**
 * Если в качестве параметра ничего не передается, то возвращается пустой объект.
 * Если в качестве параметра передается объект, то возвращает обьъект DOM-элемента, со свойством @type {number} length.
 * Если в качестве параметра получает строку-селектор, то возвращает объект DOM-элементов, со свойством @type {number} length.
 * @param {undefined | string | Object} selector 
 * @returns {Object} 
 */


$.prototype.init = function (selector) {
  if (!selector) {
    return this; //возвращает пустой объект
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  } //Код, приведенный ниже, копирует все свойства объекта, полученного через селектор, данному возвращаемому объекту


  Object.assign(this, document.querySelectorAll(selector)); //добавление в существующий объект новых свойств

  this.length = document.querySelectorAll(selector).length;
  return this;
}; //В прототип возвращаемого объекта записываем прототип самой функции


$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes.js */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/eventListeners.js */ "./src/js/lib/modules/eventListeners.js");
 //Импортируем ядро библиотеки

 //Импортируем модули билиотеки (функционал)



/* harmony default export */ __webpack_exports__["default"] = (_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");

/**
 * Работа с классами
 * @module classes
 */

/**
 * Добавляет DOM-элементам классы
 * @property {function} addClasses
 * @param  {...string} classNames 
 * @returns {Object}
 */

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClasses = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...classNames);
  }

  return this;
};
/**
 * Удаляет DOM-элементов классы
 * @property {function} removeClasses
 * @param  {...string} classNames 
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClasses = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...classNames);
  }

  return this;
};
/**
 * Переключает у DOM-элементов классы
 * @property {function} toggleClasses
 * @param  {...string} classNames 
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClasses = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    classNames.forEach(className => {
      this[i].classList.toggle(className);
    });
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");

/**
 * Модуль, работающий с отображением DOM-элементов.
 *@module display 
 */

/**
 * Устанавливает DOM-элементу display: ''
 * @returns {Object}
 */

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};
/**
 * Устанавливает DOM-элементу display: 'none'
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};
/**
 * Переключает у DOM-элемента стиль display c '' на none и наоборот
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/eventListeners.js":
/*!**********************************************!*\
  !*** ./src/js/lib/modules/eventListeners.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");

/**
 * Работа с обработчиками события
 * @module eventListeners
 */

/**
 * @property {function} on - Добавляет элементу обработчик событий
 * @param {string} action - событие
 * @param {function} callback - функция вызываемая при событии
 * @returns {Object}
 */

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (action, callback) {
  for (let i = 0; i < this.length; i++) {
    if (!action || !callback) {
      continue;
    }

    this[i].addEventListener(action, callback);
  }

  return this;
};
/**
 * Удаление с элемента обработчика события
 * @param {string} action - событие
 * @param {function} callback - функция вызываемая при событии
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (action, callback) {
  for (let i = 0; i < this.length; i++) {
    if (!action || !callback) {
      continue;
    }

    this[i].removeEventListener(action, callback);
  }

  return this;
};
/**
 * Добавляет элементу обработчик события, реагирущий на нажатие мышкой
 * @param {function} callback - функция вызываемая при событии
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback) {
      this[i].addEventListener('click', callback);
    }
    /* else {
        this.click(); 
    } */

  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib.js */ "./src/js/lib/lib.js");


/* let oneWord = _('div').get().textContent;
let message = $('div').hide(); */

function sayHi() {
  alert('Hello');
}

Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div').on(sayHi, sayHi);
/* $('div').on('click', sayHi);
$('div').off('click', sayHi);
$('div').click(sayHi); */
//console.log(oneWord);
//console.log(message);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map