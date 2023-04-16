function chessBoard2(gridSize) {
    let output = "";
    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            output += `${j} `
        }
        output += "\n";
    }
    console.log(output)
}

chessBoard2(8)


function chessBoard(gridSize, templateString = "#") {
    let output = "";
    for (let i = 1; i <= gridSize; i++) {
        for (let x = 1; x <= gridSize; x++) {
            if (i % 2 != 0) {
                x % 2 != 0 ? output += templateString + " " : output += " "
            } else {
                x % 2 != 0 ? output += " " + templateString : output += " "
            }
        }
        output += "\n";
    }
    console.log(output)
}

let x =1
chessBoard(4)
