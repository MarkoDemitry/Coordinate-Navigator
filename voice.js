let lastVoiceTime = 0;

let lastDirection = "";

let lastSpokenDistance = 9999;

/* --------------------------
   Speak Function
---------------------------*/

function speak(text){

    const now = Date.now();

    /* Prevent Spam */

    if(now - lastVoiceTime < 3500){

        return;

    }

    lastVoiceTime = now;

    speechSynthesis.cancel();

    const utterance =

        new SpeechSynthesisUtterance(
            text
        );

    utterance.lang = "en-US";

    utterance.rate = 0.95;

    utterance.pitch = 1;

    utterance.volume = 1;

    speechSynthesis.speak(
        utterance
    );

}

/* --------------------------
   Voice Navigation
---------------------------*/

function voiceDirection(angle){

    let direction = "";

    /* Forward */

    if(
        angle > -15 &&
        angle < 15
    ){

        direction =
            "Move forward";

    }

    /* Slight Right */

    else if(
        angle >= 15 &&
        angle < 45
    ){

        direction =
            "Slightly right";

    }

    /* Right */

    else if(
        angle >= 45 &&
        angle < 110
    ){

        direction =
            "Turn right";

    }

    /* Turn Around */

    else if(
        angle >= 110
    ){

        direction =
            "Turn around";

    }

    /* Slight Left */

    else if(
        angle <= -15 &&
        angle > -45
    ){

        direction =
            "Slightly left";

    }

    /* Left */

    else if(
        angle <= -45 &&
        angle > -110
    ){

        direction =
            "Turn left";

    }

    /* Turn Around */

    else if(
        angle <= -110
    ){

        direction =
            "Turn around";

    }

    /* Prevent Repeat */

    if(direction !== lastDirection){

        lastDirection = direction;

        speak(direction);

    }

}