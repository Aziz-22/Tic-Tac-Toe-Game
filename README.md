


# Link technologies used: 

*I have used mainly HTML, CSS, JavaScript and some pieces of codes from jQuery.*

# Wireframe/ Draft


*You can go to the Drafts folder, then open the Final_phase file.*

# User stories

- As a [user], I want to [know what is this game about] so I can [learn a new game and play with others].
- As a [user], I want to [start a new game] so I can [start to play with the opponent].
- As a [user], I want to [choose a cell to put X or O] so I can [put X or O].

# My strategies for solving the problem

- First, I have made the board that contains the numbers from 1 to 9 which is 3 x 3 grid by using the grid property.*
- Second, I have decided that the first player will automatically have X and the second player had O*.
- Third, I have made it seems like this way -> When the game start, the player should choose a cell to play and then click the button to move to the second player and so on.*
- Finally, I made a function to check if there is a winner or would be a tied game.*

# Unsolved problem

*It was how to validate when some of a player has clicked the button without choosing a cell. It would be fixed in the future.*


# Describe how to solve for the winner

*Actually, after each button clicked there is a function is checking frequently to see who is won the game or it would be a tied game. The Winner can end up with complete 3 consecutive marks (X or O) could be as rows, columns or even diagonals.*

# Describe some favorite function work

*function displayBoard() {

  **This Function, It display the board for the player after each turn**
    // seesionStorage.getItem -> It Will Fetch The Data That Has Set, Then This Function Will Display It For The User 

    cell1.innerText = sessionStorage.getItem("cell1");
    cell2.innerText = sessionStorage.getItem("cell2");
    cell3.innerText = sessionStorage.getItem("cell3");
    cell4.innerText = sessionStorage.getItem("cell4");
    cell5.innerText = sessionStorage.getItem("cell5");
    cell6.innerText = sessionStorage.getItem("cell6");
    cell7.innerText = sessionStorage.getItem("cell7");
    cell8.innerText = sessionStorage.getItem("cell8");
    cell9.innerText = sessionStorage.getItem("cell9");

    checkWinner();

}



function reStart() { // When The User Clicks The Restart Button, It Will Make A New Game
**This Function, It called when the player click restart button**

    sessionStorage.clear();
    window.location.reload();



}*







