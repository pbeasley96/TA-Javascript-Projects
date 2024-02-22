function my_Dictionary() {     //Wrote a dictionary with a function that outputs a key-value pair into an HTML element//
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "German Shepherd",
        Age: 2,
        Sound: "Woof!"
    };
    delete Animal.Breed;     //Added a delete statement that removes the key before its value is displayed//
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}