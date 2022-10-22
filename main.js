import {countdownTimer} from './countdown-timer.js'

document.addEventListener('counter',function(){
	console.log('counter is finished and stop !!')
})

var counter = 2000
window.timer = new countdownTimer('minute','second',counter)

