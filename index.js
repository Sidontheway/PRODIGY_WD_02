let startBtn = document.getElementById('btn_start'); 
let stopBtn = document.getElementById('btn_stop'); 
let resetBtn = document.getElementById('btn_reset'); 
let lapBtn = document.getElementById('btn_lap');

let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 

let position = 0;
let lap_btn_status = false;

startBtn.addEventListener('click', function () { 
	timer = true; 

	// functionality of stop and start buttons when start btn clicked
	document.getElementById('btn_stop').style.display = 'inline-block';
	document.getElementById('btn_start').style.display = 'none';

	// functionality of lap and reset button
	document.getElementById('btn_lap').style.display = 'inline-block';
	document.getElementById('btn_reset').style.display = 'none';
	
	
	stopWatch();
}); 

stopBtn.addEventListener('click', function () { 
	timer = false; 

	// functionality of stop and start button inside stop function
	document.getElementById('btn_stop').style.display = 'none';
	document.getElementById('btn_start').style.display = 'inline-block';

	// functionality of lap and reset button inside stop function
	document.getElementById('btn_lap').style.display = 'none';
	document.getElementById('btn_reset').style.display = 'inline-block';

	// for resetting the restart button
	document.getElementById('btn_reset').disabled  = false; 
	
}); 

resetBtn.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	document.getElementById('min').innerHTML = "00"; 
	document.getElementById('sec').innerHTML = "00"; 
	document.getElementById('count').innerHTML = "00"; 

	document.getElementById("lap_container").style.display = "none";
	RefreshLapContainer();
	position = 0;
}); 

lapBtn.addEventListener('click',function(){
	lap_btn_status = true;
})



function stopWatch() { 
	if (timer) { 
		count++; 

		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		let hrString = hour; 
		let minString = minute; 
		let secString = second; 
		let countString = count; 

		if (hour < 10) { 
			hrString = "0" + hrString; 
		} 

		if (minute < 10) { 
			minString = "0" + minString; 
		} 

		if (second < 10) { 
			secString = "0" + secString; 
		} 

		if (count < 10) { 
			countString = "0" + countString; 
		} 

		if(lap_btn_status){
			console.log(minString,secString,countString);
			lap_btn_status = false;
			position++;
			LapContainer(minString,secString,countString,position);
			console.log(position)
			

		}


		document.getElementById('min').innerHTML = minString; 
		document.getElementById('sec').innerHTML = secString; 
		document.getElementById('count').innerHTML = countString; 
		setTimeout(stopWatch, 7); 
	} 
}

// for resetting the disable property of reset btn
function reset(){
	document.getElementById('btn_reset').disabled  = true;
	console.log("Clicked");
}

// Function for lap container
function LapContainer(a,b,c,d){
	document.getElementById("lap_container").style.display = "block";
	const head = document.createElement("h3");
	const result = d+") " +a+ " : "+ b+" . "+c;
	const node = document.createTextNode(result);
	head.appendChild(node);
	const element = document.getElementById("inner_lap");
	element.appendChild(head);
}

// refreshing the contents of lap container

function RefreshLapContainer(){
	const element = document.querySelectorAll("h3");
	console.log(element);
	element.forEach(element => {
		element.remove();
	});
}
