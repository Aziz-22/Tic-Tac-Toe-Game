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

    if (cell1.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        cell1.innerText = "O";
        cell1.style.color = "blue";
        sessionStorage.setItem("cell1", "O");
        console.log(sessionStorage.getItem("cell1"));
    }

}

function funCell2() {

    if (cell2.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        cell2.innerText = "O";
        cell2.style.color = "blue";
        sessionStorage.setItem("cell2", "O");
        console.log(sessionStorage.getItem("cell2"));
    }

}

function funCell3() {

    if (cell3.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        cell3.innerText = "O";
        cell3.style.color = "blue";
        sessionStorage.setItem("cell3", "O");
        console.log(sessionStorage.getItem("cell3"));
    }

}

function funCell4() {

    if (cell4.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        cell4.innerText = "O";
        cell4.style.color = "blue";
        sessionStorage.setItem("cell4", "O");
        console.log(sessionStorage.getItem("cell4"));
    }

}

function funCell5() {

    if (cell5.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        cell5.innerText = "O";
        cell5.style.color = "blue";
        sessionStorage.setItem("cell5", "O");
        console.log(sessionStorage.getItem("cell5"));
    }

}

function funCell6() {

    if (cell6.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        cell6.innerText = "O";
        cell6.style.color = "blue";
        sessionStorage.setItem("cell6", "O");
        console.log(sessionStorage.getItem("cell6"));
    }

}

function funCell7() {

    if (cell7.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        cell7.innerText = "O";
        cell7.style.color = "blue";
        sessionStorage.setItem("cell7", "O");
        console.log(sessionStorage.getItem("cell7"));
    }

}

function funCell8() {

    if (cell8.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        cell8.innerText = "O";
        cell8.style.color = "blue";
        sessionStorage.setItem("cell8", "O");
        console.log(sessionStorage.getItem("cell8"));
    }

}

function funCell9() {

    if (cell9.innerText == "X") {
        alert("Choose Another Cell..");
    } else {
        cell9.innerText = "O";
        cell9.style.color = "blue";
        sessionStorage.setItem("cell9", "O");
        console.log(sessionStorage.getItem("cell9"));
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

        buttonMove.style.cursor = "not-allowed";
        $("div.grid-item").on("mouseenter", function() {

            $("div.grid-item").css("cursor", "not-allowed");
        });
        // Repeate These Steps.. 

    } else if (cell4.innerHTML == "X" && cell5.innerHTML == "X" && cell6.innerHTML == "X") {

        alert("Congarts, The X Player Won The Game !! ");
        location.href = "GamePage.html";

    } else if (cell7.innerHTML == "X" && cell8.innerHTML == "X" && cell9.innerHTML == "X") {

        alert("Congarts, The X Player Won The Game !! ");
        location.href = "GamePage.html";
        // End Rows

    } else if (cell1.innerHTML == "X" && cell4.innerHTML == "X" && cell7.innerHTML == "X") { // Checks Columns 

        alert("Congarts, The X Player Won The Game !! ");
        location.href = "GamePage.html";

    } else if (cell2.innerHTML == "X" && cell5.innerHTML == "X" && cell8.innerHTML == "X") {
        alert("Congarts, The X Player Won The Game !! ");
        location.href = "GamePage.html";


    } else if (cell3.innerHTML == "X" && cell6.innerHTML == "X" && cell9.innerHTML == "X") {
        alert("Congarts, The X Player Won The Game !! ");
        location.href = "GamePage.html";
        // End Columns 

    } else if (cell1.innerHTML == "X" && cell5.innerHTML == "X" && cell8.innerHTML == "X") { // Checks Diognals 
        alert("Congarts, The X Player Won The Game !! ");
        location.href = "GamePage.html";

    } else if (cell3.innerHTML == "X" && cell5.innerHTML == "X" && cell7.innerHTML == "X") {
        alert("Congarts, The X Player Won The Game !! ");
        location.href = "GamePage.html";

        // End Diognals
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