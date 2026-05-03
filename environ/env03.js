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

$("#memoryRecovery").click(function() {

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