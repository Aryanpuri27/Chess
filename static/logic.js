function iswhite(i, j) {
  if (i >= 0 && i < 8 && j >= 0 && j < 8) {
    if (chessboard[i][j] === chessboard[i][j].toUpperCase()) {
      return true;
    }
  }
  return false;
}
function isBlank(i, j) {
  if (i >= 0 && i < 8 && j >= 0 && j < 8) {
    if (chessboard[i][j] === " ") {
      return true;
    }
  }
  return false;
}
function WhichLogic(i, j) {
  if (chessboard[i][j] === "P") {
    PawnlogicWhite(i, j);
  }
  if (chessboard[i][j] === "p") {
    PawnlogicBlack(i, j);
  }
  if (chessboard[i][j] === "R") {
    RookLogicWhitte(i, j);
  }
  if (chessboard[i][j] === "r") {
    RookLogicBlack(i, j);
  }
  if (chessboard[i][j] === "N") {
    KnightLogicWhite(i, j);
  }
  if (chessboard[i][j] === "n") {
    KnightLogicBlack(i, j);
  }
  if (chessboard[i][j] === "B") {
    bishopLogicWhite(i, j);
  }
  if (chessboard[i][j] === "b") {
    bishopLogicBlack(i, j);
  }
  if (chessboard[i][j] === "q") {
    queenLogicBlack(i, j);
  }
  if (chessboard[i][j] === "Q") {
    queenLogicWhite(i, j);
  }
  if (chessboard[i][j] === "K") {
    KingLogicWhite(i, j);
  }
  if (chessboard[i][j] === "k") {
    KingLogicBlack(i, j);
  }

  markAvailable();
}

function PawnlogicWhite(i, j) {
  if (i === 7) {
    return;
  }
  if (j !== 7 && i !== 7) {
    if (
      chessboard[i + 1][j + 1] !== " " &&
      chessboard[i + 1][j + 1] === chessboard[i + 1][j + 1].toLowerCase()
    ) {
      if (i + 1 <= 7 && j + 1 <= 7) {
        Available.push([i + 1, j + 1]);
      }
    }
  }
  if (j !== 0 && i !== 7) {
    if (
      chessboard[i + 1][j - 1] !== " " &&
      chessboard[i + 1][j - 1] === chessboard[i + 1][j - 1].toLowerCase()
    ) {
      if (i + 1 <= 7 && j - 1 >= 0) {
        Available.push([i + 1, j - 1]);
      }
    }
  }
  if (i === 1 && chessboard[i + 1][j] === " ") {
    Available.push([i + 2, j]);
  }
  if (i + 1 <= 7 && chessboard[i + 1][j] === " ") {
    Available.push([i + 1, j]);
  }
  // markAvailable();
  //   Available = [];
}
function PawnlogicBlack(i, j) {
  if (i === 0) {
    return;
  }
  if (i !== 0 && j !== 0) {
    if (
      chessboard[i - 1][j - 1] !== " " &&
      chessboard[i - 1][j - 1] === chessboard[i - 1][j - 1].toUpperCase()
    ) {
      if (i - 1 >= 0 && j - 1 >= 0) {
        Available.push([i - 1, j - 1]);
      }
    }
  }
  if (i !== 0 && j !== 7) {
    if (
      chessboard[i - 1][j + 1] !== " " &&
      chessboard[i - 1][j + 1] === chessboard[i - 1][j + 1].toUpperCase()
    ) {
      if (i - 1 >= 0 && j + 1 <= 7) {
        Available.push([i - 1, j + 1]);
      }
    }
  }
  if (i === 6 && chessboard[i - 1][j] === " ") {
    Available.push([i - 2, j]);
  }
  if (i - 1 >= 0 && chessboard[i - 1][j] === " ") {
    Available.push([i - 1, j]);
  }
  // markAvailable();
  //   Available = [];
}

