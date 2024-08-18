const API_KEY = '384b130a';


const header = document.getElementById('header');
header.innerHTML = `
<div class="navbar bg-base-100">
    <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="../index.html">Home</a>
    <a class="btn btn-ghost text-xl" href="./index.html">Mini IMDB</a>
    <a class="btn btn-ghost text-xl" href="./favorites.html">favourites</a>
    </div>
</div>
`;


// Home Page JavaScript
if (document.getElementById('search')) {
    const searchInput = document.getElementById('search');
    const resultsContainer = document.getElementById('results');

    searchInput.addEventListener('input', debounce(searchMovies, 300));

    function debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    }
    resultsContainer.innerHTML = '<p class="mt-5">Search for a movie!</p>';

    async function searchMovies() {
        const query = searchInput.value.trim();
        if (!query) return;
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
        const data = await response.json();
        displayResults(data.Search || []);
    }

    function displayResults(movies) {
        if (movies.length === 0) {
            resultsContainer.innerHTML = '<p>Loading...</p>';
        } else {
            resultsContainer.innerHTML = movies.map(movie => `
        <div
             class="flex flex-row bg-base-300 hover:brightness-110 w-96 justify-between hover:shadow-md rounded-xl m-5 p-5">
            <img src="${movie.Poster}" alt="${movie.Title}" class='h-28 rounded-lg'>
            <div class='flex flex-col justify-around items-end'>
                <a href="movie.html?id=${movie.imdbID}" class='hover:underline'>
                    <h2 class='text-semibold text-lg'>${movie.Title}</h2>
                </a>
                <button class='btn w-fit btn-accent' id='fav-btn' onclick="addToFavorites('${movie.imdbID}')">Favorite</button>
            </div>
        </div>
    `).join('');
        }
    }

    function addToFavorites(imdbID) {
        const a = document.getElementById('fav-btn')
        a.innerHTML = 'Added'
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.includes(imdbID)) {
            favorites.push(imdbID);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }
}

// Movie Page JavaScript
if (document.getElementById('movie-details')) {
    const movieDetailsContainer = document.getElementById('movie-details');
    const urlParams = new URLSearchParams(window.location.search);
    const imdbID = urlParams.get('id');

    async function getMovieDetails() {
        const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
        const movie = await response.json();
        displayMovieDetails(movie);
    }

    function displayMovieDetails(movie) {
        movieDetailsContainer.innerHTML = `
        <div class='flex flex-row w-2/3 justify-center m-5 p-5'>
        <img class='h-64 rounded-xl' src="${movie.Poster}" alt="${movie.Title}">
        <div class='flex flex-col gap-3 m-5'>
            <h2 class='text-xl font-bold'>${movie.Title}</h2>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Year:</strong> ${movie.Year}</p>
            <button class='btn w-fit btn-accent' id='fav-btn' onclick="addToFavorites('${movie.imdbID}')">Favorite</button>
        </div>
        </div>
        `;
    }

    function addToFavorites(imdbID) {
        const a = document.getElementById('fav-btn')
        a.innerHTML = 'Added'
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.includes(imdbID)) {
            favorites.push(imdbID);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }

    getMovieDetails();
}

// Favorites Page JavaScript
if (document.getElementById('favorites')) {
    const favoritesContainer = document.getElementById('favorites');

    function displayFavorites() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.length === 0) {
            favoritesContainer.innerHTML = '<p>No favorites yet.</p>';
            return;
        }
        const promises = favorites.map(id => fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`).then(response => response.json()));
        Promise.all(promises).then(movies => {
            favoritesContainer.innerHTML = movies.map(movie => `
            <div class="flex flex-row bg-base-300 hover:brightness-110 w-96 justify-between hover:shadow-md rounded-xl m-5 p-5">
            <img src="${movie.Poster}" alt="${movie.Title}" class='h-40 rounded-lg'>
            <div class='flex flex-col justify-around items-end'>
                <a href="movie.html?id=${movie.imdbID}" class='hover:underline'>
                    <h2 class='text-semibold text-lg'>${movie.Title}</h2>
                </a>
                <button class='btn w-fit btn-outline btn-error z-59' id='removal-btn' onclick="removeFromFavorites('${movie.imdbID}')">Remove</button>
            </div>
            </div>
      `).join('');
        });
    }

    function removeFromFavorites(imdbID) {
        const a = document.getElementById('removal-btn')
        a.innerHTML = 'removed'
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites = favorites.filter(id => id !== imdbID);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        displayFavorites();
    }

    displayFavorites();
}
