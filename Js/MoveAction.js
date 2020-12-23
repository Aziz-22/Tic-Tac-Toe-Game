console.log(" ===> X Player <=== ");

// document.getElementById("hiddenBtn").click();
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
cells = $(".cells");

// These Functions For Play And Mute The Background Music
let backgroundSound = document.getElementById("myAudio1");

function playBackSound() {

    backgroundSound.play();
}

function muteBackSound() {

    backgroundSound.pause();
}

// End 

let clickSound = document.getElementById("myAudio");

function playAudio() { // This Function Play An Audio When The User Clicks On A Cell.



    clickSound.play();

}

function WinnerSound() {


    let WinnerEffect = document.getElementById("myAudio2");
    WinnerEffect.play();

}


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {


    // This Condition Is Met When The User Reload The Page.

    setCells();

}







// These Functions For Assign X For A Specific Cell Upon The User Choice.
function funCell1() {



    if (cell1.innerText == "O" || cell1.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell1.innerText = "X";
        cell1.style.color = "red";
        sessionStorage.setItem("cell1", "X");
        cells.css("pointerEvents", "none");
        // cell2.style.pointerEvents = 'none';
    }

}

function funCell2() {



    if (cell2.innerText == "O" || cell2.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell2.innerText = "X";
        cell2.style.color = "red";
        sessionStorage.setItem("cell2", "X");
        cells.css("pointerEvents", "none");
        console.log("cell2 = ", sessionStorage.getItem("cell2"));
    }

}

function funCell3() {



    if (cell3.innerText == "O" || cell3.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell3.innerText = "X";
        cell3.style.color = "red";
        sessionStorage.setItem("cell3", "X");
        cells.css("pointerEvents", "none");
        console.log(sessionStorage.getItem("cell3"));
    }

}

function funCell4() {



    if (cell4.innerText == "O" || cell4.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell4.innerText = "X";
        cell4.style.color = "red";
        sessionStorage.setItem("cell4", "X");
        cells.css("pointerEvents", "none");
        console.log(sessionStorage.getItem("cell4"));
    }

}

function funCell5() {



    if (cell5.innerText == "O" || cell5.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell5.innerText = "X";
        cell5.style.color = "red";
        sessionStorage.setItem("cell5", "X");
        cells.css("pointerEvents", "none");
        console.log(sessionStorage.getItem("cell5"));
    }

}

function funCell6() {


    if (cell6.innerText == "O" || cell6.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell6.innerText = "X";
        cell6.style.color = "red";
        sessionStorage.setItem("cell6", "X");
        cells.css("pointerEvents", "none");
        console.log(sessionStorage.getItem("cell6"));
    }

}

function funCell7() {



    if (cell7.innerText == "O" || cell7.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell7.innerText = "X";
        cell7.style.color = "red";
        sessionStorage.setItem("cell7", "X");
        cells.css("pointerEvents", "none");
        console.log(sessionStorage.getItem("cell7"));
    }

}

function funCell8() {

    console.log("Clicked");

    if (cell8.innerText == "O" || cell8.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell8.innerText = "X";
        cell8.style.color = "red";
        sessionStorage.setItem("cell8", "X");
        cells.css("pointerEvents", "none");
        console.log(sessionStorage.getItem("cell8"));
    }

}

function funCell9() {



    if (cell9.innerText == "O" || cell9.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell9.innerText = "X";
        cell9.style.color = "red";
        sessionStorage.setItem("cell9", "X");
        cells.css("pointerEvents", "none");
        console.log(sessionStorage.getItem("cell9"));
    }

}
// END


// This Function For Create A New Board With Their Numbers
function setCells() {



    if (sessionStorage.getItem("Count") == 1) { // Here To Avoid Set a New Cells Again.


        return;
    }
    // seesionStorage.setItem -> It Allows You To Save Your Data As Temporary, So You Can Transfer Your Data Between Your Website's Pages.

    sessionStorage.setItem("cell1", "1");
    sessionStorage.setItem("cell2", "2");
    sessionStorage.setItem("cell3", "3");
    sessionStorage.setItem("cell4", "4");
    sessionStorage.setItem("cell5", "5");
    sessionStorage.setItem("cell6", "6");
    sessionStorage.setItem("cell7", "7");
    sessionStorage.setItem("cell8", "8");
    sessionStorage.setItem("cell9", "9");




}


