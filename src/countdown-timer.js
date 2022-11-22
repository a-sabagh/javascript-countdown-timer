class countdownTimer {

	#counter = 5 

	constructor(minuteElementId,secondElementId,counter){
		this.minuteElementId = minuteElementId
		this.secondElementId = secondElementId
		this.#counter = counter
		this.event = new Event('counter-ended')
	}

	#calculateParams() {
		this.second = this.#counter % 60
		this.minute = Math.floor(this.#counter / 60)
		return this
	}

	#setHtml(){
		this.minuteElement.innerHTML = this.minute
		this.secondElement.innerHTML = this.second
		return this
	}

	#setStatus(status){
		this.status = status
		return this
	}

	driveElements(){
		this.minuteElement = document.getElementById(this.minuteElementId)
		this.secondElement = document.getElementById(this.secondElementId)
	}

	start = () => {
		if('start' == this.status){
			return this
		}
		if(this.#counter <= 0){
			clearInterval(this.timerInterval)
			return this
		}
		this.driveElements()
		this.timerInterval = setInterval(() => {
			this.#calculateParams().#setHtml()
			this.#counter--
			if(this.#counter <= 0){
				document.dispatchEvent(this.event)
				this.stop()
			}
		},1000)
		this.#setStatus('start')
		return this
	}

	pause = () => {
		if('pause' == this.status){
			return this
		}
		clearInterval(this.timerInterval)
		this.#setStatus('pause')
		return this
	}

	stop = () => {
		if('stop' == this.status){
			return this
		}
		this.pause().#counter = 0
		this.#setStatus('stop').#calculateParams().#setHtml()
		document.dispatchEvent(this.event)
		return this
	}

	restart = (counter) => {
		this.pause().#counter = counter
		this.#setStatus('restart').start()
		return this
	}

	remind = () => {
		return this.#counter
	}

}

export {countdownTimer}
