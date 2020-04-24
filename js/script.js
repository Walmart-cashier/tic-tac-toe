//factory function to create a player
const createPlayers = (name) => {
    const playersArr = [];
    playersArr.push(name);
    const playersObject = {
        players: playersArr,
    }

}

//module to populate gameboard

const populateGameboard = (function () {
    let val=0;
    let idVal=1;
    const gameBoardObject = {
        gameBoardArray: ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'],
    };
    const gameBoardDom = document.querySelector('.gameboard');
    gameBoardObject.gameBoardArray.forEach((item) => {
        const gameBoardValue = document.createElement('div');
        gameBoardValue.id='a'+idVal;
        idVal++;
        gameBoardDom.appendChild(gameBoardValue);
    })
    const boxes=document.querySelectorAll('.gameboard div');
    boxes.forEach((item)=>{
        item.addEventListener('click',function(){
                if((!checkwinner())&&val<9 && !item.textContent)
                {
                    item.textContent=gameBoardObject.gameBoardArray[val];
                    val++;
                   if(checkwinner())
                   {
                       const playerNameDiv=document.querySelector('.playername');
                       playerNameDiv.textContent="----              GAME OVER ----"
                   }
                }
                else
                {

                }
        })
    });
})();

function checkwinner(){
    const one=document.querySelector('#a1');
    const two=document.querySelector('#a2');
    const three=document.querySelector('#a3');
    const four=document.querySelector('#a4');
    const five=document.querySelector('#a5');
    const six=document.querySelector('#a6');
    const seven=document.querySelector('#a7');
    const eight=document.querySelector('#a8');
    const nine=document.querySelector('#a9');
    
    // return (((one.textContent&&two.textContent&&three.textContent)=="x"||"o")||((four.textContent&&five.textContent&&six.textContent)=="x"||"o")||((seven.textContent&&eight.textContent&&nine.textContent)=="x"||"o")||((one.textContent&&four.textContent&&seven.textContent)=="x"||"o")||((two.textContent&&five.textContent&&eight.textContent)=="x"||"o")||((three.textContent&&six.textContent&&nine.textContent)=="x"||"o")||((seven.textContent&&five.textContent&&three.textContent)=="x"||"o")||((one.textContent&&five.textContent&&nine.textContent)=="x"||"o"))

    return (one.textContent=="x"&&two.textContent=="x"&&three.textContent=="x"||one.textContent=="o"&&two.textContent=="o"&&three.textContent=="o")||(four.textContent=="x"&&five.textContent=="x"&&six.textContent=="x"||four.textContent=="o"&&five.textContent=="o"&&six.textContent=="o")
}





//event listener module for buttons

const buttonEvent = (function () {
    const comButton = document.querySelector('#comButton');
    const playerButton = document.querySelector('#playerButton');

    comButton.addEventListener('click', () => {

    })
    playerButton.addEventListener('click', () => {
        const temp = document.querySelector('form') == null ? false : true;
        if (!temp) {
            const mainDiv = document.querySelector('.main');
            const subDiv = document.createElement('div');
            subDiv.classList.add('subdiv');
            const form = document.createElement('form');
            form.innerHTML = '<label for="player1">Player1</label> <input id="player1" type="text" maxlength="30" required><br><label for="player2">Player 2</label><input id="player2" type="text" maxlength="30" required>';
            subDiv.appendChild(form);
            mainDiv.appendChild(subDiv);
            NameEvent();
        }
    })

})();

//event listener module for player names

const NameEvent = function () {
    const player1 = document.querySelector('#player1');
    const player2 = document.querySelector('#player2');
    player2.addEventListener('change', () => {
        const subDiv = document.querySelector('.subdiv');
        subDiv.innerHTML = " ";
        subDiv.innerHTML = '<div class="playername"><p class="playername1">Player1</p><p class="playername2">Player2</p></div>';
        const playerName1 = document.querySelector('.playername1');
        const playerName2 = document.querySelector('.playername2');
        playerName1.textContent = player1.value;
        playerName2.textContent = player2.value;
    })
};