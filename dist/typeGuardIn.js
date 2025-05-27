function makeSound(voice) {
    if ("bark" in voice) {
        voice.bark();
    }
    else {
        voice.meow();
    }
}
var cat = {
    meow: function () {
        console.log("meow");
    }
};
makeSound(cat);
