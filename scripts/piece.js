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
      let currentRow = 0;
      currentRow <  /*no caso seria um num aletório entre 0 e 6 + 0*/ this.activePiece.length;
      currentRow++
    ) {
      for (
        let currentCol = 0;
        currentCol < this.activePiece.length;
        currentCol++
      ) {
        if (this.activePiece[currentRow][currentCol]) {
          drawSquare(this.y + currentRow, this.x + currentCol, color);
          //  -2    +   6  = 4  * 30 = y120  | 2 +  5 = 7 * 30 = x210
        }
      }
    }
  }
}

Piece.fill();
