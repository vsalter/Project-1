let turn = 1;
let id;
let colId;
let message = document.getElementById("message");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let s1 = parseInt(score1.innerHTML);
let s2 = parseInt(score2.innerHTML);
let board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
let col = [
	[],
	[],
	[],
	[],
	[],
	[],
	[]
];
let hWinCombos = [
	[5, 11, 17, 23, 29, 35, 41],
	[4, 10, 16, 22, 28, 34, 40],
	[3, 9, 15, 21, 27, 33, 39],
	[2, 8, 14, 20, 26, 32, 38],
	[1, 7, 13, 19, 25, 31, 37],
	[0, 6, 12, 18, 24, 30, 36]
]
let move;

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
			move.backgroundColor = "#D92B04";
		} else if (id < 12) {
			move = col[1].pop().style;
			move.backgroundColor = "#D92B04";
		} else if (id < 18) {
			move = col[2].pop().style;
			move.backgroundColor = "#D92B04";
		} else if (id < 24) {
			move = col[3].pop().style;
			move.backgroundColor = "#D92B04";
		} else if (id < 30) {
			move = col[4].pop().style;
			move.backgroundColor = "#D92B04";
		} else if (id < 36) {
			move = col[5].pop().style;
			move.backgroundColor = "#D92B04";
		} else if (id < 42) {
			move = col[6].pop().style;
			move.backgroundColor = "#D92B04";
		}
	}else {
		if (id < 6){
			move = col[0].pop().style;
			move.backgroundColor = "#F2CB05";
		} else if (id < 12) {
			move = col[1].pop().style;
			move.backgroundColor = "#F2CB05";
		} else if (id < 18) {
			move = col[2].pop().style;
			move.backgroundColor = "#F2CB05";
		} else if (id < 24) {
			move = col[3].pop().style;
			move.backgroundColor = "#F2CB05";
		} else if (id < 30) {
			move = col[4].pop().style;
			move.backgroundColor = "#F2CB05";
		} else if (id < 36) {
			move = col[5].pop().style;
			move.backgroundColor = "#F2CB05";
		} else if (id < 42) {
			move = col[6].pop().style;
			move.backgroundColor = "#F2CB05";
		}
	}

	if (turn === 1){
		if (id < 6){
			if (hWinCombos[0][0] === 5){
				hWinCombos[0][0] = 'p1';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[1][0] === 4){
				hWinCombos[1][0] = 'p1';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[2][0] === 3){
				hWinCombos[2][0] = 'p1';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score2.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[3][0] === 2){
				hWinCombos[3][0] = 'p1';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[4][0] === 1){
				hWinCombos[4][0] = 'p1';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[5][0] === 0){
				hWinCombos[5][0] = 'p1';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			}
		} else if (id < 12) {
			if (hWinCombos[0][1] === 11){
				hWinCombos[0][1] = 'p1';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[1][1] === 10){
				hWinCombos[1][1] = 'p1';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[2][1] === 9){
				hWinCombos[2][1] = 'p1';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score2.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[3][1] === 8){
				hWinCombos[3][1] = 'p1';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[4][1] === 7){
				hWinCombos[4][1] = 'p1';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[5][1] === 6){
				hWinCombos[5][1] = 'p1';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			}
		} else if (id < 18) {
			if (hWinCombos[0][2] === 17){
				hWinCombos[0][2] = 'p1';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[1][2] === 16){
				hWinCombos[1][2] = 'p1';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[2][2] === 15){
				hWinCombos[2][2] = 'p1';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score2.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[3][2] === 14){
				hWinCombos[3][2] = 'p1';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[4][2] === 13){
				hWinCombos[4][2] = 'p1';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[5][2] === 12){
				hWinCombos[5][2] = 'p1';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			}
		} else if (id < 24) {
			if (hWinCombos[0][3] === 23){
				hWinCombos[0][3] = 'p1';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[1][3] === 22){
				hWinCombos[1][3] = 'p1';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[2][3] === 21){
				hWinCombos[2][3] = 'p1';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score2.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[3][3] === 20){
				hWinCombos[3][3] = 'p1';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[4][3] === 19){
				hWinCombos[4][3] = 'p1';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[5][3] === 18){
				hWinCombos[5][3] = 'p1';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			}
		} else if (id < 30) {
			if (hWinCombos[0][4] === 29){
				hWinCombos[0][4] = 'p1';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[1][4] === 28){
				hWinCombos[1][4] = 'p1';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[2][4] === 27){
				hWinCombos[2][4] = 'p1';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score2.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[3][4] === 26){
				hWinCombos[3][4] = 'p1';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[4][4] === 25){
				hWinCombos[4][4] = 'p1';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[5][4] === 24){
				hWinCombos[5][4] = 'p1';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			}
		} else if (id < 36) {
			if (hWinCombos[0][5] === 35){
				hWinCombos[0][5] = 'p1';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[1][5] === 34){
				hWinCombos[1][5] = 'p1';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[2][5] === 33){
				hWinCombos[2][5] = 'p1';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score2.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[3][5] === 32){
				hWinCombos[3][5] = 'p1';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[4][5] === 31){
				hWinCombos[4][5] = 'p1';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[5][5] === 30){
				hWinCombos[5][5] = 'p1';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			}
		} else if (id < 42) {
			if (hWinCombos[0][6] === 41){
				hWinCombos[0][6] = 'p1';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[1][6] === 40){
				hWinCombos[1][6] = 'p1';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[2][6] === 39){
				hWinCombos[2][6] = 'p1';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[3][6] === 38){
				hWinCombos[3][6] = 'p1';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[4][6] === 37){
				hWinCombos[4][6] = 'p1';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			} else if (hWinCombos[5][6] === 36){
				hWinCombos[5][6] = 'p1';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s1++;
					message.innerHTML = "Player 1 is the winner";
					score1.innerHTML = `${s1}`;
					return;
				}
			}
		}
		turn ++;
	}else {
		if (id < 6){
			if (hWinCombos[0][0] === 5){
				hWinCombos[0][0] = 'p2';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[1][0] === 4){
				hWinCombos[1][0] = 'p2';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[2][0] === 3){
				hWinCombos[2][0] = 'p2';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[3][0] === 2){
				hWinCombos[3][0] = 'p2';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[4][0] === 1){
				hWinCombos[4][0] = 'p2';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[5][0] === 0){
				hWinCombos[5][0] = 'p2';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			}
		} else if (id < 12) {
			if (hWinCombos[0][1] === 11){
				hWinCombos[0][1] = 'p2';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[1][1] === 10){
				hWinCombos[1][1] = 'p2';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[2][1] === 9){
				hWinCombos[2][1] = 'p2';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[3][1] === 8){
				hWinCombos[3][1] = 'p2';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[4][1] === 7){
				hWinCombos[4][1] = 'p2';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[5][1] === 6){
				hWinCombos[5][1] = 'p2';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			}
		} else if (id < 18) {
			if (hWinCombos[0][2] === 17){
				hWinCombos[0][2] = 'p2';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[1][2] === 16){
				hWinCombos[1][2] = 'p2';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 1 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[2][2] === 15){
				hWinCombos[2][2] = 'p2';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[3][2] === 14){
				hWinCombos[3][2] = 'p2';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[4][2] === 13){
				hWinCombos[4][2] = 'p2';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[5][2] === 12){
				hWinCombos[5][2] = 'p2';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			}
		} else if (id < 24) {
			if (hWinCombos[0][3] === 23){
				hWinCombos[0][3] = 'p2';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[1][3] === 22){
				hWinCombos[1][3] = 'p2';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[2][3] === 21){
				hWinCombos[2][3] = 'p2';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[3][3] === 20){
				hWinCombos[3][3] = 'p2';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[4][3] === 19){
				hWinCombos[4][3] = 'p2';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[5][3] === 18){
				hWinCombos[5][3] = 'p2';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			}
		} else if (id < 30) {
			if (hWinCombos[0][4] === 29){
				hWinCombos[0][4] = 'p2';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[1][4] === 28){
				hWinCombos[1][4] = 'p2';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[2][4] === 27){
				hWinCombos[2][4] = 'p2';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[3][4] === 26){
				hWinCombos[3][4] = 'p2';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[4][4] === 25){
				hWinCombos[4][4] = 'p2';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[5][4] === 24){
				hWinCombos[5][4] = 'p2';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			}
		} else if (id < 36) {
			if (hWinCombos[0][5] === 35){
				hWinCombos[0][5] = 'p2';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[1][5] === 34){
				hWinCombos[1][5] = 'p2';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[2][5] === 33){
				hWinCombos[2][5] = 'p2';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[3][5] === 32){
				hWinCombos[3][5] = 'p2';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[4][5] === 31){
				hWinCombos[4][5] = 'p2';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[5][5] === 30){
				hWinCombos[5][5] = 'p2';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			}
		} else if (id < 42) {
			if (hWinCombos[0][6] === 41){
				hWinCombos[0][6] = 'p2';
				console.log(hWinCombos[0]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[1][6] === 40){
				hWinCombos[1][6] = 'p2';
				console.log(hWinCombos[1]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[2][6] === 39){
				hWinCombos[2][6] = 'p2';
				console.log(hWinCombos[2]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[3][6] === 38){
				hWinCombos[3][6] = 'p2';
				console.log(hWinCombos[3]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[4][6] === 37){
				hWinCombos[4][6] = 'p2';
				console.log(hWinCombos[4]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			} else if (hWinCombos[5][6] === 36){
				hWinCombos[5][6] = 'p2';
				console.log(hWinCombos[5]);
				if(checkWinner(turn)){
					s2++;
					message.innerHTML = "Player 2 is the winner";
					score2.innerHTML = `${s2}`;
					return;
				}
			}
		} //else if with id condition
		turn --;
	} //else closing bracket
} //function closing bracket

function checkWinner(num) {
	if(num === 1){
		if(((hWinCombos[0][0] === 'p1') && (hWinCombos[0][1] === 'p1') && (hWinCombos[0][2] === 'p1') && (hWinCombos[0][3] === 'p1')) || ((hWinCombos[0][1] === 'p1') && (hWinCombos[0][2] === 'p1') && (hWinCombos[0][3] === 'p1') && (hWinCombos[0][4] === 'p1')) || ((hWinCombos[0][2] === 'p1') && (hWinCombos[0][3] === 'p1') && (hWinCombos[0][4] === 'p1') && (hWinCombos[0][5] === 'p1')) || ((hWinCombos[0][3] === 'p1') && (hWinCombos[0][4] === 'p1') && (hWinCombos[0][5] === 'p1') && (hWinCombos[0][6] === 'p1'))){
			return true;
		} else if(((hWinCombos[1][0] === 'p1') && (hWinCombos[1][1] === 'p1') && (hWinCombos[1][2] === 'p1') && (hWinCombos[1][3] === 'p1')) || ((hWinCombos[1][1] === 'p1') && (hWinCombos[1][2] === 'p1') && (hWinCombos[1][3] === 'p1') && (hWinCombos[1][4] === 'p1')) || ((hWinCombos[1][2] === 'p1') && (hWinCombos[1][3] === 'p1') && (hWinCombos[1][4] === 'p1') && (hWinCombos[1][5] === 'p1')) || ((hWinCombos[1][3] === 'p1') && (hWinCombos[1][4] === 'p1') && (hWinCombos[1][5] === 'p1') && (hWinCombos[1][6] === 'p1'))){
			return true;
		} else if(((hWinCombos[2][0] === 'p1') && (hWinCombos[2][1] === 'p1') && (hWinCombos[2][2] === 'p1') && (hWinCombos[2][3] === 'p1')) || ((hWinCombos[2][1] === 'p1') && (hWinCombos[2][2] === 'p1') && (hWinCombos[2][3] === 'p1') && (hWinCombos[2][4] === 'p1')) || ((hWinCombos[2][2] === 'p1') && (hWinCombos[2][3] === 'p1') && (hWinCombos[2][4] === 'p1') && (hWinCombos[2][5] === 'p1')) || ((hWinCombos[2][3] === 'p1') && (hWinCombos[2][4] === 'p1') && (hWinCombos[2][5] === 'p1') && (hWinCombos[2][6] === 'p1'))){
			return true;
		} else if(((hWinCombos[3][0] === 'p1') && (hWinCombos[3][1] === 'p1') && (hWinCombos[3][2] === 'p1') && (hWinCombos[3][3] === 'p1')) || ((hWinCombos[3][1] === 'p1') && (hWinCombos[3][2] === 'p1') && (hWinCombos[3][3] === 'p1') && (hWinCombos[3][4] === 'p1')) || ((hWinCombos[3][2] === 'p1') && (hWinCombos[3][3] === 'p1') && (hWinCombos[3][4] === 'p1') && (hWinCombos[3][5] === 'p1')) || ((hWinCombos[3][3] === 'p1') && (hWinCombos[3][4] === 'p1') && (hWinCombos[3][5] === 'p1') && (hWinCombos[3][6] === 'p1'))){
			return true;
		} else if(((hWinCombos[4][0] === 'p1') && (hWinCombos[4][1] === 'p1') && (hWinCombos[4][2] === 'p1') && (hWinCombos[4][3] === 'p1')) || ((hWinCombos[4][1] === 'p1') && (hWinCombos[4][2] === 'p1') && (hWinCombos[4][3] === 'p1') && (hWinCombos[4][4] === 'p1')) || ((hWinCombos[4][2] === 'p1') && (hWinCombos[4][3] === 'p1') && (hWinCombos[4][4] === 'p1') && (hWinCombos[4][5] === 'p1')) || ((hWinCombos[4][3] === 'p1') && (hWinCombos[4][4] === 'p1') && (hWinCombos[4][5] === 'p1') && (hWinCombos[4][6] === 'p1'))){
			return true;
		} else if(((hWinCombos[5][0] === 'p1') && (hWinCombos[5][1] === 'p1') && (hWinCombos[5][2] === 'p1') && (hWinCombos[5][3] === 'p1')) || ((hWinCombos[5][1] === 'p1') && (hWinCombos[5][2] === 'p1') && (hWinCombos[5][3] === 'p1') && (hWinCombos[5][4] === 'p1')) || ((hWinCombos[5][2] === 'p1') && (hWinCombos[5][3] === 'p1') && (hWinCombos[5][4] === 'p1') && (hWinCombos[5][5] === 'p1')) || ((hWinCombos[5][3] === 'p1') && (hWinCombos[5][4] === 'p1') && (hWinCombos[5][5] === 'p1') && (hWinCombos[5][6] === 'p1'))){
			return true;
		} else {
			return false;
		}
	} else {
		if(((hWinCombos[0][0] === 'p2') && (hWinCombos[0][1] === 'p2') && (hWinCombos[0][2] === 'p2') && (hWinCombos[0][3] === 'p2')) || ((hWinCombos[0][1] === 'p2') && (hWinCombos[0][2] === 'p2') && (hWinCombos[0][3] === 'p2') && (hWinCombos[0][4] === 'p2')) || ((hWinCombos[0][2] === 'p2') && (hWinCombos[0][3] === 'p2') && (hWinCombos[0][4] === 'p2') && (hWinCombos[0][5] === 'p2')) || ((hWinCombos[0][3] === 'p2') && (hWinCombos[0][4] === 'p2') && (hWinCombos[0][5] === 'p2') && (hWinCombos[0][6] === 'p2'))){
			return true;
		} else if(((hWinCombos[1][0] === 'p2') && (hWinCombos[1][1] === 'p2') && (hWinCombos[1][2] === 'p2') && (hWinCombos[1][3] === 'p2')) || ((hWinCombos[1][1] === 'p2') && (hWinCombos[1][2] === 'p2') && (hWinCombos[1][3] === 'p2') && (hWinCombos[1][4] === 'p2')) || ((hWinCombos[1][2] === 'p2') && (hWinCombos[1][3] === 'p2') && (hWinCombos[1][4] === 'p2') && (hWinCombos[1][5] === 'p2')) || ((hWinCombos[1][3] === 'p2') && (hWinCombos[1][4] === 'p2') && (hWinCombos[1][5] === 'p2') && (hWinCombos[1][6] === 'p2'))){
			return true;
		} else if(((hWinCombos[2][0] === 'p2') && (hWinCombos[2][1] === 'p2') && (hWinCombos[2][2] === 'p2') && (hWinCombos[2][3] === 'p2')) || ((hWinCombos[2][1] === 'p2') && (hWinCombos[2][2] === 'p2') && (hWinCombos[2][3] === 'p2') && (hWinCombos[2][4] === 'p2')) || ((hWinCombos[2][2] === 'p2') && (hWinCombos[2][3] === 'p2') && (hWinCombos[2][4] === 'p2') && (hWinCombos[2][5] === 'p2')) || ((hWinCombos[2][3] === 'p2') && (hWinCombos[2][4] === 'p2') && (hWinCombos[2][5] === 'p2') && (hWinCombos[2][6] === 'p2'))){
			return true;
		} else if(((hWinCombos[3][0] === 'p2') && (hWinCombos[3][1] === 'p2') && (hWinCombos[3][2] === 'p2') && (hWinCombos[3][3] === 'p2')) || ((hWinCombos[3][1] === 'p2') && (hWinCombos[3][2] === 'p2') && (hWinCombos[1][3] === 'p2') && (hWinCombos[1][4] === 'p2')) || ((hWinCombos[1][2] === 'p2') && (hWinCombos[1][3] === 'p2') && (hWinCombos[1][4] === 'p2') && (hWinCombos[1][5] === 'p2')) || ((hWinCombos[3][3] === 'p2') && (hWinCombos[3][4] === 'p2') && (hWinCombos[3][5] === 'p2') && (hWinCombos[3][6] === 'p2'))){
			return true;
		} else if(((hWinCombos[4][0] === 'p2') && (hWinCombos[4][1] === 'p2') && (hWinCombos[4][2] === 'p2') && (hWinCombos[4][3] === 'p2')) || ((hWinCombos[4][1] === 'p2') && (hWinCombos[4][2] === 'p2') && (hWinCombos[4][3] === 'p2') && (hWinCombos[4][4] === 'p2')) || ((hWinCombos[4][2] === 'p2') && (hWinCombos[4][3] === 'p2') && (hWinCombos[4][4] === 'p2') && (hWinCombos[4][5] === 'p2')) || ((hWinCombos[4][3] === 'p2') && (hWinCombos[4][4] === 'p2') && (hWinCombos[4][5] === 'p2') && (hWinCombos[4][6] === 'p2'))){
			return true;
		} else if(((hWinCombos[5][0] === 'p2') && (hWinCombos[5][1] === 'p2') && (hWinCombos[5][2] === 'p2') && (hWinCombos[5][3] === 'p2')) || ((hWinCombos[5][1] === 'p2') && (hWinCombos[5][2] === 'p2') && (hWinCombos[5][3] === 'p2') && (hWinCombos[5][4] === 'p2')) || ((hWinCombos[5][2] === 'p2') && (hWinCombos[5][3] === 'p2') && (hWinCombos[5][4] === 'p2') && (hWinCombos[5][5] === 'p2')) || ((hWinCombos[5][3] === 'p2') && (hWinCombos[5][4] === 'p2') && (hWinCombos[5][5] === 'p2') && (hWinCombos[5][6] === 'p2'))){
			return true;
		} else {
			return false;
		}
	}
}

function restartGame() {
	window.location.reload(true);
};

