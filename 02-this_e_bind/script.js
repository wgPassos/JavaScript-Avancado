function speakGeneric () {
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
    }

let cat = {
    sound: "MIauu",
    speak: speakGeneric
    }

// cat.speak()

let bindedFunction = speakGeneric.bind(dog)

bindedFunction();