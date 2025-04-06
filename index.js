const numberOfPools = document.getElementById('NumberOfPools')
const buttonCountUp = document.getElementById('counterUp')
const buttonCountDown = document.getElementById('counterDown')

const COUNTER_INITIAL_VALUE = 0
let counter = COUNTER_INITIAL_VALUE

buttonCountUp.addEventListener('click', () => {
	counter += 1

	numberOfPools.innerText = counter
})

buttonCountDown.addEventListener('click', () => {
	counter = COUNTER_INITIAL_VALUE
	numberOfPools.innerText = COUNTER_INITIAL_VALUE
})

//Другое решение
let INITIAL_VALUE_POOL = 0

class PoolCounter {
	constructor() {}

	displayNumber() {}

	counterUp() {}

	reset() {}
}

const buttonCounterUp = document.getElementById('#counterUp')
const buttonReset = document.getElementById('#counterDown')
const NumberOfPools = document.getElementById('#NumberOfPools')

buttonCounterUp.addEventListener('click', () => PoolCounter.counterUp)
buttonReset.addEventListener('click', () => PoolCounter.reset)
