# Project-1: Connect Four

## Project Information
This project was apart of my Software Engineering Immersive course at General Assembly. The objective was to create a JavaScript game that met the following requirements:

 1. Render a game in the browser
 2. Include separate HTML, CSS & JavaScript files.
 3. Use vanilla JavaScript or jQuery.
 4. Have properly indented HTML, CSS & JavaScript. In addition, vertical whitespace needs to be consistent.
 5. No remaining dead and/or commented out code
 6. Have functions and variables that are named sensibly.
 7. Be coded in a consistent manner.
 8. Be deployed online using Netlify

### Game Description

Connect Four is a classic game in which two players alternate turns dropping circular game pieces into a board/grid. Once a player has 4 of their pieces in a row, they win. If the board is filled without either player having 4 pieces in a row, the game ends in a tie. 

### Technologies Used

 - **HTML** 
 - **CSS** 
 - **JavaScript** 
 
## Gameplay
 - Link to game is [here](https://vsconnectfour.netlify.app/)
 - The game starts with an empty board. To make a move, simply click a circle in the column you would like your game piece to be inserted. To start Player 1 will go first.
 
![Screen Shot 2022-08-12 at 8 28 16 AM](https://user-images.githubusercontent.com/59453943/184354647-b09bb591-9a02-4976-8c4e-3e0816dcb948.png)

- A player can win by getting four game pieces in a line. The line can be horizontal, vertical, or diagonal. 

**Horizontal**
![New Note](https://user-images.githubusercontent.com/59453943/184356805-11fae10f-4110-4b3a-ad9d-77cc338de5e1.jpeg)

**Vertical**
![New Note](https://user-images.githubusercontent.com/59453943/184357843-0dcc84bc-60dd-4923-a87e-371fb8d69005.jpeg)

**Diagonal**
![New Note](https://user-images.githubusercontent.com/59453943/184358159-570cffe7-d0ed-4ca6-b941-97f1766315ac.jpeg)

- The game will result in a tie if neither player is able to place four game pieces in line and no moves remain on the board.

**Tie**
![New Note](https://user-images.githubusercontent.com/59453943/184358961-5c6b3bd1-fe23-4602-8126-db807a5088b8.jpeg)

## Approach Taken
- **Wireframe:** Link to wireframe is [here](https://whimsical.com/connect-four-2hawUxoduy7KME5LiFP8C2)
- **Pseudocode:** Link to pseudocode is [here](https://docs.google.com/document/d/1gpZOTKWqRWZA9izZgI-v74ohHJ-872QfOxfI2-Hnmhs/edit?usp=sharing)

## Hurdles
 - The first hurdle I faced was updating the board. For the logic to make moves on the board I started by implementing the logic used from my Tic-Tac-Toe game. This would not work for Connect Four because it updated the individual circles instead of the column. I contemplated on multiple solutions and settled on implementing a data structure we learned in class, a stack. I created an array of arrays called **col**, to represent the 7 columns on the board. I used a conditional statement to add elements to the array. This allowed me to update the columns from bottom to top.
 
 
 - The other hurdle I faced was how I would restart the game. For my Tic-Tac-Toe game the approach I used would refresh the entire page when the restart button was pressed. For my Connect Four game I wanted to keep a score of games won so the previous approach would not work this time. So, within my function to restart the game I chose to reset variables and change the background of the circles to restart a game. This allowed me to keep the score displayed and only resetting the board. 
 
## Future Features
 - Prompt at start of game to determine game mode
 - Different game modes for a quick game, match game, vs CPU, vs another opponent on separate device
 - Prompt at conclusion of game to start new game, quit, reset score, keep score
 - Make responsive and visually pleasing on all devices

