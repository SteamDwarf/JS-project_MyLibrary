import $ from '../core.js';

/**
 * @description Добавляет элементу обработчик событий
 * @memberof $.prototype
 * @function
 * @name on
 * @param {string} action - событие
 * @param {function} callback - функция вызываемая при событии
 * @returns {Object}
 */
$.prototype.on = function(action, callback) {
    for(let i = 0; i < this.length; i++) {
        if(!action || !callback) {
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
$.prototype.off = function(action, callback) {
    for(let i = 0; i < this.length; i++) {
        if(!action || !callback) {
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
$.prototype.click = function(callback) {
    for(let i = 0; i < this.length; i++) {
        if(callback) {
            this[i].addEventListener('click', callback);
        }/* else {
             this.click(); 
        } */
    }

    return this;
};