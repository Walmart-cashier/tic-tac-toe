//module with gameboardobject and its values
"use strict"
const gameBoard = (function () {
    const gameBoardObject = {
        gameBoardArray: ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'o'],
    };
    return {
        gameBoardObject,
    }
})();

//factory function to create a player
const createPlayers = (name) => {
    const playersArr = [];
    playersArr.push(name);
    const playersObject = {
        players: playersArr,
    }

}


//module to populate gameboard

const populateGameboard=(function(){
    const gameBoardDom=document.querySelector('.gameboard');
    const gameBoardValues=gameBoard.gameBoardObject.gameBoardArray;
    gameBoardValues.forEach((item)=>{
        const gameBoardValue=document.createElement('div');
        gameBoardValue.textContent=item;
        gameBoardDom.appendChild(gameBoardValue);
    })
})();














