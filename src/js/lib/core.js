
const $ = function (selector) {
    return new $.prototype.init(selector); //вызывается функция init
};

$.prototype.init = function (selector) {
    if(!selector) {
        return this; //возвращает пустой объект
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