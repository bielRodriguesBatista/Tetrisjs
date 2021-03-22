const cvs = document.getElementById('tetris');
const tetris = cvs.getContext('2d')


const ROW = 20;
const COL = 10;
const SQ = 30;
const defaultColor = "#111111";
const defaultBorder = "rgba(255, 255, 255, 0.1)";

let canMove = true;
let speed = 500;
let dropStart = Date.now();
let score = 0;

let board = [];
for (let currentRow = 0; currentRow < ROW; currentRow++){
    board[currentRow] = [];
    for (let currentCol = 0; currentCol < COL; currentCol++){
        board[currentRow][currentCol] = defaultColor
    }
}