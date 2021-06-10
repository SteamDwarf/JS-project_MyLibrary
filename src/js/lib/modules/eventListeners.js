import $ from '../core.js';
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
 * Удаление с элемента обработчика события
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
 * Добавляет элементу обработчик события, реагирущий на нажатие мышкой
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