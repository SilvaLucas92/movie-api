window.addEventListener('load', () => {
    const moviesMain = document.getElementById('main');
    const inputSearch = document.getElementById('search');
    const formSearch = document.getElementById('form');
    const imgPath = 'https://image.tmdb.org/t/p/w1280';
    const allMovies = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
    const searchMovies = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
    
    
    const getMovies = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => showMovies(data.results))
            .catch(err => console.log(err))
    };

    getMovies(allMovies);
    
    const searchMovie = (movie) => {
        fetch()
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    };

    const showMovies = (movies) => {
        moviesMain.innerHTML = ''
        movies.forEach(movie => {
            const movieEl = document.createElement('div')
            movieEl.classList.add('movie')
            movieEl.innerHTML = `
                <img src="${imgPath + movie.poster_path}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <span>${movie.vote_average}</span>
                </div>
                <div class="overview">  
                    <h3>Overview</h3>
                    ${movie.overview}
                </div>
            `
            moviesMain.appendChild(movieEl)
        })
    };

    formSearch.addEventListener('submit', (e) => {
        e.preventDefault();
        if(inputSearch.value.length > 0) {
            getMovies(searchMovies + inputSearch.value);
            inputSearch.value = '';
        }
    })

})