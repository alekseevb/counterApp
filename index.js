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
