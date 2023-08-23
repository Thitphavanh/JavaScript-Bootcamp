const count = 10;
const apiKey = "xLUJlBVqPS529pYsZh3mtdcv9hbGg6gO1ekyK2Y3W2w";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
const imageCountainer = document.getElementById("img-container");
let photoArrays = [];

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArrays = await response.json();
    console.log(photoArrays);
  } catch (err) {
    console.log(err);
  }
}

getPhotos();
