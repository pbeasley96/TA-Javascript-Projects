function full_Sentence() {          //Wrote a function to utilize the concat() method.//
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {           //Wrote a function to utilize the slice() method.//
    var sentence = "All work and no play makes Phillip a grumpy boy."
    var Section = sentence.slice(27,34);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {           //Wrote a function to utilize the toString() method.//
    var X = 200;
    document.getElementById("Numbers").innerHTML = X.toString();
}

function precision_Method() {          //Wrote a function to utilize the toPrecision() method.//
    var A = 13579.246810121416;
    document.getElementById("Precision").innerHTML = A.toPrecision(10);
}