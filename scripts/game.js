const cvs = document.getElementById('tetris');
const tetris2D = cvs.getContext('2d')


const ROW = 20;
const COL = 10;
const SQ = 30;
const defaultColor = "#111111";
const defaultBorder = "rgba(255, 255, 255, 0.1)";

let canMove = true;
let speed = 500;
let dropStart = Date.now();
let score = 0;

let ocultarPeça = []

for (let linha = 0; linha < ROW; linha++){
    ocultarPeça[linha] = []
    for (let coluna = 0; coluna < COL; coluna++){
        ocultarPeça[linha][coluna] = defaultColor
    }
}

desenharBorda()