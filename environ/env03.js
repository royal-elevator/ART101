let environmentTitle = "Death but Life";
let environmentElements = ["darkness", "scythe", "axe"];
let count = 0;

let mainEntity = {
    name: "Death",
    species: "Reaper",
    moods: ["empty", "watching", "waiting", "remembering"],
    heart: "not beating",
    soul: "lost",
    memories: "yet to be rediscovered"
};

$("#memoryRecovery").click(function () {

    count++;

    let arrayPosition = (count - 1) % mainEntity.moods.length;
    let currentMood = mainEntity.moods[arrayPosition];

    let memoriesList = [
        "a forgotten childhood",
        "a lost name",
        "a broken promise",
        "a fading face"
    ];

    let memory = memoriesList[(count - 1) % memoriesList.length];

    let message = "<p>Memories recovered: " + count + ".</p>";

    message += "<p>My heart is " + mainEntity.heart + ".</p>";
    message += "<p>My name is " + mainEntity.name + ".</p>";
    message += "<p>I am a " + mainEntity.species + ".</p>";
    message += "<p>My soul is " + mainEntity.soul + ".</p>";
    message += "<p>My mood is " + currentMood + ".</p>";
    message += "<p>Recovered memory: " + memory + "</p>";


    $("#output").html(message);

    console.log(count);
    console.log(currentMood);
});

function askAge() {
    let userAge = Number(prompt("How old were you when you died?"));

    if (userAge > 50) {
        $("#output").html("How unfortunate. Rest easy.");
        $("body").css("background-color", "black");
    }
    else {
        $("#output").html("So young..");
        $("body").css("background-color", "rgb(32, 48, 74)");
    }
}

$("#age-button").click(function () {
    askAge();
});

$("#memoryRecovery").click(function () {
    $("#output").html("Your memories begin to return...");
});
