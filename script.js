let currentPlayer, isPlaying, diceVal;

let nuGameBtn = document.getElementById("nu-game-btn");

let p1Bar = document.getElementById("player1-inbar");
let p2Bar = document.getElementById("player2-inbar");

let dice = document.querySelector("#dice");

let p1TotalDiv = document.getElementById("player1-total-val");
let p2TotalDiv = document.getElementById("player2-total-val");

let p1TotalPts = 100;
let p2TotalPts = 100;

p1TotalDiv.textContent = p1TotalPts;
p2TotalDiv.textContent = p2TotalPts;

let p1CurrDiv = document.getElementById("player1-curr-pts-val");
let p2CurrDiv = document.getElementById("player2-curr-pts-val");

let currentPts = 0;

let p1Roll = document.getElementById("player1-roll-btn");
let p2Roll = document.getElementById("player2-roll-btn");

let p1Hit = document.getElementById("player1-hit-btn");
let p2Hit = document.getElementById("player2-hit-btn");


function animeDice(){
	dice.classList.add("shake");

	setTimeout(function(){
		dice.classList.remove("shake"); 
	},200)
}


//EVENT LISTENERS

nuGameBtn.addEventListener("click", startNuGame);


p1Roll.addEventListener("click", rollDice);
p1Hit.addEventListener("click", nextPlayer);

p2Roll.addEventListener("click", rollDice);
p2Hit.addEventListener("click", nextPlayer);

// p1Roll.addEventListener("click", diceAnim);
// p2Roll.addEventListener("click", diceAnim);
	
p1Roll.addEventListener("click",function(){
	animeDice();
});

p2Roll.addEventListener("click",function(){
	animeDice();
});

// $('button').click(function() {
//     $(".fademe").addClass('animated');
//     setTimeout(function() {
//       $(".fademe").removeClass('animated');
//     }, 1500);
// });




function resetCurr(){
	currentPts = 0;

	// p1TotalPts = 100;
	// p2TotalPts = 100;

	eval("p"+ (currentPlayer + 1) + "CurrDiv").textContent = 0;

	if(currentPlayer === 1 ){
			document.querySelector(".player2-btn-panel").style.pointerEvents = "auto";
			document.querySelector(".player1-btn-panel").style.pointerEvents = "none";

			document.querySelector(".player1-pts").style.opacity = ".65";
			document.querySelector(".player2-pts").style.opacity = "1";
			 
		}else{
			document.querySelector(".player2-btn-panel").style.pointerEvents = "none";
			document.querySelector(".player1-btn-panel").style.pointerEvents = "auto";

			document.querySelector(".player2-pts").style.opacity = ".65";
			document.querySelector(".player1-pts").style.opacity = "1";

			
		}

}

function resetDice(){

	Array.prototype.slice.call(document.getElementsByClassName("dot") ).forEach(function(el){
			
			document.getElementById(el.id).style.display ="none";
			document.getElementById(el.id).style.backgroundColor = "white";
			
		});

}


startNuGame();

//FUNCTIONS

function startNuGame(){

	p1TotalPts = 100;
	p2TotalPts = 100;

	isPlaying = true;

	currentPlayer = 0;

	p1Bar.style.width = p1TotalPts + "%";
	p1Bar.style.transition = "width .7s";

	p2Bar.style.width = p2TotalPts + "%";
	p2Bar.style.transition = "width .7s";

	p1TotalDiv.textContent = p1TotalPts;
	p2TotalDiv.textContent = p2TotalPts;

	p1Bar.style.width = p1TotalPts;
	p2Bar.style.width = p2TotalPts;

	resetDice();

	// dice.style.display = "none";

	console.log("new game started");

	resetCurr(); 

	document.querySelector(".player2-btn-panel").style.pointerEvents = "none";


}


// function diceAnim(){
// 	dice.style.animation = "shake 0.3s 1";
// }



function nextPlayer(){

	if(isPlaying){

		
		currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;


		


		console.log("now player is " + (currentPlayer + 1));

		
		if(currentPlayer == 0){

			

			console.log("foram retirados " + currentPts + " ao player 1");
			p1TotalPts -= currentPts;

			console.log("agora a pontuacao do player " + (currentPlayer + 1) + " e " + p1TotalPts);

			if(p1TotalPts <= 0){
				alert("Player 2 won!");
				isPlaying = false;
			}

		}else{

			

			console.log("foram retirados " + currentPts + " ao player 2");
			p2TotalPts -= currentPts;
			console.log("agora a pontuacao do player " + (currentPlayer + 1) + " e " + p2TotalPts);

			if(p2TotalPts <= 0){
				alert("Player 1 won!");
				isPlaying = false;
			}
			

		}

		resetCurr();

		currentPts = 0;

		p1TotalDiv.textContent = p1TotalPts;
		p2TotalDiv.textContent = p2TotalPts;

		p1Bar.style.width = p1TotalPts + "%";
		p1Bar.style.transition = "width .7s";


		p2Bar.style.width = p2TotalPts + "%";
		p2Bar.style.transition = "width .7s";
		
		

	}else{
		alert("You have to start a game first !");
	}
	
}



function rollDice(){

	if(isPlaying){

		diceVal = Math.floor(Math.random() *6) + 1;

		

		resetDice();

		

		switch(diceVal){
			case 1:
				document.getElementById("dot1").style.display = "block";
				document.getElementById("dot1").style.backgroundColor = "red";
			break;

			case 2:
				document.getElementById("dot2").style.display = "block";
				document.getElementById("dot7").style.display = "block";
			break;

			case 3:
				document.getElementById("dot1").style.display = "block";
				document.getElementById("dot2").style.display = "block";
				document.getElementById("dot7").style.display = "block";
			break;

			case 4:
				document.getElementById("dot2").style.display = "block";
				document.getElementById("dot4").style.display = "block";
				document.getElementById("dot5").style.display = "block";
				document.getElementById("dot7").style.display = "block";
			break;

			case 5:
				document.getElementById("dot1").style.display = "block";
				document.getElementById("dot2").style.display = "block";
				document.getElementById("dot4").style.display = "block";
				document.getElementById("dot5").style.display = "block";
				document.getElementById("dot7").style.display = "block";
			break;

			case 6:
				
				document.getElementById("dot2").style.display = "block";
				document.getElementById("dot3").style.display = "block";
				document.getElementById("dot4").style.display = "block";
				document.getElementById("dot5").style.display = "block";
				document.getElementById("dot6").style.display = "block";
				document.getElementById("dot7").style.display = "block";
			break;
		}



		if(diceVal !== 1){

			currentPts += diceVal;

			eval("p"+ (currentPlayer + 1) + "CurrDiv").textContent = currentPts;

		}else{
			console.log("sorry you lost this turn");

			currentPts = 0;

			nextPlayer();
		}

		
		
}
	
	


}