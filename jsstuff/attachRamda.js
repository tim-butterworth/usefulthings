const scriptElement = document.createElement("script");

scriptElement.src = "https://cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min.js";

document.head.appendChild(scriptElement);

let triesRemaining = 20;
const intervalId = setInterval(() => {
    if (window.R !== undefined) {
	console.log("ramda loaded!")

	clearInterval(intervalId);
    }

    if (triesRemaining === 0) {
	console.log("ramda did not load in time");

	clearInterval(intervalId);
    }

    triesRemaining--;
}, 100);
