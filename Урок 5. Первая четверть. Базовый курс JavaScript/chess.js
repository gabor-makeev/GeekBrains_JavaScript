function chess() {

    let chessBoard = {
        boardStyle: {
            width: '400px',
            height: `400px`,
            display: 'flex',
            flexWrap: 'wrap',
        },
        square: {
            color: 'white',
            width: `${(1/9) * 100}%`,
            height: `${(1/9) * 100}%`,
            outline: '1px solid black',
        },
        layoutLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        pieces: ['Л', 'К', 'С', 'Ф', 'Кр', 'С', 'К', 'Л', 'П'],
        switchSquareColor() {
            if (this.square.color === 'white')
                this.square.color = 'black';
            else
                this.square.color = 'white';
        },
        generateSquare(background, width, height, outline, content) {
            generatedBoard += `<div style="background-color: ${background}; width: ${width}; height: ${height}; outline: ${outline}; display: flex; align-items: center; justify-content: center; color: saddlebrown">${content}</div>`;
        }
    }

    let board = document.querySelector('.chess-board');
    for (const prop in chessBoard.boardStyle)
        board.style[prop] = chessBoard.boardStyle[prop];

    let generatedBoard = '';
    for (let i = 9; i > 0; i--) {
        if (i > 1)
            chessBoard.generateSquare('transparent', chessBoard.square.width, chessBoard.square.height, 'none', `${i - 1}`);
        else
            chessBoard.generateSquare('transparent', chessBoard.square.width, chessBoard.square.height, 'none', ``);
        for (let j = 0; j < 8; j++) {
            if (i > 1) {
                switch (i) {
                    case 9:
                    case 2:
                        chessBoard.generateSquare(chessBoard.square.color, chessBoard.square.width, chessBoard.square.height, chessBoard.square.outline, `${chessBoard.pieces[j]}`);
                        chessBoard.switchSquareColor();
                        break;
                    case 8:
                    case 3:
                        chessBoard.generateSquare(chessBoard.square.color, chessBoard.square.width, chessBoard.square.height, chessBoard.square.outline, `${chessBoard.pieces[8]}`);
                        chessBoard.switchSquareColor();
                        break;
                    default:
                        chessBoard.generateSquare(chessBoard.square.color, chessBoard.square.width, chessBoard.square.height, chessBoard.square.outline, ``);
                        chessBoard.switchSquareColor();
                }
            }
            else
                chessBoard.generateSquare('transparent', chessBoard.square.width, chessBoard.square.height, 'none', `${chessBoard.layoutLetters[j]}`);
        }
        chessBoard.switchSquareColor();
    }

    board.innerHTML = generatedBoard;
    return board;
}

chess();