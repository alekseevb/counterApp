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

// второе решение
let INITIAL_VALUE_POOL = 0

class PoolCounter {
	constructor(displayElement) {
		this.displayElement = displayElement
		this.counter = INITIAL_VALUE_POOL
		this.showNumber()
	}

	showNumber() {
		this.displayElement.innerText = this.counter
	}

	calculateNumberUp() {
		this.counter += 1
		this.showNumber()
	}

	resetNumber() {
		this.counter = INITIAL_VALUE_POOL
		this.showNumber()
	}
}

const buttonCounterUp = document.getElementById('counterUp')
const buttonReset = document.getElementById('counterDown')
const numberOfPools = document.getElementById('NumberOfPools')

const poolCounter = new PoolCounter(numberOfPools)

buttonCounterUp.addEventListener('click', () => poolCounter.calculateNumberUp())
buttonReset.addEventListener('click', () => poolCounter.resetNumber())
