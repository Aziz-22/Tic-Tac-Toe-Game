console.log(" ===> O Player <=== ");

//sessionStorage.clear();

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

let backgroundSound = document.getElementById("myAudio1");

function playBackSound() {

    backgroundSound.play();
}

function muteBackSound() {

    backgroundSound.pause();
}

let clickSound = document.getElementById("myAudio");

function playAudio() { // This Function Play An Audio When The User Clicks On A Cell.
    clickSound.play();

}

let WinnerSound = document.getElementById("myAudio2");

function playAudio1() { // This Function Play An Audio When O Got Won The Game
    WinnerSound.play();

}

function setCells() {

    // seesionStorage.setItem -> It Allows You To Save Your Data As Temporary, So You Can Transfer Your Data Between Your Website's Pages.
    console.log("I am In Set Cells");
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



function funCell1() {

    if (cell1.innerText == "X" || cell1.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell1.innerText = "O";
        cell1.style.color = "blue";
        sessionStorage.setItem("cell1", "O");
        cells.css("pointerEvents", "none");

    }

}

function funCell2() {

    if (cell2.innerText == "X" || cell2.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell2.innerText = "O";
        cell2.style.color = "blue";
        sessionStorage.setItem("cell2", "O");
        cells.css("pointerEvents", "none");

    }

}

function funCell3() {

    if (cell3.innerText == "X" || cell3.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell3.innerText = "O";
        cell3.style.color = "blue";
        sessionStorage.setItem("cell3", "O");
        cells.css("pointerEvents", "none");
        // console.log(sessionStorage.getItem("cell3"));
    }

}

function funCell4() {

    if (cell4.innerText == "X" || cell4.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell4.innerText = "O";
        cell4.style.color = "blue";
        sessionStorage.setItem("cell4", "O");
        cells.css("pointerEvents", "none");
        // console.log(sessionStorage.getItem("cell4"));
    }

}

function funCell5() {

    if (cell5.innerText == "X" || cell5.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell5.innerText = "O";
        cell5.style.color = "blue";
        sessionStorage.setItem("cell5", "O");
        cells.css("pointerEvents", "none");
        // console.log(sessionStorage.getItem("cell5"));
    }

}

function funCell6() {

    if (cell6.innerText == "X" || cell6.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell6.innerText = "O";
        cell6.style.color = "blue";
        sessionStorage.setItem("cell6", "O");
        cells.css("pointerEvents", "none");
        // console.log(sessionStorage.getItem("cell6"));
    }

}

function funCell7() {

    if (cell7.innerText == "X" || cell7.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell7.innerText = "O";
        cell7.style.color = "blue";
        sessionStorage.setItem("cell7", "O");
        cells.css("pointerEvents", "none");
        // console.log(sessionStorage.getItem("cell7"));
    }

}

function funCell8() {

    if (cell8.innerText == "X" || cell8.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell8.innerText = "O";
        cell8.style.color = "blue";
        sessionStorage.setItem("cell8", "O");
        cells.css("pointerEvents", "none");
        // console.log(sessionStorage.getItem("cell8"));
    }

}

function funCell9() {

    if (cell9.innerText == "X" || cell9.innerText == "O") {
        alert("Choose Another Cell..");
    } else {
        playAudio();
        cell9.innerText = "O";
        cell9.style.color = "blue";
        sessionStorage.setItem("cell9", "O");
        cells.css("pointerEvents", "none");
        // console.log(sessionStorage.getItem("cell9"));
    }

}


function displayBoard() {



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
    //console.log(cell1.innerHTML, cell2.innerText, cell3.innerText);

}



function checkWinner() {



    // Check Rows 
    if (cell1.innerHTML == "X" && cell2.innerHTML == "X" && cell3.innerHTML == "X") {

        alert("Congarts, The X Player Won The Game !! ");

        playAudio1()
        buttonMove.style.cursor = "not-allowed";
        cell1.style.color = "red";
        cell2.style.color = "red";
        cell3.style.color = "red";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });
        // Repeate These Steps.. 

    } else if (cell4.innerHTML == "X" && cell5.innerHTML == "X" && cell6.innerHTML == "X") {

        alert("Congarts, The X Player Won The Game !! ");
        playAudio1()
        buttonMove.style.cursor = "not-allowed";
        cell4.style.color = "red";
        cell5.style.color = "red";
        cell6.style.color = "red";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });


    } else if (cell7.innerHTML == "X" && cell8.innerHTML == "X" && cell9.innerHTML == "X") {

        alert("Congarts, The X Player Won The Game !! ");
        playAudio1()
        buttonMove.style.cursor = "not-allowed";
        cell7.style.color = "red";
        cell8.style.color = "red";
        cell9.style.color = "red";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });
        // End Rows

    } else if (cell1.innerHTML == "X" && cell4.innerHTML == "X" && cell7.innerHTML == "X") { // Checks Columns 

        alert("Congarts, The X Player Won The Game !! ");
        playAudio1()
        buttonMove.style.cursor = "not-allowed";
        cell1.style.color = "red";
        cell4.style.color = "red";
        cell7.style.color = "red";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });

    } else if (cell2.innerHTML == "X" && cell5.innerHTML == "X" && cell8.innerHTML == "X") {
        alert("Congarts, The X Player Won The Game !! ");
        playAudio1()
        buttonMove.style.cursor = "not-allowed";
        cell2.style.color = "red";
        cell5.style.color = "red";
        cell8.style.color = "red";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });


    } else if (cell3.innerHTML == "X" && cell6.innerHTML == "X" && cell9.innerHTML == "X") {
        alert("Congarts, The X Player Won The Game !! ");
        playAudio1()
        buttonMove.style.cursor = "not-allowed";
        cell3.style.color = "red";
        cell6.style.color = "red";
        cell9.style.color = "red";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });
        // End Columns 

    } else if (cell1.innerHTML == "X" && cell5.innerHTML == "X" && cell9.innerHTML == "X") { // Checks Diognals 
        alert("Congarts, The X Player Won The Game !! ");
        playAudio1()
        buttonMove.style.cursor = "not-allowed";
        cell1.style.color = "red";
        cell5.style.color = "red";
        cell9.style.color = "red";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });
    } else if (cell3.innerHTML == "X" && cell5.innerHTML == "X" && cell7.innerHTML == "X") {
        alert("Congarts, The X Player Won The Game !! ");
        playAudio1()
        buttonMove.style.cursor = "not-allowed";
        cell3.style.color = "red";
        cell5.style.color = "red";
        cell7.style.color = "red";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });

        // End Diognals
    } else if ("1" != cell1.innerHTML && "2" != cell2.innerHTML && "3" != cell3.innerHTML && "4" != cell4.innerHTML && "5" != cell5.innerHTML && "6" != cell6.innerHTML && "7" != cell7.innerHTML && "8" != cell8.innerHTML && "9" != cell9.innerHTML) {

        alert("Tied Match.. Try Again");
        //location.href = "GamePage.html";
        buttonMove.style.cursor = "not-allowed";

        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });

    } else {

        console.log("Still...");
    }

}

function reStart() { // When The User Clicks The Restart Button, It Will Make A New Game


    //sessionStorage.clear();
    setCells();
    window.location.reload();


}


sessionStorage.setItem("Count", "1");

displayBoard();