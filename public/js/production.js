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

document.querySelectorAll(".carousel").forEach((carousel) => {
    new bootstrap.Carousel(carousel, {
        interval: 5000,
        pause: false,
        ride: "carousel",
    });
});

document.addEventListener("click", (e) => {
    const wrapper = e.target.closest(".img-wrapper");
    if (!wrapper) return;

    const videoSrc = wrapper.dataset.video;
    if (!videoSrc) return;

    localStorage.setItem("localVideoSrc", videoSrc);
    localStorage.removeItem("movieToWatch");
    window.location.href = "originals.html";
});