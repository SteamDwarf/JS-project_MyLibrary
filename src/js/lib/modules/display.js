import $ from '../core.js';

 /**
  * @description Устанавливает DOM-элементу display: ''
  * @memberof $.prototype
  * @function
  * @name show
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
  * @description Устанавливает DOM-элементу display: 'none'
  * @memberof $.prototype
  * @function
  * @name hide
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
  * @description Переключает у DOM-элемента стиль display c '' на none и наоборот.
  * @memberof $.prototype
  * @function
  * @name toggle
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