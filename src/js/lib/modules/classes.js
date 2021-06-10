import $ from '../core.js';

$.prototype.addClasses = function(...classNames) {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].classList) {
            continue;
        }

        this[i].classList.add(...classNames);
    }

    return this;
};

$.prototype.removeClasses = function(...classNames) {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...classNames);
    }

    return this;
};

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