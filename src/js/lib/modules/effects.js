import $ from '../core.js';

/**
 * @description Ядро управления анимациями, использующими requestAnimationFrame
 * @param {number} duration - длительность анимации.
 * @param {function | undefined} callback - сама анимация.
 * @param {function | undefined} finallFunction - финальная функция, которая будет выполняться по завершению анимации.
 * @returns {function} _animateOverTime - служебная функция, которую в дальнейшем передаем в requestAnimationFrame. 
 */
$.prototype.animateOverTime = function(duration, callback, finallFunction) {
    let timeStart;

    //Служебная функция управления анимацией
    function _animateOverTime(time) {
        let timeElapsed;
        let complection;

        if(!timeStart) {
            timeStart = time;
        }

        timeElapsed = time - timeStart; //Сколько времени длится анимация.
        complection = Math.min(timeElapsed / duration, 1); //Насколько завершена данная анимация.

        callback(complection);

        if(timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if(typeof finallFunction === 'function') {
                finallFunction();
            }
        }
    }

    return _animateOverTime;
};

/**
 * @description Функция, вызывающая анимацию fadeIn - плавное появление элемента.
 * @param {number} duration - длительность анимации 
 * @param {string | undefined} display - свойство display для элемента. По умолчанию block.
 * @param {function | undefined} finallyFunction - финальная функция, которая будет выполняться по завершению анимации.
 * @returns {Object}
 */
$.prototype.fadeIn = function(duration, display = 'block', finallyFunction) {
    for(let i = 0; i < this.length; i++) {
        let _fadeIn;
        let anim; 

        this[i].style.display = display;
        _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        anim = this.animateOverTime(duration, _fadeIn, finallyFunction);
        requestAnimationFrame(anim);
    }

    return this;
};

/**
 * @description Функция, вызывающая анимацию fadeOut - плавное скрытие элементов страницы.
 * @param {number} duration - длительность 
 * @param {function | undefined} finallyFunction - финальная функция, которая будет выполняться по завершению анимации.
 * @returns {Object}
 */
$.prototype.fadeOut = function(duration, finallyFunction) {
    for(let i = 0; i < this.length; i++) {
        let _fadeOut;
        let anim; 

        _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;

            if(complection >= 1) {
                this[i].style.display = 'none';
            }
        };

        anim = this.animateOverTime(duration, _fadeOut, finallyFunction);
        requestAnimationFrame(anim);
    }

    return this;
};

