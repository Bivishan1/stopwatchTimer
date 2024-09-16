// let button = document.getElementByid('');

const options = [
{id : "option1", text:"JS",  votes : 0},
{id: "option2", text:"Python", votes: 0},
{id: "option3", text:"Java", votes: 0},
{id: "option4", text:"C++", votes:0}
]

function submitVote() {
 const selectedOption = document.querySelector('input[name="poll"]:checked');	

	if (!selectedOption) {
		 alert("please selected an option");
		return;
	}

	// console.log(selectedOption.value);

	const optionId = selectedOption.value;
	const selectoptionsObj = options.find((option)=>option.id===optionId); //return single element if match,,
	// console.log(selectoptionsObj);
	if (selectoptionsObj) {
		selectoptionsObj.votes++;
		// console.log(selectoptionsObj);
		displayResult();
	}


}

function displayResult() {
	const result = document.getElementById('result');
	result.innerHTML ="";

	options.forEach((option) => {
		const percentage = ((option.votes / getTotalVotes())*100).toFixed(2) || 0;
		const barWidth = percentage > 0 ? percentage + "%" : "0%";

		const optionResult = document.createElement("div");
		optionResult.className = "option-result";
		optionResult.innerHTML = `
		<span class="option-text">${option.text}</span>
		<div class="bar-container">
			<div class="bar" style="width:${barWidth};"></div>
		</div>
		<span class='percentage'>${percentage}% </span>
		`;
		result.appendChild(optionResult);
	})
}

function getTotalVotes() {
	return options.reduce((total,option)=>total + option.votes,0)
}

displayResult();