function RookLogicWhitte(i, j) {
  let a = i;
  let b = j;
  while (i >= 0 && i < 8) {
    i++;

    if (i >= 0 && i < 8 && j >= 0 && j < 8) {
      // if (chessboard[i][j] === chessboard[i][j].toLowerCase()) {
      if (!iswhite(i, j) && !(chessboard[i][j] === " ")) {
        Available.push([i, j]);
        break;
      }
      // if (chessboard[i][j] === chessboard[i][j].toUpperCase()) {
      if (iswhite(i, j) && !(chessboard[i][j] === " ")) {
        break;
      }
      if (chessboard[i][j] === " ") {
        Available.push([i, j]);
      }
    }
  }
  i = a;
  j = b;
  while (i >= 0 && i < 8) {
    // if (chessboard[i][j] === chessboard[i][j].toLowerCase()) {
    i--;

    if (i >= 0 && i < 8 && j >= 0 && j < 8) {
      if (!iswhite(i, j) && !(chessboard[i][j] === " ")) {
        Available.push([i, j]);
        break;
        // return;
      }
      // if (chessboard[i][j] === chessboard[i][j].toUpperCase()) {
      if (iswhite(i, j) && !(chessboard[i][j] === " ")) {
        // return;
        break;
      }
      if (chessboard[i][j] === " ") {
        Available.push([i, j]);
      }
    }
  }
  i = a;
  j = b;
  while (j >= 0 && j < 8) {
    // if (chessboard[i][j] === chessboard[i][j].toLowerCase()) {
    j--;

    if (i >= 0 && i < 8 && j >= 0 && j < 8) {
      if (!iswhite(i, j) && !(chessboard[i][j] === " ")) {
        Available.push([i, j]);
        break;
        // return;
      }
      // if (chessboard[i][j] === chessboard[i][j].toUpperCase()) {
      if (iswhite(i, j) && !(chessboard[i][j] === " ")) {
        // return;
        break;
      }
      if (chessboard[i][j] === " ") {
        Available.push([i, j]);
      }
    }
  }
  i = a;
  j = b;
  while (j >= 0 && j < 8) {
    // if (chessboard[i][j] === chessboard[i][j].toLowerCase()) {
    j++;

    if (i >= 0 && i < 8 && j >= 0 && j < 8) {
      if (!iswhite(i, j) && !(chessboard[i][j] === " ")) {
        Available.push([i, j]);
        break;
        // return;
      }
      // if (chessboard[i][j] === chessboard[i][j].toUpperCase()) {
      if (iswhite(i, j) && !(chessboard[i][j] === " ")) {
        // return;
        break;
      }
      if (chessboard[i][j] === " ") {
        Available.push([i, j]);
      }
    }
  }
  // markAvailable();
}
function RookLogicBlack(i, j) {
  let a = i;
  let b = j;
  while (i >= 0 && i < 8) {
    i++;

    if (i >= 0 && i < 8 && j >= 0 && j < 8) {
      // if (chessboard[i][j] === chessboard[i][j].toLowerCase()) {
      if (!iswhite(i, j) && !(chessboard[i][j] === " ")) {
        break;
      }
      // if (chessboard[i][j] === chessboard[i][j].toUpperCase()) {
      if (iswhite(i, j) && !(chessboard[i][j] === " ")) {
        Available.push([i, j]);
        break;
      }
      if (chessboard[i][j] === " ") {
        Available.push([i, j]);
      }
    }
  }
  i = a;
  j = b;
  while (i >= 0 && i < 8) {
    // if (chessboard[i][j] === chessboard[i][j].toLowerCase()) {
    i--;

    if (i >= 0 && i < 8 && j >= 0 && j < 8) {
      if (!iswhite(i, j) && !(chessboard[i][j] === " ")) {
        break;
        // return;
      }
      // if (chessboard[i][j] === chessboard[i][j].toUpperCase()) {
      if (iswhite(i, j) && !(chessboard[i][j] === " ")) {
        Available.push([i, j]);
        // return;
        break;
      }
      if (chessboard[i][j] === " ") {
        Available.push([i, j]);
      }
    }
  }
  i = a;
  j = b;
  while (j >= 0 && j < 8) {
    // if (chessboard[i][j] === chessboard[i][j].toLowerCase()) {
    j--;

    if (i >= 0 && i < 8 && j >= 0 && j < 8) {
      if (!iswhite(i, j) && !(chessboard[i][j] === " ")) {
        break;
        // return;
      }
      // if (chessboard[i][j] === chessboard[i][j].toUpperCase()) {
      if (iswhite(i, j) && !(chessboard[i][j] === " ")) {
        Available.push([i, j]);
        // return;
        break;
      }
      if (chessboard[i][j] === " ") {
        Available.push([i, j]);
      }
    }
  }
  i = a;
  j = b;
  while (j >= 0 && j < 8) {
    // if (chessboard[i][j] === chessboard[i][j].toLowerCase()) {
    j++;

    if (i >= 0 && i < 8 && j >= 0 && j < 8) {
      if (!iswhite(i, j) && !(chessboard[i][j] === " ")) {
        break;
        // return;
      }
      // if (chessboard[i][j] === chessboard[i][j].toUpperCase()) {
      if (iswhite(i, j) && !(chessboard[i][j] === " ")) {
        Available.push([i, j]);
        // return;
        break;
      }
      if (chessboard[i][j] === " ") {
        Available.push([i, j]);
      }
    }
  }
  // markAvailable();
}

