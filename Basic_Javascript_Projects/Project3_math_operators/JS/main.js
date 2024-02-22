function addition_Function() {          //Created a function that returns the result of an addition operation//
    var addition = 2 + 2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {          //Created a function that returns the result of an subtraction operation//
    var subtraction = 5 - 2;
    document.getElementById("subtract").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication () {          //Created a function that returns the result of an multiplication operation//
    var simple_Math = 6 * 8;
    document.getElementById("multiply").innerHTML = "6 x 8 = " + simple_Math
}

function division() {          //Created a function that returns the result of an division operation//
    var simple_Math = 48 / 6;
    document.getElementById("divide").innerHTML = "48 / 6 = " + simple_Math
}

function more_Math() {          //Created a function that returns the result of an operation that multiply, subtract, add and divide numbers all at once//
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and subtracted by 5 equals" + simple_Math;
}

function modulus_Operator() {          //Created a function that returns the result the remainder//
    var simple_Math = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you have a remainder of:" + simple_Math;
}

function negation_Operator() {          //Created a function that returns the result of the negative form of the element//
    var x = 10;
    document.getElementById("negation").innerHTML = -x;
}

var X = 5;         //Created a function that returns the result of The increment operator//
X++;
document.write(X);

var Y = 5.25;          //Created a function that returns the result of The decrement operator//
Y--;
document.write(X);

window.alert(Math.random() * 9001);          //Created a function that displays a random number in between 0 and 9001//