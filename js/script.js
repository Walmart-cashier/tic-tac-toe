const gameBoard = (function () {
    const gameBoardObject = {
        gameBoardArray: ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'o'],
    };
    return {
        gameBoardObject,
    }
})();


const createPlayers = (name) => {
    const playersArr = [];
    playersArr.push(name);
    const playersObject = {
        players: playersArr,
    }

}