function KnightLogicWhite(i, j) {
  if (isBlank(i + 2, j + 1) || !iswhite(i + 2, j + 1)) {
    Available.push([i + 2, j + 1]);
  }
  if (isBlank(i + 2, j - 1) || !iswhite(i + 2, j - 1)) {
    Available.push([i + 2, j - 1]);
  }
  if (isBlank(i - 2, j + 1) || !iswhite(i - 2, j + 1)) {
    Available.push([i - 2, j + 1]);
  }
  if (isBlank(i - 2, j - 1) || !iswhite(i - 2, j - 1)) {
    Available.push([i - 2, j - 1]);
  }
  if (isBlank(i + 1, j + 2) || !iswhite(i + 1, j + 2)) {
    Available.push([i + 1, j + 2]);
  }
  if (isBlank(i - 1, j + 2) || !iswhite(i - 1, j + 2)) {
    Available.push([i - 1, j + 2]);
  }
  if (isBlank(i + 1, j - 2) || !iswhite(i + 1, j - 2)) {
    Available.push([i + 1, j - 2]);
  }
  if (isBlank(i - 1, j - 2) || !iswhite(i - 1, j - 2)) {
    Available.push([i - 1, j - 2]);
  }
}
function KnightLogicBlack(i, j) {
  if (isBlank(i + 2, j + 1) || iswhite(i + 2, j + 1)) {
    Available.push([i + 2, j + 1]);
  }
  if (isBlank(i + 2, j - 1) || iswhite(i + 2, j - 1)) {
    Available.push([i + 2, j - 1]);
  }
  if (isBlank(i - 2, j + 1) || iswhite(i - 2, j + 1)) {
    Available.push([i - 2, j + 1]);
  }
  if (isBlank(i - 2, j - 1) || iswhite(i - 2, j - 1)) {
    Available.push([i - 2, j - 1]);
  }
  if (isBlank(i + 1, j + 2) || iswhite(i + 1, j + 2)) {
    Available.push([i + 1, j + 2]);
  }
  if (isBlank(i - 1, j + 2) || iswhite(i - 1, j + 2)) {
    Available.push([i - 1, j + 2]);
  }
  if (isBlank(i + 1, j - 2) || iswhite(i + 1, j - 2)) {
    Available.push([i + 1, j - 2]);
  }
  if (isBlank(i - 1, j - 2) || iswhite(i - 1, j - 2)) {
    Available.push([i - 1, j - 2]);
  }
}

