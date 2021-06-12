import './lib/lib.js';
import $ from './lib/lib.js';

/* let oneWord = _('div').get().textContent;
let message = $('div').hide(); */
let divShowed = true;

function sayHi() {
    console.log('Hello');
}

function fadeOutAllDivs() {
    $('div').fadeOut(1000, function() {
        console.log('Все элементы div скрыты');
    });
}

function fadeInAllDivs() {
    $('div').fadeIn(1000, 'flex', function() {
        console.log('Все элементы показаны');
    });
}

/* $('div').on('click', sayHi);
$('div').off('click', sayHi);*/
$('button').click(function() {

    if(divShowed) {
        fadeOutAllDivs();
        divShowed = false;
    } else {
        fadeInAllDivs();
        divShowed = true;
    }
});

//console.log($('div').findElems('.test'));


//console.log(oneWord);
//console.log(message);