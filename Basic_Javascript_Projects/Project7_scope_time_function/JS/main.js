var X = 25;          //Assigned a global variable//
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {          //Assigned a local variable//
    var X = 25;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 200);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {          //Wrote a function that includes an if statement//
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {          //Intentionally wrote a function with an error in it and use the console.log() method to debug it within the console in the Chrome Dev Tools//
    Age = document.getElementById("Age");
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {          //Wrote the Time_function() outlined in previous slides//
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon." ;
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}