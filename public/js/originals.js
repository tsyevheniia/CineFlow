const user = localStorage.getItem("actualUser");

if (!user) {
    window.location.href = "index.html";
} else {
    document.body.style.display = "block";
}

const btnLogOut = document.getElementById("logOutBtn");
btnLogOut.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("actualUser");
    window.location.href = "index.html";
});

const videoSrc = localStorage.getItem("localVideoSrc");
const videoContainer = document.getElementById("localVideoWrapper");

if (!videoSrc) {
    videoContainer.innerHTML = "<p>Brak dostępnego wideo.</p>";
} else {
    showLocalVideo(videoSrc);
}

function showLocalVideo(src) {
    videoContainer.innerHTML = "";

    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = false;
    video.allowFullscreen = true;

    videoContainer.appendChild(video);
}