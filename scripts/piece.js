class Piece {
  constructor(piece, color) {
    this.piece = piece;
    this.color = color;

    this.pieceN = 0; /* num aleatório entre 0 e 6 (total de peças no skeleton.js) */

    this.activePiece = this.piece[this.pieceN]; // 6[0]

    this.x = 3;
    this.y = -2;
  }

  fill(color) {
    for (
      let linhaAtual = 0;
      linhaAtual < this.activePiece.length;
      linhaAtual++
    ) {
      for (
        let colunaAtual = 0;
        colunaAtual < this.activePiece.length;
        colunaAtual++
      ) {
        if (this.activePiece[linhaAtual][colunaAtual]) {
          desenharQuadrado(this.y + linhaAtual, this.x + colunaAtual, color);
        }
      }
    }
  }

  desenhar() {
    this.fill(this.color);
  }

  naoDesenhar() {
    this.fill(defaultColor);
  }

  moveEsquerda() {
    /* if(!this.) */

  }

  collision(x, y, pecaFutura){
    for (let linhaAtual = 0; linhaAtual < pecaFutura.length; linhaAtual++){
      for( let colunaAtual = 0; colunaAtual < pecaFutura.length, colunaAtual++){
        if(!pecaFutura[linhaAtual][colunaAtual]){
          continue;
        }

        let novoValorX = this.x + linhaAtual + x;
        let novoValorY = this.y + colunaAtual + y;

        if(novoValorX < 0 || novoValorX >= COL || novoValorY > ROW){
          return true;
        }

        if( novoValorY < 0){
          continue;
        }

        if(board[novoValorY][novoValorX] != defaultColor){
          return true;
        }

        return true;

        
      }
    }
  }
}
