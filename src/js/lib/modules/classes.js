import $ from '../core.js';

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
$.prototype.addClasses = function(...classNames) {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].classList) {
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
$.prototype.removeClasses = function(...classNames) {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].classList) {
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
$.prototype.toggleClasses = function(...classNames) {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].classList) {
            continue;
        }
        classNames.forEach(className => {
            this[i].classList.toggle(className);
        });
    }

    return this;
};