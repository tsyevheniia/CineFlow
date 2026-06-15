const movieContainer = document.getElementById('movieContainer');
const inputSearch = document.getElementById('inputSearch');
const searchError = document.getElementById('searchError');
const url = 'https://image.tmdb.org/t/p/original/';
const btnLogOut = document.getElementById('logOutBtn');

document.body.style.display = "none";

document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("actualUser");
    if (!user) {
        window.location.href = "index.html";
        return;
    }
    document.body.style.display = "block";
});

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        renderMovieContainer();
    }
});

btnLogOut.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("actualUser");
    window.location.href = "index.html";
});

inputSearch.addEventListener("input", () => {
    searchError.style.display = "none";
});

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzc2MDljYzExMGM5NjgwZDhhMGNjMGVjNTJkMDI5YiIsIm5iZiI6MTc0NDAzODc2NC44MDQsInN1YiI6IjY3ZjNlYjZjNmMzNTgzYzk3NTk5MzVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8dsabqerc-bpXrjFYtlPGbNt3VQb27YltuN5f5REcks'
    }
};

const getMovie = () => {
    return fetch(
        `https://api.themoviedb.org/3/search/multi?query=${inputSearch.value}&include_adult=false&language=en-US&page=1`,
        options
    )
        .then(res => res.json())
        .then(res => res.results[0])
        .catch(() => undefined);
};

const renderMovieContainer = async () => {
    const data = await getMovie();
    if (!inputSearch.value || !data || data.media_type === 'person') {
        searchError.style.display = "block";
        inputSearch.value = "";
        movieContainer.innerHTML = "";
        return;
    }
    searchError.style.display = "none";
    const name = data.name ?? data.original_title;
    localStorage.setItem('movieToWatch', name);
    movieContainer.innerHTML = `
        <div class="row">
            <div class="col-lg-10 mb-4 col-12">
                <div class="card border-0 rounded-3 overflow-hidden">
                    <div class="row g-0">
                        <div class="col-4 d-flex align-items-center">
                            <img src="${url}${data.poster_path}" class="img-fluid rounded-start shadow">
                        </div>
                        <div class="col-8 p-4 d-flex flex-column justify-content-center">
                            <h5 class="text-primary fs-1">
                                ${data.media_type === 'movie' ? data.title : data.name}
                            </h5>
                            <p class="text-light">${data.overview}</p>
                            <p class="text-light">
                                <span class="text-primary fw-bold">Data premiery:</span>
                                ${data.media_type === 'movie' ? data.release_date : data.first_air_date}
                            </p>
                            <p class="text-light">
                                <span class="text-primary fw-bold">Ocena:</span> ${data.vote_average}
                            </p>
                            <a href="movie.html" class="btn btn-primary mt-2">
                                Obejrzyj zwiastun
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> `; };