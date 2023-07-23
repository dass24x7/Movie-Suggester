let api_url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dac0ad0af831b693a8e9305d22c14483";

let img_path = "https://image.tmdb.org/t/p/w500";

let search_api = "https://api.themoviedb.org/3/movie?api_key=dac0ad0af831b693a8e9305d22c14483&query=";


async function getMovies(url) {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data.results)
    // console.log(data.results)
}

getMovies(api_url)


let main = document.getElementById("main")
function showMovies(movieData) {
    main.innerHTML= ``;

    movieData.forEach((movie) => {
        const {title, poster_path, vote_average, overview} = movie
        let movieEl = document.createElement("div")
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <img src="${img_path + poster_path}" alt="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
        </div> `;
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}