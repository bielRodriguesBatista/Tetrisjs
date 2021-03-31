function desenharBorda() {
   for (let linha = 0; linha < ROW; linha++){
       for (let coluna = 0; coluna < COL; coluna++){
           const corQuadrado = ocultarPeça[linha][coluna]
           desenharQuadrado(linha, coluna, corQuadrado)
           
       }
   }
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