const activatedTopRatedFilmsContainer = document.getElementById('activatedTopRatedFilms');
const filmsTopRatedContainer = document.getElementById('topRatedFilms');
const filmsTopRatedContainer3 = document.getElementById('topRatedFilms3');
const filmsTopRatedContainer4 = document.getElementById('topRatedFilms4');
const filmsTopRatedContainer5 = document.getElementById('topRatedFilms5');
const activatedNowPlayingContainer = document.getElementById('activatedNowPlayingFilms');
const nowPlayingContainer = document.getElementById('nowPlayingFilms');
const nowPlayingContainer3 = document.getElementById('nowPlayingFilms3');
const nowPlayingContainer4 = document.getElementById('nowPlayingFilms4');
const nowPlayingContainer5 = document.getElementById('nowPlayingFilms5');
const activatedUpcomingFilmsContainer = document.getElementById('activatedUpcomingFilms');
const upcomingFilmsContainer = document.getElementById('upcomingFilms');
const upcomingFilmsContainer3 = document.getElementById('upcomingFilms3');
const upcomingFilmsContainer4 = document.getElementById('upcomingFilms4');
const upcomingFilmsContainer5 = document.getElementById('upcomingFilms5');
const activatedPopularFilmsContainer = document.getElementById('activatedPopularFilms');
const popularFilmsContainer = document.getElementById('popularFilms');
const popularFilmsContainer3 = document.getElementById('popularFilms3');
const popularFilmsContainer4 = document.getElementById('popularFilms4');
const popularFilmsContainer5 = document.getElementById('popularFilms5');
const imageUrl = 'https://image.tmdb.org/t/p/w500/';
let allFilms = [];


const optionsTopRated = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzc2MDljYzExMGM5NjgwZDhhMGNjMGVjNTJkMDI5YiIsIm5iZiI6MTc0NDAzODc2NC44MDQsInN1YiI6IjY3ZjNlYjZjNmMzNTgzYzk3NTk5MzVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8dsabqerc-bpXrjFYtlPGbNt3VQb27YltuN5f5REcks'
    }
};
const optionsNowPlaying = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzc2MDljYzExMGM5NjgwZDhhMGNjMGVjNTJkMDI5YiIsIm5iZiI6MTc0NDAzODc2NC44MDQsInN1YiI6IjY3ZjNlYjZjNmMzNTgzYzk3NTk5MzVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8dsabqerc-bpXrjFYtlPGbNt3VQb27YltuN5f5REcks'
    }
};
const optionsUpcoming = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzc2MDljYzExMGM5NjgwZDhhMGNjMGVjNTJkMDI5YiIsIm5iZiI6MTc0NDAzODc2NC44MDQsInN1YiI6IjY3ZjNlYjZjNmMzNTgzYzk3NTk5MzVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8dsabqerc-bpXrjFYtlPGbNt3VQb27YltuN5f5REcks'
    }
};
const optionsPopular = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzc2MDljYzExMGM5NjgwZDhhMGNjMGVjNTJkMDI5YiIsIm5iZiI6MTc0NDAzODc2NC44MDQsInN1YiI6IjY3ZjNlYjZjNmMzNTgzYzk3NTk5MzVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8dsabqerc-bpXrjFYtlPGbNt3VQb27YltuN5f5REcks'
    }
};
const getTopRatedFilms = function () {
    return fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', optionsTopRated)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}
const getNowPlayingFilms = function () {
    return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', optionsNowPlaying)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}
const getUpcomingFilms = function () {
    return fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', optionsUpcoming)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}
const getPopularFilms = function () {
    return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', optionsPopular)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}

const renderTopRatedFilms = async function () {
    const data = await getTopRatedFilms();
    allFilms.push(data)
    data.slice(0, 4).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        activatedTopRatedFilmsContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(4, 8).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        filmsTopRatedContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(8, 12).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        filmsTopRatedContainer3.insertAdjacentHTML('beforeend', html)
    })
    data.slice(12, 16).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        filmsTopRatedContainer4.insertAdjacentHTML('beforeend', html)
    })
    data.slice(16, 20).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        filmsTopRatedContainer5.insertAdjacentHTML('beforeend', html)
    })
}
renderTopRatedFilms()
const renderNowPlayingFilms = async function () {
    const data = await getNowPlayingFilms();
    allFilms.push(data)
    data.slice(0, 4).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        activatedNowPlayingContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(4, 8).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
             <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        nowPlayingContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(8, 12).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        nowPlayingContainer3.insertAdjacentHTML('beforeend', html)
    })
    data.slice(12, 16).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
             <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        nowPlayingContainer4.insertAdjacentHTML('beforeend', html)
    })
    data.slice(16, 20).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        nowPlayingContainer5.insertAdjacentHTML('beforeend', html)
    })
}
renderNowPlayingFilms()
const renderUpcomingFilms = async function () {
    const data = await getUpcomingFilms();
    allFilms.push(data)
    data.slice(0, 4).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        activatedUpcomingFilmsContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(4, 8).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
             <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        upcomingFilmsContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(8, 12).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        upcomingFilmsContainer3.insertAdjacentHTML('beforeend', html)
    })
    data.slice(12, 16).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
             <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        upcomingFilmsContainer4.insertAdjacentHTML('beforeend', html)
    })
    data.slice(16, 20).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        upcomingFilmsContainer5.insertAdjacentHTML('beforeend', html)
    })
}
renderUpcomingFilms()
const renderPopularFilms = async function () {
    const data = await getPopularFilms();
    allFilms.push(data)
    console.log(allFilms)
    data.slice(0, 4).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
         <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
         </div>          
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        activatedPopularFilmsContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(4, 8).forEach(film => {
        html = `
         <div class="card mb-4">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="..." style="max-height: 350px">
             <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        popularFilmsContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(8, 12).forEach(film => {
        html = `
         <div class="card mb-4">
            <div class="img-wrapper">
            <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
            </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        popularFilmsContainer3.insertAdjacentHTML('beforeend', html)
    })
    data.slice(12, 16).forEach(film => {
        html = `
         <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
             <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        popularFilmsContainer4.insertAdjacentHTML('beforeend', html)
    })
    data.slice(16, 20).forEach(film => {
        html = `
        <div class="card mb-4">
         <div class="img-wrapper">
           <img src="${imageUrl}${film.poster_path}" class="card-img-top" alt="...">
           </div>
            <a class="movies btn btn-primary mt-2" data-name="${film.original_title}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview.length > 350 
                ? film.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : film.overview}</p>
           </div>
         </div>`;
        popularFilmsContainer5.insertAdjacentHTML('beforeend', html)
    })
}
renderPopularFilms()

document.addEventListener('click', function (event) {
    if (event.target && event.target.matches('a.movies')) {
        event.preventDefault()
        localStorage.setItem('movieToWatch', event.target.dataset.name);
        window.location.href = 'movie.html';
    }
})