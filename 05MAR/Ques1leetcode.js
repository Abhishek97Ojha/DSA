/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    for (let x=0; x < board.length; x++) {
        for (let y=0; y < board[x].length; y++) {
            // console.log(x, y);
            let neighbors = countNeighbors(board, x, y)
            if (board[x][y] == 1 && (neighbors < 2 || neighbors > 3)) board[x][y] = 2;
            else if (board[x][y] == 0 && neighbors == 3) board[x][y] = -1;
        }
    }

    for (let x=0; x < board.length; x++) {
        for (let y=0; y < board[x].length; y++) {
            if (board[x][y] == -1) board[x][y] = 1;
            else if (board[x][y] == 2) board[x][y] = 0;
        }
    }
    return board;
}

const countNeighbors = function(brd, x, y) {
    let count = 0;
    let xmax = brd.length;
    let ymax = brd[0].length;
    for (let pair of [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]]) {
        let i = x+pair[0];
        let j = y+pair[1];
        // console.log(i, j)
        if (0<=i && i <xmax && 0<=j && j <ymax) {
            if (brd[i][j] > 0) count++;
        }
    }
    return count;
}
