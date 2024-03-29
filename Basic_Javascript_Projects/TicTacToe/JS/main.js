let activePlayer = 'X';   //This variable keeps track of whose turn it is.//
let seletedSquares = [];   //This is used to determine win conditions.//

function placeX0r0(squareNumber) {   //This function is used is for placing an X or O in the squares.//
    if (!seletedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {   //Depending what activePlayer is equal to, the image file is placed in HTML.//
            select.style.backgroundImage = 'url("Images/X.jpg")';
        } else {
            select.style.backgroundImage = 'url("Images/O.jpg")';
        }
        seletedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        audio('./Media/place.mp3')
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }
    function computersTurn() {   //This function results in squares being chosen by the computer.//
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() *9));
            if(placeX0r0(pickASquare)) {
                placeX0r0(pickASquare);
                success = true;
            };
        }
    }
}

function checkWinConditions() {   //This function parses the selectedSquares array to search for win conditions, drawLine is called to draw a line when conditions are met.//
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    else if (seletedSquares.length >=9) {
        audio('./Media/tie.mp3')
        setTimeout(function () { resetGame(); }, 500);
    }
    function arrayIncludes(squareA, squareB, squareC) {   //This function checks if an array includes 3 strings, it is used to check each win condition.//
        const a = seletedSquares.includes(squareA);
        const b = seletedSquares.includes(squareB);
        const c = seletedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true;}
    }
}

function disableClick() {   //This function makes our body element temporarily unclickable.//
    body.style.pointerEvents = 'none';
    setTimeout(function () {body.style.pointerEvents = 'auto'; }, 1000);
}

function audio(audioURL) {   //This function takes a string parameter of a path set eariler for placement sound, then a audio object is made and pass the path as a parameter.//
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {   //This function utilizes HTML canvas to draw the win lines.//
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    function animateLineDrawing() {   //This function interactions with the canvas with a start and end point based of win conditions.//
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
        }
    }
    function clear() {   //This function clears canvas after win condition is met.//
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./Media/win.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

function resetGame() {   //This function resets  and loops the game when the win or tie condition is met.//
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    seletedSquares = [];
}