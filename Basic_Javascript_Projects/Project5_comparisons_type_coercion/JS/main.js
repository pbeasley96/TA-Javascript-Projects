document.write(typeof"Word");          //Used the “document.write()” method and “type of” operator to display the data type of a variable//

document.write("<br>");

document.write(typeof 5);

document.write("<br>");

document.write("10" + 5);          //Used the “document.write()” method and and utilized type coercion//


function my_Function() {          //Utilized JavaScript to make the browser display NaN, Utilize the isNaN() function to make the browser display “true" and "false"//
    document.getElementById("Test").innerHTML = 0/0;
    document.getElementById("Test").innerHTML = isNaN('This is a string');
    document.getElementById("Test").innerHTML = isNaN('007');
}

function positive(){          //Used the document.getElementById() method and wrote a large enough number and negative number to display “Infinity” and “-Infinity”//
    document.getElementById("infinity").innerHTML = 2E310;
}

function negative(){
    document.getElementById("-infinity").innerHTML = -3E310;
}

function greater(){          //Used Boolean Logic to display true and false//
    document.getElementById("true").innerHTML = (10 > 2);
}

function lessthan(){
    document.getElementById("false").innerHTML = (10 < 2);
}

console.log(2 + 2);          //Utilized the Console Log Method to display data in the console within the browser//

document.write("<br>");

console.log(20 < 15)


document.write(10 == 10);          //Used the "==" to check whether the data on the left side of the symbol is equal to the data on the right side. The answer to this comparison is an answer of “true” or “false”//

document.write("<br>");

document.write(10 == 20);

document.write("<br>");

X = 10;          //Used the "===" symbol to check whether the data on the left side of the symbol is equal to the data on the right side and that it is the same type of data as that on the right//
Y = 10;
document.write(X === Y)

document.write("<br>");

X = 90;
Y = 80;
document.write(X === Y)

document.write("<br>");

A = "Lakers";
B = "Warriors";
document.write(A === B);

document.write("<br>");

c = 90;
d = "90";
document.write(c === d);

document.write("<br>");

document.write(5 > 2 && 10 > 4);          //Used the AND and OR operators for a return of true or false//

document.write("<br>");

document.write(5 > 20 && 20 > 4);

document.write("<br>");

document.write(5 > 10 || 10 > 4);

document.write("<br>");

document.write(5 > 10 || 10 > 20)

function not_Function() {          //Ultilized the !Not operator for a return of false//
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function negative_Function() {          //Ultilized the !Not operator for a return of true//
    document.getElementById("Double").innerHTML = !(5 > 10)
}