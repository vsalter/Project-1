let turn = 1;
let id;
let colId;
let message = document.getElementById("message");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let s1 = parseInt(score1.innerHTML);
let s2 = parseInt(score2.innerHTML);


let col = [
	[],
	[],
	[],
	[],
	[],
	[],
	[]
];
let board = [
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null]
]
let move = null;

let button = document.getElementById("restart");
button.addEventListener("click", restartGame);

document.querySelectorAll(".dot").forEach(function(dot){

	colId = parseInt(dot.id);
	

	dot.addEventListener("click", makeAmove);

	
	if (colId < 6){
		col[0].push(dot);
	} else if (colId < 12) {
		col[1].push(dot);	   
	} else if (colId < 18) {
		col[2].push(dot);
	} else if (colId < 24) {
		col[3].push(dot);
	} else if (colId < 30) {
		col[4].push(dot);
	} else if (colId < 36) {
		col[5].push(dot);
	} else if (colId < 42) {
		col[6].push(dot);
	}
});


function makeAmove(evt) {
	
	id = parseInt(evt.target.id);

	if (turn === 1){
		if (id < 6){
			move = col[0].pop().style;
		} else if (id < 12) {
			move = col[1].pop().style;
		} else if (id < 18) {
			move = col[2].pop().style;
		} else if (id < 24) {
			move = col[3].pop().style;
		} else if (id < 30) {
			move = col[4].pop().style;
		} else if (id < 36) {
			move = col[5].pop().style;
		} else if (id < 42) {
			move = col[6].pop().style;
		}
		move.backgroundColor = "#D92B04";
		updateBoard(turn, id);
		checkWinner(turn);
	}else {
		if (id < 6){
			move = col[0].pop().style;
		} else if (id < 12) {
			move = col[1].pop().style;
		} else if (id < 18) {
			move = col[2].pop().style;
		} else if (id < 24) {
			move = col[3].pop().style;
		} else if (id < 30) {
			move = col[4].pop().style;
		} else if (id < 36) {
			move = col[5].pop().style;
		} else if (id < 42) {
			move = col[6].pop().style;
		}
		move.backgroundColor = "#F2CB05";
		updateBoard(turn, id);
		checkWinner(turn);
	}

}

function checkWinner(num)  {
	
	if (num === 1) {
		if ((dCheck(num)) || (hCheck(num)) || (vCheck(num)) ) {
			s1++;
			message.innerHTML = "Player 1 is the winner";
			score1.innerHTML = `${s1}`;
			return;
		} else if (tCheck()) {
			message.innerHTML = "Looks like we have a tie!";
			return;
		} else {
			turn++;
			message.style.color = "#F2CB05";
			message.innerHTML = "Player 2's turn";
			return;
		}
	} else {
		if ((dCheck(num)) || (hCheck(num)) || (vCheck(num)) ) {
			s2++;
			message.innerHTML = "Player 2 is the winner";
			score2.innerHTML = `${s2}`;
			return;
		} else if (tCheck()) {
			message.innerHTML = "Looks like we have a tie!";
			return;
		} else {
			turn--;
			message.style.color = "#D92B04";
			message.innerHTML = "Player 1's turn";
			return;
		}
	}
}