function bishopLogicWhite(i, j) {
  const a = i;
  const b = j;
  while (i >= 0 && i < 8 && j >= 0 && j < 8) {
    i++;
    j++;
    if (iswhite(i, j) && !isBlank(i, j)) {
      break;
    }
    if (!iswhite(i, j) && !isBlank(i, j)) {
      Available.push([i, j]);
      break;
    }
    if (isBlank(i, j)) {
      Available.push([i, j]);
    }
  }
  i = a;
  j = b;
  while (i >= 0 && i < 8 && j >= 0 && j < 8) {
    i++;
    j--;
    if (iswhite(i, j) && !isBlank(i, j)) {
      break;
    }
    if (!iswhite(i, j) && !isBlank(i, j)) {
      Available.push([i, j]);
      break;
    }
    if (isBlank(i, j)) {
      Available.push([i, j]);
    }
  }
  i = a;
  j = b;
  while (i >= 0 && i < 8 && j >= 0 && j < 8) {
    i--;
    j++;
    if (iswhite(i, j) && !isBlank(i, j)) {
      break;
    }
    if (!iswhite(i, j) && !isBlank(i, j)) {
      Available.push([i, j]);
      break;
    }
    if (isBlank(i, j)) {
      Available.push([i, j]);
    }
  }
  i = a;
  j = b;
  while (i >= 0 && i < 8 && j >= 0 && j < 8) {
    i--;
    j--;
    if (iswhite(i, j) && !isBlank(i, j)) {
      break;
    }
    if (!iswhite(i, j) && !isBlank(i, j)) {
      Available.push([i, j]);
      break;
    }
    if (isBlank(i, j)) {
      Available.push([i, j]);
    }
  }
}
function bishopLogicBlack(i, j) {
  const a = i;
  const b = j;
  while (i >= 0 && i < 8 && j >= 0 && j < 8) {
    i++;
    j++;
    if (iswhite(i, j) && !isBlank(i, j)) {
      Available.push([i, j]);
      break;
    }
    if (!iswhite(i, j) && !isBlank(i, j)) {
      break;
    }
    if (isBlank(i, j)) {
      Available.push([i, j]);
    }
  }
  i = a;
  j = b;
  while (i >= 0 && i < 8 && j >= 0 && j < 8) {
    i++;
    j--;
    if (iswhite(i, j) && !isBlank(i, j)) {
      Available.push([i, j]);
      break;
    }
    if (!iswhite(i, j) && !isBlank(i, j)) {
      break;
    }
    if (isBlank(i, j)) {
      Available.push([i, j]);
    }
  }
  i = a;
  j = b;
  while (i >= 0 && i < 8 && j >= 0 && j < 8) {
    i--;
    j++;
    if (iswhite(i, j) && !isBlank(i, j)) {
      Available.push([i, j]);
      break;
    }
    if (!iswhite(i, j) && !isBlank(i, j)) {
      break;
    }
    if (isBlank(i, j)) {
      Available.push([i, j]);
    }
  }
  i = a;
  j = b;
  while (i >= 0 && i < 8 && j >= 0 && j < 8) {
    i--;
    j--;
    if (iswhite(i, j) && !isBlank(i, j)) {
      Available.push([i, j]);
      break;
    }
    if (!iswhite(i, j) && !isBlank(i, j)) {
      break;
    }
    if (isBlank(i, j)) {
      Available.push([i, j]);
    }
  }
}

function queenLogicWhite(i, j) {
  RookLogicWhitte(i, j);
  bishopLogicWhite(i, j);
}

function queenLogicBlack(i, j) {
  RookLogicBlack(i, j);
  bishopLogicBlack(i, j);
}

function king(i, j, k) {
  if (isBlank(i, j)) {
    Available.push([i, j]);
  }
  if (k === "W") {
    if (!isBlank(i, j) && !iswhite(i, j)) {
      Available.push([i, j]);
    }
  } else {
    if (!isBlank(i, j) && iswhite(i, j)) {
      Available.push([i, j]);
    }
  }
}
function KingLogicWhite(i, j) {
  king(i + 1, j + 1, "W");
  king(i + 1, j, "W");
  king(i + 1, j - 1, "W");
  king(i, j + 1, "W");
  king(i, j - 1, "W");
  king(i - 1, j + 1, "W");
  king(i - 1, j - 1, "W");
  king(i - 1, j, "W");
}
function KingLogicBlack(i, j) {
  king(i + 1, j + 1, "B");
  king(i + 1, j, "B");
  king(i + 1, j - 1, "B");
  king(i, j + 1, "B");
  king(i, j - 1, "B");
  king(i - 1, j + 1, "B");
  king(i - 1, j - 1, "B");
  king(i - 1, j, "B");
}
