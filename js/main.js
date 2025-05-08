const movieContainer = document.getElementById('movieContainer');
const url = 'https://image.tmdb.org/t/p/original/';
const inputSearch = document.getElementById('inputSearch');
const modalBtn = document.getElementById('modalBtn');
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        renderMovieContainer()
    }
})

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzc2MDljYzExMGM5NjgwZDhhMGNjMGVjNTJkMDI5YiIsIm5iZiI6MTc0NDAzODc2NC44MDQsInN1YiI6IjY3ZjNlYjZjNmMzNTgzYzk3NTk5MzVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8dsabqerc-bpXrjFYtlPGbNt3VQb27YltuN5f5REcks'
    }
};
const getMovie = function () {
    return fetch(`https://api.themoviedb.org/3/search/multi?query=${inputSearch.value}&include_adult=false&language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => res.results[0])
        .catch(err => console.error(err));
}

const renderMovieContainer = async function () {
    let data = await getMovie();
    if (inputSearch.value === "" || data === undefined) {
        alert("Wrong Name of Movie! Try Again!");
        return
    }
    localStorage.setItem('movieToWatch', JSON.stringify(data.name))
    let html = `
    <div class="row justify-content-center">
        <div class="col-lg-10 mb-4 col-12">
            <div class="card border-0 rounded-3 overflow-hidden" style="background-color: #1a1a1a; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5); width: 100%">
                <div class="row g-0">
                    <div class="col-4 d-flex align-items-center">
                        <img alt="" src="${url}${data.poster_path}" class="img-fluid rounded-start shadow">
                    </div>
                    <div class="col-8 p-4 d-flex flex-column justify-content-center">
                        <h5 class="text-primary fs-1">${data.media_type === 'movie' ? data.title : data.name}</h5>
                        <p class="text-light">${data.overview}</p>
                        <p class="text-light"><span class="text-primary fw-bold">Release Date:</span> ${data.media_type === 'movie' ? data.release_date : data.first_air_date}</p>
                        <p class="text-light"><span class="text-primary fw-bold">Rating:</span> ${data.vote_average}</p>
                        <a href="movie.html" class="btn btn-primary mt-2" id="watchBtn">Watch Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    inputSearch.value = '';
    movieContainer.innerHTML = html;
}

const renderModalWindow = () => {
    const actualUser = JSON.parse(localStorage.getItem('actualUser'));
    const modalText = document.getElementById('modalUserText');

    if (actualUser) {
        modalText.innerHTML = `
            <p><strong>UserName:</strong> ${actualUser.name}</p>
            <p><strong>Email:</strong> ${actualUser.email}</p>
            <p><strong>Date of Registration:</strong> ${actualUser.date}</p>
        `;
    } else {
        modalText.innerHTML = `<p>No user information available. Please log in.</p>`;
    }
};

modalBtn.addEventListener('click', renderModalWindow);