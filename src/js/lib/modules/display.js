import $ from '../core.js';

/**
 * Модуль, работающий с отображением DOM-элементов.
 *@module display 
 */

 /**
  * Устанавливает DOM-элементу display: ''
  * @returns {Object}
  */
$.prototype.show = function () {
    for(let i = 0; i < this.length; i++) {

        if(!this[i].style) {
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
$.prototype.hide = function () {
    for(let i = 0; i < this.length; i++) {

        if(!this[i].style) {
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
$.prototype.toggle = function() {
    for(let i = 0; i < this.length; i++) {

        if(!this[i].style) {
            continue;
        }

        if(this[i].style.display === 'none') {
            this[i].style.display = '';

        }else {
            this[i].style.display = 'none';
        }
        
    }
    return this;
};