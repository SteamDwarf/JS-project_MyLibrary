import $ from '../core.js';

/**
 * @description Добавляет DOM-элементам классы
 * @memberof $.prototype
 * @function
 * @name addClasses
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
 * @description Удаляет DOM-элементов классы
 * @memberof $.prototype
 * @function
 * @name removeClasses
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
 * @description Переключает у DOM-элементов классы
 * @memberof $.prototype
 * @function
 * @name toggleClasses
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