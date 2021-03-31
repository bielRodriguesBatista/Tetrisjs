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
    if(!this.collision(-1, 0, this.activePiece)){
      this.naoDesenhar();
      this.x--;
      this.desenhar();
    }

  }

  colidir(x, y, peçaDaFuncção) {
    for (let linha = 0; linha < this.activePiece.length; linha++){
      for (let coluna = 0; coluna < this.activePiece.length; coluna++){
        if(!peçaDaFuncção[linha][coluna]){
          continue;
        }

        let novaLinha = this.x + coluna + x;
        let novaColuna = this.y + linha + y;

        if(novaLinha < 0 || novaLinha >= COL || novaColuna >= ROW){
          return true;
        }

        if(novaColuna < 0){
          continue;
        }

        if(ocultarPeça[novaLinha][novaColuna] != defaultColor){
          return true;
        }
      }
    }
    return true;
  }
}