function displayBoard() {


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
    // This Function For Checking The Winner, If There Is No Winner It Will Display Draw Game.



    if (cell1.innerHTML == "O" && cell2.innerHTML == "O" && cell3.innerHTML == "O") {



        alert("Congarts, The O Player Won The Game !! ");
        WinnerSound();


        // window.onload = function() {

        //     document.getElementById("myAudio").play();
        // }


        buttonMove.style.cursor = "not-allowed";
        cell1.style.color = "blue";
        cell2.style.color = "blue";
        cell3.style.color = "blue";

        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });




    } else if (cell4.innerHTML == "O" && cell5.innerHTML == "O" && cell6.innerHTML == "O") {

        alert("Congarts, The O Player Won The Game !! ");
        WinnerSound();
        buttonMove.style.cursor = "not-allowed";
        cell4.style.color = "blue";
        cell5.style.color = "blue";
        cell6.style.color = "blue";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });


    } else if (cell7.innerHTML == "O" && cell8.innerHTML == "O" && cell9.innerHTML == "O") {

        alert("Congarts, The O Player Won The Game !! ");
        WinnerSound();
        buttonMove.style.cursor = "not-allowed";
        cell7.style.color = "blue";
        cell8.style.color = "blue";
        cell9.style.color = "blue";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });

        // End Rows

    } else if (cell1.innerHTML == "O" && cell4.innerHTML == "O" && cell7.innerHTML == "O") { // Checks Columns 

        alert("Congarts, The O Player Won The Game !! ");
        WinnerSound();
        buttonMove.style.cursor = "not-allowed";
        cell1.style.color = "blue";
        cell4.style.color = "blue";
        cell7.style.color = "blue";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });


    } else if (cell2.innerHTML == "O" && cell5.innerHTML == "O" && cell8.innerHTML == "O") {
        alert("Congarts, The O Player Won The Game !! ");
        WinnerSound();
        buttonMove.style.cursor = "not-allowed";
        cell2.style.color = "blue";
        cell5.style.color = "blue";
        cell8.style.color = "blue";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });



    } else if (cell3.innerHTML == "O" && cell6.innerHTML == "O" && cell9.innerHTML == "O") {
        alert("Congarts, The O Player Won The Game !! ");
        WinnerSound();
        buttonMove.style.cursor = "not-allowed";
        cell3.style.color = "blue";
        cell6.style.color = "blue";
        cell9.style.color = "blue";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });

        // End Columns 

    } else if (cell1.innerHTML == "O" && cell5.innerHTML == "O" && cell9.innerHTML == "O") { // Checks Diognals 
        alert("Congarts, The O Player Won The Game !! ");
        WinnerSound();
        buttonMove.style.cursor = "not-allowed";
        cell1.style.color = "blue";
        cell5.style.color = "blue";
        cell9.style.color = "blue";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });


    } else if (cell3.innerHTML == "O" && cell5.innerHTML == "O" && cell7.innerHTML == "O") {
        alert("Congarts, The O Player Won The Game !! ");
        WinnerSound();
        buttonMove.style.cursor = "not-allowed";
        cell3.style.color = "blue";
        cell5.style.color = "blue";
        cell7.style.color = "blue";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });


        // End Diognals
    } else if ("1" != cell1.innerHTML && "2" != cell2.innerHTML && "3" != cell3.innerHTML && "4" != cell4.innerHTML && "5" != cell5.innerHTML && "6" != cell6.innerHTML && "7" != cell7.innerHTML && "8" != cell8.innerHTML && "9" != cell9.innerHTML) {

        alert("Tied Match.. Try Again");


        buttonMove.style.cursor = "not-allowed";

        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });

    } else {

        console.log("Still...");
    }
}


setCells();
displayBoard();