type Dog = {
    bark: () => void
};

type Cat = {
    meow:()=>void
}

function makeSound(voice: Dog | Cat):void {
    if ("bark" in voice) {
        voice.bark();
    } else {
        voice.meow();
    }
}
const cat: Cat = {
    meow: () => {
        console.log("meow")
    }
}
makeSound(cat);