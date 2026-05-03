let count = 0;

let buttonCreature = {
    name: "Jeffrey",
    species: "Jeffrey",
    favoriteFood: "chicken piccata",
    moods: ["annoyance", "sadness", "joy", "disgust", "anger", "spiteful"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>Jeffrey has thrown up " + count + " times.</p>";
    
    message = message + "<p>My current mood is " + currentMood + ".</p>";
    $("#output").html(message);
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    $("#output").html(message);
    message = message + "<p>I am an " + buttonCreature.species + ".</p>";
    $("#output").html(message);
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});



$("#needy-button")

