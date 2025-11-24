const pianoKeys = [
    { type: "white", name: "C",  audio: "./sounds/28.mp3", code: "KeyZ" },
    { type: "black", name: ["C#", "Db"], audio: "./sounds/29.mp3", code: "KeyS" },
    { type: "white", name: "D",  audio: "./sounds/30.mp3", code: "KeyX" },
    { type: "black", name: ["D#", "Eb"], audio: "./sounds/31.mp3", code: "KeyD" },
    { type: "white", name: "E",  audio: "./sounds/32.mp3", code: "KeyC" },
    { type: "white", name: "F",  audio: "./sounds/33.mp3", code: "KeyV" },
    { type: "black", name: ["F#", "Gb"], audio: "./sounds/34.mp3", code: "KeyG" },
    { type: "white", name: "G",  audio: "./sounds/35.mp3", code: "KeyB" },
    { type: "black", name: ["G#", "Ab"], audio: "./sounds/36.mp3", code: "KeyH" },
    { type: "white", name: "A",  audio: "./sounds/37.mp3", code: "KeyN" },
    { type: "black", name: ["A#", "Bb"], audio: "./sounds/38.mp3", code: "KeyJ" },
    { type: "white", name: "B",  audio: "./sounds/39.mp3", code: "KeyM" },
];

const whiteKeys = document.querySelectorAll('.white-key');
const blackKeys = document.querySelectorAll('.black-key');

let wIndex = 0;
let bIndex = 0;

pianoKeys.forEach((key) => {
    if (key.type === "white") {
        key.elem = whiteKeys[wIndex];
        wIndex++;
    } else {
        key.elem = blackKeys[bIndex];
        bIndex++;
    }

    key.aud = new Audio(key.audio);
});

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    const pressedKey = pianoKeys.find(k => k.code === e.code);
    if (!pressedKey) return;

    pressedKey.aud.currentTime = 0;
    pressedKey.aud.play();

    pressedKey.elem.classList.add('active');
});

document.addEventListener('keyup', (e) => {
    const releasedKey = pianoKeys.find(k => k.code === e.code);
    if (!releasedKey) return;

    releasedKey.elem.classList.remove('active');
});
