const movieForm = document.querySelector(".movieForm");
const formInput = document.querySelector(".formInput");
const resultsContainer = document.querySelector(".resultsContainer");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modalContent");
const apikey = "841cb645"; // Replace with your actual API key

movieForm.addEventListener("submit", async event => {
    event.preventDefault();
    const query = formInput.value.trim();
    if (query) {
        try {
            const movieData = await fetchMovies(query);
            displayMovies(movieData);
        } catch (err) {
            console.error(err);
            displayError("Unable to fetch movie data");
        }
    }
});

async function fetchMovies(query) {
    const apiURL = `https://www.omdbapi.com/?s=${query}&apikey=${apikey}`;
    const response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }
    return await response.json();
}

function displayMovies(data) {
    resultsContainer.innerHTML = "";
    if (data.Response === "True") {
        data.Search.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movieCard");
            movieCard.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <div class="info">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                    <button onclick="showDetails('${movie.imdbID}')">More Info</button>
                </div>
            `;
            resultsContainer.appendChild(movieCard);
        });
    } else {
        displayError("No movies found");
    }
}
async function showDetails(imdbID) {
    console.log(`Fetching details for IMDb ID: ${imdbID}`); // Debug statement
    const apiURL = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`;
    const response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    console.log(data); // Debug statement
    displayMovieDetails(data);
}

function displayMovieDetails(movie) {
    if (modalContent) { // Check if modalContent is not null
        modalContent.innerHTML = `
            <h2>${movie.Title} (${movie.Year})</h2>
            <img src="${movie.Poster}" alt="${movie.Title}">
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <button onclick="closeModal()">Close</button>
        `;
        modal.style.display = "flex";
    } else {
        console.error("modalContent is null");
    }
}

function closeModal() {
    modal.style.display = "none";
}

function displayError(message) {
    resultsContainer.innerHTML = `<p class="errorDisplay">${message}</p>`;
}
