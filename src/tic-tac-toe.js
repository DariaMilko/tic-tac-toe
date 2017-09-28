class TicTacToe {
    constructor() {
            this.currentPlayer ='x';
            this.field = [
                ['','',''],
                ['','',''],
                ['','','']]
            this.winner=0;
            this.wins=false;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.currentPlayer == "x"){
            this.currentPlayer = "o";
        } 
        else { 
            this.currentPlayer = "x";
        }
        if (this.field[rowIndex][columnIndex]){
            return;
        } 
        else {
            this.field[rowIndex][columnIndex] = this.currentPlayer;
        }
    }

    isFinished() {
        if (this.getWinner || this.isDraw()) {
            return true;
        } 
        else {
            return false;
        }
    }

    getWinner() {
        this.wins=(this.field[0][0]!=null&&(this.field[0][0]==this.field[0][1]==this.field[0][2])||
        (this.field[1][0]!=null&&(this.field[1][0]==this.field[1][1]==this.field[1][2]))||
        (this.field[2][0]!=null&&(this.field[2][0]==this.field[2][1]==this.field[2][2]))||
        (this.field[0][0]!=null&&(this.field[0][0]==this.field[1][1]==this.field[2][2]))||
        (this.field[0][2]!=null&&(this.field[0][2]==this.field[1][1]==this.field[2][0]))||
        (this.field[0][0]!=null&&(this.field[0][0]==this.field[1][0]==this.field[2][0]))||
        (this.field[0][1]!=null&&(this.field[0][1]==this.field[1][1]==this.field[2][1]))||
        (this.field[0][2]!=null&&(this.field[0][2]==this.field[1][2]==this.field[2][2])));   
        return this.wins;
    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j <3; j++) {
                if (this.field[i][j] === null) {
                    return false;
                }
            }
            return true;
        }
    }

    isDraw() {
        if (!this.getWinner && this.noMoreTurns()) {
            return true;
        } 
        else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
