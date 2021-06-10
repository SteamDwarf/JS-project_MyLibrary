import $ from '../core.js';

$.prototype.on = function(action, callback) {
    for(let i = 0; i < this.length; i++) {
        if(!action || !callback) {
            continue;
        }
        this[i].addEventListener(action, callback);
    }

    return this;
};

$.prototype.off = function(action, callback) {
    for(let i = 0; i < this.length; i++) {
        if(!action || !callback) {
            continue;
        }
        this[i].removeEventListener(action, callback);
    }

    return this;
};

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