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
 * @class $
 * @param {string} selector 
 * @returns {Object}
 */
const $ = function (selector) {
  return new $.prototype.init(selector); //вызывается функция init
};
/**
 * Если в качестве параметра ничего не передается, то возвращается пустой объект.
 * Если в качестве параметра передается объект, то возвращает обьъект DOM-элемента, со свойством length.
 * Если в качестве параметра получает строку-селектор, то возвращает объект DOM-элементов, со свойством length.
 * @memberof $.prototype
 * @function
 * @name init
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
/* harmony import */ var _modules_actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/actions.js */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/effects.js */ "./src/js/lib/modules/effects.js");
 //Импортируем ядро библиотеки

 //Импортируем модули билиотеки (функционал)





/* harmony default export */ __webpack_exports__["default"] = (_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");

/**
 * @description Получение или изменение текста внутри HTML элемента
 * @memberof $.prototype
 * @function
 * @name htmlText
 * @param {string | undefined} content 
 * @returns {Object | string}
 */

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.htmlText = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};
/**
 * @description Возвращает элемент, под определенным индексом, начиная с нуля
 * @memberof $.prototype
 * @function
 * @name eq
 * @param {number} i 
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const element = this[i];
  const objLength = Object.keys(this).length;

  for (let j = 0; j < objLength; j++) {
    delete this[j];
  }

  this[0] = element;
  this.length = 1;
  return this;
};
/**
 * @description Возвращает индекс под которым данный элемент находится в родительском элементе.
 * Данный метод используется в связке с методом, возвращающим объект, содержащий один DOM-элемент.
 * @memberof $.prototype
 * @function
 * @name indexElem
 * @returns {number}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.indexElem = function () {
  const parent = this[0].parentNode;
  const children = [...parent.children]; //Разворачиваем HTML-коллекцию с помощью spread оператора в обычный массив;

  const findMyIndex = item => {
    return item == this[0];
  };

  return children.findIndex(findMyIndex);
};
/**
 * @description Среди полученых объектов, ищет внутри них объекты по определенному селектору.
 * @memberof $.prototype
 * @function
 * @name findElems
 * @param {string} selector 
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.findElems = function (selector) {
  let arrayElem = [];
  let numOfElements = this.length;
  let copyThis = Object.assign({}, this);

  for (let i = 0; i < numOfElements; i++) {
    let elem = copyThis[i].querySelectorAll(selector);

    if (elem.length > 0) {
      arrayElem.push(...elem);
    }

    delete this[i];
  }

  for (let i = 0; i < arrayElem.length; i++) {
    this[i] = arrayElem[i];
  }

  this.length = arrayElem.length;
  return this;
};
/**
 * @description Вызвается на объекте DOM-элементов, ищет ближайшие к каждому из них элементы по определеннорму селектору, и возвращает объект с этими элементами.
 * Под ближайшими подразумевается сам объект или его родитель
 * @memberof $.prototype
 * @function
 * @name closest
 * @param {string} selector 
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let arrayElem = [];
  let copyThis = Object.assign({}, this);

  for (let i = 0; i < this.length; i++) {
    let elem = copyThis[i].closest(selector);

    if (elem) {
      arrayElem.push(elem);
    }

    delete this[i];
  }

  for (let i = 0; i < arrayElem.length; i++) {
    this[i] = arrayElem[i];
  }

  this.length = arrayElem.length;
  return this;
};
/**
 * @description Возвращает объект DOM-элементов, которые являются соседями элемента на котором был вызван данный метод.
 * Данный метод используется в связке с методом, возвращающим объект, содержащий один DOM-элемент.
 * @memberof $.prototype
 * @function
 * @name getNeighbours
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getNeighbours = function () {
  const thisElem = this[0];
  const children = this[0].parentNode.children;
  let arrayElem = [];

  for (let i = 0; i < children.length; i++) {
    if (children[i] === thisElem) {
      continue;
    }

    arrayElem.push(children[i]);
    delete this[i];
  }

  for (let i = 0; i < arrayElem.length; i++) {
    this[i] = arrayElem[i];
  }

  this.length = arrayElem.length;
  return this;
};

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
 * @description Добавляет DOM-элементам классы
 * @memberof $.prototype
 * @function
 * @name addClasses
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
 * @description Удаляет DOM-элементов классы
 * @memberof $.prototype
 * @function
 * @name removeClasses
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
 * @description Переключает у DOM-элементов классы
 * @memberof $.prototype
 * @function
 * @name toggleClasses
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
 * @description Устанавливает DOM-элементу display: ''
 * @memberof $.prototype
 * @function
 * @name show
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
 * @description Устанавливает DOM-элементу display: 'none'
 * @memberof $.prototype
 * @function
 * @name hide
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
 * @description Переключает у DOM-элемента стиль display c '' на none и наоборот.
 * @memberof $.prototype
 * @function
 * @name toggle
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

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");

/**
 * @description Ядро управления анимациями, использующими requestAnimationFrame
 * @param {number} duration - длительность анимации.
 * @param {function | undefined} callback - сама анимация.
 * @param {function | undefined} finallFunction - финальная функция, которая будет выполняться по завершению анимации.
 * @returns {function} _animateOverTime - служебная функция, которую в дальнейшем передаем в requestAnimationFrame. 
 */

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, finallFunction) {
  let timeStart; //Служебная функция управления анимацией

  function _animateOverTime(time) {
    let timeElapsed;
    let complection;

    if (!timeStart) {
      timeStart = time;
    }

    timeElapsed = time - timeStart; //Сколько времени длится анимация.

    complection = Math.min(timeElapsed / duration, 1); //Насколько завершена данная анимация.

    callback(complection);

    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof finallFunction === 'function') {
        finallFunction();
      }
    }
  }

  return _animateOverTime;
};
/**
 * @description Функция, вызывающая анимацию fadeIn - плавное появление элемента.
 * @param {number} duration - длительность анимации 
 * @param {string | undefined} display - свойство display для элемента. По умолчанию block.
 * @param {function | undefined} finallyFunction - финальная функция, которая будет выполняться по завершению анимации.
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration, display = 'block', finallyFunction) {
  for (let i = 0; i < this.length; i++) {
    let _fadeIn;

    let anim;
    this[i].style.display = display;

    _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    anim = this.animateOverTime(duration, _fadeIn, finallyFunction);
    requestAnimationFrame(anim);
  }

  return this;
};
/**
 * @description Функция, вызывающая анимацию fadeOut - плавное скрытие элементов страницы.
 * @param {number} duration - длительность 
 * @param {function | undefined} finallyFunction - финальная функция, которая будет выполняться по завершению анимации.
 * @returns {Object}
 */


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, finallyFunction) {
  for (let i = 0; i < this.length; i++) {
    let _fadeOut;

    let anim;

    _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection >= 1) {
        this[i].style.display = 'none';
      }
    };

    anim = this.animateOverTime(duration, _fadeOut, finallyFunction);
    requestAnimationFrame(anim);
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
 * @description Добавляет элементу обработчик событий
 * @memberof $.prototype
 * @function
 * @name on
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
 * @description Удаление с элемента обработчика события
 * @memberof $.prototype
 * @function
 * @name off
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
 * @description Добавляет элементу обработчик события, реагирущий на нажатие мышкой.
 * @memberof $.prototype
 * @function
 * @name click
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

let divShowed = true;

function sayHi() {
  console.log('Hello');
}

function fadeOutAllDivs() {
  Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div').fadeOut(1000, function () {
    console.log('Все элементы div скрыты');
  });
}

function fadeInAllDivs() {
  Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div').fadeIn(1000, 'flex', function () {
    console.log('Все элементы показаны');
  });
}
/* $('div').on('click', sayHi);
$('div').off('click', sayHi);*/


Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button').click(function () {
  if (divShowed) {
    fadeOutAllDivs();
    divShowed = false;
  } else {
    fadeInAllDivs();
    divShowed = true;
  }
}); //console.log($('div').findElems('.test'));
//console.log(oneWord);
//console.log(message);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map