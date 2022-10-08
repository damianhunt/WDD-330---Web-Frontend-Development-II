const board = document.getElementsByClassName('board');
const block = document.getElementsByClassName('block');
const reset = document.getElementById('reset');


let touchNumber = 0;
for (element of board){
    element.addEventListener('click', drawFigure);
}

function drawFigure(event){
if (event.target.innerHTML == ""){
if (touchNumber == 0 | touchNumber%2 == 0){
event.target.innerHTML = "X";
}
else {
    event.target.innerHTML = "O"; 
    
}
touchNumber += 1;
}
}
function resetBoard(){
    for (everyDiv of block ){
        everyDiv.innerHTML = "";
        touchNumber = 0;
    }
}
reset.addEventListener('click', resetBoard)

//const first = document.querySelector('#parent :nth-child(1)');
//console.log(first); // 👉️ div.child1
    let zero = document.getElementById('block :nth-child(1)').innerHTML
    let one = document.getElementById('block :nth-child(2)').innerHTML
    let two = document.getElementById('block :nth-child(3)').innerHTML
    let three = document.getElementById('block :nth-child(4)').innerHTML
    let four = document.getElementById('block :nth-child(5)').innerHTML
    let five = document.getElementById('block :nth-child(6)').innerHTML
    let six = document.getElementById('block :nth-child(7)').innerHTML
    let seven = document.getElementById('block :nth-child(8)').innerHTML
    let eight = document.getElementById('block :nth-child(9)').innerHTML

    if (zero === 'X' && one === 'X' && two === 'X') {
        setPlayer1Win()
    } else if (zero === 'O' && one === 'O' && two === 'O') {
        setPlayer2Win()
    } else if (zero === 'X' && three === 'X' && six === 'X') {
        setPlayer1Win()
    } else if (zero === 'O' && three === 'O' && six === 'O') {
        setPlayer2Win()
    } else if (three === 'X' && four === 'X' && five === 'X') {
        setPlayer1Win()
    } else if (three === 'O' && four === 'O' && five === 'O') {
        setPlayer2Win()
    } else if (zero === 'X' && four === 'X' && eight === 'X') {
        setPlayer1Win()
    } else if (zero === 'O' && four === 'O' && eight === 'O') {
        setPlayer2Win()
    } else if (two === 'X' && five === 'X' && eight === 'X') {
        setPlayer1Win()
    } else if (two === 'O' && five === 'O' && eight === 'O') {
        setPlayer2Win()
    } else if (one === 'X' && four === 'X' && seven === 'X') {
        setPlayer1Win()
    } else if (one === 'O' && four === 'O' && seven === 'O') {
        setPlayer2Win()
    } else if (two === 'X' && four === 'X' && six === 'X') {
        setPlayer1Win()
    } else if (two === 'O' && four === 'O' && six === 'O') {
        setPlayer2Win()
    } else if (six === 'X' && seven === 'X' && eight === 'X') {
        setPlayer1Win()
    } else if (six === 'O' && seven === 'O' && eight === 'O') {
        setPlayer2Win()
    } else if (zero !== '' && one !== '' && two !== '' && three !== '' && four !== '' && five !== '' && six !== '' && seven !== '' && eight !== '') {
        isGameActive = false;
        statusDisplay.innerHTML = `It's a tie!`;
    }

    console.log("Player 1 Winning: " + player1Win)
    console.log("Player 2 Winning: " + player2Win)