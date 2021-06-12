import $ from '../core.js';

/**
 * @description Получение или изменение текста внутри HTML элемента
 * @memberof $.prototype
 * @function
 * @name htmlText
 * @param {string | undefined} content 
 * @returns {Object | string}
 */
$.prototype.htmlText = function(content) {
    for(let i = 0; i < this.length; i++) {
        if(content) {
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
$.prototype.eq = function(i) {
    const element = this[i];
    const objLength = Object.keys(this).length;

    for(let j = 0; j < objLength; j++) {
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
$.prototype.indexElem = function() {
    const parent = this[0].parentNode;
    const children = [...parent.children]; //Разворачиваем HTML-коллекцию с помощью spread оператора в обычный массив;

    const findMyIndex = (item) => {
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
$.prototype.findElems = function(selector) {
    let arrayElem = [];
    let numOfElements = this.length;
    let copyThis = Object.assign({}, this);

    for(let i = 0; i < numOfElements; i++) {
        let elem = copyThis[i].querySelectorAll(selector);
        if(elem.length > 0) {
            arrayElem.push(...elem);
        }

        delete this[i];
    }

    for(let i = 0; i < arrayElem.length; i++) {
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
$.prototype.closest = function(selector) {
    let arrayElem = [];
    let copyThis = Object.assign({}, this);

    for(let i = 0; i < this.length; i++) {
        let elem = copyThis[i].closest(selector);

        if(elem) {
            arrayElem.push(elem);
        }

        delete this[i];
    }
    
    for(let i = 0;  i < arrayElem.length; i++) {
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
$.prototype.getNeighbours = function() {
    const thisElem = this[0];
    const children = this[0].parentNode.children;
    let arrayElem = [];

    for(let i = 0; i < children.length; i++) {
        if(children[i] === thisElem) {
            continue;
        }
        arrayElem.push(children[i]);
        delete this[i];
    }

    for(let i = 0; i < arrayElem.length; i++) {
        this[i] = arrayElem[i];
    } 
    
    this.length = arrayElem.length;
    return this;
};