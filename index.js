let button_1 = document.querySelector('.counter__add-button');
let button_2 = document.querySelector('.counter__minus-button')
let counterText = document.querySelector('.counter__value')


const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE

button_1.addEventListener('click', function () {
    counter = counter + 1;
    counterText.innerText = counter;

})

button_2.addEventListener('click', function () {
    counter = COUNTER_INITIAL_VALUE;
    counterText.innerText = counter;
})