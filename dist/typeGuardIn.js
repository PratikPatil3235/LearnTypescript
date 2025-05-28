"use strict";
function makeSound(voice) {
    if ("bark" in voice) {
        voice.bark();
    }
    else {
        voice.meow();
    }
}
const cat = {
    meow: () => {
        console.log("meow");
    }
};
makeSound(cat);
