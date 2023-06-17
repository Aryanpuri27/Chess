// import boardObj from "./chesslogic";

function printBoard(board) {
  const doc = document.querySelectorAll(".block");
  doc.forEach((el) => {
    el.style.removeProperty("background-image");
  });

  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      if (board[i][j] == "P") {
        let str = String(i) + String(j);

        const block = document.getElementById(boardObj[`#${str}`]);
        block.style.backgroundImage = "url(./img/pngegg.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
        // '<img src="pngegg.png" class="pieces"></img>';
      }
      if (board[i][j] == "R") {
        let str = String(i) + String(j);
        const block = document.getElementById(boardObj[`#${str}`]);
        // block.innerHTML = '<img src="whiteRook.png" class="pieces"></img>';
        block.style.backgroundImage = "url(./img/whiteRook.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
      }
      if (board[i][j] == "N") {
        let str = String(i) + String(j);
        const block = document.getElementById(boardObj[`#${str}`]);
        // block.innerHTML = '<img src="whiteKnight.png" class="pieces"></img>';
        block.style.backgroundImage = "url(./img/whiteKnight.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
      }
      if (board[i][j] == "B") {
        let str = String(i) + String(j);
        const block = document.getElementById(boardObj[`#${str}`]);
        // block.innerHTML = '<img src="whitebishop.png" class="pieces"></img>';
        block.style.backgroundImage = "url(./img/whitebishop.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
      }
      if (board[i][j] == "K") {
        let str = String(i) + String(j);
        const block = document.getElementById(boardObj[`#${str}`]);
        // block.innerHTML = '<img src="whiteKing.png" class="pieces"></img>';
        block.style.backgroundImage = "url(./img/whiteKing.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
      }
      if (board[i][j] == "Q") {
        let str = String(i) + String(j);
        const block = document.getElementById(boardObj[`#${str}`]);
        // block.innerHTML = '<img src="whiteQueen.png" class="pieces"></img>';
        block.style.backgroundImage = "url(./img/whiteQueen.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
      }
      if (board[i][j] == "p") {
        let str = String(i) + String(j);
        const block = document.getElementById(boardObj[`#${str}`]);
        // block.innerHTML = '<img src="blackPawn.png" class="pieces"></img>';
        block.style.backgroundImage = "url(./img/blackPawn.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
      }
      if (board[i][j] == "r") {
        let str = String(i) + String(j);
        const block = document.getElementById(boardObj[`#${str}`]);
        // block.innerHTML = '<img src="blackRook.png" class="pieces"></img>';
        block.style.backgroundImage = "url(./img/blackRook.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
      }
      if (board[i][j] == "n") {
        let str = String(i) + String(j);
        const block = document.getElementById(boardObj[`#${str}`]);
        // block.innerHTML = '<img src="blackKnight.png" class="pieces"></img>';
        block.style.backgroundImage = "url(./img/blackKnight.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
      }
      if (board[i][j] == "b") {
        let str = String(i) + String(j);
        const block = document.getElementById(boardObj[`#${str}`]);
        // block.innerHTML = '<img src="blackbishop.png" class="pieces"></img>';
        block.style.backgroundImage = "url(./img/blackbishop.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
      }
      if (board[i][j] == "k") {
        let str = String(i) + String(j);
        const block = document.getElementById(boardObj[`#${str}`]);
        // block.innerHTML = '<img src="blackKing.png" class="pieces"></img>';
        block.style.backgroundImage = "url(./img/blackKing.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
      }
      if (board[i][j] == "q") {
        let str = String(i) + String(j);
        const block = document.getElementById(boardObj[`#${str}`]);
        // block.innerHTML = '<img src="blackQueen.png" class="pieces"></img>';
        block.style.backgroundImage = "url(./img/blackQueen.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPosition = "center";
        block.style.backgroundRepeat = "no-repeat";
      }
    }
  }
}
