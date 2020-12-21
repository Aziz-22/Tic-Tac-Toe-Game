console.log(" ===> X Player <=== ");


cell1 = document.getElementById("cell1");
cell2 = document.getElementById("cell2");
cell3 = document.getElementById("cell3");
cell4 = document.getElementById("cell4");
cell5 = document.getElementById("cell5");
cell6 = document.getElementById("cell6");
cell7 = document.getElementById("cell7");
cell8 = document.getElementById("cell8");
cell9 = document.getElementById("cell9");
buttonMove = document.getElementById("btnMove");
cells = document.querySelectorAll(".cells");

// $(document).one(function() {
//     console.log("I am INside")
//     setCells();
// });
// False Means Once I Open The Website.

// I wanna Check The boad if it is empty, I will go to setCells, Otherwise Go To Display


// function createBoard() {

//     console.log("Inside");

//     if (flag == false) {
//         console.log("False");
//         flag = true;
//         console.log(flag);
//         setCells();
//     } else {
//         console.log("ELse");
//     }
// }

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {

    //console.log("Page Is Reloading");
    setCells();
    flag = true;
    //console.log(flag);
}








function funCell1() {

    if (cell1.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        cell1.innerText = "X";
        cell1.style.color = "red";
        sessionStorage.setItem("cell1", "X");
        // console.log(sessionStorage.getItem("cell1"));
    }

}

function funCell2() {

    if (cell2.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        cell2.innerText = "X";
        cell2.style.color = "red";
        sessionStorage.setItem("cell2", "X");
        console.log("cell2 = ", sessionStorage.getItem("cell2"));
    }

}

function funCell3() {

    if (cell3.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        cell3.innerText = "X";
        cell3.style.color = "red";
        sessionStorage.setItem("cell3", "X");
        console.log(sessionStorage.getItem("cell3"));
    }

}

function funCell4() {

    if (cell4.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        cell4.innerText = "X";
        cell4.style.color = "red";
        sessionStorage.setItem("cell4", "X");
        console.log(sessionStorage.getItem("cell4"));
    }

}

function funCell5() {

    if (cell5.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        cell5.innerText = "X";
        cell5.style.color = "red";
        sessionStorage.setItem("cell5", "X");
        console.log(sessionStorage.getItem("cell5"));
    }

}

function funCell6() {

    if (cell6.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        cell6.innerText = "X";
        cell6.style.color = "red";
        sessionStorage.setItem("cell6", "X");
        console.log(sessionStorage.getItem("cell6"));
    }

}

function funCell7() {

    if (cell7.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        cell7.innerText = "X";
        cell7.style.color = "red";
        sessionStorage.setItem("cell7", "X");
        console.log(sessionStorage.getItem("cell7"));
    }

}

function funCell8() {

    if (cell8.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        cell8.innerText = "X";
        cell8.style.color = "red";
        sessionStorage.setItem("cell8", "X");
        console.log(sessionStorage.getItem("cell8"));
    }

}

function funCell9() {

    if (cell9.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        cell9.innerText = "X";
        cell9.style.color = "red";
        sessionStorage.setItem("cell9", "X");
        console.log(sessionStorage.getItem("cell9"));
    }

}



function setCells() {


    // console.log(sessionStorage.getItem("Count"));
    if (sessionStorage.getItem("Count") == 1) {

        //console.log("Return");
        return;
    }
    // seesionStorage.setItem -> It Allows You To Save Your Data As Temporary, So You Can Transfer Your Data Between Your Website's Pages.
    //console.log("I am In Set Cells");

    sessionStorage.setItem("cell1", "1");
    sessionStorage.setItem("cell2", "2");
    sessionStorage.setItem("cell3", "3");
    sessionStorage.setItem("cell4", "4");
    sessionStorage.setItem("cell5", "5");
    sessionStorage.setItem("cell6", "6");
    sessionStorage.setItem("cell7", "7");
    sessionStorage.setItem("cell8", "8");
    sessionStorage.setItem("cell9", "9");

    // count++;


}


function displayBoard() {
    // console.log("I'm In DIsplay Function");
    console.log(checkWinner());

    if (checkWinner() == true) {
        console.log("YES");
    }
    // cell1.innerText = sessionStorage.getItem(setCells());
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
//createBoard();

// if (flag == false) { // This Condition For Check If The Board Is Empty Or Not,

//     console.log("Flag False")
//     displayBoard();


// }



function reStart() { // When The User Clicks The Restart Button, It Will Make A New Game


    sessionStorage.clear();
    window.location.reload();



}


function checkWinner() {

    // Check Rows 
    if (cell1.innerHTML == "O" && cell2.innerHTML == "O" && cell3.innerHTML == "O") {

        alert("Congarts, The O Player Won The Game !! ");
        return true;

    } else if (cell4.innerHTML == "O" && cell5.innerHTML == "O" && cell6.innerHTML == "O") {

        alert("Congarts, The O Player Won The Game !! ");


    } else if (cell7.innerHTML == "O" && cell8.innerHTML == "O" && cell9.innerHTML == "O") {

        alert("Congarts, The O Player Won The Game !! ");

        // End Rows

    } else if (cell1.innerHTML == "O" && cell4.innerHTML == "O" && cell7.innerHTML == "O") { // Checks Columns 

        alert("Congarts, The O Player Won The Game !! ");


    } else if (cell2.innerHTML == "O" && cell5.innerHTML == "O" && cell8.innerHTML == "O") {
        alert("Congarts, The O Player Won The Game !! ");



    } else if (cell3.innerHTML == "O" && cell6.innerHTML == "O" && cell9.innerHTML == "O") {
        alert("Congarts, The O Player Won The Game !! ");

        // End Columns 

    } else if (cell1.innerHTML == "O" && cell5.innerHTML == "O" && cell8.innerHTML == "O") { // Checks Diognals 
        alert("Congarts, The O Player Won The Game !! ");


    } else if (cell3.innerHTML == "O" && cell5.innerHTML == "O" && cell7.innerHTML == "O") {
        alert("Congarts, The O Player Won The Game !! ");


        // End Diognals
    } else {

        console.log("Still...");
    }
}

setCells();
displayBoard();