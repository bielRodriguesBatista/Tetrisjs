function drawSquare(y, x, color){

    tetris2D.fillStyle = color;

    // preencher com essa cor 
    tetris2D.fillRect(y * SQ, x * SQ, SQ, SQ)


    if(color == defaultColor){
        tetris2D.strokeStyle = defaultBorder
    }
//

    // tamanho
    tetris2D.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

function desenharQuadrado(Y_verti, X_horiz, color){
    tetris2D.fillStyle = color;

    // preencher com essa cor
    tetris2D.fillRect(Y_verti * SQ, X_horiz * SQ, SQ, SQ);

    if(color == defaultColor){
        tetris2D.strokeStyle = defaultBorder
    }

    // tamanho do tetris
    tetris2D.strokeRect(X_horiz * SQ, Y_verti * SQ, SQ, SQ)
}