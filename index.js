const battleship = () => {
  let playerOne = {
    name: "",
    shipCount: 0,
    board: [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ]
  };

  let playerTwo = {
    name: "",
    shipCount: 0,
    board: [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ]
  };

  playerOne.name = prompt("Enter your name Player 1!");
  playerTwo.name = prompt("Enter your name Player 2!");

  addShips(playerOne);
  addShips(playerTwo);
  function addShips(s) {
    do {
      let x = Math.floor(Math.random() * 4);
      let y = Math.floor(Math.random() * 4);
      if (s.board[x][y]===0) {
        s.board[x][y] = 1;
        s.shipCount++;
      }
    } while (s.shipCount < 4);
  }

  function gameBoard(g) {
    let x = prompt(`Enter x coordinate number from 0 to 3`);
    let y = prompt(`Enter y coordinate number from 0 to 3`);
    if (g.board[x][y] === 1) {
      alert(`Hit! Good job!`);
      g.board[x][y] = 0;
      g.shipCount--;
      if (g.shipCount === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      alert(`Miss! Try Again!`);
      return false;
    }
  }

  let turns = 1;
  let win = false;
  let winner = "";

  while (!win) {
    if (turns === 1) {
      win = gameBoard(playerOne);
      if (win) {
        winner = playerOne.name;
      }
      turn = 2;
    } else {
      win = gameBoard(playerTwo);
      if (win) {
        winner = playerTwo.name;
      }
      turns = 1;
    }
  };
  return `The winner is ${winner}!`
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
