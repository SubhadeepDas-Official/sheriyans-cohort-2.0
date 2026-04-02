let div = document.querySelector("#file");
let input = document.querySelector("input");
const preview = document.getElementById("preview");

div.addEventListener("click", function () {
    input.click();
});

input.addEventListener("change", function (e) {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    console.log(selectedFile.name);
    div.textContent = selectedFile.name;
    
    //display
    preview.innerHTML = "";

    const fileURL = URL.createObjectURL(selectedFile);

    const extension = selectedFile.name.toLowerCase().split(".").pop();

    const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    const videoExtensions = ["mp4", "webm", "ogg", "mov"];
    const audioExtensions = ["mp3", "wav", "ogg"];

    if (imageExtensions.includes(extension)) {
        const img = document.createElement("img");
        img.src = fileURL;
        img.style.maxWidth = "400px";
        preview.appendChild(img);

    } else if (videoExtensions.includes(extension)) {
        const video = document.createElement("video");
        video.src = fileURL;
        video.controls = true;
        video.style.maxWidth = "100%";
        preview.appendChild(video);

    } else if (audioExtensions.includes(extension)) {
        const audio = document.createElement("audio");
        audio.src = fileURL;
        audio.controls = true;
        preview.appendChild(audio);

    } else {
        preview.textContent = "Unsupported file type";
    }
});