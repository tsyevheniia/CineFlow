let apiKey = "AIzaSyBCdqAAUk5tEuwoVqm2s-XbYIpKbvZ1cuw";
const movieToWatch = JSON.parse(localStorage.getItem('movieToWatch'));
const query = `${movieToWatch} trailer`;
const trailerContainer = document.getElementById('trailerContainer');
async function searchOnYoutube() {
    console.log('hello');
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&type=video&maxResults=1`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.items)
        showResult(data.items);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
function showResult(items) {
    trailerContainer.innerHTML = "";
    items.forEach((item) => {
        const videoUrl = `https://www.youtube.com/embed/${item.id.videoId}`;

        const iframe = document.createElement("iframe");
        iframe.src = videoUrl;
        iframe.style.width = "70vw";
        iframe.style.height = "70vh";
        iframe.style.border = "none";
        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        trailerContainer.appendChild(iframe);
    });
}
searchOnYoutube()