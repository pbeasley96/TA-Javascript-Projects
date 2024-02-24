function Ride_Function() {          //Wrote a function using HTML and JavaScript that utilizes a ternary operation using input from the browser//
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short ":"You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride."
}

function Vehicle(Make, Model, Year, Color) {          //    Create a function to display the results of the constructor function within an HTML element//
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodege", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactuerd in " + Erik.Vehicle_Year;
}

function Person(first, last, age, eye){         //Wrote a constructor function that uses the “new” and “this” keywords//
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myUncle = new Person("Jimmy", "Killabrew", 99, "brown");
function this_Function() {
    document.getElementById("New_and_This").innerHTML = 
    "My Great Uncle is " + myUncle.age + ".";
}


function count_Function() {          //Wrote a nested function//
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}