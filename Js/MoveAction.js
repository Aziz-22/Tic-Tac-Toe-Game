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

let i = 0;
let flag = false;

// I wanna Check The boad if it is empty, I will go to setCells, Otherwise Go To Display


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {

    console.log("Page Is Reloading");
    setCells();
    flag = true;
}
// else {

//     console.log("Nothing");
//     setCells();
//     flag = true;
// }




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
// setCells();

// if(board not empyt){

//     displayBoard();
// }

function reStart() {

    sessionStorage.removeItem("cell1");
    alert("HHHH");
    //console.log("I am In Restart Function")
    sessionStorage.clear();
    setCells();

}

function displayBoard() {
    console.log("I'm In DIsplay Function");


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

}

if (flag == false) {

    console.log("Flag False")

    displayBoard();
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