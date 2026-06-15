const user = localStorage.getItem("actualUser");

if (!user) {
    window.location.href = "index.html";
} else {
    document.body.style.display = "block";
}

const imageUrl = "https://image.tmdb.org/t/p/w500/";
const btnLogOut = document.getElementById("logOutBtn");

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzc2MDljYzExMGM5NjgwZDhhMGNjMGVjNTJkMDI5YiIsIm5iZiI6MTc0NDAzODc2NC44MDQsInN1YiI6IjY3ZjNlYjZjNmMzNTgzYzk3NTk5MzVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8dsabqerc-bpXrjFYtlPGbNt3VQb27YltuN5f5REcks",
    },
};

btnLogOut.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("actualUser");
    window.location.href = "index.html";
});

const fetchShows = (url) =>
    fetch(url, options)
        .then((res) => res.json())
        .then((res) => res.results || [])
        .catch((err) => {
            console.error(err);
            return [];
        });

const createShowCard = (show) => {
    const title = show.name || "Bez tytułu";
    const description =
        show.overview && show.overview.trim() !== ""
            ? show.overview
            : "Opis niedostępny.";
    const year = show.first_air_date
        ? show.first_air_date.slice(0, 4)
        : "Brak danych";
    const rating =
        typeof show.vote_average === "number"
            ? show.vote_average.toFixed(1)
            : "Brak danych";
    const poster = show.poster_path
        ? `${imageUrl}${show.poster_path}`
        : "";
    return `
        <div class="card mb-4">
            <div class="img-wrapper position-relative" data-title="${title}">
                <img src="${poster}" class="card-img-top" alt="${title}">
                <i class="bi bi-play-circle fs-1 position-absolute opacity-50 play-icon"
                   data-title="${title}"></i>
                <i class="bi bi-info-circle fs-6 position-absolute opacity-50 info-icon"
                   data-title="${title}"
                   data-description="${description}"
                   data-poster="${poster}"
                   data-rating="${rating}"
                   data-year="${year}"></i>
            </div>
            <div class="card-body p-0 pt-2">
                <h5 class="card-title">${title}</h5>
                <p class="card-text tv-description fs-6">${description}</p>
            </div>
        </div>`;
};

const renderToContainers = (shows, containerIds) => {
    let index = 0;

    containerIds.forEach((id) => {
        const container = document.getElementById(id);
        if (!container) return;

        shows.slice(index, index + 4).forEach((show) => {
            container.insertAdjacentHTML(
                "beforeend",
                createShowCard(show)
            );
        });

        index += 4;
    });
};

const initCarouselSection = async (url, containerIds) => {
    const shows = await fetchShows(url);
    if (!shows.length) return;
    renderToContainers(shows, containerIds);
};

initCarouselSection(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    ["activatedTopRatedTvSeries", "topRatedTvSeries", "topRatedTvSeries3", "topRatedTvSeries4", "topRatedTvSeries5"]
);

initCarouselSection(
    "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
    ["activatedNowPlayingTvSeries", "nowPlayingTvSeries", "nowPlayingTvSeries3", "nowPlayingTvSeries4", "nowPlayingTvSeries5"]
);

initCarouselSection(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    ["activatedUpcomingTvSeries", "upcomingTvSeries", "upcomingTvSeries3", "upcomingTvSeries4", "upcomingTvSeries5"]
);

initCarouselSection(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    ["activatedPopularTvSeries", "popularTvSeries", "popularTvSeries3", "popularTvSeries4", "popularTvSeries5"]
);

document.querySelectorAll(".carousel").forEach((carousel) => {
    new bootstrap.Carousel(carousel, {
        interval: 7000,
        pause: false,
        ride: "carousel",
    });
});

document.addEventListener("click", (e) => {
    const infoIcon = e.target.closest(".info-icon");
    if (infoIcon) {
        const modalEl = document.getElementById("movieInfoModal");
        if (!modalEl) return;

        document.getElementById("modalTitle").textContent =
            infoIcon.dataset.title;
        document.getElementById("modalDescription").textContent =
            infoIcon.dataset.description;
        document.getElementById("modalRating").textContent =
            infoIcon.dataset.rating;
        document.getElementById("modalRelease").textContent =
            infoIcon.dataset.year;

        const poster = document.getElementById("modalPoster");
        poster.src = infoIcon.dataset.poster;
        poster.alt = infoIcon.dataset.title;

        const watchBtn = document.getElementById("modalWatchBtn");
        watchBtn.onclick = () => {
            localStorage.setItem(
                "movieToWatch",
                infoIcon.dataset.title
            );
            localStorage.removeItem("localVideoSrc");
            window.location.href = "movie.html";
        };

        new bootstrap.Modal(modalEl).show();
        return;
    }

    const playTarget = e.target.closest(".play-icon, .img-wrapper");
    if (playTarget) {
        const title = playTarget.dataset.title;
        if (!title) return;

        localStorage.setItem("movieToWatch", title);
        localStorage.removeItem("localVideoSrc");
        window.location.href = "movie.html";
    }
});