function hCheck(num){
	if(num === 1){
		for (let a = 0; a < 6; a++){
			if(((board[a][0] === 'p1') && (board[a][1] === 'p1') && (board[a][2] === 'p1') && (board[a][3] === 'p1')) || ((board[a][1] === 'p1') && (board[a][2] === 'p1') && (board[a][3] === 'p1') && (board[a][4] === 'p1')) || ((board[a][2] === 'p1') && (board[a][3] === 'p1') && (board[a][4] === 'p1') && (board[a][5] === 'p1')) || ((board[a][3] === 'p1') && (board[a][4] === 'p1') && (board[a][5] === 'p1') && (board[a][6] === 'p1'))){
				document.querySelectorAll(".dot").forEach(function(dot){
					dot.removeEventListener("click", makeAmove);

				});
				return true;
			} 
		}
	} else {
		for (let a = 0; a < 6; a++){
			if(((board[a][0] === 'p2') && (board[a][1] === 'p2') && (board[a][2] === 'p2') && (board[a][3] === 'p2')) || ((board[a][1] === 'p2') && (board[a][2] === 'p2') && (board[a][3] === 'p2') && (board[a][4] === 'p2')) || ((board[a][2] === 'p2') && (board[a][3] === 'p2') && (board[a][4] === 'p2') && (board[a][5] === 'p2')) || ((board[a][3] === 'p2') && (board[a][4] === 'p2') && (board[a][5] === 'p2') && (board[a][6] === 'p2'))){
				document.querySelectorAll(".dot").forEach(function(dot){
					dot.removeEventListener("click", makeAmove);

				});
				return true;
			} 
		}
	}
}

function vCheck(num){
	if(num === 1){
		for (let a = 0; a < 4; a++){
			if(((board[0][a] === 'p1') && (board[1][a] === 'p1') && (board[2][a] === 'p1') && (board[3][a] === 'p1')) || ((board[1][a] === 'p1') && (board[2][a] === 'p1') && (board[3][a] === 'p1') && (board[4][a] === 'p1')) || ((board[2][a] === 'p1') && (board[3][a] === 'p1') && (board[4][a] === 'p1') && (board[5][a] === 'p1')) || ((board[3][a] === 'p1') && (board[4][a] === 'p1') && (board[5][a] === 'p1') && (board[6][a] === 'p1'))){
				document.querySelectorAll(".dot").forEach(function(dot){
					dot.removeEventListener("click", makeAmove);

				});
				return true;
			} 
		}
	} else {
		for (let a = 0; a < 6; a++){
			if(((board[0][a] === 'p2') && (board[1][a] === 'p2') && (board[2][a] === 'p2') && (board[3][a] === 'p2')) || ((board[1][a] === 'p2') && (board[2][a] === 'p2') && (board[3][a] === 'p2') && (board[4][a] === 'p2')) || ((board[2][a] === 'p2') && (board[3][a] === 'p2') && (board[4][a] === 'p2') && (board[5][a] === 'p2')) || ((board[3][a] === 'p2') && (board[4][a] === 'p2') && (board[5][a] === 'p2') && (board[6][a] === 'p2'))){
				document.querySelectorAll(".dot").forEach(function(dot){
					dot.removeEventListener("click", makeAmove);

				});
				return true;
			} 
		}
	}
}

function dCheck(num){
	if(num === 1){
		for (let a = 0; a < 4; a++){
			if(((board[0][a] === 'p1') && (board[1][a+1] === 'p1') && (board[2][a+2] === 'p1') && (board[3][a+3] === 'p1')) || ((board[1][a] === 'p1') && (board[2][a+1] === 'p1') && (board[3][a+2] === 'p1') && (board[4][a+3] === 'p1')) || ((board[2][a] === 'p1') && (board[3][a+1] === 'p1') && (board[4][a+2] === 'p1') && (board[5][a+3] === 'p1'))){
				document.querySelectorAll(".dot").forEach(function(dot){
					dot.removeEventListener("click", makeAmove);

				});
				return true;
			} 
		}
		for (let a = 6; a > 2; a--){
			if(((board[0][a] === 'p1') && (board[1][a-1] === 'p1') && (board[2][a-2] === 'p1') && (board[3][a-3] === 'p1')) || ((board[1][a] === 'p1') && (board[2][a-1] === 'p1') && (board[3][a-2] === 'p1') && (board[4][a-3] === 'p1')) || ((board[2][a] === 'p1') && (board[3][a-1] === 'p1') && (board[4][a-2] === 'p1') && (board[5][a-3] === 'p1'))){
				document.querySelectorAll(".dot").forEach(function(dot){
					dot.removeEventListener("click", makeAmove);

				});
				return true;
			} 
		}
	} else {
		for (let a = 0; a < 6; a++){
			if(((board[0][a] === 'p2') && (board[1][a+1] === 'p2') && (board[2][a+2] === 'p2') && (board[3][a+3] === 'p2')) || ((board[1][a] === 'p2') && (board[2][a+1] === 'p2') && (board[3][a+2] === 'p2') && (board[4][a+3] === 'p2')) || ((board[2][a] === 'p2') && (board[3][a+1] === 'p2') && (board[4][a+2] === 'p2') && (board[5][a+3] === 'p2'))){
				document.querySelectorAll(".dot").forEach(function(dot){
					dot.removeEventListener("click", makeAmove);

				});
				return true;
			} 
		}
		for (let a = 6; a > 2; a--){
			if(((board[0][a] === 'p2') && (board[1][a-1] === 'p2') && (board[2][a-2] === 'p2') && (board[3][a-3] === 'p2')) || ((board[1][a] === 'p2') && (board[2][a-1] === 'p2') && (board[3][a-2] === 'p2') && (board[4][a-3] === 'p2')) || ((board[2][a] === 'p2') && (board[3][a-1] === 'p2') && (board[4][a-2] === 'p2') && (board[5][a-3] === 'p2'))){
				document.querySelectorAll(".dot").forEach(function(dot){
					dot.removeEventListener("click", makeAmove);

				});
				return true;
			} 
		}
	}
}


