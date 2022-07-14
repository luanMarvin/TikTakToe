tableID = [
    A1 = 0,
    A2 = 0,
    A3 = 0,
    B1 = 0,
    B2 = 0,
    B3 = 0,
    C1 = 0,
    C2 = 0,
    C3 = 0,
]
winner = 0
turn = 1
actualTurn = document.getElementById("turnNow");
xSimbol = actualTurn.src;
actualTurn.src = "src/circle.png";
oSimbol = actualTurn.src
emptyCase = document.getElementById("imgA1").src;
startSimbol = Math.random();
if(startSimbol > 0.5){
    actualTurn.src = xSimbol;
}

var change = (location, locationID) => {
    local = document.getElementById(`img${location}`);
    if(local.src != xSimbol && local.src != oSimbol && winner == 0){
        switch(actualTurn.src){
            case xSimbol:
                local.src = xSimbol;
                tableID[locationID] = 1;
                actualTurn.src = oSimbol;
                victoryChecker();
                turn++;   
                if(turn == 10){
                    document.getElementById('nextTurnText').innerHTML = "DRAW";
                    actualTurn.src = './src/empty.png'
                }
            break;
            case oSimbol:
                local.src = oSimbol;
                tableID[locationID] = -1;
                actualTurn.src = xSimbol;
                victoryChecker();
                turn++;   
                if(turn == 10){
                    document.getElementById('nextTurnText').innerHTML = "DRAW";
                    actualTurn.src = './src/empty.png'
                }
            break;
            }
    }
}

var vsPlayerClicked = () => {
    document.getElementById("buttonPlayer").disabled = true;
    document.getElementById("buttonCPU").disabled = false;
}
var vsCPUClicked = () => {
    document.getElementById("buttonCPU").disabled = true;
    document.getElementById("buttonPlayer").disabled = false;
}

var victoryChecker = () => {
    if( (tableID[0] + tableID[1] + tableID[2]) == 3 || (tableID[3] + tableID[4] + tableID[5]) == 3 ||
        (tableID[6] + tableID[7] + tableID[8]) == 3 || (tableID[0] + tableID[3] + tableID[6]) == 3 ||
        (tableID[1] + tableID[4] + tableID[7]) == 3 || (tableID[2] + tableID[5] + tableID[8]) == 3 ||
        (tableID[0] + tableID[4] + tableID[9]) == 3 || (tableID[2] + tableID[4] + tableID[6]) == 3){
        document.getElementById('nextTurnText').innerHTML = "WINNER";
        winner = 1
        actualTurn.src = xSimbol;
    } else 
    if( (tableID[0] + tableID[1] + tableID[2]) == -3 || (tableID[3] + tableID[4] + tableID[5]) == -3 ||
    (tableID[6] + tableID[7] + tableID[8]) == -3 || (tableID[0] + tableID[3] + tableID[6]) == -3 ||
    (tableID[1] + tableID[4] + tableID[7]) == -3 || (tableID[2] + tableID[5] + tableID[8]) == -3 ||
    (tableID[0] + tableID[4] + tableID[9]) == -3 || (tableID[2] + tableID[4] + tableID[6]) == -3) {
        document.getElementById('nextTurnText').innerHTML = "WINNER";
        winner = -1
        actualTurn.src = oSimbol;
    }
}