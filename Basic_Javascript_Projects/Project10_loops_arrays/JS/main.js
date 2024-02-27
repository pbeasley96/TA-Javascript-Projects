function Call_Loop() {     //Wrote a function that utilizes a while loop//
    var Digit = "";
    var X = 1;
    while (X < 12) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Characters = ["Goku", "Naruto", "Ichigo", "Luffy", "Yusuke", "Edward"];     //Wrote a function that utilizes a for loop//
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Characters.length; Y++) {
    Content += Characters[Y] + "<br>";
    }
    document.getElementById("List_of_Characters").innerHTML = Content;
}

function array_Function() {     //Wrote a function that utilizes an array//
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the is " +
        Cat_Picture[2] + ".";
}

function constant_Function() {     //Wrote a function that utilizes the const keyword function//
    const Musical_Instrument = {type:"Guitar", brand:"Fender", color:"Black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1000";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

document.write("<br>")

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X); 
}
document.write("<br>" + X);

let car = {     //Created an object using the “let” keyword//
    make: "Chevorlet ",
    model: "Camaro ",
    year: "2024 ",
    color: "White ",
    descripton: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_Object").innerHTML = car.descripton();