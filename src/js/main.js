import './lib/lib.js';
import $ from './lib/lib.js';

/* let oneWord = _('div').get().textContent;
let message = $('div').hide(); */
function sayHi() {
    alert('Hello');
}

$('div').on('click', sayHi);
$('div').off('click', sayHi);
$('div').click(sayHi);





//console.log(oneWord);
//console.log(message);