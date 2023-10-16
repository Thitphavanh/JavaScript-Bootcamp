const apiKey = "a9b299759e64ff7b27a777f974a7ce1b";
let years = "2023";
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc&year=${years}`;
const urlPoster = `https://image.tmdb.org/t/p/w500/`;

const content = document.getElementById("content");
const dropdown = document.getElementById("years");

async function displayMovie(url) {
  const response = await fetch(url);
  const moviesAPI = await response.json();

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  moviesAPI.results.forEach((data) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    const title = document.createElement("h2");
    const imagePoster = document.createElement("img");
    title.innerHTML = `${data.title.substring(0, 24)}`;
    imagePoster.src = `${urlPoster}${data.poster_path}`;
    movieElement.appendChild(title);
    movieElement.appendChild(imagePoster);
    content.appendChild(movieElement);
  });
}

dropdown.addEventListener("change", () => {
  years = dropdown.value;

  const updateUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc&year=${years}`;
  displayMovie(updateUrl);
});
displayMovie(url);
