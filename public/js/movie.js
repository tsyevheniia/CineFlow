const user = localStorage.getItem("actualUser");
const apiKey = "AIzaSyBCdqAAUk5tEuwoVqm2s-XbYIpKbvZ1cuw";
const movieToWatch = localStorage.getItem("movieToWatch");
const btnLogOut = document.getElementById("logOutBtn");
const trailerContainer = document.getElementById("trailerContainer");
const query = `${movieToWatch} trailer`;

if (!user) {
    window.location.href = "index.html";
} else {
    document.body.style.display = "block";
}

btnLogOut.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("actualUser");
    window.location.href = "index.html";
});

const searchOnYoutube = async () => {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&type=video&maxResults=1`
        );

        if (!response.ok) return;

        const data = await response.json();
        showResult(data.items);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const showResult = (items) => {
    trailerContainer.innerHTML = "";

    if (!items || items.length === 0) {
        trailerContainer.innerHTML = "<p>No trailer available.</p>";
        return;
    }

    const firstItem = items[0];
    const videoUrl = `https://www.youtube.com/embed/${firstItem.id.videoId}`;

    const iframe = document.createElement("iframe");
    iframe.src = videoUrl;
    iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    trailerContainer.appendChild(iframe);
};

searchOnYoutube();