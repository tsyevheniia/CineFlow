const user = localStorage.getItem("actualUser");
const imageUrl = "https://image.tmdb.org/t/p/w500/";
const btnLogOut = document.getElementById("logOutBtn");

if (!user) {
    window.location.href = "index.html";
} else {
    document.body.style.display = "block";
}

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

const fetchFilms = (url) =>
    fetch(url, options)
        .then((res) => res.json())
        .then((res) => res.results)
        .catch((err) => console.error(err));

const createFilmCard = (film) => `
    <div class="card mb-4">
        <div class="img-wrapper position-relative" data-title="${film.title}">
            <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="${film.title}">
            <i class="bi bi-play-circle fs-1 position-absolute opacity-50 play-icon"
               data-title="${film.title}"></i>
            <i class="bi bi-info-circle fs-6 position-absolute opacity-50 info-icon"
               data-title="${film.title}"
               data-description="${film.overview && film.overview.trim() !== "" ? film.overview : "Opis niedostępny."}"
               data-poster="${imageUrl}${film.poster_path}"
               data-rating="${film.vote_average.toFixed(1)}"
               data-year="${film.release_date.slice(0, 4)}"></i>
        </div>
        <div class="card-body p-0 pt-2">
            <h5 class="card-title">${film.title}</h5>
            <p class="card-text tv-description fs-6">
                ${film.overview && film.overview.trim() !== "" ? film.overview : "Opis niedostępny."}
            </p>
        </div>
    </div>
`;
const renderToContainers = (films, containerIds) => {
    let index = 0;
    containerIds.forEach((id) => {
        const container = document.getElementById(id);
        if (!container) return;

        films.slice(index, index + 4).forEach((film) => {
            container.insertAdjacentHTML("beforeend", createFilmCard(film));
        });

        index += 4;
    });
};

const initCarouselSection = async (url, containerIds) => {
    const films = await fetchFilms(url);
    if (!films || !films.length) return;
    renderToContainers(films, containerIds);
};

initCarouselSection(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    ["activatedTopRatedFilms", "topRatedFilms", "topRatedFilms3", "topRatedFilms4", "topRatedFilms5"]
);

initCarouselSection(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    ["activatedNowPlayingFilms", "nowPlayingFilms", "nowPlayingFilms3", "nowPlayingFilms4", "nowPlayingFilms5"]
);

initCarouselSection(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    ["activatedUpcomingFilms", "upcomingFilms", "upcomingFilms3", "upcomingFilms4", "upcomingFilms5"]
);

initCarouselSection(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
    ["activatedPopularFilms", "popularFilms", "popularFilms3", "popularFilms4", "popularFilms5"]
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
        const modalElement = document.getElementById("movieInfoModal");
        if (!modalElement) return;

        const { title, description, poster, rating, year } = infoIcon.dataset;

        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalDescription").textContent = description;
        document.getElementById("modalPoster").src = poster;
        document.getElementById("modalPoster").alt = title;
        document.getElementById("modalRating").textContent = rating;
        document.getElementById("modalRelease").textContent = year;

        const watchBtn = document.getElementById("modalWatchBtn");
        watchBtn.onclick = () => {
            localStorage.setItem("movieToWatch", title);
            localStorage.removeItem("localVideoSrc");
            window.location.href = "movie.html";
        };

        new bootstrap.Modal(modalElement).show();
        return;
    }

    const playableTarget = e.target.closest(".play-icon, .img-wrapper");
    if (playableTarget) {
        const title = playableTarget.dataset.title;
        if (!title) return;

        localStorage.setItem("movieToWatch", title);
        localStorage.removeItem("localVideoSrc");
        window.location.href = "movie.html";
    }
});