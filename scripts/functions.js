function drawSquare(y, x, color){
    
    // cor o
    tetris.fillStyle = color;

    // preencher com essa cor 
    tetris.fillRect(y * SQ, x * SQ, SQ, SQ);

    if(color == defaultColor){
        tetris.strokeStyle = defaultBorder;
    }

    // tamanho
    tetris.strokeRect(x * SQ, y * SQ, SQ, SQ);
}