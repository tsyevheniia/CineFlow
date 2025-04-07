const activatedFilmsContainer = document.getElementById('activatedFilms');
const filmsContainer = document.getElementById('films');
const filmsContainer3 = document.getElementById('3films');
const filmsContainer4 = document.getElementById('4films');
const filmsContainer5 = document.getElementById('5films');
const url = 'https://image.tmdb.org/t/p/w500/';



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


const renderTopRatedFilms = async function () {
    const data = await getTopRatedFilms();
    data.slice(0,4).forEach(film => {
        html = `
         <div class="card mx-4" style="width: 16rem;">
           <img src="${url}${film.poster_path}" class="card-img-top" alt="...">
           <a href="#" class="btn btn-primary">Go somewhere</a>
           <div class="card-body">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview}</p>
           </div>
         </div>`;
        activatedFilmsContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(4,8).forEach(film => {
        html = `
         <div class="card mx-4" style="width: 16rem;">
           <img src="${url}${film.poster_path}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`;
        filmsContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(8,12).forEach(film => {
        html = `
         <div class="card mx-4" style="width: 16rem;">
           <img src="${url}${film.poster_path}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`;
        filmsContainer3.insertAdjacentHTML('beforeend', html)
    })
    data.slice(12,16).forEach(film => {
        html = `
         <div class="card mx-4" style="width: 16rem;">
           <img src="${url}${film.poster_path}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`;
        filmsContainer4.insertAdjacentHTML('beforeend', html)
    })
    data.slice(16,20).forEach(film => {
        html = `
         <div class="card mx-4" style="width: 16rem;">
           <img src="${url}${film.poster_path}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`;
        filmsContainer5.insertAdjacentHTML('beforeend', html)
    })
}
renderTopRatedFilms()
const renderNowPlayingFilms = async function () {
    const data = await getNowPlayingFilms();
    data.slice(0,4).forEach(film => {
        html = `
         <div class="card mx-4" style="width: 16rem;">
           <img src="${url}${film.poster_path}" class="card-img-top" alt="...">
           <a href="#" class="btn btn-primary">Go somewhere</a>
           <div class="card-body">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview}</p>
           </div>
         </div>`;
        activatedFilmsContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(4,8).forEach(film => {
        html = `
         <div class="card mx-4" style="width: 16rem;">
           <img src="${url}${film.poster_path}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`;
        filmsContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(8,12).forEach(film => {
        html = `
         <div class="card mx-4" style="width: 16rem;">
           <img src="${url}${film.poster_path}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`;
        filmsContainer3.insertAdjacentHTML('beforeend', html)
    })
    data.slice(12,16).forEach(film => {
        html = `
         <div class="card mx-4" style="width: 16rem;">
           <img src="${url}${film.poster_path}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`;
        filmsContainer4.insertAdjacentHTML('beforeend', html)
    })
    data.slice(16,20).forEach(film => {
        html = `
         <div class="card mx-4" style="width: 16rem;">
           <img src="${url}${film.poster_path}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${film.title}</h5>
             <p class="card-text">${film.overview}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`;
        filmsContainer5.insertAdjacentHTML('beforeend', html)
    })
}
renderNowPlayingFilms()