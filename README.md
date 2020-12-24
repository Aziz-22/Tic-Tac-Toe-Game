
# Tic Tac Toe Game! 


## Link technologies used: 

*I have used mainly HTML, CSS, JavaScript and some pieces of codes from jQuery.*

## Wireframe/ Draft


*You Can Find The URL At The Bottom*



## User stories

- As a [user], I want to [know what is this game about] so I can [learn a new game and play with others].
- As a [user], I want to [start a new game] so I can [start to play with the opponent].
- As a [user], I want to [choose a cell to put X or O] so I can [put X or O].

## My strategies for solving the problem

- First, I have made the board that contains the numbers from 1 to 9 which is 3 x 3 grid by using the grid property.*
- Second, I have decided that the first player will automatically have X and the second player had O*.
- Third, I have made it seems like this way -> When the game start, the player should choose a cell to play and then click the button to move to the second player and so on.*
- Finally, I made a function to check if there is a winner or would be a tied game.*

## Unsolved problem

*It was how to validate when some of a player has clicked the button without choosing a cell. It would be fixed in the future.*


## Describe how to solve for the winner

*Actually, after each button clicked there is a function is checking frequently to see who is won the game or it would be a tied game. The Winner can end up with complete 3 consecutive marks (X or O) could be as rows, columns or even diagonals.*

## Describe some favorite function work

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
**This Function, It called when the player clicks restart button.**

    sessionStorage.clear();
    window.location.reload();



}*


## Links

- The Game https://pages.git.generalassemb.ly/AbdulazizAlsaif/Project1-Tic-Tac-Toe-Game/


- Wireframe URL: *https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=Final_Phase.drawio#R7Vtdc5s4FP01nn2yBwkw8JikcbK7bTfddNa7ffEoIGO1ArFCju3%2B%2BpUw2AYpMc1AarebzDjmApI4596r%2B0EG9lWyvuEoW7xjEaYDaEXrgf1mACHwrbH8oySbrSRwS0HMSVRetBfck6%2B4FFqldEkinNcuFIxRQbK6MGRpikNRkyHO2ap%2B2ZzR%2BqwZirEmuA8R1aVTEonFVuq71l5%2Bi0m8qGYGVnkmQdXFpSBfoIitDkT29cC%2B4oyJ7bdkfYWpAq%2FCZXvf5Imzu4VxnIo2N0TBh%2Fvhh%2BjzF9dO7N8sEsbT22E5yiOiy%2FKBy8WKTYUAZ8s0wmoQa2BfrhZE4PsMhersSnIuZQuRUHkE5Fd9UdUMmAu8PhCVi7zBLMGCb%2BQl5dlxidemfrjao%2B9VssUB8kFQClHJeLwbeQ%2BK%2FFLi8g0YweMY4TS6UMomj1KW4paY4KimezoiB8%2FsGh65knFMkSCPdY01wVDOcMeIXMkOcNevAQ4CWB8hZ0se4vKmQwVrjOND6%2FmBBOIxFtpABSm7p345T7bG060cU%2BNKqqGoE5QLzr7gK0YZ3xM4J5Q2RIiSOJWHoSQSS%2FmlUmoifcVFeSIhUaSmMVpJ3Y7mLBWlt4NWR4bTsBxPtxzHoEWwL7txdD5ILpgaeYwSBUn6kGe7Z%2F8ZKPKc06JorFH0lsXsTPgojstFGnbDbybHP8pN8IwT7pwbT%2BPmPTobd9Y1N7ZXJ8fXyQGmqMDvix1fY2eKaVjsN9ZHpj5IqD5R8cmU%2BEbSN5K%2Bjyq%2BHrj8Fovz8X6dM9rYraD1vSkNDJSquVmGi6xDRWzpZ6aegYhioXKd0Frmo%2F8p3FL43a2yyhprMeCqMsk7ijZnQlUH7DjB0f0MmLKK3oINoCeb91uHeYc4ilX9QPeO0wVStkZyo0uN1Y5oTzRS9%2BCC4zlrD9iDRipkG8AfmyI9rzfw9ezoGdRaZPp9oGbXUXNMqNmmGMzuDTY9idFgY0tBSSodRlWBqgy68hcDaMvfiZr2Uqp5RPD%2BnMG9yMvfWO4V8J7yRRHKFzuaKqfzFj1gesdyIghTzueBCcESg1cSLDM5LzO1ADb2DTUlyrPtg87JWq3jMlMpPebXj3KwvPKiC5SpG5J1YdkjtMqdUShHQhIrPuM4lskg38xIUlTgutAf23br%2BhPo%2BrNzbzWX15%2FP04MKTX%2BOGFrdl3UBE6ibWQAMMHkGmMZ9oQT1neEtFr%2Fkuz37Z60X2EFdowPbsIlbPW3ivzsf6ad18leEHv%2F45%2BHX9NNCDNsUQyvLryz7gBazLzrqwqg6cYnCL3GB%2BIGjnBc%2F8pJisovKMRm9VLmeNwshVPPgQgEBJ2GUOiMiHdOcSC65dFGJlEZIIPlHyXOFE1kOcxYSJPGZKDOYrGRckqMsK8XDBEcEDQH0R1kad7EXNhJeybJO%2FXNF4c6ZbxFAnB3z4CjzlMUsH6I0Gj5w%2BZkrGCYuUFgCx5vdJIjQmbpotr2yOw2ADmxqgDtyNR2wA10HKlnnOqBHQ1cs2%2FBiZs1JWy8TQavC6uQ9fN8JdeDrfEOTu%2B8ioTYS7v6ARg%2BPGr3idYhWOC%2FS0wnwVCdrElaq3qGRO5qbB9Bg5NA1bPFuT5zrhWeN89fuCQPQiFkNXeGxbzCMTrrCRpT0AvCTljGneF22hy8POsUhRXlOwpZgnUiz2G%2B4KLcZb7TtFgPLOTJSd%2B1iI4F6ZnaPpf1HRT0qPoNGC3C7MS6%2F0fhyoSHJAK%2BZZBgqhRodquSy46B6NUdVKyLC5Uaw3VKkMir5U8WNjgAEO9WtCg8mBE0A9uadQIs87ZQQtF%2BIoG31hmCLfOdJBHtGq%2FmOlKnQZZsqOKA3tFrUSU8FrbFBt14ZrR8xrD6eS9dKJY%2BMqrcPJ1BqzmS23sXU%2FeiA02gtuIZCmmvIpN2%2BMmnQIso%2BOxV4cWZFeEjxkD2jBI1%2BilX8dLV9N92pwUGMfV05Kln3yqEnF9s29pQUN09Jaup6nlyE2kuRBGjvAjmGWKGv1w5mH7zr22j4N7%2F4evHv9XrtDd9N2xTFX7vJA1zojOrNA8%2BQNANT%2BbCLPo8RpxYh1avj1IwOvj9Keij1J85lMixO3%2BCLnnUnNt6o93iGV4v6elPWSIoesb1X4EPrHXs8h1pBV8S4LjxKjO90Qow83P93zLbqs%2F8fI%2Fv6Pw%3D%3D*







