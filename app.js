const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

const lapList = document.getElementById('laplist');

// stopwatch variables

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
pauseButton.addEventListener('click',pauseTimer);
resetButton.addEventListener('click',resetTimer);

// functions
function startTimer() {
	//code

	interval = setInterval(updateTimer,10);
	startButton.disabled= true;
	pauseButton.disabled= false;
	resetButton.disabled=false;
}

function stopTimer() {
	//code
	clearInterval(interval);
	addLapList();
	resetTimerData();
		startButton.disabled=false;
}

function pauseTimer() {
	//clearInterval clear at current interval.
	clearInterval(interval);
	pauseButton.disabled = true;
	startButton.disabled=false;
}

function resetTimer() {
		clearInterval(interval);
		resetTimerData();
		resetButton.disabled= true;
		startButton.disabled= false;

	}

function resetTimerData() {
	//resetting time variables to zero again i.e. updating.
		minutes= 0;
		seconds= 0;
		milliseconds=0;
		displayTimer();
}

//updating timer of milliseconds, seconds and minutes,
function updateTimer() {
	milliseconds++;
	if(milliseconds===100) {
		milliseconds=0;
		seconds++;
		if (seconds ===60) {
			seconds = 0;
			minutes++;
		}
	}
	displayTimer();
}

//displaying in labels
function displayTimer() {
	minutesLabel.textContent = padTime(minutes);
	secondsLabel.textContent = padTime(seconds);
	millisecondsLabel.textContent = padTime(milliseconds);
}

// formatting the time in a two digit value.

function padTime(time) {
	//since, we want to display in two digit, and in a string format, given a string value as 0.
	return time.toString().padStart(2,'0');
}

function addLapList() {
const lapTime = `${padTime(minutes)}: ${padTime(seconds)}: ${padTime(milliseconds)}`;

	const listItem = document.createElement('li');

		listItem.innerHTML = `<span> Lap: ${lapList.childElementCount+1}: </span> ${lapTime}`;

		lapList.appendChild(listItem);
	}