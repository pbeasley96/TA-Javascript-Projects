function My_First_Function() {     //Write a function that includes assigning two variables and utilizes the document.getElementById method//
    var A = "Good Morning!";
    var B = "How are you today?";
    document.getElementById("Button_Text").innerHTML = A + B;
}

function myFunction () {     //Utilized the += operator to concatenate a string.//
    var sentence = "I am learning";
    sentence += " a lot from the Tech Academy Boot Camp.";
    document.getElementById("Concatenate").innerHTML = sentence;
}