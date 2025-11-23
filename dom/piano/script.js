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

    // { type: "white", name: "C2", audio: "./sounds/40.mp3" },
    // { type: "black", name: ["C#2", "Db2"], audio: "./sounds/41.mp3" },
    // { type: "white", name: "D2", audio: "./sounds/42.mp3" },
    // { type: "black", name: ["D#2", "Eb2"], audio: "./sounds/43.mp3" },
    // { type: "white", name: "E2", audio: "./sounds/44.mp3" },
    // { type: "white", name: "F2", audio: "./sounds/45.mp3" },
    // { type: "black", name: ["F#2", "Gb2"], audio: "./sounds/46.mp3" },
    // { type: "white", name: "G2", audio: "./sounds/47.mp3" },
    // { type: "black", name: ["G#2", "Ab2"], audio: "./sounds/48.mp3" },
    // { type: "white", name: "A2", audio: "./sounds/49.mp3" },
    // { type: "black", name: ["A#2", "Bb2"], audio: "./sounds/50.mp3" },
    // { type: "white", name: "B2", audio: "./sounds/51.mp3" },
    
    // { type: "white", name: "C3", audio: "./sounds/52.mp3" },
    // { type: "black", name: ["C#3", "Db3"], audio: "./sounds/53.mp3" },
    // { type: "white", name: "D3", audio: "./sounds/54.mp3" },
    // { type: "black", name: ["D#3", "Eb3"], audio: "./sounds/55.mp3" },
    // { type: "white", name: "E3", audio: "./sounds/56.mp3" },
    // { type: "white", name: "F3", audio: "./sounds/57.mp3" },
    // { type: "black", name: ["F#3", "Gb3"], audio: "./sounds/58.mp3" },
    // { type: "white", name: "G3", audio: "./sounds/59.mp3" },
    // { type: "black", name: ["G#3", "Ab3"], audio: "./sounds/60.mp3" },
    // { type: "white", name: "A3", audio: "./sounds/61.mp3" },
    // { type: "black", name: ["A#3", "Bb3"], audio: "./sounds/62.mp3" },
    // { type: "white", name: "B3", audio: "./sounds/63.mp3" },
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
