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
    if(!selector) {
        return this; //возвращает пустой объект
    }

    if(selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    //Код, приведенный ниже, копирует все свойства объекта, полученного через селектор, данному возвращаемому объекту
    Object.assign(this, document.querySelectorAll(selector)); //добавление в существующий объект новых свойств
    this.length = document.querySelectorAll(selector).length;
    return this;
};

//В прототип возвращаемого объекта записываем прототип самой функции
$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;