function tCheck(){
	let sum = 0;
	for (let a = 0; a < 6; a++){
		for (let j = 0; j < 7; j++){
			if(board[a][j] === null){
				sum++;
			}
		}
	}
	console.log(`Sum is ${sum}`);
	if (sum > 0){
		return false;
	} else {
		return true;
	}
}




function updateBoard(num1, num2) {
	if (num2 < 6) {
		for (let a = 0; a < 6; a++){
			if (board[a][0] === null){
				board[a][0] = `p${num1}`;
				console.log(board[a]);
				return;
			}
		}
	} else if (num2 < 12) {
		for (let a = 0; a < 6; a++){
			if (board[a][1] === null){
				board[a][1] = `p${num1}`;
				console.log(board[a]);
				return;
			}
		}
	} else if (num2 < 18) {
		for (let a = 0; a < 6; a++){
			if (board[a][2] === null){
				board[a][2] = `p${num1}`;
				console.log(board[a]);
				return;
			}
		}
	} else if (num2 < 24) {
		for (let a = 0; a < 6; a++){
			if (board[a][3] === null){
				board[a][3] = `p${num1}`;
				console.log(board[a]);
				return;
			}
		}
	} else if (num2 < 30) {
		for (let a = 0; a < 6; a++){
			if (board[a][4] === null){
				board[a][4] = `p${num1}`;
				console.log(board[a]);
				return;
			}
		}
	} else if (num2 < 36) {
		for (let a = 0; a < 6; a++){
			if (board[a][5] === null){
				board[a][5] = `p${num1}`;
				console.log(board[a]);
				return;
			}
		}
	} else if (num2 < 42) {
		for (let a = 0; a < 6; a++){
			if (board[a][6] === null){
				board[a][6] = `p${num1}`;
				console.log(board[a]);
				return;
			}
		}
	}
}


function restartGame() {
	turn = 1;
	move = null;
	message.style.color = "#D92B04";
	message.innerHTML = "Player 1's turn";
	
	col = [
	[],
	[],
	[],
	[],
	[],
	[],
	[]
	];
	
	board = [
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null]
	]
	
	document.querySelectorAll(".dot").forEach(function(dot){
		dot.style.background = "white";
		colId = parseInt(dot.id);
		
		

			dot.addEventListener("click", makeAmove);

		
		
		if (colId < 6){
			col[0].push(dot);
		} else if (colId < 12) {
			col[1].push(dot);	   
		} else if (colId < 18) {
			col[2].push(dot);
		} else if (colId < 24) {
			col[3].push(dot);
		} else if (colId < 30) {
			col[4].push(dot);
		} else if (colId < 36) {
			col[5].push(dot);
		} else if (colId < 42) {
			col[6].push(dot);
		}
											  
	});
}
