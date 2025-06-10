const activatedTopRatedTvShowsContainer = document.getElementById('activatedTopRatedTvSeries');
const tvShowsTopRatedContainer = document.getElementById('topRatedTvSeries');
const tvShowsTopRatedContainer3 = document.getElementById('topRatedTvSeries3');
const tvShowsTopRatedContainer4 = document.getElementById('topRatedTvSeries4');
const tvShowsTopRatedContainer5 = document.getElementById('topRatedTvSeries5');
const activatedNowPlayingContainer = document.getElementById('activatedNowPlayingTvSeries');
const nowPlayingContainer = document.getElementById('nowPlayingTvSeries');
const nowPlayingContainer3 = document.getElementById('nowPlayingTvSeries3');
const nowPlayingContainer4 = document.getElementById('nowPlayingTvSeries4');
const nowPlayingContainer5 = document.getElementById('nowPlayingTvSeries5');
const activatedUpcomingTvSeriesContainer = document.getElementById('activatedUpcomingTvSeries');
const upcomingTvSeriesContainer = document.getElementById('upcomingTvSeries');
const upcomingTvSeriesContainer3 = document.getElementById('upcomingTvSeries3');
const upcomingTvSeriesContainer4 = document.getElementById('upcomingTvSeries4');
const upcomingTvSeriesContainer5 = document.getElementById('upcomingTvSeries5');
const activatedPopularTvSeriesContainer = document.getElementById('activatedPopularTvSeries');
const popularTvSeriesContainer = document.getElementById('popularTvSeries');
const popularTvSeriesContainer3 = document.getElementById('popularTvSeries3');
const popularTvSeriesContainer4 = document.getElementById('popularTvSeries4');
const popularTvSeriesContainer5 = document.getElementById('popularTvSeries5');
const imageUrl = 'https://image.tmdb.org/t/p/w500/';


const showOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzc2MDljYzExMGM5NjgwZDhhMGNjMGVjNTJkMDI5YiIsIm5iZiI6MTc0NDAzODc2NC44MDQsInN1YiI6IjY3ZjNlYjZjNmMzNTgzYzk3NTk5MzVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8dsabqerc-bpXrjFYtlPGbNt3VQb27YltuN5f5REcks'
    }
};

const getTopRatedTvSeries = function () {
    return fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', showOptions)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}
const getNowPlayingTvSeries = function () {
    return fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=2', showOptions)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}
const getUpcomingTvSeries = function () {
    return fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', showOptions)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}
const getPopularTvSeries = function () {
    return fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', showOptions)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}

const renderTopRatedTvSeries = async function () {
    const data = await getTopRatedTvSeries();
    data.slice(0, 4).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
            <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
           </div>
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        activatedTopRatedTvShowsContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(4, 8).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        tvShowsTopRatedContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(8, 12).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        tvShowsTopRatedContainer3.insertAdjacentHTML('beforeend', html)
    })
    data.slice(12, 16).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        tvShowsTopRatedContainer4.insertAdjacentHTML('beforeend', html)
    })
    data.slice(16, 20).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        tvShowsTopRatedContainer5.insertAdjacentHTML('beforeend', html)
    })
}
renderTopRatedTvSeries()
const renderNowPlayingTvSeries = async function () {
    const data = await getNowPlayingTvSeries();
    data.slice(0, 4).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        activatedNowPlayingContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(4, 8).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
            <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        nowPlayingContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(8, 12).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        nowPlayingContainer3.insertAdjacentHTML('beforeend', html)
    })
    data.slice(12, 16).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
            <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        nowPlayingContainer4.insertAdjacentHTML('beforeend', html)
    })
    data.slice(16, 20).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        nowPlayingContainer5.insertAdjacentHTML('beforeend', html)
    })
}
renderNowPlayingTvSeries()
const renderUpcomingTvSeries = async function () {
    const data = await getUpcomingTvSeries();
    data.slice(0, 4).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
              <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        activatedUpcomingTvSeriesContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(4, 8).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
            <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        upcomingTvSeriesContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(8, 12).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
           
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
            <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        upcomingTvSeriesContainer3.insertAdjacentHTML('beforeend', html)
    })
    data.slice(12, 16).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
            <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
                <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        upcomingTvSeriesContainer4.insertAdjacentHTML('beforeend', html)
    })
    data.slice(16, 20).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
                <p class="card-text">${show.overvieshowngth > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        upcomingTvSeriesContainer5.insertAdjacentHTML('beforeend', html)
    })
}
renderUpcomingTvSeries()
const renderPopularTvSeries = async function () {
    const data = await getPopularTvSeries();
    data.slice(0, 4).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
            <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        activatedPopularTvSeriesContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(4, 8).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
             <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
              <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        popularTvSeriesContainer.insertAdjacentHTML('beforeend', html)
    })
    data.slice(8, 12).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
            </div>
             <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        popularTvSeriesContainer3.insertAdjacentHTML('beforeend', html)
    })
    data.slice(12, 16).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
           </div>
             <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
            <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        popularTvSeriesContainer4.insertAdjacentHTML('beforeend', html)
    })
    data.slice(16, 20).forEach(show => {
        html = `
         <div class="card mb-4">
           <div class="img-wrapper">
           <img src="${imageUrl}${show.poster_path}" class="card-img-top" alt="...">
           </div>        
           <a class="shows btn btn-primary mt-2" data-name="${show.name}">Watch Now</a>
           <div class="card-body p-0 pt-3">
             <h5 class="card-title">${show.name}</h5>
            <p class="card-text">${show.overview.length > 350 
                ? show.overview.slice(0, 350).split(' ').slice(0, -1).join(' ').replace(/[.,!?;:]$/, '') + '...'
                : show.overview}</p>
           </div>
         </div>`;
        popularTvSeriesContainer5.insertAdjacentHTML('beforeend', html)
    })
}
renderPopularTvSeries()

document.addEventListener('click', function (event) {
    if (event.target && event.target.matches('a.shows')) {
        event.preventDefault()
        localStorage.setItem('movieToWatch', event.target.dataset.name);
        window.location.href = 'movie.html';
    }
})
